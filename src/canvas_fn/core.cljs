(ns canvas-fn.core
  (:require [clojure.browser.event :as event]
            [domina :as dom]
            [canvas-fn.canvas :as canv]
            [canvas-fn.util :as util]
            [figwheel.client :as fw]
            ))

;; Reference to the canvas element
(def canvas (dom/by-id "draw-canvas"))

;; Data to be drawn
(def model (atom {:ball {:x 0 :y 0}}))

(defn draw-blue-circle [canvas pos]
  (canv/draw-circle canvas pos 10 (str "rgb(200,20,200)")))

(defn render [canvas model]
  "Clears canvas and draw a blue circle"
  (do
    (canv/init-canvas canvas)
    (draw-blue-circle canvas (:ball model))))

(defn move-ball-x [model]
  (update-in model [:ball :x] (fn [old] (mod (inc old) (. canvas -width)))))

(defn move-ball-y [model]
  (update-in model [:ball :y] (fn [old] (mod (inc old) (. canvas -height)))))

(defn update-model []
  "Updates the model"
  (->> @model
       move-ball-x
       move-ball-y
       (reset! model)))

(defn main []
  (do
    (update-model)
    (render canvas @model)))

;; This should be extracted into a dev-file, only used in
;; Dev mode ..
(fw/start {
           :on-jsload (fn []
                        ;; (stop-and-start-my app)
                        )})

(defn animate []
  "Main loop"
  (do
    (canv/animate animate)
    (main)))

(util/log "Start animation")
(animate)
