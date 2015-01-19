// Compiled by ClojureScript 0.0-2665 {}
if(!goog.isProvided_('canvas_fn.core')) {
goog.provide('canvas_fn.core');
}
goog.require('cljs.core');
goog.require('domina');
goog.require('canvas_fn.util');
goog.require('figwheel.client');
goog.require('canvas_fn.canvas');
goog.require('clojure.browser.event');
canvas_fn.core.canvas = domina.by_id.call(null,"draw-canvas");
if(typeof canvas_fn.core.model !== 'undefined'){
} else {
canvas_fn.core.model = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"balls","balls",1987549674),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(30)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(60)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(30),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(90)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(60),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(60),new cljs.core.Keyword(null,"y","y",-1757859776),(30)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(60),new cljs.core.Keyword(null,"y","y",-1757859776),(60)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(60),new cljs.core.Keyword(null,"y","y",-1757859776),(90)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(30),new cljs.core.Keyword(null,"y","y",-1757859776),(90)], null)], null)], null));
}
canvas_fn.core.draw_blue_circle = (function draw_blue_circle(canvas,pos){
return canvas_fn.canvas.draw_circle.call(null,canvas,pos,(10),[cljs.core.str("rgb(0,0,0)")].join(''));
});
canvas_fn.core.render = (function render(canvas,model){

canvas_fn.canvas.init_canvas.call(null,canvas);

var seq__18017 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"balls","balls",1987549674).cljs$core$IFn$_invoke$arity$1(model));
var chunk__18018 = null;
var count__18019 = (0);
var i__18020 = (0);
while(true){
if((i__18020 < count__18019)){
var ball = cljs.core._nth.call(null,chunk__18018,i__18020);
canvas_fn.core.draw_blue_circle.call(null,canvas,ball);

var G__18021 = seq__18017;
var G__18022 = chunk__18018;
var G__18023 = count__18019;
var G__18024 = (i__18020 + (1));
seq__18017 = G__18021;
chunk__18018 = G__18022;
count__18019 = G__18023;
i__18020 = G__18024;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__18017);
if(temp__4126__auto__){
var seq__18017__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18017__$1)){
var c__12417__auto__ = cljs.core.chunk_first.call(null,seq__18017__$1);
var G__18025 = cljs.core.chunk_rest.call(null,seq__18017__$1);
var G__18026 = c__12417__auto__;
var G__18027 = cljs.core.count.call(null,c__12417__auto__);
var G__18028 = (0);
seq__18017 = G__18025;
chunk__18018 = G__18026;
count__18019 = G__18027;
i__18020 = G__18028;
continue;
} else {
var ball = cljs.core.first.call(null,seq__18017__$1);
canvas_fn.core.draw_blue_circle.call(null,canvas,ball);

var G__18029 = cljs.core.next.call(null,seq__18017__$1);
var G__18030 = null;
var G__18031 = (0);
var G__18032 = (0);
seq__18017 = G__18029;
chunk__18018 = G__18030;
count__18019 = G__18031;
i__18020 = G__18032;
continue;
}
} else {
return null;
}
}
break;
}
});
canvas_fn.core.move_ball_x = (function move_ball_x(ball){
return cljs.core.assoc.call(null,ball,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.mod.call(null,(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(ball) + (1)),canvas_fn.core.canvas.width));
});
canvas_fn.core.move_ball_y = (function move_ball_y(ball){
return cljs.core.assoc.call(null,ball,new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.mod.call(null,(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(ball) + (1)),canvas_fn.core.canvas.height));
});
canvas_fn.core.move_balls = (function move_balls(balls){
var iter__12386__auto__ = (function iter__18037(s__18038){
return (new cljs.core.LazySeq(null,(function (){
var s__18038__$1 = s__18038;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__18038__$1);
if(temp__4126__auto__){
var s__18038__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18038__$2)){
var c__12384__auto__ = cljs.core.chunk_first.call(null,s__18038__$2);
var size__12385__auto__ = cljs.core.count.call(null,c__12384__auto__);
var b__18040 = cljs.core.chunk_buffer.call(null,size__12385__auto__);
if((function (){var i__18039 = (0);
while(true){
if((i__18039 < size__12385__auto__)){
var ball = cljs.core._nth.call(null,c__12384__auto__,i__18039);
cljs.core.chunk_append.call(null,b__18040,canvas_fn.core.move_ball_y.call(null,canvas_fn.core.move_ball_x.call(null,ball)));

var G__18041 = (i__18039 + (1));
i__18039 = G__18041;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18040),iter__18037.call(null,cljs.core.chunk_rest.call(null,s__18038__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18040),null);
}
} else {
var ball = cljs.core.first.call(null,s__18038__$2);
return cljs.core.cons.call(null,canvas_fn.core.move_ball_y.call(null,canvas_fn.core.move_ball_x.call(null,ball)),iter__18037.call(null,cljs.core.rest.call(null,s__18038__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__12386__auto__.call(null,balls);
});
canvas_fn.core.update_model = (function update_model(model){

return cljs.core.reset_BANG_.call(null,model,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"balls","balls",1987549674)],[canvas_fn.core.move_balls.call(null,new cljs.core.Keyword(null,"balls","balls",1987549674).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,model)))]));
});
canvas_fn.core.main = (function main(){
canvas_fn.core.update_model.call(null,canvas_fn.core.model);

return canvas_fn.core.render.call(null,canvas_fn.core.canvas,cljs.core.deref.call(null,canvas_fn.core.model));
});
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function (){
return null;
})], null));
canvas_fn.core.animate = (function animate(){

canvas_fn.canvas.animate.call(null,animate);

return canvas_fn.core.main.call(null);
});
canvas_fn.util.log.call(null,"Start animation");
canvas_fn.core.animate.call(null);

//# sourceMappingURL=core.js.map