// Compiled by ClojureScript 0.0-2665 {}
if(!goog.isProvided_('figwheel.client.heads_up')) {
goog.provide('figwheel.client.heads_up');
}
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('clojure.string');

/**
* @param {...*} var_args
*/
figwheel.client.heads_up.node = (function() { 
var node__delegate = function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__25089_25097 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__25090_25098 = null;
var count__25091_25099 = (0);
var i__25092_25100 = (0);
while(true){
if((i__25092_25100 < count__25091_25099)){
var k_25101 = cljs.core._nth.call(null,chunk__25090_25098,i__25092_25100);
e.setAttribute(cljs.core.name.call(null,k_25101),cljs.core.get.call(null,attrs,k_25101));

var G__25102 = seq__25089_25097;
var G__25103 = chunk__25090_25098;
var G__25104 = count__25091_25099;
var G__25105 = (i__25092_25100 + (1));
seq__25089_25097 = G__25102;
chunk__25090_25098 = G__25103;
count__25091_25099 = G__25104;
i__25092_25100 = G__25105;
continue;
} else {
var temp__4126__auto___25106 = cljs.core.seq.call(null,seq__25089_25097);
if(temp__4126__auto___25106){
var seq__25089_25107__$1 = temp__4126__auto___25106;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25089_25107__$1)){
var c__12416__auto___25108 = cljs.core.chunk_first.call(null,seq__25089_25107__$1);
var G__25109 = cljs.core.chunk_rest.call(null,seq__25089_25107__$1);
var G__25110 = c__12416__auto___25108;
var G__25111 = cljs.core.count.call(null,c__12416__auto___25108);
var G__25112 = (0);
seq__25089_25097 = G__25109;
chunk__25090_25098 = G__25110;
count__25091_25099 = G__25111;
i__25092_25100 = G__25112;
continue;
} else {
var k_25113 = cljs.core.first.call(null,seq__25089_25107__$1);
e.setAttribute(cljs.core.name.call(null,k_25113),cljs.core.get.call(null,attrs,k_25113));

var G__25114 = cljs.core.next.call(null,seq__25089_25107__$1);
var G__25115 = null;
var G__25116 = (0);
var G__25117 = (0);
seq__25089_25097 = G__25114;
chunk__25090_25098 = G__25115;
count__25091_25099 = G__25116;
i__25092_25100 = G__25117;
continue;
}
} else {
}
}
break;
}

var seq__25093_25118 = cljs.core.seq.call(null,children);
var chunk__25094_25119 = null;
var count__25095_25120 = (0);
var i__25096_25121 = (0);
while(true){
if((i__25096_25121 < count__25095_25120)){
var ch_25122 = cljs.core._nth.call(null,chunk__25094_25119,i__25096_25121);
e.appendChild(ch_25122);

var G__25123 = seq__25093_25118;
var G__25124 = chunk__25094_25119;
var G__25125 = count__25095_25120;
var G__25126 = (i__25096_25121 + (1));
seq__25093_25118 = G__25123;
chunk__25094_25119 = G__25124;
count__25095_25120 = G__25125;
i__25096_25121 = G__25126;
continue;
} else {
var temp__4126__auto___25127 = cljs.core.seq.call(null,seq__25093_25118);
if(temp__4126__auto___25127){
var seq__25093_25128__$1 = temp__4126__auto___25127;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25093_25128__$1)){
var c__12416__auto___25129 = cljs.core.chunk_first.call(null,seq__25093_25128__$1);
var G__25130 = cljs.core.chunk_rest.call(null,seq__25093_25128__$1);
var G__25131 = c__12416__auto___25129;
var G__25132 = cljs.core.count.call(null,c__12416__auto___25129);
var G__25133 = (0);
seq__25093_25118 = G__25130;
chunk__25094_25119 = G__25131;
count__25095_25120 = G__25132;
i__25096_25121 = G__25133;
continue;
} else {
var ch_25134 = cljs.core.first.call(null,seq__25093_25128__$1);
e.appendChild(ch_25134);

var G__25135 = cljs.core.next.call(null,seq__25093_25128__$1);
var G__25136 = null;
var G__25137 = (0);
var G__25138 = (0);
seq__25093_25118 = G__25135;
chunk__25094_25119 = G__25136;
count__25095_25120 = G__25137;
i__25096_25121 = G__25138;
continue;
}
} else {
}
}
break;
}

return e;
};
var node = function (t,attrs,var_args){
var children = null;
if (arguments.length > 2) {
var G__25139__i = 0, G__25139__a = new Array(arguments.length -  2);
while (G__25139__i < G__25139__a.length) {G__25139__a[G__25139__i] = arguments[G__25139__i + 2]; ++G__25139__i;}
  children = new cljs.core.IndexedSeq(G__25139__a,0);
} 
return node__delegate.call(this,t,attrs,children);};
node.cljs$lang$maxFixedArity = 2;
node.cljs$lang$applyTo = (function (arglist__25140){
var t = cljs.core.first(arglist__25140);
arglist__25140 = cljs.core.next(arglist__25140);
var attrs = cljs.core.first(arglist__25140);
var children = cljs.core.rest(arglist__25140);
return node__delegate(t,attrs,children);
});
node.cljs$core$IFn$_invoke$arity$variadic = node__delegate;
return node;
})()
;
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__12526__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__12527__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__12528__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__12529__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__12530__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__12526__auto__,prefer_table__12527__auto__,method_cache__12528__auto__,cached_hierarchy__12529__auto__,hierarchy__12530__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__12526__auto__,prefer_table__12527__auto__,method_cache__12528__auto__,cached_hierarchy__12529__auto__,hierarchy__12530__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__12530__auto__,method_table__12526__auto__,prefer_table__12527__auto__,method_cache__12528__auto__,cached_hierarchy__12529__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

return document.body.appendChild(el);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
}
});
figwheel.client.heads_up.set_style_BANG_ = (function set_style_BANG_(p__25141,st_map){
var map__25145 = p__25141;
var map__25145__$1 = ((cljs.core.seq_QMARK_.call(null,map__25145))?cljs.core.apply.call(null,cljs.core.hash_map,map__25145):map__25145);
var container_el = cljs.core.get.call(null,map__25145__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__25145,map__25145__$1,container_el){
return (function (p__25146){
var vec__25147 = p__25146;
var k = cljs.core.nth.call(null,vec__25147,(0),null);
var v = cljs.core.nth.call(null,vec__25147,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__25145,map__25145__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function set_content_BANG_(p__25148,dom_str){
var map__25150 = p__25148;
var map__25150__$1 = ((cljs.core.seq_QMARK_.call(null,map__25150))?cljs.core.apply.call(null,cljs.core.hash_map,map__25150):map__25150);
var c = map__25150__$1;
var content_area_el = cljs.core.get.call(null,map__25150__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function get_content(p__25151){
var map__25153 = p__25151;
var map__25153__$1 = ((cljs.core.seq_QMARK_.call(null,map__25153))?cljs.core.apply.call(null,cljs.core.hash_map,map__25153):map__25153);
var content_area_el = cljs.core.get.call(null,map__25153__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function display_heads_up(style,msg){
var c__20748__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20748__auto__){
return (function (){
var f__20749__auto__ = (function (){var switch__20692__auto__ = ((function (c__20748__auto__){
return (function (state_25195){
var state_val_25196 = (state_25195[(1)]);
if((state_val_25196 === (2))){
var inst_25180 = (state_25195[(7)]);
var inst_25189 = (state_25195[(2)]);
var inst_25190 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_25191 = ["auto"];
var inst_25192 = cljs.core.PersistentHashMap.fromArrays(inst_25190,inst_25191);
var inst_25193 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_25180,inst_25192);
var state_25195__$1 = (function (){var statearr_25197 = state_25195;
(statearr_25197[(8)] = inst_25189);

return statearr_25197;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25195__$1,inst_25193);
} else {
if((state_val_25196 === (1))){
var inst_25180 = (state_25195[(7)]);
var inst_25180__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_25181 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_25182 = ["10px","10px","100%","68px","1.0"];
var inst_25183 = cljs.core.PersistentHashMap.fromArrays(inst_25181,inst_25182);
var inst_25184 = cljs.core.merge.call(null,inst_25183,style);
var inst_25185 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_25180__$1,inst_25184);
var inst_25186 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_25180__$1,msg);
var inst_25187 = cljs.core.async.timeout.call(null,(300));
var state_25195__$1 = (function (){var statearr_25198 = state_25195;
(statearr_25198[(9)] = inst_25186);

(statearr_25198[(10)] = inst_25185);

(statearr_25198[(7)] = inst_25180__$1);

return statearr_25198;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25195__$1,(2),inst_25187);
} else {
return null;
}
}
});})(c__20748__auto__))
;
return ((function (switch__20692__auto__,c__20748__auto__){
return (function() {
var state_machine__20693__auto__ = null;
var state_machine__20693__auto____0 = (function (){
var statearr_25202 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25202[(0)] = state_machine__20693__auto__);

(statearr_25202[(1)] = (1));

return statearr_25202;
});
var state_machine__20693__auto____1 = (function (state_25195){
while(true){
var ret_value__20694__auto__ = (function (){try{while(true){
var result__20695__auto__ = switch__20692__auto__.call(null,state_25195);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20695__auto__;
}
break;
}
}catch (e25203){if((e25203 instanceof Object)){
var ex__20696__auto__ = e25203;
var statearr_25204_25206 = state_25195;
(statearr_25204_25206[(5)] = ex__20696__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25195);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25203;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25207 = state_25195;
state_25195 = G__25207;
continue;
} else {
return ret_value__20694__auto__;
}
break;
}
});
state_machine__20693__auto__ = function(state_25195){
switch(arguments.length){
case 0:
return state_machine__20693__auto____0.call(this);
case 1:
return state_machine__20693__auto____1.call(this,state_25195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20693__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20693__auto____0;
state_machine__20693__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20693__auto____1;
return state_machine__20693__auto__;
})()
;})(switch__20692__auto__,c__20748__auto__))
})();
var state__20750__auto__ = (function (){var statearr_25205 = f__20749__auto__.call(null);
(statearr_25205[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20748__auto__);

return statearr_25205;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20750__auto__);
});})(c__20748__auto__))
);

return c__20748__auto__;
});
figwheel.client.heads_up.heading = (function heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function format_line(msg){
var temp__4124__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg);
if(cljs.core.truth_(temp__4124__auto__)){
var vec__25209 = temp__4124__auto__;
var f = cljs.core.nth.call(null,vec__25209,(0),null);
var ln = cljs.core.nth.call(null,vec__25209,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function display_error(formatted_messages){
var vec__25212 = cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages));
var file_name = cljs.core.nth.call(null,vec__25212,(0),null);
var file_line = cljs.core.nth.call(null,vec__25212,(1),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__25212,file_name,file_line){
return (function (p1__25210_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__25210_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__25212,file_name,file_line))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,file_line,msg))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function append_message(message){
var map__25214 = figwheel.client.heads_up.ensure_container.call(null);
var map__25214__$1 = ((cljs.core.seq_QMARK_.call(null,map__25214))?cljs.core.apply.call(null,cljs.core.hash_map,map__25214):map__25214);
var content_area_el = cljs.core.get.call(null,map__25214__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function clear(){
var c__20748__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20748__auto__){
return (function (){
var f__20749__auto__ = (function (){var switch__20692__auto__ = ((function (c__20748__auto__){
return (function (state_25261){
var state_val_25262 = (state_25261[(1)]);
if((state_val_25262 === (3))){
var inst_25244 = (state_25261[(7)]);
var inst_25258 = (state_25261[(2)]);
var inst_25259 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_25244,"");
var state_25261__$1 = (function (){var statearr_25263 = state_25261;
(statearr_25263[(8)] = inst_25258);

return statearr_25263;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25261__$1,inst_25259);
} else {
if((state_val_25262 === (2))){
var inst_25244 = (state_25261[(7)]);
var inst_25251 = (state_25261[(2)]);
var inst_25252 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_25253 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_25254 = cljs.core.PersistentHashMap.fromArrays(inst_25252,inst_25253);
var inst_25255 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_25244,inst_25254);
var inst_25256 = cljs.core.async.timeout.call(null,(200));
var state_25261__$1 = (function (){var statearr_25264 = state_25261;
(statearr_25264[(9)] = inst_25255);

(statearr_25264[(10)] = inst_25251);

return statearr_25264;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25261__$1,(3),inst_25256);
} else {
if((state_val_25262 === (1))){
var inst_25244 = (state_25261[(7)]);
var inst_25244__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_25245 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_25246 = ["0.0"];
var inst_25247 = cljs.core.PersistentHashMap.fromArrays(inst_25245,inst_25246);
var inst_25248 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_25244__$1,inst_25247);
var inst_25249 = cljs.core.async.timeout.call(null,(300));
var state_25261__$1 = (function (){var statearr_25265 = state_25261;
(statearr_25265[(7)] = inst_25244__$1);

(statearr_25265[(11)] = inst_25248);

return statearr_25265;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25261__$1,(2),inst_25249);
} else {
return null;
}
}
}
});})(c__20748__auto__))
;
return ((function (switch__20692__auto__,c__20748__auto__){
return (function() {
var state_machine__20693__auto__ = null;
var state_machine__20693__auto____0 = (function (){
var statearr_25269 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25269[(0)] = state_machine__20693__auto__);

(statearr_25269[(1)] = (1));

return statearr_25269;
});
var state_machine__20693__auto____1 = (function (state_25261){
while(true){
var ret_value__20694__auto__ = (function (){try{while(true){
var result__20695__auto__ = switch__20692__auto__.call(null,state_25261);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20695__auto__;
}
break;
}
}catch (e25270){if((e25270 instanceof Object)){
var ex__20696__auto__ = e25270;
var statearr_25271_25273 = state_25261;
(statearr_25271_25273[(5)] = ex__20696__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25261);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25270;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25274 = state_25261;
state_25261 = G__25274;
continue;
} else {
return ret_value__20694__auto__;
}
break;
}
});
state_machine__20693__auto__ = function(state_25261){
switch(arguments.length){
case 0:
return state_machine__20693__auto____0.call(this);
case 1:
return state_machine__20693__auto____1.call(this,state_25261);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20693__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20693__auto____0;
state_machine__20693__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20693__auto____1;
return state_machine__20693__auto__;
})()
;})(switch__20692__auto__,c__20748__auto__))
})();
var state__20750__auto__ = (function (){var statearr_25272 = f__20749__auto__.call(null);
(statearr_25272[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20748__auto__);

return statearr_25272;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20750__auto__);
});})(c__20748__auto__))
);

return c__20748__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function flash_loaded(){
var c__20748__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20748__auto__){
return (function (){
var f__20749__auto__ = (function (){var switch__20692__auto__ = ((function (c__20748__auto__){
return (function (state_25306){
var state_val_25307 = (state_25306[(1)]);
if((state_val_25307 === (4))){
var inst_25304 = (state_25306[(2)]);
var state_25306__$1 = state_25306;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25306__$1,inst_25304);
} else {
if((state_val_25307 === (3))){
var inst_25301 = (state_25306[(2)]);
var inst_25302 = figwheel.client.heads_up.clear.call(null);
var state_25306__$1 = (function (){var statearr_25308 = state_25306;
(statearr_25308[(7)] = inst_25301);

return statearr_25308;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25306__$1,(4),inst_25302);
} else {
if((state_val_25307 === (2))){
var inst_25298 = (state_25306[(2)]);
var inst_25299 = cljs.core.async.timeout.call(null,(400));
var state_25306__$1 = (function (){var statearr_25309 = state_25306;
(statearr_25309[(8)] = inst_25298);

return statearr_25309;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25306__$1,(3),inst_25299);
} else {
if((state_val_25307 === (1))){
var inst_25296 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_25306__$1 = state_25306;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25306__$1,(2),inst_25296);
} else {
return null;
}
}
}
}
});})(c__20748__auto__))
;
return ((function (switch__20692__auto__,c__20748__auto__){
return (function() {
var state_machine__20693__auto__ = null;
var state_machine__20693__auto____0 = (function (){
var statearr_25313 = [null,null,null,null,null,null,null,null,null];
(statearr_25313[(0)] = state_machine__20693__auto__);

(statearr_25313[(1)] = (1));

return statearr_25313;
});
var state_machine__20693__auto____1 = (function (state_25306){
while(true){
var ret_value__20694__auto__ = (function (){try{while(true){
var result__20695__auto__ = switch__20692__auto__.call(null,state_25306);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20695__auto__;
}
break;
}
}catch (e25314){if((e25314 instanceof Object)){
var ex__20696__auto__ = e25314;
var statearr_25315_25317 = state_25306;
(statearr_25315_25317[(5)] = ex__20696__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25306);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25314;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25318 = state_25306;
state_25306 = G__25318;
continue;
} else {
return ret_value__20694__auto__;
}
break;
}
});
state_machine__20693__auto__ = function(state_25306){
switch(arguments.length){
case 0:
return state_machine__20693__auto____0.call(this);
case 1:
return state_machine__20693__auto____1.call(this,state_25306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20693__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20693__auto____0;
state_machine__20693__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20693__auto____1;
return state_machine__20693__auto__;
})()
;})(switch__20692__auto__,c__20748__auto__))
})();
var state__20750__auto__ = (function (){var statearr_25316 = f__20749__auto__.call(null);
(statearr_25316[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20748__auto__);

return statearr_25316;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20750__auto__);
});})(c__20748__auto__))
);

return c__20748__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map