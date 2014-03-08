// Compiled by ClojureScript 0.0-2138
goog.provide('markdown.core');
goog.require('cljs.core');
goog.require('markdown.transformers');
goog.require('markdown.transformers');
markdown.core.init_transformer = (function init_transformer(p__9387){var map__9393 = p__9387;var map__9393__$1 = ((cljs.core.seq_QMARK_.call(null,map__9393))?cljs.core.apply.call(null,cljs.core.hash_map,map__9393):map__9393);var custom_transformers = cljs.core.get.call(null,map__9393__$1,new cljs.core.Keyword(null,"custom-transformers","custom-transformers",2925052616));var replacement_transformers = cljs.core.get.call(null,map__9393__$1,new cljs.core.Keyword(null,"replacement-transformers","replacement-transformers",2324106695));return (function (html,line,next_line,state){var _STAR_next_line_STAR_9394 = markdown.transformers._STAR_next_line_STAR_;try{markdown.transformers._STAR_next_line_STAR_ = next_line;
var vec__9395 = cljs.core.reduce.call(null,(function (p__9396,transformer){var vec__9397 = p__9396;var text = cljs.core.nth.call(null,vec__9397,0,null);var state__$1 = cljs.core.nth.call(null,vec__9397,1,null);return transformer.call(null,text,state__$1);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,state], null),(function (){var or__3394__auto__ = replacement_transformers;if(cljs.core.truth_(or__3394__auto__))
{return or__3394__auto__;
} else
{return cljs.core.into.call(null,markdown.transformers.transformer_vector,custom_transformers);
}
})());var text = cljs.core.nth.call(null,vec__9395,0,null);var new_state = cljs.core.nth.call(null,vec__9395,1,null);html.append(text);
return new_state;
}finally {markdown.transformers._STAR_next_line_STAR_ = _STAR_next_line_STAR_9394;
}});
});
/**
* processes input text line by line and outputs an HTML string
* @param {...*} var_args
*/
markdown.core.mdToHtml = (function() { 
var mdToHtml__delegate = function (text,params){var _STAR_substring_STAR_9403 = markdown.transformers._STAR_substring_STAR_;try{markdown.transformers._STAR_substring_STAR_ = (function (s,n){return cljs.core.apply.call(null,cljs.core.str,cljs.core.drop.call(null,n,s));
});
var transformer = markdown.core.init_transformer.call(null,params);var html = (new goog.string.StringBuffer(""));var G__9405_9408 = text.split("\n");var vec__9406_9409 = G__9405_9408;var line_9410 = cljs.core.nth.call(null,vec__9406_9409,0,null);var more_9411 = cljs.core.nthnext.call(null,vec__9406_9409,1);var state_9412 = cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",4449512262),false),params);var G__9405_9413__$1 = G__9405_9408;var state_9414__$1 = state_9412;while(true){
var vec__9407_9415 = G__9405_9413__$1;var line_9416__$1 = cljs.core.nth.call(null,vec__9407_9415,0,null);var more_9417__$1 = cljs.core.nthnext.call(null,vec__9407_9415,1);var state_9418__$2 = state_9414__$1;var state_9419__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"buf","buf",1014002149).cljs$core$IFn$_invoke$arity$1(state_9418__$2))?transformer.call(null,html,new cljs.core.Keyword(null,"buf","buf",1014002149).cljs$core$IFn$_invoke$arity$1(state_9418__$2),cljs.core.first.call(null,more_9417__$1),cljs.core.assoc.call(null,cljs.core.dissoc.call(null,state_9418__$2,new cljs.core.Keyword(null,"buf","buf",1014002149),new cljs.core.Keyword(null,"lists","lists",1116886791)),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",4449512262),true)):state_9418__$2);if(cljs.core.truth_(cljs.core.first.call(null,more_9417__$1)))
{{
var G__9420 = more_9417__$1;
var G__9421 = cljs.core.assoc.call(null,transformer.call(null,html,line_9416__$1,cljs.core.first.call(null,more_9417__$1),state_9419__$3),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",4449512262),cljs.core.empty_QMARK_.call(null,line_9416__$1));
G__9405_9413__$1 = G__9420;
state_9414__$1 = G__9421;
continue;
}
} else
{transformer.call(null,html,line_9416__$1,"",cljs.core.assoc.call(null,state_9419__$3,new cljs.core.Keyword(null,"eof","eof",1014004846),true));
}
break;
}
return html.toString();
}finally {markdown.transformers._STAR_substring_STAR_ = _STAR_substring_STAR_9403;
}};
var mdToHtml = function (text,var_args){
var params = null;if (arguments.length > 1) {
  params = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mdToHtml__delegate.call(this,text,params);};
mdToHtml.cljs$lang$maxFixedArity = 1;
mdToHtml.cljs$lang$applyTo = (function (arglist__9422){
var text = cljs.core.first(arglist__9422);
var params = cljs.core.rest(arglist__9422);
return mdToHtml__delegate(text,params);
});
mdToHtml.cljs$core$IFn$_invoke$arity$variadic = mdToHtml__delegate;
return mdToHtml;
})()
;
goog.exportSymbol('markdown.core.mdToHtml', markdown.core.mdToHtml);

//# sourceMappingURL=core.js.map