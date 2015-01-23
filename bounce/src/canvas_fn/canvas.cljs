(ns canvas-fn.canvas)

(def animate
  "Request animation frame"
  (or (.-requestAnimationFrame js/window)
      (.-oRequestAnimationFrame js/window)
      (.-mozRequestAnimationFrame js/window)
      (.-webkitRequestAnimationFrame js/window)
      (.-msRequestAnimationFrame js/window)
      (fn [callback] (js/setTimeout callback 17))))


(defn init-canvas [canvas]
  "Clears the canvas"
  (let [ctx (.getContext canvas "2d")
        width (.-width canvas)
        height (.-height canvas)]
    (do
      (.clearRect ctx 0 0 width height)
      (set! (. ctx -lineWidth) 5)
      (.beginPath ctx)
      (.moveTo ctx 0 0)
      (.lineTo ctx 0 height)
      (.lineTo ctx width height)
      (.lineTo ctx width 0)
      (.lineTo ctx 0 0)
      (.stroke ctx))))


(defn draw-circle [canvas position radius fill-style]
  (let [ctx (.getContext canvas "2d")]
    (do
      (set! (. ctx -fillStyle) fill-style)
      (set! (. ctx -lineWidth) 4)
      (.beginPath ctx)
      (.arc ctx  (first position) (second position) radius 0 (* 2 Math/PI) true)
      (.closePath ctx)
      (.fill ctx)
      (.stroke ctx))))

(defn draw-rect [canvas position width height]
  (let [ctx (.getContext canvas "2d")]
    (do
      (set! (. ctx -lineWidth) 2)
      (.beginPath ctx)
      (.moveTo ctx 0 0)
      (.lineTo ctx 0 height)
      (.lineTo ctx width height)
      (.lineTo ctx width 0)
      (.lineTo ctx 0 0)
      (.stroke ctx))))