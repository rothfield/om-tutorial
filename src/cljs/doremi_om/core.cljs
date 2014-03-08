(ns doremi-om.core
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:require [goog.events :as events]
            [cljs.core.async :refer [put! <! >! chan timeout]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [markdown.core :as md] 
            [cljs-http.client :as http]
            [doremi-om.utils :refer [guid]]))

;; Lets you do (prn "stuff") to the console
(enable-console-print!)

(def app-state
  (atom {}))

(.log js/console
      (md/mdToHtml "##This is a heading\nwith a paragraph following it")) 

(defn- with-id
  [m]
  (assoc m :id (guid)))



(defn- fetch-comments
  [url]
  (let [c (chan)  ;; create local channel c
        
        ]

    (go (let 
          [{{comments :comments} :body} (<! (http/get url))]
        (>! c (vec (map with-id comments)))))
   c)) 

(defn comment[{:keys [author text] :as c} owner opts]
  (om/component 
    (let [raw-markup (md/mdToHtml text)]
      (dom/div #js {:className "comment"} 
               (dom/h2 #js {:className "commentAuthor"} author) 
               (dom/span #js {:dangerouslySetInnerHTML #js {:__html raw-markup }})
               ))))
;; [{:keys [comments] :as app}] 
;; Read as:
;; This function takes a map, which will be set to the app variable
;; Set variable comments to the value of the :comments key in the map

(defn comment-list
  [{:keys [comments] :as app}] 
  (om/component (dom/div #js {:className "commentList"}
                         (om/build-all comment comments
                                       {:key :id}))))

(defn comment-box[app owner opts]
  (reify
    om/IWillMount
    (will-mount [_]
      (go (let [comments (<! (fetch-comments (:url opts)))]
            (om/update! app #(assoc % :comments comments))))
      )
    om/IInitState
    (init-state [_]
      (om/transact! app [:comments] (fn[] 
                                      [])))
    om/IRender
    (render [_]
      (dom/div #js {:className "commentBox"} 
               (dom/h1 nil "comments")
               (om/build comment-list app)))))


(defn doremi-om-app [app owner]
  (reify
    om/IRender
    (render [_]
      (dom/div nil
               (om/build comment-box app {:opts {:url "/comments"}})))))

(om/root app-state 
         doremi-om-app 
         (.getElementById js/document "content"))
