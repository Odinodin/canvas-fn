(ns canvas-fn.core
  (:require [clojure.browser.event :as event]
            [domina :as dom]
            [canvas-fn.canvas :as canv]
            [canvas-fn.util :as util]
            [canvas-fn.vectors :as v]))

;; Reference to the canvas element
(def canvas (dom/by-id "draw-canvas"))

(def info (dom/by-id "info"))

;; Data to be drawn
(def model (atom {:attractor {:pos [200 200]}
                  :balls     (for [n (range 1 10)]
                               {:pos [(* n 40) (* n 10)] :velocity [0 0.3] :acceleration [0 0.065]})}))

(defn draw-circle [canvas pos]
  (canv/draw-circle canvas pos 10 (str "rgb(50,50,50)") (str "rgb(140,140,140)")))

(defn render [canvas model]
  "Clears canvas and draws the model"
  (do
    (canv/init-canvas canvas)
    (draw-circle canvas (:pos (:attractor model)))
    (doseq [ball (:balls model)]
      (draw-circle canvas (:pos ball)))
    #_(dom/set-text! info (str "info:" model))))

(defn accelerate [entities]
  (for [entity entities]
    (assoc entity :velocity (v/vplus (:velocity entity) (:acceleration entity)))))

(defn move-entity [entity]
  (assoc entity :pos (v/vplus (:pos entity) (:velocity entity))))

(defn move-entities [entities]
  (for [entity entities]
    (move-entity entity)))



(defn calculate-attraction-force [ball attractor]
  (let [force-direction (v/vsub (:pos attractor) (:pos ball) )
        normalized (v/vnormalize force-direction)
        with-strength (v/vmult normalized 0.002)]
      with-strength)
  )

(defn apply-attract-force [balls attractor]
  (for [ball balls]
    (assoc ball :acceleration (calculate-attraction-force ball attractor))))


(defn accelerate-balls [model]
  (update-in model [:balls] accelerate))

(defn attract-balls [model]
  (update-in model [:balls] apply-attract-force (:attractor model)))

(defn move-balls [model]
  (update-in model [:balls] move-entities))

(defn update-model [model]
  "Updates the model"
  (-> model
      attract-balls
      accelerate-balls
      move-balls))

(defn main []
  (do
    (swap! model update-model)
    (render canvas @model)))

(defn animate []
  "Main loop"
  (do
    (canv/animate animate)
    (main)))

(util/log "Start animations")
(animate)