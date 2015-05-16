(ns canvas-fn-snake.core
  (:require [domina :as dom]
            [canvas-fn-snake.canvas :as canv]
            [canvas-fn-snake.util :as util]
            [canvas-fn-snake.vectors :as v]))

;; Reference to the canvas element
(def canvas (dom/by-id "draw-canvas"))

(def info (dom/by-id "info"))

(def colors {:green (str "rgb(20,200,20)")
             :red (str "rgb(120,20,20)")
             :blue (str "rgb(20,20,200)")})

(defn empty-board [rows cols]
  (-> (mapv vec (take rows (partition cols (repeat :empty))))
       (assoc-in [10 10] :snake)))

;; Data to be drawn
(defonce model (atom {:cell-width 20
                      :board (empty-board 20 20)}))

;; Rendering
(defmulti draw-cell (fn [canvas cell-value x y cell-width] cell-value))

(defmethod draw-cell :empty [canvas cell-value x y cell-width]
  (canv/fill-square canvas [(* y cell-width) (* x cell-width)] (- cell-width 2) (:green colors)))

(defmethod draw-cell :snake [canvas cell-value x y cell-width]
  (canv/fill-square canvas [(* y cell-width) (* x cell-width)] (- cell-width 2) (:blue colors)))

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

(defn main []
  (do
    (render canvas @model)))

(defn animate []
  "Main loop"
  (do
    (canv/animate animate)
    (main)))

(util/log "Start animations")
(animate)