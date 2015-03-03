(ns canvas-fn.vectors
  (:require [canvas-fn.util :as util]))

(defn vplus [a b]
  "Add two vectors together"
  [(+ (first a) (first b))
   (+ (second a) (second b))])

(defn vmult [vector factor]
  [(* factor (first vector)) (* factor (second vector))])