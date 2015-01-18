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
var opt_wrapper_19301 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);
var table_section_wrapper_19302 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);
var cell_wrapper_19303 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);
domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_19303,opt_wrapper_19301,table_section_wrapper_19302,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_19301,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_19302,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_19302,cell_wrapper_19303,table_section_wrapper_19302,table_section_wrapper_19302]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__11617__auto__ = div.firstChild;
if(cljs.core.truth_(and__11617__auto__)){
return div.firstChild.childNodes;
} else {
return and__11617__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));
var seq__19308 = cljs.core.seq.call(null,tbody);
var chunk__19309 = null;
var count__19310 = (0);
var i__19311 = (0);
while(true){
if((i__19311 < count__19310)){
var child = cljs.core._nth.call(null,chunk__19309,i__19311);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__19312 = seq__19308;
var G__19313 = chunk__19309;
var G__19314 = count__19310;
var G__19315 = (i__19311 + (1));
seq__19308 = G__19312;
chunk__19309 = G__19313;
count__19310 = G__19314;
i__19311 = G__19315;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__19308);
if(temp__4126__auto__){
var seq__19308__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19308__$1)){
var c__12416__auto__ = cljs.core.chunk_first.call(null,seq__19308__$1);
var G__19316 = cljs.core.chunk_rest.call(null,seq__19308__$1);
var G__19317 = c__12416__auto__;
var G__19318 = cljs.core.count.call(null,c__12416__auto__);
var G__19319 = (0);
seq__19308 = G__19316;
chunk__19309 = G__19317;
count__19310 = G__19318;
i__19311 = G__19319;
continue;
} else {
var child = cljs.core.first.call(null,seq__19308__$1);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__19320 = cljs.core.next.call(null,seq__19308__$1);
var G__19321 = null;
var G__19322 = (0);
var G__19323 = (0);
seq__19308 = G__19320;
chunk__19309 = G__19321;
count__19310 = G__19322;
i__19311 = G__19323;
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
var vec__19325 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));
var depth = cljs.core.nth.call(null,vec__19325,(0),null);
var start_wrap = cljs.core.nth.call(null,vec__19325,(1),null);
var end_wrap = cljs.core.nth.call(null,vec__19325,(2),null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');

return div;
})();
var level = depth;
while(true){
if((level > (0))){
var G__19326 = wrapper.lastChild;
var G__19327 = (level - (1));
wrapper = G__19326;
level = G__19327;
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

domina.DomContent = (function (){var obj19329 = {};
return obj19329;
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
var G__19330__i = 0, G__19330__a = new Array(arguments.length -  0);
while (G__19330__i < G__19330__a.length) {G__19330__a[G__19330__i] = arguments[G__19330__i + 0]; ++G__19330__i;}
  mesg = new cljs.core.IndexedSeq(G__19330__a,0);
} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__19331){
var mesg = cljs.core.seq(arglist__19331);
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
var G__19332__i = 0, G__19332__a = new Array(arguments.length -  0);
while (G__19332__i < G__19332__a.length) {G__19332__a[G__19332__i] = arguments[G__19332__i + 0]; ++G__19332__i;}
  mesg = new cljs.core.IndexedSeq(G__19332__a,0);
} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__19333){
var mesg = cljs.core.seq(arglist__19333);
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
if(typeof domina.t19337 !== 'undefined'){
} else {

/**
* @constructor
*/
domina.t19337 = (function (class_name,by_class,meta19338){
this.class_name = class_name;
this.by_class = by_class;
this.meta19338 = meta19338;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
domina.t19337.prototype.domina$DomContent$ = true;

domina.t19337.prototype.domina$DomContent$nodes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,self__.class_name)));
});

domina.t19337.prototype.domina$DomContent$single_node$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return domina.normalize_seq.call(null,goog.dom.getElementByClass(cljs.core.name.call(null,self__.class_name)));
});

domina.t19337.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19339){
var self__ = this;
var _19339__$1 = this;
return self__.meta19338;
});

domina.t19337.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19339,meta19338__$1){
var self__ = this;
var _19339__$1 = this;
return (new domina.t19337(self__.class_name,self__.by_class,meta19338__$1));
});

domina.t19337.cljs$lang$type = true;

domina.t19337.cljs$lang$ctorStr = "domina/t19337";

domina.t19337.cljs$lang$ctorPrWriter = (function (this__12216__auto__,writer__12217__auto__,opt__12218__auto__){
return cljs.core._write.call(null,writer__12217__auto__,"domina/t19337");
});

domina.__GT_t19337 = (function __GT_t19337(class_name__$1,by_class__$1,meta19338){
return (new domina.t19337(class_name__$1,by_class__$1,meta19338));
});

}

return (new domina.t19337(class_name,by_class,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),91,new cljs.core.Keyword(null,"end-line","end-line",1837326455),130,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),128,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/odinholestandal/git/odin/canvas-fn/resources/public/js/out/domina.cljs"], null)));
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
var G__19340__i = 0, G__19340__a = new Array(arguments.length -  0);
while (G__19340__i < G__19340__a.length) {G__19340__a[G__19340__i] = arguments[G__19340__i + 0]; ++G__19340__i;}
  contents = new cljs.core.IndexedSeq(G__19340__a,0);
} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__19341){
var contents = cljs.core.seq(arglist__19341);
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
return cljs.core.map.call(null,(function (p1__19342_SHARP_){
return p1__19342_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__19343_SHARP_,p2__19344_SHARP_){
return goog.dom.insertChildAt(p1__19343_SHARP_,p2__19344_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__19346_SHARP_,p2__19345_SHARP_){
return goog.dom.insertSiblingBefore(p2__19345_SHARP_,p1__19346_SHARP_);
}),content,new_content);

return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__19348_SHARP_,p2__19347_SHARP_){
return goog.dom.insertSiblingAfter(p2__19347_SHARP_,p1__19348_SHARP_);
}),content,new_content);

return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__19350_SHARP_,p2__19349_SHARP_){
return goog.dom.replaceNode(p2__19349_SHARP_,p1__19350_SHARP_);
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
var seq__19355_19359 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__19356_19360 = null;
var count__19357_19361 = (0);
var i__19358_19362 = (0);
while(true){
if((i__19358_19362 < count__19357_19361)){
var n_19363 = cljs.core._nth.call(null,chunk__19356_19360,i__19358_19362);
goog.style.setStyle(n_19363,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__19364 = seq__19355_19359;
var G__19365 = chunk__19356_19360;
var G__19366 = count__19357_19361;
var G__19367 = (i__19358_19362 + (1));
seq__19355_19359 = G__19364;
chunk__19356_19360 = G__19365;
count__19357_19361 = G__19366;
i__19358_19362 = G__19367;
continue;
} else {
var temp__4126__auto___19368 = cljs.core.seq.call(null,seq__19355_19359);
if(temp__4126__auto___19368){
var seq__19355_19369__$1 = temp__4126__auto___19368;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19355_19369__$1)){
var c__12416__auto___19370 = cljs.core.chunk_first.call(null,seq__19355_19369__$1);
var G__19371 = cljs.core.chunk_rest.call(null,seq__19355_19369__$1);
var G__19372 = c__12416__auto___19370;
var G__19373 = cljs.core.count.call(null,c__12416__auto___19370);
var G__19374 = (0);
seq__19355_19359 = G__19371;
chunk__19356_19360 = G__19372;
count__19357_19361 = G__19373;
i__19358_19362 = G__19374;
continue;
} else {
var n_19375 = cljs.core.first.call(null,seq__19355_19369__$1);
goog.style.setStyle(n_19375,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__19376 = cljs.core.next.call(null,seq__19355_19369__$1);
var G__19377 = null;
var G__19378 = (0);
var G__19379 = (0);
seq__19355_19359 = G__19376;
chunk__19356_19360 = G__19377;
count__19357_19361 = G__19378;
i__19358_19362 = G__19379;
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
var G__19380__i = 0, G__19380__a = new Array(arguments.length -  2);
while (G__19380__i < G__19380__a.length) {G__19380__a[G__19380__i] = arguments[G__19380__i + 2]; ++G__19380__i;}
  value = new cljs.core.IndexedSeq(G__19380__a,0);
} 
return set_style_BANG___delegate.call(this,content,name,value);};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__19381){
var content = cljs.core.first(arglist__19381);
arglist__19381 = cljs.core.next(arglist__19381);
var name = cljs.core.first(arglist__19381);
var value = cljs.core.rest(arglist__19381);
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
var seq__19386_19390 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__19387_19391 = null;
var count__19388_19392 = (0);
var i__19389_19393 = (0);
while(true){
if((i__19389_19393 < count__19388_19392)){
var n_19394 = cljs.core._nth.call(null,chunk__19387_19391,i__19389_19393);
n_19394.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__19395 = seq__19386_19390;
var G__19396 = chunk__19387_19391;
var G__19397 = count__19388_19392;
var G__19398 = (i__19389_19393 + (1));
seq__19386_19390 = G__19395;
chunk__19387_19391 = G__19396;
count__19388_19392 = G__19397;
i__19389_19393 = G__19398;
continue;
} else {
var temp__4126__auto___19399 = cljs.core.seq.call(null,seq__19386_19390);
if(temp__4126__auto___19399){
var seq__19386_19400__$1 = temp__4126__auto___19399;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19386_19400__$1)){
var c__12416__auto___19401 = cljs.core.chunk_first.call(null,seq__19386_19400__$1);
var G__19402 = cljs.core.chunk_rest.call(null,seq__19386_19400__$1);
var G__19403 = c__12416__auto___19401;
var G__19404 = cljs.core.count.call(null,c__12416__auto___19401);
var G__19405 = (0);
seq__19386_19390 = G__19402;
chunk__19387_19391 = G__19403;
count__19388_19392 = G__19404;
i__19389_19393 = G__19405;
continue;
} else {
var n_19406 = cljs.core.first.call(null,seq__19386_19400__$1);
n_19406.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__19407 = cljs.core.next.call(null,seq__19386_19400__$1);
var G__19408 = null;
var G__19409 = (0);
var G__19410 = (0);
seq__19386_19390 = G__19407;
chunk__19387_19391 = G__19408;
count__19388_19392 = G__19409;
i__19389_19393 = G__19410;
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
var G__19411__i = 0, G__19411__a = new Array(arguments.length -  2);
while (G__19411__i < G__19411__a.length) {G__19411__a[G__19411__i] = arguments[G__19411__i + 2]; ++G__19411__i;}
  value = new cljs.core.IndexedSeq(G__19411__a,0);
} 
return set_attr_BANG___delegate.call(this,content,name,value);};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__19412){
var content = cljs.core.first(arglist__19412);
arglist__19412 = cljs.core.next(arglist__19412);
var name = cljs.core.first(arglist__19412);
var value = cljs.core.rest(arglist__19412);
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
var seq__19417_19421 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__19418_19422 = null;
var count__19419_19423 = (0);
var i__19420_19424 = (0);
while(true){
if((i__19420_19424 < count__19419_19423)){
var n_19425 = cljs.core._nth.call(null,chunk__19418_19422,i__19420_19424);
n_19425.removeAttribute(cljs.core.name.call(null,name));

var G__19426 = seq__19417_19421;
var G__19427 = chunk__19418_19422;
var G__19428 = count__19419_19423;
var G__19429 = (i__19420_19424 + (1));
seq__19417_19421 = G__19426;
chunk__19418_19422 = G__19427;
count__19419_19423 = G__19428;
i__19420_19424 = G__19429;
continue;
} else {
var temp__4126__auto___19430 = cljs.core.seq.call(null,seq__19417_19421);
if(temp__4126__auto___19430){
var seq__19417_19431__$1 = temp__4126__auto___19430;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19417_19431__$1)){
var c__12416__auto___19432 = cljs.core.chunk_first.call(null,seq__19417_19431__$1);
var G__19433 = cljs.core.chunk_rest.call(null,seq__19417_19431__$1);
var G__19434 = c__12416__auto___19432;
var G__19435 = cljs.core.count.call(null,c__12416__auto___19432);
var G__19436 = (0);
seq__19417_19421 = G__19433;
chunk__19418_19422 = G__19434;
count__19419_19423 = G__19435;
i__19420_19424 = G__19436;
continue;
} else {
var n_19437 = cljs.core.first.call(null,seq__19417_19431__$1);
n_19437.removeAttribute(cljs.core.name.call(null,name));

var G__19438 = cljs.core.next.call(null,seq__19417_19431__$1);
var G__19439 = null;
var G__19440 = (0);
var G__19441 = (0);
seq__19417_19421 = G__19438;
chunk__19418_19422 = G__19439;
count__19419_19423 = G__19440;
i__19420_19424 = G__19441;
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
var vec__19443 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.call(null,vec__19443,(0),null);
var v = cljs.core.nth.call(null,vec__19443,(1),null);
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
return (function (p1__19444_SHARP_){
var attr = attrs__$1.item(p1__19444_SHARP_);
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
var seq__19451_19457 = cljs.core.seq.call(null,styles);
var chunk__19452_19458 = null;
var count__19453_19459 = (0);
var i__19454_19460 = (0);
while(true){
if((i__19454_19460 < count__19453_19459)){
var vec__19455_19461 = cljs.core._nth.call(null,chunk__19452_19458,i__19454_19460);
var name_19462 = cljs.core.nth.call(null,vec__19455_19461,(0),null);
var value_19463 = cljs.core.nth.call(null,vec__19455_19461,(1),null);
domina.set_style_BANG_.call(null,content,name_19462,value_19463);

var G__19464 = seq__19451_19457;
var G__19465 = chunk__19452_19458;
var G__19466 = count__19453_19459;
var G__19467 = (i__19454_19460 + (1));
seq__19451_19457 = G__19464;
chunk__19452_19458 = G__19465;
count__19453_19459 = G__19466;
i__19454_19460 = G__19467;
continue;
} else {
var temp__4126__auto___19468 = cljs.core.seq.call(null,seq__19451_19457);
if(temp__4126__auto___19468){
var seq__19451_19469__$1 = temp__4126__auto___19468;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19451_19469__$1)){
var c__12416__auto___19470 = cljs.core.chunk_first.call(null,seq__19451_19469__$1);
var G__19471 = cljs.core.chunk_rest.call(null,seq__19451_19469__$1);
var G__19472 = c__12416__auto___19470;
var G__19473 = cljs.core.count.call(null,c__12416__auto___19470);
var G__19474 = (0);
seq__19451_19457 = G__19471;
chunk__19452_19458 = G__19472;
count__19453_19459 = G__19473;
i__19454_19460 = G__19474;
continue;
} else {
var vec__19456_19475 = cljs.core.first.call(null,seq__19451_19469__$1);
var name_19476 = cljs.core.nth.call(null,vec__19456_19475,(0),null);
var value_19477 = cljs.core.nth.call(null,vec__19456_19475,(1),null);
domina.set_style_BANG_.call(null,content,name_19476,value_19477);

var G__19478 = cljs.core.next.call(null,seq__19451_19469__$1);
var G__19479 = null;
var G__19480 = (0);
var G__19481 = (0);
seq__19451_19457 = G__19478;
chunk__19452_19458 = G__19479;
count__19453_19459 = G__19480;
i__19454_19460 = G__19481;
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
var seq__19488_19494 = cljs.core.seq.call(null,attrs);
var chunk__19489_19495 = null;
var count__19490_19496 = (0);
var i__19491_19497 = (0);
while(true){
if((i__19491_19497 < count__19490_19496)){
var vec__19492_19498 = cljs.core._nth.call(null,chunk__19489_19495,i__19491_19497);
var name_19499 = cljs.core.nth.call(null,vec__19492_19498,(0),null);
var value_19500 = cljs.core.nth.call(null,vec__19492_19498,(1),null);
domina.set_attr_BANG_.call(null,content,name_19499,value_19500);

var G__19501 = seq__19488_19494;
var G__19502 = chunk__19489_19495;
var G__19503 = count__19490_19496;
var G__19504 = (i__19491_19497 + (1));
seq__19488_19494 = G__19501;
chunk__19489_19495 = G__19502;
count__19490_19496 = G__19503;
i__19491_19497 = G__19504;
continue;
} else {
var temp__4126__auto___19505 = cljs.core.seq.call(null,seq__19488_19494);
if(temp__4126__auto___19505){
var seq__19488_19506__$1 = temp__4126__auto___19505;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19488_19506__$1)){
var c__12416__auto___19507 = cljs.core.chunk_first.call(null,seq__19488_19506__$1);
var G__19508 = cljs.core.chunk_rest.call(null,seq__19488_19506__$1);
var G__19509 = c__12416__auto___19507;
var G__19510 = cljs.core.count.call(null,c__12416__auto___19507);
var G__19511 = (0);
seq__19488_19494 = G__19508;
chunk__19489_19495 = G__19509;
count__19490_19496 = G__19510;
i__19491_19497 = G__19511;
continue;
} else {
var vec__19493_19512 = cljs.core.first.call(null,seq__19488_19506__$1);
var name_19513 = cljs.core.nth.call(null,vec__19493_19512,(0),null);
var value_19514 = cljs.core.nth.call(null,vec__19493_19512,(1),null);
domina.set_attr_BANG_.call(null,content,name_19513,value_19514);

var G__19515 = cljs.core.next.call(null,seq__19488_19506__$1);
var G__19516 = null;
var G__19517 = (0);
var G__19518 = (0);
seq__19488_19494 = G__19515;
chunk__19489_19495 = G__19516;
count__19490_19496 = G__19517;
i__19491_19497 = G__19518;
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
var seq__19523_19527 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__19524_19528 = null;
var count__19525_19529 = (0);
var i__19526_19530 = (0);
while(true){
if((i__19526_19530 < count__19525_19529)){
var node_19531 = cljs.core._nth.call(null,chunk__19524_19528,i__19526_19530);
goog.dom.classes.add(node_19531,class$);

var G__19532 = seq__19523_19527;
var G__19533 = chunk__19524_19528;
var G__19534 = count__19525_19529;
var G__19535 = (i__19526_19530 + (1));
seq__19523_19527 = G__19532;
chunk__19524_19528 = G__19533;
count__19525_19529 = G__19534;
i__19526_19530 = G__19535;
continue;
} else {
var temp__4126__auto___19536 = cljs.core.seq.call(null,seq__19523_19527);
if(temp__4126__auto___19536){
var seq__19523_19537__$1 = temp__4126__auto___19536;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19523_19537__$1)){
var c__12416__auto___19538 = cljs.core.chunk_first.call(null,seq__19523_19537__$1);
var G__19539 = cljs.core.chunk_rest.call(null,seq__19523_19537__$1);
var G__19540 = c__12416__auto___19538;
var G__19541 = cljs.core.count.call(null,c__12416__auto___19538);
var G__19542 = (0);
seq__19523_19527 = G__19539;
chunk__19524_19528 = G__19540;
count__19525_19529 = G__19541;
i__19526_19530 = G__19542;
continue;
} else {
var node_19543 = cljs.core.first.call(null,seq__19523_19537__$1);
goog.dom.classes.add(node_19543,class$);

var G__19544 = cljs.core.next.call(null,seq__19523_19537__$1);
var G__19545 = null;
var G__19546 = (0);
var G__19547 = (0);
seq__19523_19527 = G__19544;
chunk__19524_19528 = G__19545;
count__19525_19529 = G__19546;
i__19526_19530 = G__19547;
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
var seq__19552_19556 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__19553_19557 = null;
var count__19554_19558 = (0);
var i__19555_19559 = (0);
while(true){
if((i__19555_19559 < count__19554_19558)){
var node_19560 = cljs.core._nth.call(null,chunk__19553_19557,i__19555_19559);
goog.dom.classes.remove(node_19560,class$);

var G__19561 = seq__19552_19556;
var G__19562 = chunk__19553_19557;
var G__19563 = count__19554_19558;
var G__19564 = (i__19555_19559 + (1));
seq__19552_19556 = G__19561;
chunk__19553_19557 = G__19562;
count__19554_19558 = G__19563;
i__19555_19559 = G__19564;
continue;
} else {
var temp__4126__auto___19565 = cljs.core.seq.call(null,seq__19552_19556);
if(temp__4126__auto___19565){
var seq__19552_19566__$1 = temp__4126__auto___19565;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19552_19566__$1)){
var c__12416__auto___19567 = cljs.core.chunk_first.call(null,seq__19552_19566__$1);
var G__19568 = cljs.core.chunk_rest.call(null,seq__19552_19566__$1);
var G__19569 = c__12416__auto___19567;
var G__19570 = cljs.core.count.call(null,c__12416__auto___19567);
var G__19571 = (0);
seq__19552_19556 = G__19568;
chunk__19553_19557 = G__19569;
count__19554_19558 = G__19570;
i__19555_19559 = G__19571;
continue;
} else {
var node_19572 = cljs.core.first.call(null,seq__19552_19566__$1);
goog.dom.classes.remove(node_19572,class$);

var G__19573 = cljs.core.next.call(null,seq__19552_19566__$1);
var G__19574 = null;
var G__19575 = (0);
var G__19576 = (0);
seq__19552_19556 = G__19573;
chunk__19553_19557 = G__19574;
count__19554_19558 = G__19575;
i__19555_19559 = G__19576;
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
var classes_19585__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var seq__19581_19586 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__19582_19587 = null;
var count__19583_19588 = (0);
var i__19584_19589 = (0);
while(true){
if((i__19584_19589 < count__19583_19588)){
var node_19590 = cljs.core._nth.call(null,chunk__19582_19587,i__19584_19589);
goog.dom.classes.set(node_19590,classes_19585__$1);

var G__19591 = seq__19581_19586;
var G__19592 = chunk__19582_19587;
var G__19593 = count__19583_19588;
var G__19594 = (i__19584_19589 + (1));
seq__19581_19586 = G__19591;
chunk__19582_19587 = G__19592;
count__19583_19588 = G__19593;
i__19584_19589 = G__19594;
continue;
} else {
var temp__4126__auto___19595 = cljs.core.seq.call(null,seq__19581_19586);
if(temp__4126__auto___19595){
var seq__19581_19596__$1 = temp__4126__auto___19595;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19581_19596__$1)){
var c__12416__auto___19597 = cljs.core.chunk_first.call(null,seq__19581_19596__$1);
var G__19598 = cljs.core.chunk_rest.call(null,seq__19581_19596__$1);
var G__19599 = c__12416__auto___19597;
var G__19600 = cljs.core.count.call(null,c__12416__auto___19597);
var G__19601 = (0);
seq__19581_19586 = G__19598;
chunk__19582_19587 = G__19599;
count__19583_19588 = G__19600;
i__19584_19589 = G__19601;
continue;
} else {
var node_19602 = cljs.core.first.call(null,seq__19581_19596__$1);
goog.dom.classes.set(node_19602,classes_19585__$1);

var G__19603 = cljs.core.next.call(null,seq__19581_19596__$1);
var G__19604 = null;
var G__19605 = (0);
var G__19606 = (0);
seq__19581_19586 = G__19603;
chunk__19582_19587 = G__19604;
count__19583_19588 = G__19605;
i__19584_19589 = G__19606;
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
var seq__19611_19615 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__19612_19616 = null;
var count__19613_19617 = (0);
var i__19614_19618 = (0);
while(true){
if((i__19614_19618 < count__19613_19617)){
var node_19619 = cljs.core._nth.call(null,chunk__19612_19616,i__19614_19618);
goog.dom.setTextContent(node_19619,value);

var G__19620 = seq__19611_19615;
var G__19621 = chunk__19612_19616;
var G__19622 = count__19613_19617;
var G__19623 = (i__19614_19618 + (1));
seq__19611_19615 = G__19620;
chunk__19612_19616 = G__19621;
count__19613_19617 = G__19622;
i__19614_19618 = G__19623;
continue;
} else {
var temp__4126__auto___19624 = cljs.core.seq.call(null,seq__19611_19615);
if(temp__4126__auto___19624){
var seq__19611_19625__$1 = temp__4126__auto___19624;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19611_19625__$1)){
var c__12416__auto___19626 = cljs.core.chunk_first.call(null,seq__19611_19625__$1);
var G__19627 = cljs.core.chunk_rest.call(null,seq__19611_19625__$1);
var G__19628 = c__12416__auto___19626;
var G__19629 = cljs.core.count.call(null,c__12416__auto___19626);
var G__19630 = (0);
seq__19611_19615 = G__19627;
chunk__19612_19616 = G__19628;
count__19613_19617 = G__19629;
i__19614_19618 = G__19630;
continue;
} else {
var node_19631 = cljs.core.first.call(null,seq__19611_19625__$1);
goog.dom.setTextContent(node_19631,value);

var G__19632 = cljs.core.next.call(null,seq__19611_19625__$1);
var G__19633 = null;
var G__19634 = (0);
var G__19635 = (0);
seq__19611_19615 = G__19632;
chunk__19612_19616 = G__19633;
count__19613_19617 = G__19634;
i__19614_19618 = G__19635;
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
var seq__19640_19644 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__19641_19645 = null;
var count__19642_19646 = (0);
var i__19643_19647 = (0);
while(true){
if((i__19643_19647 < count__19642_19646)){
var node_19648 = cljs.core._nth.call(null,chunk__19641_19645,i__19643_19647);
goog.dom.forms.setValue(node_19648,value);

var G__19649 = seq__19640_19644;
var G__19650 = chunk__19641_19645;
var G__19651 = count__19642_19646;
var G__19652 = (i__19643_19647 + (1));
seq__19640_19644 = G__19649;
chunk__19641_19645 = G__19650;
count__19642_19646 = G__19651;
i__19643_19647 = G__19652;
continue;
} else {
var temp__4126__auto___19653 = cljs.core.seq.call(null,seq__19640_19644);
if(temp__4126__auto___19653){
var seq__19640_19654__$1 = temp__4126__auto___19653;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19640_19654__$1)){
var c__12416__auto___19655 = cljs.core.chunk_first.call(null,seq__19640_19654__$1);
var G__19656 = cljs.core.chunk_rest.call(null,seq__19640_19654__$1);
var G__19657 = c__12416__auto___19655;
var G__19658 = cljs.core.count.call(null,c__12416__auto___19655);
var G__19659 = (0);
seq__19640_19644 = G__19656;
chunk__19641_19645 = G__19657;
count__19642_19646 = G__19658;
i__19643_19647 = G__19659;
continue;
} else {
var node_19660 = cljs.core.first.call(null,seq__19640_19654__$1);
goog.dom.forms.setValue(node_19660,value);

var G__19661 = cljs.core.next.call(null,seq__19640_19654__$1);
var G__19662 = null;
var G__19663 = (0);
var G__19664 = (0);
seq__19640_19644 = G__19661;
chunk__19641_19645 = G__19662;
count__19642_19646 = G__19663;
i__19643_19647 = G__19664;
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
var value_19675 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var seq__19671_19676 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__19672_19677 = null;
var count__19673_19678 = (0);
var i__19674_19679 = (0);
while(true){
if((i__19674_19679 < count__19673_19678)){
var node_19680 = cljs.core._nth.call(null,chunk__19672_19677,i__19674_19679);
goog.events.removeAll(node_19680);

node_19680.innerHTML = value_19675;

var G__19681 = seq__19671_19676;
var G__19682 = chunk__19672_19677;
var G__19683 = count__19673_19678;
var G__19684 = (i__19674_19679 + (1));
seq__19671_19676 = G__19681;
chunk__19672_19677 = G__19682;
count__19673_19678 = G__19683;
i__19674_19679 = G__19684;
continue;
} else {
var temp__4126__auto___19685 = cljs.core.seq.call(null,seq__19671_19676);
if(temp__4126__auto___19685){
var seq__19671_19686__$1 = temp__4126__auto___19685;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19671_19686__$1)){
var c__12416__auto___19687 = cljs.core.chunk_first.call(null,seq__19671_19686__$1);
var G__19688 = cljs.core.chunk_rest.call(null,seq__19671_19686__$1);
var G__19689 = c__12416__auto___19687;
var G__19690 = cljs.core.count.call(null,c__12416__auto___19687);
var G__19691 = (0);
seq__19671_19676 = G__19688;
chunk__19672_19677 = G__19689;
count__19673_19678 = G__19690;
i__19674_19679 = G__19691;
continue;
} else {
var node_19692 = cljs.core.first.call(null,seq__19671_19686__$1);
goog.events.removeAll(node_19692);

node_19692.innerHTML = value_19675;

var G__19693 = cljs.core.next.call(null,seq__19671_19686__$1);
var G__19694 = null;
var G__19695 = (0);
var G__19696 = (0);
seq__19671_19676 = G__19693;
chunk__19672_19677 = G__19694;
count__19673_19678 = G__19695;
i__19674_19679 = G__19696;
continue;
}
} else {
}
}
break;
}
}catch (e19670){if((e19670 instanceof Error)){
var e_19697 = e19670;
domina.replace_children_BANG_.call(null,content,value_19675);
} else {
throw e19670;

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
var seq__19704_19708 = cljs.core.seq.call(null,children);
var chunk__19705_19709 = null;
var count__19706_19710 = (0);
var i__19707_19711 = (0);
while(true){
if((i__19707_19711 < count__19706_19710)){
var child_19712 = cljs.core._nth.call(null,chunk__19705_19709,i__19707_19711);
frag.appendChild(child_19712);

var G__19713 = seq__19704_19708;
var G__19714 = chunk__19705_19709;
var G__19715 = count__19706_19710;
var G__19716 = (i__19707_19711 + (1));
seq__19704_19708 = G__19713;
chunk__19705_19709 = G__19714;
count__19706_19710 = G__19715;
i__19707_19711 = G__19716;
continue;
} else {
var temp__4126__auto___19717 = cljs.core.seq.call(null,seq__19704_19708);
if(temp__4126__auto___19717){
var seq__19704_19718__$1 = temp__4126__auto___19717;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19704_19718__$1)){
var c__12416__auto___19719 = cljs.core.chunk_first.call(null,seq__19704_19718__$1);
var G__19720 = cljs.core.chunk_rest.call(null,seq__19704_19718__$1);
var G__19721 = c__12416__auto___19719;
var G__19722 = cljs.core.count.call(null,c__12416__auto___19719);
var G__19723 = (0);
seq__19704_19708 = G__19720;
chunk__19705_19709 = G__19721;
count__19706_19710 = G__19722;
i__19707_19711 = G__19723;
continue;
} else {
var child_19724 = cljs.core.first.call(null,seq__19704_19718__$1);
frag.appendChild(child_19724);

var G__19725 = cljs.core.next.call(null,seq__19704_19718__$1);
var G__19726 = null;
var G__19727 = (0);
var G__19728 = (0);
seq__19704_19708 = G__19725;
chunk__19705_19709 = G__19726;
count__19706_19710 = G__19727;
i__19707_19711 = G__19728;
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
return (function (p1__19698_SHARP_,p2__19699_SHARP_){
return f.call(null,p1__19698_SHARP_,p2__19699_SHARP_);
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
if((function (){var G__19730 = list_thing;
if(G__19730){
var bit__12310__auto__ = (G__19730.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__12310__auto__) || (G__19730.cljs$core$ISeqable$)){
return true;
} else {
if((!G__19730.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__19730);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__19730);
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
if((function (){var G__19731 = content;
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