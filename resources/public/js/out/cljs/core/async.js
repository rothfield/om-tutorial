// Compiled by ClojureScript 0.0-2138
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t10767 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10767 = (function (f,fn_handler,meta10768){
this.f = f;
this.fn_handler = fn_handler;
this.meta10768 = meta10768;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10767.cljs$lang$type = true;
cljs.core.async.t10767.cljs$lang$ctorStr = "cljs.core.async/t10767";
cljs.core.async.t10767.cljs$lang$ctorPrWriter = (function (this__3956__auto__,writer__3957__auto__,opt__3958__auto__){return cljs.core._write.call(null,writer__3957__auto__,"cljs.core.async/t10767");
});
cljs.core.async.t10767.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10767.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t10767.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t10767.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10769){var self__ = this;
var _10769__$1 = this;return self__.meta10768;
});
cljs.core.async.t10767.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10769,meta10768__$1){var self__ = this;
var _10769__$1 = this;return (new cljs.core.async.t10767(self__.f,self__.fn_handler,meta10768__$1));
});
cljs.core.async.__GT_t10767 = (function __GT_t10767(f__$1,fn_handler__$1,meta10768){return (new cljs.core.async.t10767(f__$1,fn_handler__$1,meta10768));
});
}
return (new cljs.core.async.t10767(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__10771 = buff;if(G__10771)
{var bit__4038__auto__ = null;if(cljs.core.truth_((function (){var or__3394__auto__ = bit__4038__auto__;if(cljs.core.truth_(or__3394__auto__))
{return or__3394__auto__;
} else
{return G__10771.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__10771.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10771);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10771);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_10772 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_10772);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_10772);
}));
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3382__auto__ = ret;if(cljs.core.truth_(and__3382__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3382__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4236__auto___10773 = n;var x_10774 = 0;while(true){
if((x_10774 < n__4236__auto___10773))
{(a[x_10774] = 0);
{
var G__10775 = (x_10774 + 1);
x_10774 = G__10775;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__10776 = (i + 1);
i = G__10776;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t10780 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10780 = (function (flag,alt_flag,meta10781){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta10781 = meta10781;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10780.cljs$lang$type = true;
cljs.core.async.t10780.cljs$lang$ctorStr = "cljs.core.async/t10780";
cljs.core.async.t10780.cljs$lang$ctorPrWriter = (function (this__3956__auto__,writer__3957__auto__,opt__3958__auto__){return cljs.core._write.call(null,writer__3957__auto__,"cljs.core.async/t10780");
});
cljs.core.async.t10780.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10780.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t10780.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t10780.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10782){var self__ = this;
var _10782__$1 = this;return self__.meta10781;
});
cljs.core.async.t10780.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10782,meta10781__$1){var self__ = this;
var _10782__$1 = this;return (new cljs.core.async.t10780(self__.flag,self__.alt_flag,meta10781__$1));
});
cljs.core.async.__GT_t10780 = (function __GT_t10780(flag__$1,alt_flag__$1,meta10781){return (new cljs.core.async.t10780(flag__$1,alt_flag__$1,meta10781));
});
}
return (new cljs.core.async.t10780(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t10786 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10786 = (function (cb,flag,alt_handler,meta10787){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta10787 = meta10787;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10786.cljs$lang$type = true;
cljs.core.async.t10786.cljs$lang$ctorStr = "cljs.core.async/t10786";
cljs.core.async.t10786.cljs$lang$ctorPrWriter = (function (this__3956__auto__,writer__3957__auto__,opt__3958__auto__){return cljs.core._write.call(null,writer__3957__auto__,"cljs.core.async/t10786");
});
cljs.core.async.t10786.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10786.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t10786.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t10786.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10788){var self__ = this;
var _10788__$1 = this;return self__.meta10787;
});
cljs.core.async.t10786.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10788,meta10787__$1){var self__ = this;
var _10788__$1 = this;return (new cljs.core.async.t10786(self__.cb,self__.flag,self__.alt_handler,meta10787__$1));
});
cljs.core.async.__GT_t10786 = (function __GT_t10786(cb__$1,flag__$1,alt_handler__$1,meta10787){return (new cljs.core.async.t10786(cb__$1,flag__$1,alt_handler__$1,meta10787));
});
}
return (new cljs.core.async.t10786(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10789_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10789_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3394__auto__ = wport;if(cljs.core.truth_(or__3394__auto__))
{return or__3394__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__10790 = (i + 1);
i = G__10790;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3394__auto__ = ret;if(cljs.core.truth_(or__3394__auto__))
{return or__3394__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3382__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3382__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3382__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__10791){var map__10793 = p__10791;var map__10793__$1 = ((cljs.core.seq_QMARK_.call(null,map__10793))?cljs.core.apply.call(null,cljs.core.hash_map,map__10793):map__10793);var opts = map__10793__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__10791 = null;if (arguments.length > 1) {
  p__10791 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__10791);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__10794){
var ports = cljs.core.first(arglist__10794);
var p__10791 = cljs.core.rest(arglist__10794);
return alts_BANG___delegate(ports,p__10791);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t10802 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10802 = (function (ch,f,map_LT_,meta10803){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10803 = meta10803;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10802.cljs$lang$type = true;
cljs.core.async.t10802.cljs$lang$ctorStr = "cljs.core.async/t10802";
cljs.core.async.t10802.cljs$lang$ctorPrWriter = (function (this__3956__auto__,writer__3957__auto__,opt__3958__auto__){return cljs.core._write.call(null,writer__3957__auto__,"cljs.core.async/t10802");
});
cljs.core.async.t10802.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10802.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t10802.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10802.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t10805 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10805 = (function (fn1,_,meta10803,ch,f,map_LT_,meta10806){
this.fn1 = fn1;
this._ = _;
this.meta10803 = meta10803;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10806 = meta10806;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10805.cljs$lang$type = true;
cljs.core.async.t10805.cljs$lang$ctorStr = "cljs.core.async/t10805";
cljs.core.async.t10805.cljs$lang$ctorPrWriter = (function (this__3956__auto__,writer__3957__auto__,opt__3958__auto__){return cljs.core._write.call(null,writer__3957__auto__,"cljs.core.async/t10805");
});
cljs.core.async.t10805.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10805.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t10805.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t10805.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__10795_SHARP_){return f1.call(null,(((p1__10795_SHARP_ == null))?null:self__.f.call(null,p1__10795_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t10805.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10807){var self__ = this;
var _10807__$1 = this;return self__.meta10806;
});
cljs.core.async.t10805.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10807,meta10806__$1){var self__ = this;
var _10807__$1 = this;return (new cljs.core.async.t10805(self__.fn1,self__._,self__.meta10803,self__.ch,self__.f,self__.map_LT_,meta10806__$1));
});
cljs.core.async.__GT_t10805 = (function __GT_t10805(fn1__$1,___$2,meta10803__$1,ch__$2,f__$2,map_LT___$2,meta10806){return (new cljs.core.async.t10805(fn1__$1,___$2,meta10803__$1,ch__$2,f__$2,map_LT___$2,meta10806));
});
}
return (new cljs.core.async.t10805(fn1,___$1,self__.meta10803,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3382__auto__ = ret;if(cljs.core.truth_(and__3382__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3382__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t10802.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10802.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10802.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10804){var self__ = this;
var _10804__$1 = this;return self__.meta10803;
});
cljs.core.async.t10802.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10804,meta10803__$1){var self__ = this;
var _10804__$1 = this;return (new cljs.core.async.t10802(self__.ch,self__.f,self__.map_LT_,meta10803__$1));
});
cljs.core.async.__GT_t10802 = (function __GT_t10802(ch__$1,f__$1,map_LT___$1,meta10803){return (new cljs.core.async.t10802(ch__$1,f__$1,map_LT___$1,meta10803));
});
}
return (new cljs.core.async.t10802(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t10811 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10811 = (function (ch,f,map_GT_,meta10812){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta10812 = meta10812;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10811.cljs$lang$type = true;
cljs.core.async.t10811.cljs$lang$ctorStr = "cljs.core.async/t10811";
cljs.core.async.t10811.cljs$lang$ctorPrWriter = (function (this__3956__auto__,writer__3957__auto__,opt__3958__auto__){return cljs.core._write.call(null,writer__3957__auto__,"cljs.core.async/t10811");
});
cljs.core.async.t10811.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10811.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t10811.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10811.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10811.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10811.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10811.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10813){var self__ = this;
var _10813__$1 = this;return self__.meta10812;
});
cljs.core.async.t10811.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10813,meta10812__$1){var self__ = this;
var _10813__$1 = this;return (new cljs.core.async.t10811(self__.ch,self__.f,self__.map_GT_,meta10812__$1));
});
cljs.core.async.__GT_t10811 = (function __GT_t10811(ch__$1,f__$1,map_GT___$1,meta10812){return (new cljs.core.async.t10811(ch__$1,f__$1,map_GT___$1,meta10812));
});
}
return (new cljs.core.async.t10811(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t10817 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10817 = (function (ch,p,filter_GT_,meta10818){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta10818 = meta10818;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10817.cljs$lang$type = true;
cljs.core.async.t10817.cljs$lang$ctorStr = "cljs.core.async/t10817";
cljs.core.async.t10817.cljs$lang$ctorPrWriter = (function (this__3956__auto__,writer__3957__auto__,opt__3958__auto__){return cljs.core._write.call(null,writer__3957__auto__,"cljs.core.async/t10817");
});
cljs.core.async.t10817.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10817.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t10817.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10817.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10817.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10817.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10817.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10819){var self__ = this;
var _10819__$1 = this;return self__.meta10818;
});
cljs.core.async.t10817.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10819,meta10818__$1){var self__ = this;
var _10819__$1 = this;return (new cljs.core.async.t10817(self__.ch,self__.p,self__.filter_GT_,meta10818__$1));
});
cljs.core.async.__GT_t10817 = (function __GT_t10817(ch__$1,p__$1,filter_GT___$1,meta10818){return (new cljs.core.async.t10817(ch__$1,p__$1,filter_GT___$1,meta10818));
});
}
return (new cljs.core.async.t10817(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6166__auto___10902 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6167__auto__ = (function (){var switch__6151__auto__ = (function (state_10881){var state_val_10882 = (state_10881[1]);if((state_val_10882 === 1))
{var state_10881__$1 = state_10881;var statearr_10883_10903 = state_10881__$1;(statearr_10883_10903[2] = null);
(statearr_10883_10903[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10882 === 2))
{var state_10881__$1 = state_10881;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10881__$1,4,ch);
} else
{if((state_val_10882 === 3))
{var inst_10879 = (state_10881[2]);var state_10881__$1 = state_10881;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10881__$1,inst_10879);
} else
{if((state_val_10882 === 4))
{var inst_10863 = (state_10881[7]);var inst_10863__$1 = (state_10881[2]);var inst_10864 = (inst_10863__$1 == null);var state_10881__$1 = (function (){var statearr_10884 = state_10881;(statearr_10884[7] = inst_10863__$1);
return statearr_10884;
})();if(cljs.core.truth_(inst_10864))
{var statearr_10885_10904 = state_10881__$1;(statearr_10885_10904[1] = 5);
} else
{var statearr_10886_10905 = state_10881__$1;(statearr_10886_10905[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10882 === 5))
{var inst_10866 = cljs.core.async.close_BANG_.call(null,out);var state_10881__$1 = state_10881;var statearr_10887_10906 = state_10881__$1;(statearr_10887_10906[2] = inst_10866);
(statearr_10887_10906[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10882 === 6))
{var inst_10863 = (state_10881[7]);var inst_10868 = p.call(null,inst_10863);var state_10881__$1 = state_10881;if(cljs.core.truth_(inst_10868))
{var statearr_10888_10907 = state_10881__$1;(statearr_10888_10907[1] = 8);
} else
{var statearr_10889_10908 = state_10881__$1;(statearr_10889_10908[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10882 === 7))
{var inst_10877 = (state_10881[2]);var state_10881__$1 = state_10881;var statearr_10890_10909 = state_10881__$1;(statearr_10890_10909[2] = inst_10877);
(statearr_10890_10909[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10882 === 8))
{var inst_10863 = (state_10881[7]);var state_10881__$1 = state_10881;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10881__$1,11,out,inst_10863);
} else
{if((state_val_10882 === 9))
{var state_10881__$1 = state_10881;var statearr_10891_10910 = state_10881__$1;(statearr_10891_10910[2] = null);
(statearr_10891_10910[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10882 === 10))
{var inst_10874 = (state_10881[2]);var state_10881__$1 = (function (){var statearr_10892 = state_10881;(statearr_10892[8] = inst_10874);
return statearr_10892;
})();var statearr_10893_10911 = state_10881__$1;(statearr_10893_10911[2] = null);
(statearr_10893_10911[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10882 === 11))
{var inst_10871 = (state_10881[2]);var state_10881__$1 = state_10881;var statearr_10894_10912 = state_10881__$1;(statearr_10894_10912[2] = inst_10871);
(statearr_10894_10912[1] = 10);
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
}
}
}
});return ((function (switch__6151__auto__){
return (function() {
var state_machine__6152__auto__ = null;
var state_machine__6152__auto____0 = (function (){var statearr_10898 = [null,null,null,null,null,null,null,null,null];(statearr_10898[0] = state_machine__6152__auto__);
(statearr_10898[1] = 1);
return statearr_10898;
});
var state_machine__6152__auto____1 = (function (state_10881){while(true){
var ret_value__6153__auto__ = (function (){try{while(true){
var result__6154__auto__ = switch__6151__auto__.call(null,state_10881);if(cljs.core.keyword_identical_QMARK_.call(null,result__6154__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6154__auto__;
}
break;
}
}catch (e10899){if((e10899 instanceof Object))
{var ex__6155__auto__ = e10899;var statearr_10900_10913 = state_10881;(statearr_10900_10913[5] = ex__6155__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10881);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10899;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6153__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10914 = state_10881;
state_10881 = G__10914;
continue;
}
} else
{return ret_value__6153__auto__;
}
break;
}
});
state_machine__6152__auto__ = function(state_10881){
switch(arguments.length){
case 0:
return state_machine__6152__auto____0.call(this);
case 1:
return state_machine__6152__auto____1.call(this,state_10881);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6152__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6152__auto____0;
state_machine__6152__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6152__auto____1;
return state_machine__6152__auto__;
})()
;})(switch__6151__auto__))
})();var state__6168__auto__ = (function (){var statearr_10901 = f__6167__auto__.call(null);(statearr_10901[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6166__auto___10902);
return statearr_10901;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6168__auto__);
}));
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6166__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6167__auto__ = (function (){var switch__6151__auto__ = (function (state_11066){var state_val_11067 = (state_11066[1]);if((state_val_11067 === 1))
{var state_11066__$1 = state_11066;var statearr_11068_11105 = state_11066__$1;(statearr_11068_11105[2] = null);
(statearr_11068_11105[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11067 === 2))
{var state_11066__$1 = state_11066;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11066__$1,4,in$);
} else
{if((state_val_11067 === 3))
{var inst_11064 = (state_11066[2]);var state_11066__$1 = state_11066;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11066__$1,inst_11064);
} else
{if((state_val_11067 === 4))
{var inst_11012 = (state_11066[7]);var inst_11012__$1 = (state_11066[2]);var inst_11013 = (inst_11012__$1 == null);var state_11066__$1 = (function (){var statearr_11069 = state_11066;(statearr_11069[7] = inst_11012__$1);
return statearr_11069;
})();if(cljs.core.truth_(inst_11013))
{var statearr_11070_11106 = state_11066__$1;(statearr_11070_11106[1] = 5);
} else
{var statearr_11071_11107 = state_11066__$1;(statearr_11071_11107[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11067 === 5))
{var inst_11015 = cljs.core.async.close_BANG_.call(null,out);var state_11066__$1 = state_11066;var statearr_11072_11108 = state_11066__$1;(statearr_11072_11108[2] = inst_11015);
(statearr_11072_11108[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11067 === 6))
{var inst_11012 = (state_11066[7]);var inst_11017 = f.call(null,inst_11012);var inst_11022 = cljs.core.seq.call(null,inst_11017);var inst_11023 = inst_11022;var inst_11024 = null;var inst_11025 = 0;var inst_11026 = 0;var state_11066__$1 = (function (){var statearr_11073 = state_11066;(statearr_11073[8] = inst_11026);
(statearr_11073[9] = inst_11025);
(statearr_11073[10] = inst_11024);
(statearr_11073[11] = inst_11023);
return statearr_11073;
})();var statearr_11074_11109 = state_11066__$1;(statearr_11074_11109[2] = null);
(statearr_11074_11109[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11067 === 7))
{var inst_11062 = (state_11066[2]);var state_11066__$1 = state_11066;var statearr_11075_11110 = state_11066__$1;(statearr_11075_11110[2] = inst_11062);
(statearr_11075_11110[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11067 === 8))
{var inst_11026 = (state_11066[8]);var inst_11025 = (state_11066[9]);var inst_11028 = (inst_11026 < inst_11025);var inst_11029 = inst_11028;var state_11066__$1 = state_11066;if(cljs.core.truth_(inst_11029))
{var statearr_11076_11111 = state_11066__$1;(statearr_11076_11111[1] = 10);
} else
{var statearr_11077_11112 = state_11066__$1;(statearr_11077_11112[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11067 === 9))
{var inst_11059 = (state_11066[2]);var state_11066__$1 = (function (){var statearr_11078 = state_11066;(statearr_11078[12] = inst_11059);
return statearr_11078;
})();var statearr_11079_11113 = state_11066__$1;(statearr_11079_11113[2] = null);
(statearr_11079_11113[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11067 === 10))
{var inst_11026 = (state_11066[8]);var inst_11024 = (state_11066[10]);var inst_11031 = cljs.core._nth.call(null,inst_11024,inst_11026);var state_11066__$1 = state_11066;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11066__$1,13,out,inst_11031);
} else
{if((state_val_11067 === 11))
{var inst_11023 = (state_11066[11]);var inst_11037 = (state_11066[13]);var inst_11037__$1 = cljs.core.seq.call(null,inst_11023);var state_11066__$1 = (function (){var statearr_11083 = state_11066;(statearr_11083[13] = inst_11037__$1);
return statearr_11083;
})();if(inst_11037__$1)
{var statearr_11084_11114 = state_11066__$1;(statearr_11084_11114[1] = 14);
} else
{var statearr_11085_11115 = state_11066__$1;(statearr_11085_11115[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11067 === 12))
{var inst_11057 = (state_11066[2]);var state_11066__$1 = state_11066;var statearr_11086_11116 = state_11066__$1;(statearr_11086_11116[2] = inst_11057);
(statearr_11086_11116[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11067 === 13))
{var inst_11026 = (state_11066[8]);var inst_11025 = (state_11066[9]);var inst_11024 = (state_11066[10]);var inst_11023 = (state_11066[11]);var inst_11033 = (state_11066[2]);var inst_11034 = (inst_11026 + 1);var tmp11080 = inst_11025;var tmp11081 = inst_11024;var tmp11082 = inst_11023;var inst_11023__$1 = tmp11082;var inst_11024__$1 = tmp11081;var inst_11025__$1 = tmp11080;var inst_11026__$1 = inst_11034;var state_11066__$1 = (function (){var statearr_11087 = state_11066;(statearr_11087[8] = inst_11026__$1);
(statearr_11087[9] = inst_11025__$1);
(statearr_11087[10] = inst_11024__$1);
(statearr_11087[11] = inst_11023__$1);
(statearr_11087[14] = inst_11033);
return statearr_11087;
})();var statearr_11088_11117 = state_11066__$1;(statearr_11088_11117[2] = null);
(statearr_11088_11117[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11067 === 14))
{var inst_11037 = (state_11066[13]);var inst_11039 = cljs.core.chunked_seq_QMARK_.call(null,inst_11037);var state_11066__$1 = state_11066;if(inst_11039)
{var statearr_11089_11118 = state_11066__$1;(statearr_11089_11118[1] = 17);
} else
{var statearr_11090_11119 = state_11066__$1;(statearr_11090_11119[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11067 === 15))
{var state_11066__$1 = state_11066;var statearr_11091_11120 = state_11066__$1;(statearr_11091_11120[2] = null);
(statearr_11091_11120[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11067 === 16))
{var inst_11055 = (state_11066[2]);var state_11066__$1 = state_11066;var statearr_11092_11121 = state_11066__$1;(statearr_11092_11121[2] = inst_11055);
(statearr_11092_11121[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11067 === 17))
{var inst_11037 = (state_11066[13]);var inst_11041 = cljs.core.chunk_first.call(null,inst_11037);var inst_11042 = cljs.core.chunk_rest.call(null,inst_11037);var inst_11043 = cljs.core.count.call(null,inst_11041);var inst_11023 = inst_11042;var inst_11024 = inst_11041;var inst_11025 = inst_11043;var inst_11026 = 0;var state_11066__$1 = (function (){var statearr_11093 = state_11066;(statearr_11093[8] = inst_11026);
(statearr_11093[9] = inst_11025);
(statearr_11093[10] = inst_11024);
(statearr_11093[11] = inst_11023);
return statearr_11093;
})();var statearr_11094_11122 = state_11066__$1;(statearr_11094_11122[2] = null);
(statearr_11094_11122[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11067 === 18))
{var inst_11037 = (state_11066[13]);var inst_11046 = cljs.core.first.call(null,inst_11037);var state_11066__$1 = state_11066;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11066__$1,20,out,inst_11046);
} else
{if((state_val_11067 === 19))
{var inst_11052 = (state_11066[2]);var state_11066__$1 = state_11066;var statearr_11095_11123 = state_11066__$1;(statearr_11095_11123[2] = inst_11052);
(statearr_11095_11123[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11067 === 20))
{var inst_11037 = (state_11066[13]);var inst_11048 = (state_11066[2]);var inst_11049 = cljs.core.next.call(null,inst_11037);var inst_11023 = inst_11049;var inst_11024 = null;var inst_11025 = 0;var inst_11026 = 0;var state_11066__$1 = (function (){var statearr_11096 = state_11066;(statearr_11096[8] = inst_11026);
(statearr_11096[9] = inst_11025);
(statearr_11096[10] = inst_11024);
(statearr_11096[11] = inst_11023);
(statearr_11096[15] = inst_11048);
return statearr_11096;
})();var statearr_11097_11124 = state_11066__$1;(statearr_11097_11124[2] = null);
(statearr_11097_11124[1] = 8);
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
}
}
}
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
var state_machine__6152__auto____0 = (function (){var statearr_11101 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11101[0] = state_machine__6152__auto__);
(statearr_11101[1] = 1);
return statearr_11101;
});
var state_machine__6152__auto____1 = (function (state_11066){while(true){
var ret_value__6153__auto__ = (function (){try{while(true){
var result__6154__auto__ = switch__6151__auto__.call(null,state_11066);if(cljs.core.keyword_identical_QMARK_.call(null,result__6154__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6154__auto__;
}
break;
}
}catch (e11102){if((e11102 instanceof Object))
{var ex__6155__auto__ = e11102;var statearr_11103_11125 = state_11066;(statearr_11103_11125[5] = ex__6155__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11066);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11102;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6153__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11126 = state_11066;
state_11066 = G__11126;
continue;
}
} else
{return ret_value__6153__auto__;
}
break;
}
});
state_machine__6152__auto__ = function(state_11066){
switch(arguments.length){
case 0:
return state_machine__6152__auto____0.call(this);
case 1:
return state_machine__6152__auto____1.call(this,state_11066);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6152__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6152__auto____0;
state_machine__6152__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6152__auto____1;
return state_machine__6152__auto__;
})()
;})(switch__6151__auto__))
})();var state__6168__auto__ = (function (){var statearr_11104 = f__6167__auto__.call(null);(statearr_11104[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6166__auto__);
return statearr_11104;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6168__auto__);
}));
return c__6166__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__6166__auto___11207 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6167__auto__ = (function (){var switch__6151__auto__ = (function (state_11186){var state_val_11187 = (state_11186[1]);if((state_val_11187 === 1))
{var state_11186__$1 = state_11186;var statearr_11188_11208 = state_11186__$1;(statearr_11188_11208[2] = null);
(statearr_11188_11208[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11187 === 2))
{var state_11186__$1 = state_11186;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11186__$1,4,from);
} else
{if((state_val_11187 === 3))
{var inst_11184 = (state_11186[2]);var state_11186__$1 = state_11186;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11186__$1,inst_11184);
} else
{if((state_val_11187 === 4))
{var inst_11169 = (state_11186[7]);var inst_11169__$1 = (state_11186[2]);var inst_11170 = (inst_11169__$1 == null);var state_11186__$1 = (function (){var statearr_11189 = state_11186;(statearr_11189[7] = inst_11169__$1);
return statearr_11189;
})();if(cljs.core.truth_(inst_11170))
{var statearr_11190_11209 = state_11186__$1;(statearr_11190_11209[1] = 5);
} else
{var statearr_11191_11210 = state_11186__$1;(statearr_11191_11210[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11187 === 5))
{var state_11186__$1 = state_11186;if(cljs.core.truth_(close_QMARK_))
{var statearr_11192_11211 = state_11186__$1;(statearr_11192_11211[1] = 8);
} else
{var statearr_11193_11212 = state_11186__$1;(statearr_11193_11212[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11187 === 6))
{var inst_11169 = (state_11186[7]);var state_11186__$1 = state_11186;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11186__$1,11,to,inst_11169);
} else
{if((state_val_11187 === 7))
{var inst_11182 = (state_11186[2]);var state_11186__$1 = state_11186;var statearr_11194_11213 = state_11186__$1;(statearr_11194_11213[2] = inst_11182);
(statearr_11194_11213[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11187 === 8))
{var inst_11173 = cljs.core.async.close_BANG_.call(null,to);var state_11186__$1 = state_11186;var statearr_11195_11214 = state_11186__$1;(statearr_11195_11214[2] = inst_11173);
(statearr_11195_11214[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11187 === 9))
{var state_11186__$1 = state_11186;var statearr_11196_11215 = state_11186__$1;(statearr_11196_11215[2] = null);
(statearr_11196_11215[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11187 === 10))
{var inst_11176 = (state_11186[2]);var state_11186__$1 = state_11186;var statearr_11197_11216 = state_11186__$1;(statearr_11197_11216[2] = inst_11176);
(statearr_11197_11216[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11187 === 11))
{var inst_11179 = (state_11186[2]);var state_11186__$1 = (function (){var statearr_11198 = state_11186;(statearr_11198[8] = inst_11179);
return statearr_11198;
})();var statearr_11199_11217 = state_11186__$1;(statearr_11199_11217[2] = null);
(statearr_11199_11217[1] = 2);
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
}
}
}
});return ((function (switch__6151__auto__){
return (function() {
var state_machine__6152__auto__ = null;
var state_machine__6152__auto____0 = (function (){var statearr_11203 = [null,null,null,null,null,null,null,null,null];(statearr_11203[0] = state_machine__6152__auto__);
(statearr_11203[1] = 1);
return statearr_11203;
});
var state_machine__6152__auto____1 = (function (state_11186){while(true){
var ret_value__6153__auto__ = (function (){try{while(true){
var result__6154__auto__ = switch__6151__auto__.call(null,state_11186);if(cljs.core.keyword_identical_QMARK_.call(null,result__6154__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6154__auto__;
}
break;
}
}catch (e11204){if((e11204 instanceof Object))
{var ex__6155__auto__ = e11204;var statearr_11205_11218 = state_11186;(statearr_11205_11218[5] = ex__6155__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11186);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11204;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6153__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11219 = state_11186;
state_11186 = G__11219;
continue;
}
} else
{return ret_value__6153__auto__;
}
break;
}
});
state_machine__6152__auto__ = function(state_11186){
switch(arguments.length){
case 0:
return state_machine__6152__auto____0.call(this);
case 1:
return state_machine__6152__auto____1.call(this,state_11186);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6152__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6152__auto____0;
state_machine__6152__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6152__auto____1;
return state_machine__6152__auto__;
})()
;})(switch__6151__auto__))
})();var state__6168__auto__ = (function (){var statearr_11206 = f__6167__auto__.call(null);(statearr_11206[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6166__auto___11207);
return statearr_11206;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6168__auto__);
}));
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6166__auto___11306 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6167__auto__ = (function (){var switch__6151__auto__ = (function (state_11284){var state_val_11285 = (state_11284[1]);if((state_val_11285 === 1))
{var state_11284__$1 = state_11284;var statearr_11286_11307 = state_11284__$1;(statearr_11286_11307[2] = null);
(statearr_11286_11307[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11285 === 2))
{var state_11284__$1 = state_11284;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11284__$1,4,ch);
} else
{if((state_val_11285 === 3))
{var inst_11282 = (state_11284[2]);var state_11284__$1 = state_11284;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11284__$1,inst_11282);
} else
{if((state_val_11285 === 4))
{var inst_11265 = (state_11284[7]);var inst_11265__$1 = (state_11284[2]);var inst_11266 = (inst_11265__$1 == null);var state_11284__$1 = (function (){var statearr_11287 = state_11284;(statearr_11287[7] = inst_11265__$1);
return statearr_11287;
})();if(cljs.core.truth_(inst_11266))
{var statearr_11288_11308 = state_11284__$1;(statearr_11288_11308[1] = 5);
} else
{var statearr_11289_11309 = state_11284__$1;(statearr_11289_11309[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11285 === 5))
{var inst_11268 = cljs.core.async.close_BANG_.call(null,tc);var inst_11269 = cljs.core.async.close_BANG_.call(null,fc);var state_11284__$1 = (function (){var statearr_11290 = state_11284;(statearr_11290[8] = inst_11268);
return statearr_11290;
})();var statearr_11291_11310 = state_11284__$1;(statearr_11291_11310[2] = inst_11269);
(statearr_11291_11310[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11285 === 6))
{var inst_11265 = (state_11284[7]);var inst_11271 = p.call(null,inst_11265);var state_11284__$1 = state_11284;if(cljs.core.truth_(inst_11271))
{var statearr_11292_11311 = state_11284__$1;(statearr_11292_11311[1] = 9);
} else
{var statearr_11293_11312 = state_11284__$1;(statearr_11293_11312[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11285 === 7))
{var inst_11280 = (state_11284[2]);var state_11284__$1 = state_11284;var statearr_11294_11313 = state_11284__$1;(statearr_11294_11313[2] = inst_11280);
(statearr_11294_11313[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11285 === 8))
{var inst_11277 = (state_11284[2]);var state_11284__$1 = (function (){var statearr_11295 = state_11284;(statearr_11295[9] = inst_11277);
return statearr_11295;
})();var statearr_11296_11314 = state_11284__$1;(statearr_11296_11314[2] = null);
(statearr_11296_11314[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11285 === 9))
{var state_11284__$1 = state_11284;var statearr_11297_11315 = state_11284__$1;(statearr_11297_11315[2] = tc);
(statearr_11297_11315[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11285 === 10))
{var state_11284__$1 = state_11284;var statearr_11298_11316 = state_11284__$1;(statearr_11298_11316[2] = fc);
(statearr_11298_11316[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11285 === 11))
{var inst_11265 = (state_11284[7]);var inst_11275 = (state_11284[2]);var state_11284__$1 = state_11284;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11284__$1,8,inst_11275,inst_11265);
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
}
}
});return ((function (switch__6151__auto__){
return (function() {
var state_machine__6152__auto__ = null;
var state_machine__6152__auto____0 = (function (){var statearr_11302 = [null,null,null,null,null,null,null,null,null,null];(statearr_11302[0] = state_machine__6152__auto__);
(statearr_11302[1] = 1);
return statearr_11302;
});
var state_machine__6152__auto____1 = (function (state_11284){while(true){
var ret_value__6153__auto__ = (function (){try{while(true){
var result__6154__auto__ = switch__6151__auto__.call(null,state_11284);if(cljs.core.keyword_identical_QMARK_.call(null,result__6154__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6154__auto__;
}
break;
}
}catch (e11303){if((e11303 instanceof Object))
{var ex__6155__auto__ = e11303;var statearr_11304_11317 = state_11284;(statearr_11304_11317[5] = ex__6155__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11284);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11303;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6153__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11318 = state_11284;
state_11284 = G__11318;
continue;
}
} else
{return ret_value__6153__auto__;
}
break;
}
});
state_machine__6152__auto__ = function(state_11284){
switch(arguments.length){
case 0:
return state_machine__6152__auto____0.call(this);
case 1:
return state_machine__6152__auto____1.call(this,state_11284);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6152__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6152__auto____0;
state_machine__6152__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6152__auto____1;
return state_machine__6152__auto__;
})()
;})(switch__6151__auto__))
})();var state__6168__auto__ = (function (){var statearr_11305 = f__6167__auto__.call(null);(statearr_11305[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6166__auto___11306);
return statearr_11305;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6168__auto__);
}));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6166__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6167__auto__ = (function (){var switch__6151__auto__ = (function (state_11365){var state_val_11366 = (state_11365[1]);if((state_val_11366 === 7))
{var inst_11361 = (state_11365[2]);var state_11365__$1 = state_11365;var statearr_11367_11383 = state_11365__$1;(statearr_11367_11383[2] = inst_11361);
(statearr_11367_11383[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11366 === 6))
{var inst_11351 = (state_11365[7]);var inst_11354 = (state_11365[8]);var inst_11358 = f.call(null,inst_11351,inst_11354);var inst_11351__$1 = inst_11358;var state_11365__$1 = (function (){var statearr_11368 = state_11365;(statearr_11368[7] = inst_11351__$1);
return statearr_11368;
})();var statearr_11369_11384 = state_11365__$1;(statearr_11369_11384[2] = null);
(statearr_11369_11384[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11366 === 5))
{var inst_11351 = (state_11365[7]);var state_11365__$1 = state_11365;var statearr_11370_11385 = state_11365__$1;(statearr_11370_11385[2] = inst_11351);
(statearr_11370_11385[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11366 === 4))
{var inst_11354 = (state_11365[8]);var inst_11354__$1 = (state_11365[2]);var inst_11355 = (inst_11354__$1 == null);var state_11365__$1 = (function (){var statearr_11371 = state_11365;(statearr_11371[8] = inst_11354__$1);
return statearr_11371;
})();if(cljs.core.truth_(inst_11355))
{var statearr_11372_11386 = state_11365__$1;(statearr_11372_11386[1] = 5);
} else
{var statearr_11373_11387 = state_11365__$1;(statearr_11373_11387[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11366 === 3))
{var inst_11363 = (state_11365[2]);var state_11365__$1 = state_11365;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11365__$1,inst_11363);
} else
{if((state_val_11366 === 2))
{var state_11365__$1 = state_11365;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11365__$1,4,ch);
} else
{if((state_val_11366 === 1))
{var inst_11351 = init;var state_11365__$1 = (function (){var statearr_11374 = state_11365;(statearr_11374[7] = inst_11351);
return statearr_11374;
})();var statearr_11375_11388 = state_11365__$1;(statearr_11375_11388[2] = null);
(statearr_11375_11388[1] = 2);
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
});return ((function (switch__6151__auto__){
return (function() {
var state_machine__6152__auto__ = null;
var state_machine__6152__auto____0 = (function (){var statearr_11379 = [null,null,null,null,null,null,null,null,null];(statearr_11379[0] = state_machine__6152__auto__);
(statearr_11379[1] = 1);
return statearr_11379;
});
var state_machine__6152__auto____1 = (function (state_11365){while(true){
var ret_value__6153__auto__ = (function (){try{while(true){
var result__6154__auto__ = switch__6151__auto__.call(null,state_11365);if(cljs.core.keyword_identical_QMARK_.call(null,result__6154__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6154__auto__;
}
break;
}
}catch (e11380){if((e11380 instanceof Object))
{var ex__6155__auto__ = e11380;var statearr_11381_11389 = state_11365;(statearr_11381_11389[5] = ex__6155__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11365);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11380;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6153__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11390 = state_11365;
state_11365 = G__11390;
continue;
}
} else
{return ret_value__6153__auto__;
}
break;
}
});
state_machine__6152__auto__ = function(state_11365){
switch(arguments.length){
case 0:
return state_machine__6152__auto____0.call(this);
case 1:
return state_machine__6152__auto____1.call(this,state_11365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6152__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6152__auto____0;
state_machine__6152__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6152__auto____1;
return state_machine__6152__auto__;
})()
;})(switch__6151__auto__))
})();var state__6168__auto__ = (function (){var statearr_11382 = f__6167__auto__.call(null);(statearr_11382[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6166__auto__);
return statearr_11382;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6168__auto__);
}));
return c__6166__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6166__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6167__auto__ = (function (){var switch__6151__auto__ = (function (state_11452){var state_val_11453 = (state_11452[1]);if((state_val_11453 === 1))
{var inst_11432 = cljs.core.seq.call(null,coll);var inst_11433 = inst_11432;var state_11452__$1 = (function (){var statearr_11454 = state_11452;(statearr_11454[7] = inst_11433);
return statearr_11454;
})();var statearr_11455_11473 = state_11452__$1;(statearr_11455_11473[2] = null);
(statearr_11455_11473[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11453 === 2))
{var inst_11433 = (state_11452[7]);var state_11452__$1 = state_11452;if(cljs.core.truth_(inst_11433))
{var statearr_11456_11474 = state_11452__$1;(statearr_11456_11474[1] = 4);
} else
{var statearr_11457_11475 = state_11452__$1;(statearr_11457_11475[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11453 === 3))
{var inst_11450 = (state_11452[2]);var state_11452__$1 = state_11452;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11452__$1,inst_11450);
} else
{if((state_val_11453 === 4))
{var inst_11433 = (state_11452[7]);var inst_11436 = cljs.core.first.call(null,inst_11433);var state_11452__$1 = state_11452;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11452__$1,7,ch,inst_11436);
} else
{if((state_val_11453 === 5))
{var state_11452__$1 = state_11452;if(cljs.core.truth_(close_QMARK_))
{var statearr_11458_11476 = state_11452__$1;(statearr_11458_11476[1] = 8);
} else
{var statearr_11459_11477 = state_11452__$1;(statearr_11459_11477[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11453 === 6))
{var inst_11448 = (state_11452[2]);var state_11452__$1 = state_11452;var statearr_11460_11478 = state_11452__$1;(statearr_11460_11478[2] = inst_11448);
(statearr_11460_11478[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11453 === 7))
{var inst_11433 = (state_11452[7]);var inst_11438 = (state_11452[2]);var inst_11439 = cljs.core.next.call(null,inst_11433);var inst_11433__$1 = inst_11439;var state_11452__$1 = (function (){var statearr_11461 = state_11452;(statearr_11461[8] = inst_11438);
(statearr_11461[7] = inst_11433__$1);
return statearr_11461;
})();var statearr_11462_11479 = state_11452__$1;(statearr_11462_11479[2] = null);
(statearr_11462_11479[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11453 === 8))
{var inst_11443 = cljs.core.async.close_BANG_.call(null,ch);var state_11452__$1 = state_11452;var statearr_11463_11480 = state_11452__$1;(statearr_11463_11480[2] = inst_11443);
(statearr_11463_11480[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11453 === 9))
{var state_11452__$1 = state_11452;var statearr_11464_11481 = state_11452__$1;(statearr_11464_11481[2] = null);
(statearr_11464_11481[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11453 === 10))
{var inst_11446 = (state_11452[2]);var state_11452__$1 = state_11452;var statearr_11465_11482 = state_11452__$1;(statearr_11465_11482[2] = inst_11446);
(statearr_11465_11482[1] = 6);
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
}
}
});return ((function (switch__6151__auto__){
return (function() {
var state_machine__6152__auto__ = null;
var state_machine__6152__auto____0 = (function (){var statearr_11469 = [null,null,null,null,null,null,null,null,null];(statearr_11469[0] = state_machine__6152__auto__);
(statearr_11469[1] = 1);
return statearr_11469;
});
var state_machine__6152__auto____1 = (function (state_11452){while(true){
var ret_value__6153__auto__ = (function (){try{while(true){
var result__6154__auto__ = switch__6151__auto__.call(null,state_11452);if(cljs.core.keyword_identical_QMARK_.call(null,result__6154__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6154__auto__;
}
break;
}
}catch (e11470){if((e11470 instanceof Object))
{var ex__6155__auto__ = e11470;var statearr_11471_11483 = state_11452;(statearr_11471_11483[5] = ex__6155__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11452);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11470;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6153__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11484 = state_11452;
state_11452 = G__11484;
continue;
}
} else
{return ret_value__6153__auto__;
}
break;
}
});
state_machine__6152__auto__ = function(state_11452){
switch(arguments.length){
case 0:
return state_machine__6152__auto____0.call(this);
case 1:
return state_machine__6152__auto____1.call(this,state_11452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6152__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6152__auto____0;
state_machine__6152__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6152__auto____1;
return state_machine__6152__auto__;
})()
;})(switch__6151__auto__))
})();var state__6168__auto__ = (function (){var statearr_11472 = f__6167__auto__.call(null);(statearr_11472[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6166__auto__);
return statearr_11472;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6168__auto__);
}));
return c__6166__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj11486 = {};return obj11486;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3382__auto__ = _;if(and__3382__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3382__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4015__auto__ = (((_ == null))?null:_);return (function (){var or__3394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4015__auto__)]);if(or__3394__auto__)
{return or__3394__auto__;
} else
{var or__3394__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3394__auto____$1)
{return or__3394__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj11488 = {};return obj11488;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3382__auto__ = m;if(and__3382__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3382__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4015__auto__ = (((m == null))?null:m);return (function (){var or__3394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4015__auto__)]);if(or__3394__auto__)
{return or__3394__auto__;
} else
{var or__3394__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3394__auto____$1)
{return or__3394__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3382__auto__ = m;if(and__3382__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3382__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4015__auto__ = (((m == null))?null:m);return (function (){var or__3394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4015__auto__)]);if(or__3394__auto__)
{return or__3394__auto__;
} else
{var or__3394__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3394__auto____$1)
{return or__3394__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3382__auto__ = m;if(and__3382__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3382__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4015__auto__ = (((m == null))?null:m);return (function (){var or__3394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4015__auto__)]);if(or__3394__auto__)
{return or__3394__auto__;
} else
{var or__3394__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3394__auto____$1)
{return or__3394__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t11712 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11712 = (function (cs,ch,mult,meta11713){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta11713 = meta11713;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11712.cljs$lang$type = true;
cljs.core.async.t11712.cljs$lang$ctorStr = "cljs.core.async/t11712";
cljs.core.async.t11712.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3956__auto__,writer__3957__auto__,opt__3958__auto__){return cljs.core._write.call(null,writer__3957__auto__,"cljs.core.async/t11712");
});})(cs))
;
cljs.core.async.t11712.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t11712.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t11712.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t11712.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t11712.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11712.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t11712.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_11714){var self__ = this;
var _11714__$1 = this;return self__.meta11713;
});})(cs))
;
cljs.core.async.t11712.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_11714,meta11713__$1){var self__ = this;
var _11714__$1 = this;return (new cljs.core.async.t11712(self__.cs,self__.ch,self__.mult,meta11713__$1));
});})(cs))
;
cljs.core.async.__GT_t11712 = ((function (cs){
return (function __GT_t11712(cs__$1,ch__$1,mult__$1,meta11713){return (new cljs.core.async.t11712(cs__$1,ch__$1,mult__$1,meta11713));
});})(cs))
;
}
return (new cljs.core.async.t11712(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6166__auto___11935 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6167__auto__ = (function (){var switch__6151__auto__ = (function (state_11849){var state_val_11850 = (state_11849[1]);if((state_val_11850 === 32))
{var inst_11717 = (state_11849[7]);var inst_11793 = (state_11849[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11849,31,Object,null,30);var inst_11800 = cljs.core.async.put_BANG_.call(null,inst_11793,inst_11717,done);var state_11849__$1 = state_11849;var statearr_11851_11936 = state_11849__$1;(statearr_11851_11936[2] = inst_11800);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11849__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11850 === 1))
{var state_11849__$1 = state_11849;var statearr_11852_11937 = state_11849__$1;(statearr_11852_11937[2] = null);
(statearr_11852_11937[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11850 === 33))
{var inst_11806 = (state_11849[9]);var inst_11808 = cljs.core.chunked_seq_QMARK_.call(null,inst_11806);var state_11849__$1 = state_11849;if(inst_11808)
{var statearr_11853_11938 = state_11849__$1;(statearr_11853_11938[1] = 36);
} else
{var statearr_11854_11939 = state_11849__$1;(statearr_11854_11939[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11850 === 2))
{var state_11849__$1 = state_11849;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11849__$1,4,ch);
} else
{if((state_val_11850 === 34))
{var state_11849__$1 = state_11849;var statearr_11855_11940 = state_11849__$1;(statearr_11855_11940[2] = null);
(statearr_11855_11940[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11850 === 3))
{var inst_11847 = (state_11849[2]);var state_11849__$1 = state_11849;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11849__$1,inst_11847);
} else
{if((state_val_11850 === 35))
{var inst_11831 = (state_11849[2]);var state_11849__$1 = state_11849;var statearr_11856_11941 = state_11849__$1;(statearr_11856_11941[2] = inst_11831);
(statearr_11856_11941[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11850 === 4))
{var inst_11717 = (state_11849[7]);var inst_11717__$1 = (state_11849[2]);var inst_11718 = (inst_11717__$1 == null);var state_11849__$1 = (function (){var statearr_11857 = state_11849;(statearr_11857[7] = inst_11717__$1);
return statearr_11857;
})();if(cljs.core.truth_(inst_11718))
{var statearr_11858_11942 = state_11849__$1;(statearr_11858_11942[1] = 5);
} else
{var statearr_11859_11943 = state_11849__$1;(statearr_11859_11943[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11850 === 36))
{var inst_11806 = (state_11849[9]);var inst_11810 = cljs.core.chunk_first.call(null,inst_11806);var inst_11811 = cljs.core.chunk_rest.call(null,inst_11806);var inst_11812 = cljs.core.count.call(null,inst_11810);var inst_11785 = inst_11811;var inst_11786 = inst_11810;var inst_11787 = inst_11812;var inst_11788 = 0;var state_11849__$1 = (function (){var statearr_11860 = state_11849;(statearr_11860[10] = inst_11785);
(statearr_11860[11] = inst_11786);
(statearr_11860[12] = inst_11787);
(statearr_11860[13] = inst_11788);
return statearr_11860;
})();var statearr_11861_11944 = state_11849__$1;(statearr_11861_11944[2] = null);
(statearr_11861_11944[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11850 === 5))
{var inst_11724 = cljs.core.deref.call(null,cs);var inst_11725 = cljs.core.seq.call(null,inst_11724);var inst_11726 = inst_11725;var inst_11727 = null;var inst_11728 = 0;var inst_11729 = 0;var state_11849__$1 = (function (){var statearr_11862 = state_11849;(statearr_11862[14] = inst_11727);
(statearr_11862[15] = inst_11726);
(statearr_11862[16] = inst_11728);
(statearr_11862[17] = inst_11729);
return statearr_11862;
})();var statearr_11863_11945 = state_11849__$1;(statearr_11863_11945[2] = null);
(statearr_11863_11945[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11850 === 37))
{var inst_11806 = (state_11849[9]);var inst_11815 = cljs.core.first.call(null,inst_11806);var state_11849__$1 = (function (){var statearr_11864 = state_11849;(statearr_11864[18] = inst_11815);
return statearr_11864;
})();var statearr_11865_11946 = state_11849__$1;(statearr_11865_11946[2] = null);
(statearr_11865_11946[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11850 === 6))
{var inst_11777 = (state_11849[19]);var inst_11776 = cljs.core.deref.call(null,cs);var inst_11777__$1 = cljs.core.keys.call(null,inst_11776);var inst_11778 = cljs.core.count.call(null,inst_11777__$1);var inst_11779 = cljs.core.reset_BANG_.call(null,dctr,inst_11778);var inst_11784 = cljs.core.seq.call(null,inst_11777__$1);var inst_11785 = inst_11784;var inst_11786 = null;var inst_11787 = 0;var inst_11788 = 0;var state_11849__$1 = (function (){var statearr_11866 = state_11849;(statearr_11866[10] = inst_11785);
(statearr_11866[19] = inst_11777__$1);
(statearr_11866[20] = inst_11779);
(statearr_11866[11] = inst_11786);
(statearr_11866[12] = inst_11787);
(statearr_11866[13] = inst_11788);
return statearr_11866;
})();var statearr_11867_11947 = state_11849__$1;(statearr_11867_11947[2] = null);
(statearr_11867_11947[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11850 === 38))
{var inst_11828 = (state_11849[2]);var state_11849__$1 = state_11849;var statearr_11868_11948 = state_11849__$1;(statearr_11868_11948[2] = inst_11828);
(statearr_11868_11948[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11850 === 7))
{var inst_11845 = (state_11849[2]);var state_11849__$1 = state_11849;var statearr_11869_11949 = state_11849__$1;(statearr_11869_11949[2] = inst_11845);
(statearr_11869_11949[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11850 === 39))
{var inst_11806 = (state_11849[9]);var inst_11824 = (state_11849[2]);var inst_11825 = cljs.core.next.call(null,inst_11806);var inst_11785 = inst_11825;var inst_11786 = null;var inst_11787 = 0;var inst_11788 = 0;var state_11849__$1 = (function (){var statearr_11870 = state_11849;(statearr_11870[21] = inst_11824);
(statearr_11870[10] = inst_11785);
(statearr_11870[11] = inst_11786);
(statearr_11870[12] = inst_11787);
(statearr_11870[13] = inst_11788);
return statearr_11870;
})();var statearr_11871_11950 = state_11849__$1;(statearr_11871_11950[2] = null);
(statearr_11871_11950[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11850 === 8))
{var inst_11728 = (state_11849[16]);var inst_11729 = (state_11849[17]);var inst_11731 = (inst_11729 < inst_11728);var inst_11732 = inst_11731;var state_11849__$1 = state_11849;if(cljs.core.truth_(inst_11732))
{var statearr_11872_11951 = state_11849__$1;(statearr_11872_11951[1] = 10);
} else
{var statearr_11873_11952 = state_11849__$1;(statearr_11873_11952[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11850 === 40))
{var inst_11815 = (state_11849[18]);var inst_11816 = (state_11849[2]);var inst_11817 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11818 = cljs.core.async.untap_STAR_.call(null,m,inst_11815);var state_11849__$1 = (function (){var statearr_11874 = state_11849;(statearr_11874[22] = inst_11816);
(statearr_11874[23] = inst_11817);
return statearr_11874;
})();var statearr_11875_11953 = state_11849__$1;(statearr_11875_11953[2] = inst_11818);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11849__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11850 === 9))
{var inst_11774 = (state_11849[2]);var state_11849__$1 = state_11849;var statearr_11876_11954 = state_11849__$1;(statearr_11876_11954[2] = inst_11774);
(statearr_11876_11954[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11850 === 41))
{var inst_11717 = (state_11849[7]);var inst_11815 = (state_11849[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11849,40,Object,null,39);var inst_11822 = cljs.core.async.put_BANG_.call(null,inst_11815,inst_11717,done);var state_11849__$1 = state_11849;var statearr_11877_11955 = state_11849__$1;(statearr_11877_11955[2] = inst_11822);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11849__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11850 === 10))
{var inst_11727 = (state_11849[14]);var inst_11729 = (state_11849[17]);var inst_11735 = cljs.core._nth.call(null,inst_11727,inst_11729);var inst_11736 = cljs.core.nth.call(null,inst_11735,0,null);var inst_11737 = cljs.core.nth.call(null,inst_11735,1,null);var state_11849__$1 = (function (){var statearr_11878 = state_11849;(statearr_11878[24] = inst_11736);
return statearr_11878;
})();if(cljs.core.truth_(inst_11737))
{var statearr_11879_11956 = state_11849__$1;(statearr_11879_11956[1] = 13);
} else
{var statearr_11880_11957 = state_11849__$1;(statearr_11880_11957[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11850 === 42))
{var state_11849__$1 = state_11849;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11849__$1,45,dchan);
} else
{if((state_val_11850 === 11))
{var inst_11746 = (state_11849[25]);var inst_11726 = (state_11849[15]);var inst_11746__$1 = cljs.core.seq.call(null,inst_11726);var state_11849__$1 = (function (){var statearr_11881 = state_11849;(statearr_11881[25] = inst_11746__$1);
return statearr_11881;
})();if(inst_11746__$1)
{var statearr_11882_11958 = state_11849__$1;(statearr_11882_11958[1] = 16);
} else
{var statearr_11883_11959 = state_11849__$1;(statearr_11883_11959[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11850 === 43))
{var state_11849__$1 = state_11849;var statearr_11884_11960 = state_11849__$1;(statearr_11884_11960[2] = null);
(statearr_11884_11960[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11850 === 12))
{var inst_11772 = (state_11849[2]);var state_11849__$1 = state_11849;var statearr_11885_11961 = state_11849__$1;(statearr_11885_11961[2] = inst_11772);
(statearr_11885_11961[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11850 === 44))
{var inst_11842 = (state_11849[2]);var state_11849__$1 = (function (){var statearr_11886 = state_11849;(statearr_11886[26] = inst_11842);
return statearr_11886;
})();var statearr_11887_11962 = state_11849__$1;(statearr_11887_11962[2] = null);
(statearr_11887_11962[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11850 === 13))
{var inst_11736 = (state_11849[24]);var inst_11739 = cljs.core.async.close_BANG_.call(null,inst_11736);var state_11849__$1 = state_11849;var statearr_11888_11963 = state_11849__$1;(statearr_11888_11963[2] = inst_11739);
(statearr_11888_11963[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11850 === 45))
{var inst_11839 = (state_11849[2]);var state_11849__$1 = state_11849;var statearr_11892_11964 = state_11849__$1;(statearr_11892_11964[2] = inst_11839);
(statearr_11892_11964[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11850 === 14))
{var state_11849__$1 = state_11849;var statearr_11893_11965 = state_11849__$1;(statearr_11893_11965[2] = null);
(statearr_11893_11965[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11850 === 15))
{var inst_11727 = (state_11849[14]);var inst_11726 = (state_11849[15]);var inst_11728 = (state_11849[16]);var inst_11729 = (state_11849[17]);var inst_11742 = (state_11849[2]);var inst_11743 = (inst_11729 + 1);var tmp11889 = inst_11727;var tmp11890 = inst_11726;var tmp11891 = inst_11728;var inst_11726__$1 = tmp11890;var inst_11727__$1 = tmp11889;var inst_11728__$1 = tmp11891;var inst_11729__$1 = inst_11743;var state_11849__$1 = (function (){var statearr_11894 = state_11849;(statearr_11894[14] = inst_11727__$1);
(statearr_11894[15] = inst_11726__$1);
(statearr_11894[16] = inst_11728__$1);
(statearr_11894[17] = inst_11729__$1);
(statearr_11894[27] = inst_11742);
return statearr_11894;
})();var statearr_11895_11966 = state_11849__$1;(statearr_11895_11966[2] = null);
(statearr_11895_11966[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11850 === 16))
{var inst_11746 = (state_11849[25]);var inst_11748 = cljs.core.chunked_seq_QMARK_.call(null,inst_11746);var state_11849__$1 = state_11849;if(inst_11748)
{var statearr_11896_11967 = state_11849__$1;(statearr_11896_11967[1] = 19);
} else
{var statearr_11897_11968 = state_11849__$1;(statearr_11897_11968[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11850 === 17))
{var state_11849__$1 = state_11849;var statearr_11898_11969 = state_11849__$1;(statearr_11898_11969[2] = null);
(statearr_11898_11969[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11850 === 18))
{var inst_11770 = (state_11849[2]);var state_11849__$1 = state_11849;var statearr_11899_11970 = state_11849__$1;(statearr_11899_11970[2] = inst_11770);
(statearr_11899_11970[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11850 === 19))
{var inst_11746 = (state_11849[25]);var inst_11750 = cljs.core.chunk_first.call(null,inst_11746);var inst_11751 = cljs.core.chunk_rest.call(null,inst_11746);var inst_11752 = cljs.core.count.call(null,inst_11750);var inst_11726 = inst_11751;var inst_11727 = inst_11750;var inst_11728 = inst_11752;var inst_11729 = 0;var state_11849__$1 = (function (){var statearr_11900 = state_11849;(statearr_11900[14] = inst_11727);
(statearr_11900[15] = inst_11726);
(statearr_11900[16] = inst_11728);
(statearr_11900[17] = inst_11729);
return statearr_11900;
})();var statearr_11901_11971 = state_11849__$1;(statearr_11901_11971[2] = null);
(statearr_11901_11971[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11850 === 20))
{var inst_11746 = (state_11849[25]);var inst_11756 = cljs.core.first.call(null,inst_11746);var inst_11757 = cljs.core.nth.call(null,inst_11756,0,null);var inst_11758 = cljs.core.nth.call(null,inst_11756,1,null);var state_11849__$1 = (function (){var statearr_11902 = state_11849;(statearr_11902[28] = inst_11757);
return statearr_11902;
})();if(cljs.core.truth_(inst_11758))
{var statearr_11903_11972 = state_11849__$1;(statearr_11903_11972[1] = 22);
} else
{var statearr_11904_11973 = state_11849__$1;(statearr_11904_11973[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11850 === 21))
{var inst_11767 = (state_11849[2]);var state_11849__$1 = state_11849;var statearr_11905_11974 = state_11849__$1;(statearr_11905_11974[2] = inst_11767);
(statearr_11905_11974[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11850 === 22))
{var inst_11757 = (state_11849[28]);var inst_11760 = cljs.core.async.close_BANG_.call(null,inst_11757);var state_11849__$1 = state_11849;var statearr_11906_11975 = state_11849__$1;(statearr_11906_11975[2] = inst_11760);
(statearr_11906_11975[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11850 === 23))
{var state_11849__$1 = state_11849;var statearr_11907_11976 = state_11849__$1;(statearr_11907_11976[2] = null);
(statearr_11907_11976[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11850 === 24))
{var inst_11746 = (state_11849[25]);var inst_11763 = (state_11849[2]);var inst_11764 = cljs.core.next.call(null,inst_11746);var inst_11726 = inst_11764;var inst_11727 = null;var inst_11728 = 0;var inst_11729 = 0;var state_11849__$1 = (function (){var statearr_11908 = state_11849;(statearr_11908[14] = inst_11727);
(statearr_11908[15] = inst_11726);
(statearr_11908[29] = inst_11763);
(statearr_11908[16] = inst_11728);
(statearr_11908[17] = inst_11729);
return statearr_11908;
})();var statearr_11909_11977 = state_11849__$1;(statearr_11909_11977[2] = null);
(statearr_11909_11977[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11850 === 25))
{var inst_11787 = (state_11849[12]);var inst_11788 = (state_11849[13]);var inst_11790 = (inst_11788 < inst_11787);var inst_11791 = inst_11790;var state_11849__$1 = state_11849;if(cljs.core.truth_(inst_11791))
{var statearr_11910_11978 = state_11849__$1;(statearr_11910_11978[1] = 27);
} else
{var statearr_11911_11979 = state_11849__$1;(statearr_11911_11979[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11850 === 26))
{var inst_11777 = (state_11849[19]);var inst_11835 = (state_11849[2]);var inst_11836 = cljs.core.seq.call(null,inst_11777);var state_11849__$1 = (function (){var statearr_11912 = state_11849;(statearr_11912[30] = inst_11835);
return statearr_11912;
})();if(inst_11836)
{var statearr_11913_11980 = state_11849__$1;(statearr_11913_11980[1] = 42);
} else
{var statearr_11914_11981 = state_11849__$1;(statearr_11914_11981[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11850 === 27))
{var inst_11786 = (state_11849[11]);var inst_11788 = (state_11849[13]);var inst_11793 = cljs.core._nth.call(null,inst_11786,inst_11788);var state_11849__$1 = (function (){var statearr_11915 = state_11849;(statearr_11915[8] = inst_11793);
return statearr_11915;
})();var statearr_11916_11982 = state_11849__$1;(statearr_11916_11982[2] = null);
(statearr_11916_11982[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11850 === 28))
{var inst_11785 = (state_11849[10]);var inst_11806 = (state_11849[9]);var inst_11806__$1 = cljs.core.seq.call(null,inst_11785);var state_11849__$1 = (function (){var statearr_11920 = state_11849;(statearr_11920[9] = inst_11806__$1);
return statearr_11920;
})();if(inst_11806__$1)
{var statearr_11921_11983 = state_11849__$1;(statearr_11921_11983[1] = 33);
} else
{var statearr_11922_11984 = state_11849__$1;(statearr_11922_11984[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11850 === 29))
{var inst_11833 = (state_11849[2]);var state_11849__$1 = state_11849;var statearr_11923_11985 = state_11849__$1;(statearr_11923_11985[2] = inst_11833);
(statearr_11923_11985[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11850 === 30))
{var inst_11785 = (state_11849[10]);var inst_11786 = (state_11849[11]);var inst_11787 = (state_11849[12]);var inst_11788 = (state_11849[13]);var inst_11802 = (state_11849[2]);var inst_11803 = (inst_11788 + 1);var tmp11917 = inst_11785;var tmp11918 = inst_11786;var tmp11919 = inst_11787;var inst_11785__$1 = tmp11917;var inst_11786__$1 = tmp11918;var inst_11787__$1 = tmp11919;var inst_11788__$1 = inst_11803;var state_11849__$1 = (function (){var statearr_11924 = state_11849;(statearr_11924[10] = inst_11785__$1);
(statearr_11924[31] = inst_11802);
(statearr_11924[11] = inst_11786__$1);
(statearr_11924[12] = inst_11787__$1);
(statearr_11924[13] = inst_11788__$1);
return statearr_11924;
})();var statearr_11925_11986 = state_11849__$1;(statearr_11925_11986[2] = null);
(statearr_11925_11986[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11850 === 31))
{var inst_11793 = (state_11849[8]);var inst_11794 = (state_11849[2]);var inst_11795 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11796 = cljs.core.async.untap_STAR_.call(null,m,inst_11793);var state_11849__$1 = (function (){var statearr_11926 = state_11849;(statearr_11926[32] = inst_11795);
(statearr_11926[33] = inst_11794);
return statearr_11926;
})();var statearr_11927_11987 = state_11849__$1;(statearr_11927_11987[2] = inst_11796);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11849__$1);
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
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
var state_machine__6152__auto____0 = (function (){var statearr_11931 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11931[0] = state_machine__6152__auto__);
(statearr_11931[1] = 1);
return statearr_11931;
});
var state_machine__6152__auto____1 = (function (state_11849){while(true){
var ret_value__6153__auto__ = (function (){try{while(true){
var result__6154__auto__ = switch__6151__auto__.call(null,state_11849);if(cljs.core.keyword_identical_QMARK_.call(null,result__6154__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6154__auto__;
}
break;
}
}catch (e11932){if((e11932 instanceof Object))
{var ex__6155__auto__ = e11932;var statearr_11933_11988 = state_11849;(statearr_11933_11988[5] = ex__6155__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11849);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11932;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6153__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11989 = state_11849;
state_11849 = G__11989;
continue;
}
} else
{return ret_value__6153__auto__;
}
break;
}
});
state_machine__6152__auto__ = function(state_11849){
switch(arguments.length){
case 0:
return state_machine__6152__auto____0.call(this);
case 1:
return state_machine__6152__auto____1.call(this,state_11849);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6152__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6152__auto____0;
state_machine__6152__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6152__auto____1;
return state_machine__6152__auto__;
})()
;})(switch__6151__auto__))
})();var state__6168__auto__ = (function (){var statearr_11934 = f__6167__auto__.call(null);(statearr_11934[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6166__auto___11935);
return statearr_11934;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6168__auto__);
}));
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj11991 = {};return obj11991;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3382__auto__ = m;if(and__3382__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3382__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4015__auto__ = (((m == null))?null:m);return (function (){var or__3394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4015__auto__)]);if(or__3394__auto__)
{return or__3394__auto__;
} else
{var or__3394__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3394__auto____$1)
{return or__3394__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3382__auto__ = m;if(and__3382__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3382__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4015__auto__ = (((m == null))?null:m);return (function (){var or__3394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4015__auto__)]);if(or__3394__auto__)
{return or__3394__auto__;
} else
{var or__3394__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3394__auto____$1)
{return or__3394__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3382__auto__ = m;if(and__3382__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3382__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4015__auto__ = (((m == null))?null:m);return (function (){var or__3394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4015__auto__)]);if(or__3394__auto__)
{return or__3394__auto__;
} else
{var or__3394__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3394__auto____$1)
{return or__3394__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3382__auto__ = m;if(and__3382__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3382__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4015__auto__ = (((m == null))?null:m);return (function (){var or__3394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4015__auto__)]);if(or__3394__auto__)
{return or__3394__auto__;
} else
{var or__3394__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3394__auto____$1)
{return or__3394__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3382__auto__ = m;if(and__3382__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3382__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4015__auto__ = (((m == null))?null:m);return (function (){var or__3394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4015__auto__)]);if(or__3394__auto__)
{return or__3394__auto__;
} else
{var or__3394__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3394__auto____$1)
{return or__3394__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t12101 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12101 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta12102){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta12102 = meta12102;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12101.cljs$lang$type = true;
cljs.core.async.t12101.cljs$lang$ctorStr = "cljs.core.async/t12101";
cljs.core.async.t12101.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3956__auto__,writer__3957__auto__,opt__3958__auto__){return cljs.core._write.call(null,writer__3957__auto__,"cljs.core.async/t12101");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12101.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t12101.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12101.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12101.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12101.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12101.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12101.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12101.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12101.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12103){var self__ = this;
var _12103__$1 = this;return self__.meta12102;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12101.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12103,meta12102__$1){var self__ = this;
var _12103__$1 = this;return (new cljs.core.async.t12101(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta12102__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t12101 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t12101(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta12102){return (new cljs.core.async.t12101(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta12102));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t12101(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__6166__auto___12210 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6167__auto__ = (function (){var switch__6151__auto__ = (function (state_12168){var state_val_12169 = (state_12168[1]);if((state_val_12169 === 1))
{var inst_12107 = (state_12168[7]);var inst_12107__$1 = calc_state.call(null);var inst_12108 = cljs.core.seq_QMARK_.call(null,inst_12107__$1);var state_12168__$1 = (function (){var statearr_12170 = state_12168;(statearr_12170[7] = inst_12107__$1);
return statearr_12170;
})();if(inst_12108)
{var statearr_12171_12211 = state_12168__$1;(statearr_12171_12211[1] = 2);
} else
{var statearr_12172_12212 = state_12168__$1;(statearr_12172_12212[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12169 === 2))
{var inst_12107 = (state_12168[7]);var inst_12110 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12107);var state_12168__$1 = state_12168;var statearr_12173_12213 = state_12168__$1;(statearr_12173_12213[2] = inst_12110);
(statearr_12173_12213[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12169 === 3))
{var inst_12107 = (state_12168[7]);var state_12168__$1 = state_12168;var statearr_12174_12214 = state_12168__$1;(statearr_12174_12214[2] = inst_12107);
(statearr_12174_12214[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12169 === 4))
{var inst_12107 = (state_12168[7]);var inst_12113 = (state_12168[2]);var inst_12114 = cljs.core.get.call(null,inst_12113,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_12115 = cljs.core.get.call(null,inst_12113,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_12116 = cljs.core.get.call(null,inst_12113,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_12117 = inst_12107;var state_12168__$1 = (function (){var statearr_12175 = state_12168;(statearr_12175[8] = inst_12115);
(statearr_12175[9] = inst_12114);
(statearr_12175[10] = inst_12116);
(statearr_12175[11] = inst_12117);
return statearr_12175;
})();var statearr_12176_12215 = state_12168__$1;(statearr_12176_12215[2] = null);
(statearr_12176_12215[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12169 === 5))
{var inst_12117 = (state_12168[11]);var inst_12120 = cljs.core.seq_QMARK_.call(null,inst_12117);var state_12168__$1 = state_12168;if(inst_12120)
{var statearr_12177_12216 = state_12168__$1;(statearr_12177_12216[1] = 7);
} else
{var statearr_12178_12217 = state_12168__$1;(statearr_12178_12217[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12169 === 6))
{var inst_12166 = (state_12168[2]);var state_12168__$1 = state_12168;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12168__$1,inst_12166);
} else
{if((state_val_12169 === 7))
{var inst_12117 = (state_12168[11]);var inst_12122 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12117);var state_12168__$1 = state_12168;var statearr_12179_12218 = state_12168__$1;(statearr_12179_12218[2] = inst_12122);
(statearr_12179_12218[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12169 === 8))
{var inst_12117 = (state_12168[11]);var state_12168__$1 = state_12168;var statearr_12180_12219 = state_12168__$1;(statearr_12180_12219[2] = inst_12117);
(statearr_12180_12219[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12169 === 9))
{var inst_12125 = (state_12168[12]);var inst_12125__$1 = (state_12168[2]);var inst_12126 = cljs.core.get.call(null,inst_12125__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_12127 = cljs.core.get.call(null,inst_12125__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_12128 = cljs.core.get.call(null,inst_12125__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_12168__$1 = (function (){var statearr_12181 = state_12168;(statearr_12181[13] = inst_12127);
(statearr_12181[14] = inst_12128);
(statearr_12181[12] = inst_12125__$1);
return statearr_12181;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12168__$1,10,inst_12126);
} else
{if((state_val_12169 === 10))
{var inst_12132 = (state_12168[15]);var inst_12133 = (state_12168[16]);var inst_12131 = (state_12168[2]);var inst_12132__$1 = cljs.core.nth.call(null,inst_12131,0,null);var inst_12133__$1 = cljs.core.nth.call(null,inst_12131,1,null);var inst_12134 = (inst_12132__$1 == null);var inst_12135 = cljs.core._EQ_.call(null,inst_12133__$1,change);var inst_12136 = (inst_12134) || (inst_12135);var state_12168__$1 = (function (){var statearr_12182 = state_12168;(statearr_12182[15] = inst_12132__$1);
(statearr_12182[16] = inst_12133__$1);
return statearr_12182;
})();if(cljs.core.truth_(inst_12136))
{var statearr_12183_12220 = state_12168__$1;(statearr_12183_12220[1] = 11);
} else
{var statearr_12184_12221 = state_12168__$1;(statearr_12184_12221[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12169 === 11))
{var inst_12132 = (state_12168[15]);var inst_12138 = (inst_12132 == null);var state_12168__$1 = state_12168;if(cljs.core.truth_(inst_12138))
{var statearr_12185_12222 = state_12168__$1;(statearr_12185_12222[1] = 14);
} else
{var statearr_12186_12223 = state_12168__$1;(statearr_12186_12223[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12169 === 12))
{var inst_12147 = (state_12168[17]);var inst_12128 = (state_12168[14]);var inst_12133 = (state_12168[16]);var inst_12147__$1 = inst_12128.call(null,inst_12133);var state_12168__$1 = (function (){var statearr_12187 = state_12168;(statearr_12187[17] = inst_12147__$1);
return statearr_12187;
})();if(cljs.core.truth_(inst_12147__$1))
{var statearr_12188_12224 = state_12168__$1;(statearr_12188_12224[1] = 17);
} else
{var statearr_12189_12225 = state_12168__$1;(statearr_12189_12225[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12169 === 13))
{var inst_12164 = (state_12168[2]);var state_12168__$1 = state_12168;var statearr_12190_12226 = state_12168__$1;(statearr_12190_12226[2] = inst_12164);
(statearr_12190_12226[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12169 === 14))
{var inst_12133 = (state_12168[16]);var inst_12140 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12133);var state_12168__$1 = state_12168;var statearr_12191_12227 = state_12168__$1;(statearr_12191_12227[2] = inst_12140);
(statearr_12191_12227[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12169 === 15))
{var state_12168__$1 = state_12168;var statearr_12192_12228 = state_12168__$1;(statearr_12192_12228[2] = null);
(statearr_12192_12228[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12169 === 16))
{var inst_12143 = (state_12168[2]);var inst_12144 = calc_state.call(null);var inst_12117 = inst_12144;var state_12168__$1 = (function (){var statearr_12193 = state_12168;(statearr_12193[18] = inst_12143);
(statearr_12193[11] = inst_12117);
return statearr_12193;
})();var statearr_12194_12229 = state_12168__$1;(statearr_12194_12229[2] = null);
(statearr_12194_12229[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12169 === 17))
{var inst_12147 = (state_12168[17]);var state_12168__$1 = state_12168;var statearr_12195_12230 = state_12168__$1;(statearr_12195_12230[2] = inst_12147);
(statearr_12195_12230[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12169 === 18))
{var inst_12127 = (state_12168[13]);var inst_12128 = (state_12168[14]);var inst_12133 = (state_12168[16]);var inst_12150 = cljs.core.empty_QMARK_.call(null,inst_12128);var inst_12151 = inst_12127.call(null,inst_12133);var inst_12152 = cljs.core.not.call(null,inst_12151);var inst_12153 = (inst_12150) && (inst_12152);var state_12168__$1 = state_12168;var statearr_12196_12231 = state_12168__$1;(statearr_12196_12231[2] = inst_12153);
(statearr_12196_12231[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12169 === 19))
{var inst_12155 = (state_12168[2]);var state_12168__$1 = state_12168;if(cljs.core.truth_(inst_12155))
{var statearr_12197_12232 = state_12168__$1;(statearr_12197_12232[1] = 20);
} else
{var statearr_12198_12233 = state_12168__$1;(statearr_12198_12233[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12169 === 20))
{var inst_12132 = (state_12168[15]);var state_12168__$1 = state_12168;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12168__$1,23,out,inst_12132);
} else
{if((state_val_12169 === 21))
{var state_12168__$1 = state_12168;var statearr_12199_12234 = state_12168__$1;(statearr_12199_12234[2] = null);
(statearr_12199_12234[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12169 === 22))
{var inst_12125 = (state_12168[12]);var inst_12161 = (state_12168[2]);var inst_12117 = inst_12125;var state_12168__$1 = (function (){var statearr_12200 = state_12168;(statearr_12200[19] = inst_12161);
(statearr_12200[11] = inst_12117);
return statearr_12200;
})();var statearr_12201_12235 = state_12168__$1;(statearr_12201_12235[2] = null);
(statearr_12201_12235[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12169 === 23))
{var inst_12158 = (state_12168[2]);var state_12168__$1 = state_12168;var statearr_12202_12236 = state_12168__$1;(statearr_12202_12236[2] = inst_12158);
(statearr_12202_12236[1] = 22);
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
}
}
}
}
}
}
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
var state_machine__6152__auto____0 = (function (){var statearr_12206 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12206[0] = state_machine__6152__auto__);
(statearr_12206[1] = 1);
return statearr_12206;
});
var state_machine__6152__auto____1 = (function (state_12168){while(true){
var ret_value__6153__auto__ = (function (){try{while(true){
var result__6154__auto__ = switch__6151__auto__.call(null,state_12168);if(cljs.core.keyword_identical_QMARK_.call(null,result__6154__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6154__auto__;
}
break;
}
}catch (e12207){if((e12207 instanceof Object))
{var ex__6155__auto__ = e12207;var statearr_12208_12237 = state_12168;(statearr_12208_12237[5] = ex__6155__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12168);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12207;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6153__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12238 = state_12168;
state_12168 = G__12238;
continue;
}
} else
{return ret_value__6153__auto__;
}
break;
}
});
state_machine__6152__auto__ = function(state_12168){
switch(arguments.length){
case 0:
return state_machine__6152__auto____0.call(this);
case 1:
return state_machine__6152__auto____1.call(this,state_12168);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6152__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6152__auto____0;
state_machine__6152__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6152__auto____1;
return state_machine__6152__auto__;
})()
;})(switch__6151__auto__))
})();var state__6168__auto__ = (function (){var statearr_12209 = f__6167__auto__.call(null);(statearr_12209[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6166__auto___12210);
return statearr_12209;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6168__auto__);
}));
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj12240 = {};return obj12240;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3382__auto__ = p;if(and__3382__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3382__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4015__auto__ = (((p == null))?null:p);return (function (){var or__3394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4015__auto__)]);if(or__3394__auto__)
{return or__3394__auto__;
} else
{var or__3394__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3394__auto____$1)
{return or__3394__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3382__auto__ = p;if(and__3382__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3382__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4015__auto__ = (((p == null))?null:p);return (function (){var or__3394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4015__auto__)]);if(or__3394__auto__)
{return or__3394__auto__;
} else
{var or__3394__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3394__auto____$1)
{return or__3394__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3382__auto__ = p;if(and__3382__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3382__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4015__auto__ = (((p == null))?null:p);return (function (){var or__3394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4015__auto__)]);if(or__3394__auto__)
{return or__3394__auto__;
} else
{var or__3394__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3394__auto____$1)
{return or__3394__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3382__auto__ = p;if(and__3382__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3382__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4015__auto__ = (((p == null))?null:p);return (function (){var or__3394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4015__auto__)]);if(or__3394__auto__)
{return or__3394__auto__;
} else
{var or__3394__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3394__auto____$1)
{return or__3394__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3394__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3394__auto__))
{return or__3394__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3394__auto__,mults){
return (function (p1__12241_SHARP_){if(cljs.core.truth_(p1__12241_SHARP_.call(null,topic)))
{return p1__12241_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__12241_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3394__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t12366 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12366 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta12367){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta12367 = meta12367;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12366.cljs$lang$type = true;
cljs.core.async.t12366.cljs$lang$ctorStr = "cljs.core.async/t12366";
cljs.core.async.t12366.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3956__auto__,writer__3957__auto__,opt__3958__auto__){return cljs.core._write.call(null,writer__3957__auto__,"cljs.core.async/t12366");
});})(mults,ensure_mult))
;
cljs.core.async.t12366.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t12366.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t12366.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t12366.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t12366.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t12366.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12366.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t12366.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_12368){var self__ = this;
var _12368__$1 = this;return self__.meta12367;
});})(mults,ensure_mult))
;
cljs.core.async.t12366.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_12368,meta12367__$1){var self__ = this;
var _12368__$1 = this;return (new cljs.core.async.t12366(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta12367__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t12366 = ((function (mults,ensure_mult){
return (function __GT_t12366(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12367){return (new cljs.core.async.t12366(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12367));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t12366(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6166__auto___12490 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6167__auto__ = (function (){var switch__6151__auto__ = (function (state_12442){var state_val_12443 = (state_12442[1]);if((state_val_12443 === 1))
{var state_12442__$1 = state_12442;var statearr_12444_12491 = state_12442__$1;(statearr_12444_12491[2] = null);
(statearr_12444_12491[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12443 === 2))
{var state_12442__$1 = state_12442;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12442__$1,4,ch);
} else
{if((state_val_12443 === 3))
{var inst_12440 = (state_12442[2]);var state_12442__$1 = state_12442;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12442__$1,inst_12440);
} else
{if((state_val_12443 === 4))
{var inst_12371 = (state_12442[7]);var inst_12371__$1 = (state_12442[2]);var inst_12372 = (inst_12371__$1 == null);var state_12442__$1 = (function (){var statearr_12445 = state_12442;(statearr_12445[7] = inst_12371__$1);
return statearr_12445;
})();if(cljs.core.truth_(inst_12372))
{var statearr_12446_12492 = state_12442__$1;(statearr_12446_12492[1] = 5);
} else
{var statearr_12447_12493 = state_12442__$1;(statearr_12447_12493[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12443 === 5))
{var inst_12378 = cljs.core.deref.call(null,mults);var inst_12379 = cljs.core.vals.call(null,inst_12378);var inst_12380 = cljs.core.seq.call(null,inst_12379);var inst_12381 = inst_12380;var inst_12382 = null;var inst_12383 = 0;var inst_12384 = 0;var state_12442__$1 = (function (){var statearr_12448 = state_12442;(statearr_12448[8] = inst_12383);
(statearr_12448[9] = inst_12384);
(statearr_12448[10] = inst_12382);
(statearr_12448[11] = inst_12381);
return statearr_12448;
})();var statearr_12449_12494 = state_12442__$1;(statearr_12449_12494[2] = null);
(statearr_12449_12494[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12443 === 6))
{var inst_12421 = (state_12442[12]);var inst_12419 = (state_12442[13]);var inst_12371 = (state_12442[7]);var inst_12419__$1 = topic_fn.call(null,inst_12371);var inst_12420 = cljs.core.deref.call(null,mults);var inst_12421__$1 = cljs.core.get.call(null,inst_12420,inst_12419__$1);var state_12442__$1 = (function (){var statearr_12450 = state_12442;(statearr_12450[12] = inst_12421__$1);
(statearr_12450[13] = inst_12419__$1);
return statearr_12450;
})();if(cljs.core.truth_(inst_12421__$1))
{var statearr_12451_12495 = state_12442__$1;(statearr_12451_12495[1] = 19);
} else
{var statearr_12452_12496 = state_12442__$1;(statearr_12452_12496[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12443 === 7))
{var inst_12438 = (state_12442[2]);var state_12442__$1 = state_12442;var statearr_12453_12497 = state_12442__$1;(statearr_12453_12497[2] = inst_12438);
(statearr_12453_12497[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12443 === 8))
{var inst_12383 = (state_12442[8]);var inst_12384 = (state_12442[9]);var inst_12386 = (inst_12384 < inst_12383);var inst_12387 = inst_12386;var state_12442__$1 = state_12442;if(cljs.core.truth_(inst_12387))
{var statearr_12457_12498 = state_12442__$1;(statearr_12457_12498[1] = 10);
} else
{var statearr_12458_12499 = state_12442__$1;(statearr_12458_12499[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12443 === 9))
{var inst_12417 = (state_12442[2]);var state_12442__$1 = state_12442;var statearr_12459_12500 = state_12442__$1;(statearr_12459_12500[2] = inst_12417);
(statearr_12459_12500[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12443 === 10))
{var inst_12383 = (state_12442[8]);var inst_12384 = (state_12442[9]);var inst_12382 = (state_12442[10]);var inst_12381 = (state_12442[11]);var inst_12389 = cljs.core._nth.call(null,inst_12382,inst_12384);var inst_12390 = cljs.core.async.muxch_STAR_.call(null,inst_12389);var inst_12391 = cljs.core.async.close_BANG_.call(null,inst_12390);var inst_12392 = (inst_12384 + 1);var tmp12454 = inst_12383;var tmp12455 = inst_12382;var tmp12456 = inst_12381;var inst_12381__$1 = tmp12456;var inst_12382__$1 = tmp12455;var inst_12383__$1 = tmp12454;var inst_12384__$1 = inst_12392;var state_12442__$1 = (function (){var statearr_12460 = state_12442;(statearr_12460[8] = inst_12383__$1);
(statearr_12460[9] = inst_12384__$1);
(statearr_12460[10] = inst_12382__$1);
(statearr_12460[11] = inst_12381__$1);
(statearr_12460[14] = inst_12391);
return statearr_12460;
})();var statearr_12461_12501 = state_12442__$1;(statearr_12461_12501[2] = null);
(statearr_12461_12501[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12443 === 11))
{var inst_12381 = (state_12442[11]);var inst_12395 = (state_12442[15]);var inst_12395__$1 = cljs.core.seq.call(null,inst_12381);var state_12442__$1 = (function (){var statearr_12462 = state_12442;(statearr_12462[15] = inst_12395__$1);
return statearr_12462;
})();if(inst_12395__$1)
{var statearr_12463_12502 = state_12442__$1;(statearr_12463_12502[1] = 13);
} else
{var statearr_12464_12503 = state_12442__$1;(statearr_12464_12503[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12443 === 12))
{var inst_12415 = (state_12442[2]);var state_12442__$1 = state_12442;var statearr_12465_12504 = state_12442__$1;(statearr_12465_12504[2] = inst_12415);
(statearr_12465_12504[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12443 === 13))
{var inst_12395 = (state_12442[15]);var inst_12397 = cljs.core.chunked_seq_QMARK_.call(null,inst_12395);var state_12442__$1 = state_12442;if(inst_12397)
{var statearr_12466_12505 = state_12442__$1;(statearr_12466_12505[1] = 16);
} else
{var statearr_12467_12506 = state_12442__$1;(statearr_12467_12506[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12443 === 14))
{var state_12442__$1 = state_12442;var statearr_12468_12507 = state_12442__$1;(statearr_12468_12507[2] = null);
(statearr_12468_12507[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12443 === 15))
{var inst_12413 = (state_12442[2]);var state_12442__$1 = state_12442;var statearr_12469_12508 = state_12442__$1;(statearr_12469_12508[2] = inst_12413);
(statearr_12469_12508[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12443 === 16))
{var inst_12395 = (state_12442[15]);var inst_12399 = cljs.core.chunk_first.call(null,inst_12395);var inst_12400 = cljs.core.chunk_rest.call(null,inst_12395);var inst_12401 = cljs.core.count.call(null,inst_12399);var inst_12381 = inst_12400;var inst_12382 = inst_12399;var inst_12383 = inst_12401;var inst_12384 = 0;var state_12442__$1 = (function (){var statearr_12470 = state_12442;(statearr_12470[8] = inst_12383);
(statearr_12470[9] = inst_12384);
(statearr_12470[10] = inst_12382);
(statearr_12470[11] = inst_12381);
return statearr_12470;
})();var statearr_12471_12509 = state_12442__$1;(statearr_12471_12509[2] = null);
(statearr_12471_12509[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12443 === 17))
{var inst_12395 = (state_12442[15]);var inst_12404 = cljs.core.first.call(null,inst_12395);var inst_12405 = cljs.core.async.muxch_STAR_.call(null,inst_12404);var inst_12406 = cljs.core.async.close_BANG_.call(null,inst_12405);var inst_12407 = cljs.core.next.call(null,inst_12395);var inst_12381 = inst_12407;var inst_12382 = null;var inst_12383 = 0;var inst_12384 = 0;var state_12442__$1 = (function (){var statearr_12472 = state_12442;(statearr_12472[8] = inst_12383);
(statearr_12472[9] = inst_12384);
(statearr_12472[10] = inst_12382);
(statearr_12472[11] = inst_12381);
(statearr_12472[16] = inst_12406);
return statearr_12472;
})();var statearr_12473_12510 = state_12442__$1;(statearr_12473_12510[2] = null);
(statearr_12473_12510[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12443 === 18))
{var inst_12410 = (state_12442[2]);var state_12442__$1 = state_12442;var statearr_12474_12511 = state_12442__$1;(statearr_12474_12511[2] = inst_12410);
(statearr_12474_12511[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12443 === 19))
{var state_12442__$1 = state_12442;var statearr_12475_12512 = state_12442__$1;(statearr_12475_12512[2] = null);
(statearr_12475_12512[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12443 === 20))
{var state_12442__$1 = state_12442;var statearr_12476_12513 = state_12442__$1;(statearr_12476_12513[2] = null);
(statearr_12476_12513[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12443 === 21))
{var inst_12435 = (state_12442[2]);var state_12442__$1 = (function (){var statearr_12477 = state_12442;(statearr_12477[17] = inst_12435);
return statearr_12477;
})();var statearr_12478_12514 = state_12442__$1;(statearr_12478_12514[2] = null);
(statearr_12478_12514[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12443 === 22))
{var inst_12432 = (state_12442[2]);var state_12442__$1 = state_12442;var statearr_12479_12515 = state_12442__$1;(statearr_12479_12515[2] = inst_12432);
(statearr_12479_12515[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12443 === 23))
{var inst_12419 = (state_12442[13]);var inst_12423 = (state_12442[2]);var inst_12424 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12419);var state_12442__$1 = (function (){var statearr_12480 = state_12442;(statearr_12480[18] = inst_12423);
return statearr_12480;
})();var statearr_12481_12516 = state_12442__$1;(statearr_12481_12516[2] = inst_12424);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12442__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12443 === 24))
{var inst_12421 = (state_12442[12]);var inst_12371 = (state_12442[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12442,23,Object,null,22);var inst_12428 = cljs.core.async.muxch_STAR_.call(null,inst_12421);var state_12442__$1 = state_12442;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12442__$1,25,inst_12428,inst_12371);
} else
{if((state_val_12443 === 25))
{var inst_12430 = (state_12442[2]);var state_12442__$1 = state_12442;var statearr_12482_12517 = state_12442__$1;(statearr_12482_12517[2] = inst_12430);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12442__$1);
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
}
}
}
}
}
}
}
}
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
var state_machine__6152__auto____0 = (function (){var statearr_12486 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12486[0] = state_machine__6152__auto__);
(statearr_12486[1] = 1);
return statearr_12486;
});
var state_machine__6152__auto____1 = (function (state_12442){while(true){
var ret_value__6153__auto__ = (function (){try{while(true){
var result__6154__auto__ = switch__6151__auto__.call(null,state_12442);if(cljs.core.keyword_identical_QMARK_.call(null,result__6154__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6154__auto__;
}
break;
}
}catch (e12487){if((e12487 instanceof Object))
{var ex__6155__auto__ = e12487;var statearr_12488_12518 = state_12442;(statearr_12488_12518[5] = ex__6155__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12442);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12487;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6153__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12519 = state_12442;
state_12442 = G__12519;
continue;
}
} else
{return ret_value__6153__auto__;
}
break;
}
});
state_machine__6152__auto__ = function(state_12442){
switch(arguments.length){
case 0:
return state_machine__6152__auto____0.call(this);
case 1:
return state_machine__6152__auto____1.call(this,state_12442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6152__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6152__auto____0;
state_machine__6152__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6152__auto____1;
return state_machine__6152__auto__;
})()
;})(switch__6151__auto__))
})();var state__6168__auto__ = (function (){var statearr_12489 = f__6167__auto__.call(null);(statearr_12489[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6166__auto___12490);
return statearr_12489;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6168__auto__);
}));
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__6166__auto___12656 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6167__auto__ = (function (){var switch__6151__auto__ = (function (state_12626){var state_val_12627 = (state_12626[1]);if((state_val_12627 === 1))
{var state_12626__$1 = state_12626;var statearr_12628_12657 = state_12626__$1;(statearr_12628_12657[2] = null);
(statearr_12628_12657[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12627 === 2))
{var inst_12589 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_12590 = 0;var state_12626__$1 = (function (){var statearr_12629 = state_12626;(statearr_12629[7] = inst_12589);
(statearr_12629[8] = inst_12590);
return statearr_12629;
})();var statearr_12630_12658 = state_12626__$1;(statearr_12630_12658[2] = null);
(statearr_12630_12658[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12627 === 3))
{var inst_12624 = (state_12626[2]);var state_12626__$1 = state_12626;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12626__$1,inst_12624);
} else
{if((state_val_12627 === 4))
{var inst_12590 = (state_12626[8]);var inst_12592 = (inst_12590 < cnt);var state_12626__$1 = state_12626;if(cljs.core.truth_(inst_12592))
{var statearr_12631_12659 = state_12626__$1;(statearr_12631_12659[1] = 6);
} else
{var statearr_12632_12660 = state_12626__$1;(statearr_12632_12660[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12627 === 5))
{var inst_12610 = (state_12626[2]);var state_12626__$1 = (function (){var statearr_12633 = state_12626;(statearr_12633[9] = inst_12610);
return statearr_12633;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12626__$1,12,dchan);
} else
{if((state_val_12627 === 6))
{var state_12626__$1 = state_12626;var statearr_12634_12661 = state_12626__$1;(statearr_12634_12661[2] = null);
(statearr_12634_12661[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12627 === 7))
{var state_12626__$1 = state_12626;var statearr_12635_12662 = state_12626__$1;(statearr_12635_12662[2] = null);
(statearr_12635_12662[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12627 === 8))
{var inst_12608 = (state_12626[2]);var state_12626__$1 = state_12626;var statearr_12636_12663 = state_12626__$1;(statearr_12636_12663[2] = inst_12608);
(statearr_12636_12663[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12627 === 9))
{var inst_12590 = (state_12626[8]);var inst_12603 = (state_12626[2]);var inst_12604 = (inst_12590 + 1);var inst_12590__$1 = inst_12604;var state_12626__$1 = (function (){var statearr_12637 = state_12626;(statearr_12637[8] = inst_12590__$1);
(statearr_12637[10] = inst_12603);
return statearr_12637;
})();var statearr_12638_12664 = state_12626__$1;(statearr_12638_12664[2] = null);
(statearr_12638_12664[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12627 === 10))
{var inst_12594 = (state_12626[2]);var inst_12595 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_12626__$1 = (function (){var statearr_12639 = state_12626;(statearr_12639[11] = inst_12594);
return statearr_12639;
})();var statearr_12640_12665 = state_12626__$1;(statearr_12640_12665[2] = inst_12595);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12626__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12627 === 11))
{var inst_12590 = (state_12626[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12626,10,Object,null,9);var inst_12599 = chs__$1.call(null,inst_12590);var inst_12600 = done.call(null,inst_12590);var inst_12601 = cljs.core.async.take_BANG_.call(null,inst_12599,inst_12600);var state_12626__$1 = state_12626;var statearr_12641_12666 = state_12626__$1;(statearr_12641_12666[2] = inst_12601);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12626__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12627 === 12))
{var inst_12612 = (state_12626[12]);var inst_12612__$1 = (state_12626[2]);var inst_12613 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_12612__$1);var state_12626__$1 = (function (){var statearr_12642 = state_12626;(statearr_12642[12] = inst_12612__$1);
return statearr_12642;
})();if(cljs.core.truth_(inst_12613))
{var statearr_12643_12667 = state_12626__$1;(statearr_12643_12667[1] = 13);
} else
{var statearr_12644_12668 = state_12626__$1;(statearr_12644_12668[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12627 === 13))
{var inst_12615 = cljs.core.async.close_BANG_.call(null,out);var state_12626__$1 = state_12626;var statearr_12645_12669 = state_12626__$1;(statearr_12645_12669[2] = inst_12615);
(statearr_12645_12669[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12627 === 14))
{var inst_12612 = (state_12626[12]);var inst_12617 = cljs.core.apply.call(null,f,inst_12612);var state_12626__$1 = state_12626;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12626__$1,16,out,inst_12617);
} else
{if((state_val_12627 === 15))
{var inst_12622 = (state_12626[2]);var state_12626__$1 = state_12626;var statearr_12646_12670 = state_12626__$1;(statearr_12646_12670[2] = inst_12622);
(statearr_12646_12670[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12627 === 16))
{var inst_12619 = (state_12626[2]);var state_12626__$1 = (function (){var statearr_12647 = state_12626;(statearr_12647[13] = inst_12619);
return statearr_12647;
})();var statearr_12648_12671 = state_12626__$1;(statearr_12648_12671[2] = null);
(statearr_12648_12671[1] = 2);
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
var state_machine__6152__auto____0 = (function (){var statearr_12652 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12652[0] = state_machine__6152__auto__);
(statearr_12652[1] = 1);
return statearr_12652;
});
var state_machine__6152__auto____1 = (function (state_12626){while(true){
var ret_value__6153__auto__ = (function (){try{while(true){
var result__6154__auto__ = switch__6151__auto__.call(null,state_12626);if(cljs.core.keyword_identical_QMARK_.call(null,result__6154__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6154__auto__;
}
break;
}
}catch (e12653){if((e12653 instanceof Object))
{var ex__6155__auto__ = e12653;var statearr_12654_12672 = state_12626;(statearr_12654_12672[5] = ex__6155__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12626);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12653;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6153__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12673 = state_12626;
state_12626 = G__12673;
continue;
}
} else
{return ret_value__6153__auto__;
}
break;
}
});
state_machine__6152__auto__ = function(state_12626){
switch(arguments.length){
case 0:
return state_machine__6152__auto____0.call(this);
case 1:
return state_machine__6152__auto____1.call(this,state_12626);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6152__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6152__auto____0;
state_machine__6152__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6152__auto____1;
return state_machine__6152__auto__;
})()
;})(switch__6151__auto__))
})();var state__6168__auto__ = (function (){var statearr_12655 = f__6167__auto__.call(null);(statearr_12655[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6166__auto___12656);
return statearr_12655;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6168__auto__);
}));
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6166__auto___12781 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6167__auto__ = (function (){var switch__6151__auto__ = (function (state_12757){var state_val_12758 = (state_12757[1]);if((state_val_12758 === 1))
{var inst_12728 = cljs.core.vec.call(null,chs);var inst_12729 = inst_12728;var state_12757__$1 = (function (){var statearr_12759 = state_12757;(statearr_12759[7] = inst_12729);
return statearr_12759;
})();var statearr_12760_12782 = state_12757__$1;(statearr_12760_12782[2] = null);
(statearr_12760_12782[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12758 === 2))
{var inst_12729 = (state_12757[7]);var inst_12731 = cljs.core.count.call(null,inst_12729);var inst_12732 = (inst_12731 > 0);var state_12757__$1 = state_12757;if(cljs.core.truth_(inst_12732))
{var statearr_12761_12783 = state_12757__$1;(statearr_12761_12783[1] = 4);
} else
{var statearr_12762_12784 = state_12757__$1;(statearr_12762_12784[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12758 === 3))
{var inst_12755 = (state_12757[2]);var state_12757__$1 = state_12757;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12757__$1,inst_12755);
} else
{if((state_val_12758 === 4))
{var inst_12729 = (state_12757[7]);var state_12757__$1 = state_12757;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12757__$1,7,inst_12729);
} else
{if((state_val_12758 === 5))
{var inst_12751 = cljs.core.async.close_BANG_.call(null,out);var state_12757__$1 = state_12757;var statearr_12763_12785 = state_12757__$1;(statearr_12763_12785[2] = inst_12751);
(statearr_12763_12785[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12758 === 6))
{var inst_12753 = (state_12757[2]);var state_12757__$1 = state_12757;var statearr_12764_12786 = state_12757__$1;(statearr_12764_12786[2] = inst_12753);
(statearr_12764_12786[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12758 === 7))
{var inst_12737 = (state_12757[8]);var inst_12736 = (state_12757[9]);var inst_12736__$1 = (state_12757[2]);var inst_12737__$1 = cljs.core.nth.call(null,inst_12736__$1,0,null);var inst_12738 = cljs.core.nth.call(null,inst_12736__$1,1,null);var inst_12739 = (inst_12737__$1 == null);var state_12757__$1 = (function (){var statearr_12765 = state_12757;(statearr_12765[8] = inst_12737__$1);
(statearr_12765[9] = inst_12736__$1);
(statearr_12765[10] = inst_12738);
return statearr_12765;
})();if(cljs.core.truth_(inst_12739))
{var statearr_12766_12787 = state_12757__$1;(statearr_12766_12787[1] = 8);
} else
{var statearr_12767_12788 = state_12757__$1;(statearr_12767_12788[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12758 === 8))
{var inst_12729 = (state_12757[7]);var inst_12737 = (state_12757[8]);var inst_12736 = (state_12757[9]);var inst_12738 = (state_12757[10]);var inst_12741 = (function (){var c = inst_12738;var v = inst_12737;var vec__12734 = inst_12736;var cs = inst_12729;return ((function (c,v,vec__12734,cs,inst_12729,inst_12737,inst_12736,inst_12738,state_val_12758){
return (function (p1__12674_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__12674_SHARP_);
});
;})(c,v,vec__12734,cs,inst_12729,inst_12737,inst_12736,inst_12738,state_val_12758))
})();var inst_12742 = cljs.core.filterv.call(null,inst_12741,inst_12729);var inst_12729__$1 = inst_12742;var state_12757__$1 = (function (){var statearr_12768 = state_12757;(statearr_12768[7] = inst_12729__$1);
return statearr_12768;
})();var statearr_12769_12789 = state_12757__$1;(statearr_12769_12789[2] = null);
(statearr_12769_12789[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12758 === 9))
{var inst_12737 = (state_12757[8]);var state_12757__$1 = state_12757;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12757__$1,11,out,inst_12737);
} else
{if((state_val_12758 === 10))
{var inst_12749 = (state_12757[2]);var state_12757__$1 = state_12757;var statearr_12771_12790 = state_12757__$1;(statearr_12771_12790[2] = inst_12749);
(statearr_12771_12790[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12758 === 11))
{var inst_12729 = (state_12757[7]);var inst_12746 = (state_12757[2]);var tmp12770 = inst_12729;var inst_12729__$1 = tmp12770;var state_12757__$1 = (function (){var statearr_12772 = state_12757;(statearr_12772[11] = inst_12746);
(statearr_12772[7] = inst_12729__$1);
return statearr_12772;
})();var statearr_12773_12791 = state_12757__$1;(statearr_12773_12791[2] = null);
(statearr_12773_12791[1] = 2);
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
}
}
}
});return ((function (switch__6151__auto__){
return (function() {
var state_machine__6152__auto__ = null;
var state_machine__6152__auto____0 = (function (){var statearr_12777 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12777[0] = state_machine__6152__auto__);
(statearr_12777[1] = 1);
return statearr_12777;
});
var state_machine__6152__auto____1 = (function (state_12757){while(true){
var ret_value__6153__auto__ = (function (){try{while(true){
var result__6154__auto__ = switch__6151__auto__.call(null,state_12757);if(cljs.core.keyword_identical_QMARK_.call(null,result__6154__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6154__auto__;
}
break;
}
}catch (e12778){if((e12778 instanceof Object))
{var ex__6155__auto__ = e12778;var statearr_12779_12792 = state_12757;(statearr_12779_12792[5] = ex__6155__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12757);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12778;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6153__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12793 = state_12757;
state_12757 = G__12793;
continue;
}
} else
{return ret_value__6153__auto__;
}
break;
}
});
state_machine__6152__auto__ = function(state_12757){
switch(arguments.length){
case 0:
return state_machine__6152__auto____0.call(this);
case 1:
return state_machine__6152__auto____1.call(this,state_12757);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6152__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6152__auto____0;
state_machine__6152__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6152__auto____1;
return state_machine__6152__auto__;
})()
;})(switch__6151__auto__))
})();var state__6168__auto__ = (function (){var statearr_12780 = f__6167__auto__.call(null);(statearr_12780[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6166__auto___12781);
return statearr_12780;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6168__auto__);
}));
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6166__auto___12886 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6167__auto__ = (function (){var switch__6151__auto__ = (function (state_12863){var state_val_12864 = (state_12863[1]);if((state_val_12864 === 1))
{var inst_12840 = 0;var state_12863__$1 = (function (){var statearr_12865 = state_12863;(statearr_12865[7] = inst_12840);
return statearr_12865;
})();var statearr_12866_12887 = state_12863__$1;(statearr_12866_12887[2] = null);
(statearr_12866_12887[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12864 === 2))
{var inst_12840 = (state_12863[7]);var inst_12842 = (inst_12840 < n);var state_12863__$1 = state_12863;if(cljs.core.truth_(inst_12842))
{var statearr_12867_12888 = state_12863__$1;(statearr_12867_12888[1] = 4);
} else
{var statearr_12868_12889 = state_12863__$1;(statearr_12868_12889[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12864 === 3))
{var inst_12860 = (state_12863[2]);var inst_12861 = cljs.core.async.close_BANG_.call(null,out);var state_12863__$1 = (function (){var statearr_12869 = state_12863;(statearr_12869[8] = inst_12860);
return statearr_12869;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12863__$1,inst_12861);
} else
{if((state_val_12864 === 4))
{var state_12863__$1 = state_12863;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12863__$1,7,ch);
} else
{if((state_val_12864 === 5))
{var state_12863__$1 = state_12863;var statearr_12870_12890 = state_12863__$1;(statearr_12870_12890[2] = null);
(statearr_12870_12890[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12864 === 6))
{var inst_12858 = (state_12863[2]);var state_12863__$1 = state_12863;var statearr_12871_12891 = state_12863__$1;(statearr_12871_12891[2] = inst_12858);
(statearr_12871_12891[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12864 === 7))
{var inst_12845 = (state_12863[9]);var inst_12845__$1 = (state_12863[2]);var inst_12846 = (inst_12845__$1 == null);var inst_12847 = cljs.core.not.call(null,inst_12846);var state_12863__$1 = (function (){var statearr_12872 = state_12863;(statearr_12872[9] = inst_12845__$1);
return statearr_12872;
})();if(inst_12847)
{var statearr_12873_12892 = state_12863__$1;(statearr_12873_12892[1] = 8);
} else
{var statearr_12874_12893 = state_12863__$1;(statearr_12874_12893[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12864 === 8))
{var inst_12845 = (state_12863[9]);var state_12863__$1 = state_12863;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12863__$1,11,out,inst_12845);
} else
{if((state_val_12864 === 9))
{var state_12863__$1 = state_12863;var statearr_12875_12894 = state_12863__$1;(statearr_12875_12894[2] = null);
(statearr_12875_12894[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12864 === 10))
{var inst_12855 = (state_12863[2]);var state_12863__$1 = state_12863;var statearr_12876_12895 = state_12863__$1;(statearr_12876_12895[2] = inst_12855);
(statearr_12876_12895[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12864 === 11))
{var inst_12840 = (state_12863[7]);var inst_12850 = (state_12863[2]);var inst_12851 = (inst_12840 + 1);var inst_12840__$1 = inst_12851;var state_12863__$1 = (function (){var statearr_12877 = state_12863;(statearr_12877[10] = inst_12850);
(statearr_12877[7] = inst_12840__$1);
return statearr_12877;
})();var statearr_12878_12896 = state_12863__$1;(statearr_12878_12896[2] = null);
(statearr_12878_12896[1] = 2);
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
}
}
}
});return ((function (switch__6151__auto__){
return (function() {
var state_machine__6152__auto__ = null;
var state_machine__6152__auto____0 = (function (){var statearr_12882 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12882[0] = state_machine__6152__auto__);
(statearr_12882[1] = 1);
return statearr_12882;
});
var state_machine__6152__auto____1 = (function (state_12863){while(true){
var ret_value__6153__auto__ = (function (){try{while(true){
var result__6154__auto__ = switch__6151__auto__.call(null,state_12863);if(cljs.core.keyword_identical_QMARK_.call(null,result__6154__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6154__auto__;
}
break;
}
}catch (e12883){if((e12883 instanceof Object))
{var ex__6155__auto__ = e12883;var statearr_12884_12897 = state_12863;(statearr_12884_12897[5] = ex__6155__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12863);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12883;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6153__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12898 = state_12863;
state_12863 = G__12898;
continue;
}
} else
{return ret_value__6153__auto__;
}
break;
}
});
state_machine__6152__auto__ = function(state_12863){
switch(arguments.length){
case 0:
return state_machine__6152__auto____0.call(this);
case 1:
return state_machine__6152__auto____1.call(this,state_12863);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6152__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6152__auto____0;
state_machine__6152__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6152__auto____1;
return state_machine__6152__auto__;
})()
;})(switch__6151__auto__))
})();var state__6168__auto__ = (function (){var statearr_12885 = f__6167__auto__.call(null);(statearr_12885[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6166__auto___12886);
return statearr_12885;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6168__auto__);
}));
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6166__auto___12995 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6167__auto__ = (function (){var switch__6151__auto__ = (function (state_12970){var state_val_12971 = (state_12970[1]);if((state_val_12971 === 1))
{var inst_12947 = null;var state_12970__$1 = (function (){var statearr_12972 = state_12970;(statearr_12972[7] = inst_12947);
return statearr_12972;
})();var statearr_12973_12996 = state_12970__$1;(statearr_12973_12996[2] = null);
(statearr_12973_12996[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12971 === 2))
{var state_12970__$1 = state_12970;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12970__$1,4,ch);
} else
{if((state_val_12971 === 3))
{var inst_12967 = (state_12970[2]);var inst_12968 = cljs.core.async.close_BANG_.call(null,out);var state_12970__$1 = (function (){var statearr_12974 = state_12970;(statearr_12974[8] = inst_12967);
return statearr_12974;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12970__$1,inst_12968);
} else
{if((state_val_12971 === 4))
{var inst_12950 = (state_12970[9]);var inst_12950__$1 = (state_12970[2]);var inst_12951 = (inst_12950__$1 == null);var inst_12952 = cljs.core.not.call(null,inst_12951);var state_12970__$1 = (function (){var statearr_12975 = state_12970;(statearr_12975[9] = inst_12950__$1);
return statearr_12975;
})();if(inst_12952)
{var statearr_12976_12997 = state_12970__$1;(statearr_12976_12997[1] = 5);
} else
{var statearr_12977_12998 = state_12970__$1;(statearr_12977_12998[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12971 === 5))
{var inst_12950 = (state_12970[9]);var inst_12947 = (state_12970[7]);var inst_12954 = cljs.core._EQ_.call(null,inst_12950,inst_12947);var state_12970__$1 = state_12970;if(inst_12954)
{var statearr_12978_12999 = state_12970__$1;(statearr_12978_12999[1] = 8);
} else
{var statearr_12979_13000 = state_12970__$1;(statearr_12979_13000[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12971 === 6))
{var state_12970__$1 = state_12970;var statearr_12981_13001 = state_12970__$1;(statearr_12981_13001[2] = null);
(statearr_12981_13001[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12971 === 7))
{var inst_12965 = (state_12970[2]);var state_12970__$1 = state_12970;var statearr_12982_13002 = state_12970__$1;(statearr_12982_13002[2] = inst_12965);
(statearr_12982_13002[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12971 === 8))
{var inst_12947 = (state_12970[7]);var tmp12980 = inst_12947;var inst_12947__$1 = tmp12980;var state_12970__$1 = (function (){var statearr_12983 = state_12970;(statearr_12983[7] = inst_12947__$1);
return statearr_12983;
})();var statearr_12984_13003 = state_12970__$1;(statearr_12984_13003[2] = null);
(statearr_12984_13003[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12971 === 9))
{var inst_12950 = (state_12970[9]);var state_12970__$1 = state_12970;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12970__$1,11,out,inst_12950);
} else
{if((state_val_12971 === 10))
{var inst_12962 = (state_12970[2]);var state_12970__$1 = state_12970;var statearr_12985_13004 = state_12970__$1;(statearr_12985_13004[2] = inst_12962);
(statearr_12985_13004[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12971 === 11))
{var inst_12950 = (state_12970[9]);var inst_12959 = (state_12970[2]);var inst_12947 = inst_12950;var state_12970__$1 = (function (){var statearr_12986 = state_12970;(statearr_12986[10] = inst_12959);
(statearr_12986[7] = inst_12947);
return statearr_12986;
})();var statearr_12987_13005 = state_12970__$1;(statearr_12987_13005[2] = null);
(statearr_12987_13005[1] = 2);
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
}
}
}
});return ((function (switch__6151__auto__){
return (function() {
var state_machine__6152__auto__ = null;
var state_machine__6152__auto____0 = (function (){var statearr_12991 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12991[0] = state_machine__6152__auto__);
(statearr_12991[1] = 1);
return statearr_12991;
});
var state_machine__6152__auto____1 = (function (state_12970){while(true){
var ret_value__6153__auto__ = (function (){try{while(true){
var result__6154__auto__ = switch__6151__auto__.call(null,state_12970);if(cljs.core.keyword_identical_QMARK_.call(null,result__6154__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6154__auto__;
}
break;
}
}catch (e12992){if((e12992 instanceof Object))
{var ex__6155__auto__ = e12992;var statearr_12993_13006 = state_12970;(statearr_12993_13006[5] = ex__6155__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12970);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12992;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6153__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13007 = state_12970;
state_12970 = G__13007;
continue;
}
} else
{return ret_value__6153__auto__;
}
break;
}
});
state_machine__6152__auto__ = function(state_12970){
switch(arguments.length){
case 0:
return state_machine__6152__auto____0.call(this);
case 1:
return state_machine__6152__auto____1.call(this,state_12970);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6152__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6152__auto____0;
state_machine__6152__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6152__auto____1;
return state_machine__6152__auto__;
})()
;})(switch__6151__auto__))
})();var state__6168__auto__ = (function (){var statearr_12994 = f__6167__auto__.call(null);(statearr_12994[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6166__auto___12995);
return statearr_12994;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6168__auto__);
}));
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6166__auto___13142 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6167__auto__ = (function (){var switch__6151__auto__ = (function (state_13112){var state_val_13113 = (state_13112[1]);if((state_val_13113 === 1))
{var inst_13075 = (new Array(n));var inst_13076 = inst_13075;var inst_13077 = 0;var state_13112__$1 = (function (){var statearr_13114 = state_13112;(statearr_13114[7] = inst_13076);
(statearr_13114[8] = inst_13077);
return statearr_13114;
})();var statearr_13115_13143 = state_13112__$1;(statearr_13115_13143[2] = null);
(statearr_13115_13143[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13113 === 2))
{var state_13112__$1 = state_13112;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13112__$1,4,ch);
} else
{if((state_val_13113 === 3))
{var inst_13110 = (state_13112[2]);var state_13112__$1 = state_13112;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13112__$1,inst_13110);
} else
{if((state_val_13113 === 4))
{var inst_13080 = (state_13112[9]);var inst_13080__$1 = (state_13112[2]);var inst_13081 = (inst_13080__$1 == null);var inst_13082 = cljs.core.not.call(null,inst_13081);var state_13112__$1 = (function (){var statearr_13116 = state_13112;(statearr_13116[9] = inst_13080__$1);
return statearr_13116;
})();if(inst_13082)
{var statearr_13117_13144 = state_13112__$1;(statearr_13117_13144[1] = 5);
} else
{var statearr_13118_13145 = state_13112__$1;(statearr_13118_13145[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13113 === 5))
{var inst_13076 = (state_13112[7]);var inst_13077 = (state_13112[8]);var inst_13085 = (state_13112[10]);var inst_13080 = (state_13112[9]);var inst_13084 = (inst_13076[inst_13077] = inst_13080);var inst_13085__$1 = (inst_13077 + 1);var inst_13086 = (inst_13085__$1 < n);var state_13112__$1 = (function (){var statearr_13119 = state_13112;(statearr_13119[11] = inst_13084);
(statearr_13119[10] = inst_13085__$1);
return statearr_13119;
})();if(cljs.core.truth_(inst_13086))
{var statearr_13120_13146 = state_13112__$1;(statearr_13120_13146[1] = 8);
} else
{var statearr_13121_13147 = state_13112__$1;(statearr_13121_13147[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13113 === 6))
{var inst_13077 = (state_13112[8]);var inst_13098 = (inst_13077 > 0);var state_13112__$1 = state_13112;if(cljs.core.truth_(inst_13098))
{var statearr_13123_13148 = state_13112__$1;(statearr_13123_13148[1] = 12);
} else
{var statearr_13124_13149 = state_13112__$1;(statearr_13124_13149[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13113 === 7))
{var inst_13108 = (state_13112[2]);var state_13112__$1 = state_13112;var statearr_13125_13150 = state_13112__$1;(statearr_13125_13150[2] = inst_13108);
(statearr_13125_13150[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13113 === 8))
{var inst_13076 = (state_13112[7]);var inst_13085 = (state_13112[10]);var tmp13122 = inst_13076;var inst_13076__$1 = tmp13122;var inst_13077 = inst_13085;var state_13112__$1 = (function (){var statearr_13126 = state_13112;(statearr_13126[7] = inst_13076__$1);
(statearr_13126[8] = inst_13077);
return statearr_13126;
})();var statearr_13127_13151 = state_13112__$1;(statearr_13127_13151[2] = null);
(statearr_13127_13151[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13113 === 9))
{var inst_13076 = (state_13112[7]);var inst_13090 = cljs.core.vec.call(null,inst_13076);var state_13112__$1 = state_13112;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13112__$1,11,out,inst_13090);
} else
{if((state_val_13113 === 10))
{var inst_13096 = (state_13112[2]);var state_13112__$1 = state_13112;var statearr_13128_13152 = state_13112__$1;(statearr_13128_13152[2] = inst_13096);
(statearr_13128_13152[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13113 === 11))
{var inst_13092 = (state_13112[2]);var inst_13093 = (new Array(n));var inst_13076 = inst_13093;var inst_13077 = 0;var state_13112__$1 = (function (){var statearr_13129 = state_13112;(statearr_13129[7] = inst_13076);
(statearr_13129[8] = inst_13077);
(statearr_13129[12] = inst_13092);
return statearr_13129;
})();var statearr_13130_13153 = state_13112__$1;(statearr_13130_13153[2] = null);
(statearr_13130_13153[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13113 === 12))
{var inst_13076 = (state_13112[7]);var inst_13100 = cljs.core.vec.call(null,inst_13076);var state_13112__$1 = state_13112;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13112__$1,15,out,inst_13100);
} else
{if((state_val_13113 === 13))
{var state_13112__$1 = state_13112;var statearr_13131_13154 = state_13112__$1;(statearr_13131_13154[2] = null);
(statearr_13131_13154[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13113 === 14))
{var inst_13105 = (state_13112[2]);var inst_13106 = cljs.core.async.close_BANG_.call(null,out);var state_13112__$1 = (function (){var statearr_13132 = state_13112;(statearr_13132[13] = inst_13105);
return statearr_13132;
})();var statearr_13133_13155 = state_13112__$1;(statearr_13133_13155[2] = inst_13106);
(statearr_13133_13155[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13113 === 15))
{var inst_13102 = (state_13112[2]);var state_13112__$1 = state_13112;var statearr_13134_13156 = state_13112__$1;(statearr_13134_13156[2] = inst_13102);
(statearr_13134_13156[1] = 14);
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
var state_machine__6152__auto____0 = (function (){var statearr_13138 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13138[0] = state_machine__6152__auto__);
(statearr_13138[1] = 1);
return statearr_13138;
});
var state_machine__6152__auto____1 = (function (state_13112){while(true){
var ret_value__6153__auto__ = (function (){try{while(true){
var result__6154__auto__ = switch__6151__auto__.call(null,state_13112);if(cljs.core.keyword_identical_QMARK_.call(null,result__6154__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6154__auto__;
}
break;
}
}catch (e13139){if((e13139 instanceof Object))
{var ex__6155__auto__ = e13139;var statearr_13140_13157 = state_13112;(statearr_13140_13157[5] = ex__6155__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13112);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13139;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6153__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13158 = state_13112;
state_13112 = G__13158;
continue;
}
} else
{return ret_value__6153__auto__;
}
break;
}
});
state_machine__6152__auto__ = function(state_13112){
switch(arguments.length){
case 0:
return state_machine__6152__auto____0.call(this);
case 1:
return state_machine__6152__auto____1.call(this,state_13112);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6152__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6152__auto____0;
state_machine__6152__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6152__auto____1;
return state_machine__6152__auto__;
})()
;})(switch__6151__auto__))
})();var state__6168__auto__ = (function (){var statearr_13141 = f__6167__auto__.call(null);(statearr_13141[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6166__auto___13142);
return statearr_13141;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6168__auto__);
}));
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6166__auto___13301 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6167__auto__ = (function (){var switch__6151__auto__ = (function (state_13271){var state_val_13272 = (state_13271[1]);if((state_val_13272 === 1))
{var inst_13230 = [];var inst_13231 = inst_13230;var inst_13232 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_13271__$1 = (function (){var statearr_13273 = state_13271;(statearr_13273[7] = inst_13232);
(statearr_13273[8] = inst_13231);
return statearr_13273;
})();var statearr_13274_13302 = state_13271__$1;(statearr_13274_13302[2] = null);
(statearr_13274_13302[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13272 === 2))
{var state_13271__$1 = state_13271;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13271__$1,4,ch);
} else
{if((state_val_13272 === 3))
{var inst_13269 = (state_13271[2]);var state_13271__$1 = state_13271;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13271__$1,inst_13269);
} else
{if((state_val_13272 === 4))
{var inst_13235 = (state_13271[9]);var inst_13235__$1 = (state_13271[2]);var inst_13236 = (inst_13235__$1 == null);var inst_13237 = cljs.core.not.call(null,inst_13236);var state_13271__$1 = (function (){var statearr_13275 = state_13271;(statearr_13275[9] = inst_13235__$1);
return statearr_13275;
})();if(inst_13237)
{var statearr_13276_13303 = state_13271__$1;(statearr_13276_13303[1] = 5);
} else
{var statearr_13277_13304 = state_13271__$1;(statearr_13277_13304[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13272 === 5))
{var inst_13232 = (state_13271[7]);var inst_13239 = (state_13271[10]);var inst_13235 = (state_13271[9]);var inst_13239__$1 = f.call(null,inst_13235);var inst_13240 = cljs.core._EQ_.call(null,inst_13239__$1,inst_13232);var inst_13241 = cljs.core.keyword_identical_QMARK_.call(null,inst_13232,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_13242 = (inst_13240) || (inst_13241);var state_13271__$1 = (function (){var statearr_13278 = state_13271;(statearr_13278[10] = inst_13239__$1);
return statearr_13278;
})();if(cljs.core.truth_(inst_13242))
{var statearr_13279_13305 = state_13271__$1;(statearr_13279_13305[1] = 8);
} else
{var statearr_13280_13306 = state_13271__$1;(statearr_13280_13306[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13272 === 6))
{var inst_13231 = (state_13271[8]);var inst_13256 = inst_13231.length;var inst_13257 = (inst_13256 > 0);var state_13271__$1 = state_13271;if(cljs.core.truth_(inst_13257))
{var statearr_13282_13307 = state_13271__$1;(statearr_13282_13307[1] = 12);
} else
{var statearr_13283_13308 = state_13271__$1;(statearr_13283_13308[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13272 === 7))
{var inst_13267 = (state_13271[2]);var state_13271__$1 = state_13271;var statearr_13284_13309 = state_13271__$1;(statearr_13284_13309[2] = inst_13267);
(statearr_13284_13309[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13272 === 8))
{var inst_13231 = (state_13271[8]);var inst_13239 = (state_13271[10]);var inst_13235 = (state_13271[9]);var inst_13244 = inst_13231.push(inst_13235);var tmp13281 = inst_13231;var inst_13231__$1 = tmp13281;var inst_13232 = inst_13239;var state_13271__$1 = (function (){var statearr_13285 = state_13271;(statearr_13285[7] = inst_13232);
(statearr_13285[8] = inst_13231__$1);
(statearr_13285[11] = inst_13244);
return statearr_13285;
})();var statearr_13286_13310 = state_13271__$1;(statearr_13286_13310[2] = null);
(statearr_13286_13310[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13272 === 9))
{var inst_13231 = (state_13271[8]);var inst_13247 = cljs.core.vec.call(null,inst_13231);var state_13271__$1 = state_13271;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13271__$1,11,out,inst_13247);
} else
{if((state_val_13272 === 10))
{var inst_13254 = (state_13271[2]);var state_13271__$1 = state_13271;var statearr_13287_13311 = state_13271__$1;(statearr_13287_13311[2] = inst_13254);
(statearr_13287_13311[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13272 === 11))
{var inst_13239 = (state_13271[10]);var inst_13235 = (state_13271[9]);var inst_13249 = (state_13271[2]);var inst_13250 = [];var inst_13251 = inst_13250.push(inst_13235);var inst_13231 = inst_13250;var inst_13232 = inst_13239;var state_13271__$1 = (function (){var statearr_13288 = state_13271;(statearr_13288[7] = inst_13232);
(statearr_13288[8] = inst_13231);
(statearr_13288[12] = inst_13251);
(statearr_13288[13] = inst_13249);
return statearr_13288;
})();var statearr_13289_13312 = state_13271__$1;(statearr_13289_13312[2] = null);
(statearr_13289_13312[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13272 === 12))
{var inst_13231 = (state_13271[8]);var inst_13259 = cljs.core.vec.call(null,inst_13231);var state_13271__$1 = state_13271;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13271__$1,15,out,inst_13259);
} else
{if((state_val_13272 === 13))
{var state_13271__$1 = state_13271;var statearr_13290_13313 = state_13271__$1;(statearr_13290_13313[2] = null);
(statearr_13290_13313[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13272 === 14))
{var inst_13264 = (state_13271[2]);var inst_13265 = cljs.core.async.close_BANG_.call(null,out);var state_13271__$1 = (function (){var statearr_13291 = state_13271;(statearr_13291[14] = inst_13264);
return statearr_13291;
})();var statearr_13292_13314 = state_13271__$1;(statearr_13292_13314[2] = inst_13265);
(statearr_13292_13314[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13272 === 15))
{var inst_13261 = (state_13271[2]);var state_13271__$1 = state_13271;var statearr_13293_13315 = state_13271__$1;(statearr_13293_13315[2] = inst_13261);
(statearr_13293_13315[1] = 14);
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
var state_machine__6152__auto____0 = (function (){var statearr_13297 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13297[0] = state_machine__6152__auto__);
(statearr_13297[1] = 1);
return statearr_13297;
});
var state_machine__6152__auto____1 = (function (state_13271){while(true){
var ret_value__6153__auto__ = (function (){try{while(true){
var result__6154__auto__ = switch__6151__auto__.call(null,state_13271);if(cljs.core.keyword_identical_QMARK_.call(null,result__6154__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6154__auto__;
}
break;
}
}catch (e13298){if((e13298 instanceof Object))
{var ex__6155__auto__ = e13298;var statearr_13299_13316 = state_13271;(statearr_13299_13316[5] = ex__6155__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13271);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13298;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6153__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13317 = state_13271;
state_13271 = G__13317;
continue;
}
} else
{return ret_value__6153__auto__;
}
break;
}
});
state_machine__6152__auto__ = function(state_13271){
switch(arguments.length){
case 0:
return state_machine__6152__auto____0.call(this);
case 1:
return state_machine__6152__auto____1.call(this,state_13271);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6152__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6152__auto____0;
state_machine__6152__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6152__auto____1;
return state_machine__6152__auto__;
})()
;})(switch__6151__auto__))
})();var state__6168__auto__ = (function (){var statearr_13300 = f__6167__auto__.call(null);(statearr_13300[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6166__auto___13301);
return statearr_13300;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6168__auto__);
}));
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map