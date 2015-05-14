(ns canvas-fn-snake.util)

(defn log [& items]
  (.log js/console (apply str items)))