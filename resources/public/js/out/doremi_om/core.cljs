(ns doremi-om.core
    (:require-macros [cljs.core.async.macros :refer [go alt!]])
    (:require [goog.events :as events]
              [cljs.core.async :refer [put! <! >! chan timeout]]
              [om.core :as om :include-macros true]
              [om.dom :as dom :include-macros true]
              [cljs-http.client :as http]
              [doremi-om.utils :refer [guid]]))

;; Lets you do (prn "stuff") to the console
(enable-console-print!)

(def app-state
  (atom {:things []}))

(defn doremi-om-app [app owner]
  (reify
    om/IRender
    (render [_]
      (dom/div nil
               (dom/h1 nil "doremi-om is working!")))))

(om/root app-state doremi-om-app (.getElementById js/document "content"))
