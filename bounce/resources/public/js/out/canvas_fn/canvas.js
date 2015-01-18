// Compiled by ClojureScript 0.0-2665 {}
if(!goog.isProvided_('canvas_fn.canvas')) {
goog.provide('canvas_fn.canvas');
}
goog.require('cljs.core');
/**
* Request animation frame
*/
canvas_fn.canvas.animate = (function (){var or__11629__auto__ = window.requestAnimationFrame;
if(cljs.core.truth_(or__11629__auto__)){
return or__11629__auto__;
} else {
var or__11629__auto____$1 = window.oRequestAnimationFrame;
if(cljs.core.truth_(or__11629__auto____$1)){
return or__11629__auto____$1;
} else {
var or__11629__auto____$2 = window.mozRequestAnimationFrame;
if(cljs.core.truth_(or__11629__auto____$2)){
return or__11629__auto____$2;
} else {
var or__11629__auto____$3 = window.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__11629__auto____$3)){
return or__11629__auto____$3;
} else {
var or__11629__auto____$4 = window.msRequestAnimationFrame;
if(cljs.core.truth_(or__11629__auto____$4)){
return or__11629__auto____$4;
} else {
return ((function (or__11629__auto____$4,or__11629__auto____$3,or__11629__auto____$2,or__11629__auto____$1,or__11629__auto__){
return (function (callback){
return setTimeout(callback,(17));
});
;})(or__11629__auto____$4,or__11629__auto____$3,or__11629__auto____$2,or__11629__auto____$1,or__11629__auto__))
}
}
}
}
}
})();
canvas_fn.canvas.init_canvas = (function init_canvas(canvas){

var ctx = canvas.getContext("2d");
var width = canvas.width;
var height = canvas.height;
ctx.clearRect((0),(0),width,height);

ctx.lineWidth = (5);

ctx.beginPath();

ctx.moveTo((0),(0));

ctx.lineTo((0),height);

ctx.lineTo(width,height);

ctx.lineTo(width,(0));

ctx.lineTo((0),(0));

return ctx.stroke();
});
canvas_fn.canvas.draw_circle = (function draw_circle(canvas,position,radius,fill_style){
var ctx = canvas.getContext("2d");
ctx.fillStyle = fill_style;

ctx.beginPath();

ctx.arc(position.call(null,new cljs.core.Keyword(null,"x","x",2099068185)),position.call(null,new cljs.core.Keyword(null,"y","y",-1757859776)),radius,(0),((2) * Math.PI),true);

ctx.closePath();

return ctx.fill();
});
canvas_fn.canvas.draw_rect = (function draw_rect(canvas,position,width,height){
var ctx = canvas.getContext("2d");
ctx.lineWidth = (2);

ctx.beginPath();

ctx.moveTo((0),(0));

ctx.lineTo((0),height);

ctx.lineTo(width,height);

ctx.lineTo(width,(0));

ctx.lineTo((0),(0));

return ctx.stroke();
});

//# sourceMappingURL=canvas.js.map