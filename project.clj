(defproject canvas-fn "0.1.0-SNAPSHOT"
            :description "Canvas f(u)n"
            :dependencies [[org.clojure/clojure "1.5.1"]
                           [org.clojure/clojurescript "0.0-2127"]
                           [domina "1.0.1"]]
            :plugins [[lein-cljsbuild "1.0.1"]]
            :cljsbuild {
              :builds [{
                  :source-paths ["src/canvas_fn"]
                  :compiler {
                    :output-to "canvas-fn.js"
                    :output-dir "out"
                    :source-map "canvas-fn.js.map"
                    :optimizations :whitespace
                    :pretty-print true
                    }}]})