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
doremi_om.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comments","comments",4706455910),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",3902543101),"Pete Hunt",new cljs.core.Keyword(null,"text","text",1017460895),"This is one comment"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",3902543101),"Jordan Walke",new cljs.core.Keyword(null,"text","text",1017460895),"This is *another* comment"], null)], null)], null));
console.log(markdown.core.mdToHtml.call(null,"##This is a heading\nwith a paragraph following it"));
doremi_om.core.comment = (function comment(p__9636,owner,opts){var map__9641 = p__9636;var map__9641__$1 = ((cljs.core.seq_QMARK_.call(null,map__9641))?cljs.core.apply.call(null,cljs.core.hash_map,map__9641):map__9641);var c = map__9641__$1;var text = cljs.core.get.call(null,map__9641__$1,new cljs.core.Keyword(null,"text","text",1017460895));var author = cljs.core.get.call(null,map__9641__$1,new cljs.core.Keyword(null,"author","author",3902543101));if(typeof doremi_om.core.t9642 !== 'undefined')
{} else
{
/**
* @constructor
*/
doremi_om.core.t9642 = (function (author,text,c,map__9641,opts,owner,p__9636,comment,meta9643){
this.author = author;
this.text = text;
this.c = c;
this.map__9641 = map__9641;
this.opts = opts;
this.owner = owner;
this.p__9636 = p__9636;
this.comment = comment;
this.meta9643 = meta9643;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
doremi_om.core.t9642.cljs$lang$type = true;
doremi_om.core.t9642.cljs$lang$ctorStr = "doremi-om.core/t9642";
doremi_om.core.t9642.cljs$lang$ctorPrWriter = (function (this__3956__auto__,writer__3957__auto__,opt__3958__auto__){return cljs.core._write.call(null,writer__3957__auto__,"doremi-om.core/t9642");
});
doremi_om.core.t9642.prototype.om$core$IRender$ = true;
doremi_om.core.t9642.prototype.om$core$IRender$render$arity$1 = (function (this__4917__auto__){var self__ = this;
var this__4917__auto____$1 = this;var raw_markup = markdown.core.mdToHtml.call(null,self__.text);return React.DOM.div({"className": "comment"},React.DOM.h2({"className": "commentAuthor"},self__.author),React.DOM.span({"dangerouslySetInnerHTML": {"__html": raw_markup}}));
});
doremi_om.core.t9642.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9644){var self__ = this;
var _9644__$1 = this;return self__.meta9643;
});
doremi_om.core.t9642.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9644,meta9643__$1){var self__ = this;
var _9644__$1 = this;return (new doremi_om.core.t9642(self__.author,self__.text,self__.c,self__.map__9641,self__.opts,self__.owner,self__.p__9636,self__.comment,meta9643__$1));
});
doremi_om.core.__GT_t9642 = (function __GT_t9642(author__$1,text__$1,c__$1,map__9641__$2,opts__$1,owner__$1,p__9636__$1,comment__$1,meta9643){return (new doremi_om.core.t9642(author__$1,text__$1,c__$1,map__9641__$2,opts__$1,owner__$1,p__9636__$1,comment__$1,meta9643));
});
}
return (new doremi_om.core.t9642(author,text,c,map__9641__$1,opts,owner,p__9636,comment,null));
});
doremi_om.core.comment_list = (function comment_list(p__9645){var map__9650 = p__9645;var map__9650__$1 = ((cljs.core.seq_QMARK_.call(null,map__9650))?cljs.core.apply.call(null,cljs.core.hash_map,map__9650):map__9650);var app = map__9650__$1;var comments = cljs.core.get.call(null,map__9650__$1,new cljs.core.Keyword(null,"comments","comments",4706455910));if(typeof doremi_om.core.t9651 !== 'undefined')
{} else
{
/**
* @constructor
*/
doremi_om.core.t9651 = (function (comments,app,map__9650,p__9645,comment_list,meta9652){
this.comments = comments;
this.app = app;
this.map__9650 = map__9650;
this.p__9645 = p__9645;
this.comment_list = comment_list;
this.meta9652 = meta9652;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
doremi_om.core.t9651.cljs$lang$type = true;
doremi_om.core.t9651.cljs$lang$ctorStr = "doremi-om.core/t9651";
doremi_om.core.t9651.cljs$lang$ctorPrWriter = (function (this__3956__auto__,writer__3957__auto__,opt__3958__auto__){return cljs.core._write.call(null,writer__3957__auto__,"doremi-om.core/t9651");
});
doremi_om.core.t9651.prototype.om$core$IRender$ = true;
doremi_om.core.t9651.prototype.om$core$IRender$render$arity$1 = (function (this__4917__auto__){var self__ = this;
var this__4917__auto____$1 = this;return React.DOM.div({"className": "commentList"},om.core.build_all.call(null,doremi_om.core.comment,self__.comments));
});
doremi_om.core.t9651.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9653){var self__ = this;
var _9653__$1 = this;return self__.meta9652;
});
doremi_om.core.t9651.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9653,meta9652__$1){var self__ = this;
var _9653__$1 = this;return (new doremi_om.core.t9651(self__.comments,self__.app,self__.map__9650,self__.p__9645,self__.comment_list,meta9652__$1));
});
doremi_om.core.__GT_t9651 = (function __GT_t9651(comments__$1,app__$1,map__9650__$2,p__9645__$1,comment_list__$1,meta9652){return (new doremi_om.core.t9651(comments__$1,app__$1,map__9650__$2,p__9645__$1,comment_list__$1,meta9652));
});
}
return (new doremi_om.core.t9651(comments,app,map__9650__$1,p__9645,comment_list,null));
});
doremi_om.core.comment_box = (function comment_box(app){if(typeof doremi_om.core.t9657 !== 'undefined')
{} else
{
/**
* @constructor
*/
doremi_om.core.t9657 = (function (app,comment_box,meta9658){
this.app = app;
this.comment_box = comment_box;
this.meta9658 = meta9658;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
doremi_om.core.t9657.cljs$lang$type = true;
doremi_om.core.t9657.cljs$lang$ctorStr = "doremi-om.core/t9657";
doremi_om.core.t9657.cljs$lang$ctorPrWriter = (function (this__3956__auto__,writer__3957__auto__,opt__3958__auto__){return cljs.core._write.call(null,writer__3957__auto__,"doremi-om.core/t9657");
});
doremi_om.core.t9657.prototype.om$core$IRender$ = true;
doremi_om.core.t9657.prototype.om$core$IRender$render$arity$1 = (function (this__4917__auto__){var self__ = this;
var this__4917__auto____$1 = this;return React.DOM.div({"className": "commentBox"},React.DOM.h1(null,"comments"),om.core.build.call(null,doremi_om.core.comment_list,self__.app));
});
doremi_om.core.t9657.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9659){var self__ = this;
var _9659__$1 = this;return self__.meta9658;
});
doremi_om.core.t9657.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9659,meta9658__$1){var self__ = this;
var _9659__$1 = this;return (new doremi_om.core.t9657(self__.app,self__.comment_box,meta9658__$1));
});
doremi_om.core.__GT_t9657 = (function __GT_t9657(app__$1,comment_box__$1,meta9658){return (new doremi_om.core.t9657(app__$1,comment_box__$1,meta9658));
});
}
return (new doremi_om.core.t9657(app,comment_box,null));
});
doremi_om.core.doremi_om_app = (function doremi_om_app(app,owner){if(typeof doremi_om.core.t9663 !== 'undefined')
{} else
{
/**
* @constructor
*/
doremi_om.core.t9663 = (function (owner,app,doremi_om_app,meta9664){
this.owner = owner;
this.app = app;
this.doremi_om_app = doremi_om_app;
this.meta9664 = meta9664;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
doremi_om.core.t9663.cljs$lang$type = true;
doremi_om.core.t9663.cljs$lang$ctorStr = "doremi-om.core/t9663";
doremi_om.core.t9663.cljs$lang$ctorPrWriter = (function (this__3956__auto__,writer__3957__auto__,opt__3958__auto__){return cljs.core._write.call(null,writer__3957__auto__,"doremi-om.core/t9663");
});
doremi_om.core.t9663.prototype.om$core$IRender$ = true;
doremi_om.core.t9663.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,om.core.build.call(null,doremi_om.core.comment_box,self__.app));
});
doremi_om.core.t9663.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9665){var self__ = this;
var _9665__$1 = this;return self__.meta9664;
});
doremi_om.core.t9663.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9665,meta9664__$1){var self__ = this;
var _9665__$1 = this;return (new doremi_om.core.t9663(self__.owner,self__.app,self__.doremi_om_app,meta9664__$1));
});
doremi_om.core.__GT_t9663 = (function __GT_t9663(owner__$1,app__$1,doremi_om_app__$1,meta9664){return (new doremi_om.core.t9663(owner__$1,app__$1,doremi_om_app__$1,meta9664));
});
}
return (new doremi_om.core.t9663(owner,app,doremi_om_app,null));
});
om.core.root.call(null,doremi_om.core.app_state,doremi_om.core.doremi_om_app,document.getElementById("content"));

//# sourceMappingURL=core.js.map