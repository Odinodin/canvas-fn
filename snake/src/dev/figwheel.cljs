(ns dev.figwheel
  (:require [cljs.core.async :refer [put!]]
            [canvas-fn-snake.core :as snake-core]))

(defn reload-hook []
  (fn []
    #_(put! snake-core/stop-game-chan "stop")
    (print "reloaded")))