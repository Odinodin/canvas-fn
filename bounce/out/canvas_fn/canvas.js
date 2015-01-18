// Compiled by ClojureScript 0.0-2127
goog.provide('canvas_fn.canvas');
goog.require('cljs.core');
/**
* Request animation frame
*/
canvas_fn.canvas.animate = (function (){var or__3405__auto__ = window.requestAnimationFrame;if(cljs.core.truth_(or__3405__auto__))
{return or__3405__auto__;
} else
{var or__3405__auto____$1 = window.oRequestAnimationFrame;if(cljs.core.truth_(or__3405__auto____$1))
{return or__3405__auto____$1;
} else
{var or__3405__auto____$2 = window.mozRequestAnimationFrame;if(cljs.core.truth_(or__3405__auto____$2))
{return or__3405__auto____$2;
} else
{var or__3405__auto____$3 = window.webkitRequestAnimationFrame;if(cljs.core.truth_(or__3405__auto____$3))
{return or__3405__auto____$3;
} else
{var or__3405__auto____$4 = window.msRequestAnimationFrame;if(cljs.core.truth_(or__3405__auto____$4))
{return or__3405__auto____$4;
} else
{return (function (callback){return setTimeout(callback,17);
});
}
}
}
}
}
})();
canvas_fn.canvas.init_canvas = (function init_canvas(canvas){var ctx = canvas.getContext("2d");var width = canvas.getAttribute("width");var height = canvas.getAttribute("height");ctx.clearRect(0,0,width,height);
ctx.lineWidth = 5;
ctx.beginPath();
ctx.moveTo(0,0);
ctx.lineTo(0,height);
ctx.lineTo(width,height);
ctx.lineTo(width,0);
ctx.lineTo(0,0);
return ctx.stroke();
});
canvas_fn.canvas.draw_circle = (function draw_circle(canvas,position,radius,fill_style){var ctx = canvas.getContext("2d");ctx.fillStyle = fill_style;
ctx.beginPath();
ctx.arc((position.cljs$core$IFn$_invoke$arity$1 ? position.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$16) : position.call(null,cljs.core.constant$keyword$16)),(position.cljs$core$IFn$_invoke$arity$1 ? position.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$17) : position.call(null,cljs.core.constant$keyword$17)),radius,0,(2 * Math.PI),true);
ctx.closePath();
return ctx.fill();
});
canvas_fn.canvas.draw_rect = (function draw_rect(canvas,position,width,height){var ctx = canvas.getContext("2d");ctx.lineWidth = 2;
ctx.beginPath();
ctx.moveTo(0,0);
ctx.lineTo(0,height);
ctx.lineTo(width,height);
ctx.lineTo(width,0);
ctx.lineTo(0,0);
return ctx.stroke();
});
