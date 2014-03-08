// Compiled by ClojureScript 0.0-2138
goog.provide('doremi_om.core');
goog.require('cljs.core');
goog.require('doremi_om.utils');
goog.require('cljs.core.async');
goog.require('doremi_om.utils');
goog.require('goog.events');
goog.require('cljs_http.client');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
goog.require('cljs_http.client');
goog.require('om.dom');
goog.require('cljs.core.async');
goog.require('goog.events');
cljs.core.enable_console_print_BANG_.call(null);
doremi_om.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"things","things",4434169015),cljs.core.PersistentVector.EMPTY], null));
doremi_om.core.doremi_om_app = (function doremi_om_app(app,owner){if(typeof doremi_om.core.t9279 !== 'undefined')
{} else
{
/**
* @constructor
*/
doremi_om.core.t9279 = (function (owner,app,doremi_om_app,meta9280){
this.owner = owner;
this.app = app;
this.doremi_om_app = doremi_om_app;
this.meta9280 = meta9280;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
doremi_om.core.t9279.cljs$lang$type = true;
doremi_om.core.t9279.cljs$lang$ctorStr = "doremi-om.core/t9279";
doremi_om.core.t9279.cljs$lang$ctorPrWriter = (function (this__3956__auto__,writer__3957__auto__,opt__3958__auto__){return cljs.core._write.call(null,writer__3957__auto__,"doremi-om.core/t9279");
});
doremi_om.core.t9279.prototype.om$core$IRender$ = true;
doremi_om.core.t9279.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,React.DOM.h1(null,"doremi-om is working!"));
});
doremi_om.core.t9279.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9281){var self__ = this;
var _9281__$1 = this;return self__.meta9280;
});
doremi_om.core.t9279.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9281,meta9280__$1){var self__ = this;
var _9281__$1 = this;return (new doremi_om.core.t9279(self__.owner,self__.app,self__.doremi_om_app,meta9280__$1));
});
doremi_om.core.__GT_t9279 = (function __GT_t9279(owner__$1,app__$1,doremi_om_app__$1,meta9280){return (new doremi_om.core.t9279(owner__$1,app__$1,doremi_om_app__$1,meta9280));
});
}
return (new doremi_om.core.t9279(owner,app,doremi_om_app,null));
});
om.core.root.call(null,doremi_om.core.app_state,doremi_om.core.doremi_om_app,document.getElementById("content"));

//# sourceMappingURL=core.js.map