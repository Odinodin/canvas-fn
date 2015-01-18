// Compiled by ClojureScript 0.0-2665 {}
if(!goog.isProvided_('figwheel.client.file_reloading')) {
goog.provide('figwheel.client.file_reloading');
}
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('goog.net.jsloader');
goog.require('goog.Uri');
figwheel.client.file_reloading.add_cache_buster = (function add_cache_buster(url){
return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.reload_host = (function reload_host(p__25320){
var map__25322 = p__25320;
var map__25322__$1 = ((cljs.core.seq_QMARK_.call(null,map__25322))?cljs.core.apply.call(null,cljs.core.hash_map,map__25322):map__25322);
var websocket_url = cljs.core.get.call(null,map__25322__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));
return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^wss?:/,""),/^\/\//,""),/\//));
});
figwheel.client.file_reloading.js_reload = (function js_reload(p__25323,callback){
var map__25325 = p__25323;
var map__25325__$1 = ((cljs.core.seq_QMARK_.call(null,map__25325))?cljs.core.apply.call(null,cljs.core.hash_map,map__25325):map__25325);
var msg = map__25325__$1;
var dependency_file = cljs.core.get.call(null,map__25325__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));
var namespace = cljs.core.get.call(null,map__25325__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__25325__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
if(cljs.core.truth_((function (){var or__11629__auto__ = dependency_file;
if(cljs.core.truth_(or__11629__auto__)){
return or__11629__auto__;
} else {
return goog.isProvided_(namespace);
}
})())){
return goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true}).addCallback(((function (map__25325,map__25325__$1,msg,dependency_file,namespace,request_url){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__25325,map__25325__$1,msg,dependency_file,namespace,request_url))
);
} else {
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
figwheel.client.file_reloading.load_all_js_files = (function load_all_js_files(files){

return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.async.filter_LT_.call(null,cljs.core.identity,cljs.core.async.merge.call(null,cljs.core.mapv.call(null,figwheel.client.file_reloading.reload_js_file,files))));
});
figwheel.client.file_reloading.add_request_url = (function add_request_url(p__25326,p__25327){
var map__25330 = p__25326;
var map__25330__$1 = ((cljs.core.seq_QMARK_.call(null,map__25330))?cljs.core.apply.call(null,cljs.core.hash_map,map__25330):map__25330);
var opts = map__25330__$1;
var url_rewriter = cljs.core.get.call(null,map__25330__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__25331 = p__25327;
var map__25331__$1 = ((cljs.core.seq_QMARK_.call(null,map__25331))?cljs.core.apply.call(null,cljs.core.hash_map,map__25331):map__25331);
var d = map__25331__$1;
var file = cljs.core.get.call(null,map__25331__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,[cljs.core.str("//"),cljs.core.str(figwheel.client.file_reloading.reload_host.call(null,opts)),cljs.core.str(file)].join('')));
});
figwheel.client.file_reloading.add_request_urls = (function add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.reload_js_files = (function reload_js_files(p__25332,p__25333){
var map__25369 = p__25332;
var map__25369__$1 = ((cljs.core.seq_QMARK_.call(null,map__25369))?cljs.core.apply.call(null,cljs.core.hash_map,map__25369):map__25369);
var opts = map__25369__$1;
var on_jsload = cljs.core.get.call(null,map__25369__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__25369__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__25370 = p__25333;
var map__25370__$1 = ((cljs.core.seq_QMARK_.call(null,map__25370))?cljs.core.apply.call(null,cljs.core.hash_map,map__25370):map__25370);
var msg = map__25370__$1;
var files = cljs.core.get.call(null,map__25370__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__20748__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20748__auto__,map__25369,map__25369__$1,opts,on_jsload,before_jsload,map__25370,map__25370__$1,msg,files){
return (function (){
var f__20749__auto__ = (function (){var switch__20692__auto__ = ((function (c__20748__auto__,map__25369,map__25369__$1,opts,on_jsload,before_jsload,map__25370,map__25370__$1,msg,files){
return (function (state_25388){
var state_val_25389 = (state_25388[(1)]);
if((state_val_25389 === (5))){
var inst_25386 = (state_25388[(2)]);
var state_25388__$1 = state_25388;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25388__$1,inst_25386);
} else {
if((state_val_25389 === (4))){
var state_25388__$1 = state_25388;
var statearr_25390_25404 = state_25388__$1;
(statearr_25390_25404[(2)] = null);

(statearr_25390_25404[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25389 === (3))){
var inst_25375 = (state_25388[(7)]);
var inst_25372 = (state_25388[(8)]);
var inst_25378 = console.debug("Figwheel: loaded these files");
var inst_25379 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_25375);
var inst_25380 = cljs.core.pr_str.call(null,inst_25379);
var inst_25381 = console.log(inst_25380);
var inst_25382 = (function (){var res = inst_25375;
var files_SINGLEQUOTE_ = inst_25372;
return ((function (res,files_SINGLEQUOTE_,inst_25375,inst_25372,inst_25378,inst_25379,inst_25380,inst_25381,state_val_25389,c__20748__auto__,map__25369,map__25369__$1,opts,on_jsload,before_jsload,map__25370,map__25370__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(res,files_SINGLEQUOTE_,inst_25375,inst_25372,inst_25378,inst_25379,inst_25380,inst_25381,state_val_25389,c__20748__auto__,map__25369,map__25369__$1,opts,on_jsload,before_jsload,map__25370,map__25370__$1,msg,files))
})();
var inst_25383 = setTimeout(inst_25382,(10));
var state_25388__$1 = (function (){var statearr_25391 = state_25388;
(statearr_25391[(9)] = inst_25378);

(statearr_25391[(10)] = inst_25381);

return statearr_25391;
})();
var statearr_25392_25405 = state_25388__$1;
(statearr_25392_25405[(2)] = inst_25383);

(statearr_25392_25405[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25389 === (2))){
var inst_25375 = (state_25388[(7)]);
var inst_25375__$1 = (state_25388[(2)]);
var inst_25376 = cljs.core.not_empty.call(null,inst_25375__$1);
var state_25388__$1 = (function (){var statearr_25393 = state_25388;
(statearr_25393[(7)] = inst_25375__$1);

return statearr_25393;
})();
if(cljs.core.truth_(inst_25376)){
var statearr_25394_25406 = state_25388__$1;
(statearr_25394_25406[(1)] = (3));

} else {
var statearr_25395_25407 = state_25388__$1;
(statearr_25395_25407[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25389 === (1))){
var inst_25372 = (state_25388[(8)]);
var inst_25371 = before_jsload.call(null,files);
var inst_25372__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,files);
var inst_25373 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_25372__$1);
var state_25388__$1 = (function (){var statearr_25396 = state_25388;
(statearr_25396[(11)] = inst_25371);

(statearr_25396[(8)] = inst_25372__$1);

return statearr_25396;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25388__$1,(2),inst_25373);
} else {
return null;
}
}
}
}
}
});})(c__20748__auto__,map__25369,map__25369__$1,opts,on_jsload,before_jsload,map__25370,map__25370__$1,msg,files))
;
return ((function (switch__20692__auto__,c__20748__auto__,map__25369,map__25369__$1,opts,on_jsload,before_jsload,map__25370,map__25370__$1,msg,files){
return (function() {
var state_machine__20693__auto__ = null;
var state_machine__20693__auto____0 = (function (){
var statearr_25400 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25400[(0)] = state_machine__20693__auto__);

(statearr_25400[(1)] = (1));

return statearr_25400;
});
var state_machine__20693__auto____1 = (function (state_25388){
while(true){
var ret_value__20694__auto__ = (function (){try{while(true){
var result__20695__auto__ = switch__20692__auto__.call(null,state_25388);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20695__auto__;
}
break;
}
}catch (e25401){if((e25401 instanceof Object)){
var ex__20696__auto__ = e25401;
var statearr_25402_25408 = state_25388;
(statearr_25402_25408[(5)] = ex__20696__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25388);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25401;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25409 = state_25388;
state_25388 = G__25409;
continue;
} else {
return ret_value__20694__auto__;
}
break;
}
});
state_machine__20693__auto__ = function(state_25388){
switch(arguments.length){
case 0:
return state_machine__20693__auto____0.call(this);
case 1:
return state_machine__20693__auto____1.call(this,state_25388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20693__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20693__auto____0;
state_machine__20693__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20693__auto____1;
return state_machine__20693__auto__;
})()
;})(switch__20692__auto__,c__20748__auto__,map__25369,map__25369__$1,opts,on_jsload,before_jsload,map__25370,map__25370__$1,msg,files))
})();
var state__20750__auto__ = (function (){var statearr_25403 = f__20749__auto__.call(null);
(statearr_25403[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20748__auto__);

return statearr_25403;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20750__auto__);
});})(c__20748__auto__,map__25369,map__25369__$1,opts,on_jsload,before_jsload,map__25370,map__25370__$1,msg,files))
);

return c__20748__auto__;
});
figwheel.client.file_reloading.current_links = (function current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function matches_file_QMARK_(p__25410,link_href){
var map__25412 = p__25410;
var map__25412__$1 = ((cljs.core.seq_QMARK_.call(null,map__25412))?cljs.core.apply.call(null,cljs.core.hash_map,map__25412):map__25412);
var request_url = cljs.core.get.call(null,map__25412__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__25412__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var trunc_href = figwheel.client.file_reloading.truncate_url.call(null,link_href);
return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.file_reloading.truncate_url.call(null,request_url),trunc_href));
});
figwheel.client.file_reloading.get_correct_link = (function get_correct_link(f_data){
return cljs.core.some.call(null,(function (l){
if(figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,l.href)){
return l;
} else {
return null;
}
}),figwheel.client.file_reloading.current_links.call(null));
});
figwheel.client.file_reloading.clone_link = (function clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function() {
var add_link_to_doc = null;
var add_link_to_doc__1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

var c__20748__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20748__auto__,parent){
return (function (){
var f__20749__auto__ = (function (){var switch__20692__auto__ = ((function (c__20748__auto__,parent){
return (function (state_25433){
var state_val_25434 = (state_25433[(1)]);
if((state_val_25434 === (2))){
var inst_25430 = (state_25433[(2)]);
var inst_25431 = parent.removeChild(orig_link);
var state_25433__$1 = (function (){var statearr_25435 = state_25433;
(statearr_25435[(7)] = inst_25430);

return statearr_25435;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25433__$1,inst_25431);
} else {
if((state_val_25434 === (1))){
var inst_25428 = cljs.core.async.timeout.call(null,(200));
var state_25433__$1 = state_25433;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25433__$1,(2),inst_25428);
} else {
return null;
}
}
});})(c__20748__auto__,parent))
;
return ((function (switch__20692__auto__,c__20748__auto__,parent){
return (function() {
var state_machine__20693__auto__ = null;
var state_machine__20693__auto____0 = (function (){
var statearr_25439 = [null,null,null,null,null,null,null,null];
(statearr_25439[(0)] = state_machine__20693__auto__);

(statearr_25439[(1)] = (1));

return statearr_25439;
});
var state_machine__20693__auto____1 = (function (state_25433){
while(true){
var ret_value__20694__auto__ = (function (){try{while(true){
var result__20695__auto__ = switch__20692__auto__.call(null,state_25433);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20695__auto__;
}
break;
}
}catch (e25440){if((e25440 instanceof Object)){
var ex__20696__auto__ = e25440;
var statearr_25441_25443 = state_25433;
(statearr_25441_25443[(5)] = ex__20696__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25433);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25440;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25444 = state_25433;
state_25433 = G__25444;
continue;
} else {
return ret_value__20694__auto__;
}
break;
}
});
state_machine__20693__auto__ = function(state_25433){
switch(arguments.length){
case 0:
return state_machine__20693__auto____0.call(this);
case 1:
return state_machine__20693__auto____1.call(this,state_25433);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20693__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20693__auto____0;
state_machine__20693__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20693__auto____1;
return state_machine__20693__auto__;
})()
;})(switch__20692__auto__,c__20748__auto__,parent))
})();
var state__20750__auto__ = (function (){var statearr_25442 = f__20749__auto__.call(null);
(statearr_25442[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20748__auto__);

return statearr_25442;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20750__auto__);
});})(c__20748__auto__,parent))
);

return c__20748__auto__;
});
add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return add_link_to_doc__1.call(this,orig_link);
case 2:
return add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = add_link_to_doc__1;
add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = add_link_to_doc__2;
return add_link_to_doc;
})()
;
figwheel.client.file_reloading.reload_css_file = (function reload_css_file(p__25445){
var map__25447 = p__25445;
var map__25447__$1 = ((cljs.core.seq_QMARK_.call(null,map__25447))?cljs.core.apply.call(null,cljs.core.hash_map,map__25447):map__25447);
var f_data = map__25447__$1;
var request_url = cljs.core.get.call(null,map__25447__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__25447__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4124__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4124__auto__)){
var link = temp__4124__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,request_url));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,request_url));
}
});
figwheel.client.file_reloading.reload_css_files = (function reload_css_files(p__25448,files_msg){
var map__25470 = p__25448;
var map__25470__$1 = ((cljs.core.seq_QMARK_.call(null,map__25470))?cljs.core.apply.call(null,cljs.core.hash_map,map__25470):map__25470);
var opts = map__25470__$1;
var on_cssload = cljs.core.get.call(null,map__25470__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var seq__25471_25491 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__25472_25492 = null;
var count__25473_25493 = (0);
var i__25474_25494 = (0);
while(true){
if((i__25474_25494 < count__25473_25493)){
var f_25495 = cljs.core._nth.call(null,chunk__25472_25492,i__25474_25494);
figwheel.client.file_reloading.reload_css_file.call(null,f_25495);

var G__25496 = seq__25471_25491;
var G__25497 = chunk__25472_25492;
var G__25498 = count__25473_25493;
var G__25499 = (i__25474_25494 + (1));
seq__25471_25491 = G__25496;
chunk__25472_25492 = G__25497;
count__25473_25493 = G__25498;
i__25474_25494 = G__25499;
continue;
} else {
var temp__4126__auto___25500 = cljs.core.seq.call(null,seq__25471_25491);
if(temp__4126__auto___25500){
var seq__25471_25501__$1 = temp__4126__auto___25500;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25471_25501__$1)){
var c__12416__auto___25502 = cljs.core.chunk_first.call(null,seq__25471_25501__$1);
var G__25503 = cljs.core.chunk_rest.call(null,seq__25471_25501__$1);
var G__25504 = c__12416__auto___25502;
var G__25505 = cljs.core.count.call(null,c__12416__auto___25502);
var G__25506 = (0);
seq__25471_25491 = G__25503;
chunk__25472_25492 = G__25504;
count__25473_25493 = G__25505;
i__25474_25494 = G__25506;
continue;
} else {
var f_25507 = cljs.core.first.call(null,seq__25471_25501__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_25507);

var G__25508 = cljs.core.next.call(null,seq__25471_25501__$1);
var G__25509 = null;
var G__25510 = (0);
var G__25511 = (0);
seq__25471_25491 = G__25508;
chunk__25472_25492 = G__25509;
count__25473_25493 = G__25510;
i__25474_25494 = G__25511;
continue;
}
} else {
}
}
break;
}

var c__20748__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20748__auto__,map__25470,map__25470__$1,opts,on_cssload){
return (function (){
var f__20749__auto__ = (function (){var switch__20692__auto__ = ((function (c__20748__auto__,map__25470,map__25470__$1,opts,on_cssload){
return (function (state_25481){
var state_val_25482 = (state_25481[(1)]);
if((state_val_25482 === (2))){
var inst_25477 = (state_25481[(2)]);
var inst_25478 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_25479 = on_cssload.call(null,inst_25478);
var state_25481__$1 = (function (){var statearr_25483 = state_25481;
(statearr_25483[(7)] = inst_25477);

return statearr_25483;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25481__$1,inst_25479);
} else {
if((state_val_25482 === (1))){
var inst_25475 = cljs.core.async.timeout.call(null,(100));
var state_25481__$1 = state_25481;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25481__$1,(2),inst_25475);
} else {
return null;
}
}
});})(c__20748__auto__,map__25470,map__25470__$1,opts,on_cssload))
;
return ((function (switch__20692__auto__,c__20748__auto__,map__25470,map__25470__$1,opts,on_cssload){
return (function() {
var state_machine__20693__auto__ = null;
var state_machine__20693__auto____0 = (function (){
var statearr_25487 = [null,null,null,null,null,null,null,null];
(statearr_25487[(0)] = state_machine__20693__auto__);

(statearr_25487[(1)] = (1));

return statearr_25487;
});
var state_machine__20693__auto____1 = (function (state_25481){
while(true){
var ret_value__20694__auto__ = (function (){try{while(true){
var result__20695__auto__ = switch__20692__auto__.call(null,state_25481);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20695__auto__;
}
break;
}
}catch (e25488){if((e25488 instanceof Object)){
var ex__20696__auto__ = e25488;
var statearr_25489_25512 = state_25481;
(statearr_25489_25512[(5)] = ex__20696__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25481);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25488;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25513 = state_25481;
state_25481 = G__25513;
continue;
} else {
return ret_value__20694__auto__;
}
break;
}
});
state_machine__20693__auto__ = function(state_25481){
switch(arguments.length){
case 0:
return state_machine__20693__auto____0.call(this);
case 1:
return state_machine__20693__auto____1.call(this,state_25481);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20693__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20693__auto____0;
state_machine__20693__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20693__auto____1;
return state_machine__20693__auto__;
})()
;})(switch__20692__auto__,c__20748__auto__,map__25470,map__25470__$1,opts,on_cssload))
})();
var state__20750__auto__ = (function (){var statearr_25490 = f__20749__auto__.call(null);
(statearr_25490[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20748__auto__);

return statearr_25490;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20750__auto__);
});})(c__20748__auto__,map__25470,map__25470__$1,opts,on_cssload))
);

return c__20748__auto__;
});
figwheel.client.file_reloading.figwheel_closure_import_script = (function figwheel_closure_import_script(src){
if(cljs.core.truth_(goog.inHtmlDocument_())){
goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,src));

return true;
} else {
return false;
}
});
figwheel.client.file_reloading.patch_goog_base = (function patch_goog_base(){
goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.figwheel_closure_import_script;
});

//# sourceMappingURL=file_reloading.js.map