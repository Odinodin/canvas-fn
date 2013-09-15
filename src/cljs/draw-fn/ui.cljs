(ns draw-fn.ui
  (:require [clojure.browser.event :as event]
            [goog.Timer]
            [crate.core :as crate])
  (:use [domina :only [by-id set-html! set-text! attr]]))

(def canvas (by-id "draw-canvas"))

(defn init-canvas [canvas]
  (let [ctx (.getContext canvas "2d")
        width (.getAttribute canvas "width")
        height (.getAttribute canvas "height")]
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

(defn draw-circle [ctx position radius fill-style]
  (do
    (set! (. ctx -fillStyle) fill-style)
    (.beginPath ctx)
    (.arc ctx (position :x) (position :y) radius 0 (* 2 Math/PI) true)
    (.closePath ctx)
    (.fill ctx)))

(defn draw-blue-circle []
  (let [ctx (.getContext canvas "2d")]
    (draw-circle (.getContext canvas "2d") {:x 50 :y 100} 10 (str "rgb(10,10,255)"))))

(defn render [canvas]
  (do 
    (init-canvas canvas)
    (draw-blue-circle)))

(defn main []
  (do
    (render canvas)))


(def canvas-timer (goog.Timer. (/ 1000 20)))
(event/listen canvas-timer goog.Timer/TICK main)
(main canvas)
(.start canvas-timer)

(comment (.log js/console "width: " width "height: " height))