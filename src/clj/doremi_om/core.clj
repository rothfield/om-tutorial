(ns doremi-om.core
  (:require [compojure.handler :as handler]
            [compojure.route :as route]
            [compojure.core :refer [GET POST defroutes]]
            [ring.util.json-response :only [json-response]]
            [ring.util.response :as resp]
            [cheshire.core :as json]
            [clojure.java.io :as io]))



(def comments (atom []))
;; (println @comments)
;; (init)
(defn init
  []
  (reset! comments (-> (slurp "comments.json")
                       (json/parse-string true)
                       vec)))

(defn save-comment!
  [{:keys [body]}]
  (let [comment (-> body io/reader slurp (json/parse-string true))]
    (swap! comments conj comment)
    (ring.util.json-response/json-response
      {:message "Saved comment!"})))


(defn json-response [data & [status]]
  {:status (or status 200)
   :headers {"Content-Type" "application/json"}
   :body (json/generate-string data)})

(defroutes app-routes
  (GET "/" [] (resp/redirect "/index.html"))

  (GET "/test" [] (json-response
                    {:message "You made it!"}))

  (GET "/comments" [] (json-response
                        {:message "Here's the comments!"
                         :comments @comments}))
  (POST "/comments" req (save-comment! req))


  (POST "/test" req (json-response
                      {:message "Doing something something important..."}))

  (route/resources "/")
  (route/not-found "Page not found"))

(def app
  (-> #'app-routes
      (handler/api)))
