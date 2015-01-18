// Compiled by ClojureScript 0.0-2665 {}
if(!goog.isProvided_('canvas_fn.util')) {
goog.provide('canvas_fn.util');
}
goog.require('cljs.core');
/**
* @param {...*} var_args
*/
canvas_fn.util.log = (function() { 
var log__delegate = function (items){
return console.log(cljs.core.apply.call(null,cljs.core.str,items));
};
var log = function (var_args){
var items = null;
if (arguments.length > 0) {
var G__13288__i = 0, G__13288__a = new Array(arguments.length -  0);
while (G__13288__i < G__13288__a.length) {G__13288__a[G__13288__i] = arguments[G__13288__i + 0]; ++G__13288__i;}
  items = new cljs.core.IndexedSeq(G__13288__a,0);
} 
return log__delegate.call(this,items);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__13289){
var items = cljs.core.seq(arglist__13289);
return log__delegate(items);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;

//# sourceMappingURL=util.js.map