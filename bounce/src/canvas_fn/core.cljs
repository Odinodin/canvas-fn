(ns canvas-fn.core
  (:require [clojure.browser.event :as event]
            [domina :as dom]
            [canvas-fn.canvas :as canv]
            [canvas-fn.util :as util]
            [canvas-fn.vectors :as v]
            [figwheel.client :as fw]))

;; Reference to the canvas element
(def canvas (dom/by-id "draw-canvas"))

;; Data to be drawn
(def model (atom {:balls [{:pos [30 0] :velocity [0 0.3] :acceleration [0 0.1]}
                          {:pos [90 0] :velocity [0 0.3] :acceleration [0 0.02]}
                          {:pos [120 0] :velocity [0 0.3] :acceleration [0 0.07]}
                          {:pos [200 0] :velocity [0 0.3] :acceleration [0 0.09]}]}))

(defn draw-blue-circle [canvas pos]
  (canv/draw-circle canvas pos 10 (str "rgb(20,20,200)")))

(defn render [canvas model]
  "Clears canvas and draw a blue circle"
  (do
    (canv/init-canvas canvas)
    (doseq [ball (:balls model)]
      (draw-blue-circle canvas (:pos ball)))))

(defn accelerate [entities]
  (for [entity entities]
    (assoc entity :velocity (v/vplus (:velocity entity) (:acceleration entity)))))

(defn move-entity [entity]
  (assoc entity :pos (v/vplus (:pos entity) (:velocity entity))))

(defn move-entities [entities]
  (for [entity entities]
    (move-entity entity)))

(defn hit-floor [entity]
  (and
    (> (-> entity :pos second) (.-height canvas))
    (pos? (-> entity :velocity second))))

(defn bounce-floor [entities]
  (for [entity entities]
    (if (hit-floor entity) (assoc entity :velocity (v/vmult (:velocity entity) -1))
                           entity)))

(defn update-model [model]
  "Updates the model"
  (->> (:balls @model)
       (bounce-floor)
       (accelerate)
       (move-entities)
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