(ns canvas-fn.util)

(defn log [& items]
  (.log js/console (apply str items)))