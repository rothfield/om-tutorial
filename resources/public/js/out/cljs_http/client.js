// Compiled by ClojureScript 0.0-2138
goog.provide('cljs_http.client');
goog.require('cljs.core');
goog.require('no.en.core');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('no.en.core');
goog.require('cljs_http.core');
goog.require('cljs_http.util');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('cljs_http.util');
goog.require('goog.Uri');
goog.require('cljs_http.core');
cljs_http.client.if_pos = (function if_pos(v){if(cljs.core.truth_((function (){var and__3382__auto__ = v;if(cljs.core.truth_(and__3382__auto__))
{return (v > 0);
} else
{return and__3382__auto__;
}
})()))
{return v;
} else
{return null;
}
});
/**
* Parse `s` as query params and return a hash map.
*/
cljs_http.client.parse_query_params = (function parse_query_params(s){if(cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,s)))
{return cljs.core.reduce.call(null,(function (p1__10301_SHARP_,p2__10300_SHARP_){var vec__10303 = clojure.string.split.call(null,p2__10300_SHARP_,/=/);var k = cljs.core.nth.call(null,vec__10303,0,null);var v = cljs.core.nth.call(null,vec__10303,1,null);return cljs.core.assoc.call(null,p1__10301_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),no.en.core.url_decode.call(null,v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,[cljs.core.str(s)].join(''),/&/));
} else
{return null;
}
});
/**
* Parse `url` into a hash map.
*/
cljs_http.client.parse_url = (function parse_url(url){if(cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,url)))
{var uri = goog.Uri.parse(url);var query_data = uri.getQueryData();return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"scheme","scheme",4400883991),cljs.core.keyword.call(null,uri.getScheme()),new cljs.core.Keyword(null,"server-name","server-name",4503925319),uri.getDomain(),new cljs.core.Keyword(null,"server-port","server-port",4503998525),cljs_http.client.if_pos.call(null,uri.getPort()),new cljs.core.Keyword(null,"uri","uri",1014020318),uri.getPath(),new cljs.core.Keyword(null,"query-string","query-string",1183691816),((cljs.core.not.call(null,query_data.isEmpty()))?[cljs.core.str(query_data)].join(''):null),new cljs.core.Keyword(null,"query-params","query-params",1080249757),((cljs.core.not.call(null,query_data.isEmpty()))?cljs_http.client.parse_query_params.call(null,[cljs.core.str(query_data)].join('')):null)], null);
} else
{return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [200,null,201,null,202,null,203,null,204,null,300,null,205,null,301,null,206,null,302,null,207,null,303,null,307,null], null), null);
cljs_http.client.generate_query_string = (function generate_query_string(params){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__10306){var vec__10307 = p__10306;var k = cljs.core.nth.call(null,vec__10307,0,null);var v = cljs.core.nth.call(null,vec__10307,1,null);return [cljs.core.str(no.en.core.url_encode.call(null,cljs.core.name.call(null,k))),cljs.core.str("="),cljs.core.str(no.en.core.url_encode.call(null,[cljs.core.str(v)].join('')))].join('');
}),params));
});
/**
* Decocde the :body of `response` with `decode-fn` if the content type matches.
*/
cljs_http.client.decode_body = (function decode_body(response,decode_fn,content_type){if(cljs.core.truth_(cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,[cljs.core.str("(?i)"),cljs.core.str(content_type)].join('')),[cljs.core.str(cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",1809212152).cljs$core$IFn$_invoke$arity$1(response),"content-type",""))].join(''))))
{return cljs.core.update_in.call(null,response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",1016933652)], null),decode_fn);
} else
{return response;
}
});
/**
* Encode :edn-params in the `request` :body and set the appropriate
* Content Type header.
*/
cljs_http.client.wrap_edn_params = (function wrap_edn_params(client){return (function (request){var temp__4090__auto__ = new cljs.core.Keyword(null,"edn-params","edn-params",1007197398).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(temp__4090__auto__))
{var params = temp__4090__auto__;return client.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"edn-params","edn-params",1007197398)),new cljs.core.Keyword(null,"body","body",1016933652),cljs.core.pr_str.call(null,params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",1809212152),"content-type"], null),"application/edn"));
} else
{return client.call(null,request);
}
});
});
/**
* Decode application/edn responses.
*/
cljs_http.client.wrap_edn_response = (function wrap_edn_response(client){return (function (request){var channel = cljs.core.async.chan.call(null);var c__6166__auto___10342 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6167__auto__ = (function (){var switch__6151__auto__ = (function (state_10332){var state_val_10333 = (state_10332[1]);if((state_val_10333 === 2))
{var inst_10327 = (state_10332[2]);var inst_10328 = cljs_http.client.decode_body.call(null,inst_10327,cljs.reader.read_string,"application/edn");var inst_10329 = cljs.core.async.put_BANG_.call(null,channel,inst_10328);var inst_10330 = cljs.core.async.close_BANG_.call(null,channel);var state_10332__$1 = (function (){var statearr_10334 = state_10332;(statearr_10334[7] = inst_10329);
return statearr_10334;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10332__$1,inst_10330);
} else
{if((state_val_10333 === 1))
{var inst_10325 = client.call(null,request);var state_10332__$1 = state_10332;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10332__$1,2,inst_10325);
} else
{return null;
}
}
});return ((function (switch__6151__auto__){
return (function() {
var state_machine__6152__auto__ = null;
var state_machine__6152__auto____0 = (function (){var statearr_10338 = [null,null,null,null,null,null,null,null];(statearr_10338[0] = state_machine__6152__auto__);
(statearr_10338[1] = 1);
return statearr_10338;
});
var state_machine__6152__auto____1 = (function (state_10332){while(true){
var ret_value__6153__auto__ = (function (){try{while(true){
var result__6154__auto__ = switch__6151__auto__.call(null,state_10332);if(cljs.core.keyword_identical_QMARK_.call(null,result__6154__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6154__auto__;
}
break;
}
}catch (e10339){if((e10339 instanceof Object))
{var ex__6155__auto__ = e10339;var statearr_10340_10343 = state_10332;(statearr_10340_10343[5] = ex__6155__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10332);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10339;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6153__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10344 = state_10332;
state_10332 = G__10344;
continue;
}
} else
{return ret_value__6153__auto__;
}
break;
}
});
state_machine__6152__auto__ = function(state_10332){
switch(arguments.length){
case 0:
return state_machine__6152__auto____0.call(this);
case 1:
return state_machine__6152__auto____1.call(this,state_10332);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6152__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6152__auto____0;
state_machine__6152__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6152__auto____1;
return state_machine__6152__auto__;
})()
;})(switch__6151__auto__))
})();var state__6168__auto__ = (function (){var statearr_10341 = f__6167__auto__.call(null);(statearr_10341[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6166__auto___10342);
return statearr_10341;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6168__auto__);
}));
return channel;
});
});
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_accept = (function() { 
var wrap_accept__delegate = function (client,p__10345){var vec__10347 = p__10345;var accept = cljs.core.nth.call(null,vec__10347,0,null);return (function (request){var temp__4090__auto__ = (function (){var or__3394__auto__ = new cljs.core.Keyword(null,"accept","accept",3885410426).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(or__3394__auto__))
{return or__3394__auto__;
} else
{return accept;
}
})();if(cljs.core.truth_(temp__4090__auto__))
{var accept__$1 = temp__4090__auto__;return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",1809212152),"accept"], null),accept__$1));
} else
{return client.call(null,request);
}
});
};
var wrap_accept = function (client,var_args){
var p__10345 = null;if (arguments.length > 1) {
  p__10345 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_accept__delegate.call(this,client,p__10345);};
wrap_accept.cljs$lang$maxFixedArity = 1;
wrap_accept.cljs$lang$applyTo = (function (arglist__10348){
var client = cljs.core.first(arglist__10348);
var p__10345 = cljs.core.rest(arglist__10348);
return wrap_accept__delegate(client,p__10345);
});
wrap_accept.cljs$core$IFn$_invoke$arity$variadic = wrap_accept__delegate;
return wrap_accept;
})()
;
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_content_type = (function() { 
var wrap_content_type__delegate = function (client,p__10349){var vec__10351 = p__10349;var content_type = cljs.core.nth.call(null,vec__10351,0,null);return (function (request){var temp__4090__auto__ = (function (){var or__3394__auto__ = new cljs.core.Keyword(null,"content-type","content-type",1799574400).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(or__3394__auto__))
{return or__3394__auto__;
} else
{return content_type;
}
})();if(cljs.core.truth_(temp__4090__auto__))
{var content_type__$1 = temp__4090__auto__;return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",1809212152),"content-type"], null),content_type__$1));
} else
{return client.call(null,request);
}
});
};
var wrap_content_type = function (client,var_args){
var p__10349 = null;if (arguments.length > 1) {
  p__10349 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_content_type__delegate.call(this,client,p__10349);};
wrap_content_type.cljs$lang$maxFixedArity = 1;
wrap_content_type.cljs$lang$applyTo = (function (arglist__10352){
var client = cljs.core.first(arglist__10352);
var p__10349 = cljs.core.rest(arglist__10352);
return wrap_content_type__delegate(client,p__10349);
});
wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = wrap_content_type__delegate;
return wrap_content_type;
})()
;
/**
* Encode :json-params in the `request` :body and set the appropriate
* Content Type header.
*/
cljs_http.client.wrap_json_params = (function wrap_json_params(client){return (function (request){var temp__4090__auto__ = new cljs.core.Keyword(null,"json-params","json-params",2645529981).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(temp__4090__auto__))
{var params = temp__4090__auto__;return client.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"json-params","json-params",2645529981)),new cljs.core.Keyword(null,"body","body",1016933652),cljs_http.util.json_encode.call(null,params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",1809212152),"content-type"], null),"application/json"));
} else
{return client.call(null,request);
}
});
});
/**
* Decode application/json responses.
*/
cljs_http.client.wrap_json_response = (function wrap_json_response(client){return (function (request){var channel = cljs.core.async.chan.call(null);var c__6166__auto___10387 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6167__auto__ = (function (){var switch__6151__auto__ = (function (state_10377){var state_val_10378 = (state_10377[1]);if((state_val_10378 === 2))
{var inst_10372 = (state_10377[2]);var inst_10373 = cljs_http.client.decode_body.call(null,inst_10372,cljs_http.util.json_decode,"application/json");var inst_10374 = cljs.core.async.put_BANG_.call(null,channel,inst_10373);var inst_10375 = cljs.core.async.close_BANG_.call(null,channel);var state_10377__$1 = (function (){var statearr_10379 = state_10377;(statearr_10379[7] = inst_10374);
return statearr_10379;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10377__$1,inst_10375);
} else
{if((state_val_10378 === 1))
{var inst_10370 = client.call(null,request);var state_10377__$1 = state_10377;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10377__$1,2,inst_10370);
} else
{return null;
}
}
});return ((function (switch__6151__auto__){
return (function() {
var state_machine__6152__auto__ = null;
var state_machine__6152__auto____0 = (function (){var statearr_10383 = [null,null,null,null,null,null,null,null];(statearr_10383[0] = state_machine__6152__auto__);
(statearr_10383[1] = 1);
return statearr_10383;
});
var state_machine__6152__auto____1 = (function (state_10377){while(true){
var ret_value__6153__auto__ = (function (){try{while(true){
var result__6154__auto__ = switch__6151__auto__.call(null,state_10377);if(cljs.core.keyword_identical_QMARK_.call(null,result__6154__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6154__auto__;
}
break;
}
}catch (e10384){if((e10384 instanceof Object))
{var ex__6155__auto__ = e10384;var statearr_10385_10388 = state_10377;(statearr_10385_10388[5] = ex__6155__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10377);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10384;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6153__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10389 = state_10377;
state_10377 = G__10389;
continue;
}
} else
{return ret_value__6153__auto__;
}
break;
}
});
state_machine__6152__auto__ = function(state_10377){
switch(arguments.length){
case 0:
return state_machine__6152__auto____0.call(this);
case 1:
return state_machine__6152__auto____1.call(this,state_10377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6152__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6152__auto____0;
state_machine__6152__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6152__auto____1;
return state_machine__6152__auto__;
})()
;})(switch__6151__auto__))
})();var state__6168__auto__ = (function (){var statearr_10386 = f__6167__auto__.call(null);(statearr_10386[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6166__auto___10387);
return statearr_10386;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6168__auto__);
}));
return channel;
});
});
cljs_http.client.wrap_query_params = (function wrap_query_params(client){return (function (p__10392){var map__10393 = p__10392;var map__10393__$1 = ((cljs.core.seq_QMARK_.call(null,map__10393))?cljs.core.apply.call(null,cljs.core.hash_map,map__10393):map__10393);var req = map__10393__$1;var query_params = cljs.core.get.call(null,map__10393__$1,new cljs.core.Keyword(null,"query-params","query-params",1080249757));if(cljs.core.truth_(query_params))
{return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"query-params","query-params",1080249757)),new cljs.core.Keyword(null,"query-string","query-string",1183691816),cljs_http.client.generate_query_string.call(null,query_params)));
} else
{return client.call(null,req);
}
});
});
cljs_http.client.wrap_android_cors_bugfix = (function wrap_android_cors_bugfix(client){return (function (request){return client.call(null,(cljs.core.truth_(cljs_http.util.android_QMARK_.call(null))?cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",1080249757),new cljs.core.Keyword(null,"android","android",4447480289)], null),Math.random.call(null)):request));
});
});
cljs_http.client.wrap_method = (function wrap_method(client){return (function (req){var temp__4090__auto__ = new cljs.core.Keyword(null,"method","method",4231316563).cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(temp__4090__auto__))
{var m = temp__4090__auto__;return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"method","method",4231316563)),new cljs.core.Keyword(null,"request-method","request-method",1993477457),m));
} else
{return client.call(null,req);
}
});
});
cljs_http.client.wrap_server_name = (function wrap_server_name(client,server_name){return (function (p1__10394_SHARP_){return client.call(null,cljs.core.assoc.call(null,p1__10394_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",4503925319),server_name));
});
});
cljs_http.client.wrap_url = (function wrap_url(client){return (function (p__10398){var map__10399 = p__10398;var map__10399__$1 = ((cljs.core.seq_QMARK_.call(null,map__10399))?cljs.core.apply.call(null,cljs.core.hash_map,map__10399):map__10399);var req = map__10399__$1;var query_params = cljs.core.get.call(null,map__10399__$1,new cljs.core.Keyword(null,"query-params","query-params",1080249757));var temp__4090__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",1014020321).cljs$core$IFn$_invoke$arity$1(req));if(cljs.core.truth_(temp__4090__auto__))
{var spec = temp__4090__auto__;return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",1014020321)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",1080249757)], null),(function (p1__10395_SHARP_){return cljs.core.merge.call(null,p1__10395_SHARP_,query_params);
})));
} else
{return client.call(null,req);
}
});
});
/**
* Middleware converting the :basic-auth option or `credentials` into
* an Authorization header.
* @param {...*} var_args
*/
cljs_http.client.wrap_basic_auth = (function() { 
var wrap_basic_auth__delegate = function (client,p__10400){var vec__10402 = p__10400;var credentials = cljs.core.nth.call(null,vec__10402,0,null);return (function (req){var credentials__$1 = (function (){var or__3394__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",4138175321).cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(or__3394__auto__))
{return or__3394__auto__;
} else
{return credentials;
}
})();if(!(cljs.core.empty_QMARK_.call(null,credentials__$1)))
{return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"basic-auth","basic-auth",4138175321)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",1809212152),"authorization"], null),cljs_http.util.basic_auth.call(null,credentials__$1)));
} else
{return client.call(null,req);
}
});
};
var wrap_basic_auth = function (client,var_args){
var p__10400 = null;if (arguments.length > 1) {
  p__10400 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_basic_auth__delegate.call(this,client,p__10400);};
wrap_basic_auth.cljs$lang$maxFixedArity = 1;
wrap_basic_auth.cljs$lang$applyTo = (function (arglist__10403){
var client = cljs.core.first(arglist__10403);
var p__10400 = cljs.core.rest(arglist__10403);
return wrap_basic_auth__delegate(client,p__10400);
});
wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = wrap_basic_auth__delegate;
return wrap_basic_auth;
})()
;
/**
* Middleware converting the :oauth-token option into an Authorization header.
*/
cljs_http.client.wrap_oauth = (function wrap_oauth(client){return (function (req){var temp__4090__auto__ = new cljs.core.Keyword(null,"oauth-token","oauth-token",4322509493).cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(temp__4090__auto__))
{var oauth_token = temp__4090__auto__;return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"oauth-token","oauth-token",4322509493)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",1809212152),"authorization"], null),[cljs.core.str("Bearer "),cljs.core.str(oauth_token)].join('')));
} else
{return client.call(null,req);
}
});
});
/**
* Returns a battaries-included HTTP request function coresponding to the given
* core client. See client/client.
*/
cljs_http.client.wrap_request = (function wrap_request(request){return cljs_http.client.wrap_url.call(null,cljs_http.client.wrap_method.call(null,cljs_http.client.wrap_android_cors_bugfix.call(null,cljs_http.client.wrap_oauth.call(null,cljs_http.client.wrap_basic_auth.call(null,cljs_http.client.wrap_query_params.call(null,cljs_http.client.wrap_json_response.call(null,cljs_http.client.wrap_json_params.call(null,cljs_http.client.wrap_edn_response.call(null,cljs_http.client.wrap_edn_params.call(null,request))))))))));
});
/**
* Executes the HTTP request corresponding to the given map and returns the
* response map for corresponding to the resulting HTTP response.
* 
* In addition to the standard Ring request keys, the following keys are also
* recognized:
* * :url
* * :method
* * :query-params
*/
cljs_http.client.request = cljs_http.client.wrap_request.call(null,cljs_http.core.request);
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.delete$ = (function() { 
var delete$__delegate = function (url,p__10404){var vec__10406 = p__10404;var req = cljs.core.nth.call(null,vec__10406,0,null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"delete","delete",3973413149),new cljs.core.Keyword(null,"url","url",1014020321),url], null)));
};
var delete$ = function (url,var_args){
var p__10404 = null;if (arguments.length > 1) {
  p__10404 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return delete$__delegate.call(this,url,p__10404);};
delete$.cljs$lang$maxFixedArity = 1;
delete$.cljs$lang$applyTo = (function (arglist__10407){
var url = cljs.core.first(arglist__10407);
var p__10404 = cljs.core.rest(arglist__10407);
return delete$__delegate(url,p__10404);
});
delete$.cljs$core$IFn$_invoke$arity$variadic = delete$__delegate;
return delete$;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.get = (function() { 
var get__delegate = function (url,p__10408){var vec__10410 = p__10408;var req = cljs.core.nth.call(null,vec__10410,0,null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"get","get",1014006472),new cljs.core.Keyword(null,"url","url",1014020321),url], null)));
};
var get = function (url,var_args){
var p__10408 = null;if (arguments.length > 1) {
  p__10408 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return get__delegate.call(this,url,p__10408);};
get.cljs$lang$maxFixedArity = 1;
get.cljs$lang$applyTo = (function (arglist__10411){
var url = cljs.core.first(arglist__10411);
var p__10408 = cljs.core.rest(arglist__10411);
return get__delegate(url,p__10408);
});
get.cljs$core$IFn$_invoke$arity$variadic = get__delegate;
return get;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.head = (function() { 
var head__delegate = function (url,p__10412){var vec__10414 = p__10412;var req = cljs.core.nth.call(null,vec__10414,0,null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"head","head",1017102674),new cljs.core.Keyword(null,"url","url",1014020321),url], null)));
};
var head = function (url,var_args){
var p__10412 = null;if (arguments.length > 1) {
  p__10412 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return head__delegate.call(this,url,p__10412);};
head.cljs$lang$maxFixedArity = 1;
head.cljs$lang$applyTo = (function (arglist__10415){
var url = cljs.core.first(arglist__10415);
var p__10412 = cljs.core.rest(arglist__10415);
return head__delegate(url,p__10412);
});
head.cljs$core$IFn$_invoke$arity$variadic = head__delegate;
return head;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.move = (function() { 
var move__delegate = function (url,p__10416){var vec__10418 = p__10416;var req = cljs.core.nth.call(null,vec__10418,0,null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"move","move",1017261891),new cljs.core.Keyword(null,"url","url",1014020321),url], null)));
};
var move = function (url,var_args){
var p__10416 = null;if (arguments.length > 1) {
  p__10416 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return move__delegate.call(this,url,p__10416);};
move.cljs$lang$maxFixedArity = 1;
move.cljs$lang$applyTo = (function (arglist__10419){
var url = cljs.core.first(arglist__10419);
var p__10416 = cljs.core.rest(arglist__10419);
return move__delegate(url,p__10416);
});
move.cljs$core$IFn$_invoke$arity$variadic = move__delegate;
return move;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.options = (function() { 
var options__delegate = function (url,p__10420){var vec__10422 = p__10420;var req = cljs.core.nth.call(null,vec__10422,0,null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"options","options",4059396624),new cljs.core.Keyword(null,"url","url",1014020321),url], null)));
};
var options = function (url,var_args){
var p__10420 = null;if (arguments.length > 1) {
  p__10420 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return options__delegate.call(this,url,p__10420);};
options.cljs$lang$maxFixedArity = 1;
options.cljs$lang$applyTo = (function (arglist__10423){
var url = cljs.core.first(arglist__10423);
var p__10420 = cljs.core.rest(arglist__10423);
return options__delegate(url,p__10420);
});
options.cljs$core$IFn$_invoke$arity$variadic = options__delegate;
return options;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.patch = (function() { 
var patch__delegate = function (url,p__10424){var vec__10426 = p__10424;var req = cljs.core.nth.call(null,vec__10426,0,null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"patch","patch",1120342970),new cljs.core.Keyword(null,"url","url",1014020321),url], null)));
};
var patch = function (url,var_args){
var p__10424 = null;if (arguments.length > 1) {
  p__10424 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return patch__delegate.call(this,url,p__10424);};
patch.cljs$lang$maxFixedArity = 1;
patch.cljs$lang$applyTo = (function (arglist__10427){
var url = cljs.core.first(arglist__10427);
var p__10424 = cljs.core.rest(arglist__10427);
return patch__delegate(url,p__10424);
});
patch.cljs$core$IFn$_invoke$arity$variadic = patch__delegate;
return patch;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.post = (function() { 
var post__delegate = function (url,p__10428){var vec__10430 = p__10428;var req = cljs.core.nth.call(null,vec__10430,0,null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"post","post",1017351186),new cljs.core.Keyword(null,"url","url",1014020321),url], null)));
};
var post = function (url,var_args){
var p__10428 = null;if (arguments.length > 1) {
  p__10428 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return post__delegate.call(this,url,p__10428);};
post.cljs$lang$maxFixedArity = 1;
post.cljs$lang$applyTo = (function (arglist__10431){
var url = cljs.core.first(arglist__10431);
var p__10428 = cljs.core.rest(arglist__10431);
return post__delegate(url,p__10428);
});
post.cljs$core$IFn$_invoke$arity$variadic = post__delegate;
return post;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.put = (function() { 
var put__delegate = function (url,p__10432){var vec__10434 = p__10432;var req = cljs.core.nth.call(null,vec__10434,0,null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"put","put",1014015617),new cljs.core.Keyword(null,"url","url",1014020321),url], null)));
};
var put = function (url,var_args){
var p__10432 = null;if (arguments.length > 1) {
  p__10432 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return put__delegate.call(this,url,p__10432);};
put.cljs$lang$maxFixedArity = 1;
put.cljs$lang$applyTo = (function (arglist__10435){
var url = cljs.core.first(arglist__10435);
var p__10432 = cljs.core.rest(arglist__10435);
return put__delegate(url,p__10432);
});
put.cljs$core$IFn$_invoke$arity$variadic = put__delegate;
return put;
})()
;

//# sourceMappingURL=client.js.map