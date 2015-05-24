(ns canvas-fn-snake.core-test
  (:require
    [cljs.test :refer-macros [deftest testing is]]
    [canvas-fn-snake.core :refer [next-coord]]))

(deftest can-calculate-next-coord
         (is (= (next-coord [0 0] :right) [1 0]))
         (is (= (next-coord [0 0] :down) [0 1]))
         (is (= (next-coord [1 0] :left) [0 0]))
         (is (= (next-coord [0 1] :up) [0 0])))

