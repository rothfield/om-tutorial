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
goog.require('markdown.core');
goog.require('om.dom');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async');
goog.require('goog.events');
cljs.core.enable_console_print_BANG_.call(null);
/**
* @param {...*} var_args
*/
doremi_om.core.log = (function() { 
var log__delegate = function (more){return console.log(cljs.core.pr_str.call(null,more));
};
var log = function (var_args){
var more = null;if (arguments.length > 0) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,more);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__12903){
var more = cljs.core.seq(arglist__12903);
return log__delegate(more);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
doremi_om.core.log.call(null,"hi","john");
doremi_om.core.app_state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
doremi_om.core.with_id = (function with_id(m){return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"id","id",1013907597),doremi_om.utils.guid.call(null));
});
doremi_om.core.fetch_comments = (function fetch_comments(url){if(typeof url === 'string')
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",772676615,null),new cljs.core.Symbol(null,"url","url",-1640415448,null))))].join('')));
}
var c = cljs.core.async.chan.call(null);var c__6166__auto___12992 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6167__auto__ = (function (){var switch__6151__auto__ = (function (state_12972){var state_val_12973 = (state_12972[1]);if((state_val_12973 === 9))
{var inst_12970 = (state_12972[2]);var state_12972__$1 = state_12972;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12972__$1,inst_12970);
} else
{if((state_val_12973 === 8))
{var inst_12965 = (state_12972[2]);var inst_12966 = cljs.core.get.call(null,inst_12965,new cljs.core.Keyword(null,"comments","comments",4706455910));var inst_12967 = cljs.core.map.call(null,doremi_om.core.with_id,inst_12966);var inst_12968 = cljs.core.vec.call(null,inst_12967);var state_12972__$1 = state_12972;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12972__$1,9,c,inst_12968);
} else
{if((state_val_12973 === 7))
{var inst_12959 = (state_12972[7]);var state_12972__$1 = state_12972;var statearr_12974_12993 = state_12972__$1;(statearr_12974_12993[2] = inst_12959);
(statearr_12974_12993[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12973 === 6))
{var inst_12959 = (state_12972[7]);var inst_12962 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12959);var state_12972__$1 = state_12972;var statearr_12975_12994 = state_12972__$1;(statearr_12975_12994[2] = inst_12962);
(statearr_12975_12994[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12973 === 5))
{var inst_12959 = (state_12972[7]);var inst_12958 = (state_12972[2]);var inst_12959__$1 = cljs.core.get.call(null,inst_12958,new cljs.core.Keyword(null,"body","body",1016933652));var inst_12960 = cljs.core.seq_QMARK_.call(null,inst_12959__$1);var state_12972__$1 = (function (){var statearr_12976 = state_12972;(statearr_12976[7] = inst_12959__$1);
return statearr_12976;
})();if(inst_12960)
{var statearr_12977_12995 = state_12972__$1;(statearr_12977_12995[1] = 6);
} else
{var statearr_12978_12996 = state_12972__$1;(statearr_12978_12996[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12973 === 4))
{var inst_12952 = (state_12972[8]);var state_12972__$1 = state_12972;var statearr_12979_12997 = state_12972__$1;(statearr_12979_12997[2] = inst_12952);
(statearr_12979_12997[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12973 === 3))
{var inst_12952 = (state_12972[8]);var inst_12955 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12952);var state_12972__$1 = state_12972;var statearr_12980_12998 = state_12972__$1;(statearr_12980_12998[2] = inst_12955);
(statearr_12980_12998[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12973 === 2))
{var inst_12952 = (state_12972[8]);var inst_12952__$1 = (state_12972[2]);var inst_12953 = cljs.core.seq_QMARK_.call(null,inst_12952__$1);var state_12972__$1 = (function (){var statearr_12981 = state_12972;(statearr_12981[8] = inst_12952__$1);
return statearr_12981;
})();if(inst_12953)
{var statearr_12982_12999 = state_12972__$1;(statearr_12982_12999[1] = 3);
} else
{var statearr_12983_13000 = state_12972__$1;(statearr_12983_13000[1] = 4);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12973 === 1))
{var inst_12950 = cljs_http.client.get.call(null,url);var state_12972__$1 = state_12972;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12972__$1,2,inst_12950);
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
var state_machine__6152__auto____0 = (function (){var statearr_12987 = [null,null,null,null,null,null,null,null,null];(statearr_12987[0] = state_machine__6152__auto__);
(statearr_12987[1] = 1);
return statearr_12987;
});
var state_machine__6152__auto____1 = (function (state_12972){while(true){
var ret_value__6153__auto__ = (function (){try{while(true){
var result__6154__auto__ = switch__6151__auto__.call(null,state_12972);if(cljs.core.keyword_identical_QMARK_.call(null,result__6154__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6154__auto__;
}
break;
}
}catch (e12988){if((e12988 instanceof Object))
{var ex__6155__auto__ = e12988;var statearr_12989_13001 = state_12972;(statearr_12989_13001[5] = ex__6155__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12972);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12988;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6153__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13002 = state_12972;
state_12972 = G__13002;
continue;
}
} else
{return ret_value__6153__auto__;
}
break;
}
});
state_machine__6152__auto__ = function(state_12972){
switch(arguments.length){
case 0:
return state_machine__6152__auto____0.call(this);
case 1:
return state_machine__6152__auto____1.call(this,state_12972);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6152__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6152__auto____0;
state_machine__6152__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6152__auto____1;
return state_machine__6152__auto__;
})()
;})(switch__6151__auto__))
})();var state__6168__auto__ = (function (){var statearr_12990 = f__6167__auto__.call(null);(statearr_12990[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6166__auto___12992);
return statearr_12990;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6168__auto__);
}));
if((function (){var G__12991 = c;if(G__12991)
{var bit__4038__auto__ = null;if(cljs.core.truth_((function (){var or__3394__auto__ = bit__4038__auto__;if(cljs.core.truth_(or__3394__auto__))
{return or__3394__auto__;
} else
{return G__12991.cljs$core$async$impl$protocols$Channel$;
}
})()))
{return true;
} else
{if((!G__12991.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.Channel,G__12991);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.Channel,G__12991);
}
})())
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",396750295,null),new cljs.core.Symbol("cljs.core.async.impl.protocols","Channel","cljs.core.async.impl.protocols/Channel",1741872314,null),new cljs.core.Symbol(null,"c","c",-1640531428,null))))].join('')));
}
return c;
});
doremi_om.core.comment = (function comment(p__13003,owner,opts){var map__13008 = p__13003;var map__13008__$1 = ((cljs.core.seq_QMARK_.call(null,map__13008))?cljs.core.apply.call(null,cljs.core.hash_map,map__13008):map__13008);var c = map__13008__$1;var text = cljs.core.get.call(null,map__13008__$1,new cljs.core.Keyword(null,"text","text",1017460895));var author = cljs.core.get.call(null,map__13008__$1,new cljs.core.Keyword(null,"author","author",3902543101));if(typeof doremi_om.core.t13009 !== 'undefined')
{} else
{
/**
* @constructor
*/
doremi_om.core.t13009 = (function (author,text,c,map__13008,opts,owner,p__13003,comment,meta13010){
this.author = author;
this.text = text;
this.c = c;
this.map__13008 = map__13008;
this.opts = opts;
this.owner = owner;
this.p__13003 = p__13003;
this.comment = comment;
this.meta13010 = meta13010;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
doremi_om.core.t13009.cljs$lang$type = true;
doremi_om.core.t13009.cljs$lang$ctorStr = "doremi-om.core/t13009";
doremi_om.core.t13009.cljs$lang$ctorPrWriter = (function (this__3956__auto__,writer__3957__auto__,opt__3958__auto__){return cljs.core._write.call(null,writer__3957__auto__,"doremi-om.core/t13009");
});
doremi_om.core.t13009.prototype.om$core$IRender$ = true;
doremi_om.core.t13009.prototype.om$core$IRender$render$arity$1 = (function (this__4917__auto__){var self__ = this;
var this__4917__auto____$1 = this;var raw_markup = markdown.core.mdToHtml.call(null,self__.text);return React.DOM.div({"className": "comment"},React.DOM.h2({"className": "commentAuthor"},self__.author),React.DOM.span({"dangerouslySetInnerHTML": {"__html": raw_markup}}));
});
doremi_om.core.t13009.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13011){var self__ = this;
var _13011__$1 = this;return self__.meta13010;
});
doremi_om.core.t13009.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13011,meta13010__$1){var self__ = this;
var _13011__$1 = this;return (new doremi_om.core.t13009(self__.author,self__.text,self__.c,self__.map__13008,self__.opts,self__.owner,self__.p__13003,self__.comment,meta13010__$1));
});
doremi_om.core.__GT_t13009 = (function __GT_t13009(author__$1,text__$1,c__$1,map__13008__$2,opts__$1,owner__$1,p__13003__$1,comment__$1,meta13010){return (new doremi_om.core.t13009(author__$1,text__$1,c__$1,map__13008__$2,opts__$1,owner__$1,p__13003__$1,comment__$1,meta13010));
});
}
return (new doremi_om.core.t13009(author,text,c,map__13008__$1,opts,owner,p__13003,comment,null));
});
doremi_om.core.comment_list = (function comment_list(p__13012){var map__13017 = p__13012;var map__13017__$1 = ((cljs.core.seq_QMARK_.call(null,map__13017))?cljs.core.apply.call(null,cljs.core.hash_map,map__13017):map__13017);var app = map__13017__$1;var comments = cljs.core.get.call(null,map__13017__$1,new cljs.core.Keyword(null,"comments","comments",4706455910));if(typeof doremi_om.core.t13018 !== 'undefined')
{} else
{
/**
* @constructor
*/
doremi_om.core.t13018 = (function (comments,app,map__13017,p__13012,comment_list,meta13019){
this.comments = comments;
this.app = app;
this.map__13017 = map__13017;
this.p__13012 = p__13012;
this.comment_list = comment_list;
this.meta13019 = meta13019;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
doremi_om.core.t13018.cljs$lang$type = true;
doremi_om.core.t13018.cljs$lang$ctorStr = "doremi-om.core/t13018";
doremi_om.core.t13018.cljs$lang$ctorPrWriter = (function (this__3956__auto__,writer__3957__auto__,opt__3958__auto__){return cljs.core._write.call(null,writer__3957__auto__,"doremi-om.core/t13018");
});
doremi_om.core.t13018.prototype.om$core$IRender$ = true;
doremi_om.core.t13018.prototype.om$core$IRender$render$arity$1 = (function (this__4917__auto__){var self__ = this;
var this__4917__auto____$1 = this;return React.DOM.div({"className": "commentList"},om.core.build_all.call(null,doremi_om.core.comment,self__.comments,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"id","id",1013907597)], null)));
});
doremi_om.core.t13018.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13020){var self__ = this;
var _13020__$1 = this;return self__.meta13019;
});
doremi_om.core.t13018.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13020,meta13019__$1){var self__ = this;
var _13020__$1 = this;return (new doremi_om.core.t13018(self__.comments,self__.app,self__.map__13017,self__.p__13012,self__.comment_list,meta13019__$1));
});
doremi_om.core.__GT_t13018 = (function __GT_t13018(comments__$1,app__$1,map__13017__$2,p__13012__$1,comment_list__$1,meta13019){return (new doremi_om.core.t13018(comments__$1,app__$1,map__13017__$2,p__13012__$1,comment_list__$1,meta13019));
});
}
return (new doremi_om.core.t13018(comments,app,map__13017__$1,p__13012,comment_list,null));
});
doremi_om.core.comment_box = (function comment_box(app,owner,opts){if(typeof doremi_om.core.t13061 !== 'undefined')
{} else
{
/**
* @constructor
*/
doremi_om.core.t13061 = (function (opts,owner,app,comment_box,meta13062){
this.opts = opts;
this.owner = owner;
this.app = app;
this.comment_box = comment_box;
this.meta13062 = meta13062;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
doremi_om.core.t13061.cljs$lang$type = true;
doremi_om.core.t13061.cljs$lang$ctorStr = "doremi-om.core/t13061";
doremi_om.core.t13061.cljs$lang$ctorPrWriter = (function (this__3956__auto__,writer__3957__auto__,opt__3958__auto__){return cljs.core._write.call(null,writer__3957__auto__,"doremi-om.core/t13061");
});
doremi_om.core.t13061.prototype.om$core$IRender$ = true;
doremi_om.core.t13061.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "commentBox"},React.DOM.h1(null,"comments"),om.core.build.call(null,doremi_om.core.comment_list,self__.app));
});
doremi_om.core.t13061.prototype.om$core$IInitState$ = true;
doremi_om.core.t13061.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return om.core.transact_BANG_.call(null,self__.app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comments","comments",4706455910)], null),(function (){return cljs.core.PersistentVector.EMPTY;
}));
});
doremi_om.core.t13061.prototype.om$core$IWillMount$ = true;
doremi_om.core.t13061.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var c__6166__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6167__auto__ = (function (){var switch__6151__auto__ = (function (state_13083){var state_val_13084 = (state_13083[1]);if((state_val_13084 === 8))
{var inst_13075 = (state_13083[2]);var state_13083__$1 = (function (){var statearr_13085 = state_13083;(statearr_13085[7] = inst_13075);
return statearr_13085;
})();var statearr_13086_13100 = state_13083__$1;(statearr_13086_13100[2] = null);
(statearr_13086_13100[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13084 === 7))
{var inst_13069 = (state_13083[2]);var inst_13070 = (function (){var comments = inst_13069;return ((function (comments,inst_13069,state_val_13084){
return (function (p1__13021_SHARP_){return cljs.core.assoc.call(null,p1__13021_SHARP_,new cljs.core.Keyword(null,"comments","comments",4706455910),comments);
});
;})(comments,inst_13069,state_val_13084))
})();var inst_13071 = om.core.update_BANG_.call(null,self__.app,inst_13070);var inst_13072 = new cljs.core.Keyword(null,"poll-interval","poll-interval",4249291397).cljs$core$IFn$_invoke$arity$1(self__.opts);var inst_13073 = cljs.core.async.timeout.call(null,inst_13072);var state_13083__$1 = (function (){var statearr_13087 = state_13083;(statearr_13087[8] = inst_13071);
return statearr_13087;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13083__$1,8,inst_13073);
} else
{if((state_val_13084 === 6))
{var inst_13079 = (state_13083[2]);var state_13083__$1 = state_13083;var statearr_13088_13101 = state_13083__$1;(statearr_13088_13101[2] = inst_13079);
(statearr_13088_13101[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13084 === 5))
{var state_13083__$1 = state_13083;var statearr_13089_13102 = state_13083__$1;(statearr_13089_13102[2] = null);
(statearr_13089_13102[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13084 === 4))
{var inst_13066 = new cljs.core.Keyword(null,"url","url",1014020321).cljs$core$IFn$_invoke$arity$1(self__.opts);var inst_13067 = doremi_om.core.fetch_comments.call(null,inst_13066);var state_13083__$1 = state_13083;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13083__$1,7,inst_13067);
} else
{if((state_val_13084 === 3))
{var inst_13081 = (state_13083[2]);var state_13083__$1 = state_13083;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13083__$1,inst_13081);
} else
{if((state_val_13084 === 2))
{var state_13083__$1 = state_13083;if(true)
{var statearr_13090_13103 = state_13083__$1;(statearr_13090_13103[1] = 4);
} else
{var statearr_13091_13104 = state_13083__$1;(statearr_13091_13104[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13084 === 1))
{var state_13083__$1 = state_13083;var statearr_13092_13105 = state_13083__$1;(statearr_13092_13105[2] = null);
(statearr_13092_13105[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});return ((function (switch__6151__auto__){
return (function() {
var state_machine__6152__auto__ = null;
var state_machine__6152__auto____0 = (function (){var statearr_13096 = [null,null,null,null,null,null,null,null,null];(statearr_13096[0] = state_machine__6152__auto__);
(statearr_13096[1] = 1);
return statearr_13096;
});
var state_machine__6152__auto____1 = (function (state_13083){while(true){
var ret_value__6153__auto__ = (function (){try{while(true){
var result__6154__auto__ = switch__6151__auto__.call(null,state_13083);if(cljs.core.keyword_identical_QMARK_.call(null,result__6154__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6154__auto__;
}
break;
}
}catch (e13097){if((e13097 instanceof Object))
{var ex__6155__auto__ = e13097;var statearr_13098_13106 = state_13083;(statearr_13098_13106[5] = ex__6155__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13083);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13097;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6153__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13107 = state_13083;
state_13083 = G__13107;
continue;
}
} else
{return ret_value__6153__auto__;
}
break;
}
});
state_machine__6152__auto__ = function(state_13083){
switch(arguments.length){
case 0:
return state_machine__6152__auto____0.call(this);
case 1:
return state_machine__6152__auto____1.call(this,state_13083);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6152__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6152__auto____0;
state_machine__6152__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6152__auto____1;
return state_machine__6152__auto__;
})()
;})(switch__6151__auto__))
})();var state__6168__auto__ = (function (){var statearr_13099 = f__6167__auto__.call(null);(statearr_13099[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6166__auto__);
return statearr_13099;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6168__auto__);
}));
return c__6166__auto__;
});
doremi_om.core.t13061.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13063){var self__ = this;
var _13063__$1 = this;return self__.meta13062;
});
doremi_om.core.t13061.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13063,meta13062__$1){var self__ = this;
var _13063__$1 = this;return (new doremi_om.core.t13061(self__.opts,self__.owner,self__.app,self__.comment_box,meta13062__$1));
});
doremi_om.core.__GT_t13061 = (function __GT_t13061(opts__$1,owner__$1,app__$1,comment_box__$1,meta13062){return (new doremi_om.core.t13061(opts__$1,owner__$1,app__$1,comment_box__$1,meta13062));
});
}
return (new doremi_om.core.t13061(opts,owner,app,comment_box,null));
});
doremi_om.core.doremi_om_app = (function doremi_om_app(app,owner){if(typeof doremi_om.core.t13111 !== 'undefined')
{} else
{
/**
* @constructor
*/
doremi_om.core.t13111 = (function (owner,app,doremi_om_app,meta13112){
this.owner = owner;
this.app = app;
this.doremi_om_app = doremi_om_app;
this.meta13112 = meta13112;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
doremi_om.core.t13111.cljs$lang$type = true;
doremi_om.core.t13111.cljs$lang$ctorStr = "doremi-om.core/t13111";
doremi_om.core.t13111.cljs$lang$ctorPrWriter = (function (this__3956__auto__,writer__3957__auto__,opt__3958__auto__){return cljs.core._write.call(null,writer__3957__auto__,"doremi-om.core/t13111");
});
doremi_om.core.t13111.prototype.om$core$IRender$ = true;
doremi_om.core.t13111.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,om.core.build.call(null,doremi_om.core.comment_box,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",1014020321),"/comments",new cljs.core.Keyword(null,"poll-interval","poll-interval",4249291397),2000], null)], null)));
});
doremi_om.core.t13111.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13113){var self__ = this;
var _13113__$1 = this;return self__.meta13112;
});
doremi_om.core.t13111.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13113,meta13112__$1){var self__ = this;
var _13113__$1 = this;return (new doremi_om.core.t13111(self__.owner,self__.app,self__.doremi_om_app,meta13112__$1));
});
doremi_om.core.__GT_t13111 = (function __GT_t13111(owner__$1,app__$1,doremi_om_app__$1,meta13112){return (new doremi_om.core.t13111(owner__$1,app__$1,doremi_om_app__$1,meta13112));
});
}
return (new doremi_om.core.t13111(owner,app,doremi_om_app,null));
});
om.core.root.call(null,doremi_om.core.app_state,doremi_om.core.doremi_om_app,document.getElementById("content"));

//# sourceMappingURL=core.js.map