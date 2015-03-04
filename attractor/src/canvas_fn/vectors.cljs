(ns canvas-fn.vectors
  (:require [canvas-fn.util :as util]))

(defn vplus [a b]
  "Add two vectors together"
  [(+ (first a) (first b))
   (+ (second a) (second b))])

(defn vsub [a b]
  "Subtractor two vectors"
  [(- (first a) (first b))
   (- (second a) (second b))])

(defn vmult [vector factor]
  [(* factor (first vector)) (* factor (second vector))])

(defn vdiv [vector dividend]
  "Divide a vector by dividend"
  [(/ (first vector) dividend) (/ (second vector) dividend)])

(defn vmagnitude [vector]
  "The magnitude of the vector, an absolute number. Calculated as
  square root of (x^2 + y^2)"
  (let [x (first vector)
        y (second vector)]
    (->> (* x x)
        (+ (* y y))
        (.sqrt js/Math))))

(defn vnormalize [vector]
  "Normalize the vector"
  (let [magnitude (vmagnitude vector)]
    (if (not= magnitude 0) (vdiv vector magnitude)
                        vector)))