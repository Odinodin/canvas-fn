(defproject canvas-fn-snake "0.1.0-SNAPSHOT"
            :description "Canvas fn - Snake"
            :dependencies [[org.clojure/clojure "1.7.0-RC1"]
                           [org.clojure/clojurescript "0.0-3308"]
                           [domina "1.0.3"]
                           [figwheel "0.3.3"]]
            :plugins [[lein-cljsbuild "1.0.5"]
                      [lein-figwheel "0.3.3"]]

            :cljsbuild {
                        :builds [{:id           "dev"
                                  :source-paths ["src/canvas_fn_snake" "src/dev"]
                                  ;; Enable figwheel
                                  :figwheel {:on-jsload "dev.figwheel/reload-hook"}

                                  :compiler     {:main "canvas-fn-snake.core"
                                                 :asset-path "js/out"
                                                 :output-to     "resources/public/js/canvas-fn-snake.js"
                                                 :output-dir    "resources/public/js/out"
                                                 :optimizations :none
                                                 :source-map    true
                                                 :pretty-print  true}}]}

            :figwheel {
                       :http-server-root "public"           ;; default and assumes "resources"
                       :server-port      3449               ;; default
                       :css-dirs         ["resources/public/css"] ;; watch and update CSS

                       :nrepl-port 7888})