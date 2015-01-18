// Compiled by ClojureScript 0.0-2127
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.classes');
goog.require('domina.support');
goog.require('goog.dom.classes');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.string');
goog.require('goog.dom.xml');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('goog.dom.xml');
goog.require('goog.style');
goog.require('goog.dom.forms');
goog.require('domina.support');
goog.require('goog.events');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_7506 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_7507 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_7508 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",cljs.core.constant$keyword$7,"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_7507,table_section_wrapper_7507,opt_wrapper_7506,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_7508,table_section_wrapper_7507,cell_wrapper_7508,opt_wrapper_7506,table_section_wrapper_7507,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_7507]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_tbody,html));var tbody = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3393__auto__ = div.firstChild;if(cljs.core.truth_(and__3393__auto__))
{return div.firstChild.childNodes;
} else
{return and__3393__auto__;
}
})():(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__7513 = cljs.core.seq(tbody);var chunk__7514 = null;var count__7515 = 0;var i__7516 = 0;while(true){
if((i__7516 < count__7515))
{var child = chunk__7514.cljs$core$IIndexed$_nth$arity$2(null,i__7516);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__7517 = seq__7513;
var G__7518 = chunk__7514;
var G__7519 = count__7515;
var G__7520 = (i__7516 + 1);
seq__7513 = G__7517;
chunk__7514 = G__7518;
count__7515 = G__7519;
i__7516 = G__7520;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__7513);if(temp__4092__auto__)
{var seq__7513__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__7513__$1))
{var c__4134__auto__ = cljs.core.chunk_first(seq__7513__$1);{
var G__7521 = cljs.core.chunk_rest(seq__7513__$1);
var G__7522 = c__4134__auto__;
var G__7523 = cljs.core.count(c__4134__auto__);
var G__7524 = 0;
seq__7513 = G__7521;
chunk__7514 = G__7522;
count__7515 = G__7523;
i__7516 = G__7524;
continue;
}
} else
{var child = cljs.core.first(seq__7513__$1);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__7525 = cljs.core.next(seq__7513__$1);
var G__7526 = null;
var G__7527 = 0;
var G__7528 = 0;
seq__7513 = G__7525;
chunk__7514 = G__7526;
count__7515 = G__7527;
i__7516 = G__7528;
continue;
}
}
} else
{return null;
}
}
break;
}
});
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){return div.insertBefore(document.createTextNode(cljs.core.first(cljs.core.re_find(domina.re_leading_whitespace,html))),div.firstChild);
});
/**
* takes an string of html and returns a NodeList of dom fragments
*/
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace(html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__7530 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(domina.wrap_map,tag_name,cljs.core.constant$keyword$7.cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7530,0,null);var start_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7530,1,null);var end_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7530,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__7531 = wrapper.lastChild;
var G__7532 = (level - 1);
wrapper = G__7531;
level = G__7532;
continue;
}
} else
{return wrapper;
}
break;
}
})();if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_(div,html__$1,tag_name,start_wrap);
} else
{}
if(cljs.core.truth_((function (){var and__3393__auto__ = cljs.core.not(domina.support.leading_whitespace_QMARK_);if(and__3393__auto__)
{return cljs.core.re_find(domina.re_leading_whitespace,html__$1);
} else
{return and__3393__auto__;
}
})()))
{domina.restore_leading_whitespace_BANG_(div,html__$1);
} else
{}
return div.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){if(cljs.core.truth_(cljs.core.re_find(domina.re_html,s)))
{return domina.html_to_dom(s);
} else
{return document.createTextNode(s);
}
});
domina.DomContent = (function (){var obj7534 = {};return obj7534;
})();
domina.nodes = (function nodes(content){if((function (){var and__3393__auto__ = content;if(and__3393__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3393__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4013__auto__ = (((content == null))?null:content);return (function (){var or__3405__auto__ = (domina.nodes[goog.typeOf(x__4013__auto__)]);if(or__3405__auto__)
{return or__3405__auto__;
} else
{var or__3405__auto____$1 = (domina.nodes["_"]);if(or__3405__auto____$1)
{return or__3405__auto____$1;
} else
{throw cljs.core.missing_protocol("DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3393__auto__ = nodeseq;if(and__3393__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3393__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4013__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3405__auto__ = (domina.single_node[goog.typeOf(x__4013__auto__)]);if(or__3405__auto__)
{return or__3405__auto__;
} else
{var or__3405__auto____$1 = (domina.single_node["_"]);if(or__3405__auto____$1)
{return or__3405__auto____$1;
} else
{throw cljs.core.missing_protocol("DomContent.single-node",nodeseq);
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3393__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3393__auto__))
{return !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(window.console,undefined));
} else
{return and__3393__auto__;
}
})()))
{return console.log(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,mesg));
} else
{return null;
}
};
var log_debug = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__7535){
var mesg = cljs.core.seq(arglist__7535);
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
var log__delegate = function (mesg){if(cljs.core.truth_(window.console))
{return console.log(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,mesg));
} else
{return null;
}
};
var log = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__7536){
var mesg = cljs.core.seq(arglist__7536);
return log__delegate(mesg);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){return goog.dom.getElement(cljs.core.name(id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){if(typeof domina.t7540 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.t7540 = (function (class_name,by_class,meta7541){
this.class_name = class_name;
this.by_class = by_class;
this.meta7541 = meta7541;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
domina.t7540.cljs$lang$type = true;
domina.t7540.cljs$lang$ctorStr = "domina/t7540";
domina.t7540.cljs$lang$ctorPrWriter = (function (this__3954__auto__,writer__3955__auto__,opt__3956__auto__){return cljs.core._write(writer__3955__auto__,"domina/t7540");
});
domina.t7540.prototype.domina$DomContent$ = true;
domina.t7540.prototype.domina$DomContent$nodes$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (domina.normalize_seq.cljs$core$IFn$_invoke$arity$1 ? domina.normalize_seq.cljs$core$IFn$_invoke$arity$1(goog.dom.getElementsByClass(cljs.core.name(self__.class_name))) : domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name(self__.class_name))));
});
domina.t7540.prototype.domina$DomContent$single_node$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (domina.normalize_seq.cljs$core$IFn$_invoke$arity$1 ? domina.normalize_seq.cljs$core$IFn$_invoke$arity$1(goog.dom.getElementByClass(cljs.core.name(self__.class_name))) : domina.normalize_seq.call(null,goog.dom.getElementByClass(cljs.core.name(self__.class_name))));
});
domina.t7540.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7542){var self__ = this;
var _7542__$1 = this;return self__.meta7541;
});
domina.t7540.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7542,meta7541__$1){var self__ = this;
var _7542__$1 = this;return (new domina.t7540(self__.class_name,self__.by_class,meta7541__$1));
});
domina.__GT_t7540 = (function __GT_t7540(class_name__$1,by_class__$1,meta7541){return (new domina.t7540(class_name__$1,by_class__$1,meta7541));
});
}
return (new domina.t7540(class_name,by_class,null));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2(goog.dom.getChildren,domina.nodes(content)));
});
/**
* Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
* @param {...*} var_args
*/
domina.common_ancestor = (function() { 
var common_ancestor__delegate = function (contents){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(goog.dom.findCommonAncestor,cljs.core.map.cljs$core$IFn$_invoke$arity$2(domina.single_node,contents));
};
var common_ancestor = function (var_args){
var contents = null;if (arguments.length > 0) {
  contents = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__7543){
var contents = cljs.core.seq(arglist__7543);
return common_ancestor__delegate(contents);
});
common_ancestor.cljs$core$IFn$_invoke$arity$variadic = common_ancestor__delegate;
return common_ancestor;
})()
;
/**
* Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
*/
domina.ancestor_QMARK_ = (function ancestor_QMARK_(ancestor_content,descendant_content){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(domina.common_ancestor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ancestor_content,descendant_content], 0)),domina.single_node(ancestor_content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__7544_SHARP_){return p1__7544_SHARP_.cloneNode(true);
}),domina.nodes(content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3(goog.dom.appendChild,parent_content,child_content) : domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content));
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__7545_SHARP_,p2__7546_SHARP_){return goog.dom.insertChildAt(p1__7545_SHARP_,p2__7546_SHARP_,idx);
}),parent_content,child_content) : domina.apply_with_cloning.call(null,(function (p1__7545_SHARP_,p2__7546_SHARP_){return goog.dom.insertChildAt(p1__7545_SHARP_,p2__7546_SHARP_,idx);
}),parent_content,child_content));
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_(parent_content,child_content,0);
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__7548_SHARP_,p2__7547_SHARP_){return goog.dom.insertSiblingBefore(p2__7547_SHARP_,p1__7548_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__7548_SHARP_,p2__7547_SHARP_){return goog.dom.insertSiblingBefore(p2__7547_SHARP_,p1__7548_SHARP_);
}),content,new_content));
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__7550_SHARP_,p2__7549_SHARP_){return goog.dom.insertSiblingAfter(p2__7549_SHARP_,p1__7550_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__7550_SHARP_,p2__7549_SHARP_){return goog.dom.insertSiblingAfter(p2__7549_SHARP_,p1__7550_SHARP_);
}),content,new_content));
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__7552_SHARP_,p2__7551_SHARP_){return goog.dom.replaceNode(p2__7551_SHARP_,p1__7552_SHARP_);
}),old_content,new_content) : domina.apply_with_cloning.call(null,(function (p1__7552_SHARP_,p2__7551_SHARP_){return goog.dom.replaceNode(p2__7551_SHARP_,p1__7552_SHARP_);
}),old_content,new_content));
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(goog.dom.removeNode,domina.nodes(content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(goog.dom.removeNode,domina.nodes(content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(goog.dom.removeChildren,domina.nodes(content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){var s = goog.style.getStyle(domina.single_node(content),cljs.core.name(name));if(cljs.core.truth_(clojure.string.blank_QMARK_(s)))
{return null;
} else
{return s;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){return domina.single_node(content).getAttribute(cljs.core.name(name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){var seq__7557_7561 = cljs.core.seq(domina.nodes(content));var chunk__7558_7562 = null;var count__7559_7563 = 0;var i__7560_7564 = 0;while(true){
if((i__7560_7564 < count__7559_7563))
{var n_7565 = chunk__7558_7562.cljs$core$IIndexed$_nth$arity$2(null,i__7560_7564);goog.style.setStyle(n_7565,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__7566 = seq__7557_7561;
var G__7567 = chunk__7558_7562;
var G__7568 = count__7559_7563;
var G__7569 = (i__7560_7564 + 1);
seq__7557_7561 = G__7566;
chunk__7558_7562 = G__7567;
count__7559_7563 = G__7568;
i__7560_7564 = G__7569;
continue;
}
} else
{var temp__4092__auto___7570 = cljs.core.seq(seq__7557_7561);if(temp__4092__auto___7570)
{var seq__7557_7571__$1 = temp__4092__auto___7570;if(cljs.core.chunked_seq_QMARK_(seq__7557_7571__$1))
{var c__4134__auto___7572 = cljs.core.chunk_first(seq__7557_7571__$1);{
var G__7573 = cljs.core.chunk_rest(seq__7557_7571__$1);
var G__7574 = c__4134__auto___7572;
var G__7575 = cljs.core.count(c__4134__auto___7572);
var G__7576 = 0;
seq__7557_7561 = G__7573;
chunk__7558_7562 = G__7574;
count__7559_7563 = G__7575;
i__7560_7564 = G__7576;
continue;
}
} else
{var n_7577 = cljs.core.first(seq__7557_7571__$1);goog.style.setStyle(n_7577,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__7578 = cljs.core.next(seq__7557_7571__$1);
var G__7579 = null;
var G__7580 = 0;
var G__7581 = 0;
seq__7557_7561 = G__7578;
chunk__7558_7562 = G__7579;
count__7559_7563 = G__7580;
i__7560_7564 = G__7581;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_style_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_style_BANG___delegate.call(this,content,name,value);};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__7582){
var content = cljs.core.first(arglist__7582);
arglist__7582 = cljs.core.next(arglist__7582);
var name = cljs.core.first(arglist__7582);
var value = cljs.core.rest(arglist__7582);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__7587_7591 = cljs.core.seq(domina.nodes(content));var chunk__7588_7592 = null;var count__7589_7593 = 0;var i__7590_7594 = 0;while(true){
if((i__7590_7594 < count__7589_7593))
{var n_7595 = chunk__7588_7592.cljs$core$IIndexed$_nth$arity$2(null,i__7590_7594);n_7595.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__7596 = seq__7587_7591;
var G__7597 = chunk__7588_7592;
var G__7598 = count__7589_7593;
var G__7599 = (i__7590_7594 + 1);
seq__7587_7591 = G__7596;
chunk__7588_7592 = G__7597;
count__7589_7593 = G__7598;
i__7590_7594 = G__7599;
continue;
}
} else
{var temp__4092__auto___7600 = cljs.core.seq(seq__7587_7591);if(temp__4092__auto___7600)
{var seq__7587_7601__$1 = temp__4092__auto___7600;if(cljs.core.chunked_seq_QMARK_(seq__7587_7601__$1))
{var c__4134__auto___7602 = cljs.core.chunk_first(seq__7587_7601__$1);{
var G__7603 = cljs.core.chunk_rest(seq__7587_7601__$1);
var G__7604 = c__4134__auto___7602;
var G__7605 = cljs.core.count(c__4134__auto___7602);
var G__7606 = 0;
seq__7587_7591 = G__7603;
chunk__7588_7592 = G__7604;
count__7589_7593 = G__7605;
i__7590_7594 = G__7606;
continue;
}
} else
{var n_7607 = cljs.core.first(seq__7587_7601__$1);n_7607.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__7608 = cljs.core.next(seq__7587_7601__$1);
var G__7609 = null;
var G__7610 = 0;
var G__7611 = 0;
seq__7587_7591 = G__7608;
chunk__7588_7592 = G__7609;
count__7589_7593 = G__7610;
i__7590_7594 = G__7611;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_attr_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_attr_BANG___delegate.call(this,content,name,value);};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__7612){
var content = cljs.core.first(arglist__7612);
arglist__7612 = cljs.core.next(arglist__7612);
var name = cljs.core.first(arglist__7612);
var value = cljs.core.rest(arglist__7612);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__7617_7621 = cljs.core.seq(domina.nodes(content));var chunk__7618_7622 = null;var count__7619_7623 = 0;var i__7620_7624 = 0;while(true){
if((i__7620_7624 < count__7619_7623))
{var n_7625 = chunk__7618_7622.cljs$core$IIndexed$_nth$arity$2(null,i__7620_7624);n_7625.removeAttribute(cljs.core.name(name));
{
var G__7626 = seq__7617_7621;
var G__7627 = chunk__7618_7622;
var G__7628 = count__7619_7623;
var G__7629 = (i__7620_7624 + 1);
seq__7617_7621 = G__7626;
chunk__7618_7622 = G__7627;
count__7619_7623 = G__7628;
i__7620_7624 = G__7629;
continue;
}
} else
{var temp__4092__auto___7630 = cljs.core.seq(seq__7617_7621);if(temp__4092__auto___7630)
{var seq__7617_7631__$1 = temp__4092__auto___7630;if(cljs.core.chunked_seq_QMARK_(seq__7617_7631__$1))
{var c__4134__auto___7632 = cljs.core.chunk_first(seq__7617_7631__$1);{
var G__7633 = cljs.core.chunk_rest(seq__7617_7631__$1);
var G__7634 = c__4134__auto___7632;
var G__7635 = cljs.core.count(c__4134__auto___7632);
var G__7636 = 0;
seq__7617_7621 = G__7633;
chunk__7618_7622 = G__7634;
count__7619_7623 = G__7635;
i__7620_7624 = G__7636;
continue;
}
} else
{var n_7637 = cljs.core.first(seq__7617_7631__$1);n_7637.removeAttribute(cljs.core.name(name));
{
var G__7638 = cljs.core.next(seq__7617_7631__$1);
var G__7639 = null;
var G__7640 = 0;
var G__7641 = 0;
seq__7617_7621 = G__7638;
chunk__7618_7622 = G__7639;
count__7619_7623 = G__7640;
i__7620_7624 = G__7641;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Parses a CSS style string and returns the properties as a map.
*/
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,pair){var vec__7643 = pair.split(/\s*:\s*/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7643,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7643,1,null);if(cljs.core.truth_((function (){var and__3393__auto__ = k;if(cljs.core.truth_(and__3393__auto__))
{return v;
} else
{return and__3393__auto__;
}
})()))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k.toLowerCase()),v);
} else
{return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){var style = domina.attr(content,"style");if(typeof style === 'string')
{return domina.parse_style_attributes(style);
} else
{if(cljs.core.truth_(style.cssText))
{return domina.parse_style_attributes(style.cssText);
} else
{return null;
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){var node = domina.single_node(content);var attrs__$1 = node.attributes;return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__7644_SHARP_){var attr = attrs__$1.item(p1__7644_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,value)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__7651_7657 = cljs.core.seq(styles);var chunk__7652_7658 = null;var count__7653_7659 = 0;var i__7654_7660 = 0;while(true){
if((i__7654_7660 < count__7653_7659))
{var vec__7655_7661 = chunk__7652_7658.cljs$core$IIndexed$_nth$arity$2(null,i__7654_7660);var name_7662 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7655_7661,0,null);var value_7663 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7655_7661,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_7662,cljs.core.array_seq([value_7663], 0));
{
var G__7664 = seq__7651_7657;
var G__7665 = chunk__7652_7658;
var G__7666 = count__7653_7659;
var G__7667 = (i__7654_7660 + 1);
seq__7651_7657 = G__7664;
chunk__7652_7658 = G__7665;
count__7653_7659 = G__7666;
i__7654_7660 = G__7667;
continue;
}
} else
{var temp__4092__auto___7668 = cljs.core.seq(seq__7651_7657);if(temp__4092__auto___7668)
{var seq__7651_7669__$1 = temp__4092__auto___7668;if(cljs.core.chunked_seq_QMARK_(seq__7651_7669__$1))
{var c__4134__auto___7670 = cljs.core.chunk_first(seq__7651_7669__$1);{
var G__7671 = cljs.core.chunk_rest(seq__7651_7669__$1);
var G__7672 = c__4134__auto___7670;
var G__7673 = cljs.core.count(c__4134__auto___7670);
var G__7674 = 0;
seq__7651_7657 = G__7671;
chunk__7652_7658 = G__7672;
count__7653_7659 = G__7673;
i__7654_7660 = G__7674;
continue;
}
} else
{var vec__7656_7675 = cljs.core.first(seq__7651_7669__$1);var name_7676 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7656_7675,0,null);var value_7677 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7656_7675,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_7676,cljs.core.array_seq([value_7677], 0));
{
var G__7678 = cljs.core.next(seq__7651_7669__$1);
var G__7679 = null;
var G__7680 = 0;
var G__7681 = 0;
seq__7651_7657 = G__7678;
chunk__7652_7658 = G__7679;
count__7653_7659 = G__7680;
i__7654_7660 = G__7681;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Sets the specified CSS styles fpr each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__7688_7694 = cljs.core.seq(attrs);var chunk__7689_7695 = null;var count__7690_7696 = 0;var i__7691_7697 = 0;while(true){
if((i__7691_7697 < count__7690_7696))
{var vec__7692_7698 = chunk__7689_7695.cljs$core$IIndexed$_nth$arity$2(null,i__7691_7697);var name_7699 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7692_7698,0,null);var value_7700 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7692_7698,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_7699,cljs.core.array_seq([value_7700], 0));
{
var G__7701 = seq__7688_7694;
var G__7702 = chunk__7689_7695;
var G__7703 = count__7690_7696;
var G__7704 = (i__7691_7697 + 1);
seq__7688_7694 = G__7701;
chunk__7689_7695 = G__7702;
count__7690_7696 = G__7703;
i__7691_7697 = G__7704;
continue;
}
} else
{var temp__4092__auto___7705 = cljs.core.seq(seq__7688_7694);if(temp__4092__auto___7705)
{var seq__7688_7706__$1 = temp__4092__auto___7705;if(cljs.core.chunked_seq_QMARK_(seq__7688_7706__$1))
{var c__4134__auto___7707 = cljs.core.chunk_first(seq__7688_7706__$1);{
var G__7708 = cljs.core.chunk_rest(seq__7688_7706__$1);
var G__7709 = c__4134__auto___7707;
var G__7710 = cljs.core.count(c__4134__auto___7707);
var G__7711 = 0;
seq__7688_7694 = G__7708;
chunk__7689_7695 = G__7709;
count__7690_7696 = G__7710;
i__7691_7697 = G__7711;
continue;
}
} else
{var vec__7693_7712 = cljs.core.first(seq__7688_7706__$1);var name_7713 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7693_7712,0,null);var value_7714 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7693_7712,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_7713,cljs.core.array_seq([value_7714], 0));
{
var G__7715 = cljs.core.next(seq__7688_7706__$1);
var G__7716 = null;
var G__7717 = 0;
var G__7718 = 0;
seq__7688_7694 = G__7715;
chunk__7689_7695 = G__7716;
count__7690_7696 = G__7717;
i__7691_7697 = G__7718;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns true if the node has the specified CSS class. Assumes content is a single node.
*/
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){return goog.dom.classes.has(domina.single_node(content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__7723_7727 = cljs.core.seq(domina.nodes(content));var chunk__7724_7728 = null;var count__7725_7729 = 0;var i__7726_7730 = 0;while(true){
if((i__7726_7730 < count__7725_7729))
{var node_7731 = chunk__7724_7728.cljs$core$IIndexed$_nth$arity$2(null,i__7726_7730);goog.dom.classes.add(node_7731,class$);
{
var G__7732 = seq__7723_7727;
var G__7733 = chunk__7724_7728;
var G__7734 = count__7725_7729;
var G__7735 = (i__7726_7730 + 1);
seq__7723_7727 = G__7732;
chunk__7724_7728 = G__7733;
count__7725_7729 = G__7734;
i__7726_7730 = G__7735;
continue;
}
} else
{var temp__4092__auto___7736 = cljs.core.seq(seq__7723_7727);if(temp__4092__auto___7736)
{var seq__7723_7737__$1 = temp__4092__auto___7736;if(cljs.core.chunked_seq_QMARK_(seq__7723_7737__$1))
{var c__4134__auto___7738 = cljs.core.chunk_first(seq__7723_7737__$1);{
var G__7739 = cljs.core.chunk_rest(seq__7723_7737__$1);
var G__7740 = c__4134__auto___7738;
var G__7741 = cljs.core.count(c__4134__auto___7738);
var G__7742 = 0;
seq__7723_7727 = G__7739;
chunk__7724_7728 = G__7740;
count__7725_7729 = G__7741;
i__7726_7730 = G__7742;
continue;
}
} else
{var node_7743 = cljs.core.first(seq__7723_7737__$1);goog.dom.classes.add(node_7743,class$);
{
var G__7744 = cljs.core.next(seq__7723_7737__$1);
var G__7745 = null;
var G__7746 = 0;
var G__7747 = 0;
seq__7723_7727 = G__7744;
chunk__7724_7728 = G__7745;
count__7725_7729 = G__7746;
i__7726_7730 = G__7747;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Removes the specified CSS class from each node in the content.
*/
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__7752_7756 = cljs.core.seq(domina.nodes(content));var chunk__7753_7757 = null;var count__7754_7758 = 0;var i__7755_7759 = 0;while(true){
if((i__7755_7759 < count__7754_7758))
{var node_7760 = chunk__7753_7757.cljs$core$IIndexed$_nth$arity$2(null,i__7755_7759);goog.dom.classes.remove(node_7760,class$);
{
var G__7761 = seq__7752_7756;
var G__7762 = chunk__7753_7757;
var G__7763 = count__7754_7758;
var G__7764 = (i__7755_7759 + 1);
seq__7752_7756 = G__7761;
chunk__7753_7757 = G__7762;
count__7754_7758 = G__7763;
i__7755_7759 = G__7764;
continue;
}
} else
{var temp__4092__auto___7765 = cljs.core.seq(seq__7752_7756);if(temp__4092__auto___7765)
{var seq__7752_7766__$1 = temp__4092__auto___7765;if(cljs.core.chunked_seq_QMARK_(seq__7752_7766__$1))
{var c__4134__auto___7767 = cljs.core.chunk_first(seq__7752_7766__$1);{
var G__7768 = cljs.core.chunk_rest(seq__7752_7766__$1);
var G__7769 = c__4134__auto___7767;
var G__7770 = cljs.core.count(c__4134__auto___7767);
var G__7771 = 0;
seq__7752_7756 = G__7768;
chunk__7753_7757 = G__7769;
count__7754_7758 = G__7770;
i__7755_7759 = G__7771;
continue;
}
} else
{var node_7772 = cljs.core.first(seq__7752_7766__$1);goog.dom.classes.remove(node_7772,class$);
{
var G__7773 = cljs.core.next(seq__7752_7766__$1);
var G__7774 = null;
var G__7775 = 0;
var G__7776 = 0;
seq__7752_7756 = G__7773;
chunk__7753_7757 = G__7774;
count__7754_7758 = G__7775;
i__7755_7759 = G__7776;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
*/
domina.classes = (function classes(content){return cljs.core.seq(goog.dom.classes.get(domina.single_node(content)));
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_7785__$1 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes):classes);var seq__7781_7786 = cljs.core.seq(domina.nodes(content));var chunk__7782_7787 = null;var count__7783_7788 = 0;var i__7784_7789 = 0;while(true){
if((i__7784_7789 < count__7783_7788))
{var node_7790 = chunk__7782_7787.cljs$core$IIndexed$_nth$arity$2(null,i__7784_7789);goog.dom.classes.set(node_7790,classes_7785__$1);
{
var G__7791 = seq__7781_7786;
var G__7792 = chunk__7782_7787;
var G__7793 = count__7783_7788;
var G__7794 = (i__7784_7789 + 1);
seq__7781_7786 = G__7791;
chunk__7782_7787 = G__7792;
count__7783_7788 = G__7793;
i__7784_7789 = G__7794;
continue;
}
} else
{var temp__4092__auto___7795 = cljs.core.seq(seq__7781_7786);if(temp__4092__auto___7795)
{var seq__7781_7796__$1 = temp__4092__auto___7795;if(cljs.core.chunked_seq_QMARK_(seq__7781_7796__$1))
{var c__4134__auto___7797 = cljs.core.chunk_first(seq__7781_7796__$1);{
var G__7798 = cljs.core.chunk_rest(seq__7781_7796__$1);
var G__7799 = c__4134__auto___7797;
var G__7800 = cljs.core.count(c__4134__auto___7797);
var G__7801 = 0;
seq__7781_7786 = G__7798;
chunk__7782_7787 = G__7799;
count__7783_7788 = G__7800;
i__7784_7789 = G__7801;
continue;
}
} else
{var node_7802 = cljs.core.first(seq__7781_7796__$1);goog.dom.classes.set(node_7802,classes_7785__$1);
{
var G__7803 = cljs.core.next(seq__7781_7796__$1);
var G__7804 = null;
var G__7805 = 0;
var G__7806 = 0;
seq__7781_7786 = G__7803;
chunk__7782_7787 = G__7804;
count__7783_7788 = G__7805;
i__7784_7789 = G__7806;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
*/
domina.text = (function text(content){return goog.string.trim(goog.dom.getTextContent(domina.single_node(content)));
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__7811_7815 = cljs.core.seq(domina.nodes(content));var chunk__7812_7816 = null;var count__7813_7817 = 0;var i__7814_7818 = 0;while(true){
if((i__7814_7818 < count__7813_7817))
{var node_7819 = chunk__7812_7816.cljs$core$IIndexed$_nth$arity$2(null,i__7814_7818);goog.dom.setTextContent(node_7819,value);
{
var G__7820 = seq__7811_7815;
var G__7821 = chunk__7812_7816;
var G__7822 = count__7813_7817;
var G__7823 = (i__7814_7818 + 1);
seq__7811_7815 = G__7820;
chunk__7812_7816 = G__7821;
count__7813_7817 = G__7822;
i__7814_7818 = G__7823;
continue;
}
} else
{var temp__4092__auto___7824 = cljs.core.seq(seq__7811_7815);if(temp__4092__auto___7824)
{var seq__7811_7825__$1 = temp__4092__auto___7824;if(cljs.core.chunked_seq_QMARK_(seq__7811_7825__$1))
{var c__4134__auto___7826 = cljs.core.chunk_first(seq__7811_7825__$1);{
var G__7827 = cljs.core.chunk_rest(seq__7811_7825__$1);
var G__7828 = c__4134__auto___7826;
var G__7829 = cljs.core.count(c__4134__auto___7826);
var G__7830 = 0;
seq__7811_7815 = G__7827;
chunk__7812_7816 = G__7828;
count__7813_7817 = G__7829;
i__7814_7818 = G__7830;
continue;
}
} else
{var node_7831 = cljs.core.first(seq__7811_7825__$1);goog.dom.setTextContent(node_7831,value);
{
var G__7832 = cljs.core.next(seq__7811_7825__$1);
var G__7833 = null;
var G__7834 = 0;
var G__7835 = 0;
seq__7811_7815 = G__7832;
chunk__7812_7816 = G__7833;
count__7813_7817 = G__7834;
i__7814_7818 = G__7835;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the value of a node (presumably a form field). Assumes content is a single node.
*/
domina.value = (function value(content){return goog.dom.forms.getValue(domina.single_node(content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__7840_7844 = cljs.core.seq(domina.nodes(content));var chunk__7841_7845 = null;var count__7842_7846 = 0;var i__7843_7847 = 0;while(true){
if((i__7843_7847 < count__7842_7846))
{var node_7848 = chunk__7841_7845.cljs$core$IIndexed$_nth$arity$2(null,i__7843_7847);goog.dom.forms.setValue(node_7848,value);
{
var G__7849 = seq__7840_7844;
var G__7850 = chunk__7841_7845;
var G__7851 = count__7842_7846;
var G__7852 = (i__7843_7847 + 1);
seq__7840_7844 = G__7849;
chunk__7841_7845 = G__7850;
count__7842_7846 = G__7851;
i__7843_7847 = G__7852;
continue;
}
} else
{var temp__4092__auto___7853 = cljs.core.seq(seq__7840_7844);if(temp__4092__auto___7853)
{var seq__7840_7854__$1 = temp__4092__auto___7853;if(cljs.core.chunked_seq_QMARK_(seq__7840_7854__$1))
{var c__4134__auto___7855 = cljs.core.chunk_first(seq__7840_7854__$1);{
var G__7856 = cljs.core.chunk_rest(seq__7840_7854__$1);
var G__7857 = c__4134__auto___7855;
var G__7858 = cljs.core.count(c__4134__auto___7855);
var G__7859 = 0;
seq__7840_7844 = G__7856;
chunk__7841_7845 = G__7857;
count__7842_7846 = G__7858;
i__7843_7847 = G__7859;
continue;
}
} else
{var node_7860 = cljs.core.first(seq__7840_7854__$1);goog.dom.forms.setValue(node_7860,value);
{
var G__7861 = cljs.core.next(seq__7840_7854__$1);
var G__7862 = null;
var G__7863 = 0;
var G__7864 = 0;
seq__7840_7844 = G__7861;
chunk__7841_7845 = G__7862;
count__7842_7846 = G__7863;
i__7843_7847 = G__7864;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the innerHTML of a node. Assumes content is a single node.
*/
domina.html = (function html(content){return domina.single_node(content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){return domina.append_BANG_(domina.destroy_children_BANG_(content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find(domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_(domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3393__auto__ = allows_inner_html_QMARK_;if(and__3393__auto__)
{var and__3393__auto____$1 = (function (){var or__3405__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3405__auto__))
{return or__3405__auto__;
} else
{return cljs.core.not(leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3393__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3393__auto____$1;
}
} else
{return and__3393__auto__;
}
})()))
{var value_7875 = clojure.string.replace(html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__7871_7876 = cljs.core.seq(domina.nodes(content));var chunk__7872_7877 = null;var count__7873_7878 = 0;var i__7874_7879 = 0;while(true){
if((i__7874_7879 < count__7873_7878))
{var node_7880 = chunk__7872_7877.cljs$core$IIndexed$_nth$arity$2(null,i__7874_7879);goog.events.removeAll(node_7880);
node_7880.innerHTML = value_7875;
{
var G__7881 = seq__7871_7876;
var G__7882 = chunk__7872_7877;
var G__7883 = count__7873_7878;
var G__7884 = (i__7874_7879 + 1);
seq__7871_7876 = G__7881;
chunk__7872_7877 = G__7882;
count__7873_7878 = G__7883;
i__7874_7879 = G__7884;
continue;
}
} else
{var temp__4092__auto___7885 = cljs.core.seq(seq__7871_7876);if(temp__4092__auto___7885)
{var seq__7871_7886__$1 = temp__4092__auto___7885;if(cljs.core.chunked_seq_QMARK_(seq__7871_7886__$1))
{var c__4134__auto___7887 = cljs.core.chunk_first(seq__7871_7886__$1);{
var G__7888 = cljs.core.chunk_rest(seq__7871_7886__$1);
var G__7889 = c__4134__auto___7887;
var G__7890 = cljs.core.count(c__4134__auto___7887);
var G__7891 = 0;
seq__7871_7876 = G__7888;
chunk__7872_7877 = G__7889;
count__7873_7878 = G__7890;
i__7874_7879 = G__7891;
continue;
}
} else
{var node_7892 = cljs.core.first(seq__7871_7886__$1);goog.events.removeAll(node_7892);
node_7892.innerHTML = value_7875;
{
var G__7893 = cljs.core.next(seq__7871_7886__$1);
var G__7894 = null;
var G__7895 = 0;
var G__7896 = 0;
seq__7871_7876 = G__7893;
chunk__7872_7877 = G__7894;
count__7873_7878 = G__7895;
i__7874_7879 = G__7896;
continue;
}
}
} else
{}
}
break;
}
}catch (e7870){if((e7870 instanceof Error))
{var e_7897 = e7870;domina.replace_children_BANG_(content,value_7875);
} else
{if(cljs.core.constant$keyword$6)
{throw e7870;
} else
{}
}
}} else
{domina.replace_children_BANG_(content,html_string);
}
return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){if(typeof inner_content === 'string')
{return domina.set_inner_html_BANG_(content,inner_content);
} else
{return domina.replace_children_BANG_(content,inner_content);
}
});
/**
* Returns data associated with a node for a given key. Assumes
* content is a single node. If the bubble parameter is set to true,
* will search parent nodes if the key is not found.
*/
domina.get_data = (function() {
var get_data = null;
var get_data__2 = (function (node,key){return get_data.cljs$core$IFn$_invoke$arity$3(node,key,false);
});
var get_data__3 = (function (node,key,bubble){var m = domina.single_node(node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,key):null);if(cljs.core.truth_((function (){var and__3393__auto__ = bubble;if(cljs.core.truth_(and__3393__auto__))
{return (value == null);
} else
{return and__3393__auto__;
}
})()))
{var temp__4092__auto__ = domina.single_node(node).parentNode;if(cljs.core.truth_(temp__4092__auto__))
{var parent = temp__4092__auto__;return get_data.cljs$core$IFn$_invoke$arity$3(parent,key,true);
} else
{return null;
}
} else
{return value;
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3405__auto__ = domina.single_node(node).__domina_data;if(cljs.core.truth_(or__3405__auto__))
{return or__3405__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();return domina.single_node(node).__domina_data = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes(parent_content);var children = domina.nodes(child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__7904_7908 = cljs.core.seq(children);var chunk__7905_7909 = null;var count__7906_7910 = 0;var i__7907_7911 = 0;while(true){
if((i__7907_7911 < count__7906_7910))
{var child_7912 = chunk__7905_7909.cljs$core$IIndexed$_nth$arity$2(null,i__7907_7911);frag.appendChild(child_7912);
{
var G__7913 = seq__7904_7908;
var G__7914 = chunk__7905_7909;
var G__7915 = count__7906_7910;
var G__7916 = (i__7907_7911 + 1);
seq__7904_7908 = G__7913;
chunk__7905_7909 = G__7914;
count__7906_7910 = G__7915;
i__7907_7911 = G__7916;
continue;
}
} else
{var temp__4092__auto___7917 = cljs.core.seq(seq__7904_7908);if(temp__4092__auto___7917)
{var seq__7904_7918__$1 = temp__4092__auto___7917;if(cljs.core.chunked_seq_QMARK_(seq__7904_7918__$1))
{var c__4134__auto___7919 = cljs.core.chunk_first(seq__7904_7918__$1);{
var G__7920 = cljs.core.chunk_rest(seq__7904_7918__$1);
var G__7921 = c__4134__auto___7919;
var G__7922 = cljs.core.count(c__4134__auto___7919);
var G__7923 = 0;
seq__7904_7908 = G__7920;
chunk__7905_7909 = G__7921;
count__7906_7910 = G__7922;
i__7907_7911 = G__7923;
continue;
}
} else
{var child_7924 = cljs.core.first(seq__7904_7918__$1);frag.appendChild(child_7924);
{
var G__7925 = cljs.core.next(seq__7904_7918__$1);
var G__7926 = null;
var G__7927 = 0;
var G__7928 = 0;
seq__7904_7908 = G__7925;
chunk__7905_7909 = G__7926;
count__7906_7910 = G__7927;
i__7907_7911 = G__7928;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((cljs.core.count(parents) - 1),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq(parents))
{(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(cljs.core.first(parents),first_child) : f.call(null,cljs.core.first(parents),first_child));
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__7898_SHARP_,p2__7899_SHARP_){return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__7898_SHARP_,p2__7899_SHARP_) : f.call(null,p1__7898_SHARP_,p2__7899_SHARP_));
}),cljs.core.rest(parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2(nl,0);
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons(nl.item(n),lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2(nl,(n + 1)));
}),null,null));
} else
{return null;
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
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2(nl,0);
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons((nl[n]),lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2(nl,(n + 1)));
}),null,null));
} else
{return null;
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
domina.lazy_nodelist = (function lazy_nodelist(nl){if(cljs.core.truth_(nl.item))
{return domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1(nl);
} else
{return domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1(nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3393__auto__ = obj;if(cljs.core.truth_(and__3393__auto__))
{return obj.length;
} else
{return and__3393__auto__;
}
});
/**
* Some versions of IE have things that are like arrays in that they
* respond to .length, but are not arrays nor NodeSets. This returns a
* real sequence view of such objects. If passed an object that is not
* a logical sequence at all, returns a single-item seq containing the
* object.
*/
domina.normalize_seq = (function normalize_seq(list_thing){if((list_thing == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__7930 = list_thing;if(G__7930)
{var bit__4036__auto__ = (G__7930.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4036__auto__) || (G__7930.cljs$core$ISeqable$))
{return true;
} else
{if((!G__7930.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__7930);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__7930);
}
})())
{return cljs.core.seq(list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(list_thing)))
{return domina.lazy_nodelist(list_thing);
} else
{if(cljs.core.constant$keyword$7)
{return cljs.core.seq(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));
} else
{return null;
}
}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__7931 = content;if(G__7931)
{var bit__4036__auto__ = (G__7931.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4036__auto__) || (G__7931.cljs$core$ISeqable$))
{return true;
} else
{if((!G__7931.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__7931);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__7931);
}
})())
{return cljs.core.seq(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return domina.lazy_nodelist(content);
} else
{if(cljs.core.constant$keyword$7)
{return cljs.core.seq(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));
} else
{return null;
}
}
}
}
}));
(domina.single_node["_"] = (function (content){if((content == null))
{return null;
} else
{if((function (){var G__7932 = content;if(G__7932)
{var bit__4036__auto__ = (G__7932.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4036__auto__) || (G__7932.cljs$core$ISeqable$))
{return true;
} else
{if((!G__7932.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__7932);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__7932);
}
})())
{return cljs.core.first(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return content.item(0);
} else
{if(cljs.core.constant$keyword$7)
{return content;
} else
{return null;
}
}
}
}
}));
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(domina.nodes(domina.string_to_dom(s)));
}));
(domina.single_node["string"] = (function (s){return domina.single_node(domina.string_to_dom(s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined')))
{NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist(nodelist__$1);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(nodelist__$1,n);
}
});
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined')))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist(nodelist__$1);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(nodelist__$1,n);
}
});
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined')))
{HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var coll__$1 = this;return domina.lazy_nodelist(coll__$1);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var coll__$1 = this;return coll__$1.item(n);
});
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var coll__$1 = this;if((coll__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(coll__$1,n);
}
});
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var coll__$1 = this;return coll__$1.length;
});
} else
{}
