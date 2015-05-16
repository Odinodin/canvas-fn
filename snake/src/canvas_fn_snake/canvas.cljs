(ns canvas-fn-snake.canvas)

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
    (.clearRect ctx 0 0 width height)))

(defn draw-circle [canvas [x y] radius fill-style line-style]
  (let [ctx (.getContext canvas "2d")]
    (do
      (set! (. ctx -fillStyle) fill-style)
      (set! (. ctx -lineWidth) 4)
      (set! (. ctx -strokeStyle) line-style)
      (.beginPath ctx)
      (.arc ctx  x y radius 0 (* 2 Math/PI) true)
      (.closePath ctx)
      (.fill ctx)
      (.stroke ctx))))

(defn fill-rect [canvas [x y] width height fill-style]
  (let [ctx (.getContext canvas "2d")]
    (do
      (set! (. ctx -fillStyle) fill-style)
      (.fillRect ctx x y width height))))

(defn fill-square [canvas pos width fill-style]
  (fill-rect canvas pos width width fill-style))