(ns canvas-fn.core
  (:require [clojure.browser.event :as event]
            [domina :as dom]
            [canvas-fn.canvas :as canv]
            [canvas-fn.util :as util]
            [canvas-fn.vectors :as v]))

;; Reference to the canvas element
(def canvas (dom/by-id "draw-canvas"))

(def info (dom/by-id "info"))

(def attractor-acceleration 0.04)
(def max-velocity 2)

#_(event/listen canvas "click" #_(dom/set-text! info (str "clicked..,,." (.-pageX %) )))

;; Data to be drawn
(defonce model (atom {:attractor {:pos [225 225]}
                      :balls     (for [n (range 1 30)]
                                   {:pos [(* n 40) (* n 10)] :velocity [0 0.3] :acceleration [0 0]})}))

;; Interaction handling
;; Compute the position relative to the canvas element and take scrolling into account
(defn move-attractor-to-mouse [event]
  (let [canvas-x (- (+ (.-clientX event) (.-scrollX js/window)) (.-offsetLeft canvas))
        canvas-y (- (+ (.-clientY event) (.-scrollY js/window)) (.-offsetTop canvas))]
    (swap! model #(assoc-in % [:attractor :pos] [canvas-x canvas-y]))))

(event/listen canvas "click" move-attractor-to-mouse)

;; Rendering

(defn draw-circle-large [canvas pos]
  (canv/draw-circle canvas pos 20 (str "rgb(200,80,80)") (str "rgb(140,140,140)")))

(defn draw-circle [canvas pos]
  (canv/draw-circle canvas pos 10 (str "rgb(50,50,50)") (str "rgb(140,140,140)")))

(defn render [canvas model]
  "Clears canvas and draws the model"
  (do
    (canv/init-canvas canvas)
    (doseq [ball (:balls model)]
      (draw-circle canvas (:pos ball)))
    (draw-circle-large canvas (:pos (:attractor model)))))

(defn accelerate-entities [entities]
  (for [entity entities]
    (assoc entity :velocity (->
                              (v/vplus (:velocity entity) (:acceleration entity))
                              (v/vlimit max-velocity)))))

(defn move-entities [entities]
  (for [entity entities]
    (assoc entity :pos (v/vplus (:pos entity) (:velocity entity)))))

(defn calculate-attraction-force [ball attractor]
  (let [force-direction (v/vsub (:pos attractor) (:pos ball))
        normalized (v/vnormalize force-direction)
        with-strength (v/vmult normalized attractor-acceleration)]
    with-strength))

(defn apply-attract-force [balls attractor]
  (for [ball balls]
    (assoc ball :acceleration (calculate-attraction-force ball attractor))))

(defn accelerate-balls [model]
  (update-in model [:balls] accelerate-entities))

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