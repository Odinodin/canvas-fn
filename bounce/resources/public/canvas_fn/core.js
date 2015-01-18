// Compiled by ClojureScript 0.0-2665 {}
if(!goog.isProvided_('canvas_fn.core')) {
goog.provide('canvas_fn.core');
}
goog.require('cljs.core');
goog.require('canvas_fn.util');
goog.require('canvas_fn.canvas');
goog.require('domina');
goog.require('clojure.browser.event');
canvas_fn.core.canvas = domina.by_id.call(null,"draw-canvas");
canvas_fn.core.model = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ball","ball",542859139),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null)], null));
canvas_fn.core.draw_blue_circle = (function draw_blue_circle(canvas,pos){
return canvas_fn.canvas.draw_circle.call(null,canvas,pos,(10),[cljs.core.str("rgb(10,10,255)")].join(''));
});
canvas_fn.core.render = (function render(canvas,model){

canvas_fn.canvas.init_canvas.call(null,canvas);

return canvas_fn.core.draw_blue_circle.call(null,canvas,new cljs.core.Keyword(null,"ball","ball",542859139).cljs$core$IFn$_invoke$arity$1(model));
});
canvas_fn.core.move_ball_x = (function move_ball_x(model){
return cljs.core.update_in.call(null,model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ball","ball",542859139),new cljs.core.Keyword(null,"x","x",2099068185)], null),(function (old){
return cljs.core.mod.call(null,(old + (1)),canvas_fn.core.canvas.width);
}));
});
canvas_fn.core.move_ball_y = (function move_ball_y(model){
return cljs.core.update_in.call(null,model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ball","ball",542859139),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(function (old){
return cljs.core.mod.call(null,(old + (1)),canvas_fn.core.canvas.height);
}));
});
canvas_fn.core.update_model = (function update_model(){

return cljs.core.reset_BANG_.call(null,canvas_fn.core.model,canvas_fn.core.move_ball_y.call(null,canvas_fn.core.move_ball_x.call(null,cljs.core.deref.call(null,canvas_fn.core.model))));
});
canvas_fn.core.main = (function main(){
canvas_fn.core.update_model.call(null);

return canvas_fn.core.render.call(null,canvas_fn.core.canvas,cljs.core.deref.call(null,canvas_fn.core.model));
});
canvas_fn.core.animate = (function animate(){

canvas_fn.canvas.animate.call(null,animate);

return canvas_fn.core.main.call(null);
});
canvas_fn.util.log.call(null,"Start animation");
canvas_fn.core.animate.call(null);

//# sourceMappingURL=core.js.map