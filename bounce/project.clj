(defproject canvas-fn "0.1.0-SNAPSHOT"
            :description "Canvas f(u)n"
            :dependencies [[org.clojure/clojure "1.6.0"]
                           [org.clojure/clojurescript "0.0-2665"]
                           [domina "1.0.1"]
                           [figwheel "0.2.2-SNAPSHOT"]]
            :plugins [[lein-cljsbuild "1.0.3"]
                      [lein-figwheel "0.2.2-SNAPSHOT"]]

            :jvm-opts ["-Xmx1G"]

            :cljsbuild {
                        :builds [{:id           "dev"
                                  :source-paths ["src/canvas_fn" "src/dev"]
                                  :compiler     {:output-to     "resources/public/js/canvas-fn.js"
                                                 :output-dir    "resources/public/js/out"
                                                 :optimizations :none
                                                 :source-map    true
                                                 :pretty-print  true}}
                                 {:id "release"
                                  :source-paths ["src/canvas_fn"]
                                  :compiler {
                                             :output-to "resources/public/js/canvas-fn_prod.js"
                                             :output-dir "resources/public/js/prod-out"
                                             :optimizations :advanced
                                             :pretty-print false
                                             :source-map "resources/public/js/canvas-fn_prod.js.map"}}
                                 ]}

            :figwheel {
                       :http-server-root "public"           ;; default and assumes "resources"
                       :server-port      3450               ;; default
                       :css-dirs         ["resources/public/css"] ;; watch and update CSS
                       }

            )