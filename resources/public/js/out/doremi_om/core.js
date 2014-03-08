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
doremi_om.core.with_id = (function with_id(m){return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"id","id",1013907597),doremi_om.utils.guid.call(null));
});
doremi_om.core.fetch_comments = (function fetch_comments(url){var c = cljs.core.async.chan.call(null);var c__6166__auto___10022 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6167__auto__ = (function (){var switch__6151__auto__ = (function (state_10003){var state_val_10004 = (state_10003[1]);if((state_val_10004 === 9))
{var inst_10001 = (state_10003[2]);var state_10003__$1 = state_10003;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10003__$1,inst_10001);
} else
{if((state_val_10004 === 8))
{var inst_9996 = (state_10003[2]);var inst_9997 = cljs.core.get.call(null,inst_9996,new cljs.core.Keyword(null,"comments","comments",4706455910));var inst_9998 = cljs.core.map.call(null,doremi_om.core.with_id,inst_9997);var inst_9999 = cljs.core.vec.call(null,inst_9998);var state_10003__$1 = state_10003;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10003__$1,9,c,inst_9999);
} else
{if((state_val_10004 === 7))
{var inst_9990 = (state_10003[7]);var state_10003__$1 = state_10003;var statearr_10005_10023 = state_10003__$1;(statearr_10005_10023[2] = inst_9990);
(statearr_10005_10023[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10004 === 6))
{var inst_9990 = (state_10003[7]);var inst_9993 = cljs.core.apply.call(null,cljs.core.hash_map,inst_9990);var state_10003__$1 = state_10003;var statearr_10006_10024 = state_10003__$1;(statearr_10006_10024[2] = inst_9993);
(statearr_10006_10024[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10004 === 5))
{var inst_9990 = (state_10003[7]);var inst_9989 = (state_10003[2]);var inst_9990__$1 = cljs.core.get.call(null,inst_9989,new cljs.core.Keyword(null,"body","body",1016933652));var inst_9991 = cljs.core.seq_QMARK_.call(null,inst_9990__$1);var state_10003__$1 = (function (){var statearr_10007 = state_10003;(statearr_10007[7] = inst_9990__$1);
return statearr_10007;
})();if(inst_9991)
{var statearr_10008_10025 = state_10003__$1;(statearr_10008_10025[1] = 6);
} else
{var statearr_10009_10026 = state_10003__$1;(statearr_10009_10026[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10004 === 4))
{var inst_9983 = (state_10003[8]);var state_10003__$1 = state_10003;var statearr_10010_10027 = state_10003__$1;(statearr_10010_10027[2] = inst_9983);
(statearr_10010_10027[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10004 === 3))
{var inst_9983 = (state_10003[8]);var inst_9986 = cljs.core.apply.call(null,cljs.core.hash_map,inst_9983);var state_10003__$1 = state_10003;var statearr_10011_10028 = state_10003__$1;(statearr_10011_10028[2] = inst_9986);
(statearr_10011_10028[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10004 === 2))
{var inst_9983 = (state_10003[8]);var inst_9983__$1 = (state_10003[2]);var inst_9984 = cljs.core.seq_QMARK_.call(null,inst_9983__$1);var state_10003__$1 = (function (){var statearr_10012 = state_10003;(statearr_10012[8] = inst_9983__$1);
return statearr_10012;
})();if(inst_9984)
{var statearr_10013_10029 = state_10003__$1;(statearr_10013_10029[1] = 3);
} else
{var statearr_10014_10030 = state_10003__$1;(statearr_10014_10030[1] = 4);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10004 === 1))
{var inst_9981 = cljs_http.client.get.call(null,url);var state_10003__$1 = state_10003;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10003__$1,2,inst_9981);
} else
{return null;
}
}
}
}
}
}
}
}
}
});return ((function (switch__6151__auto__){
return (function() {
var state_machine__6152__auto__ = null;
var state_machine__6152__auto____0 = (function (){var statearr_10018 = [null,null,null,null,null,null,null,null,null];(statearr_10018[0] = state_machine__6152__auto__);
(statearr_10018[1] = 1);
return statearr_10018;
});
var state_machine__6152__auto____1 = (function (state_10003){while(true){
var ret_value__6153__auto__ = (function (){try{while(true){
var result__6154__auto__ = switch__6151__auto__.call(null,state_10003);if(cljs.core.keyword_identical_QMARK_.call(null,result__6154__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6154__auto__;
}
break;
}
}catch (e10019){if((e10019 instanceof Object))
{var ex__6155__auto__ = e10019;var statearr_10020_10031 = state_10003;(statearr_10020_10031[5] = ex__6155__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10003);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10019;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6153__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10032 = state_10003;
state_10003 = G__10032;
continue;
}
} else
{return ret_value__6153__auto__;
}
break;
}
});
state_machine__6152__auto__ = function(state_10003){
switch(arguments.length){
case 0:
return state_machine__6152__auto____0.call(this);
case 1:
return state_machine__6152__auto____1.call(this,state_10003);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6152__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6152__auto____0;
state_machine__6152__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6152__auto____1;
return state_machine__6152__auto__;
})()
;})(switch__6151__auto__))
})();var state__6168__auto__ = (function (){var statearr_10021 = f__6167__auto__.call(null);(statearr_10021[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6166__auto___10022);
return statearr_10021;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6168__auto__);
}));
return c;
});
doremi_om.core.comment = (function comment(p__10033,owner,opts){var map__10038 = p__10033;var map__10038__$1 = ((cljs.core.seq_QMARK_.call(null,map__10038))?cljs.core.apply.call(null,cljs.core.hash_map,map__10038):map__10038);var c = map__10038__$1;var text = cljs.core.get.call(null,map__10038__$1,new cljs.core.Keyword(null,"text","text",1017460895));var author = cljs.core.get.call(null,map__10038__$1,new cljs.core.Keyword(null,"author","author",3902543101));if(typeof doremi_om.core.t10039 !== 'undefined')
{} else
{
/**
* @constructor
*/
doremi_om.core.t10039 = (function (author,text,c,map__10038,opts,owner,p__10033,comment,meta10040){
this.author = author;
this.text = text;
this.c = c;
this.map__10038 = map__10038;
this.opts = opts;
this.owner = owner;
this.p__10033 = p__10033;
this.comment = comment;
this.meta10040 = meta10040;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
doremi_om.core.t10039.cljs$lang$type = true;
doremi_om.core.t10039.cljs$lang$ctorStr = "doremi-om.core/t10039";
doremi_om.core.t10039.cljs$lang$ctorPrWriter = (function (this__3956__auto__,writer__3957__auto__,opt__3958__auto__){return cljs.core._write.call(null,writer__3957__auto__,"doremi-om.core/t10039");
});
doremi_om.core.t10039.prototype.om$core$IRender$ = true;
doremi_om.core.t10039.prototype.om$core$IRender$render$arity$1 = (function (this__4917__auto__){var self__ = this;
var this__4917__auto____$1 = this;var raw_markup = markdown.core.mdToHtml.call(null,self__.text);return React.DOM.div({"className": "comment"},React.DOM.h2({"className": "commentAuthor"},self__.author),React.DOM.span({"dangerouslySetInnerHTML": {"__html": raw_markup}}));
});
doremi_om.core.t10039.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10041){var self__ = this;
var _10041__$1 = this;return self__.meta10040;
});
doremi_om.core.t10039.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10041,meta10040__$1){var self__ = this;
var _10041__$1 = this;return (new doremi_om.core.t10039(self__.author,self__.text,self__.c,self__.map__10038,self__.opts,self__.owner,self__.p__10033,self__.comment,meta10040__$1));
});
doremi_om.core.__GT_t10039 = (function __GT_t10039(author__$1,text__$1,c__$1,map__10038__$2,opts__$1,owner__$1,p__10033__$1,comment__$1,meta10040){return (new doremi_om.core.t10039(author__$1,text__$1,c__$1,map__10038__$2,opts__$1,owner__$1,p__10033__$1,comment__$1,meta10040));
});
}
return (new doremi_om.core.t10039(author,text,c,map__10038__$1,opts,owner,p__10033,comment,null));
});
doremi_om.core.comment_list = (function comment_list(p__10042){var map__10047 = p__10042;var map__10047__$1 = ((cljs.core.seq_QMARK_.call(null,map__10047))?cljs.core.apply.call(null,cljs.core.hash_map,map__10047):map__10047);var app = map__10047__$1;var comments = cljs.core.get.call(null,map__10047__$1,new cljs.core.Keyword(null,"comments","comments",4706455910));if(typeof doremi_om.core.t10048 !== 'undefined')
{} else
{
/**
* @constructor
*/
doremi_om.core.t10048 = (function (comments,app,map__10047,p__10042,comment_list,meta10049){
this.comments = comments;
this.app = app;
this.map__10047 = map__10047;
this.p__10042 = p__10042;
this.comment_list = comment_list;
this.meta10049 = meta10049;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
doremi_om.core.t10048.cljs$lang$type = true;
doremi_om.core.t10048.cljs$lang$ctorStr = "doremi-om.core/t10048";
doremi_om.core.t10048.cljs$lang$ctorPrWriter = (function (this__3956__auto__,writer__3957__auto__,opt__3958__auto__){return cljs.core._write.call(null,writer__3957__auto__,"doremi-om.core/t10048");
});
doremi_om.core.t10048.prototype.om$core$IRender$ = true;
doremi_om.core.t10048.prototype.om$core$IRender$render$arity$1 = (function (this__4917__auto__){var self__ = this;
var this__4917__auto____$1 = this;return React.DOM.div({"className": "commentList"},om.core.build_all.call(null,doremi_om.core.comment,self__.comments,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"id","id",1013907597)], null)));
});
doremi_om.core.t10048.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10050){var self__ = this;
var _10050__$1 = this;return self__.meta10049;
});
doremi_om.core.t10048.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10050,meta10049__$1){var self__ = this;
var _10050__$1 = this;return (new doremi_om.core.t10048(self__.comments,self__.app,self__.map__10047,self__.p__10042,self__.comment_list,meta10049__$1));
});
doremi_om.core.__GT_t10048 = (function __GT_t10048(comments__$1,app__$1,map__10047__$2,p__10042__$1,comment_list__$1,meta10049){return (new doremi_om.core.t10048(comments__$1,app__$1,map__10047__$2,p__10042__$1,comment_list__$1,meta10049));
});
}
return (new doremi_om.core.t10048(comments,app,map__10047__$1,p__10042,comment_list,null));
});
doremi_om.core.comment_box = (function comment_box(app,owner,opts){if(typeof doremi_om.core.t10071 !== 'undefined')
{} else
{
/**
* @constructor
*/
doremi_om.core.t10071 = (function (opts,owner,app,comment_box,meta10072){
this.opts = opts;
this.owner = owner;
this.app = app;
this.comment_box = comment_box;
this.meta10072 = meta10072;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
doremi_om.core.t10071.cljs$lang$type = true;
doremi_om.core.t10071.cljs$lang$ctorStr = "doremi-om.core/t10071";
doremi_om.core.t10071.cljs$lang$ctorPrWriter = (function (this__3956__auto__,writer__3957__auto__,opt__3958__auto__){return cljs.core._write.call(null,writer__3957__auto__,"doremi-om.core/t10071");
});
doremi_om.core.t10071.prototype.om$core$IRender$ = true;
doremi_om.core.t10071.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "commentBox"},React.DOM.h1(null,"comments"),om.core.build.call(null,doremi_om.core.comment_list,self__.app));
});
doremi_om.core.t10071.prototype.om$core$IInitState$ = true;
doremi_om.core.t10071.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return om.core.transact_BANG_.call(null,self__.app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comments","comments",4706455910)], null),(function (){return cljs.core.PersistentVector.EMPTY;
}));
});
doremi_om.core.t10071.prototype.om$core$IWillMount$ = true;
doremi_om.core.t10071.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var c__6166__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6167__auto__ = (function (){var switch__6151__auto__ = (function (state_10081){var state_val_10082 = (state_10081[1]);if((state_val_10082 === 2))
{var inst_10077 = (state_10081[2]);var inst_10078 = (function (){var comments = inst_10077;return ((function (comments,inst_10077,state_val_10082){
return (function (p1__10051_SHARP_){return cljs.core.assoc.call(null,p1__10051_SHARP_,new cljs.core.Keyword(null,"comments","comments",4706455910),comments);
});
;})(comments,inst_10077,state_val_10082))
})();var inst_10079 = om.core.update_BANG_.call(null,self__.app,inst_10078);var state_10081__$1 = state_10081;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10081__$1,inst_10079);
} else
{if((state_val_10082 === 1))
{var inst_10074 = new cljs.core.Keyword(null,"url","url",1014020321).cljs$core$IFn$_invoke$arity$1(self__.opts);var inst_10075 = doremi_om.core.fetch_comments.call(null,inst_10074);var state_10081__$1 = state_10081;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10081__$1,2,inst_10075);
} else
{return null;
}
}
});return ((function (switch__6151__auto__){
return (function() {
var state_machine__6152__auto__ = null;
var state_machine__6152__auto____0 = (function (){var statearr_10086 = [null,null,null,null,null,null,null];(statearr_10086[0] = state_machine__6152__auto__);
(statearr_10086[1] = 1);
return statearr_10086;
});
var state_machine__6152__auto____1 = (function (state_10081){while(true){
var ret_value__6153__auto__ = (function (){try{while(true){
var result__6154__auto__ = switch__6151__auto__.call(null,state_10081);if(cljs.core.keyword_identical_QMARK_.call(null,result__6154__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6154__auto__;
}
break;
}
}catch (e10087){if((e10087 instanceof Object))
{var ex__6155__auto__ = e10087;var statearr_10088_10090 = state_10081;(statearr_10088_10090[5] = ex__6155__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10081);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10087;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6153__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10091 = state_10081;
state_10081 = G__10091;
continue;
}
} else
{return ret_value__6153__auto__;
}
break;
}
});
state_machine__6152__auto__ = function(state_10081){
switch(arguments.length){
case 0:
return state_machine__6152__auto____0.call(this);
case 1:
return state_machine__6152__auto____1.call(this,state_10081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6152__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6152__auto____0;
state_machine__6152__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6152__auto____1;
return state_machine__6152__auto__;
})()
;})(switch__6151__auto__))
})();var state__6168__auto__ = (function (){var statearr_10089 = f__6167__auto__.call(null);(statearr_10089[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6166__auto__);
return statearr_10089;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6168__auto__);
}));
return c__6166__auto__;
});
doremi_om.core.t10071.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10073){var self__ = this;
var _10073__$1 = this;return self__.meta10072;
});
doremi_om.core.t10071.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10073,meta10072__$1){var self__ = this;
var _10073__$1 = this;return (new doremi_om.core.t10071(self__.opts,self__.owner,self__.app,self__.comment_box,meta10072__$1));
});
doremi_om.core.__GT_t10071 = (function __GT_t10071(opts__$1,owner__$1,app__$1,comment_box__$1,meta10072){return (new doremi_om.core.t10071(opts__$1,owner__$1,app__$1,comment_box__$1,meta10072));
});
}
return (new doremi_om.core.t10071(opts,owner,app,comment_box,null));
});
doremi_om.core.doremi_om_app = (function doremi_om_app(app,owner){if(typeof doremi_om.core.t10095 !== 'undefined')
{} else
{
/**
* @constructor
*/
doremi_om.core.t10095 = (function (owner,app,doremi_om_app,meta10096){
this.owner = owner;
this.app = app;
this.doremi_om_app = doremi_om_app;
this.meta10096 = meta10096;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
doremi_om.core.t10095.cljs$lang$type = true;
doremi_om.core.t10095.cljs$lang$ctorStr = "doremi-om.core/t10095";
doremi_om.core.t10095.cljs$lang$ctorPrWriter = (function (this__3956__auto__,writer__3957__auto__,opt__3958__auto__){return cljs.core._write.call(null,writer__3957__auto__,"doremi-om.core/t10095");
});
doremi_om.core.t10095.prototype.om$core$IRender$ = true;
doremi_om.core.t10095.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,om.core.build.call(null,doremi_om.core.comment_box,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",1014020321),"/comments"], null)], null)));
});
doremi_om.core.t10095.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10097){var self__ = this;
var _10097__$1 = this;return self__.meta10096;
});
doremi_om.core.t10095.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10097,meta10096__$1){var self__ = this;
var _10097__$1 = this;return (new doremi_om.core.t10095(self__.owner,self__.app,self__.doremi_om_app,meta10096__$1));
});
doremi_om.core.__GT_t10095 = (function __GT_t10095(owner__$1,app__$1,doremi_om_app__$1,meta10096){return (new doremi_om.core.t10095(owner__$1,app__$1,doremi_om_app__$1,meta10096));
});
}
return (new doremi_om.core.t10095(owner,app,doremi_om_app,null));
});
om.core.root.call(null,doremi_om.core.app_state,doremi_om.core.doremi_om_app,document.getElementById("content"));

//# sourceMappingURL=core.js.map