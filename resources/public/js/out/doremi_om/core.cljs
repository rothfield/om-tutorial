(ns doremi-om.core
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:require [goog.events :as events]
            [cljs.core.async :refer [put! <! >! chan timeout]]
            [cljs.core.async.impl.protocols]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [markdown.core :as md] 
            [cljs-http.client]
            [doremi-om.utils :refer [guid]]))

;; Lets you do (prn "stuff") to the console
(enable-console-print!)

(defn log[& more]
  (.log js/console (pr-str more))
  )

(log "hi" "john")
(def app-state
  (atom {}))


(defn- with-id
  [m]
  (assoc m :id (guid)))



(defn- fetch-comments
  [url]
  (assert (string? url))
  (let [c (chan)  ;; create channel c
        ]
    ;; 
    (go (let 
          [{{comments :comments} :body} ;; Put results of read from the ajax result here.
           ;; Destructure results. Something like (get-in x [:body :comments]). Results will be a map.
           (<! (cljs-http.client/get url))    ;; Do an ajax get request to url
           ;; http/get returns a channel
           ;; <! is an asynchronous take
           ;;  <!  reads/gets from the channel
           ;;  
           ]
          (>! c (vec (map with-id comments)))))   ;; put comments in the channel after adding ids and turning into a vector
    (assert (satisfies? cljs.core.async.impl.protocols/Channel c))
    c    ;; return channel
    )) 

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
      (go 
        (while true
          (let [comments (<! (fetch-comments (:url opts)))]
            (om/update! app #(assoc % :comments comments)))
          ;; Now read from a timeout channel. This pauses 2 seconds
          ;; if poll-interval is 2000

          (<! (timeout (:poll-interval opts))))))



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
               (om/build comment-box app {:opts {:url "/comments"
                                                 :poll-interval 2000 
                                                 }})))))

(om/root app-state 
         doremi-om-app 
         (.getElementById js/document "content"))
