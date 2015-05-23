(ns canvas-fn-snake.core
  (:require [domina :as dom]
            [canvas-fn-snake.canvas :as canv]
            [canvas-fn-snake.vectors :as v]
            [goog.events :as events]
            [cljs.core.async :refer [chan <! >! put! close! timeout]])
  (:require-macros [cljs.core.async.macros :refer [go go-loop alt!]]))

(enable-console-print!)

(def canvas (dom/by-id "draw-canvas"))

(def info (dom/by-id "info"))

(def colors {:purple (str "rgb(186,85,211)")
             :green  (str "rgb(20,200,20)")
             :red    (str "rgb(120,20,20)")
             :blue   (str "rgb(20,20,200)")})

(defn empty-board [rows cols]
  (-> (mapv vec (take rows (partition cols (repeat :empty))))))

;; Data to be drawn
(defonce model (atom {:snake           [[5 5] [6 5] [7 5]]
                      :snake-direction :down
                      :cell-width      20
                      :board           (empty-board 20 20)}))


;; Input
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(def charcode->keys
  {37 :left
   38 :up
   39 :right
   40 :down})

(defn listen [el type]
  (let [out (chan)]
    (events/listen el type
                   (fn [e] (.preventDefault e) (put! out e)))
    out))

;; Only setup once to avoid having to clean up event-handlers when reloading code
(defonce setup-keyboard-handler
         (let [clicks (listen js/document "keydown")]
           (go-loop [] (let [key-event (<! clicks)
                             char-code (.-keyCode key-event)
                             game-key (charcode->keys char-code)]
                         (when game-key (swap! model #(assoc % :snake-direction game-key)))
                         (recur)))))

;; Rendering
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defmulti draw-cell (fn [canvas cell-value x y cell-width] cell-value))

(defmethod draw-cell :empty [canvas cell-value x y cell-width]
  (canv/fill-square canvas [(* y cell-width) (* x cell-width)] (- cell-width 2) (:green colors)))

(defmethod draw-cell :snake-head [canvas cell-value x y cell-width]
  (canv/fill-square canvas [(* y cell-width) (* x cell-width)] (- cell-width 2) (:red colors)))

(defmethod draw-cell :snake-body [canvas cell-value x y cell-width]
  (canv/fill-square canvas [(* y cell-width) (* x cell-width)] (- cell-width 2) (:red colors)))

(defn draw-board [canvas model]

  (let [board-with-snake (reduce (fn [board snake-coord] (assoc-in board snake-coord :snake-head)) (:board model) (:snake model))
        cell-width (:cell-width model)]
    (doseq [[row-idx row] (map-indexed (fn [idx row] [idx row]) board-with-snake)]
      (doseq [[col-idx col] (map-indexed (fn [idx col] [idx col]) row)]
        (draw-cell canvas col col-idx row-idx cell-width)))))

(defn render [canvas model]
  "Clears canvas and draws the model"
  (do
    (canv/init-canvas canvas)
    (draw-board canvas model)))

(defn next-coord [[x y] direction]
  (case direction
    :up [x (- y 1)]
    :down [x (+ y 1)]
    :right [(+ x 1) y]
    :left [(- x 1) y]))

(defn move-snake [model]
  (let [next (next-coord (-> model :snake last) (:snake-direction model))]
    (update-in model [:snake] (fn [x] (conj x next)))))

(defn update-model [model]
  (move-snake model))

(defn animate []
  "Main loop"
  (do
    (canv/animate animate)
    (render canvas @model)))

(defn game-loop [stop-chan]
  "Separate game loop"
  (go-loop []
           (alt! (timeout 5000) (do (swap! model update-model) (recur))
                 stop-chan (println "Stopping game loop"))))


;; Start the game
(defonce stop-game-chan (chan)) ;; Designated channel for stopping the game from Figwheel when reloading code
(game-loop stop-game-chan)
(animate)