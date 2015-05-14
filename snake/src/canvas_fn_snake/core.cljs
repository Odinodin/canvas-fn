(ns canvas-fn-snake.core
  (:require [domina :as dom]
            [canvas-fn-snake.canvas :as canv]
            [canvas-fn-snake.util :as util]
            [canvas-fn-snake.vectors :as v]))

;; Reference to the canvas element
(def canvas (dom/by-id "draw-canvas"))

(def info (dom/by-id "info"))

;; Data to be drawn
(defonce model (atom {}))


;; Rendering

(defn draw-circle [canvas pos]
  (canv/draw-circle canvas pos 10 (str "rgb(50,50,50)") (str "rgb(140,140,140)")))

(defn render [canvas model]
  "Clears canvas and draws the model"
  (do
    (canv/init-canvas canvas)
    (draw-circle canvas [100 100])))

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