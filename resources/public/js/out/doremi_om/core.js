// Compiled by ClojureScript 0.0-2138
goog.provide('doremi_om.core');
goog.require('cljs.core');
goog.require('doremi_om.utils');
goog.require('cljs.core.async');
goog.require('doremi_om.utils');
goog.require('goog.events');
goog.require('cljs_http.client');
goog.require('markdown.core');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
goog.require('cljs_http.client');
goog.require('markdown.core');
goog.require('om.dom');
goog.require('cljs.core.async');
goog.require('goog.events');
cljs.core.enable_console_print_BANG_.call(null);
doremi_om.core.app_state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
console.log(markdown.core.mdToHtml.call(null,"##This is a heading\nwith a paragraph following it"));
doremi_om.core.comment = (function comment(p__9714,owner,opts){var map__9719 = p__9714;var map__9719__$1 = ((cljs.core.seq_QMARK_.call(null,map__9719))?cljs.core.apply.call(null,cljs.core.hash_map,map__9719):map__9719);var c = map__9719__$1;var text = cljs.core.get.call(null,map__9719__$1,new cljs.core.Keyword(null,"text","text",1017460895));var author = cljs.core.get.call(null,map__9719__$1,new cljs.core.Keyword(null,"author","author",3902543101));if(typeof doremi_om.core.t9720 !== 'undefined')
{} else
{
/**
* @constructor
*/
doremi_om.core.t9720 = (function (author,text,c,map__9719,opts,owner,p__9714,comment,meta9721){
this.author = author;
this.text = text;
this.c = c;
this.map__9719 = map__9719;
this.opts = opts;
this.owner = owner;
this.p__9714 = p__9714;
this.comment = comment;
this.meta9721 = meta9721;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
doremi_om.core.t9720.cljs$lang$type = true;
doremi_om.core.t9720.cljs$lang$ctorStr = "doremi-om.core/t9720";
doremi_om.core.t9720.cljs$lang$ctorPrWriter = (function (this__3956__auto__,writer__3957__auto__,opt__3958__auto__){return cljs.core._write.call(null,writer__3957__auto__,"doremi-om.core/t9720");
});
doremi_om.core.t9720.prototype.om$core$IRender$ = true;
doremi_om.core.t9720.prototype.om$core$IRender$render$arity$1 = (function (this__4917__auto__){var self__ = this;
var this__4917__auto____$1 = this;var raw_markup = markdown.core.mdToHtml.call(null,self__.text);return React.DOM.div({"className": "comment"},React.DOM.h2({"className": "commentAuthor"},self__.author),React.DOM.span({"dangerouslySetInnerHTML": {"__html": raw_markup}}));
});
doremi_om.core.t9720.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9722){var self__ = this;
var _9722__$1 = this;return self__.meta9721;
});
doremi_om.core.t9720.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9722,meta9721__$1){var self__ = this;
var _9722__$1 = this;return (new doremi_om.core.t9720(self__.author,self__.text,self__.c,self__.map__9719,self__.opts,self__.owner,self__.p__9714,self__.comment,meta9721__$1));
});
doremi_om.core.__GT_t9720 = (function __GT_t9720(author__$1,text__$1,c__$1,map__9719__$2,opts__$1,owner__$1,p__9714__$1,comment__$1,meta9721){return (new doremi_om.core.t9720(author__$1,text__$1,c__$1,map__9719__$2,opts__$1,owner__$1,p__9714__$1,comment__$1,meta9721));
});
}
return (new doremi_om.core.t9720(author,text,c,map__9719__$1,opts,owner,p__9714,comment,null));
});
doremi_om.core.comment_list = (function comment_list(p__9723){var map__9728 = p__9723;var map__9728__$1 = ((cljs.core.seq_QMARK_.call(null,map__9728))?cljs.core.apply.call(null,cljs.core.hash_map,map__9728):map__9728);var app = map__9728__$1;var comments = cljs.core.get.call(null,map__9728__$1,new cljs.core.Keyword(null,"comments","comments",4706455910));if(typeof doremi_om.core.t9729 !== 'undefined')
{} else
{
/**
* @constructor
*/
doremi_om.core.t9729 = (function (comments,app,map__9728,p__9723,comment_list,meta9730){
this.comments = comments;
this.app = app;
this.map__9728 = map__9728;
this.p__9723 = p__9723;
this.comment_list = comment_list;
this.meta9730 = meta9730;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
doremi_om.core.t9729.cljs$lang$type = true;
doremi_om.core.t9729.cljs$lang$ctorStr = "doremi-om.core/t9729";
doremi_om.core.t9729.cljs$lang$ctorPrWriter = (function (this__3956__auto__,writer__3957__auto__,opt__3958__auto__){return cljs.core._write.call(null,writer__3957__auto__,"doremi-om.core/t9729");
});
doremi_om.core.t9729.prototype.om$core$IRender$ = true;
doremi_om.core.t9729.prototype.om$core$IRender$render$arity$1 = (function (this__4917__auto__){var self__ = this;
var this__4917__auto____$1 = this;return React.DOM.div({"className": "commentList"},om.core.build_all.call(null,doremi_om.core.comment,self__.comments,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"id","id",1013907597)], null)));
});
doremi_om.core.t9729.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9731){var self__ = this;
var _9731__$1 = this;return self__.meta9730;
});
doremi_om.core.t9729.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9731,meta9730__$1){var self__ = this;
var _9731__$1 = this;return (new doremi_om.core.t9729(self__.comments,self__.app,self__.map__9728,self__.p__9723,self__.comment_list,meta9730__$1));
});
doremi_om.core.__GT_t9729 = (function __GT_t9729(comments__$1,app__$1,map__9728__$2,p__9723__$1,comment_list__$1,meta9730){return (new doremi_om.core.t9729(comments__$1,app__$1,map__9728__$2,p__9723__$1,comment_list__$1,meta9730));
});
}
return (new doremi_om.core.t9729(comments,app,map__9728__$1,p__9723,comment_list,null));
});
doremi_om.core.comment_box = (function comment_box(app){if(typeof doremi_om.core.t9735 !== 'undefined')
{} else
{
/**
* @constructor
*/
doremi_om.core.t9735 = (function (app,comment_box,meta9736){
this.app = app;
this.comment_box = comment_box;
this.meta9736 = meta9736;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
doremi_om.core.t9735.cljs$lang$type = true;
doremi_om.core.t9735.cljs$lang$ctorStr = "doremi-om.core/t9735";
doremi_om.core.t9735.cljs$lang$ctorPrWriter = (function (this__3956__auto__,writer__3957__auto__,opt__3958__auto__){return cljs.core._write.call(null,writer__3957__auto__,"doremi-om.core/t9735");
});
doremi_om.core.t9735.prototype.om$core$IRender$ = true;
doremi_om.core.t9735.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "commentBox"},React.DOM.h1(null,"comments"),om.core.build.call(null,doremi_om.core.comment_list,self__.app));
});
doremi_om.core.t9735.prototype.om$core$IInitState$ = true;
doremi_om.core.t9735.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return om.core.transact_BANG_.call(null,self__.app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comments","comments",4706455910)], null),(function (){return cljs.core.PersistentVector.EMPTY;
}));
});
doremi_om.core.t9735.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9737){var self__ = this;
var _9737__$1 = this;return self__.meta9736;
});
doremi_om.core.t9735.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9737,meta9736__$1){var self__ = this;
var _9737__$1 = this;return (new doremi_om.core.t9735(self__.app,self__.comment_box,meta9736__$1));
});
doremi_om.core.__GT_t9735 = (function __GT_t9735(app__$1,comment_box__$1,meta9736){return (new doremi_om.core.t9735(app__$1,comment_box__$1,meta9736));
});
}
return (new doremi_om.core.t9735(app,comment_box,null));
});
doremi_om.core.doremi_om_app = (function doremi_om_app(app,owner){if(typeof doremi_om.core.t9741 !== 'undefined')
{} else
{
/**
* @constructor
*/
doremi_om.core.t9741 = (function (owner,app,doremi_om_app,meta9742){
this.owner = owner;
this.app = app;
this.doremi_om_app = doremi_om_app;
this.meta9742 = meta9742;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
doremi_om.core.t9741.cljs$lang$type = true;
doremi_om.core.t9741.cljs$lang$ctorStr = "doremi-om.core/t9741";
doremi_om.core.t9741.cljs$lang$ctorPrWriter = (function (this__3956__auto__,writer__3957__auto__,opt__3958__auto__){return cljs.core._write.call(null,writer__3957__auto__,"doremi-om.core/t9741");
});
doremi_om.core.t9741.prototype.om$core$IRender$ = true;
doremi_om.core.t9741.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,om.core.build.call(null,doremi_om.core.comment_box,self__.app));
});
doremi_om.core.t9741.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9743){var self__ = this;
var _9743__$1 = this;return self__.meta9742;
});
doremi_om.core.t9741.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9743,meta9742__$1){var self__ = this;
var _9743__$1 = this;return (new doremi_om.core.t9741(self__.owner,self__.app,self__.doremi_om_app,meta9742__$1));
});
doremi_om.core.__GT_t9741 = (function __GT_t9741(owner__$1,app__$1,doremi_om_app__$1,meta9742){return (new doremi_om.core.t9741(owner__$1,app__$1,doremi_om_app__$1,meta9742));
});
}
return (new doremi_om.core.t9741(owner,app,doremi_om_app,null));
});
om.core.root.call(null,doremi_om.core.app_state,doremi_om.core.doremi_om_app,document.getElementById("content"));

//# sourceMappingURL=core.js.map