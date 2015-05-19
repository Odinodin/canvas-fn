(ns canvas-fn-snake.core
  (:require [domina :as dom]
            [canvas-fn-snake.canvas :as canv]
            [canvas-fn-snake.util :as util]
            [canvas-fn-snake.vectors :as v]
            [cljs.core.async :refer [chan <! >! put! close! timeout]])
  (:require-macros [cljs.core.async.macros :refer [go go-loop alt!]])
  )

;; Reference to the canvas element
(def canvas (dom/by-id "draw-canvas"))

(def info (dom/by-id "info"))

(def colors {:green (str "rgb(20,200,20)")
             :red   (str "rgb(120,20,20)")
             :blue  (str "rgb(20,20,200)")})

(defn empty-board [rows cols]
  (-> (mapv vec (take rows (partition cols (repeat :empty))))
      (assoc-in [10 10] :snake-head)))

;; Data to be drawn
(defonce model (atom {:snake-direction :north
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
  (let [cell-width (:cell-width model)]
    (doseq [[row-idx row] (map-indexed (fn [idx row] [idx row]) (:board model))]
      (doseq [[col-idx col] (map-indexed (fn [idx col] [idx col]) row)]
        (draw-cell canvas col col-idx row-idx cell-width)
        #_(draw-square canvas [(* row-idx cell-width) (* col-idx cell-width)] (- cell-width 2))))))

(defn render [canvas model]
  "Clears canvas and draws the model"
  (do
    (canv/init-canvas canvas)
    (draw-board canvas model)))


(defn move-snake [model]
  (let [head-pos (for [[x row] (map-indexed (:board model))
                       [y cell-value] (map-indexed row)
                       :when (= cell-value :snake-head)]
                   [x y])]))

(defn update-model [model]
  (-> model
      (assoc-in [:board 2 2] :snake-head)
      (assoc-in [:board 1 4] :snake-head))

  #_(-> model
      move-snake))

(defn main []
  (do
    (render canvas @model)))

(defn animate []
  "Main loop"
  (do
    (canv/animate animate)
    (main)))

(defn game-loop [stop-chan]
  "Separate game loop"
  (go-loop []
    (alt! (timeout 1000) (do (swap! model update-model) (recur))
          stop-chan (util/log "Stopping game loop"))))

(util/log "Start animations")
(animate)

;; Designated channel for stopping the game
(defonce stop-game-chan (chan))
(game-loop stop-game-chan)