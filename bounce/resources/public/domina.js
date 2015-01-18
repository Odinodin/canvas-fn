// Compiled by ClojureScript 0.0-2665 {}
if(!goog.isProvided_('domina')) {
goog.provide('domina');
}
goog.require('cljs.core');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.xml');
goog.require('goog.string');
goog.require('cljs.core');
goog.require('domina.support');
goog.require('goog.events');
goog.require('goog.style');
goog.require('clojure.string');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_19302 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);
var table_section_wrapper_19303 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);
var cell_wrapper_19304 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);
domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_19304,opt_wrapper_19302,table_section_wrapper_19303,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_19302,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_19303,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_19303,cell_wrapper_19304,table_section_wrapper_19303,table_section_wrapper_19303]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__11617__auto__ = div.firstChild;
if(cljs.core.truth_(and__11617__auto__)){
return div.firstChild.childNodes;
} else {
return and__11617__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));
var seq__19309 = cljs.core.seq.call(null,tbody);
var chunk__19310 = null;
var count__19311 = (0);
var i__19312 = (0);
while(true){
if((i__19312 < count__19311)){
var child = cljs.core._nth.call(null,chunk__19310,i__19312);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__19313 = seq__19309;
var G__19314 = chunk__19310;
var G__19315 = count__19311;
var G__19316 = (i__19312 + (1));
seq__19309 = G__19313;
chunk__19310 = G__19314;
count__19311 = G__19315;
i__19312 = G__19316;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__19309);
if(temp__4126__auto__){
var seq__19309__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19309__$1)){
var c__12416__auto__ = cljs.core.chunk_first.call(null,seq__19309__$1);
var G__19317 = cljs.core.chunk_rest.call(null,seq__19309__$1);
var G__19318 = c__12416__auto__;
var G__19319 = cljs.core.count.call(null,c__12416__auto__);
var G__19320 = (0);
seq__19309 = G__19317;
chunk__19310 = G__19318;
count__19311 = G__19319;
i__19312 = G__19320;
continue;
} else {
var child = cljs.core.first.call(null,seq__19309__$1);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__19321 = cljs.core.next.call(null,seq__19309__$1);
var G__19322 = null;
var G__19323 = (0);
var G__19324 = (0);
seq__19309 = G__19321;
chunk__19310 = G__19322;
count__19311 = G__19323;
i__19312 = G__19324;
continue;
}
} else {
return null;
}
}
break;
}
});
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){
return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.re_leading_whitespace,html))),div.firstChild);
});
/**
* takes an string of html and returns a NodeList of dom fragments
*/
domina.html_to_dom = (function html_to_dom(html){
var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");
var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();
var vec__19326 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));
var depth = cljs.core.nth.call(null,vec__19326,(0),null);
var start_wrap = cljs.core.nth.call(null,vec__19326,(1),null);
var end_wrap = cljs.core.nth.call(null,vec__19326,(2),null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');

return div;
})();
var level = depth;
while(true){
if((level > (0))){
var G__19327 = wrapper.lastChild;
var G__19328 = (level - (1));
wrapper = G__19327;
level = G__19328;
continue;
} else {
return wrapper;
}
break;
}
})();
if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_)){
domina.remove_extraneous_tbody_BANG_.call(null,div,html__$1,tag_name,start_wrap);
} else {
}

if(cljs.core.truth_((function (){var and__11617__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);
if(and__11617__auto__){
return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else {
return and__11617__auto__;
}
})())){
domina.restore_leading_whitespace_BANG_.call(null,div,html__$1);
} else {
}

return div.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){
if(cljs.core.truth_(cljs.core.re_find.call(null,domina.re_html,s))){
return domina.html_to_dom.call(null,s);
} else {
return document.createTextNode(s);
}
});

domina.DomContent = (function (){var obj19330 = {};
return obj19330;
})();

domina.nodes = (function nodes(content){
if((function (){var and__11617__auto__ = content;
if(and__11617__auto__){
return content.domina$DomContent$nodes$arity$1;
} else {
return and__11617__auto__;
}
})()){
return content.domina$DomContent$nodes$arity$1(content);
} else {
var x__12273__auto__ = (((content == null))?null:content);
return (function (){var or__11629__auto__ = (domina.nodes[goog.typeOf(x__12273__auto__)]);
if(or__11629__auto__){
return or__11629__auto__;
} else {
var or__11629__auto____$1 = (domina.nodes["_"]);
if(or__11629__auto____$1){
return or__11629__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});

domina.single_node = (function single_node(nodeseq){
if((function (){var and__11617__auto__ = nodeseq;
if(and__11617__auto__){
return nodeseq.domina$DomContent$single_node$arity$1;
} else {
return and__11617__auto__;
}
})()){
return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else {
var x__12273__auto__ = (((nodeseq == null))?null:nodeseq);
return (function (){var or__11629__auto__ = (domina.single_node[goog.typeOf(x__12273__auto__)]);
if(or__11629__auto__){
return or__11629__auto__;
} else {
var or__11629__auto____$1 = (domina.single_node["_"]);
if(or__11629__auto____$1){
return or__11629__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});

domina._STAR_debug_STAR_ = true;
/**
* @param {...*} var_args
*/
domina.log_debug = (function() { 
var log_debug__delegate = function (mesg){
if(cljs.core.truth_((function (){var and__11617__auto__ = domina._STAR_debug_STAR_;
if(cljs.core.truth_(and__11617__auto__)){
return !(cljs.core._EQ_.call(null,window.console,undefined));
} else {
return and__11617__auto__;
}
})())){
return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else {
return null;
}
};
var log_debug = function (var_args){
var mesg = null;
if (arguments.length > 0) {
var G__19331__i = 0, G__19331__a = new Array(arguments.length -  0);
while (G__19331__i < G__19331__a.length) {G__19331__a[G__19331__i] = arguments[G__19331__i + 0]; ++G__19331__i;}
  mesg = new cljs.core.IndexedSeq(G__19331__a,0);
} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__19332){
var mesg = cljs.core.seq(arglist__19332);
return log_debug__delegate(mesg);
});
log_debug.cljs$core$IFn$_invoke$arity$variadic = log_debug__delegate;
return log_debug;
})()
;
/**
* @param {...*} var_args
*/
domina.log = (function() { 
var log__delegate = function (mesg){
if(cljs.core.truth_(window.console)){
return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else {
return null;
}
};
var log = function (var_args){
var mesg = null;
if (arguments.length > 0) {
var G__19333__i = 0, G__19333__a = new Array(arguments.length -  0);
while (G__19333__i < G__19333__a.length) {G__19333__a[G__19333__i] = arguments[G__19333__i + 0]; ++G__19333__i;}
  mesg = new cljs.core.IndexedSeq(G__19333__a,0);
} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__19334){
var mesg = cljs.core.seq(arglist__19334);
return log__delegate(mesg);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){
return goog.dom.getElement(cljs.core.name.call(null,id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){
if(typeof domina.t19338 !== 'undefined'){
} else {

/**
* @constructor
*/
domina.t19338 = (function (class_name,by_class,meta19339){
this.class_name = class_name;
this.by_class = by_class;
this.meta19339 = meta19339;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
domina.t19338.prototype.domina$DomContent$ = true;

domina.t19338.prototype.domina$DomContent$nodes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,self__.class_name)));
});

domina.t19338.prototype.domina$DomContent$single_node$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return domina.normalize_seq.call(null,goog.dom.getElementByClass(cljs.core.name.call(null,self__.class_name)));
});

domina.t19338.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19340){
var self__ = this;
var _19340__$1 = this;
return self__.meta19339;
});

domina.t19338.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19340,meta19339__$1){
var self__ = this;
var _19340__$1 = this;
return (new domina.t19338(self__.class_name,self__.by_class,meta19339__$1));
});

domina.t19338.cljs$lang$type = true;

domina.t19338.cljs$lang$ctorStr = "domina/t19338";

domina.t19338.cljs$lang$ctorPrWriter = (function (this__12216__auto__,writer__12217__auto__,opt__12218__auto__){
return cljs.core._write.call(null,writer__12217__auto__,"domina/t19338");
});

domina.__GT_t19338 = (function __GT_t19338(class_name__$1,by_class__$1,meta19339){
return (new domina.t19338(class_name__$1,by_class__$1,meta19339));
});

}

return (new domina.t19338(class_name,by_class,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),91,new cljs.core.Keyword(null,"end-line","end-line",1837326455),130,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),128,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/odinholestandal/git/odin/canvas-fn/resources/public/domina.cljs"], null)));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){
return cljs.core.doall.call(null,cljs.core.mapcat.call(null,goog.dom.getChildren,domina.nodes.call(null,content)));
});
/**
* Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
* @param {...*} var_args
*/
domina.common_ancestor = (function() { 
var common_ancestor__delegate = function (contents){
return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.single_node,contents));
};
var common_ancestor = function (var_args){
var contents = null;
if (arguments.length > 0) {
var G__19341__i = 0, G__19341__a = new Array(arguments.length -  0);
while (G__19341__i < G__19341__a.length) {G__19341__a[G__19341__i] = arguments[G__19341__i + 0]; ++G__19341__i;}
  contents = new cljs.core.IndexedSeq(G__19341__a,0);
} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__19342){
var contents = cljs.core.seq(arglist__19342);
return common_ancestor__delegate(contents);
});
common_ancestor.cljs$core$IFn$_invoke$arity$variadic = common_ancestor__delegate;
return common_ancestor;
})()
;
/**
* Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
*/
domina.ancestor_QMARK_ = (function ancestor_QMARK_(ancestor_content,descendant_content){
return cljs.core._EQ_.call(null,domina.common_ancestor.call(null,ancestor_content,descendant_content),domina.single_node.call(null,ancestor_content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){
return cljs.core.map.call(null,(function (p1__19343_SHARP_){
return p1__19343_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){
domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);

return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){
domina.apply_with_cloning.call(null,(function (p1__19344_SHARP_,p2__19345_SHARP_){
return goog.dom.insertChildAt(p1__19344_SHARP_,p2__19345_SHARP_,idx);
}),parent_content,child_content);

return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){
domina.insert_BANG_.call(null,parent_content,child_content,(0));

return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__19347_SHARP_,p2__19346_SHARP_){
return goog.dom.insertSiblingBefore(p2__19346_SHARP_,p1__19347_SHARP_);
}),content,new_content);

return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__19349_SHARP_,p2__19348_SHARP_){
return goog.dom.insertSiblingAfter(p2__19348_SHARP_,p1__19349_SHARP_);
}),content,new_content);

return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__19351_SHARP_,p2__19350_SHARP_){
return goog.dom.replaceNode(p2__19350_SHARP_,p1__19351_SHARP_);
}),old_content,new_content);

return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){
return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){
return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){
cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.nodes.call(null,content)));

return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){
var s = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));
if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s))){
return null;
} else {
return s;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){
return domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){
var seq__19356_19360 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__19357_19361 = null;
var count__19358_19362 = (0);
var i__19359_19363 = (0);
while(true){
if((i__19359_19363 < count__19358_19362)){
var n_19364 = cljs.core._nth.call(null,chunk__19357_19361,i__19359_19363);
goog.style.setStyle(n_19364,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__19365 = seq__19356_19360;
var G__19366 = chunk__19357_19361;
var G__19367 = count__19358_19362;
var G__19368 = (i__19359_19363 + (1));
seq__19356_19360 = G__19365;
chunk__19357_19361 = G__19366;
count__19358_19362 = G__19367;
i__19359_19363 = G__19368;
continue;
} else {
var temp__4126__auto___19369 = cljs.core.seq.call(null,seq__19356_19360);
if(temp__4126__auto___19369){
var seq__19356_19370__$1 = temp__4126__auto___19369;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19356_19370__$1)){
var c__12416__auto___19371 = cljs.core.chunk_first.call(null,seq__19356_19370__$1);
var G__19372 = cljs.core.chunk_rest.call(null,seq__19356_19370__$1);
var G__19373 = c__12416__auto___19371;
var G__19374 = cljs.core.count.call(null,c__12416__auto___19371);
var G__19375 = (0);
seq__19356_19360 = G__19372;
chunk__19357_19361 = G__19373;
count__19358_19362 = G__19374;
i__19359_19363 = G__19375;
continue;
} else {
var n_19376 = cljs.core.first.call(null,seq__19356_19370__$1);
goog.style.setStyle(n_19376,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__19377 = cljs.core.next.call(null,seq__19356_19370__$1);
var G__19378 = null;
var G__19379 = (0);
var G__19380 = (0);
seq__19356_19360 = G__19377;
chunk__19357_19361 = G__19378;
count__19358_19362 = G__19379;
i__19359_19363 = G__19380;
continue;
}
} else {
}
}
break;
}

return content;
};
var set_style_BANG_ = function (content,name,var_args){
var value = null;
if (arguments.length > 2) {
var G__19381__i = 0, G__19381__a = new Array(arguments.length -  2);
while (G__19381__i < G__19381__a.length) {G__19381__a[G__19381__i] = arguments[G__19381__i + 2]; ++G__19381__i;}
  value = new cljs.core.IndexedSeq(G__19381__a,0);
} 
return set_style_BANG___delegate.call(this,content,name,value);};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__19382){
var content = cljs.core.first(arglist__19382);
arglist__19382 = cljs.core.next(arglist__19382);
var name = cljs.core.first(arglist__19382);
var value = cljs.core.rest(arglist__19382);
return set_style_BANG___delegate(content,name,value);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
/**
* Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_attr_BANG_ = (function() { 
var set_attr_BANG___delegate = function (content,name,value){
var seq__19387_19391 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__19388_19392 = null;
var count__19389_19393 = (0);
var i__19390_19394 = (0);
while(true){
if((i__19390_19394 < count__19389_19393)){
var n_19395 = cljs.core._nth.call(null,chunk__19388_19392,i__19390_19394);
n_19395.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__19396 = seq__19387_19391;
var G__19397 = chunk__19388_19392;
var G__19398 = count__19389_19393;
var G__19399 = (i__19390_19394 + (1));
seq__19387_19391 = G__19396;
chunk__19388_19392 = G__19397;
count__19389_19393 = G__19398;
i__19390_19394 = G__19399;
continue;
} else {
var temp__4126__auto___19400 = cljs.core.seq.call(null,seq__19387_19391);
if(temp__4126__auto___19400){
var seq__19387_19401__$1 = temp__4126__auto___19400;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19387_19401__$1)){
var c__12416__auto___19402 = cljs.core.chunk_first.call(null,seq__19387_19401__$1);
var G__19403 = cljs.core.chunk_rest.call(null,seq__19387_19401__$1);
var G__19404 = c__12416__auto___19402;
var G__19405 = cljs.core.count.call(null,c__12416__auto___19402);
var G__19406 = (0);
seq__19387_19391 = G__19403;
chunk__19388_19392 = G__19404;
count__19389_19393 = G__19405;
i__19390_19394 = G__19406;
continue;
} else {
var n_19407 = cljs.core.first.call(null,seq__19387_19401__$1);
n_19407.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__19408 = cljs.core.next.call(null,seq__19387_19401__$1);
var G__19409 = null;
var G__19410 = (0);
var G__19411 = (0);
seq__19387_19391 = G__19408;
chunk__19388_19392 = G__19409;
count__19389_19393 = G__19410;
i__19390_19394 = G__19411;
continue;
}
} else {
}
}
break;
}

return content;
};
var set_attr_BANG_ = function (content,name,var_args){
var value = null;
if (arguments.length > 2) {
var G__19412__i = 0, G__19412__a = new Array(arguments.length -  2);
while (G__19412__i < G__19412__a.length) {G__19412__a[G__19412__i] = arguments[G__19412__i + 2]; ++G__19412__i;}
  value = new cljs.core.IndexedSeq(G__19412__a,0);
} 
return set_attr_BANG___delegate.call(this,content,name,value);};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__19413){
var content = cljs.core.first(arglist__19413);
arglist__19413 = cljs.core.next(arglist__19413);
var name = cljs.core.first(arglist__19413);
var value = cljs.core.rest(arglist__19413);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){
var seq__19418_19422 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__19419_19423 = null;
var count__19420_19424 = (0);
var i__19421_19425 = (0);
while(true){
if((i__19421_19425 < count__19420_19424)){
var n_19426 = cljs.core._nth.call(null,chunk__19419_19423,i__19421_19425);
n_19426.removeAttribute(cljs.core.name.call(null,name));

var G__19427 = seq__19418_19422;
var G__19428 = chunk__19419_19423;
var G__19429 = count__19420_19424;
var G__19430 = (i__19421_19425 + (1));
seq__19418_19422 = G__19427;
chunk__19419_19423 = G__19428;
count__19420_19424 = G__19429;
i__19421_19425 = G__19430;
continue;
} else {
var temp__4126__auto___19431 = cljs.core.seq.call(null,seq__19418_19422);
if(temp__4126__auto___19431){
var seq__19418_19432__$1 = temp__4126__auto___19431;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19418_19432__$1)){
var c__12416__auto___19433 = cljs.core.chunk_first.call(null,seq__19418_19432__$1);
var G__19434 = cljs.core.chunk_rest.call(null,seq__19418_19432__$1);
var G__19435 = c__12416__auto___19433;
var G__19436 = cljs.core.count.call(null,c__12416__auto___19433);
var G__19437 = (0);
seq__19418_19422 = G__19434;
chunk__19419_19423 = G__19435;
count__19420_19424 = G__19436;
i__19421_19425 = G__19437;
continue;
} else {
var n_19438 = cljs.core.first.call(null,seq__19418_19432__$1);
n_19438.removeAttribute(cljs.core.name.call(null,name));

var G__19439 = cljs.core.next.call(null,seq__19418_19432__$1);
var G__19440 = null;
var G__19441 = (0);
var G__19442 = (0);
seq__19418_19422 = G__19439;
chunk__19419_19423 = G__19440;
count__19420_19424 = G__19441;
i__19421_19425 = G__19442;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
* Parses a CSS style string and returns the properties as a map.
*/
domina.parse_style_attributes = (function parse_style_attributes(style){
return cljs.core.reduce.call(null,(function (acc,pair){
var vec__19444 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.call(null,vec__19444,(0),null);
var v = cljs.core.nth.call(null,vec__19444,(1),null);
if(cljs.core.truth_((function (){var and__11617__auto__ = k;
if(cljs.core.truth_(and__11617__auto__)){
return v;
} else {
return and__11617__auto__;
}
})())){
return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k.toLowerCase()),v);
} else {
return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){
var style = domina.attr.call(null,content,"style");
if(typeof style === 'string'){
return domina.parse_style_attributes.call(null,style);
} else {
if(cljs.core.truth_(style.cssText)){
return domina.parse_style_attributes.call(null,style.cssText);
} else {
return null;
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){
var node = domina.single_node.call(null,content);
var attrs__$1 = node.attributes;
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,((function (node,attrs__$1){
return (function (p1__19445_SHARP_){
var attr = attrs__$1.item(p1__19445_SHARP_);
var value = attr.nodeValue;
if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value))){
return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else {
return null;
}
});})(node,attrs__$1))
,cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var seq__19452_19458 = cljs.core.seq.call(null,styles);
var chunk__19453_19459 = null;
var count__19454_19460 = (0);
var i__19455_19461 = (0);
while(true){
if((i__19455_19461 < count__19454_19460)){
var vec__19456_19462 = cljs.core._nth.call(null,chunk__19453_19459,i__19455_19461);
var name_19463 = cljs.core.nth.call(null,vec__19456_19462,(0),null);
var value_19464 = cljs.core.nth.call(null,vec__19456_19462,(1),null);
domina.set_style_BANG_.call(null,content,name_19463,value_19464);

var G__19465 = seq__19452_19458;
var G__19466 = chunk__19453_19459;
var G__19467 = count__19454_19460;
var G__19468 = (i__19455_19461 + (1));
seq__19452_19458 = G__19465;
chunk__19453_19459 = G__19466;
count__19454_19460 = G__19467;
i__19455_19461 = G__19468;
continue;
} else {
var temp__4126__auto___19469 = cljs.core.seq.call(null,seq__19452_19458);
if(temp__4126__auto___19469){
var seq__19452_19470__$1 = temp__4126__auto___19469;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19452_19470__$1)){
var c__12416__auto___19471 = cljs.core.chunk_first.call(null,seq__19452_19470__$1);
var G__19472 = cljs.core.chunk_rest.call(null,seq__19452_19470__$1);
var G__19473 = c__12416__auto___19471;
var G__19474 = cljs.core.count.call(null,c__12416__auto___19471);
var G__19475 = (0);
seq__19452_19458 = G__19472;
chunk__19453_19459 = G__19473;
count__19454_19460 = G__19474;
i__19455_19461 = G__19475;
continue;
} else {
var vec__19457_19476 = cljs.core.first.call(null,seq__19452_19470__$1);
var name_19477 = cljs.core.nth.call(null,vec__19457_19476,(0),null);
var value_19478 = cljs.core.nth.call(null,vec__19457_19476,(1),null);
domina.set_style_BANG_.call(null,content,name_19477,value_19478);

var G__19479 = cljs.core.next.call(null,seq__19452_19470__$1);
var G__19480 = null;
var G__19481 = (0);
var G__19482 = (0);
seq__19452_19458 = G__19479;
chunk__19453_19459 = G__19480;
count__19454_19460 = G__19481;
i__19455_19461 = G__19482;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
* Sets the specified CSS styles fpr each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){
var seq__19489_19495 = cljs.core.seq.call(null,attrs);
var chunk__19490_19496 = null;
var count__19491_19497 = (0);
var i__19492_19498 = (0);
while(true){
if((i__19492_19498 < count__19491_19497)){
var vec__19493_19499 = cljs.core._nth.call(null,chunk__19490_19496,i__19492_19498);
var name_19500 = cljs.core.nth.call(null,vec__19493_19499,(0),null);
var value_19501 = cljs.core.nth.call(null,vec__19493_19499,(1),null);
domina.set_attr_BANG_.call(null,content,name_19500,value_19501);

var G__19502 = seq__19489_19495;
var G__19503 = chunk__19490_19496;
var G__19504 = count__19491_19497;
var G__19505 = (i__19492_19498 + (1));
seq__19489_19495 = G__19502;
chunk__19490_19496 = G__19503;
count__19491_19497 = G__19504;
i__19492_19498 = G__19505;
continue;
} else {
var temp__4126__auto___19506 = cljs.core.seq.call(null,seq__19489_19495);
if(temp__4126__auto___19506){
var seq__19489_19507__$1 = temp__4126__auto___19506;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19489_19507__$1)){
var c__12416__auto___19508 = cljs.core.chunk_first.call(null,seq__19489_19507__$1);
var G__19509 = cljs.core.chunk_rest.call(null,seq__19489_19507__$1);
var G__19510 = c__12416__auto___19508;
var G__19511 = cljs.core.count.call(null,c__12416__auto___19508);
var G__19512 = (0);
seq__19489_19495 = G__19509;
chunk__19490_19496 = G__19510;
count__19491_19497 = G__19511;
i__19492_19498 = G__19512;
continue;
} else {
var vec__19494_19513 = cljs.core.first.call(null,seq__19489_19507__$1);
var name_19514 = cljs.core.nth.call(null,vec__19494_19513,(0),null);
var value_19515 = cljs.core.nth.call(null,vec__19494_19513,(1),null);
domina.set_attr_BANG_.call(null,content,name_19514,value_19515);

var G__19516 = cljs.core.next.call(null,seq__19489_19507__$1);
var G__19517 = null;
var G__19518 = (0);
var G__19519 = (0);
seq__19489_19495 = G__19516;
chunk__19490_19496 = G__19517;
count__19491_19497 = G__19518;
i__19492_19498 = G__19519;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
* Returns true if the node has the specified CSS class. Assumes content is a single node.
*/
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){
return goog.dom.classes.has(domina.single_node.call(null,content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){
var seq__19524_19528 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__19525_19529 = null;
var count__19526_19530 = (0);
var i__19527_19531 = (0);
while(true){
if((i__19527_19531 < count__19526_19530)){
var node_19532 = cljs.core._nth.call(null,chunk__19525_19529,i__19527_19531);
goog.dom.classes.add(node_19532,class$);

var G__19533 = seq__19524_19528;
var G__19534 = chunk__19525_19529;
var G__19535 = count__19526_19530;
var G__19536 = (i__19527_19531 + (1));
seq__19524_19528 = G__19533;
chunk__19525_19529 = G__19534;
count__19526_19530 = G__19535;
i__19527_19531 = G__19536;
continue;
} else {
var temp__4126__auto___19537 = cljs.core.seq.call(null,seq__19524_19528);
if(temp__4126__auto___19537){
var seq__19524_19538__$1 = temp__4126__auto___19537;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19524_19538__$1)){
var c__12416__auto___19539 = cljs.core.chunk_first.call(null,seq__19524_19538__$1);
var G__19540 = cljs.core.chunk_rest.call(null,seq__19524_19538__$1);
var G__19541 = c__12416__auto___19539;
var G__19542 = cljs.core.count.call(null,c__12416__auto___19539);
var G__19543 = (0);
seq__19524_19528 = G__19540;
chunk__19525_19529 = G__19541;
count__19526_19530 = G__19542;
i__19527_19531 = G__19543;
continue;
} else {
var node_19544 = cljs.core.first.call(null,seq__19524_19538__$1);
goog.dom.classes.add(node_19544,class$);

var G__19545 = cljs.core.next.call(null,seq__19524_19538__$1);
var G__19546 = null;
var G__19547 = (0);
var G__19548 = (0);
seq__19524_19528 = G__19545;
chunk__19525_19529 = G__19546;
count__19526_19530 = G__19547;
i__19527_19531 = G__19548;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
* Removes the specified CSS class from each node in the content.
*/
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){
var seq__19553_19557 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__19554_19558 = null;
var count__19555_19559 = (0);
var i__19556_19560 = (0);
while(true){
if((i__19556_19560 < count__19555_19559)){
var node_19561 = cljs.core._nth.call(null,chunk__19554_19558,i__19556_19560);
goog.dom.classes.remove(node_19561,class$);

var G__19562 = seq__19553_19557;
var G__19563 = chunk__19554_19558;
var G__19564 = count__19555_19559;
var G__19565 = (i__19556_19560 + (1));
seq__19553_19557 = G__19562;
chunk__19554_19558 = G__19563;
count__19555_19559 = G__19564;
i__19556_19560 = G__19565;
continue;
} else {
var temp__4126__auto___19566 = cljs.core.seq.call(null,seq__19553_19557);
if(temp__4126__auto___19566){
var seq__19553_19567__$1 = temp__4126__auto___19566;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19553_19567__$1)){
var c__12416__auto___19568 = cljs.core.chunk_first.call(null,seq__19553_19567__$1);
var G__19569 = cljs.core.chunk_rest.call(null,seq__19553_19567__$1);
var G__19570 = c__12416__auto___19568;
var G__19571 = cljs.core.count.call(null,c__12416__auto___19568);
var G__19572 = (0);
seq__19553_19557 = G__19569;
chunk__19554_19558 = G__19570;
count__19555_19559 = G__19571;
i__19556_19560 = G__19572;
continue;
} else {
var node_19573 = cljs.core.first.call(null,seq__19553_19567__$1);
goog.dom.classes.remove(node_19573,class$);

var G__19574 = cljs.core.next.call(null,seq__19553_19567__$1);
var G__19575 = null;
var G__19576 = (0);
var G__19577 = (0);
seq__19553_19557 = G__19574;
chunk__19554_19558 = G__19575;
count__19555_19559 = G__19576;
i__19556_19560 = G__19577;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
* Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
*/
domina.classes = (function classes(content){
return cljs.core.seq.call(null,goog.dom.classes.get(domina.single_node.call(null,content)));
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){
var classes_19586__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var seq__19582_19587 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__19583_19588 = null;
var count__19584_19589 = (0);
var i__19585_19590 = (0);
while(true){
if((i__19585_19590 < count__19584_19589)){
var node_19591 = cljs.core._nth.call(null,chunk__19583_19588,i__19585_19590);
goog.dom.classes.set(node_19591,classes_19586__$1);

var G__19592 = seq__19582_19587;
var G__19593 = chunk__19583_19588;
var G__19594 = count__19584_19589;
var G__19595 = (i__19585_19590 + (1));
seq__19582_19587 = G__19592;
chunk__19583_19588 = G__19593;
count__19584_19589 = G__19594;
i__19585_19590 = G__19595;
continue;
} else {
var temp__4126__auto___19596 = cljs.core.seq.call(null,seq__19582_19587);
if(temp__4126__auto___19596){
var seq__19582_19597__$1 = temp__4126__auto___19596;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19582_19597__$1)){
var c__12416__auto___19598 = cljs.core.chunk_first.call(null,seq__19582_19597__$1);
var G__19599 = cljs.core.chunk_rest.call(null,seq__19582_19597__$1);
var G__19600 = c__12416__auto___19598;
var G__19601 = cljs.core.count.call(null,c__12416__auto___19598);
var G__19602 = (0);
seq__19582_19587 = G__19599;
chunk__19583_19588 = G__19600;
count__19584_19589 = G__19601;
i__19585_19590 = G__19602;
continue;
} else {
var node_19603 = cljs.core.first.call(null,seq__19582_19597__$1);
goog.dom.classes.set(node_19603,classes_19586__$1);

var G__19604 = cljs.core.next.call(null,seq__19582_19597__$1);
var G__19605 = null;
var G__19606 = (0);
var G__19607 = (0);
seq__19582_19587 = G__19604;
chunk__19583_19588 = G__19605;
count__19584_19589 = G__19606;
i__19585_19590 = G__19607;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
* Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
*/
domina.text = (function text(content){
return goog.string.trim(goog.dom.getTextContent(domina.single_node.call(null,content)));
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){
var seq__19612_19616 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__19613_19617 = null;
var count__19614_19618 = (0);
var i__19615_19619 = (0);
while(true){
if((i__19615_19619 < count__19614_19618)){
var node_19620 = cljs.core._nth.call(null,chunk__19613_19617,i__19615_19619);
goog.dom.setTextContent(node_19620,value);

var G__19621 = seq__19612_19616;
var G__19622 = chunk__19613_19617;
var G__19623 = count__19614_19618;
var G__19624 = (i__19615_19619 + (1));
seq__19612_19616 = G__19621;
chunk__19613_19617 = G__19622;
count__19614_19618 = G__19623;
i__19615_19619 = G__19624;
continue;
} else {
var temp__4126__auto___19625 = cljs.core.seq.call(null,seq__19612_19616);
if(temp__4126__auto___19625){
var seq__19612_19626__$1 = temp__4126__auto___19625;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19612_19626__$1)){
var c__12416__auto___19627 = cljs.core.chunk_first.call(null,seq__19612_19626__$1);
var G__19628 = cljs.core.chunk_rest.call(null,seq__19612_19626__$1);
var G__19629 = c__12416__auto___19627;
var G__19630 = cljs.core.count.call(null,c__12416__auto___19627);
var G__19631 = (0);
seq__19612_19616 = G__19628;
chunk__19613_19617 = G__19629;
count__19614_19618 = G__19630;
i__19615_19619 = G__19631;
continue;
} else {
var node_19632 = cljs.core.first.call(null,seq__19612_19626__$1);
goog.dom.setTextContent(node_19632,value);

var G__19633 = cljs.core.next.call(null,seq__19612_19626__$1);
var G__19634 = null;
var G__19635 = (0);
var G__19636 = (0);
seq__19612_19616 = G__19633;
chunk__19613_19617 = G__19634;
count__19614_19618 = G__19635;
i__19615_19619 = G__19636;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
* Returns the value of a node (presumably a form field). Assumes content is a single node.
*/
domina.value = (function value(content){
return goog.dom.forms.getValue(domina.single_node.call(null,content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){
var seq__19641_19645 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__19642_19646 = null;
var count__19643_19647 = (0);
var i__19644_19648 = (0);
while(true){
if((i__19644_19648 < count__19643_19647)){
var node_19649 = cljs.core._nth.call(null,chunk__19642_19646,i__19644_19648);
goog.dom.forms.setValue(node_19649,value);

var G__19650 = seq__19641_19645;
var G__19651 = chunk__19642_19646;
var G__19652 = count__19643_19647;
var G__19653 = (i__19644_19648 + (1));
seq__19641_19645 = G__19650;
chunk__19642_19646 = G__19651;
count__19643_19647 = G__19652;
i__19644_19648 = G__19653;
continue;
} else {
var temp__4126__auto___19654 = cljs.core.seq.call(null,seq__19641_19645);
if(temp__4126__auto___19654){
var seq__19641_19655__$1 = temp__4126__auto___19654;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19641_19655__$1)){
var c__12416__auto___19656 = cljs.core.chunk_first.call(null,seq__19641_19655__$1);
var G__19657 = cljs.core.chunk_rest.call(null,seq__19641_19655__$1);
var G__19658 = c__12416__auto___19656;
var G__19659 = cljs.core.count.call(null,c__12416__auto___19656);
var G__19660 = (0);
seq__19641_19645 = G__19657;
chunk__19642_19646 = G__19658;
count__19643_19647 = G__19659;
i__19644_19648 = G__19660;
continue;
} else {
var node_19661 = cljs.core.first.call(null,seq__19641_19655__$1);
goog.dom.forms.setValue(node_19661,value);

var G__19662 = cljs.core.next.call(null,seq__19641_19655__$1);
var G__19663 = null;
var G__19664 = (0);
var G__19665 = (0);
seq__19641_19645 = G__19662;
chunk__19642_19646 = G__19663;
count__19643_19647 = G__19664;
i__19644_19648 = G__19665;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
* Returns the innerHTML of a node. Assumes content is a single node.
*/
domina.html = (function html(content){
return domina.single_node.call(null,content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){
return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){
var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));
var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);
var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();
var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);
if(cljs.core.truth_((function (){var and__11617__auto__ = allows_inner_html_QMARK_;
if(and__11617__auto__){
var and__11617__auto____$1 = (function (){var or__11629__auto__ = domina.support.leading_whitespace_QMARK_;
if(cljs.core.truth_(or__11629__auto__)){
return or__11629__auto__;
} else {
return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();
if(cljs.core.truth_(and__11617__auto____$1)){
return !(special_tag_QMARK_);
} else {
return and__11617__auto____$1;
}
} else {
return and__11617__auto__;
}
})())){
var value_19676 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var seq__19672_19677 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__19673_19678 = null;
var count__19674_19679 = (0);
var i__19675_19680 = (0);
while(true){
if((i__19675_19680 < count__19674_19679)){
var node_19681 = cljs.core._nth.call(null,chunk__19673_19678,i__19675_19680);
goog.events.removeAll(node_19681);

node_19681.innerHTML = value_19676;

var G__19682 = seq__19672_19677;
var G__19683 = chunk__19673_19678;
var G__19684 = count__19674_19679;
var G__19685 = (i__19675_19680 + (1));
seq__19672_19677 = G__19682;
chunk__19673_19678 = G__19683;
count__19674_19679 = G__19684;
i__19675_19680 = G__19685;
continue;
} else {
var temp__4126__auto___19686 = cljs.core.seq.call(null,seq__19672_19677);
if(temp__4126__auto___19686){
var seq__19672_19687__$1 = temp__4126__auto___19686;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19672_19687__$1)){
var c__12416__auto___19688 = cljs.core.chunk_first.call(null,seq__19672_19687__$1);
var G__19689 = cljs.core.chunk_rest.call(null,seq__19672_19687__$1);
var G__19690 = c__12416__auto___19688;
var G__19691 = cljs.core.count.call(null,c__12416__auto___19688);
var G__19692 = (0);
seq__19672_19677 = G__19689;
chunk__19673_19678 = G__19690;
count__19674_19679 = G__19691;
i__19675_19680 = G__19692;
continue;
} else {
var node_19693 = cljs.core.first.call(null,seq__19672_19687__$1);
goog.events.removeAll(node_19693);

node_19693.innerHTML = value_19676;

var G__19694 = cljs.core.next.call(null,seq__19672_19687__$1);
var G__19695 = null;
var G__19696 = (0);
var G__19697 = (0);
seq__19672_19677 = G__19694;
chunk__19673_19678 = G__19695;
count__19674_19679 = G__19696;
i__19675_19680 = G__19697;
continue;
}
} else {
}
}
break;
}
}catch (e19671){if((e19671 instanceof Error)){
var e_19698 = e19671;
domina.replace_children_BANG_.call(null,content,value_19676);
} else {
throw e19671;

}
}} else {
domina.replace_children_BANG_.call(null,content,html_string);
}

return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){
if(typeof inner_content === 'string'){
return domina.set_inner_html_BANG_.call(null,content,inner_content);
} else {
return domina.replace_children_BANG_.call(null,content,inner_content);
}
});
/**
* Returns data associated with a node for a given key. Assumes
* content is a single node. If the bubble parameter is set to true,
* will search parent nodes if the key is not found.
*/
domina.get_data = (function() {
var get_data = null;
var get_data__2 = (function (node,key){
return get_data.call(null,node,key,false);
});
var get_data__3 = (function (node,key,bubble){
var m = domina.single_node.call(null,node).__domina_data;
var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);
if(cljs.core.truth_((function (){var and__11617__auto__ = bubble;
if(cljs.core.truth_(and__11617__auto__)){
return (value == null);
} else {
return and__11617__auto__;
}
})())){
var temp__4126__auto__ = domina.single_node.call(null,node).parentNode;
if(cljs.core.truth_(temp__4126__auto__)){
var parent = temp__4126__auto__;
return get_data.call(null,parent,key,true);
} else {
return null;
}
} else {
return value;
}
});
get_data = function(node,key,bubble){
switch(arguments.length){
case 2:
return get_data__2.call(this,node,key);
case 3:
return get_data__3.call(this,node,key,bubble);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_data.cljs$core$IFn$_invoke$arity$2 = get_data__2;
get_data.cljs$core$IFn$_invoke$arity$3 = get_data__3;
return get_data;
})()
;
/**
* Sets a data on the node for a given key. Assumes content is a
* single node. Data should be ClojureScript values and data structures
* only; using other objects as data may result in memory leaks on some
* browsers.
*/
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){
var m = (function (){var or__11629__auto__ = domina.single_node.call(null,node).__domina_data;
if(cljs.core.truth_(or__11629__auto__)){
return or__11629__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){
var parents = domina.nodes.call(null,parent_content);
var children = domina.nodes.call(null,child_content);
var first_child = (function (){var frag = document.createDocumentFragment();
var seq__19705_19709 = cljs.core.seq.call(null,children);
var chunk__19706_19710 = null;
var count__19707_19711 = (0);
var i__19708_19712 = (0);
while(true){
if((i__19708_19712 < count__19707_19711)){
var child_19713 = cljs.core._nth.call(null,chunk__19706_19710,i__19708_19712);
frag.appendChild(child_19713);

var G__19714 = seq__19705_19709;
var G__19715 = chunk__19706_19710;
var G__19716 = count__19707_19711;
var G__19717 = (i__19708_19712 + (1));
seq__19705_19709 = G__19714;
chunk__19706_19710 = G__19715;
count__19707_19711 = G__19716;
i__19708_19712 = G__19717;
continue;
} else {
var temp__4126__auto___19718 = cljs.core.seq.call(null,seq__19705_19709);
if(temp__4126__auto___19718){
var seq__19705_19719__$1 = temp__4126__auto___19718;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19705_19719__$1)){
var c__12416__auto___19720 = cljs.core.chunk_first.call(null,seq__19705_19719__$1);
var G__19721 = cljs.core.chunk_rest.call(null,seq__19705_19719__$1);
var G__19722 = c__12416__auto___19720;
var G__19723 = cljs.core.count.call(null,c__12416__auto___19720);
var G__19724 = (0);
seq__19705_19709 = G__19721;
chunk__19706_19710 = G__19722;
count__19707_19711 = G__19723;
i__19708_19712 = G__19724;
continue;
} else {
var child_19725 = cljs.core.first.call(null,seq__19705_19719__$1);
frag.appendChild(child_19725);

var G__19726 = cljs.core.next.call(null,seq__19705_19719__$1);
var G__19727 = null;
var G__19728 = (0);
var G__19729 = (0);
seq__19705_19709 = G__19726;
chunk__19706_19710 = G__19727;
count__19707_19711 = G__19728;
i__19708_19712 = G__19729;
continue;
}
} else {
}
}
break;
}

return frag;
})();
var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - (1)),((function (parents,children,first_child){
return (function (){
return first_child.cloneNode(true);
});})(parents,children,first_child))
));
if(cljs.core.seq.call(null,parents)){
f.call(null,cljs.core.first.call(null,parents),first_child);

return cljs.core.doall.call(null,cljs.core.map.call(null,((function (parents,children,first_child,other_children){
return (function (p1__19699_SHARP_,p2__19700_SHARP_){
return f.call(null,p1__19699_SHARP_,p2__19700_SHARP_);
});})(parents,children,first_child,other_children))
,cljs.core.rest.call(null,parents),other_children));
} else {
return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){
return lazy_nl_via_item.call(null,nl,(0));
});
var lazy_nl_via_item__2 = (function (nl,n){
if((n < nl.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + (1))));
}),null,null));
} else {
return null;
}
});
lazy_nl_via_item = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_item__1.call(this,nl);
case 2:
return lazy_nl_via_item__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_item__1;
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_item__2;
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__1 = (function (nl){
return lazy_nl_via_array_ref.call(null,nl,(0));
});
var lazy_nl_via_array_ref__2 = (function (nl,n){
if((n < nl.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + (1))));
}),null,null));
} else {
return null;
}
});
lazy_nl_via_array_ref = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_array_ref__1.call(this,nl);
case 2:
return lazy_nl_via_array_ref__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_array_ref__1;
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_array_ref__2;
return lazy_nl_via_array_ref;
})()
;
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things
*/
domina.lazy_nodelist = (function lazy_nodelist(nl){
if(cljs.core.truth_(nl.item)){
return domina.lazy_nl_via_item.call(null,nl);
} else {
return domina.lazy_nl_via_array_ref.call(null,nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){
var and__11617__auto__ = obj;
if(cljs.core.truth_(and__11617__auto__)){
return obj.length;
} else {
return and__11617__auto__;
}
});
/**
* Some versions of IE have things that are like arrays in that they
* respond to .length, but are not arrays nor NodeSets. This returns a
* real sequence view of such objects. If passed an object that is not
* a logical sequence at all, returns a single-item seq containing the
* object.
*/
domina.normalize_seq = (function normalize_seq(list_thing){
if((list_thing == null)){
return cljs.core.List.EMPTY;
} else {
if((function (){var G__19731 = list_thing;
if(G__19731){
var bit__12310__auto__ = (G__19731.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__12310__auto__) || (G__19731.cljs$core$ISeqable$)){
return true;
} else {
if((!G__19731.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__19731);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__19731);
}
})()){
return cljs.core.seq.call(null,list_thing);
} else {
if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing))){
return domina.lazy_nodelist.call(null,list_thing);
} else {
return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));

}
}
}
});
(domina.DomContent["_"] = true);

(domina.nodes["_"] = (function (content){
if((content == null)){
return cljs.core.List.EMPTY;
} else {
if((function (){var G__19732 = content;
if(G__19732){
var bit__12310__auto__ = (G__19732.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__12310__auto__) || (G__19732.cljs$core$ISeqable$)){
return true;
} else {
if((!G__19732.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__19732);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__19732);
}
})()){
return cljs.core.seq.call(null,content);
} else {
if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content))){
return domina.lazy_nodelist.call(null,content);
} else {
return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));

}
}
}
}));

(domina.single_node["_"] = (function (content){
if((content == null)){
return null;
} else {
if((function (){var G__19733 = content;
if(G__19733){
var bit__12310__auto__ = (G__19733.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__12310__auto__) || (G__19733.cljs$core$ISeqable$)){
return true;
} else {
if((!G__19733.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__19733);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__19733);
}
})()){
return cljs.core.first.call(null,content);
} else {
if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content))){
return content.item((0));
} else {
return content;

}
}
}
}));

(domina.DomContent["string"] = true);

(domina.nodes["string"] = (function (s){
return cljs.core.doall.call(null,domina.nodes.call(null,domina.string_to_dom.call(null,s)));
}));

(domina.single_node["string"] = (function (s){
return domina.single_node.call(null,domina.string_to_dom.call(null,s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined'))){
NodeList.prototype.cljs$core$ISeqable$ = true;

NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return domina.lazy_nodelist.call(null,nodelist__$1);
});

NodeList.prototype.cljs$core$IIndexed$ = true;

NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){
var nodelist__$1 = this;
return nodelist__$1.item(n);
});

NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){
var nodelist__$1 = this;
if((nodelist__$1.length <= n)){
return not_found;
} else {
return cljs.core.nth.call(null,nodelist__$1,n);
}
});

NodeList.prototype.cljs$core$ICounted$ = true;

NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return nodelist__$1.length;
});
} else {
}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined'))){
StaticNodeList.prototype.cljs$core$ISeqable$ = true;

StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return domina.lazy_nodelist.call(null,nodelist__$1);
});

StaticNodeList.prototype.cljs$core$IIndexed$ = true;

StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){
var nodelist__$1 = this;
return nodelist__$1.item(n);
});

StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){
var nodelist__$1 = this;
if((nodelist__$1.length <= n)){
return not_found;
} else {
return cljs.core.nth.call(null,nodelist__$1,n);
}
});

StaticNodeList.prototype.cljs$core$ICounted$ = true;

StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return nodelist__$1.length;
});
} else {
}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined'))){
HTMLCollection.prototype.cljs$core$ISeqable$ = true;

HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var coll__$1 = this;
return domina.lazy_nodelist.call(null,coll__$1);
});

HTMLCollection.prototype.cljs$core$IIndexed$ = true;

HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var coll__$1 = this;
return coll__$1.item(n);
});

HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var coll__$1 = this;
if((coll__$1.length <= n)){
return not_found;
} else {
return cljs.core.nth.call(null,coll__$1,n);
}
});

HTMLCollection.prototype.cljs$core$ICounted$ = true;

HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var coll__$1 = this;
return coll__$1.length;
});
} else {
}

//# sourceMappingURL=domina.js.map