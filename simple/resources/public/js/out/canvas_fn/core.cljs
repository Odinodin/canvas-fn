(ns canvas-fn.core
  (:require [clojure.browser.event :as event]
            [domina :as dom]
            [canvas-fn.canvas :as canv]
            [canvas-fn.util :as util]
            [figwheel.client :as fw]))

;; Reference to the canvas element
(def canvas (dom/by-id "draw-canvas"))

;; Data to be drawn
(defonce model (atom {:balls [{:x 0 :y 0}
                          {:x 0 :y 30}
                          {:x 0 :y 60}
                          {:x 30 :y 0}
                          {:x 0 :y 90}
                          {:x 60 :y 0}
                          {:x 60 :y 30}
                          {:x 60 :y 60}
                          {:x 60 :y 90}
                          {:x 30 :y 90}]}))

(defn draw-blue-circle [canvas pos]
  (canv/draw-circle canvas pos 10 (str "rgb(0,0,0)")))

(defn render [canvas model]
  "Clears canvas and draw a blue circle"
  (do
    (canv/init-canvas canvas)
    (doseq [ball (:balls model)]
      (draw-blue-circle canvas ball))))

(defn move-ball-x [ball]
  (assoc ball :x (mod (inc (:x ball)) (. canvas -width))))

(defn move-ball-y [ball]
  (assoc ball :y (mod (inc (:y ball)) (. canvas -height))))

(defn move-balls [balls]
  (for [ball balls]
    (->
      (move-ball-x ball)
      move-ball-y)))

(defn update-model [model]
  "Updates the model"
  (->> (:balls @model)
       (move-balls)
       (hash-map :balls)
       (reset! model)))

(defn main []
  (do
    (update-model model)
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