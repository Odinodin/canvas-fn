(ns canvas-fn-snake.core
  (:require [domina :as dom]
            [canvas-fn-snake.canvas :as canv]
            [goog.events :as events]
            clojure.set
            [cljs.core.async :refer [chan <! >! put! close! timeout]]
            [quiescent.core :as q]
            [quiescent.dom :as d])
  (:require-macros [cljs.core.async.macros :refer [go go-loop alt!]]))

(enable-console-print!)

(def speed 5000)

(def colors {:grey-seethrough "rgba(110,110,110,0.6)"
             :dark-grey       "rgb(30,30,30)"
             :grey            "rgb(200,200,200)"
             :purple          "rgb(186,85,211)"
             :green           "rgb(90,180,100)"
             :dark-green      "rgb(50,200,80)"
             :red             "rgb(244,116,114)"
             :blue            "rgb(20,20,200)"})

(defn empty-board [rows cols]
  (-> (mapv vec (take rows (partition cols (repeat :empty))))))

;; Data to be drawn
(def width 20)
(def height 20)




(def initial-state {:game-running             true
                    :snake                    [[0 0] [0 1] [0 2]]
                    :snake-direction          :down
                    :previous-snake-direction :down
                    :cell-width               20
                    :apples                   #{}
                    :growing                  false
                    :board                    (empty-board width height)})

(def model (atom initial-state))

(defn reset-game! []
  (when (not (:game-running @model))
    (reset! model initial-state)))

;; Input
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(def charcode->keys
  {37 :left
   38 :up
   39 :right
   40 :down
   13 :enter})

(defn listen [el type]
  (let [out (chan)]
    (events/listen el type
                   (fn [e] (.preventDefault e) (put! out e)))
    out))

(defn opposite-directions? [direction1 direction2]
  (= direction1 ({:up    :down
                  :down  :up
                  :left  :right
                  :right :left} direction2)))

(defn turn-snake [model new-direction]
  (if (opposite-directions? (:previous-snake-direction model) new-direction)
    model
    (assoc model :snake-direction new-direction)))

;; Only setup once to avoid having to clean up event-handlers when reloading code
(defonce setup-keyboard-handler
         (let [clicks (listen js/document "keydown")]
           (go-loop [] (let [key-event (<! clicks)
                             char-code (.-keyCode key-event)
                             game-key (charcode->keys char-code)]
                         (when game-key
                           (case game-key
                             :enter (reset-game!)
                             (swap! model #(turn-snake % game-key)))
                           )
                         (recur)))))

;; Rendering
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defmulti draw-cell (fn [ctx cell-value x y cell-width] cell-value))

(defmethod draw-cell :empty [ctx cell-value x y cell-width]
  (canv/fill-square ctx [(* y cell-width) (* x cell-width)] (- cell-width 2) (:grey colors)))

(defmethod draw-cell :snake-head [ctx cell-value x y cell-width]
  (canv/fill-square ctx [(* y cell-width) (* x cell-width)] (- cell-width 2) (:dark-green colors
                                                                               )))

(defmethod draw-cell :snake-body [ctx cell-value x y cell-width]
  (canv/fill-square ctx [(* y cell-width) (* x cell-width)] (- cell-width 2) (:green colors)))

(defmethod draw-cell :apple [ctx cell-value x y cell-width]
  (canv/fill-square ctx [(* y cell-width) (* x cell-width)] (- cell-width 2) (:red colors)))

(defn draw-board [canvas model]
  (let [ctx (.getContext canvas "2d")
        board-with-snake (reduce (fn [board snake-coord] (assoc-in board snake-coord :snake-body)) (:board model) (:snake model))
        board-with-snake (assoc-in board-with-snake (last (:snake model)) :snake-head)
        board-with-apples-and-snakes (reduce (fn [board apple-coord] (assoc-in board apple-coord :apple)) board-with-snake (:apples model))
        cell-width (:cell-width model)]
    (doseq [[row-idx row] (map-indexed (fn [idx row] [idx row]) board-with-apples-and-snakes)]
      (doseq [[col-idx col] (map-indexed (fn [idx col] [idx col]) row)]
        (draw-cell ctx col col-idx row-idx cell-width)))))

(defn draw-text [canvas model]
  (when-not (:game-running model)
    (do
      (canv/fill-rect (.getContext canvas "2d") [5 90] 380 120 (:grey-seethrough colors))
      (canv/text-large (.getContext canvas "2d") [10 150] "GAME OVER" (:dark-grey colors))
      (canv/text-small (.getContext canvas "2d") [40 200] "Press enter to retry" (:dark-grey colors)))))

(defn render-canvas [canvas model]
  "Clears canvas and draws the model"
  (do
    (canv/init-canvas canvas)
    (draw-board canvas model)
    (draw-text canvas model)))

(defn next-coord [[x y] direction]
  (case direction
    :up [x (- y 1)]
    :down [x (+ y 1)]
    :right [(+ x 1) y]
    :left [(- x 1) y]))

(defn game-over? [model next-coord]
  "Check if the game is over"
  (or (some neg? next-coord)
      ((fn [[x _]] (>= x width)) next-coord)
      ((fn [[_ y]] (>= y height)) next-coord)
      (let [snake-head (-> model :snake last)]
        (> (count (filter #{snake-head} (:snake model)))
           1))))

(defn- move-snake-tail [model]
  (if-not (:growing model)
    (update-in model [:snake] (fn [x] (subvec x 1)))
    model))

(defn move-snake [model]
  (let [next (next-coord (-> model :snake last) (:snake-direction model))]
    (if (game-over? model next)
      (assoc model :game-running false)
      (-> model
          (assoc :previous-snake-direction (:snake-direction model))
          (update-in [:snake] (fn [x] (conj x next)))
          (move-snake-tail)
          (assoc :growing false)))))

(defn spawn-apple [model]
  (if (< (rand-int 100) 30)
    (let [all-coord-set (into #{} (for [x (range 0 width) y (range 0 height)] [x y]))
          snake-coord-set (into #{} (:snake model))
          available-coords (-> (clojure.set/difference all-coord-set snake-coord-set) vec)
          random-spawn-coord (get available-coords (-> (count available-coords) rand-int))]
      (update-in model [:apples] (fn [apples] (conj apples random-spawn-coord))))
    model))

(defn eat-apple [model]
  "Eat an apple if the snake head is on an apple"
  (let [snake-head (last (:snake model))
        apples (:apples model)]
    (if (contains? apples snake-head)
      (-> model
          (assoc :apples (disj apples snake-head))
          (assoc :growing true))
      model)))

(defn update-model [model]
  (if (:game-running model)
    (-> model
        move-snake
        eat-apple
        spawn-apple)
    model))


(q/defcomponent Coord-row
                [[x y]]
                (d/tr {}
                      (d/td {} x)
                      (d/td {} y)))

(q/defcomponent Position-table [positions title]
                (d/table
                  {:style {:borderCollapse "collapse"}}
                  (d/thead
                    {:style {:backgroundColor "grey"}}
                    (d/tr
                      {}
                      (d/th {:colSpan 2} title))
                    (d/tr
                      {}
                      (d/th {} "x")
                      (d/th {} "y")))
                  (d/tbody {}
                           (map #(Coord-row %) positions))))

(defn render-html [model]
  (q/render
    (d/div {}
           (d/h1 {:style {:color "grey"}}
                 (str "Game over? " (not (:game-running model))))
           (d/h1 {:style {:color "grey"}}
                 (str "Snake direction " (:snake-direction model)))
           (d/canvas {:id "draw-canvas" :width "450px" :height "450px"} "")
           (str "Snake: " (seq (:snake model)))
           (str "Apples: " (seq (:apples model)))
           (Position-table (:snake model) "Snake")
           (Position-table (:apples model) "Apples "))
    (.getElementById js/document "main")))


(defn animate []
  "Main loop"
  (let [data @model]
    (render-html data)
    (when-let [canvas (dom/by-id "draw-canvas")]
      (render-canvas canvas data))
    (canv/animate animate)))

;; Start the game
(defonce game-loop
         (do

           (go-loop []
                    (<! (timeout speed))
                    (swap! model update-model)
                    (recur))
           (animate)))