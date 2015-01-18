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
canvas_fn.core.model = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"balls","balls",1987549674),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(30)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(60)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(30),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(90)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(60),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(60),new cljs.core.Keyword(null,"y","y",-1757859776),(30)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(60),new cljs.core.Keyword(null,"y","y",-1757859776),(60)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(60),new cljs.core.Keyword(null,"y","y",-1757859776),(90)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(30),new cljs.core.Keyword(null,"y","y",-1757859776),(90)], null)], null)], null));
canvas_fn.core.draw_blue_circle = (function draw_blue_circle(canvas,pos){
return canvas_fn.canvas.draw_circle.call(null,canvas,pos,(10),[cljs.core.str("rgb(200,20,200)")].join(''));
});
canvas_fn.core.render = (function render(canvas,model){

canvas_fn.canvas.init_canvas.call(null,canvas);

var seq__18318 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"balls","balls",1987549674).cljs$core$IFn$_invoke$arity$1(model));
var chunk__18319 = null;
var count__18320 = (0);
var i__18321 = (0);
while(true){
if((i__18321 < count__18320)){
var ball = cljs.core._nth.call(null,chunk__18319,i__18321);
canvas_fn.core.draw_blue_circle.call(null,canvas,ball);

var G__18322 = seq__18318;
var G__18323 = chunk__18319;
var G__18324 = count__18320;
var G__18325 = (i__18321 + (1));
seq__18318 = G__18322;
chunk__18319 = G__18323;
count__18320 = G__18324;
i__18321 = G__18325;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__18318);
if(temp__4126__auto__){
var seq__18318__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18318__$1)){
var c__12417__auto__ = cljs.core.chunk_first.call(null,seq__18318__$1);
var G__18326 = cljs.core.chunk_rest.call(null,seq__18318__$1);
var G__18327 = c__12417__auto__;
var G__18328 = cljs.core.count.call(null,c__12417__auto__);
var G__18329 = (0);
seq__18318 = G__18326;
chunk__18319 = G__18327;
count__18320 = G__18328;
i__18321 = G__18329;
continue;
} else {
var ball = cljs.core.first.call(null,seq__18318__$1);
canvas_fn.core.draw_blue_circle.call(null,canvas,ball);

var G__18330 = cljs.core.next.call(null,seq__18318__$1);
var G__18331 = null;
var G__18332 = (0);
var G__18333 = (0);
seq__18318 = G__18330;
chunk__18319 = G__18331;
count__18320 = G__18332;
i__18321 = G__18333;
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
var iter__12386__auto__ = (function iter__18338(s__18339){
return (new cljs.core.LazySeq(null,(function (){
var s__18339__$1 = s__18339;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__18339__$1);
if(temp__4126__auto__){
var s__18339__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18339__$2)){
var c__12384__auto__ = cljs.core.chunk_first.call(null,s__18339__$2);
var size__12385__auto__ = cljs.core.count.call(null,c__12384__auto__);
var b__18341 = cljs.core.chunk_buffer.call(null,size__12385__auto__);
if((function (){var i__18340 = (0);
while(true){
if((i__18340 < size__12385__auto__)){
var ball = cljs.core._nth.call(null,c__12384__auto__,i__18340);
cljs.core.chunk_append.call(null,b__18341,canvas_fn.core.move_ball_y.call(null,canvas_fn.core.move_ball_x.call(null,ball)));

var G__18342 = (i__18340 + (1));
i__18340 = G__18342;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18341),iter__18338.call(null,cljs.core.chunk_rest.call(null,s__18339__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18341),null);
}
} else {
var ball = cljs.core.first.call(null,s__18339__$2);
return cljs.core.cons.call(null,canvas_fn.core.move_ball_y.call(null,canvas_fn.core.move_ball_x.call(null,ball)),iter__18338.call(null,cljs.core.rest.call(null,s__18339__$2)));
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