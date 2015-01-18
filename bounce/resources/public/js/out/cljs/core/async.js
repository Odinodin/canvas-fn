// Compiled by ClojureScript 0.0-2665 {}
if(!goog.isProvided_('cljs.core.async')) {
goog.provide('cljs.core.async');
}
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.t25518 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25518 = (function (f,fn_handler,meta25519){
this.f = f;
this.fn_handler = fn_handler;
this.meta25519 = meta25519;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25518.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t25518.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t25518.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t25518.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25520){
var self__ = this;
var _25520__$1 = this;
return self__.meta25519;
});

cljs.core.async.t25518.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25520,meta25519__$1){
var self__ = this;
var _25520__$1 = this;
return (new cljs.core.async.t25518(self__.f,self__.fn_handler,meta25519__$1));
});

cljs.core.async.t25518.cljs$lang$type = true;

cljs.core.async.t25518.cljs$lang$ctorStr = "cljs.core.async/t25518";

cljs.core.async.t25518.cljs$lang$ctorPrWriter = (function (this__12216__auto__,writer__12217__auto__,opt__12218__auto__){
return cljs.core._write.call(null,writer__12217__auto__,"cljs.core.async/t25518");
});

cljs.core.async.__GT_t25518 = (function __GT_t25518(f__$1,fn_handler__$1,meta25519){
return (new cljs.core.async.t25518(f__$1,fn_handler__$1,meta25519));
});

}

return (new cljs.core.async.t25518(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/odinholestandal/git/odin/canvas-fn/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){
var G__25522 = buff;
if(G__25522){
var bit__12310__auto__ = null;
if(cljs.core.truth_((function (){var or__11629__auto__ = bit__12310__auto__;
if(cljs.core.truth_(or__11629__auto__)){
return or__11629__auto__;
} else {
return G__25522.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__25522.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__25522);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__25522);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){
return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){
return chan.call(null,buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){
return chan.call(null,buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){
return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_25523 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_25523);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_25523,ret){
return (function (){
return fn1.call(null,val_25523);
});})(val_25523,ret))
);
}
} else {
}

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
cljs.core.async.nop = (function nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});
var put_BANG___3 = (function (port,val,fn1){
return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){
var a = (new Array(n));
var n__12516__auto___25524 = n;
var x_25525 = (0);
while(true){
if((x_25525 < n__12516__auto___25524)){
(a[x_25525] = (0));

var G__25526 = (x_25525 + (1));
x_25525 = G__25526;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__25527 = (i + (1));
i = G__25527;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t25531 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25531 = (function (flag,alt_flag,meta25532){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta25532 = meta25532;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25531.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t25531.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t25531.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t25531.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_25533){
var self__ = this;
var _25533__$1 = this;
return self__.meta25532;
});})(flag))
;

cljs.core.async.t25531.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_25533,meta25532__$1){
var self__ = this;
var _25533__$1 = this;
return (new cljs.core.async.t25531(self__.flag,self__.alt_flag,meta25532__$1));
});})(flag))
;

cljs.core.async.t25531.cljs$lang$type = true;

cljs.core.async.t25531.cljs$lang$ctorStr = "cljs.core.async/t25531";

cljs.core.async.t25531.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__12216__auto__,writer__12217__auto__,opt__12218__auto__){
return cljs.core._write.call(null,writer__12217__auto__,"cljs.core.async/t25531");
});})(flag))
;

cljs.core.async.__GT_t25531 = ((function (flag){
return (function __GT_t25531(flag__$1,alt_flag__$1,meta25532){
return (new cljs.core.async.t25531(flag__$1,alt_flag__$1,meta25532));
});})(flag))
;

}

return (new cljs.core.async.t25531(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/odinholestandal/git/odin/canvas-fn/resources/public/js/out/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t25537 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25537 = (function (cb,flag,alt_handler,meta25538){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta25538 = meta25538;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25537.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t25537.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t25537.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t25537.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25539){
var self__ = this;
var _25539__$1 = this;
return self__.meta25538;
});

cljs.core.async.t25537.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25539,meta25538__$1){
var self__ = this;
var _25539__$1 = this;
return (new cljs.core.async.t25537(self__.cb,self__.flag,self__.alt_handler,meta25538__$1));
});

cljs.core.async.t25537.cljs$lang$type = true;

cljs.core.async.t25537.cljs$lang$ctorStr = "cljs.core.async/t25537";

cljs.core.async.t25537.cljs$lang$ctorPrWriter = (function (this__12216__auto__,writer__12217__auto__,opt__12218__auto__){
return cljs.core._write.call(null,writer__12217__auto__,"cljs.core.async/t25537");
});

cljs.core.async.__GT_t25537 = (function __GT_t25537(cb__$1,flag__$1,alt_handler__$1,meta25538){
return (new cljs.core.async.t25537(cb__$1,flag__$1,alt_handler__$1,meta25538));
});

}

return (new cljs.core.async.t25537(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/odinholestandal/git/odin/canvas-fn/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25540_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25540_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25541_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25541_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__11629__auto__ = wport;
if(cljs.core.truth_(or__11629__auto__)){
return or__11629__auto__;
} else {
return port;
}
})()], null));
} else {
var G__25542 = (i + (1));
i = G__25542;
continue;
}
} else {
return null;
}
break;
}
})();
var or__11629__auto__ = ret;
if(cljs.core.truth_(or__11629__auto__)){
return or__11629__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__11617__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__11617__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__11617__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
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
var alts_BANG___delegate = function (ports,p__25543){
var map__25545 = p__25543;
var map__25545__$1 = ((cljs.core.seq_QMARK_.call(null,map__25545))?cljs.core.apply.call(null,cljs.core.hash_map,map__25545):map__25545);
var opts = map__25545__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__25543 = null;
if (arguments.length > 1) {
var G__25546__i = 0, G__25546__a = new Array(arguments.length -  1);
while (G__25546__i < G__25546__a.length) {G__25546__a[G__25546__i] = arguments[G__25546__i + 1]; ++G__25546__i;}
  p__25543 = new cljs.core.IndexedSeq(G__25546__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__25543);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__25547){
var ports = cljs.core.first(arglist__25547);
var p__25543 = cljs.core.rest(arglist__25547);
return alts_BANG___delegate(ports,p__25543);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){
return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){
var c__20748__auto___25642 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20748__auto___25642){
return (function (){
var f__20749__auto__ = (function (){var switch__20692__auto__ = ((function (c__20748__auto___25642){
return (function (state_25618){
var state_val_25619 = (state_25618[(1)]);
if((state_val_25619 === (7))){
var inst_25614 = (state_25618[(2)]);
var state_25618__$1 = state_25618;
var statearr_25620_25643 = state_25618__$1;
(statearr_25620_25643[(2)] = inst_25614);

(statearr_25620_25643[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25619 === (1))){
var state_25618__$1 = state_25618;
var statearr_25621_25644 = state_25618__$1;
(statearr_25621_25644[(2)] = null);

(statearr_25621_25644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25619 === (4))){
var inst_25597 = (state_25618[(7)]);
var inst_25597__$1 = (state_25618[(2)]);
var inst_25598 = (inst_25597__$1 == null);
var state_25618__$1 = (function (){var statearr_25622 = state_25618;
(statearr_25622[(7)] = inst_25597__$1);

return statearr_25622;
})();
if(cljs.core.truth_(inst_25598)){
var statearr_25623_25645 = state_25618__$1;
(statearr_25623_25645[(1)] = (5));

} else {
var statearr_25624_25646 = state_25618__$1;
(statearr_25624_25646[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25619 === (13))){
var state_25618__$1 = state_25618;
var statearr_25625_25647 = state_25618__$1;
(statearr_25625_25647[(2)] = null);

(statearr_25625_25647[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25619 === (6))){
var inst_25597 = (state_25618[(7)]);
var state_25618__$1 = state_25618;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25618__$1,(11),to,inst_25597);
} else {
if((state_val_25619 === (3))){
var inst_25616 = (state_25618[(2)]);
var state_25618__$1 = state_25618;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25618__$1,inst_25616);
} else {
if((state_val_25619 === (12))){
var state_25618__$1 = state_25618;
var statearr_25626_25648 = state_25618__$1;
(statearr_25626_25648[(2)] = null);

(statearr_25626_25648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25619 === (2))){
var state_25618__$1 = state_25618;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25618__$1,(4),from);
} else {
if((state_val_25619 === (11))){
var inst_25607 = (state_25618[(2)]);
var state_25618__$1 = state_25618;
if(cljs.core.truth_(inst_25607)){
var statearr_25627_25649 = state_25618__$1;
(statearr_25627_25649[(1)] = (12));

} else {
var statearr_25628_25650 = state_25618__$1;
(statearr_25628_25650[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25619 === (9))){
var state_25618__$1 = state_25618;
var statearr_25629_25651 = state_25618__$1;
(statearr_25629_25651[(2)] = null);

(statearr_25629_25651[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25619 === (5))){
var state_25618__$1 = state_25618;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25630_25652 = state_25618__$1;
(statearr_25630_25652[(1)] = (8));

} else {
var statearr_25631_25653 = state_25618__$1;
(statearr_25631_25653[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25619 === (14))){
var inst_25612 = (state_25618[(2)]);
var state_25618__$1 = state_25618;
var statearr_25632_25654 = state_25618__$1;
(statearr_25632_25654[(2)] = inst_25612);

(statearr_25632_25654[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25619 === (10))){
var inst_25604 = (state_25618[(2)]);
var state_25618__$1 = state_25618;
var statearr_25633_25655 = state_25618__$1;
(statearr_25633_25655[(2)] = inst_25604);

(statearr_25633_25655[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25619 === (8))){
var inst_25601 = cljs.core.async.close_BANG_.call(null,to);
var state_25618__$1 = state_25618;
var statearr_25634_25656 = state_25618__$1;
(statearr_25634_25656[(2)] = inst_25601);

(statearr_25634_25656[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__20748__auto___25642))
;
return ((function (switch__20692__auto__,c__20748__auto___25642){
return (function() {
var state_machine__20693__auto__ = null;
var state_machine__20693__auto____0 = (function (){
var statearr_25638 = [null,null,null,null,null,null,null,null];
(statearr_25638[(0)] = state_machine__20693__auto__);

(statearr_25638[(1)] = (1));

return statearr_25638;
});
var state_machine__20693__auto____1 = (function (state_25618){
while(true){
var ret_value__20694__auto__ = (function (){try{while(true){
var result__20695__auto__ = switch__20692__auto__.call(null,state_25618);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20695__auto__;
}
break;
}
}catch (e25639){if((e25639 instanceof Object)){
var ex__20696__auto__ = e25639;
var statearr_25640_25657 = state_25618;
(statearr_25640_25657[(5)] = ex__20696__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25618);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25639;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25658 = state_25618;
state_25618 = G__25658;
continue;
} else {
return ret_value__20694__auto__;
}
break;
}
});
state_machine__20693__auto__ = function(state_25618){
switch(arguments.length){
case 0:
return state_machine__20693__auto____0.call(this);
case 1:
return state_machine__20693__auto____1.call(this,state_25618);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20693__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20693__auto____0;
state_machine__20693__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20693__auto____1;
return state_machine__20693__auto__;
})()
;})(switch__20692__auto__,c__20748__auto___25642))
})();
var state__20750__auto__ = (function (){var statearr_25641 = f__20749__auto__.call(null);
(statearr_25641[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20748__auto___25642);

return statearr_25641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20750__auto__);
});})(c__20748__auto___25642))
);


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
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__25842){
var vec__25843 = p__25842;
var v = cljs.core.nth.call(null,vec__25843,(0),null);
var p = cljs.core.nth.call(null,vec__25843,(1),null);
var job = vec__25843;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__20748__auto___26025 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20748__auto___26025,res,vec__25843,v,p,job,jobs,results){
return (function (){
var f__20749__auto__ = (function (){var switch__20692__auto__ = ((function (c__20748__auto___26025,res,vec__25843,v,p,job,jobs,results){
return (function (state_25848){
var state_val_25849 = (state_25848[(1)]);
if((state_val_25849 === (2))){
var inst_25845 = (state_25848[(2)]);
var inst_25846 = cljs.core.async.close_BANG_.call(null,res);
var state_25848__$1 = (function (){var statearr_25850 = state_25848;
(statearr_25850[(7)] = inst_25845);

return statearr_25850;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25848__$1,inst_25846);
} else {
if((state_val_25849 === (1))){
var state_25848__$1 = state_25848;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25848__$1,(2),res,v);
} else {
return null;
}
}
});})(c__20748__auto___26025,res,vec__25843,v,p,job,jobs,results))
;
return ((function (switch__20692__auto__,c__20748__auto___26025,res,vec__25843,v,p,job,jobs,results){
return (function() {
var state_machine__20693__auto__ = null;
var state_machine__20693__auto____0 = (function (){
var statearr_25854 = [null,null,null,null,null,null,null,null];
(statearr_25854[(0)] = state_machine__20693__auto__);

(statearr_25854[(1)] = (1));

return statearr_25854;
});
var state_machine__20693__auto____1 = (function (state_25848){
while(true){
var ret_value__20694__auto__ = (function (){try{while(true){
var result__20695__auto__ = switch__20692__auto__.call(null,state_25848);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20695__auto__;
}
break;
}
}catch (e25855){if((e25855 instanceof Object)){
var ex__20696__auto__ = e25855;
var statearr_25856_26026 = state_25848;
(statearr_25856_26026[(5)] = ex__20696__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25848);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25855;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26027 = state_25848;
state_25848 = G__26027;
continue;
} else {
return ret_value__20694__auto__;
}
break;
}
});
state_machine__20693__auto__ = function(state_25848){
switch(arguments.length){
case 0:
return state_machine__20693__auto____0.call(this);
case 1:
return state_machine__20693__auto____1.call(this,state_25848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20693__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20693__auto____0;
state_machine__20693__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20693__auto____1;
return state_machine__20693__auto__;
})()
;})(switch__20692__auto__,c__20748__auto___26025,res,vec__25843,v,p,job,jobs,results))
})();
var state__20750__auto__ = (function (){var statearr_25857 = f__20749__auto__.call(null);
(statearr_25857[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20748__auto___26025);

return statearr_25857;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20750__auto__);
});})(c__20748__auto___26025,res,vec__25843,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__25858){
var vec__25859 = p__25858;
var v = cljs.core.nth.call(null,vec__25859,(0),null);
var p = cljs.core.nth.call(null,vec__25859,(1),null);
var job = vec__25859;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__12516__auto___26028 = n;
var __26029 = (0);
while(true){
if((__26029 < n__12516__auto___26028)){
var G__25860_26030 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__25860_26030) {
case "async":
var c__20748__auto___26032 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26029,c__20748__auto___26032,G__25860_26030,n__12516__auto___26028,jobs,results,process,async){
return (function (){
var f__20749__auto__ = (function (){var switch__20692__auto__ = ((function (__26029,c__20748__auto___26032,G__25860_26030,n__12516__auto___26028,jobs,results,process,async){
return (function (state_25873){
var state_val_25874 = (state_25873[(1)]);
if((state_val_25874 === (7))){
var inst_25869 = (state_25873[(2)]);
var state_25873__$1 = state_25873;
var statearr_25875_26033 = state_25873__$1;
(statearr_25875_26033[(2)] = inst_25869);

(statearr_25875_26033[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25874 === (6))){
var state_25873__$1 = state_25873;
var statearr_25876_26034 = state_25873__$1;
(statearr_25876_26034[(2)] = null);

(statearr_25876_26034[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25874 === (5))){
var state_25873__$1 = state_25873;
var statearr_25877_26035 = state_25873__$1;
(statearr_25877_26035[(2)] = null);

(statearr_25877_26035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25874 === (4))){
var inst_25863 = (state_25873[(2)]);
var inst_25864 = async.call(null,inst_25863);
var state_25873__$1 = state_25873;
if(cljs.core.truth_(inst_25864)){
var statearr_25878_26036 = state_25873__$1;
(statearr_25878_26036[(1)] = (5));

} else {
var statearr_25879_26037 = state_25873__$1;
(statearr_25879_26037[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25874 === (3))){
var inst_25871 = (state_25873[(2)]);
var state_25873__$1 = state_25873;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25873__$1,inst_25871);
} else {
if((state_val_25874 === (2))){
var state_25873__$1 = state_25873;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25873__$1,(4),jobs);
} else {
if((state_val_25874 === (1))){
var state_25873__$1 = state_25873;
var statearr_25880_26038 = state_25873__$1;
(statearr_25880_26038[(2)] = null);

(statearr_25880_26038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__26029,c__20748__auto___26032,G__25860_26030,n__12516__auto___26028,jobs,results,process,async))
;
return ((function (__26029,switch__20692__auto__,c__20748__auto___26032,G__25860_26030,n__12516__auto___26028,jobs,results,process,async){
return (function() {
var state_machine__20693__auto__ = null;
var state_machine__20693__auto____0 = (function (){
var statearr_25884 = [null,null,null,null,null,null,null];
(statearr_25884[(0)] = state_machine__20693__auto__);

(statearr_25884[(1)] = (1));

return statearr_25884;
});
var state_machine__20693__auto____1 = (function (state_25873){
while(true){
var ret_value__20694__auto__ = (function (){try{while(true){
var result__20695__auto__ = switch__20692__auto__.call(null,state_25873);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20695__auto__;
}
break;
}
}catch (e25885){if((e25885 instanceof Object)){
var ex__20696__auto__ = e25885;
var statearr_25886_26039 = state_25873;
(statearr_25886_26039[(5)] = ex__20696__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25873);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25885;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26040 = state_25873;
state_25873 = G__26040;
continue;
} else {
return ret_value__20694__auto__;
}
break;
}
});
state_machine__20693__auto__ = function(state_25873){
switch(arguments.length){
case 0:
return state_machine__20693__auto____0.call(this);
case 1:
return state_machine__20693__auto____1.call(this,state_25873);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20693__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20693__auto____0;
state_machine__20693__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20693__auto____1;
return state_machine__20693__auto__;
})()
;})(__26029,switch__20692__auto__,c__20748__auto___26032,G__25860_26030,n__12516__auto___26028,jobs,results,process,async))
})();
var state__20750__auto__ = (function (){var statearr_25887 = f__20749__auto__.call(null);
(statearr_25887[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20748__auto___26032);

return statearr_25887;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20750__auto__);
});})(__26029,c__20748__auto___26032,G__25860_26030,n__12516__auto___26028,jobs,results,process,async))
);


break;
case "compute":
var c__20748__auto___26041 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26029,c__20748__auto___26041,G__25860_26030,n__12516__auto___26028,jobs,results,process,async){
return (function (){
var f__20749__auto__ = (function (){var switch__20692__auto__ = ((function (__26029,c__20748__auto___26041,G__25860_26030,n__12516__auto___26028,jobs,results,process,async){
return (function (state_25900){
var state_val_25901 = (state_25900[(1)]);
if((state_val_25901 === (7))){
var inst_25896 = (state_25900[(2)]);
var state_25900__$1 = state_25900;
var statearr_25902_26042 = state_25900__$1;
(statearr_25902_26042[(2)] = inst_25896);

(statearr_25902_26042[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25901 === (6))){
var state_25900__$1 = state_25900;
var statearr_25903_26043 = state_25900__$1;
(statearr_25903_26043[(2)] = null);

(statearr_25903_26043[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25901 === (5))){
var state_25900__$1 = state_25900;
var statearr_25904_26044 = state_25900__$1;
(statearr_25904_26044[(2)] = null);

(statearr_25904_26044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25901 === (4))){
var inst_25890 = (state_25900[(2)]);
var inst_25891 = process.call(null,inst_25890);
var state_25900__$1 = state_25900;
if(cljs.core.truth_(inst_25891)){
var statearr_25905_26045 = state_25900__$1;
(statearr_25905_26045[(1)] = (5));

} else {
var statearr_25906_26046 = state_25900__$1;
(statearr_25906_26046[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25901 === (3))){
var inst_25898 = (state_25900[(2)]);
var state_25900__$1 = state_25900;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25900__$1,inst_25898);
} else {
if((state_val_25901 === (2))){
var state_25900__$1 = state_25900;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25900__$1,(4),jobs);
} else {
if((state_val_25901 === (1))){
var state_25900__$1 = state_25900;
var statearr_25907_26047 = state_25900__$1;
(statearr_25907_26047[(2)] = null);

(statearr_25907_26047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__26029,c__20748__auto___26041,G__25860_26030,n__12516__auto___26028,jobs,results,process,async))
;
return ((function (__26029,switch__20692__auto__,c__20748__auto___26041,G__25860_26030,n__12516__auto___26028,jobs,results,process,async){
return (function() {
var state_machine__20693__auto__ = null;
var state_machine__20693__auto____0 = (function (){
var statearr_25911 = [null,null,null,null,null,null,null];
(statearr_25911[(0)] = state_machine__20693__auto__);

(statearr_25911[(1)] = (1));

return statearr_25911;
});
var state_machine__20693__auto____1 = (function (state_25900){
while(true){
var ret_value__20694__auto__ = (function (){try{while(true){
var result__20695__auto__ = switch__20692__auto__.call(null,state_25900);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20695__auto__;
}
break;
}
}catch (e25912){if((e25912 instanceof Object)){
var ex__20696__auto__ = e25912;
var statearr_25913_26048 = state_25900;
(statearr_25913_26048[(5)] = ex__20696__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25900);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25912;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26049 = state_25900;
state_25900 = G__26049;
continue;
} else {
return ret_value__20694__auto__;
}
break;
}
});
state_machine__20693__auto__ = function(state_25900){
switch(arguments.length){
case 0:
return state_machine__20693__auto____0.call(this);
case 1:
return state_machine__20693__auto____1.call(this,state_25900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20693__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20693__auto____0;
state_machine__20693__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20693__auto____1;
return state_machine__20693__auto__;
})()
;})(__26029,switch__20692__auto__,c__20748__auto___26041,G__25860_26030,n__12516__auto___26028,jobs,results,process,async))
})();
var state__20750__auto__ = (function (){var statearr_25914 = f__20749__auto__.call(null);
(statearr_25914[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20748__auto___26041);

return statearr_25914;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20750__auto__);
});})(__26029,c__20748__auto___26041,G__25860_26030,n__12516__auto___26028,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__26050 = (__26029 + (1));
__26029 = G__26050;
continue;
} else {
}
break;
}

var c__20748__auto___26051 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20748__auto___26051,jobs,results,process,async){
return (function (){
var f__20749__auto__ = (function (){var switch__20692__auto__ = ((function (c__20748__auto___26051,jobs,results,process,async){
return (function (state_25936){
var state_val_25937 = (state_25936[(1)]);
if((state_val_25937 === (9))){
var inst_25929 = (state_25936[(2)]);
var state_25936__$1 = (function (){var statearr_25938 = state_25936;
(statearr_25938[(7)] = inst_25929);

return statearr_25938;
})();
var statearr_25939_26052 = state_25936__$1;
(statearr_25939_26052[(2)] = null);

(statearr_25939_26052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25937 === (8))){
var inst_25922 = (state_25936[(8)]);
var inst_25927 = (state_25936[(2)]);
var state_25936__$1 = (function (){var statearr_25940 = state_25936;
(statearr_25940[(9)] = inst_25927);

return statearr_25940;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25936__$1,(9),results,inst_25922);
} else {
if((state_val_25937 === (7))){
var inst_25932 = (state_25936[(2)]);
var state_25936__$1 = state_25936;
var statearr_25941_26053 = state_25936__$1;
(statearr_25941_26053[(2)] = inst_25932);

(statearr_25941_26053[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25937 === (6))){
var inst_25917 = (state_25936[(10)]);
var inst_25922 = (state_25936[(8)]);
var inst_25922__$1 = cljs.core.async.chan.call(null,(1));
var inst_25923 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25924 = [inst_25917,inst_25922__$1];
var inst_25925 = (new cljs.core.PersistentVector(null,2,(5),inst_25923,inst_25924,null));
var state_25936__$1 = (function (){var statearr_25942 = state_25936;
(statearr_25942[(8)] = inst_25922__$1);

return statearr_25942;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25936__$1,(8),jobs,inst_25925);
} else {
if((state_val_25937 === (5))){
var inst_25920 = cljs.core.async.close_BANG_.call(null,jobs);
var state_25936__$1 = state_25936;
var statearr_25943_26054 = state_25936__$1;
(statearr_25943_26054[(2)] = inst_25920);

(statearr_25943_26054[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25937 === (4))){
var inst_25917 = (state_25936[(10)]);
var inst_25917__$1 = (state_25936[(2)]);
var inst_25918 = (inst_25917__$1 == null);
var state_25936__$1 = (function (){var statearr_25944 = state_25936;
(statearr_25944[(10)] = inst_25917__$1);

return statearr_25944;
})();
if(cljs.core.truth_(inst_25918)){
var statearr_25945_26055 = state_25936__$1;
(statearr_25945_26055[(1)] = (5));

} else {
var statearr_25946_26056 = state_25936__$1;
(statearr_25946_26056[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25937 === (3))){
var inst_25934 = (state_25936[(2)]);
var state_25936__$1 = state_25936;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25936__$1,inst_25934);
} else {
if((state_val_25937 === (2))){
var state_25936__$1 = state_25936;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25936__$1,(4),from);
} else {
if((state_val_25937 === (1))){
var state_25936__$1 = state_25936;
var statearr_25947_26057 = state_25936__$1;
(statearr_25947_26057[(2)] = null);

(statearr_25947_26057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__20748__auto___26051,jobs,results,process,async))
;
return ((function (switch__20692__auto__,c__20748__auto___26051,jobs,results,process,async){
return (function() {
var state_machine__20693__auto__ = null;
var state_machine__20693__auto____0 = (function (){
var statearr_25951 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25951[(0)] = state_machine__20693__auto__);

(statearr_25951[(1)] = (1));

return statearr_25951;
});
var state_machine__20693__auto____1 = (function (state_25936){
while(true){
var ret_value__20694__auto__ = (function (){try{while(true){
var result__20695__auto__ = switch__20692__auto__.call(null,state_25936);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20695__auto__;
}
break;
}
}catch (e25952){if((e25952 instanceof Object)){
var ex__20696__auto__ = e25952;
var statearr_25953_26058 = state_25936;
(statearr_25953_26058[(5)] = ex__20696__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25936);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25952;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26059 = state_25936;
state_25936 = G__26059;
continue;
} else {
return ret_value__20694__auto__;
}
break;
}
});
state_machine__20693__auto__ = function(state_25936){
switch(arguments.length){
case 0:
return state_machine__20693__auto____0.call(this);
case 1:
return state_machine__20693__auto____1.call(this,state_25936);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20693__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20693__auto____0;
state_machine__20693__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20693__auto____1;
return state_machine__20693__auto__;
})()
;})(switch__20692__auto__,c__20748__auto___26051,jobs,results,process,async))
})();
var state__20750__auto__ = (function (){var statearr_25954 = f__20749__auto__.call(null);
(statearr_25954[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20748__auto___26051);

return statearr_25954;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20750__auto__);
});})(c__20748__auto___26051,jobs,results,process,async))
);


var c__20748__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20748__auto__,jobs,results,process,async){
return (function (){
var f__20749__auto__ = (function (){var switch__20692__auto__ = ((function (c__20748__auto__,jobs,results,process,async){
return (function (state_25992){
var state_val_25993 = (state_25992[(1)]);
if((state_val_25993 === (7))){
var inst_25988 = (state_25992[(2)]);
var state_25992__$1 = state_25992;
var statearr_25994_26060 = state_25992__$1;
(statearr_25994_26060[(2)] = inst_25988);

(statearr_25994_26060[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25993 === (20))){
var state_25992__$1 = state_25992;
var statearr_25995_26061 = state_25992__$1;
(statearr_25995_26061[(2)] = null);

(statearr_25995_26061[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25993 === (1))){
var state_25992__$1 = state_25992;
var statearr_25996_26062 = state_25992__$1;
(statearr_25996_26062[(2)] = null);

(statearr_25996_26062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25993 === (4))){
var inst_25957 = (state_25992[(7)]);
var inst_25957__$1 = (state_25992[(2)]);
var inst_25958 = (inst_25957__$1 == null);
var state_25992__$1 = (function (){var statearr_25997 = state_25992;
(statearr_25997[(7)] = inst_25957__$1);

return statearr_25997;
})();
if(cljs.core.truth_(inst_25958)){
var statearr_25998_26063 = state_25992__$1;
(statearr_25998_26063[(1)] = (5));

} else {
var statearr_25999_26064 = state_25992__$1;
(statearr_25999_26064[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25993 === (15))){
var inst_25970 = (state_25992[(8)]);
var state_25992__$1 = state_25992;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25992__$1,(18),to,inst_25970);
} else {
if((state_val_25993 === (21))){
var inst_25983 = (state_25992[(2)]);
var state_25992__$1 = state_25992;
var statearr_26000_26065 = state_25992__$1;
(statearr_26000_26065[(2)] = inst_25983);

(statearr_26000_26065[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25993 === (13))){
var inst_25985 = (state_25992[(2)]);
var state_25992__$1 = (function (){var statearr_26001 = state_25992;
(statearr_26001[(9)] = inst_25985);

return statearr_26001;
})();
var statearr_26002_26066 = state_25992__$1;
(statearr_26002_26066[(2)] = null);

(statearr_26002_26066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25993 === (6))){
var inst_25957 = (state_25992[(7)]);
var state_25992__$1 = state_25992;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25992__$1,(11),inst_25957);
} else {
if((state_val_25993 === (17))){
var inst_25978 = (state_25992[(2)]);
var state_25992__$1 = state_25992;
if(cljs.core.truth_(inst_25978)){
var statearr_26003_26067 = state_25992__$1;
(statearr_26003_26067[(1)] = (19));

} else {
var statearr_26004_26068 = state_25992__$1;
(statearr_26004_26068[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25993 === (3))){
var inst_25990 = (state_25992[(2)]);
var state_25992__$1 = state_25992;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25992__$1,inst_25990);
} else {
if((state_val_25993 === (12))){
var inst_25967 = (state_25992[(10)]);
var state_25992__$1 = state_25992;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25992__$1,(14),inst_25967);
} else {
if((state_val_25993 === (2))){
var state_25992__$1 = state_25992;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25992__$1,(4),results);
} else {
if((state_val_25993 === (19))){
var state_25992__$1 = state_25992;
var statearr_26005_26069 = state_25992__$1;
(statearr_26005_26069[(2)] = null);

(statearr_26005_26069[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25993 === (11))){
var inst_25967 = (state_25992[(2)]);
var state_25992__$1 = (function (){var statearr_26006 = state_25992;
(statearr_26006[(10)] = inst_25967);

return statearr_26006;
})();
var statearr_26007_26070 = state_25992__$1;
(statearr_26007_26070[(2)] = null);

(statearr_26007_26070[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25993 === (9))){
var state_25992__$1 = state_25992;
var statearr_26008_26071 = state_25992__$1;
(statearr_26008_26071[(2)] = null);

(statearr_26008_26071[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25993 === (5))){
var state_25992__$1 = state_25992;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26009_26072 = state_25992__$1;
(statearr_26009_26072[(1)] = (8));

} else {
var statearr_26010_26073 = state_25992__$1;
(statearr_26010_26073[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25993 === (14))){
var inst_25970 = (state_25992[(8)]);
var inst_25972 = (state_25992[(11)]);
var inst_25970__$1 = (state_25992[(2)]);
var inst_25971 = (inst_25970__$1 == null);
var inst_25972__$1 = cljs.core.not.call(null,inst_25971);
var state_25992__$1 = (function (){var statearr_26011 = state_25992;
(statearr_26011[(8)] = inst_25970__$1);

(statearr_26011[(11)] = inst_25972__$1);

return statearr_26011;
})();
if(inst_25972__$1){
var statearr_26012_26074 = state_25992__$1;
(statearr_26012_26074[(1)] = (15));

} else {
var statearr_26013_26075 = state_25992__$1;
(statearr_26013_26075[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25993 === (16))){
var inst_25972 = (state_25992[(11)]);
var state_25992__$1 = state_25992;
var statearr_26014_26076 = state_25992__$1;
(statearr_26014_26076[(2)] = inst_25972);

(statearr_26014_26076[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25993 === (10))){
var inst_25964 = (state_25992[(2)]);
var state_25992__$1 = state_25992;
var statearr_26015_26077 = state_25992__$1;
(statearr_26015_26077[(2)] = inst_25964);

(statearr_26015_26077[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25993 === (18))){
var inst_25975 = (state_25992[(2)]);
var state_25992__$1 = state_25992;
var statearr_26016_26078 = state_25992__$1;
(statearr_26016_26078[(2)] = inst_25975);

(statearr_26016_26078[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25993 === (8))){
var inst_25961 = cljs.core.async.close_BANG_.call(null,to);
var state_25992__$1 = state_25992;
var statearr_26017_26079 = state_25992__$1;
(statearr_26017_26079[(2)] = inst_25961);

(statearr_26017_26079[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__20748__auto__,jobs,results,process,async))
;
return ((function (switch__20692__auto__,c__20748__auto__,jobs,results,process,async){
return (function() {
var state_machine__20693__auto__ = null;
var state_machine__20693__auto____0 = (function (){
var statearr_26021 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26021[(0)] = state_machine__20693__auto__);

(statearr_26021[(1)] = (1));

return statearr_26021;
});
var state_machine__20693__auto____1 = (function (state_25992){
while(true){
var ret_value__20694__auto__ = (function (){try{while(true){
var result__20695__auto__ = switch__20692__auto__.call(null,state_25992);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20695__auto__;
}
break;
}
}catch (e26022){if((e26022 instanceof Object)){
var ex__20696__auto__ = e26022;
var statearr_26023_26080 = state_25992;
(statearr_26023_26080[(5)] = ex__20696__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25992);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26022;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26081 = state_25992;
state_25992 = G__26081;
continue;
} else {
return ret_value__20694__auto__;
}
break;
}
});
state_machine__20693__auto__ = function(state_25992){
switch(arguments.length){
case 0:
return state_machine__20693__auto____0.call(this);
case 1:
return state_machine__20693__auto____1.call(this,state_25992);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20693__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20693__auto____0;
state_machine__20693__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20693__auto____1;
return state_machine__20693__auto__;
})()
;})(switch__20692__auto__,c__20748__auto__,jobs,results,process,async))
})();
var state__20750__auto__ = (function (){var statearr_26024 = f__20749__auto__.call(null);
(statearr_26024[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20748__auto__);

return statearr_26024;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20750__auto__);
});})(c__20748__auto__,jobs,results,process,async))
);

return c__20748__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){
return pipeline_async.call(null,n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){
return pipeline.call(null,n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){
return pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
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
var split__2 = (function (p,ch){
return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__20748__auto___26182 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20748__auto___26182,tc,fc){
return (function (){
var f__20749__auto__ = (function (){var switch__20692__auto__ = ((function (c__20748__auto___26182,tc,fc){
return (function (state_26157){
var state_val_26158 = (state_26157[(1)]);
if((state_val_26158 === (7))){
var inst_26153 = (state_26157[(2)]);
var state_26157__$1 = state_26157;
var statearr_26159_26183 = state_26157__$1;
(statearr_26159_26183[(2)] = inst_26153);

(statearr_26159_26183[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26158 === (1))){
var state_26157__$1 = state_26157;
var statearr_26160_26184 = state_26157__$1;
(statearr_26160_26184[(2)] = null);

(statearr_26160_26184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26158 === (4))){
var inst_26134 = (state_26157[(7)]);
var inst_26134__$1 = (state_26157[(2)]);
var inst_26135 = (inst_26134__$1 == null);
var state_26157__$1 = (function (){var statearr_26161 = state_26157;
(statearr_26161[(7)] = inst_26134__$1);

return statearr_26161;
})();
if(cljs.core.truth_(inst_26135)){
var statearr_26162_26185 = state_26157__$1;
(statearr_26162_26185[(1)] = (5));

} else {
var statearr_26163_26186 = state_26157__$1;
(statearr_26163_26186[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26158 === (13))){
var state_26157__$1 = state_26157;
var statearr_26164_26187 = state_26157__$1;
(statearr_26164_26187[(2)] = null);

(statearr_26164_26187[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26158 === (6))){
var inst_26134 = (state_26157[(7)]);
var inst_26140 = p.call(null,inst_26134);
var state_26157__$1 = state_26157;
if(cljs.core.truth_(inst_26140)){
var statearr_26165_26188 = state_26157__$1;
(statearr_26165_26188[(1)] = (9));

} else {
var statearr_26166_26189 = state_26157__$1;
(statearr_26166_26189[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26158 === (3))){
var inst_26155 = (state_26157[(2)]);
var state_26157__$1 = state_26157;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26157__$1,inst_26155);
} else {
if((state_val_26158 === (12))){
var state_26157__$1 = state_26157;
var statearr_26167_26190 = state_26157__$1;
(statearr_26167_26190[(2)] = null);

(statearr_26167_26190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26158 === (2))){
var state_26157__$1 = state_26157;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26157__$1,(4),ch);
} else {
if((state_val_26158 === (11))){
var inst_26134 = (state_26157[(7)]);
var inst_26144 = (state_26157[(2)]);
var state_26157__$1 = state_26157;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26157__$1,(8),inst_26144,inst_26134);
} else {
if((state_val_26158 === (9))){
var state_26157__$1 = state_26157;
var statearr_26168_26191 = state_26157__$1;
(statearr_26168_26191[(2)] = tc);

(statearr_26168_26191[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26158 === (5))){
var inst_26137 = cljs.core.async.close_BANG_.call(null,tc);
var inst_26138 = cljs.core.async.close_BANG_.call(null,fc);
var state_26157__$1 = (function (){var statearr_26169 = state_26157;
(statearr_26169[(8)] = inst_26137);

return statearr_26169;
})();
var statearr_26170_26192 = state_26157__$1;
(statearr_26170_26192[(2)] = inst_26138);

(statearr_26170_26192[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26158 === (14))){
var inst_26151 = (state_26157[(2)]);
var state_26157__$1 = state_26157;
var statearr_26171_26193 = state_26157__$1;
(statearr_26171_26193[(2)] = inst_26151);

(statearr_26171_26193[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26158 === (10))){
var state_26157__$1 = state_26157;
var statearr_26172_26194 = state_26157__$1;
(statearr_26172_26194[(2)] = fc);

(statearr_26172_26194[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26158 === (8))){
var inst_26146 = (state_26157[(2)]);
var state_26157__$1 = state_26157;
if(cljs.core.truth_(inst_26146)){
var statearr_26173_26195 = state_26157__$1;
(statearr_26173_26195[(1)] = (12));

} else {
var statearr_26174_26196 = state_26157__$1;
(statearr_26174_26196[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__20748__auto___26182,tc,fc))
;
return ((function (switch__20692__auto__,c__20748__auto___26182,tc,fc){
return (function() {
var state_machine__20693__auto__ = null;
var state_machine__20693__auto____0 = (function (){
var statearr_26178 = [null,null,null,null,null,null,null,null,null];
(statearr_26178[(0)] = state_machine__20693__auto__);

(statearr_26178[(1)] = (1));

return statearr_26178;
});
var state_machine__20693__auto____1 = (function (state_26157){
while(true){
var ret_value__20694__auto__ = (function (){try{while(true){
var result__20695__auto__ = switch__20692__auto__.call(null,state_26157);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20695__auto__;
}
break;
}
}catch (e26179){if((e26179 instanceof Object)){
var ex__20696__auto__ = e26179;
var statearr_26180_26197 = state_26157;
(statearr_26180_26197[(5)] = ex__20696__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26157);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26179;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26198 = state_26157;
state_26157 = G__26198;
continue;
} else {
return ret_value__20694__auto__;
}
break;
}
});
state_machine__20693__auto__ = function(state_26157){
switch(arguments.length){
case 0:
return state_machine__20693__auto____0.call(this);
case 1:
return state_machine__20693__auto____1.call(this,state_26157);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20693__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20693__auto____0;
state_machine__20693__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20693__auto____1;
return state_machine__20693__auto__;
})()
;})(switch__20692__auto__,c__20748__auto___26182,tc,fc))
})();
var state__20750__auto__ = (function (){var statearr_26181 = f__20749__auto__.call(null);
(statearr_26181[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20748__auto___26182);

return statearr_26181;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20750__auto__);
});})(c__20748__auto___26182,tc,fc))
);


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
cljs.core.async.reduce = (function reduce(f,init,ch){
var c__20748__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20748__auto__){
return (function (){
var f__20749__auto__ = (function (){var switch__20692__auto__ = ((function (c__20748__auto__){
return (function (state_26245){
var state_val_26246 = (state_26245[(1)]);
if((state_val_26246 === (7))){
var inst_26241 = (state_26245[(2)]);
var state_26245__$1 = state_26245;
var statearr_26247_26263 = state_26245__$1;
(statearr_26247_26263[(2)] = inst_26241);

(statearr_26247_26263[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26246 === (6))){
var inst_26231 = (state_26245[(7)]);
var inst_26234 = (state_26245[(8)]);
var inst_26238 = f.call(null,inst_26231,inst_26234);
var inst_26231__$1 = inst_26238;
var state_26245__$1 = (function (){var statearr_26248 = state_26245;
(statearr_26248[(7)] = inst_26231__$1);

return statearr_26248;
})();
var statearr_26249_26264 = state_26245__$1;
(statearr_26249_26264[(2)] = null);

(statearr_26249_26264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26246 === (5))){
var inst_26231 = (state_26245[(7)]);
var state_26245__$1 = state_26245;
var statearr_26250_26265 = state_26245__$1;
(statearr_26250_26265[(2)] = inst_26231);

(statearr_26250_26265[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26246 === (4))){
var inst_26234 = (state_26245[(8)]);
var inst_26234__$1 = (state_26245[(2)]);
var inst_26235 = (inst_26234__$1 == null);
var state_26245__$1 = (function (){var statearr_26251 = state_26245;
(statearr_26251[(8)] = inst_26234__$1);

return statearr_26251;
})();
if(cljs.core.truth_(inst_26235)){
var statearr_26252_26266 = state_26245__$1;
(statearr_26252_26266[(1)] = (5));

} else {
var statearr_26253_26267 = state_26245__$1;
(statearr_26253_26267[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26246 === (3))){
var inst_26243 = (state_26245[(2)]);
var state_26245__$1 = state_26245;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26245__$1,inst_26243);
} else {
if((state_val_26246 === (2))){
var state_26245__$1 = state_26245;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26245__$1,(4),ch);
} else {
if((state_val_26246 === (1))){
var inst_26231 = init;
var state_26245__$1 = (function (){var statearr_26254 = state_26245;
(statearr_26254[(7)] = inst_26231);

return statearr_26254;
})();
var statearr_26255_26268 = state_26245__$1;
(statearr_26255_26268[(2)] = null);

(statearr_26255_26268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__20748__auto__))
;
return ((function (switch__20692__auto__,c__20748__auto__){
return (function() {
var state_machine__20693__auto__ = null;
var state_machine__20693__auto____0 = (function (){
var statearr_26259 = [null,null,null,null,null,null,null,null,null];
(statearr_26259[(0)] = state_machine__20693__auto__);

(statearr_26259[(1)] = (1));

return statearr_26259;
});
var state_machine__20693__auto____1 = (function (state_26245){
while(true){
var ret_value__20694__auto__ = (function (){try{while(true){
var result__20695__auto__ = switch__20692__auto__.call(null,state_26245);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20695__auto__;
}
break;
}
}catch (e26260){if((e26260 instanceof Object)){
var ex__20696__auto__ = e26260;
var statearr_26261_26269 = state_26245;
(statearr_26261_26269[(5)] = ex__20696__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26245);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26260;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26270 = state_26245;
state_26245 = G__26270;
continue;
} else {
return ret_value__20694__auto__;
}
break;
}
});
state_machine__20693__auto__ = function(state_26245){
switch(arguments.length){
case 0:
return state_machine__20693__auto____0.call(this);
case 1:
return state_machine__20693__auto____1.call(this,state_26245);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20693__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20693__auto____0;
state_machine__20693__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20693__auto____1;
return state_machine__20693__auto__;
})()
;})(switch__20692__auto__,c__20748__auto__))
})();
var state__20750__auto__ = (function (){var statearr_26262 = f__20749__auto__.call(null);
(statearr_26262[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20748__auto__);

return statearr_26262;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20750__auto__);
});})(c__20748__auto__))
);

return c__20748__auto__;
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
var onto_chan__2 = (function (ch,coll){
return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){
var c__20748__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20748__auto__){
return (function (){
var f__20749__auto__ = (function (){var switch__20692__auto__ = ((function (c__20748__auto__){
return (function (state_26344){
var state_val_26345 = (state_26344[(1)]);
if((state_val_26345 === (7))){
var inst_26326 = (state_26344[(2)]);
var state_26344__$1 = state_26344;
var statearr_26346_26369 = state_26344__$1;
(statearr_26346_26369[(2)] = inst_26326);

(statearr_26346_26369[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26345 === (1))){
var inst_26320 = cljs.core.seq.call(null,coll);
var inst_26321 = inst_26320;
var state_26344__$1 = (function (){var statearr_26347 = state_26344;
(statearr_26347[(7)] = inst_26321);

return statearr_26347;
})();
var statearr_26348_26370 = state_26344__$1;
(statearr_26348_26370[(2)] = null);

(statearr_26348_26370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26345 === (4))){
var inst_26321 = (state_26344[(7)]);
var inst_26324 = cljs.core.first.call(null,inst_26321);
var state_26344__$1 = state_26344;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26344__$1,(7),ch,inst_26324);
} else {
if((state_val_26345 === (13))){
var inst_26338 = (state_26344[(2)]);
var state_26344__$1 = state_26344;
var statearr_26349_26371 = state_26344__$1;
(statearr_26349_26371[(2)] = inst_26338);

(statearr_26349_26371[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26345 === (6))){
var inst_26329 = (state_26344[(2)]);
var state_26344__$1 = state_26344;
if(cljs.core.truth_(inst_26329)){
var statearr_26350_26372 = state_26344__$1;
(statearr_26350_26372[(1)] = (8));

} else {
var statearr_26351_26373 = state_26344__$1;
(statearr_26351_26373[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26345 === (3))){
var inst_26342 = (state_26344[(2)]);
var state_26344__$1 = state_26344;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26344__$1,inst_26342);
} else {
if((state_val_26345 === (12))){
var state_26344__$1 = state_26344;
var statearr_26352_26374 = state_26344__$1;
(statearr_26352_26374[(2)] = null);

(statearr_26352_26374[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26345 === (2))){
var inst_26321 = (state_26344[(7)]);
var state_26344__$1 = state_26344;
if(cljs.core.truth_(inst_26321)){
var statearr_26353_26375 = state_26344__$1;
(statearr_26353_26375[(1)] = (4));

} else {
var statearr_26354_26376 = state_26344__$1;
(statearr_26354_26376[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26345 === (11))){
var inst_26335 = cljs.core.async.close_BANG_.call(null,ch);
var state_26344__$1 = state_26344;
var statearr_26355_26377 = state_26344__$1;
(statearr_26355_26377[(2)] = inst_26335);

(statearr_26355_26377[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26345 === (9))){
var state_26344__$1 = state_26344;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26356_26378 = state_26344__$1;
(statearr_26356_26378[(1)] = (11));

} else {
var statearr_26357_26379 = state_26344__$1;
(statearr_26357_26379[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26345 === (5))){
var inst_26321 = (state_26344[(7)]);
var state_26344__$1 = state_26344;
var statearr_26358_26380 = state_26344__$1;
(statearr_26358_26380[(2)] = inst_26321);

(statearr_26358_26380[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26345 === (10))){
var inst_26340 = (state_26344[(2)]);
var state_26344__$1 = state_26344;
var statearr_26359_26381 = state_26344__$1;
(statearr_26359_26381[(2)] = inst_26340);

(statearr_26359_26381[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26345 === (8))){
var inst_26321 = (state_26344[(7)]);
var inst_26331 = cljs.core.next.call(null,inst_26321);
var inst_26321__$1 = inst_26331;
var state_26344__$1 = (function (){var statearr_26360 = state_26344;
(statearr_26360[(7)] = inst_26321__$1);

return statearr_26360;
})();
var statearr_26361_26382 = state_26344__$1;
(statearr_26361_26382[(2)] = null);

(statearr_26361_26382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__20748__auto__))
;
return ((function (switch__20692__auto__,c__20748__auto__){
return (function() {
var state_machine__20693__auto__ = null;
var state_machine__20693__auto____0 = (function (){
var statearr_26365 = [null,null,null,null,null,null,null,null];
(statearr_26365[(0)] = state_machine__20693__auto__);

(statearr_26365[(1)] = (1));

return statearr_26365;
});
var state_machine__20693__auto____1 = (function (state_26344){
while(true){
var ret_value__20694__auto__ = (function (){try{while(true){
var result__20695__auto__ = switch__20692__auto__.call(null,state_26344);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20695__auto__;
}
break;
}
}catch (e26366){if((e26366 instanceof Object)){
var ex__20696__auto__ = e26366;
var statearr_26367_26383 = state_26344;
(statearr_26367_26383[(5)] = ex__20696__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26344);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26366;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26384 = state_26344;
state_26344 = G__26384;
continue;
} else {
return ret_value__20694__auto__;
}
break;
}
});
state_machine__20693__auto__ = function(state_26344){
switch(arguments.length){
case 0:
return state_machine__20693__auto____0.call(this);
case 1:
return state_machine__20693__auto____1.call(this,state_26344);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20693__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20693__auto____0;
state_machine__20693__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20693__auto____1;
return state_machine__20693__auto__;
})()
;})(switch__20692__auto__,c__20748__auto__))
})();
var state__20750__auto__ = (function (){var statearr_26368 = f__20749__auto__.call(null);
(statearr_26368[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20748__auto__);

return statearr_26368;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20750__auto__);
});})(c__20748__auto__))
);

return c__20748__auto__;
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
cljs.core.async.to_chan = (function to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj26386 = {};
return obj26386;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__11617__auto__ = _;
if(and__11617__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__11617__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__12273__auto__ = (((_ == null))?null:_);
return (function (){var or__11629__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__12273__auto__)]);
if(or__11629__auto__){
return or__11629__auto__;
} else {
var or__11629__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__11629__auto____$1){
return or__11629__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj26388 = {};
return obj26388;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__11617__auto__ = m;
if(and__11617__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__11617__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__12273__auto__ = (((m == null))?null:m);
return (function (){var or__11629__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__12273__auto__)]);
if(or__11629__auto__){
return or__11629__auto__;
} else {
var or__11629__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__11629__auto____$1){
return or__11629__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__11617__auto__ = m;
if(and__11617__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__11617__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__12273__auto__ = (((m == null))?null:m);
return (function (){var or__11629__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__12273__auto__)]);
if(or__11629__auto__){
return or__11629__auto__;
} else {
var or__11629__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__11629__auto____$1){
return or__11629__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__11617__auto__ = m;
if(and__11617__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__11617__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__12273__auto__ = (((m == null))?null:m);
return (function (){var or__11629__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__12273__auto__)]);
if(or__11629__auto__){
return or__11629__auto__;
} else {
var or__11629__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__11629__auto____$1){
return or__11629__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
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
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t26610 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26610 = (function (cs,ch,mult,meta26611){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta26611 = meta26611;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26610.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t26610.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t26610.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t26610.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t26610.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t26610.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t26610.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_26612){
var self__ = this;
var _26612__$1 = this;
return self__.meta26611;
});})(cs))
;

cljs.core.async.t26610.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_26612,meta26611__$1){
var self__ = this;
var _26612__$1 = this;
return (new cljs.core.async.t26610(self__.cs,self__.ch,self__.mult,meta26611__$1));
});})(cs))
;

cljs.core.async.t26610.cljs$lang$type = true;

cljs.core.async.t26610.cljs$lang$ctorStr = "cljs.core.async/t26610";

cljs.core.async.t26610.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__12216__auto__,writer__12217__auto__,opt__12218__auto__){
return cljs.core._write.call(null,writer__12217__auto__,"cljs.core.async/t26610");
});})(cs))
;

cljs.core.async.__GT_t26610 = ((function (cs){
return (function __GT_t26610(cs__$1,ch__$1,mult__$1,meta26611){
return (new cljs.core.async.t26610(cs__$1,ch__$1,mult__$1,meta26611));
});})(cs))
;

}

return (new cljs.core.async.t26610(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/odinholestandal/git/odin/canvas-fn/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__20748__auto___26831 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20748__auto___26831,cs,m,dchan,dctr,done){
return (function (){
var f__20749__auto__ = (function (){var switch__20692__auto__ = ((function (c__20748__auto___26831,cs,m,dchan,dctr,done){
return (function (state_26743){
var state_val_26744 = (state_26743[(1)]);
if((state_val_26744 === (7))){
var inst_26739 = (state_26743[(2)]);
var state_26743__$1 = state_26743;
var statearr_26745_26832 = state_26743__$1;
(statearr_26745_26832[(2)] = inst_26739);

(statearr_26745_26832[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26744 === (20))){
var inst_26644 = (state_26743[(7)]);
var inst_26654 = cljs.core.first.call(null,inst_26644);
var inst_26655 = cljs.core.nth.call(null,inst_26654,(0),null);
var inst_26656 = cljs.core.nth.call(null,inst_26654,(1),null);
var state_26743__$1 = (function (){var statearr_26746 = state_26743;
(statearr_26746[(8)] = inst_26655);

return statearr_26746;
})();
if(cljs.core.truth_(inst_26656)){
var statearr_26747_26833 = state_26743__$1;
(statearr_26747_26833[(1)] = (22));

} else {
var statearr_26748_26834 = state_26743__$1;
(statearr_26748_26834[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26744 === (27))){
var inst_26691 = (state_26743[(9)]);
var inst_26686 = (state_26743[(10)]);
var inst_26684 = (state_26743[(11)]);
var inst_26615 = (state_26743[(12)]);
var inst_26691__$1 = cljs.core._nth.call(null,inst_26684,inst_26686);
var inst_26692 = cljs.core.async.put_BANG_.call(null,inst_26691__$1,inst_26615,done);
var state_26743__$1 = (function (){var statearr_26749 = state_26743;
(statearr_26749[(9)] = inst_26691__$1);

return statearr_26749;
})();
if(cljs.core.truth_(inst_26692)){
var statearr_26750_26835 = state_26743__$1;
(statearr_26750_26835[(1)] = (30));

} else {
var statearr_26751_26836 = state_26743__$1;
(statearr_26751_26836[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26744 === (1))){
var state_26743__$1 = state_26743;
var statearr_26752_26837 = state_26743__$1;
(statearr_26752_26837[(2)] = null);

(statearr_26752_26837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26744 === (24))){
var inst_26644 = (state_26743[(7)]);
var inst_26661 = (state_26743[(2)]);
var inst_26662 = cljs.core.next.call(null,inst_26644);
var inst_26624 = inst_26662;
var inst_26625 = null;
var inst_26626 = (0);
var inst_26627 = (0);
var state_26743__$1 = (function (){var statearr_26753 = state_26743;
(statearr_26753[(13)] = inst_26626);

(statearr_26753[(14)] = inst_26661);

(statearr_26753[(15)] = inst_26624);

(statearr_26753[(16)] = inst_26625);

(statearr_26753[(17)] = inst_26627);

return statearr_26753;
})();
var statearr_26754_26838 = state_26743__$1;
(statearr_26754_26838[(2)] = null);

(statearr_26754_26838[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26744 === (39))){
var state_26743__$1 = state_26743;
var statearr_26758_26839 = state_26743__$1;
(statearr_26758_26839[(2)] = null);

(statearr_26758_26839[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26744 === (4))){
var inst_26615 = (state_26743[(12)]);
var inst_26615__$1 = (state_26743[(2)]);
var inst_26616 = (inst_26615__$1 == null);
var state_26743__$1 = (function (){var statearr_26759 = state_26743;
(statearr_26759[(12)] = inst_26615__$1);

return statearr_26759;
})();
if(cljs.core.truth_(inst_26616)){
var statearr_26760_26840 = state_26743__$1;
(statearr_26760_26840[(1)] = (5));

} else {
var statearr_26761_26841 = state_26743__$1;
(statearr_26761_26841[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26744 === (15))){
var inst_26626 = (state_26743[(13)]);
var inst_26624 = (state_26743[(15)]);
var inst_26625 = (state_26743[(16)]);
var inst_26627 = (state_26743[(17)]);
var inst_26640 = (state_26743[(2)]);
var inst_26641 = (inst_26627 + (1));
var tmp26755 = inst_26626;
var tmp26756 = inst_26624;
var tmp26757 = inst_26625;
var inst_26624__$1 = tmp26756;
var inst_26625__$1 = tmp26757;
var inst_26626__$1 = tmp26755;
var inst_26627__$1 = inst_26641;
var state_26743__$1 = (function (){var statearr_26762 = state_26743;
(statearr_26762[(13)] = inst_26626__$1);

(statearr_26762[(15)] = inst_26624__$1);

(statearr_26762[(18)] = inst_26640);

(statearr_26762[(16)] = inst_26625__$1);

(statearr_26762[(17)] = inst_26627__$1);

return statearr_26762;
})();
var statearr_26763_26842 = state_26743__$1;
(statearr_26763_26842[(2)] = null);

(statearr_26763_26842[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26744 === (21))){
var inst_26665 = (state_26743[(2)]);
var state_26743__$1 = state_26743;
var statearr_26767_26843 = state_26743__$1;
(statearr_26767_26843[(2)] = inst_26665);

(statearr_26767_26843[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26744 === (31))){
var inst_26691 = (state_26743[(9)]);
var inst_26695 = done.call(null,null);
var inst_26696 = cljs.core.async.untap_STAR_.call(null,m,inst_26691);
var state_26743__$1 = (function (){var statearr_26768 = state_26743;
(statearr_26768[(19)] = inst_26695);

return statearr_26768;
})();
var statearr_26769_26844 = state_26743__$1;
(statearr_26769_26844[(2)] = inst_26696);

(statearr_26769_26844[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26744 === (32))){
var inst_26686 = (state_26743[(10)]);
var inst_26684 = (state_26743[(11)]);
var inst_26683 = (state_26743[(20)]);
var inst_26685 = (state_26743[(21)]);
var inst_26698 = (state_26743[(2)]);
var inst_26699 = (inst_26686 + (1));
var tmp26764 = inst_26684;
var tmp26765 = inst_26683;
var tmp26766 = inst_26685;
var inst_26683__$1 = tmp26765;
var inst_26684__$1 = tmp26764;
var inst_26685__$1 = tmp26766;
var inst_26686__$1 = inst_26699;
var state_26743__$1 = (function (){var statearr_26770 = state_26743;
(statearr_26770[(10)] = inst_26686__$1);

(statearr_26770[(22)] = inst_26698);

(statearr_26770[(11)] = inst_26684__$1);

(statearr_26770[(20)] = inst_26683__$1);

(statearr_26770[(21)] = inst_26685__$1);

return statearr_26770;
})();
var statearr_26771_26845 = state_26743__$1;
(statearr_26771_26845[(2)] = null);

(statearr_26771_26845[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26744 === (40))){
var inst_26711 = (state_26743[(23)]);
var inst_26715 = done.call(null,null);
var inst_26716 = cljs.core.async.untap_STAR_.call(null,m,inst_26711);
var state_26743__$1 = (function (){var statearr_26772 = state_26743;
(statearr_26772[(24)] = inst_26715);

return statearr_26772;
})();
var statearr_26773_26846 = state_26743__$1;
(statearr_26773_26846[(2)] = inst_26716);

(statearr_26773_26846[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26744 === (33))){
var inst_26702 = (state_26743[(25)]);
var inst_26704 = cljs.core.chunked_seq_QMARK_.call(null,inst_26702);
var state_26743__$1 = state_26743;
if(inst_26704){
var statearr_26774_26847 = state_26743__$1;
(statearr_26774_26847[(1)] = (36));

} else {
var statearr_26775_26848 = state_26743__$1;
(statearr_26775_26848[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26744 === (13))){
var inst_26634 = (state_26743[(26)]);
var inst_26637 = cljs.core.async.close_BANG_.call(null,inst_26634);
var state_26743__$1 = state_26743;
var statearr_26776_26849 = state_26743__$1;
(statearr_26776_26849[(2)] = inst_26637);

(statearr_26776_26849[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26744 === (22))){
var inst_26655 = (state_26743[(8)]);
var inst_26658 = cljs.core.async.close_BANG_.call(null,inst_26655);
var state_26743__$1 = state_26743;
var statearr_26777_26850 = state_26743__$1;
(statearr_26777_26850[(2)] = inst_26658);

(statearr_26777_26850[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26744 === (36))){
var inst_26702 = (state_26743[(25)]);
var inst_26706 = cljs.core.chunk_first.call(null,inst_26702);
var inst_26707 = cljs.core.chunk_rest.call(null,inst_26702);
var inst_26708 = cljs.core.count.call(null,inst_26706);
var inst_26683 = inst_26707;
var inst_26684 = inst_26706;
var inst_26685 = inst_26708;
var inst_26686 = (0);
var state_26743__$1 = (function (){var statearr_26778 = state_26743;
(statearr_26778[(10)] = inst_26686);

(statearr_26778[(11)] = inst_26684);

(statearr_26778[(20)] = inst_26683);

(statearr_26778[(21)] = inst_26685);

return statearr_26778;
})();
var statearr_26779_26851 = state_26743__$1;
(statearr_26779_26851[(2)] = null);

(statearr_26779_26851[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26744 === (41))){
var inst_26702 = (state_26743[(25)]);
var inst_26718 = (state_26743[(2)]);
var inst_26719 = cljs.core.next.call(null,inst_26702);
var inst_26683 = inst_26719;
var inst_26684 = null;
var inst_26685 = (0);
var inst_26686 = (0);
var state_26743__$1 = (function (){var statearr_26780 = state_26743;
(statearr_26780[(10)] = inst_26686);

(statearr_26780[(11)] = inst_26684);

(statearr_26780[(20)] = inst_26683);

(statearr_26780[(21)] = inst_26685);

(statearr_26780[(27)] = inst_26718);

return statearr_26780;
})();
var statearr_26781_26852 = state_26743__$1;
(statearr_26781_26852[(2)] = null);

(statearr_26781_26852[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26744 === (43))){
var state_26743__$1 = state_26743;
var statearr_26782_26853 = state_26743__$1;
(statearr_26782_26853[(2)] = null);

(statearr_26782_26853[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26744 === (29))){
var inst_26727 = (state_26743[(2)]);
var state_26743__$1 = state_26743;
var statearr_26783_26854 = state_26743__$1;
(statearr_26783_26854[(2)] = inst_26727);

(statearr_26783_26854[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26744 === (44))){
var inst_26736 = (state_26743[(2)]);
var state_26743__$1 = (function (){var statearr_26784 = state_26743;
(statearr_26784[(28)] = inst_26736);

return statearr_26784;
})();
var statearr_26785_26855 = state_26743__$1;
(statearr_26785_26855[(2)] = null);

(statearr_26785_26855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26744 === (6))){
var inst_26675 = (state_26743[(29)]);
var inst_26674 = cljs.core.deref.call(null,cs);
var inst_26675__$1 = cljs.core.keys.call(null,inst_26674);
var inst_26676 = cljs.core.count.call(null,inst_26675__$1);
var inst_26677 = cljs.core.reset_BANG_.call(null,dctr,inst_26676);
var inst_26682 = cljs.core.seq.call(null,inst_26675__$1);
var inst_26683 = inst_26682;
var inst_26684 = null;
var inst_26685 = (0);
var inst_26686 = (0);
var state_26743__$1 = (function (){var statearr_26786 = state_26743;
(statearr_26786[(10)] = inst_26686);

(statearr_26786[(11)] = inst_26684);

(statearr_26786[(20)] = inst_26683);

(statearr_26786[(30)] = inst_26677);

(statearr_26786[(21)] = inst_26685);

(statearr_26786[(29)] = inst_26675__$1);

return statearr_26786;
})();
var statearr_26787_26856 = state_26743__$1;
(statearr_26787_26856[(2)] = null);

(statearr_26787_26856[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26744 === (28))){
var inst_26683 = (state_26743[(20)]);
var inst_26702 = (state_26743[(25)]);
var inst_26702__$1 = cljs.core.seq.call(null,inst_26683);
var state_26743__$1 = (function (){var statearr_26788 = state_26743;
(statearr_26788[(25)] = inst_26702__$1);

return statearr_26788;
})();
if(inst_26702__$1){
var statearr_26789_26857 = state_26743__$1;
(statearr_26789_26857[(1)] = (33));

} else {
var statearr_26790_26858 = state_26743__$1;
(statearr_26790_26858[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26744 === (25))){
var inst_26686 = (state_26743[(10)]);
var inst_26685 = (state_26743[(21)]);
var inst_26688 = (inst_26686 < inst_26685);
var inst_26689 = inst_26688;
var state_26743__$1 = state_26743;
if(cljs.core.truth_(inst_26689)){
var statearr_26791_26859 = state_26743__$1;
(statearr_26791_26859[(1)] = (27));

} else {
var statearr_26792_26860 = state_26743__$1;
(statearr_26792_26860[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26744 === (34))){
var state_26743__$1 = state_26743;
var statearr_26793_26861 = state_26743__$1;
(statearr_26793_26861[(2)] = null);

(statearr_26793_26861[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26744 === (17))){
var state_26743__$1 = state_26743;
var statearr_26794_26862 = state_26743__$1;
(statearr_26794_26862[(2)] = null);

(statearr_26794_26862[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26744 === (3))){
var inst_26741 = (state_26743[(2)]);
var state_26743__$1 = state_26743;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26743__$1,inst_26741);
} else {
if((state_val_26744 === (12))){
var inst_26670 = (state_26743[(2)]);
var state_26743__$1 = state_26743;
var statearr_26795_26863 = state_26743__$1;
(statearr_26795_26863[(2)] = inst_26670);

(statearr_26795_26863[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26744 === (2))){
var state_26743__$1 = state_26743;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26743__$1,(4),ch);
} else {
if((state_val_26744 === (23))){
var state_26743__$1 = state_26743;
var statearr_26796_26864 = state_26743__$1;
(statearr_26796_26864[(2)] = null);

(statearr_26796_26864[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26744 === (35))){
var inst_26725 = (state_26743[(2)]);
var state_26743__$1 = state_26743;
var statearr_26797_26865 = state_26743__$1;
(statearr_26797_26865[(2)] = inst_26725);

(statearr_26797_26865[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26744 === (19))){
var inst_26644 = (state_26743[(7)]);
var inst_26648 = cljs.core.chunk_first.call(null,inst_26644);
var inst_26649 = cljs.core.chunk_rest.call(null,inst_26644);
var inst_26650 = cljs.core.count.call(null,inst_26648);
var inst_26624 = inst_26649;
var inst_26625 = inst_26648;
var inst_26626 = inst_26650;
var inst_26627 = (0);
var state_26743__$1 = (function (){var statearr_26798 = state_26743;
(statearr_26798[(13)] = inst_26626);

(statearr_26798[(15)] = inst_26624);

(statearr_26798[(16)] = inst_26625);

(statearr_26798[(17)] = inst_26627);

return statearr_26798;
})();
var statearr_26799_26866 = state_26743__$1;
(statearr_26799_26866[(2)] = null);

(statearr_26799_26866[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26744 === (11))){
var inst_26644 = (state_26743[(7)]);
var inst_26624 = (state_26743[(15)]);
var inst_26644__$1 = cljs.core.seq.call(null,inst_26624);
var state_26743__$1 = (function (){var statearr_26800 = state_26743;
(statearr_26800[(7)] = inst_26644__$1);

return statearr_26800;
})();
if(inst_26644__$1){
var statearr_26801_26867 = state_26743__$1;
(statearr_26801_26867[(1)] = (16));

} else {
var statearr_26802_26868 = state_26743__$1;
(statearr_26802_26868[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26744 === (9))){
var inst_26672 = (state_26743[(2)]);
var state_26743__$1 = state_26743;
var statearr_26803_26869 = state_26743__$1;
(statearr_26803_26869[(2)] = inst_26672);

(statearr_26803_26869[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26744 === (5))){
var inst_26622 = cljs.core.deref.call(null,cs);
var inst_26623 = cljs.core.seq.call(null,inst_26622);
var inst_26624 = inst_26623;
var inst_26625 = null;
var inst_26626 = (0);
var inst_26627 = (0);
var state_26743__$1 = (function (){var statearr_26804 = state_26743;
(statearr_26804[(13)] = inst_26626);

(statearr_26804[(15)] = inst_26624);

(statearr_26804[(16)] = inst_26625);

(statearr_26804[(17)] = inst_26627);

return statearr_26804;
})();
var statearr_26805_26870 = state_26743__$1;
(statearr_26805_26870[(2)] = null);

(statearr_26805_26870[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26744 === (14))){
var state_26743__$1 = state_26743;
var statearr_26806_26871 = state_26743__$1;
(statearr_26806_26871[(2)] = null);

(statearr_26806_26871[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26744 === (45))){
var inst_26733 = (state_26743[(2)]);
var state_26743__$1 = state_26743;
var statearr_26807_26872 = state_26743__$1;
(statearr_26807_26872[(2)] = inst_26733);

(statearr_26807_26872[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26744 === (26))){
var inst_26675 = (state_26743[(29)]);
var inst_26729 = (state_26743[(2)]);
var inst_26730 = cljs.core.seq.call(null,inst_26675);
var state_26743__$1 = (function (){var statearr_26808 = state_26743;
(statearr_26808[(31)] = inst_26729);

return statearr_26808;
})();
if(inst_26730){
var statearr_26809_26873 = state_26743__$1;
(statearr_26809_26873[(1)] = (42));

} else {
var statearr_26810_26874 = state_26743__$1;
(statearr_26810_26874[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26744 === (16))){
var inst_26644 = (state_26743[(7)]);
var inst_26646 = cljs.core.chunked_seq_QMARK_.call(null,inst_26644);
var state_26743__$1 = state_26743;
if(inst_26646){
var statearr_26811_26875 = state_26743__$1;
(statearr_26811_26875[(1)] = (19));

} else {
var statearr_26812_26876 = state_26743__$1;
(statearr_26812_26876[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26744 === (38))){
var inst_26722 = (state_26743[(2)]);
var state_26743__$1 = state_26743;
var statearr_26813_26877 = state_26743__$1;
(statearr_26813_26877[(2)] = inst_26722);

(statearr_26813_26877[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26744 === (30))){
var state_26743__$1 = state_26743;
var statearr_26814_26878 = state_26743__$1;
(statearr_26814_26878[(2)] = null);

(statearr_26814_26878[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26744 === (10))){
var inst_26625 = (state_26743[(16)]);
var inst_26627 = (state_26743[(17)]);
var inst_26633 = cljs.core._nth.call(null,inst_26625,inst_26627);
var inst_26634 = cljs.core.nth.call(null,inst_26633,(0),null);
var inst_26635 = cljs.core.nth.call(null,inst_26633,(1),null);
var state_26743__$1 = (function (){var statearr_26815 = state_26743;
(statearr_26815[(26)] = inst_26634);

return statearr_26815;
})();
if(cljs.core.truth_(inst_26635)){
var statearr_26816_26879 = state_26743__$1;
(statearr_26816_26879[(1)] = (13));

} else {
var statearr_26817_26880 = state_26743__$1;
(statearr_26817_26880[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26744 === (18))){
var inst_26668 = (state_26743[(2)]);
var state_26743__$1 = state_26743;
var statearr_26818_26881 = state_26743__$1;
(statearr_26818_26881[(2)] = inst_26668);

(statearr_26818_26881[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26744 === (42))){
var state_26743__$1 = state_26743;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26743__$1,(45),dchan);
} else {
if((state_val_26744 === (37))){
var inst_26702 = (state_26743[(25)]);
var inst_26615 = (state_26743[(12)]);
var inst_26711 = (state_26743[(23)]);
var inst_26711__$1 = cljs.core.first.call(null,inst_26702);
var inst_26712 = cljs.core.async.put_BANG_.call(null,inst_26711__$1,inst_26615,done);
var state_26743__$1 = (function (){var statearr_26819 = state_26743;
(statearr_26819[(23)] = inst_26711__$1);

return statearr_26819;
})();
if(cljs.core.truth_(inst_26712)){
var statearr_26820_26882 = state_26743__$1;
(statearr_26820_26882[(1)] = (39));

} else {
var statearr_26821_26883 = state_26743__$1;
(statearr_26821_26883[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26744 === (8))){
var inst_26626 = (state_26743[(13)]);
var inst_26627 = (state_26743[(17)]);
var inst_26629 = (inst_26627 < inst_26626);
var inst_26630 = inst_26629;
var state_26743__$1 = state_26743;
if(cljs.core.truth_(inst_26630)){
var statearr_26822_26884 = state_26743__$1;
(statearr_26822_26884[(1)] = (10));

} else {
var statearr_26823_26885 = state_26743__$1;
(statearr_26823_26885[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__20748__auto___26831,cs,m,dchan,dctr,done))
;
return ((function (switch__20692__auto__,c__20748__auto___26831,cs,m,dchan,dctr,done){
return (function() {
var state_machine__20693__auto__ = null;
var state_machine__20693__auto____0 = (function (){
var statearr_26827 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26827[(0)] = state_machine__20693__auto__);

(statearr_26827[(1)] = (1));

return statearr_26827;
});
var state_machine__20693__auto____1 = (function (state_26743){
while(true){
var ret_value__20694__auto__ = (function (){try{while(true){
var result__20695__auto__ = switch__20692__auto__.call(null,state_26743);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20695__auto__;
}
break;
}
}catch (e26828){if((e26828 instanceof Object)){
var ex__20696__auto__ = e26828;
var statearr_26829_26886 = state_26743;
(statearr_26829_26886[(5)] = ex__20696__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26743);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26828;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26887 = state_26743;
state_26743 = G__26887;
continue;
} else {
return ret_value__20694__auto__;
}
break;
}
});
state_machine__20693__auto__ = function(state_26743){
switch(arguments.length){
case 0:
return state_machine__20693__auto____0.call(this);
case 1:
return state_machine__20693__auto____1.call(this,state_26743);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20693__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20693__auto____0;
state_machine__20693__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20693__auto____1;
return state_machine__20693__auto__;
})()
;})(switch__20692__auto__,c__20748__auto___26831,cs,m,dchan,dctr,done))
})();
var state__20750__auto__ = (function (){var statearr_26830 = f__20749__auto__.call(null);
(statearr_26830[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20748__auto___26831);

return statearr_26830;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20750__auto__);
});})(c__20748__auto___26831,cs,m,dchan,dctr,done))
);


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
var tap__2 = (function (mult,ch){
return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

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
cljs.core.async.untap = (function untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj26889 = {};
return obj26889;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__11617__auto__ = m;
if(and__11617__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__11617__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__12273__auto__ = (((m == null))?null:m);
return (function (){var or__11629__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__12273__auto__)]);
if(or__11629__auto__){
return or__11629__auto__;
} else {
var or__11629__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__11629__auto____$1){
return or__11629__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__11617__auto__ = m;
if(and__11617__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__11617__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__12273__auto__ = (((m == null))?null:m);
return (function (){var or__11629__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__12273__auto__)]);
if(or__11629__auto__){
return or__11629__auto__;
} else {
var or__11629__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__11629__auto____$1){
return or__11629__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__11617__auto__ = m;
if(and__11617__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__11617__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__12273__auto__ = (((m == null))?null:m);
return (function (){var or__11629__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__12273__auto__)]);
if(or__11629__auto__){
return or__11629__auto__;
} else {
var or__11629__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__11629__auto____$1){
return or__11629__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__11617__auto__ = m;
if(and__11617__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__11617__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__12273__auto__ = (((m == null))?null:m);
return (function (){var or__11629__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__12273__auto__)]);
if(or__11629__auto__){
return or__11629__auto__;
} else {
var or__11629__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__11629__auto____$1){
return or__11629__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__11617__auto__ = m;
if(and__11617__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__11617__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__12273__auto__ = (((m == null))?null:m);
return (function (){var or__11629__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__12273__auto__)]);
if(or__11629__auto__){
return or__11629__auto__;
} else {
var or__11629__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__11629__auto____$1){
return or__11629__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

/**
* @param {...*} var_args
*/
cljs.core.async.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__26890){
var map__26895 = p__26890;
var map__26895__$1 = ((cljs.core.seq_QMARK_.call(null,map__26895))?cljs.core.apply.call(null,cljs.core.hash_map,map__26895):map__26895);
var opts = map__26895__$1;
var statearr_26896_26899 = state;
(statearr_26896_26899[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__26895,map__26895__$1,opts){
return (function (val){
var statearr_26897_26900 = state;
(statearr_26897_26900[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__26895,map__26895__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_26898_26901 = state;
(statearr_26898_26901[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__26890 = null;
if (arguments.length > 3) {
var G__26902__i = 0, G__26902__a = new Array(arguments.length -  3);
while (G__26902__i < G__26902__a.length) {G__26902__a[G__26902__i] = arguments[G__26902__i + 3]; ++G__26902__i;}
  p__26890 = new cljs.core.IndexedSeq(G__26902__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__26890);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__26903){
var state = cljs.core.first(arglist__26903);
arglist__26903 = cljs.core.next(arglist__26903);
var cont_block = cljs.core.first(arglist__26903);
arglist__26903 = cljs.core.next(arglist__26903);
var ports = cljs.core.first(arglist__26903);
var p__26890 = cljs.core.rest(arglist__26903);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__26890);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
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
cljs.core.async.mix = (function mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t27023 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27023 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta27024){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta27024 = meta27024;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27023.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t27023.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27023.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27023.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27023.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27023.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27023.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t27023.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27023.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27025){
var self__ = this;
var _27025__$1 = this;
return self__.meta27024;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27023.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27025,meta27024__$1){
var self__ = this;
var _27025__$1 = this;
return (new cljs.core.async.t27023(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta27024__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27023.cljs$lang$type = true;

cljs.core.async.t27023.cljs$lang$ctorStr = "cljs.core.async/t27023";

cljs.core.async.t27023.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__12216__auto__,writer__12217__auto__,opt__12218__auto__){
return cljs.core._write.call(null,writer__12217__auto__,"cljs.core.async/t27023");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t27023 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t27023(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27024){
return (new cljs.core.async.t27023(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27024));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t27023(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/odinholestandal/git/odin/canvas-fn/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__20748__auto___27142 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20748__auto___27142,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__20749__auto__ = (function (){var switch__20692__auto__ = ((function (c__20748__auto___27142,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_27095){
var state_val_27096 = (state_27095[(1)]);
if((state_val_27096 === (7))){
var inst_27039 = (state_27095[(7)]);
var inst_27044 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27039);
var state_27095__$1 = state_27095;
var statearr_27097_27143 = state_27095__$1;
(statearr_27097_27143[(2)] = inst_27044);

(statearr_27097_27143[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27096 === (20))){
var inst_27054 = (state_27095[(8)]);
var state_27095__$1 = state_27095;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27095__$1,(23),out,inst_27054);
} else {
if((state_val_27096 === (1))){
var inst_27029 = (state_27095[(9)]);
var inst_27029__$1 = calc_state.call(null);
var inst_27030 = cljs.core.seq_QMARK_.call(null,inst_27029__$1);
var state_27095__$1 = (function (){var statearr_27098 = state_27095;
(statearr_27098[(9)] = inst_27029__$1);

return statearr_27098;
})();
if(inst_27030){
var statearr_27099_27144 = state_27095__$1;
(statearr_27099_27144[(1)] = (2));

} else {
var statearr_27100_27145 = state_27095__$1;
(statearr_27100_27145[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27096 === (24))){
var inst_27047 = (state_27095[(10)]);
var inst_27039 = inst_27047;
var state_27095__$1 = (function (){var statearr_27101 = state_27095;
(statearr_27101[(7)] = inst_27039);

return statearr_27101;
})();
var statearr_27102_27146 = state_27095__$1;
(statearr_27102_27146[(2)] = null);

(statearr_27102_27146[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27096 === (4))){
var inst_27029 = (state_27095[(9)]);
var inst_27035 = (state_27095[(2)]);
var inst_27036 = cljs.core.get.call(null,inst_27035,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27037 = cljs.core.get.call(null,inst_27035,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27038 = cljs.core.get.call(null,inst_27035,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27039 = inst_27029;
var state_27095__$1 = (function (){var statearr_27103 = state_27095;
(statearr_27103[(11)] = inst_27037);

(statearr_27103[(7)] = inst_27039);

(statearr_27103[(12)] = inst_27038);

(statearr_27103[(13)] = inst_27036);

return statearr_27103;
})();
var statearr_27104_27147 = state_27095__$1;
(statearr_27104_27147[(2)] = null);

(statearr_27104_27147[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27096 === (15))){
var state_27095__$1 = state_27095;
var statearr_27105_27148 = state_27095__$1;
(statearr_27105_27148[(2)] = null);

(statearr_27105_27148[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27096 === (21))){
var inst_27047 = (state_27095[(10)]);
var inst_27039 = inst_27047;
var state_27095__$1 = (function (){var statearr_27106 = state_27095;
(statearr_27106[(7)] = inst_27039);

return statearr_27106;
})();
var statearr_27107_27149 = state_27095__$1;
(statearr_27107_27149[(2)] = null);

(statearr_27107_27149[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27096 === (13))){
var inst_27091 = (state_27095[(2)]);
var state_27095__$1 = state_27095;
var statearr_27108_27150 = state_27095__$1;
(statearr_27108_27150[(2)] = inst_27091);

(statearr_27108_27150[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27096 === (22))){
var inst_27089 = (state_27095[(2)]);
var state_27095__$1 = state_27095;
var statearr_27109_27151 = state_27095__$1;
(statearr_27109_27151[(2)] = inst_27089);

(statearr_27109_27151[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27096 === (6))){
var inst_27093 = (state_27095[(2)]);
var state_27095__$1 = state_27095;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27095__$1,inst_27093);
} else {
if((state_val_27096 === (25))){
var state_27095__$1 = state_27095;
var statearr_27110_27152 = state_27095__$1;
(statearr_27110_27152[(2)] = null);

(statearr_27110_27152[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27096 === (17))){
var inst_27069 = (state_27095[(14)]);
var state_27095__$1 = state_27095;
var statearr_27111_27153 = state_27095__$1;
(statearr_27111_27153[(2)] = inst_27069);

(statearr_27111_27153[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27096 === (3))){
var inst_27029 = (state_27095[(9)]);
var state_27095__$1 = state_27095;
var statearr_27112_27154 = state_27095__$1;
(statearr_27112_27154[(2)] = inst_27029);

(statearr_27112_27154[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27096 === (12))){
var inst_27050 = (state_27095[(15)]);
var inst_27055 = (state_27095[(16)]);
var inst_27069 = (state_27095[(14)]);
var inst_27069__$1 = inst_27050.call(null,inst_27055);
var state_27095__$1 = (function (){var statearr_27113 = state_27095;
(statearr_27113[(14)] = inst_27069__$1);

return statearr_27113;
})();
if(cljs.core.truth_(inst_27069__$1)){
var statearr_27114_27155 = state_27095__$1;
(statearr_27114_27155[(1)] = (17));

} else {
var statearr_27115_27156 = state_27095__$1;
(statearr_27115_27156[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27096 === (2))){
var inst_27029 = (state_27095[(9)]);
var inst_27032 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27029);
var state_27095__$1 = state_27095;
var statearr_27116_27157 = state_27095__$1;
(statearr_27116_27157[(2)] = inst_27032);

(statearr_27116_27157[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27096 === (23))){
var inst_27080 = (state_27095[(2)]);
var state_27095__$1 = state_27095;
if(cljs.core.truth_(inst_27080)){
var statearr_27117_27158 = state_27095__$1;
(statearr_27117_27158[(1)] = (24));

} else {
var statearr_27118_27159 = state_27095__$1;
(statearr_27118_27159[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27096 === (19))){
var inst_27077 = (state_27095[(2)]);
var state_27095__$1 = state_27095;
if(cljs.core.truth_(inst_27077)){
var statearr_27119_27160 = state_27095__$1;
(statearr_27119_27160[(1)] = (20));

} else {
var statearr_27120_27161 = state_27095__$1;
(statearr_27120_27161[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27096 === (11))){
var inst_27054 = (state_27095[(8)]);
var inst_27060 = (inst_27054 == null);
var state_27095__$1 = state_27095;
if(cljs.core.truth_(inst_27060)){
var statearr_27121_27162 = state_27095__$1;
(statearr_27121_27162[(1)] = (14));

} else {
var statearr_27122_27163 = state_27095__$1;
(statearr_27122_27163[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27096 === (9))){
var inst_27047 = (state_27095[(10)]);
var inst_27047__$1 = (state_27095[(2)]);
var inst_27048 = cljs.core.get.call(null,inst_27047__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27049 = cljs.core.get.call(null,inst_27047__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27050 = cljs.core.get.call(null,inst_27047__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_27095__$1 = (function (){var statearr_27123 = state_27095;
(statearr_27123[(15)] = inst_27050);

(statearr_27123[(10)] = inst_27047__$1);

(statearr_27123[(17)] = inst_27049);

return statearr_27123;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_27095__$1,(10),inst_27048);
} else {
if((state_val_27096 === (5))){
var inst_27039 = (state_27095[(7)]);
var inst_27042 = cljs.core.seq_QMARK_.call(null,inst_27039);
var state_27095__$1 = state_27095;
if(inst_27042){
var statearr_27124_27164 = state_27095__$1;
(statearr_27124_27164[(1)] = (7));

} else {
var statearr_27125_27165 = state_27095__$1;
(statearr_27125_27165[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27096 === (14))){
var inst_27055 = (state_27095[(16)]);
var inst_27062 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27055);
var state_27095__$1 = state_27095;
var statearr_27126_27166 = state_27095__$1;
(statearr_27126_27166[(2)] = inst_27062);

(statearr_27126_27166[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27096 === (26))){
var inst_27085 = (state_27095[(2)]);
var state_27095__$1 = state_27095;
var statearr_27127_27167 = state_27095__$1;
(statearr_27127_27167[(2)] = inst_27085);

(statearr_27127_27167[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27096 === (16))){
var inst_27065 = (state_27095[(2)]);
var inst_27066 = calc_state.call(null);
var inst_27039 = inst_27066;
var state_27095__$1 = (function (){var statearr_27128 = state_27095;
(statearr_27128[(7)] = inst_27039);

(statearr_27128[(18)] = inst_27065);

return statearr_27128;
})();
var statearr_27129_27168 = state_27095__$1;
(statearr_27129_27168[(2)] = null);

(statearr_27129_27168[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27096 === (10))){
var inst_27055 = (state_27095[(16)]);
var inst_27054 = (state_27095[(8)]);
var inst_27053 = (state_27095[(2)]);
var inst_27054__$1 = cljs.core.nth.call(null,inst_27053,(0),null);
var inst_27055__$1 = cljs.core.nth.call(null,inst_27053,(1),null);
var inst_27056 = (inst_27054__$1 == null);
var inst_27057 = cljs.core._EQ_.call(null,inst_27055__$1,change);
var inst_27058 = (inst_27056) || (inst_27057);
var state_27095__$1 = (function (){var statearr_27130 = state_27095;
(statearr_27130[(16)] = inst_27055__$1);

(statearr_27130[(8)] = inst_27054__$1);

return statearr_27130;
})();
if(cljs.core.truth_(inst_27058)){
var statearr_27131_27169 = state_27095__$1;
(statearr_27131_27169[(1)] = (11));

} else {
var statearr_27132_27170 = state_27095__$1;
(statearr_27132_27170[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27096 === (18))){
var inst_27050 = (state_27095[(15)]);
var inst_27055 = (state_27095[(16)]);
var inst_27049 = (state_27095[(17)]);
var inst_27072 = cljs.core.empty_QMARK_.call(null,inst_27050);
var inst_27073 = inst_27049.call(null,inst_27055);
var inst_27074 = cljs.core.not.call(null,inst_27073);
var inst_27075 = (inst_27072) && (inst_27074);
var state_27095__$1 = state_27095;
var statearr_27133_27171 = state_27095__$1;
(statearr_27133_27171[(2)] = inst_27075);

(statearr_27133_27171[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27096 === (8))){
var inst_27039 = (state_27095[(7)]);
var state_27095__$1 = state_27095;
var statearr_27134_27172 = state_27095__$1;
(statearr_27134_27172[(2)] = inst_27039);

(statearr_27134_27172[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__20748__auto___27142,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__20692__auto__,c__20748__auto___27142,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__20693__auto__ = null;
var state_machine__20693__auto____0 = (function (){
var statearr_27138 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27138[(0)] = state_machine__20693__auto__);

(statearr_27138[(1)] = (1));

return statearr_27138;
});
var state_machine__20693__auto____1 = (function (state_27095){
while(true){
var ret_value__20694__auto__ = (function (){try{while(true){
var result__20695__auto__ = switch__20692__auto__.call(null,state_27095);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20695__auto__;
}
break;
}
}catch (e27139){if((e27139 instanceof Object)){
var ex__20696__auto__ = e27139;
var statearr_27140_27173 = state_27095;
(statearr_27140_27173[(5)] = ex__20696__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27095);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27139;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27174 = state_27095;
state_27095 = G__27174;
continue;
} else {
return ret_value__20694__auto__;
}
break;
}
});
state_machine__20693__auto__ = function(state_27095){
switch(arguments.length){
case 0:
return state_machine__20693__auto____0.call(this);
case 1:
return state_machine__20693__auto____1.call(this,state_27095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20693__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20693__auto____0;
state_machine__20693__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20693__auto____1;
return state_machine__20693__auto__;
})()
;})(switch__20692__auto__,c__20748__auto___27142,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__20750__auto__ = (function (){var statearr_27141 = f__20749__auto__.call(null);
(statearr_27141[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20748__auto___27142);

return statearr_27141;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20750__auto__);
});})(c__20748__auto___27142,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
cljs.core.async.toggle = (function toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj27176 = {};
return obj27176;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__11617__auto__ = p;
if(and__11617__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__11617__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__12273__auto__ = (((p == null))?null:p);
return (function (){var or__11629__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__12273__auto__)]);
if(or__11629__auto__){
return or__11629__auto__;
} else {
var or__11629__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__11629__auto____$1){
return or__11629__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__11617__auto__ = p;
if(and__11617__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__11617__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__12273__auto__ = (((p == null))?null:p);
return (function (){var or__11629__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__12273__auto__)]);
if(or__11629__auto__){
return or__11629__auto__;
} else {
var or__11629__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__11629__auto____$1){
return or__11629__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){
if((function (){var and__11617__auto__ = p;
if(and__11617__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__11617__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__12273__auto__ = (((p == null))?null:p);
return (function (){var or__11629__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__12273__auto__)]);
if(or__11629__auto__){
return or__11629__auto__;
} else {
var or__11629__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__11629__auto____$1){
return or__11629__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__11617__auto__ = p;
if(and__11617__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__11617__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__12273__auto__ = (((p == null))?null:p);
return (function (){var or__11629__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__12273__auto__)]);
if(or__11629__auto__){
return or__11629__auto__;
} else {
var or__11629__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__11629__auto____$1){
return or__11629__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
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
var pub__2 = (function (ch,topic_fn){
return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__11629__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__11629__auto__)){
return or__11629__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__11629__auto__,mults){
return (function (p1__27177_SHARP_){
if(cljs.core.truth_(p1__27177_SHARP_.call(null,topic))){
return p1__27177_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__27177_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__11629__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t27300 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27300 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta27301){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta27301 = meta27301;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27300.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t27300.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t27300.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t27300.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t27300.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t27300.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t27300.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t27300.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_27302){
var self__ = this;
var _27302__$1 = this;
return self__.meta27301;
});})(mults,ensure_mult))
;

cljs.core.async.t27300.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_27302,meta27301__$1){
var self__ = this;
var _27302__$1 = this;
return (new cljs.core.async.t27300(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta27301__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t27300.cljs$lang$type = true;

cljs.core.async.t27300.cljs$lang$ctorStr = "cljs.core.async/t27300";

cljs.core.async.t27300.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__12216__auto__,writer__12217__auto__,opt__12218__auto__){
return cljs.core._write.call(null,writer__12217__auto__,"cljs.core.async/t27300");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t27300 = ((function (mults,ensure_mult){
return (function __GT_t27300(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta27301){
return (new cljs.core.async.t27300(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta27301));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t27300(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/odinholestandal/git/odin/canvas-fn/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__20748__auto___27422 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20748__auto___27422,mults,ensure_mult,p){
return (function (){
var f__20749__auto__ = (function (){var switch__20692__auto__ = ((function (c__20748__auto___27422,mults,ensure_mult,p){
return (function (state_27374){
var state_val_27375 = (state_27374[(1)]);
if((state_val_27375 === (7))){
var inst_27370 = (state_27374[(2)]);
var state_27374__$1 = state_27374;
var statearr_27376_27423 = state_27374__$1;
(statearr_27376_27423[(2)] = inst_27370);

(statearr_27376_27423[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27375 === (20))){
var state_27374__$1 = state_27374;
var statearr_27377_27424 = state_27374__$1;
(statearr_27377_27424[(2)] = null);

(statearr_27377_27424[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27375 === (1))){
var state_27374__$1 = state_27374;
var statearr_27378_27425 = state_27374__$1;
(statearr_27378_27425[(2)] = null);

(statearr_27378_27425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27375 === (24))){
var inst_27353 = (state_27374[(7)]);
var inst_27362 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_27353);
var state_27374__$1 = state_27374;
var statearr_27379_27426 = state_27374__$1;
(statearr_27379_27426[(2)] = inst_27362);

(statearr_27379_27426[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27375 === (4))){
var inst_27305 = (state_27374[(8)]);
var inst_27305__$1 = (state_27374[(2)]);
var inst_27306 = (inst_27305__$1 == null);
var state_27374__$1 = (function (){var statearr_27380 = state_27374;
(statearr_27380[(8)] = inst_27305__$1);

return statearr_27380;
})();
if(cljs.core.truth_(inst_27306)){
var statearr_27381_27427 = state_27374__$1;
(statearr_27381_27427[(1)] = (5));

} else {
var statearr_27382_27428 = state_27374__$1;
(statearr_27382_27428[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27375 === (15))){
var inst_27347 = (state_27374[(2)]);
var state_27374__$1 = state_27374;
var statearr_27383_27429 = state_27374__$1;
(statearr_27383_27429[(2)] = inst_27347);

(statearr_27383_27429[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27375 === (21))){
var inst_27367 = (state_27374[(2)]);
var state_27374__$1 = (function (){var statearr_27384 = state_27374;
(statearr_27384[(9)] = inst_27367);

return statearr_27384;
})();
var statearr_27385_27430 = state_27374__$1;
(statearr_27385_27430[(2)] = null);

(statearr_27385_27430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27375 === (13))){
var inst_27329 = (state_27374[(10)]);
var inst_27331 = cljs.core.chunked_seq_QMARK_.call(null,inst_27329);
var state_27374__$1 = state_27374;
if(inst_27331){
var statearr_27386_27431 = state_27374__$1;
(statearr_27386_27431[(1)] = (16));

} else {
var statearr_27387_27432 = state_27374__$1;
(statearr_27387_27432[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27375 === (22))){
var inst_27359 = (state_27374[(2)]);
var state_27374__$1 = state_27374;
if(cljs.core.truth_(inst_27359)){
var statearr_27388_27433 = state_27374__$1;
(statearr_27388_27433[(1)] = (23));

} else {
var statearr_27389_27434 = state_27374__$1;
(statearr_27389_27434[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27375 === (6))){
var inst_27355 = (state_27374[(11)]);
var inst_27353 = (state_27374[(7)]);
var inst_27305 = (state_27374[(8)]);
var inst_27353__$1 = topic_fn.call(null,inst_27305);
var inst_27354 = cljs.core.deref.call(null,mults);
var inst_27355__$1 = cljs.core.get.call(null,inst_27354,inst_27353__$1);
var state_27374__$1 = (function (){var statearr_27390 = state_27374;
(statearr_27390[(11)] = inst_27355__$1);

(statearr_27390[(7)] = inst_27353__$1);

return statearr_27390;
})();
if(cljs.core.truth_(inst_27355__$1)){
var statearr_27391_27435 = state_27374__$1;
(statearr_27391_27435[(1)] = (19));

} else {
var statearr_27392_27436 = state_27374__$1;
(statearr_27392_27436[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27375 === (25))){
var inst_27364 = (state_27374[(2)]);
var state_27374__$1 = state_27374;
var statearr_27393_27437 = state_27374__$1;
(statearr_27393_27437[(2)] = inst_27364);

(statearr_27393_27437[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27375 === (17))){
var inst_27329 = (state_27374[(10)]);
var inst_27338 = cljs.core.first.call(null,inst_27329);
var inst_27339 = cljs.core.async.muxch_STAR_.call(null,inst_27338);
var inst_27340 = cljs.core.async.close_BANG_.call(null,inst_27339);
var inst_27341 = cljs.core.next.call(null,inst_27329);
var inst_27315 = inst_27341;
var inst_27316 = null;
var inst_27317 = (0);
var inst_27318 = (0);
var state_27374__$1 = (function (){var statearr_27394 = state_27374;
(statearr_27394[(12)] = inst_27318);

(statearr_27394[(13)] = inst_27316);

(statearr_27394[(14)] = inst_27317);

(statearr_27394[(15)] = inst_27315);

(statearr_27394[(16)] = inst_27340);

return statearr_27394;
})();
var statearr_27395_27438 = state_27374__$1;
(statearr_27395_27438[(2)] = null);

(statearr_27395_27438[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27375 === (3))){
var inst_27372 = (state_27374[(2)]);
var state_27374__$1 = state_27374;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27374__$1,inst_27372);
} else {
if((state_val_27375 === (12))){
var inst_27349 = (state_27374[(2)]);
var state_27374__$1 = state_27374;
var statearr_27396_27439 = state_27374__$1;
(statearr_27396_27439[(2)] = inst_27349);

(statearr_27396_27439[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27375 === (2))){
var state_27374__$1 = state_27374;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27374__$1,(4),ch);
} else {
if((state_val_27375 === (23))){
var state_27374__$1 = state_27374;
var statearr_27397_27440 = state_27374__$1;
(statearr_27397_27440[(2)] = null);

(statearr_27397_27440[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27375 === (19))){
var inst_27355 = (state_27374[(11)]);
var inst_27305 = (state_27374[(8)]);
var inst_27357 = cljs.core.async.muxch_STAR_.call(null,inst_27355);
var state_27374__$1 = state_27374;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27374__$1,(22),inst_27357,inst_27305);
} else {
if((state_val_27375 === (11))){
var inst_27329 = (state_27374[(10)]);
var inst_27315 = (state_27374[(15)]);
var inst_27329__$1 = cljs.core.seq.call(null,inst_27315);
var state_27374__$1 = (function (){var statearr_27398 = state_27374;
(statearr_27398[(10)] = inst_27329__$1);

return statearr_27398;
})();
if(inst_27329__$1){
var statearr_27399_27441 = state_27374__$1;
(statearr_27399_27441[(1)] = (13));

} else {
var statearr_27400_27442 = state_27374__$1;
(statearr_27400_27442[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27375 === (9))){
var inst_27351 = (state_27374[(2)]);
var state_27374__$1 = state_27374;
var statearr_27401_27443 = state_27374__$1;
(statearr_27401_27443[(2)] = inst_27351);

(statearr_27401_27443[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27375 === (5))){
var inst_27312 = cljs.core.deref.call(null,mults);
var inst_27313 = cljs.core.vals.call(null,inst_27312);
var inst_27314 = cljs.core.seq.call(null,inst_27313);
var inst_27315 = inst_27314;
var inst_27316 = null;
var inst_27317 = (0);
var inst_27318 = (0);
var state_27374__$1 = (function (){var statearr_27402 = state_27374;
(statearr_27402[(12)] = inst_27318);

(statearr_27402[(13)] = inst_27316);

(statearr_27402[(14)] = inst_27317);

(statearr_27402[(15)] = inst_27315);

return statearr_27402;
})();
var statearr_27403_27444 = state_27374__$1;
(statearr_27403_27444[(2)] = null);

(statearr_27403_27444[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27375 === (14))){
var state_27374__$1 = state_27374;
var statearr_27407_27445 = state_27374__$1;
(statearr_27407_27445[(2)] = null);

(statearr_27407_27445[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27375 === (16))){
var inst_27329 = (state_27374[(10)]);
var inst_27333 = cljs.core.chunk_first.call(null,inst_27329);
var inst_27334 = cljs.core.chunk_rest.call(null,inst_27329);
var inst_27335 = cljs.core.count.call(null,inst_27333);
var inst_27315 = inst_27334;
var inst_27316 = inst_27333;
var inst_27317 = inst_27335;
var inst_27318 = (0);
var state_27374__$1 = (function (){var statearr_27408 = state_27374;
(statearr_27408[(12)] = inst_27318);

(statearr_27408[(13)] = inst_27316);

(statearr_27408[(14)] = inst_27317);

(statearr_27408[(15)] = inst_27315);

return statearr_27408;
})();
var statearr_27409_27446 = state_27374__$1;
(statearr_27409_27446[(2)] = null);

(statearr_27409_27446[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27375 === (10))){
var inst_27318 = (state_27374[(12)]);
var inst_27316 = (state_27374[(13)]);
var inst_27317 = (state_27374[(14)]);
var inst_27315 = (state_27374[(15)]);
var inst_27323 = cljs.core._nth.call(null,inst_27316,inst_27318);
var inst_27324 = cljs.core.async.muxch_STAR_.call(null,inst_27323);
var inst_27325 = cljs.core.async.close_BANG_.call(null,inst_27324);
var inst_27326 = (inst_27318 + (1));
var tmp27404 = inst_27316;
var tmp27405 = inst_27317;
var tmp27406 = inst_27315;
var inst_27315__$1 = tmp27406;
var inst_27316__$1 = tmp27404;
var inst_27317__$1 = tmp27405;
var inst_27318__$1 = inst_27326;
var state_27374__$1 = (function (){var statearr_27410 = state_27374;
(statearr_27410[(17)] = inst_27325);

(statearr_27410[(12)] = inst_27318__$1);

(statearr_27410[(13)] = inst_27316__$1);

(statearr_27410[(14)] = inst_27317__$1);

(statearr_27410[(15)] = inst_27315__$1);

return statearr_27410;
})();
var statearr_27411_27447 = state_27374__$1;
(statearr_27411_27447[(2)] = null);

(statearr_27411_27447[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27375 === (18))){
var inst_27344 = (state_27374[(2)]);
var state_27374__$1 = state_27374;
var statearr_27412_27448 = state_27374__$1;
(statearr_27412_27448[(2)] = inst_27344);

(statearr_27412_27448[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27375 === (8))){
var inst_27318 = (state_27374[(12)]);
var inst_27317 = (state_27374[(14)]);
var inst_27320 = (inst_27318 < inst_27317);
var inst_27321 = inst_27320;
var state_27374__$1 = state_27374;
if(cljs.core.truth_(inst_27321)){
var statearr_27413_27449 = state_27374__$1;
(statearr_27413_27449[(1)] = (10));

} else {
var statearr_27414_27450 = state_27374__$1;
(statearr_27414_27450[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__20748__auto___27422,mults,ensure_mult,p))
;
return ((function (switch__20692__auto__,c__20748__auto___27422,mults,ensure_mult,p){
return (function() {
var state_machine__20693__auto__ = null;
var state_machine__20693__auto____0 = (function (){
var statearr_27418 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27418[(0)] = state_machine__20693__auto__);

(statearr_27418[(1)] = (1));

return statearr_27418;
});
var state_machine__20693__auto____1 = (function (state_27374){
while(true){
var ret_value__20694__auto__ = (function (){try{while(true){
var result__20695__auto__ = switch__20692__auto__.call(null,state_27374);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20695__auto__;
}
break;
}
}catch (e27419){if((e27419 instanceof Object)){
var ex__20696__auto__ = e27419;
var statearr_27420_27451 = state_27374;
(statearr_27420_27451[(5)] = ex__20696__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27374);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27419;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27452 = state_27374;
state_27374 = G__27452;
continue;
} else {
return ret_value__20694__auto__;
}
break;
}
});
state_machine__20693__auto__ = function(state_27374){
switch(arguments.length){
case 0:
return state_machine__20693__auto____0.call(this);
case 1:
return state_machine__20693__auto____1.call(this,state_27374);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20693__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20693__auto____0;
state_machine__20693__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20693__auto____1;
return state_machine__20693__auto__;
})()
;})(switch__20692__auto__,c__20748__auto___27422,mults,ensure_mult,p))
})();
var state__20750__auto__ = (function (){var statearr_27421 = f__20749__auto__.call(null);
(statearr_27421[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20748__auto___27422);

return statearr_27421;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20750__auto__);
});})(c__20748__auto___27422,mults,ensure_mult,p))
);


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
var sub__3 = (function (p,topic,ch){
return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
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
cljs.core.async.unsub = (function unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
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
var map__2 = (function (f,chs){
return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__20748__auto___27589 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20748__auto___27589,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__20749__auto__ = (function (){var switch__20692__auto__ = ((function (c__20748__auto___27589,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_27559){
var state_val_27560 = (state_27559[(1)]);
if((state_val_27560 === (7))){
var state_27559__$1 = state_27559;
var statearr_27561_27590 = state_27559__$1;
(statearr_27561_27590[(2)] = null);

(statearr_27561_27590[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27560 === (1))){
var state_27559__$1 = state_27559;
var statearr_27562_27591 = state_27559__$1;
(statearr_27562_27591[(2)] = null);

(statearr_27562_27591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27560 === (4))){
var inst_27523 = (state_27559[(7)]);
var inst_27525 = (inst_27523 < cnt);
var state_27559__$1 = state_27559;
if(cljs.core.truth_(inst_27525)){
var statearr_27563_27592 = state_27559__$1;
(statearr_27563_27592[(1)] = (6));

} else {
var statearr_27564_27593 = state_27559__$1;
(statearr_27564_27593[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27560 === (15))){
var inst_27555 = (state_27559[(2)]);
var state_27559__$1 = state_27559;
var statearr_27565_27594 = state_27559__$1;
(statearr_27565_27594[(2)] = inst_27555);

(statearr_27565_27594[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27560 === (13))){
var inst_27548 = cljs.core.async.close_BANG_.call(null,out);
var state_27559__$1 = state_27559;
var statearr_27566_27595 = state_27559__$1;
(statearr_27566_27595[(2)] = inst_27548);

(statearr_27566_27595[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27560 === (6))){
var state_27559__$1 = state_27559;
var statearr_27567_27596 = state_27559__$1;
(statearr_27567_27596[(2)] = null);

(statearr_27567_27596[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27560 === (3))){
var inst_27557 = (state_27559[(2)]);
var state_27559__$1 = state_27559;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27559__$1,inst_27557);
} else {
if((state_val_27560 === (12))){
var inst_27545 = (state_27559[(8)]);
var inst_27545__$1 = (state_27559[(2)]);
var inst_27546 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_27545__$1);
var state_27559__$1 = (function (){var statearr_27568 = state_27559;
(statearr_27568[(8)] = inst_27545__$1);

return statearr_27568;
})();
if(cljs.core.truth_(inst_27546)){
var statearr_27569_27597 = state_27559__$1;
(statearr_27569_27597[(1)] = (13));

} else {
var statearr_27570_27598 = state_27559__$1;
(statearr_27570_27598[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27560 === (2))){
var inst_27522 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_27523 = (0);
var state_27559__$1 = (function (){var statearr_27571 = state_27559;
(statearr_27571[(9)] = inst_27522);

(statearr_27571[(7)] = inst_27523);

return statearr_27571;
})();
var statearr_27572_27599 = state_27559__$1;
(statearr_27572_27599[(2)] = null);

(statearr_27572_27599[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27560 === (11))){
var inst_27523 = (state_27559[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27559,(10),Object,null,(9));
var inst_27532 = chs__$1.call(null,inst_27523);
var inst_27533 = done.call(null,inst_27523);
var inst_27534 = cljs.core.async.take_BANG_.call(null,inst_27532,inst_27533);
var state_27559__$1 = state_27559;
var statearr_27573_27600 = state_27559__$1;
(statearr_27573_27600[(2)] = inst_27534);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27559__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27560 === (9))){
var inst_27523 = (state_27559[(7)]);
var inst_27536 = (state_27559[(2)]);
var inst_27537 = (inst_27523 + (1));
var inst_27523__$1 = inst_27537;
var state_27559__$1 = (function (){var statearr_27574 = state_27559;
(statearr_27574[(7)] = inst_27523__$1);

(statearr_27574[(10)] = inst_27536);

return statearr_27574;
})();
var statearr_27575_27601 = state_27559__$1;
(statearr_27575_27601[(2)] = null);

(statearr_27575_27601[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27560 === (5))){
var inst_27543 = (state_27559[(2)]);
var state_27559__$1 = (function (){var statearr_27576 = state_27559;
(statearr_27576[(11)] = inst_27543);

return statearr_27576;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27559__$1,(12),dchan);
} else {
if((state_val_27560 === (14))){
var inst_27545 = (state_27559[(8)]);
var inst_27550 = cljs.core.apply.call(null,f,inst_27545);
var state_27559__$1 = state_27559;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27559__$1,(16),out,inst_27550);
} else {
if((state_val_27560 === (16))){
var inst_27552 = (state_27559[(2)]);
var state_27559__$1 = (function (){var statearr_27577 = state_27559;
(statearr_27577[(12)] = inst_27552);

return statearr_27577;
})();
var statearr_27578_27602 = state_27559__$1;
(statearr_27578_27602[(2)] = null);

(statearr_27578_27602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27560 === (10))){
var inst_27527 = (state_27559[(2)]);
var inst_27528 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_27559__$1 = (function (){var statearr_27579 = state_27559;
(statearr_27579[(13)] = inst_27527);

return statearr_27579;
})();
var statearr_27580_27603 = state_27559__$1;
(statearr_27580_27603[(2)] = inst_27528);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27559__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27560 === (8))){
var inst_27541 = (state_27559[(2)]);
var state_27559__$1 = state_27559;
var statearr_27581_27604 = state_27559__$1;
(statearr_27581_27604[(2)] = inst_27541);

(statearr_27581_27604[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__20748__auto___27589,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__20692__auto__,c__20748__auto___27589,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__20693__auto__ = null;
var state_machine__20693__auto____0 = (function (){
var statearr_27585 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27585[(0)] = state_machine__20693__auto__);

(statearr_27585[(1)] = (1));

return statearr_27585;
});
var state_machine__20693__auto____1 = (function (state_27559){
while(true){
var ret_value__20694__auto__ = (function (){try{while(true){
var result__20695__auto__ = switch__20692__auto__.call(null,state_27559);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20695__auto__;
}
break;
}
}catch (e27586){if((e27586 instanceof Object)){
var ex__20696__auto__ = e27586;
var statearr_27587_27605 = state_27559;
(statearr_27587_27605[(5)] = ex__20696__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27559);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27586;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27606 = state_27559;
state_27559 = G__27606;
continue;
} else {
return ret_value__20694__auto__;
}
break;
}
});
state_machine__20693__auto__ = function(state_27559){
switch(arguments.length){
case 0:
return state_machine__20693__auto____0.call(this);
case 1:
return state_machine__20693__auto____1.call(this,state_27559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20693__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20693__auto____0;
state_machine__20693__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20693__auto____1;
return state_machine__20693__auto__;
})()
;})(switch__20692__auto__,c__20748__auto___27589,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__20750__auto__ = (function (){var statearr_27588 = f__20749__auto__.call(null);
(statearr_27588[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20748__auto___27589);

return statearr_27588;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20750__auto__);
});})(c__20748__auto___27589,chs__$1,out,cnt,rets,dchan,dctr,done))
);


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
var merge__1 = (function (chs){
return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20748__auto___27714 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20748__auto___27714,out){
return (function (){
var f__20749__auto__ = (function (){var switch__20692__auto__ = ((function (c__20748__auto___27714,out){
return (function (state_27690){
var state_val_27691 = (state_27690[(1)]);
if((state_val_27691 === (7))){
var inst_27670 = (state_27690[(7)]);
var inst_27669 = (state_27690[(8)]);
var inst_27669__$1 = (state_27690[(2)]);
var inst_27670__$1 = cljs.core.nth.call(null,inst_27669__$1,(0),null);
var inst_27671 = cljs.core.nth.call(null,inst_27669__$1,(1),null);
var inst_27672 = (inst_27670__$1 == null);
var state_27690__$1 = (function (){var statearr_27692 = state_27690;
(statearr_27692[(7)] = inst_27670__$1);

(statearr_27692[(8)] = inst_27669__$1);

(statearr_27692[(9)] = inst_27671);

return statearr_27692;
})();
if(cljs.core.truth_(inst_27672)){
var statearr_27693_27715 = state_27690__$1;
(statearr_27693_27715[(1)] = (8));

} else {
var statearr_27694_27716 = state_27690__$1;
(statearr_27694_27716[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27691 === (1))){
var inst_27661 = cljs.core.vec.call(null,chs);
var inst_27662 = inst_27661;
var state_27690__$1 = (function (){var statearr_27695 = state_27690;
(statearr_27695[(10)] = inst_27662);

return statearr_27695;
})();
var statearr_27696_27717 = state_27690__$1;
(statearr_27696_27717[(2)] = null);

(statearr_27696_27717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27691 === (4))){
var inst_27662 = (state_27690[(10)]);
var state_27690__$1 = state_27690;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27690__$1,(7),inst_27662);
} else {
if((state_val_27691 === (6))){
var inst_27686 = (state_27690[(2)]);
var state_27690__$1 = state_27690;
var statearr_27697_27718 = state_27690__$1;
(statearr_27697_27718[(2)] = inst_27686);

(statearr_27697_27718[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27691 === (3))){
var inst_27688 = (state_27690[(2)]);
var state_27690__$1 = state_27690;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27690__$1,inst_27688);
} else {
if((state_val_27691 === (2))){
var inst_27662 = (state_27690[(10)]);
var inst_27664 = cljs.core.count.call(null,inst_27662);
var inst_27665 = (inst_27664 > (0));
var state_27690__$1 = state_27690;
if(cljs.core.truth_(inst_27665)){
var statearr_27699_27719 = state_27690__$1;
(statearr_27699_27719[(1)] = (4));

} else {
var statearr_27700_27720 = state_27690__$1;
(statearr_27700_27720[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27691 === (11))){
var inst_27662 = (state_27690[(10)]);
var inst_27679 = (state_27690[(2)]);
var tmp27698 = inst_27662;
var inst_27662__$1 = tmp27698;
var state_27690__$1 = (function (){var statearr_27701 = state_27690;
(statearr_27701[(11)] = inst_27679);

(statearr_27701[(10)] = inst_27662__$1);

return statearr_27701;
})();
var statearr_27702_27721 = state_27690__$1;
(statearr_27702_27721[(2)] = null);

(statearr_27702_27721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27691 === (9))){
var inst_27670 = (state_27690[(7)]);
var state_27690__$1 = state_27690;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27690__$1,(11),out,inst_27670);
} else {
if((state_val_27691 === (5))){
var inst_27684 = cljs.core.async.close_BANG_.call(null,out);
var state_27690__$1 = state_27690;
var statearr_27703_27722 = state_27690__$1;
(statearr_27703_27722[(2)] = inst_27684);

(statearr_27703_27722[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27691 === (10))){
var inst_27682 = (state_27690[(2)]);
var state_27690__$1 = state_27690;
var statearr_27704_27723 = state_27690__$1;
(statearr_27704_27723[(2)] = inst_27682);

(statearr_27704_27723[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27691 === (8))){
var inst_27670 = (state_27690[(7)]);
var inst_27669 = (state_27690[(8)]);
var inst_27662 = (state_27690[(10)]);
var inst_27671 = (state_27690[(9)]);
var inst_27674 = (function (){var c = inst_27671;
var v = inst_27670;
var vec__27667 = inst_27669;
var cs = inst_27662;
return ((function (c,v,vec__27667,cs,inst_27670,inst_27669,inst_27662,inst_27671,state_val_27691,c__20748__auto___27714,out){
return (function (p1__27607_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__27607_SHARP_);
});
;})(c,v,vec__27667,cs,inst_27670,inst_27669,inst_27662,inst_27671,state_val_27691,c__20748__auto___27714,out))
})();
var inst_27675 = cljs.core.filterv.call(null,inst_27674,inst_27662);
var inst_27662__$1 = inst_27675;
var state_27690__$1 = (function (){var statearr_27705 = state_27690;
(statearr_27705[(10)] = inst_27662__$1);

return statearr_27705;
})();
var statearr_27706_27724 = state_27690__$1;
(statearr_27706_27724[(2)] = null);

(statearr_27706_27724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__20748__auto___27714,out))
;
return ((function (switch__20692__auto__,c__20748__auto___27714,out){
return (function() {
var state_machine__20693__auto__ = null;
var state_machine__20693__auto____0 = (function (){
var statearr_27710 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27710[(0)] = state_machine__20693__auto__);

(statearr_27710[(1)] = (1));

return statearr_27710;
});
var state_machine__20693__auto____1 = (function (state_27690){
while(true){
var ret_value__20694__auto__ = (function (){try{while(true){
var result__20695__auto__ = switch__20692__auto__.call(null,state_27690);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20695__auto__;
}
break;
}
}catch (e27711){if((e27711 instanceof Object)){
var ex__20696__auto__ = e27711;
var statearr_27712_27725 = state_27690;
(statearr_27712_27725[(5)] = ex__20696__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27690);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27711;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27726 = state_27690;
state_27690 = G__27726;
continue;
} else {
return ret_value__20694__auto__;
}
break;
}
});
state_machine__20693__auto__ = function(state_27690){
switch(arguments.length){
case 0:
return state_machine__20693__auto____0.call(this);
case 1:
return state_machine__20693__auto____1.call(this,state_27690);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20693__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20693__auto____0;
state_machine__20693__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20693__auto____1;
return state_machine__20693__auto__;
})()
;})(switch__20692__auto__,c__20748__auto___27714,out))
})();
var state__20750__auto__ = (function (){var statearr_27713 = f__20749__auto__.call(null);
(statearr_27713[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20748__auto___27714);

return statearr_27713;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20750__auto__);
});})(c__20748__auto___27714,out))
);


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
cljs.core.async.into = (function into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){
return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20748__auto___27819 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20748__auto___27819,out){
return (function (){
var f__20749__auto__ = (function (){var switch__20692__auto__ = ((function (c__20748__auto___27819,out){
return (function (state_27796){
var state_val_27797 = (state_27796[(1)]);
if((state_val_27797 === (7))){
var inst_27778 = (state_27796[(7)]);
var inst_27778__$1 = (state_27796[(2)]);
var inst_27779 = (inst_27778__$1 == null);
var inst_27780 = cljs.core.not.call(null,inst_27779);
var state_27796__$1 = (function (){var statearr_27798 = state_27796;
(statearr_27798[(7)] = inst_27778__$1);

return statearr_27798;
})();
if(inst_27780){
var statearr_27799_27820 = state_27796__$1;
(statearr_27799_27820[(1)] = (8));

} else {
var statearr_27800_27821 = state_27796__$1;
(statearr_27800_27821[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27797 === (1))){
var inst_27773 = (0);
var state_27796__$1 = (function (){var statearr_27801 = state_27796;
(statearr_27801[(8)] = inst_27773);

return statearr_27801;
})();
var statearr_27802_27822 = state_27796__$1;
(statearr_27802_27822[(2)] = null);

(statearr_27802_27822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27797 === (4))){
var state_27796__$1 = state_27796;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27796__$1,(7),ch);
} else {
if((state_val_27797 === (6))){
var inst_27791 = (state_27796[(2)]);
var state_27796__$1 = state_27796;
var statearr_27803_27823 = state_27796__$1;
(statearr_27803_27823[(2)] = inst_27791);

(statearr_27803_27823[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27797 === (3))){
var inst_27793 = (state_27796[(2)]);
var inst_27794 = cljs.core.async.close_BANG_.call(null,out);
var state_27796__$1 = (function (){var statearr_27804 = state_27796;
(statearr_27804[(9)] = inst_27793);

return statearr_27804;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27796__$1,inst_27794);
} else {
if((state_val_27797 === (2))){
var inst_27773 = (state_27796[(8)]);
var inst_27775 = (inst_27773 < n);
var state_27796__$1 = state_27796;
if(cljs.core.truth_(inst_27775)){
var statearr_27805_27824 = state_27796__$1;
(statearr_27805_27824[(1)] = (4));

} else {
var statearr_27806_27825 = state_27796__$1;
(statearr_27806_27825[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27797 === (11))){
var inst_27773 = (state_27796[(8)]);
var inst_27783 = (state_27796[(2)]);
var inst_27784 = (inst_27773 + (1));
var inst_27773__$1 = inst_27784;
var state_27796__$1 = (function (){var statearr_27807 = state_27796;
(statearr_27807[(8)] = inst_27773__$1);

(statearr_27807[(10)] = inst_27783);

return statearr_27807;
})();
var statearr_27808_27826 = state_27796__$1;
(statearr_27808_27826[(2)] = null);

(statearr_27808_27826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27797 === (9))){
var state_27796__$1 = state_27796;
var statearr_27809_27827 = state_27796__$1;
(statearr_27809_27827[(2)] = null);

(statearr_27809_27827[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27797 === (5))){
var state_27796__$1 = state_27796;
var statearr_27810_27828 = state_27796__$1;
(statearr_27810_27828[(2)] = null);

(statearr_27810_27828[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27797 === (10))){
var inst_27788 = (state_27796[(2)]);
var state_27796__$1 = state_27796;
var statearr_27811_27829 = state_27796__$1;
(statearr_27811_27829[(2)] = inst_27788);

(statearr_27811_27829[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27797 === (8))){
var inst_27778 = (state_27796[(7)]);
var state_27796__$1 = state_27796;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27796__$1,(11),out,inst_27778);
} else {
return null;
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
});})(c__20748__auto___27819,out))
;
return ((function (switch__20692__auto__,c__20748__auto___27819,out){
return (function() {
var state_machine__20693__auto__ = null;
var state_machine__20693__auto____0 = (function (){
var statearr_27815 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27815[(0)] = state_machine__20693__auto__);

(statearr_27815[(1)] = (1));

return statearr_27815;
});
var state_machine__20693__auto____1 = (function (state_27796){
while(true){
var ret_value__20694__auto__ = (function (){try{while(true){
var result__20695__auto__ = switch__20692__auto__.call(null,state_27796);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20695__auto__;
}
break;
}
}catch (e27816){if((e27816 instanceof Object)){
var ex__20696__auto__ = e27816;
var statearr_27817_27830 = state_27796;
(statearr_27817_27830[(5)] = ex__20696__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27796);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27816;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27831 = state_27796;
state_27796 = G__27831;
continue;
} else {
return ret_value__20694__auto__;
}
break;
}
});
state_machine__20693__auto__ = function(state_27796){
switch(arguments.length){
case 0:
return state_machine__20693__auto____0.call(this);
case 1:
return state_machine__20693__auto____1.call(this,state_27796);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20693__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20693__auto____0;
state_machine__20693__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20693__auto____1;
return state_machine__20693__auto__;
})()
;})(switch__20692__auto__,c__20748__auto___27819,out))
})();
var state__20750__auto__ = (function (){var statearr_27818 = f__20749__auto__.call(null);
(statearr_27818[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20748__auto___27819);

return statearr_27818;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20750__auto__);
});})(c__20748__auto___27819,out))
);


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
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){
if(typeof cljs.core.async.t27839 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27839 = (function (ch,f,map_LT_,meta27840){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta27840 = meta27840;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27839.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t27839.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t27839.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t27839.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t27842 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27842 = (function (fn1,_,meta27840,map_LT_,f,ch,meta27843){
this.fn1 = fn1;
this._ = _;
this.meta27840 = meta27840;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta27843 = meta27843;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27842.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t27842.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t27842.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__27832_SHARP_){
return f1.call(null,(((p1__27832_SHARP_ == null))?null:self__.f.call(null,p1__27832_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t27842.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_27844){
var self__ = this;
var _27844__$1 = this;
return self__.meta27843;
});})(___$1))
;

cljs.core.async.t27842.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_27844,meta27843__$1){
var self__ = this;
var _27844__$1 = this;
return (new cljs.core.async.t27842(self__.fn1,self__._,self__.meta27840,self__.map_LT_,self__.f,self__.ch,meta27843__$1));
});})(___$1))
;

cljs.core.async.t27842.cljs$lang$type = true;

cljs.core.async.t27842.cljs$lang$ctorStr = "cljs.core.async/t27842";

cljs.core.async.t27842.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__12216__auto__,writer__12217__auto__,opt__12218__auto__){
return cljs.core._write.call(null,writer__12217__auto__,"cljs.core.async/t27842");
});})(___$1))
;

cljs.core.async.__GT_t27842 = ((function (___$1){
return (function __GT_t27842(fn1__$1,___$2,meta27840__$1,map_LT___$1,f__$1,ch__$1,meta27843){
return (new cljs.core.async.t27842(fn1__$1,___$2,meta27840__$1,map_LT___$1,f__$1,ch__$1,meta27843));
});})(___$1))
;

}

return (new cljs.core.async.t27842(fn1,___$1,self__.meta27840,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/odinholestandal/git/odin/canvas-fn/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
);
if(cljs.core.truth_((function (){var and__11617__auto__ = ret;
if(cljs.core.truth_(and__11617__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__11617__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t27839.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t27839.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t27839.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t27839.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27841){
var self__ = this;
var _27841__$1 = this;
return self__.meta27840;
});

cljs.core.async.t27839.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27841,meta27840__$1){
var self__ = this;
var _27841__$1 = this;
return (new cljs.core.async.t27839(self__.ch,self__.f,self__.map_LT_,meta27840__$1));
});

cljs.core.async.t27839.cljs$lang$type = true;

cljs.core.async.t27839.cljs$lang$ctorStr = "cljs.core.async/t27839";

cljs.core.async.t27839.cljs$lang$ctorPrWriter = (function (this__12216__auto__,writer__12217__auto__,opt__12218__auto__){
return cljs.core._write.call(null,writer__12217__auto__,"cljs.core.async/t27839");
});

cljs.core.async.__GT_t27839 = (function __GT_t27839(ch__$1,f__$1,map_LT___$1,meta27840){
return (new cljs.core.async.t27839(ch__$1,f__$1,map_LT___$1,meta27840));
});

}

return (new cljs.core.async.t27839(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/odinholestandal/git/odin/canvas-fn/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t27848 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27848 = (function (ch,f,map_GT_,meta27849){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta27849 = meta27849;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27848.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t27848.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t27848.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t27848.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t27848.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t27848.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t27848.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27850){
var self__ = this;
var _27850__$1 = this;
return self__.meta27849;
});

cljs.core.async.t27848.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27850,meta27849__$1){
var self__ = this;
var _27850__$1 = this;
return (new cljs.core.async.t27848(self__.ch,self__.f,self__.map_GT_,meta27849__$1));
});

cljs.core.async.t27848.cljs$lang$type = true;

cljs.core.async.t27848.cljs$lang$ctorStr = "cljs.core.async/t27848";

cljs.core.async.t27848.cljs$lang$ctorPrWriter = (function (this__12216__auto__,writer__12217__auto__,opt__12218__auto__){
return cljs.core._write.call(null,writer__12217__auto__,"cljs.core.async/t27848");
});

cljs.core.async.__GT_t27848 = (function __GT_t27848(ch__$1,f__$1,map_GT___$1,meta27849){
return (new cljs.core.async.t27848(ch__$1,f__$1,map_GT___$1,meta27849));
});

}

return (new cljs.core.async.t27848(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/odinholestandal/git/odin/canvas-fn/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t27854 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27854 = (function (ch,p,filter_GT_,meta27855){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta27855 = meta27855;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27854.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t27854.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t27854.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t27854.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t27854.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t27854.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t27854.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t27854.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27856){
var self__ = this;
var _27856__$1 = this;
return self__.meta27855;
});

cljs.core.async.t27854.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27856,meta27855__$1){
var self__ = this;
var _27856__$1 = this;
return (new cljs.core.async.t27854(self__.ch,self__.p,self__.filter_GT_,meta27855__$1));
});

cljs.core.async.t27854.cljs$lang$type = true;

cljs.core.async.t27854.cljs$lang$ctorStr = "cljs.core.async/t27854";

cljs.core.async.t27854.cljs$lang$ctorPrWriter = (function (this__12216__auto__,writer__12217__auto__,opt__12218__auto__){
return cljs.core._write.call(null,writer__12217__auto__,"cljs.core.async/t27854");
});

cljs.core.async.__GT_t27854 = (function __GT_t27854(ch__$1,p__$1,filter_GT___$1,meta27855){
return (new cljs.core.async.t27854(ch__$1,p__$1,filter_GT___$1,meta27855));
});

}

return (new cljs.core.async.t27854(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/odinholestandal/git/odin/canvas-fn/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){
return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20748__auto___27939 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20748__auto___27939,out){
return (function (){
var f__20749__auto__ = (function (){var switch__20692__auto__ = ((function (c__20748__auto___27939,out){
return (function (state_27918){
var state_val_27919 = (state_27918[(1)]);
if((state_val_27919 === (7))){
var inst_27914 = (state_27918[(2)]);
var state_27918__$1 = state_27918;
var statearr_27920_27940 = state_27918__$1;
(statearr_27920_27940[(2)] = inst_27914);

(statearr_27920_27940[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27919 === (1))){
var state_27918__$1 = state_27918;
var statearr_27921_27941 = state_27918__$1;
(statearr_27921_27941[(2)] = null);

(statearr_27921_27941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27919 === (4))){
var inst_27900 = (state_27918[(7)]);
var inst_27900__$1 = (state_27918[(2)]);
var inst_27901 = (inst_27900__$1 == null);
var state_27918__$1 = (function (){var statearr_27922 = state_27918;
(statearr_27922[(7)] = inst_27900__$1);

return statearr_27922;
})();
if(cljs.core.truth_(inst_27901)){
var statearr_27923_27942 = state_27918__$1;
(statearr_27923_27942[(1)] = (5));

} else {
var statearr_27924_27943 = state_27918__$1;
(statearr_27924_27943[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27919 === (6))){
var inst_27900 = (state_27918[(7)]);
var inst_27905 = p.call(null,inst_27900);
var state_27918__$1 = state_27918;
if(cljs.core.truth_(inst_27905)){
var statearr_27925_27944 = state_27918__$1;
(statearr_27925_27944[(1)] = (8));

} else {
var statearr_27926_27945 = state_27918__$1;
(statearr_27926_27945[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27919 === (3))){
var inst_27916 = (state_27918[(2)]);
var state_27918__$1 = state_27918;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27918__$1,inst_27916);
} else {
if((state_val_27919 === (2))){
var state_27918__$1 = state_27918;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27918__$1,(4),ch);
} else {
if((state_val_27919 === (11))){
var inst_27908 = (state_27918[(2)]);
var state_27918__$1 = state_27918;
var statearr_27927_27946 = state_27918__$1;
(statearr_27927_27946[(2)] = inst_27908);

(statearr_27927_27946[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27919 === (9))){
var state_27918__$1 = state_27918;
var statearr_27928_27947 = state_27918__$1;
(statearr_27928_27947[(2)] = null);

(statearr_27928_27947[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27919 === (5))){
var inst_27903 = cljs.core.async.close_BANG_.call(null,out);
var state_27918__$1 = state_27918;
var statearr_27929_27948 = state_27918__$1;
(statearr_27929_27948[(2)] = inst_27903);

(statearr_27929_27948[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27919 === (10))){
var inst_27911 = (state_27918[(2)]);
var state_27918__$1 = (function (){var statearr_27930 = state_27918;
(statearr_27930[(8)] = inst_27911);

return statearr_27930;
})();
var statearr_27931_27949 = state_27918__$1;
(statearr_27931_27949[(2)] = null);

(statearr_27931_27949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27919 === (8))){
var inst_27900 = (state_27918[(7)]);
var state_27918__$1 = state_27918;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27918__$1,(11),out,inst_27900);
} else {
return null;
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
});})(c__20748__auto___27939,out))
;
return ((function (switch__20692__auto__,c__20748__auto___27939,out){
return (function() {
var state_machine__20693__auto__ = null;
var state_machine__20693__auto____0 = (function (){
var statearr_27935 = [null,null,null,null,null,null,null,null,null];
(statearr_27935[(0)] = state_machine__20693__auto__);

(statearr_27935[(1)] = (1));

return statearr_27935;
});
var state_machine__20693__auto____1 = (function (state_27918){
while(true){
var ret_value__20694__auto__ = (function (){try{while(true){
var result__20695__auto__ = switch__20692__auto__.call(null,state_27918);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20695__auto__;
}
break;
}
}catch (e27936){if((e27936 instanceof Object)){
var ex__20696__auto__ = e27936;
var statearr_27937_27950 = state_27918;
(statearr_27937_27950[(5)] = ex__20696__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27918);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27936;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27951 = state_27918;
state_27918 = G__27951;
continue;
} else {
return ret_value__20694__auto__;
}
break;
}
});
state_machine__20693__auto__ = function(state_27918){
switch(arguments.length){
case 0:
return state_machine__20693__auto____0.call(this);
case 1:
return state_machine__20693__auto____1.call(this,state_27918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20693__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20693__auto____0;
state_machine__20693__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20693__auto____1;
return state_machine__20693__auto__;
})()
;})(switch__20692__auto__,c__20748__auto___27939,out))
})();
var state__20750__auto__ = (function (){var statearr_27938 = f__20749__auto__.call(null);
(statearr_27938[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20748__auto___27939);

return statearr_27938;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20750__auto__);
});})(c__20748__auto___27939,out))
);


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
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){
return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){
var c__20748__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20748__auto__){
return (function (){
var f__20749__auto__ = (function (){var switch__20692__auto__ = ((function (c__20748__auto__){
return (function (state_28117){
var state_val_28118 = (state_28117[(1)]);
if((state_val_28118 === (7))){
var inst_28113 = (state_28117[(2)]);
var state_28117__$1 = state_28117;
var statearr_28119_28160 = state_28117__$1;
(statearr_28119_28160[(2)] = inst_28113);

(statearr_28119_28160[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28118 === (20))){
var inst_28083 = (state_28117[(7)]);
var inst_28094 = (state_28117[(2)]);
var inst_28095 = cljs.core.next.call(null,inst_28083);
var inst_28069 = inst_28095;
var inst_28070 = null;
var inst_28071 = (0);
var inst_28072 = (0);
var state_28117__$1 = (function (){var statearr_28120 = state_28117;
(statearr_28120[(8)] = inst_28071);

(statearr_28120[(9)] = inst_28094);

(statearr_28120[(10)] = inst_28069);

(statearr_28120[(11)] = inst_28070);

(statearr_28120[(12)] = inst_28072);

return statearr_28120;
})();
var statearr_28121_28161 = state_28117__$1;
(statearr_28121_28161[(2)] = null);

(statearr_28121_28161[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28118 === (1))){
var state_28117__$1 = state_28117;
var statearr_28122_28162 = state_28117__$1;
(statearr_28122_28162[(2)] = null);

(statearr_28122_28162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28118 === (4))){
var inst_28058 = (state_28117[(13)]);
var inst_28058__$1 = (state_28117[(2)]);
var inst_28059 = (inst_28058__$1 == null);
var state_28117__$1 = (function (){var statearr_28123 = state_28117;
(statearr_28123[(13)] = inst_28058__$1);

return statearr_28123;
})();
if(cljs.core.truth_(inst_28059)){
var statearr_28124_28163 = state_28117__$1;
(statearr_28124_28163[(1)] = (5));

} else {
var statearr_28125_28164 = state_28117__$1;
(statearr_28125_28164[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28118 === (15))){
var state_28117__$1 = state_28117;
var statearr_28129_28165 = state_28117__$1;
(statearr_28129_28165[(2)] = null);

(statearr_28129_28165[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28118 === (21))){
var state_28117__$1 = state_28117;
var statearr_28130_28166 = state_28117__$1;
(statearr_28130_28166[(2)] = null);

(statearr_28130_28166[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28118 === (13))){
var inst_28071 = (state_28117[(8)]);
var inst_28069 = (state_28117[(10)]);
var inst_28070 = (state_28117[(11)]);
var inst_28072 = (state_28117[(12)]);
var inst_28079 = (state_28117[(2)]);
var inst_28080 = (inst_28072 + (1));
var tmp28126 = inst_28071;
var tmp28127 = inst_28069;
var tmp28128 = inst_28070;
var inst_28069__$1 = tmp28127;
var inst_28070__$1 = tmp28128;
var inst_28071__$1 = tmp28126;
var inst_28072__$1 = inst_28080;
var state_28117__$1 = (function (){var statearr_28131 = state_28117;
(statearr_28131[(8)] = inst_28071__$1);

(statearr_28131[(10)] = inst_28069__$1);

(statearr_28131[(14)] = inst_28079);

(statearr_28131[(11)] = inst_28070__$1);

(statearr_28131[(12)] = inst_28072__$1);

return statearr_28131;
})();
var statearr_28132_28167 = state_28117__$1;
(statearr_28132_28167[(2)] = null);

(statearr_28132_28167[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28118 === (22))){
var state_28117__$1 = state_28117;
var statearr_28133_28168 = state_28117__$1;
(statearr_28133_28168[(2)] = null);

(statearr_28133_28168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28118 === (6))){
var inst_28058 = (state_28117[(13)]);
var inst_28067 = f.call(null,inst_28058);
var inst_28068 = cljs.core.seq.call(null,inst_28067);
var inst_28069 = inst_28068;
var inst_28070 = null;
var inst_28071 = (0);
var inst_28072 = (0);
var state_28117__$1 = (function (){var statearr_28134 = state_28117;
(statearr_28134[(8)] = inst_28071);

(statearr_28134[(10)] = inst_28069);

(statearr_28134[(11)] = inst_28070);

(statearr_28134[(12)] = inst_28072);

return statearr_28134;
})();
var statearr_28135_28169 = state_28117__$1;
(statearr_28135_28169[(2)] = null);

(statearr_28135_28169[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28118 === (17))){
var inst_28083 = (state_28117[(7)]);
var inst_28087 = cljs.core.chunk_first.call(null,inst_28083);
var inst_28088 = cljs.core.chunk_rest.call(null,inst_28083);
var inst_28089 = cljs.core.count.call(null,inst_28087);
var inst_28069 = inst_28088;
var inst_28070 = inst_28087;
var inst_28071 = inst_28089;
var inst_28072 = (0);
var state_28117__$1 = (function (){var statearr_28136 = state_28117;
(statearr_28136[(8)] = inst_28071);

(statearr_28136[(10)] = inst_28069);

(statearr_28136[(11)] = inst_28070);

(statearr_28136[(12)] = inst_28072);

return statearr_28136;
})();
var statearr_28137_28170 = state_28117__$1;
(statearr_28137_28170[(2)] = null);

(statearr_28137_28170[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28118 === (3))){
var inst_28115 = (state_28117[(2)]);
var state_28117__$1 = state_28117;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28117__$1,inst_28115);
} else {
if((state_val_28118 === (12))){
var inst_28103 = (state_28117[(2)]);
var state_28117__$1 = state_28117;
var statearr_28138_28171 = state_28117__$1;
(statearr_28138_28171[(2)] = inst_28103);

(statearr_28138_28171[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28118 === (2))){
var state_28117__$1 = state_28117;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28117__$1,(4),in$);
} else {
if((state_val_28118 === (23))){
var inst_28111 = (state_28117[(2)]);
var state_28117__$1 = state_28117;
var statearr_28139_28172 = state_28117__$1;
(statearr_28139_28172[(2)] = inst_28111);

(statearr_28139_28172[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28118 === (19))){
var inst_28098 = (state_28117[(2)]);
var state_28117__$1 = state_28117;
var statearr_28140_28173 = state_28117__$1;
(statearr_28140_28173[(2)] = inst_28098);

(statearr_28140_28173[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28118 === (11))){
var inst_28069 = (state_28117[(10)]);
var inst_28083 = (state_28117[(7)]);
var inst_28083__$1 = cljs.core.seq.call(null,inst_28069);
var state_28117__$1 = (function (){var statearr_28141 = state_28117;
(statearr_28141[(7)] = inst_28083__$1);

return statearr_28141;
})();
if(inst_28083__$1){
var statearr_28142_28174 = state_28117__$1;
(statearr_28142_28174[(1)] = (14));

} else {
var statearr_28143_28175 = state_28117__$1;
(statearr_28143_28175[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28118 === (9))){
var inst_28105 = (state_28117[(2)]);
var inst_28106 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_28117__$1 = (function (){var statearr_28144 = state_28117;
(statearr_28144[(15)] = inst_28105);

return statearr_28144;
})();
if(cljs.core.truth_(inst_28106)){
var statearr_28145_28176 = state_28117__$1;
(statearr_28145_28176[(1)] = (21));

} else {
var statearr_28146_28177 = state_28117__$1;
(statearr_28146_28177[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28118 === (5))){
var inst_28061 = cljs.core.async.close_BANG_.call(null,out);
var state_28117__$1 = state_28117;
var statearr_28147_28178 = state_28117__$1;
(statearr_28147_28178[(2)] = inst_28061);

(statearr_28147_28178[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28118 === (14))){
var inst_28083 = (state_28117[(7)]);
var inst_28085 = cljs.core.chunked_seq_QMARK_.call(null,inst_28083);
var state_28117__$1 = state_28117;
if(inst_28085){
var statearr_28148_28179 = state_28117__$1;
(statearr_28148_28179[(1)] = (17));

} else {
var statearr_28149_28180 = state_28117__$1;
(statearr_28149_28180[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28118 === (16))){
var inst_28101 = (state_28117[(2)]);
var state_28117__$1 = state_28117;
var statearr_28150_28181 = state_28117__$1;
(statearr_28150_28181[(2)] = inst_28101);

(statearr_28150_28181[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28118 === (10))){
var inst_28070 = (state_28117[(11)]);
var inst_28072 = (state_28117[(12)]);
var inst_28077 = cljs.core._nth.call(null,inst_28070,inst_28072);
var state_28117__$1 = state_28117;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28117__$1,(13),out,inst_28077);
} else {
if((state_val_28118 === (18))){
var inst_28083 = (state_28117[(7)]);
var inst_28092 = cljs.core.first.call(null,inst_28083);
var state_28117__$1 = state_28117;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28117__$1,(20),out,inst_28092);
} else {
if((state_val_28118 === (8))){
var inst_28071 = (state_28117[(8)]);
var inst_28072 = (state_28117[(12)]);
var inst_28074 = (inst_28072 < inst_28071);
var inst_28075 = inst_28074;
var state_28117__$1 = state_28117;
if(cljs.core.truth_(inst_28075)){
var statearr_28151_28182 = state_28117__$1;
(statearr_28151_28182[(1)] = (10));

} else {
var statearr_28152_28183 = state_28117__$1;
(statearr_28152_28183[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__20748__auto__))
;
return ((function (switch__20692__auto__,c__20748__auto__){
return (function() {
var state_machine__20693__auto__ = null;
var state_machine__20693__auto____0 = (function (){
var statearr_28156 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28156[(0)] = state_machine__20693__auto__);

(statearr_28156[(1)] = (1));

return statearr_28156;
});
var state_machine__20693__auto____1 = (function (state_28117){
while(true){
var ret_value__20694__auto__ = (function (){try{while(true){
var result__20695__auto__ = switch__20692__auto__.call(null,state_28117);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20695__auto__;
}
break;
}
}catch (e28157){if((e28157 instanceof Object)){
var ex__20696__auto__ = e28157;
var statearr_28158_28184 = state_28117;
(statearr_28158_28184[(5)] = ex__20696__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28117);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28157;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28185 = state_28117;
state_28117 = G__28185;
continue;
} else {
return ret_value__20694__auto__;
}
break;
}
});
state_machine__20693__auto__ = function(state_28117){
switch(arguments.length){
case 0:
return state_machine__20693__auto____0.call(this);
case 1:
return state_machine__20693__auto____1.call(this,state_28117);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20693__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20693__auto____0;
state_machine__20693__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20693__auto____1;
return state_machine__20693__auto__;
})()
;})(switch__20692__auto__,c__20748__auto__))
})();
var state__20750__auto__ = (function (){var statearr_28159 = f__20749__auto__.call(null);
(statearr_28159[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20748__auto__);

return statearr_28159;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20750__auto__);
});})(c__20748__auto__))
);

return c__20748__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){
return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

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
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){
return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

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
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){
return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20748__auto___28282 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20748__auto___28282,out){
return (function (){
var f__20749__auto__ = (function (){var switch__20692__auto__ = ((function (c__20748__auto___28282,out){
return (function (state_28257){
var state_val_28258 = (state_28257[(1)]);
if((state_val_28258 === (7))){
var inst_28252 = (state_28257[(2)]);
var state_28257__$1 = state_28257;
var statearr_28259_28283 = state_28257__$1;
(statearr_28259_28283[(2)] = inst_28252);

(statearr_28259_28283[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (1))){
var inst_28234 = null;
var state_28257__$1 = (function (){var statearr_28260 = state_28257;
(statearr_28260[(7)] = inst_28234);

return statearr_28260;
})();
var statearr_28261_28284 = state_28257__$1;
(statearr_28261_28284[(2)] = null);

(statearr_28261_28284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (4))){
var inst_28237 = (state_28257[(8)]);
var inst_28237__$1 = (state_28257[(2)]);
var inst_28238 = (inst_28237__$1 == null);
var inst_28239 = cljs.core.not.call(null,inst_28238);
var state_28257__$1 = (function (){var statearr_28262 = state_28257;
(statearr_28262[(8)] = inst_28237__$1);

return statearr_28262;
})();
if(inst_28239){
var statearr_28263_28285 = state_28257__$1;
(statearr_28263_28285[(1)] = (5));

} else {
var statearr_28264_28286 = state_28257__$1;
(statearr_28264_28286[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (6))){
var state_28257__$1 = state_28257;
var statearr_28265_28287 = state_28257__$1;
(statearr_28265_28287[(2)] = null);

(statearr_28265_28287[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (3))){
var inst_28254 = (state_28257[(2)]);
var inst_28255 = cljs.core.async.close_BANG_.call(null,out);
var state_28257__$1 = (function (){var statearr_28266 = state_28257;
(statearr_28266[(9)] = inst_28254);

return statearr_28266;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28257__$1,inst_28255);
} else {
if((state_val_28258 === (2))){
var state_28257__$1 = state_28257;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28257__$1,(4),ch);
} else {
if((state_val_28258 === (11))){
var inst_28237 = (state_28257[(8)]);
var inst_28246 = (state_28257[(2)]);
var inst_28234 = inst_28237;
var state_28257__$1 = (function (){var statearr_28267 = state_28257;
(statearr_28267[(7)] = inst_28234);

(statearr_28267[(10)] = inst_28246);

return statearr_28267;
})();
var statearr_28268_28288 = state_28257__$1;
(statearr_28268_28288[(2)] = null);

(statearr_28268_28288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (9))){
var inst_28237 = (state_28257[(8)]);
var state_28257__$1 = state_28257;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28257__$1,(11),out,inst_28237);
} else {
if((state_val_28258 === (5))){
var inst_28234 = (state_28257[(7)]);
var inst_28237 = (state_28257[(8)]);
var inst_28241 = cljs.core._EQ_.call(null,inst_28237,inst_28234);
var state_28257__$1 = state_28257;
if(inst_28241){
var statearr_28270_28289 = state_28257__$1;
(statearr_28270_28289[(1)] = (8));

} else {
var statearr_28271_28290 = state_28257__$1;
(statearr_28271_28290[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (10))){
var inst_28249 = (state_28257[(2)]);
var state_28257__$1 = state_28257;
var statearr_28272_28291 = state_28257__$1;
(statearr_28272_28291[(2)] = inst_28249);

(statearr_28272_28291[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28258 === (8))){
var inst_28234 = (state_28257[(7)]);
var tmp28269 = inst_28234;
var inst_28234__$1 = tmp28269;
var state_28257__$1 = (function (){var statearr_28273 = state_28257;
(statearr_28273[(7)] = inst_28234__$1);

return statearr_28273;
})();
var statearr_28274_28292 = state_28257__$1;
(statearr_28274_28292[(2)] = null);

(statearr_28274_28292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__20748__auto___28282,out))
;
return ((function (switch__20692__auto__,c__20748__auto___28282,out){
return (function() {
var state_machine__20693__auto__ = null;
var state_machine__20693__auto____0 = (function (){
var statearr_28278 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28278[(0)] = state_machine__20693__auto__);

(statearr_28278[(1)] = (1));

return statearr_28278;
});
var state_machine__20693__auto____1 = (function (state_28257){
while(true){
var ret_value__20694__auto__ = (function (){try{while(true){
var result__20695__auto__ = switch__20692__auto__.call(null,state_28257);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20695__auto__;
}
break;
}
}catch (e28279){if((e28279 instanceof Object)){
var ex__20696__auto__ = e28279;
var statearr_28280_28293 = state_28257;
(statearr_28280_28293[(5)] = ex__20696__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28257);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28279;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28294 = state_28257;
state_28257 = G__28294;
continue;
} else {
return ret_value__20694__auto__;
}
break;
}
});
state_machine__20693__auto__ = function(state_28257){
switch(arguments.length){
case 0:
return state_machine__20693__auto____0.call(this);
case 1:
return state_machine__20693__auto____1.call(this,state_28257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20693__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20693__auto____0;
state_machine__20693__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20693__auto____1;
return state_machine__20693__auto__;
})()
;})(switch__20692__auto__,c__20748__auto___28282,out))
})();
var state__20750__auto__ = (function (){var statearr_28281 = f__20749__auto__.call(null);
(statearr_28281[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20748__auto___28282);

return statearr_28281;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20750__auto__);
});})(c__20748__auto___28282,out))
);


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
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){
return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20748__auto___28429 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20748__auto___28429,out){
return (function (){
var f__20749__auto__ = (function (){var switch__20692__auto__ = ((function (c__20748__auto___28429,out){
return (function (state_28399){
var state_val_28400 = (state_28399[(1)]);
if((state_val_28400 === (7))){
var inst_28395 = (state_28399[(2)]);
var state_28399__$1 = state_28399;
var statearr_28401_28430 = state_28399__$1;
(statearr_28401_28430[(2)] = inst_28395);

(statearr_28401_28430[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28400 === (1))){
var inst_28362 = (new Array(n));
var inst_28363 = inst_28362;
var inst_28364 = (0);
var state_28399__$1 = (function (){var statearr_28402 = state_28399;
(statearr_28402[(7)] = inst_28363);

(statearr_28402[(8)] = inst_28364);

return statearr_28402;
})();
var statearr_28403_28431 = state_28399__$1;
(statearr_28403_28431[(2)] = null);

(statearr_28403_28431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28400 === (4))){
var inst_28367 = (state_28399[(9)]);
var inst_28367__$1 = (state_28399[(2)]);
var inst_28368 = (inst_28367__$1 == null);
var inst_28369 = cljs.core.not.call(null,inst_28368);
var state_28399__$1 = (function (){var statearr_28404 = state_28399;
(statearr_28404[(9)] = inst_28367__$1);

return statearr_28404;
})();
if(inst_28369){
var statearr_28405_28432 = state_28399__$1;
(statearr_28405_28432[(1)] = (5));

} else {
var statearr_28406_28433 = state_28399__$1;
(statearr_28406_28433[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28400 === (15))){
var inst_28389 = (state_28399[(2)]);
var state_28399__$1 = state_28399;
var statearr_28407_28434 = state_28399__$1;
(statearr_28407_28434[(2)] = inst_28389);

(statearr_28407_28434[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28400 === (13))){
var state_28399__$1 = state_28399;
var statearr_28408_28435 = state_28399__$1;
(statearr_28408_28435[(2)] = null);

(statearr_28408_28435[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28400 === (6))){
var inst_28364 = (state_28399[(8)]);
var inst_28385 = (inst_28364 > (0));
var state_28399__$1 = state_28399;
if(cljs.core.truth_(inst_28385)){
var statearr_28409_28436 = state_28399__$1;
(statearr_28409_28436[(1)] = (12));

} else {
var statearr_28410_28437 = state_28399__$1;
(statearr_28410_28437[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28400 === (3))){
var inst_28397 = (state_28399[(2)]);
var state_28399__$1 = state_28399;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28399__$1,inst_28397);
} else {
if((state_val_28400 === (12))){
var inst_28363 = (state_28399[(7)]);
var inst_28387 = cljs.core.vec.call(null,inst_28363);
var state_28399__$1 = state_28399;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28399__$1,(15),out,inst_28387);
} else {
if((state_val_28400 === (2))){
var state_28399__$1 = state_28399;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28399__$1,(4),ch);
} else {
if((state_val_28400 === (11))){
var inst_28379 = (state_28399[(2)]);
var inst_28380 = (new Array(n));
var inst_28363 = inst_28380;
var inst_28364 = (0);
var state_28399__$1 = (function (){var statearr_28411 = state_28399;
(statearr_28411[(7)] = inst_28363);

(statearr_28411[(10)] = inst_28379);

(statearr_28411[(8)] = inst_28364);

return statearr_28411;
})();
var statearr_28412_28438 = state_28399__$1;
(statearr_28412_28438[(2)] = null);

(statearr_28412_28438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28400 === (9))){
var inst_28363 = (state_28399[(7)]);
var inst_28377 = cljs.core.vec.call(null,inst_28363);
var state_28399__$1 = state_28399;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28399__$1,(11),out,inst_28377);
} else {
if((state_val_28400 === (5))){
var inst_28372 = (state_28399[(11)]);
var inst_28363 = (state_28399[(7)]);
var inst_28367 = (state_28399[(9)]);
var inst_28364 = (state_28399[(8)]);
var inst_28371 = (inst_28363[inst_28364] = inst_28367);
var inst_28372__$1 = (inst_28364 + (1));
var inst_28373 = (inst_28372__$1 < n);
var state_28399__$1 = (function (){var statearr_28413 = state_28399;
(statearr_28413[(11)] = inst_28372__$1);

(statearr_28413[(12)] = inst_28371);

return statearr_28413;
})();
if(cljs.core.truth_(inst_28373)){
var statearr_28414_28439 = state_28399__$1;
(statearr_28414_28439[(1)] = (8));

} else {
var statearr_28415_28440 = state_28399__$1;
(statearr_28415_28440[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28400 === (14))){
var inst_28392 = (state_28399[(2)]);
var inst_28393 = cljs.core.async.close_BANG_.call(null,out);
var state_28399__$1 = (function (){var statearr_28417 = state_28399;
(statearr_28417[(13)] = inst_28392);

return statearr_28417;
})();
var statearr_28418_28441 = state_28399__$1;
(statearr_28418_28441[(2)] = inst_28393);

(statearr_28418_28441[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28400 === (10))){
var inst_28383 = (state_28399[(2)]);
var state_28399__$1 = state_28399;
var statearr_28419_28442 = state_28399__$1;
(statearr_28419_28442[(2)] = inst_28383);

(statearr_28419_28442[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28400 === (8))){
var inst_28372 = (state_28399[(11)]);
var inst_28363 = (state_28399[(7)]);
var tmp28416 = inst_28363;
var inst_28363__$1 = tmp28416;
var inst_28364 = inst_28372;
var state_28399__$1 = (function (){var statearr_28420 = state_28399;
(statearr_28420[(7)] = inst_28363__$1);

(statearr_28420[(8)] = inst_28364);

return statearr_28420;
})();
var statearr_28421_28443 = state_28399__$1;
(statearr_28421_28443[(2)] = null);

(statearr_28421_28443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__20748__auto___28429,out))
;
return ((function (switch__20692__auto__,c__20748__auto___28429,out){
return (function() {
var state_machine__20693__auto__ = null;
var state_machine__20693__auto____0 = (function (){
var statearr_28425 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28425[(0)] = state_machine__20693__auto__);

(statearr_28425[(1)] = (1));

return statearr_28425;
});
var state_machine__20693__auto____1 = (function (state_28399){
while(true){
var ret_value__20694__auto__ = (function (){try{while(true){
var result__20695__auto__ = switch__20692__auto__.call(null,state_28399);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20695__auto__;
}
break;
}
}catch (e28426){if((e28426 instanceof Object)){
var ex__20696__auto__ = e28426;
var statearr_28427_28444 = state_28399;
(statearr_28427_28444[(5)] = ex__20696__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28399);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28426;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28445 = state_28399;
state_28399 = G__28445;
continue;
} else {
return ret_value__20694__auto__;
}
break;
}
});
state_machine__20693__auto__ = function(state_28399){
switch(arguments.length){
case 0:
return state_machine__20693__auto____0.call(this);
case 1:
return state_machine__20693__auto____1.call(this,state_28399);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20693__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20693__auto____0;
state_machine__20693__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20693__auto____1;
return state_machine__20693__auto__;
})()
;})(switch__20692__auto__,c__20748__auto___28429,out))
})();
var state__20750__auto__ = (function (){var statearr_28428 = f__20749__auto__.call(null);
(statearr_28428[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20748__auto___28429);

return statearr_28428;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20750__auto__);
});})(c__20748__auto___28429,out))
);


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
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){
return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20748__auto___28588 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20748__auto___28588,out){
return (function (){
var f__20749__auto__ = (function (){var switch__20692__auto__ = ((function (c__20748__auto___28588,out){
return (function (state_28558){
var state_val_28559 = (state_28558[(1)]);
if((state_val_28559 === (7))){
var inst_28554 = (state_28558[(2)]);
var state_28558__$1 = state_28558;
var statearr_28560_28589 = state_28558__$1;
(statearr_28560_28589[(2)] = inst_28554);

(statearr_28560_28589[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28559 === (1))){
var inst_28517 = [];
var inst_28518 = inst_28517;
var inst_28519 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_28558__$1 = (function (){var statearr_28561 = state_28558;
(statearr_28561[(7)] = inst_28518);

(statearr_28561[(8)] = inst_28519);

return statearr_28561;
})();
var statearr_28562_28590 = state_28558__$1;
(statearr_28562_28590[(2)] = null);

(statearr_28562_28590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28559 === (4))){
var inst_28522 = (state_28558[(9)]);
var inst_28522__$1 = (state_28558[(2)]);
var inst_28523 = (inst_28522__$1 == null);
var inst_28524 = cljs.core.not.call(null,inst_28523);
var state_28558__$1 = (function (){var statearr_28563 = state_28558;
(statearr_28563[(9)] = inst_28522__$1);

return statearr_28563;
})();
if(inst_28524){
var statearr_28564_28591 = state_28558__$1;
(statearr_28564_28591[(1)] = (5));

} else {
var statearr_28565_28592 = state_28558__$1;
(statearr_28565_28592[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28559 === (15))){
var inst_28548 = (state_28558[(2)]);
var state_28558__$1 = state_28558;
var statearr_28566_28593 = state_28558__$1;
(statearr_28566_28593[(2)] = inst_28548);

(statearr_28566_28593[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28559 === (13))){
var state_28558__$1 = state_28558;
var statearr_28567_28594 = state_28558__$1;
(statearr_28567_28594[(2)] = null);

(statearr_28567_28594[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28559 === (6))){
var inst_28518 = (state_28558[(7)]);
var inst_28543 = inst_28518.length;
var inst_28544 = (inst_28543 > (0));
var state_28558__$1 = state_28558;
if(cljs.core.truth_(inst_28544)){
var statearr_28568_28595 = state_28558__$1;
(statearr_28568_28595[(1)] = (12));

} else {
var statearr_28569_28596 = state_28558__$1;
(statearr_28569_28596[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28559 === (3))){
var inst_28556 = (state_28558[(2)]);
var state_28558__$1 = state_28558;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28558__$1,inst_28556);
} else {
if((state_val_28559 === (12))){
var inst_28518 = (state_28558[(7)]);
var inst_28546 = cljs.core.vec.call(null,inst_28518);
var state_28558__$1 = state_28558;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28558__$1,(15),out,inst_28546);
} else {
if((state_val_28559 === (2))){
var state_28558__$1 = state_28558;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28558__$1,(4),ch);
} else {
if((state_val_28559 === (11))){
var inst_28522 = (state_28558[(9)]);
var inst_28526 = (state_28558[(10)]);
var inst_28536 = (state_28558[(2)]);
var inst_28537 = [];
var inst_28538 = inst_28537.push(inst_28522);
var inst_28518 = inst_28537;
var inst_28519 = inst_28526;
var state_28558__$1 = (function (){var statearr_28570 = state_28558;
(statearr_28570[(11)] = inst_28538);

(statearr_28570[(7)] = inst_28518);

(statearr_28570[(8)] = inst_28519);

(statearr_28570[(12)] = inst_28536);

return statearr_28570;
})();
var statearr_28571_28597 = state_28558__$1;
(statearr_28571_28597[(2)] = null);

(statearr_28571_28597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28559 === (9))){
var inst_28518 = (state_28558[(7)]);
var inst_28534 = cljs.core.vec.call(null,inst_28518);
var state_28558__$1 = state_28558;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28558__$1,(11),out,inst_28534);
} else {
if((state_val_28559 === (5))){
var inst_28522 = (state_28558[(9)]);
var inst_28519 = (state_28558[(8)]);
var inst_28526 = (state_28558[(10)]);
var inst_28526__$1 = f.call(null,inst_28522);
var inst_28527 = cljs.core._EQ_.call(null,inst_28526__$1,inst_28519);
var inst_28528 = cljs.core.keyword_identical_QMARK_.call(null,inst_28519,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_28529 = (inst_28527) || (inst_28528);
var state_28558__$1 = (function (){var statearr_28572 = state_28558;
(statearr_28572[(10)] = inst_28526__$1);

return statearr_28572;
})();
if(cljs.core.truth_(inst_28529)){
var statearr_28573_28598 = state_28558__$1;
(statearr_28573_28598[(1)] = (8));

} else {
var statearr_28574_28599 = state_28558__$1;
(statearr_28574_28599[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28559 === (14))){
var inst_28551 = (state_28558[(2)]);
var inst_28552 = cljs.core.async.close_BANG_.call(null,out);
var state_28558__$1 = (function (){var statearr_28576 = state_28558;
(statearr_28576[(13)] = inst_28551);

return statearr_28576;
})();
var statearr_28577_28600 = state_28558__$1;
(statearr_28577_28600[(2)] = inst_28552);

(statearr_28577_28600[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28559 === (10))){
var inst_28541 = (state_28558[(2)]);
var state_28558__$1 = state_28558;
var statearr_28578_28601 = state_28558__$1;
(statearr_28578_28601[(2)] = inst_28541);

(statearr_28578_28601[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28559 === (8))){
var inst_28522 = (state_28558[(9)]);
var inst_28518 = (state_28558[(7)]);
var inst_28526 = (state_28558[(10)]);
var inst_28531 = inst_28518.push(inst_28522);
var tmp28575 = inst_28518;
var inst_28518__$1 = tmp28575;
var inst_28519 = inst_28526;
var state_28558__$1 = (function (){var statearr_28579 = state_28558;
(statearr_28579[(14)] = inst_28531);

(statearr_28579[(7)] = inst_28518__$1);

(statearr_28579[(8)] = inst_28519);

return statearr_28579;
})();
var statearr_28580_28602 = state_28558__$1;
(statearr_28580_28602[(2)] = null);

(statearr_28580_28602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__20748__auto___28588,out))
;
return ((function (switch__20692__auto__,c__20748__auto___28588,out){
return (function() {
var state_machine__20693__auto__ = null;
var state_machine__20693__auto____0 = (function (){
var statearr_28584 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28584[(0)] = state_machine__20693__auto__);

(statearr_28584[(1)] = (1));

return statearr_28584;
});
var state_machine__20693__auto____1 = (function (state_28558){
while(true){
var ret_value__20694__auto__ = (function (){try{while(true){
var result__20695__auto__ = switch__20692__auto__.call(null,state_28558);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20695__auto__;
}
break;
}
}catch (e28585){if((e28585 instanceof Object)){
var ex__20696__auto__ = e28585;
var statearr_28586_28603 = state_28558;
(statearr_28586_28603[(5)] = ex__20696__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28558);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28585;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28604 = state_28558;
state_28558 = G__28604;
continue;
} else {
return ret_value__20694__auto__;
}
break;
}
});
state_machine__20693__auto__ = function(state_28558){
switch(arguments.length){
case 0:
return state_machine__20693__auto____0.call(this);
case 1:
return state_machine__20693__auto____1.call(this,state_28558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20693__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20693__auto____0;
state_machine__20693__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20693__auto____1;
return state_machine__20693__auto__;
})()
;})(switch__20692__auto__,c__20748__auto___28588,out))
})();
var state__20750__auto__ = (function (){var statearr_28587 = f__20749__auto__.call(null);
(statearr_28587[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20748__auto___28588);

return statearr_28587;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20750__auto__);
});})(c__20748__auto___28588,out))
);


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