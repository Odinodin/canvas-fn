(ns canvas-fn-snake.core
  (:require [domina :as dom]
            [canvas-fn-snake.canvas :as canv]
            [canvas-fn-snake.vectors :as v]
            [goog.events :as events]
            [cljs.core.async :refer [chan <! >! put! close! timeout]])
  (:require-macros [cljs.core.async.macros :refer [go go-loop alt!]]))

(enable-console-print!)

(def canvas (dom/by-id "draw-canvas"))

(def colors {:purple (str "rgb(186,85,211)")
             :green  (str "rgb(20,200,20)")
             :red    (str "rgb(120,20,20)")
             :blue   (str "rgb(20,20,200)")})

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

(defonce model (atom initial-state))

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

(defmulti draw-cell (fn [canvas cell-value x y cell-width] cell-value))

(defmethod draw-cell :empty [canvas cell-value x y cell-width]
  (canv/fill-square canvas [(* y cell-width) (* x cell-width)] (- cell-width 2) (:green colors)))

(defmethod draw-cell :snake-head [canvas cell-value x y cell-width]
  (canv/fill-square canvas [(* y cell-width) (* x cell-width)] (- cell-width 2) (:purple colors)))

(defmethod draw-cell :snake-body [canvas cell-value x y cell-width]
  (canv/fill-square canvas [(* y cell-width) (* x cell-width)] (- cell-width 2) (:green colors)))

(defmethod draw-cell :apple [canvas cell-value x y cell-width]
  (canv/fill-square canvas [(* y cell-width) (* x cell-width)] (- cell-width 2) (:red colors)))

(defn draw-board [canvas model]
  (let [board-with-snake (reduce (fn [board snake-coord] (assoc-in board snake-coord :snake-head)) (:board model) (:snake model))
        board-with-apples-and-snakes (reduce (fn [board apple-coord] (assoc-in board apple-coord :apple)) board-with-snake (:apples model))
        cell-width (:cell-width model)]
    (doseq [[row-idx row] (map-indexed (fn [idx row] [idx row]) board-with-apples-and-snakes)]
      (doseq [[col-idx col] (map-indexed (fn [idx col] [idx col]) row)]
        (draw-cell canvas col col-idx row-idx cell-width)))))

(defn draw-text [model]
  (if (:game-running model)
    (dom/set-text! (dom/by-id "info") (str "Snaking!"))
    (dom/set-text! (dom/by-id "info") (str "Game over! Press enter to restart"))))

(defn render [canvas model]
  "Clears canvas and draws the model"
  (do
    (canv/init-canvas canvas)
    (draw-board canvas model)
    (draw-text model)))

(defn next-coord [[x y] direction]
  (case direction
    :up [x (- y 1)]
    :down [x (+ y 1)]
    :right [(+ x 1) y]
    :left [(- x 1) y]))

(defn game-over? [model next-coord]
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

(defn animate []
  "Main loop"
  (do
    (canv/animate animate)
    (render canvas @model)))


(defn game-loop [stop-chan]
  "Separate game loop"
  (go-loop []
           (alt! (timeout 40) (do (swap! model update-model) (recur))
                 stop-chan (println "Stopping game loop"))))

;; Start the game
(defonce stop-game-chan (chan))                             ;; Designated channel for stopping the game from Figwheel when reloading code
(game-loop stop-game-chan)
(animate)