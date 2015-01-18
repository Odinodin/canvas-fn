// Compiled by ClojureScript 0.0-2127
goog.provide('canvas_fn.util');
goog.require('cljs.core');
/**
* @param {...*} var_args
*/
canvas_fn.util.log = (function() { 
var log__delegate = function (items){return console.log(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,items));
};
var log = function (var_args){
var items = null;if (arguments.length > 0) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,items);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__6056){
var items = cljs.core.seq(arglist__6056);
return log__delegate(items);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
