(ns canvas-fn-snake.core
  (:require [domina :as dom]
            [canvas-fn-snake.canvas :as canv]
            [canvas-fn-snake.util :as util]
            [canvas-fn-snake.vectors :as v]
            [cljs.core.async :refer [chan <! >! put! close! timeout]])
  (:require-macros [cljs.core.async.macros :refer [go go-loop alt!]]))


(def canvas (dom/by-id "draw-canvas"))

(def info (dom/by-id "info"))

(def colors {:green (str "rgb(20,200,20)")
             :red   (str "rgb(120,20,20)")
             :blue  (str "rgb(20,20,200)")})

(defn empty-board [rows cols]
  (-> (mapv vec (take rows (partition cols (repeat :empty))))))

;; Data to be drawn
(defonce model (atom {:snake [[5 5] [6 5] [7 5]]
                      :snake-direction :north
                      :cell-width      20
                      :board           (empty-board 20 20)}))

;; Rendering
(defmulti draw-cell (fn [canvas cell-value x y cell-width] cell-value))

(defmethod draw-cell :empty [canvas cell-value x y cell-width]
  (canv/fill-square canvas [(* y cell-width) (* x cell-width)] (- cell-width 2) (:green colors)))

(defmethod draw-cell :snake-head [canvas cell-value x y cell-width]
  (canv/fill-square canvas [(* y cell-width) (* x cell-width)] (- cell-width 2) (:blue colors)))

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
        :north [x (- y 1)]
        :south [x (+ y 1)]
        :east [(+ x 1) y]
        :west [(- x 1) y]))

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
    (alt! (timeout 3000) (do (swap! model update-model) (recur))
          stop-chan (util/log "Stopping game loop"))))

(util/log "Start animations")
(animate)

;; Designated channel for stopping the game
(defonce stop-game-chan (chan))
(game-loop stop-game-chan)