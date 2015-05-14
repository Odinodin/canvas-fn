(defproject canvas-fn-snake "0.1.0-SNAPSHOT"
            :description "Canvas fn - Snake"
            :dependencies [[org.clojure/clojure "1.6.0"]
                           [org.clojure/clojurescript "0.0-3211"]
                           [domina "1.0.3"]
                           [figwheel "0.3.1"]]
            :plugins [[lein-cljsbuild "1.0.5"]
                      [lein-figwheel "0.3.1"]]

            :jvm-opts ["-Xmx1G"]

            :cljsbuild {
                        :builds [{:id           "dev"
                                  :source-paths ["src/canvas_fn_snake" "src/dev"]
                                  :compiler     {:output-to     "resources/public/js/canvas-fn-snake.js"
                                                 :output-dir    "resources/public/js/out"
                                                 :optimizations :none
                                                 :source-map    true
                                                 :pretty-print  true}}
                                 {:id "release"
                                  :source-paths ["src/canvas_fn_snake"]
                                  :compiler {
                                             :output-to "resources/public/js/canvas-fn-snake-prod.js"
                                             :output-dir "resources/public/js/prod-out"
                                             :optimizations :advanced
                                             :pretty-print false
                                             :source-map "resources/public/js/canvas-fn-snake-prod.js.map"}}
                                 ]}

            :figwheel {
                       :http-server-root "public"           ;; default and assumes "resources"
                       :server-port      3449               ;; default
                       :css-dirs         ["resources/public/css"] ;; watch and update CSS

                       :nrepl-port 7888})