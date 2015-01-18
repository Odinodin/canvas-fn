// Compiled by ClojureScript 0.0-2665 {}
if(!goog.isProvided_('figwheel.client')) {
goog.provide('figwheel.client');
}
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('figwheel.client.heads_up');
figwheel.client.get_essential_messages = (function get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__24380){
var map__24382 = p__24380;
var map__24382__$1 = ((cljs.core.seq_QMARK_.call(null,map__24382))?cljs.core.apply.call(null,cljs.core.hash_map,map__24382):map__24382);
var class$ = cljs.core.get.call(null,map__24382__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__24382__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function reload_file_QMARK__STAR_(msg_name,opts){
var or__11629__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__11629__auto__)){
return or__11629__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function reload_file_state_QMARK_(msg_names,opts){
var and__11617__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__11617__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__11617__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__20748__auto___24503 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20748__auto___24503,ch){
return (function (){
var f__20749__auto__ = (function (){var switch__20692__auto__ = ((function (c__20748__auto___24503,ch){
return (function (state_24477){
var state_val_24478 = (state_24477[(1)]);
if((state_val_24478 === (7))){
var inst_24473 = (state_24477[(2)]);
var state_24477__$1 = state_24477;
var statearr_24479_24504 = state_24477__$1;
(statearr_24479_24504[(2)] = inst_24473);

(statearr_24479_24504[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24478 === (1))){
var state_24477__$1 = state_24477;
var statearr_24480_24505 = state_24477__$1;
(statearr_24480_24505[(2)] = null);

(statearr_24480_24505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24478 === (4))){
var inst_24445 = (state_24477[(7)]);
var inst_24445__$1 = (state_24477[(2)]);
var state_24477__$1 = (function (){var statearr_24481 = state_24477;
(statearr_24481[(7)] = inst_24445__$1);

return statearr_24481;
})();
if(cljs.core.truth_(inst_24445__$1)){
var statearr_24482_24506 = state_24477__$1;
(statearr_24482_24506[(1)] = (5));

} else {
var statearr_24483_24507 = state_24477__$1;
(statearr_24483_24507[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24478 === (13))){
var state_24477__$1 = state_24477;
var statearr_24484_24508 = state_24477__$1;
(statearr_24484_24508[(2)] = null);

(statearr_24484_24508[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24478 === (6))){
var state_24477__$1 = state_24477;
var statearr_24485_24509 = state_24477__$1;
(statearr_24485_24509[(2)] = null);

(statearr_24485_24509[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24478 === (3))){
var inst_24475 = (state_24477[(2)]);
var state_24477__$1 = state_24477;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24477__$1,inst_24475);
} else {
if((state_val_24478 === (12))){
var inst_24452 = (state_24477[(8)]);
var inst_24461 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_24452);
var inst_24462 = cljs.core.first.call(null,inst_24461);
var inst_24463 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_24462);
var inst_24464 = console.warn("Figwheel: Not loading code with warnings - ",inst_24463);
var state_24477__$1 = state_24477;
var statearr_24486_24510 = state_24477__$1;
(statearr_24486_24510[(2)] = inst_24464);

(statearr_24486_24510[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24478 === (2))){
var state_24477__$1 = state_24477;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24477__$1,(4),ch);
} else {
if((state_val_24478 === (11))){
var inst_24457 = (state_24477[(2)]);
var state_24477__$1 = state_24477;
var statearr_24487_24511 = state_24477__$1;
(statearr_24487_24511[(2)] = inst_24457);

(statearr_24487_24511[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24478 === (9))){
var inst_24451 = (state_24477[(9)]);
var inst_24459 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_24451,opts);
var state_24477__$1 = state_24477;
if(inst_24459){
var statearr_24488_24512 = state_24477__$1;
(statearr_24488_24512[(1)] = (12));

} else {
var statearr_24489_24513 = state_24477__$1;
(statearr_24489_24513[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24478 === (5))){
var inst_24445 = (state_24477[(7)]);
var inst_24451 = (state_24477[(9)]);
var inst_24447 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_24448 = (new cljs.core.PersistentArrayMap(null,2,inst_24447,null));
var inst_24449 = (new cljs.core.PersistentHashSet(null,inst_24448,null));
var inst_24450 = figwheel.client.focus_msgs.call(null,inst_24449,inst_24445);
var inst_24451__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_24450);
var inst_24452 = cljs.core.first.call(null,inst_24450);
var inst_24453 = figwheel.client.reload_file_state_QMARK_.call(null,inst_24451__$1,opts);
var state_24477__$1 = (function (){var statearr_24490 = state_24477;
(statearr_24490[(8)] = inst_24452);

(statearr_24490[(9)] = inst_24451__$1);

return statearr_24490;
})();
if(cljs.core.truth_(inst_24453)){
var statearr_24491_24514 = state_24477__$1;
(statearr_24491_24514[(1)] = (8));

} else {
var statearr_24492_24515 = state_24477__$1;
(statearr_24492_24515[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24478 === (14))){
var inst_24467 = (state_24477[(2)]);
var state_24477__$1 = state_24477;
var statearr_24493_24516 = state_24477__$1;
(statearr_24493_24516[(2)] = inst_24467);

(statearr_24493_24516[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24478 === (10))){
var inst_24469 = (state_24477[(2)]);
var state_24477__$1 = (function (){var statearr_24494 = state_24477;
(statearr_24494[(10)] = inst_24469);

return statearr_24494;
})();
var statearr_24495_24517 = state_24477__$1;
(statearr_24495_24517[(2)] = null);

(statearr_24495_24517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24478 === (8))){
var inst_24452 = (state_24477[(8)]);
var inst_24455 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_24452);
var state_24477__$1 = state_24477;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24477__$1,(11),inst_24455);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20748__auto___24503,ch))
;
return ((function (switch__20692__auto__,c__20748__auto___24503,ch){
return (function() {
var state_machine__20693__auto__ = null;
var state_machine__20693__auto____0 = (function (){
var statearr_24499 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24499[(0)] = state_machine__20693__auto__);

(statearr_24499[(1)] = (1));

return statearr_24499;
});
var state_machine__20693__auto____1 = (function (state_24477){
while(true){
var ret_value__20694__auto__ = (function (){try{while(true){
var result__20695__auto__ = switch__20692__auto__.call(null,state_24477);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20695__auto__;
}
break;
}
}catch (e24500){if((e24500 instanceof Object)){
var ex__20696__auto__ = e24500;
var statearr_24501_24518 = state_24477;
(statearr_24501_24518[(5)] = ex__20696__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24477);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24500;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24519 = state_24477;
state_24477 = G__24519;
continue;
} else {
return ret_value__20694__auto__;
}
break;
}
});
state_machine__20693__auto__ = function(state_24477){
switch(arguments.length){
case 0:
return state_machine__20693__auto____0.call(this);
case 1:
return state_machine__20693__auto____1.call(this,state_24477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20693__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20693__auto____0;
state_machine__20693__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20693__auto____1;
return state_machine__20693__auto__;
})()
;})(switch__20692__auto__,c__20748__auto___24503,ch))
})();
var state__20750__auto__ = (function (){var statearr_24502 = f__20749__auto__.call(null);
(statearr_24502[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20748__auto___24503);

return statearr_24502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20750__auto__);
});})(c__20748__auto___24503,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.css_reloader_plugin = (function css_reloader_plugin(opts){
return (function (p__24523){
var vec__24524 = p__24523;
var map__24525 = cljs.core.nth.call(null,vec__24524,(0),null);
var map__24525__$1 = ((cljs.core.seq_QMARK_.call(null,map__24525))?cljs.core.apply.call(null,cljs.core.hash_map,map__24525):map__24525);
var msg = map__24525__$1;
var msg_name = cljs.core.get.call(null,map__24525__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24524,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function compile_fail_warning_plugin(p__24526){
var map__24534 = p__24526;
var map__24534__$1 = ((cljs.core.seq_QMARK_.call(null,map__24534))?cljs.core.apply.call(null,cljs.core.hash_map,map__24534):map__24534);
var on_compile_fail = cljs.core.get.call(null,map__24534__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__24534__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__24534,map__24534__$1,on_compile_fail,on_compile_warning){
return (function (p__24535){
var vec__24536 = p__24535;
var map__24537 = cljs.core.nth.call(null,vec__24536,(0),null);
var map__24537__$1 = ((cljs.core.seq_QMARK_.call(null,map__24537))?cljs.core.apply.call(null,cljs.core.hash_map,map__24537):map__24537);
var msg = map__24537__$1;
var msg_name = cljs.core.get.call(null,map__24537__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24536,(1));
var pred__24538 = cljs.core._EQ_;
var expr__24539 = msg_name;
if(cljs.core.truth_(pred__24538.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__24539))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__24538.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__24539))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__24534,map__24534__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__20748__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20748__auto__,msg_hist,msg_names,msg){
return (function (){
var f__20749__auto__ = (function (){var switch__20692__auto__ = ((function (c__20748__auto__,msg_hist,msg_names,msg){
return (function (state_24716){
var state_val_24717 = (state_24716[(1)]);
if((state_val_24717 === (7))){
var inst_24665 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_24716__$1 = state_24716;
if(inst_24665){
var statearr_24718_24755 = state_24716__$1;
(statearr_24718_24755[(1)] = (11));

} else {
var statearr_24719_24756 = state_24716__$1;
(statearr_24719_24756[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24717 === (20))){
var inst_24706 = (state_24716[(2)]);
var state_24716__$1 = state_24716;
var statearr_24720_24757 = state_24716__$1;
(statearr_24720_24757[(2)] = inst_24706);

(statearr_24720_24757[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24717 === (27))){
var inst_24697 = figwheel.client.heads_up.flash_loaded.call(null);
var state_24716__$1 = state_24716;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24716__$1,(30),inst_24697);
} else {
if((state_val_24717 === (1))){
var inst_24648 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_24716__$1 = state_24716;
if(cljs.core.truth_(inst_24648)){
var statearr_24721_24758 = state_24716__$1;
(statearr_24721_24758[(1)] = (2));

} else {
var statearr_24722_24759 = state_24716__$1;
(statearr_24722_24759[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24717 === (24))){
var inst_24695 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_24716__$1 = state_24716;
if(inst_24695){
var statearr_24723_24760 = state_24716__$1;
(statearr_24723_24760[(1)] = (27));

} else {
var statearr_24724_24761 = state_24716__$1;
(statearr_24724_24761[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24717 === (4))){
var inst_24714 = (state_24716[(2)]);
var state_24716__$1 = state_24716;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24716__$1,inst_24714);
} else {
if((state_val_24717 === (15))){
var inst_24675 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24676 = figwheel.client.heads_up.append_message.call(null,inst_24675);
var state_24716__$1 = state_24716;
var statearr_24725_24762 = state_24716__$1;
(statearr_24725_24762[(2)] = inst_24676);

(statearr_24725_24762[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24717 === (21))){
var inst_24682 = (state_24716[(2)]);
var inst_24683 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24684 = figwheel.client.heads_up.display_warning.call(null,inst_24683);
var state_24716__$1 = (function (){var statearr_24726 = state_24716;
(statearr_24726[(7)] = inst_24682);

return statearr_24726;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24716__$1,(22),inst_24684);
} else {
if((state_val_24717 === (13))){
var inst_24710 = (state_24716[(2)]);
var state_24716__$1 = state_24716;
var statearr_24727_24763 = state_24716__$1;
(statearr_24727_24763[(2)] = inst_24710);

(statearr_24727_24763[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24717 === (22))){
var inst_24686 = (state_24716[(2)]);
var state_24716__$1 = state_24716;
var statearr_24728_24764 = state_24716__$1;
(statearr_24728_24764[(2)] = inst_24686);

(statearr_24728_24764[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24717 === (29))){
var inst_24702 = (state_24716[(2)]);
var state_24716__$1 = state_24716;
var statearr_24729_24765 = state_24716__$1;
(statearr_24729_24765[(2)] = inst_24702);

(statearr_24729_24765[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24717 === (6))){
var inst_24656 = figwheel.client.heads_up.clear.call(null);
var state_24716__$1 = state_24716;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24716__$1,(9),inst_24656);
} else {
if((state_val_24717 === (28))){
var state_24716__$1 = state_24716;
var statearr_24730_24766 = state_24716__$1;
(statearr_24730_24766[(2)] = null);

(statearr_24730_24766[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24717 === (25))){
var inst_24704 = (state_24716[(2)]);
var state_24716__$1 = state_24716;
var statearr_24731_24767 = state_24716__$1;
(statearr_24731_24767[(2)] = inst_24704);

(statearr_24731_24767[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24717 === (17))){
var inst_24708 = (state_24716[(2)]);
var state_24716__$1 = state_24716;
var statearr_24732_24768 = state_24716__$1;
(statearr_24732_24768[(2)] = inst_24708);

(statearr_24732_24768[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24717 === (3))){
var inst_24654 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_24716__$1 = state_24716;
if(inst_24654){
var statearr_24733_24769 = state_24716__$1;
(statearr_24733_24769[(1)] = (6));

} else {
var statearr_24734_24770 = state_24716__$1;
(statearr_24734_24770[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24717 === (12))){
var inst_24673 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_24716__$1 = state_24716;
if(inst_24673){
var statearr_24735_24771 = state_24716__$1;
(statearr_24735_24771[(1)] = (15));

} else {
var statearr_24736_24772 = state_24716__$1;
(statearr_24736_24772[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24717 === (2))){
var inst_24650 = figwheel.client.heads_up.flash_loaded.call(null);
var state_24716__$1 = state_24716;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24716__$1,(5),inst_24650);
} else {
if((state_val_24717 === (23))){
var inst_24690 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24691 = figwheel.client.heads_up.display_warning.call(null,inst_24690);
var state_24716__$1 = state_24716;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24716__$1,(26),inst_24691);
} else {
if((state_val_24717 === (19))){
var inst_24688 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_24716__$1 = state_24716;
if(inst_24688){
var statearr_24737_24773 = state_24716__$1;
(statearr_24737_24773[(1)] = (23));

} else {
var statearr_24738_24774 = state_24716__$1;
(statearr_24738_24774[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24717 === (11))){
var inst_24667 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24668 = figwheel.client.format_messages.call(null,inst_24667);
var inst_24669 = figwheel.client.heads_up.display_error.call(null,inst_24668);
var state_24716__$1 = state_24716;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24716__$1,(14),inst_24669);
} else {
if((state_val_24717 === (9))){
var inst_24658 = (state_24716[(2)]);
var inst_24659 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24660 = figwheel.client.format_messages.call(null,inst_24659);
var inst_24661 = figwheel.client.heads_up.display_error.call(null,inst_24660);
var state_24716__$1 = (function (){var statearr_24739 = state_24716;
(statearr_24739[(8)] = inst_24658);

return statearr_24739;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24716__$1,(10),inst_24661);
} else {
if((state_val_24717 === (5))){
var inst_24652 = (state_24716[(2)]);
var state_24716__$1 = state_24716;
var statearr_24740_24775 = state_24716__$1;
(statearr_24740_24775[(2)] = inst_24652);

(statearr_24740_24775[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24717 === (14))){
var inst_24671 = (state_24716[(2)]);
var state_24716__$1 = state_24716;
var statearr_24741_24776 = state_24716__$1;
(statearr_24741_24776[(2)] = inst_24671);

(statearr_24741_24776[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24717 === (26))){
var inst_24693 = (state_24716[(2)]);
var state_24716__$1 = state_24716;
var statearr_24742_24777 = state_24716__$1;
(statearr_24742_24777[(2)] = inst_24693);

(statearr_24742_24777[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24717 === (16))){
var inst_24678 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_24716__$1 = state_24716;
if(inst_24678){
var statearr_24743_24778 = state_24716__$1;
(statearr_24743_24778[(1)] = (18));

} else {
var statearr_24744_24779 = state_24716__$1;
(statearr_24744_24779[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24717 === (30))){
var inst_24699 = (state_24716[(2)]);
var state_24716__$1 = state_24716;
var statearr_24745_24780 = state_24716__$1;
(statearr_24745_24780[(2)] = inst_24699);

(statearr_24745_24780[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24717 === (10))){
var inst_24663 = (state_24716[(2)]);
var state_24716__$1 = state_24716;
var statearr_24746_24781 = state_24716__$1;
(statearr_24746_24781[(2)] = inst_24663);

(statearr_24746_24781[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24717 === (18))){
var inst_24680 = figwheel.client.heads_up.clear.call(null);
var state_24716__$1 = state_24716;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24716__$1,(21),inst_24680);
} else {
if((state_val_24717 === (8))){
var inst_24712 = (state_24716[(2)]);
var state_24716__$1 = state_24716;
var statearr_24747_24782 = state_24716__$1;
(statearr_24747_24782[(2)] = inst_24712);

(statearr_24747_24782[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20748__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__20692__auto__,c__20748__auto__,msg_hist,msg_names,msg){
return (function() {
var state_machine__20693__auto__ = null;
var state_machine__20693__auto____0 = (function (){
var statearr_24751 = [null,null,null,null,null,null,null,null,null];
(statearr_24751[(0)] = state_machine__20693__auto__);

(statearr_24751[(1)] = (1));

return statearr_24751;
});
var state_machine__20693__auto____1 = (function (state_24716){
while(true){
var ret_value__20694__auto__ = (function (){try{while(true){
var result__20695__auto__ = switch__20692__auto__.call(null,state_24716);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20695__auto__;
}
break;
}
}catch (e24752){if((e24752 instanceof Object)){
var ex__20696__auto__ = e24752;
var statearr_24753_24783 = state_24716;
(statearr_24753_24783[(5)] = ex__20696__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24716);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24752;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24784 = state_24716;
state_24716 = G__24784;
continue;
} else {
return ret_value__20694__auto__;
}
break;
}
});
state_machine__20693__auto__ = function(state_24716){
switch(arguments.length){
case 0:
return state_machine__20693__auto____0.call(this);
case 1:
return state_machine__20693__auto____1.call(this,state_24716);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20693__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20693__auto____0;
state_machine__20693__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20693__auto____1;
return state_machine__20693__auto__;
})()
;})(switch__20692__auto__,c__20748__auto__,msg_hist,msg_names,msg))
})();
var state__20750__auto__ = (function (){var statearr_24754 = f__20749__auto__.call(null);
(statearr_24754[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20748__auto__);

return statearr_24754;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20750__auto__);
});})(c__20748__auto__,msg_hist,msg_names,msg))
);

return c__20748__auto__;
});
figwheel.client.heads_up_plugin = (function heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__20748__auto___24847 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20748__auto___24847,ch){
return (function (){
var f__20749__auto__ = (function (){var switch__20692__auto__ = ((function (c__20748__auto___24847,ch){
return (function (state_24830){
var state_val_24831 = (state_24830[(1)]);
if((state_val_24831 === (8))){
var inst_24822 = (state_24830[(2)]);
var state_24830__$1 = (function (){var statearr_24832 = state_24830;
(statearr_24832[(7)] = inst_24822);

return statearr_24832;
})();
var statearr_24833_24848 = state_24830__$1;
(statearr_24833_24848[(2)] = null);

(statearr_24833_24848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24831 === (7))){
var inst_24826 = (state_24830[(2)]);
var state_24830__$1 = state_24830;
var statearr_24834_24849 = state_24830__$1;
(statearr_24834_24849[(2)] = inst_24826);

(statearr_24834_24849[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24831 === (6))){
var state_24830__$1 = state_24830;
var statearr_24835_24850 = state_24830__$1;
(statearr_24835_24850[(2)] = null);

(statearr_24835_24850[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24831 === (5))){
var inst_24818 = (state_24830[(8)]);
var inst_24820 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_24818);
var state_24830__$1 = state_24830;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24830__$1,(8),inst_24820);
} else {
if((state_val_24831 === (4))){
var inst_24818 = (state_24830[(8)]);
var inst_24818__$1 = (state_24830[(2)]);
var state_24830__$1 = (function (){var statearr_24836 = state_24830;
(statearr_24836[(8)] = inst_24818__$1);

return statearr_24836;
})();
if(cljs.core.truth_(inst_24818__$1)){
var statearr_24837_24851 = state_24830__$1;
(statearr_24837_24851[(1)] = (5));

} else {
var statearr_24838_24852 = state_24830__$1;
(statearr_24838_24852[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24831 === (3))){
var inst_24828 = (state_24830[(2)]);
var state_24830__$1 = state_24830;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24830__$1,inst_24828);
} else {
if((state_val_24831 === (2))){
var state_24830__$1 = state_24830;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24830__$1,(4),ch);
} else {
if((state_val_24831 === (1))){
var state_24830__$1 = state_24830;
var statearr_24839_24853 = state_24830__$1;
(statearr_24839_24853[(2)] = null);

(statearr_24839_24853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__20748__auto___24847,ch))
;
return ((function (switch__20692__auto__,c__20748__auto___24847,ch){
return (function() {
var state_machine__20693__auto__ = null;
var state_machine__20693__auto____0 = (function (){
var statearr_24843 = [null,null,null,null,null,null,null,null,null];
(statearr_24843[(0)] = state_machine__20693__auto__);

(statearr_24843[(1)] = (1));

return statearr_24843;
});
var state_machine__20693__auto____1 = (function (state_24830){
while(true){
var ret_value__20694__auto__ = (function (){try{while(true){
var result__20695__auto__ = switch__20692__auto__.call(null,state_24830);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20695__auto__;
}
break;
}
}catch (e24844){if((e24844 instanceof Object)){
var ex__20696__auto__ = e24844;
var statearr_24845_24854 = state_24830;
(statearr_24845_24854[(5)] = ex__20696__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24830);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24844;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24855 = state_24830;
state_24830 = G__24855;
continue;
} else {
return ret_value__20694__auto__;
}
break;
}
});
state_machine__20693__auto__ = function(state_24830){
switch(arguments.length){
case 0:
return state_machine__20693__auto____0.call(this);
case 1:
return state_machine__20693__auto____1.call(this,state_24830);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20693__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20693__auto____0;
state_machine__20693__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20693__auto____1;
return state_machine__20693__auto__;
})()
;})(switch__20692__auto__,c__20748__auto___24847,ch))
})();
var state__20750__auto__ = (function (){var statearr_24846 = f__20749__auto__.call(null);
(statearr_24846[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20748__auto___24847);

return statearr_24846;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20750__auto__);
});})(c__20748__auto___24847,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__20748__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20748__auto__){
return (function (){
var f__20749__auto__ = (function (){var switch__20692__auto__ = ((function (c__20748__auto__){
return (function (state_24876){
var state_val_24877 = (state_24876[(1)]);
if((state_val_24877 === (2))){
var inst_24873 = (state_24876[(2)]);
var inst_24874 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_24876__$1 = (function (){var statearr_24878 = state_24876;
(statearr_24878[(7)] = inst_24873);

return statearr_24878;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24876__$1,inst_24874);
} else {
if((state_val_24877 === (1))){
var inst_24871 = cljs.core.async.timeout.call(null,(3000));
var state_24876__$1 = state_24876;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24876__$1,(2),inst_24871);
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
var statearr_24882 = [null,null,null,null,null,null,null,null];
(statearr_24882[(0)] = state_machine__20693__auto__);

(statearr_24882[(1)] = (1));

return statearr_24882;
});
var state_machine__20693__auto____1 = (function (state_24876){
while(true){
var ret_value__20694__auto__ = (function (){try{while(true){
var result__20695__auto__ = switch__20692__auto__.call(null,state_24876);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20695__auto__;
}
break;
}
}catch (e24883){if((e24883 instanceof Object)){
var ex__20696__auto__ = e24883;
var statearr_24884_24886 = state_24876;
(statearr_24884_24886[(5)] = ex__20696__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24876);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24883;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24887 = state_24876;
state_24876 = G__24887;
continue;
} else {
return ret_value__20694__auto__;
}
break;
}
});
state_machine__20693__auto__ = function(state_24876){
switch(arguments.length){
case 0:
return state_machine__20693__auto____0.call(this);
case 1:
return state_machine__20693__auto____1.call(this,state_24876);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20693__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20693__auto____0;
state_machine__20693__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20693__auto____1;
return state_machine__20693__auto__;
})()
;})(switch__20692__auto__,c__20748__auto__))
})();
var state__20750__auto__ = (function (){var statearr_24885 = f__20749__auto__.call(null);
(statearr_24885[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20748__auto__);

return statearr_24885;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20750__auto__);
});})(c__20748__auto__))
);

return c__20748__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){
if(cljs.core.truth_(("CustomEvent" in window))){
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj24891 = {"detail":url};
return obj24891;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__24892){
var map__24898 = p__24892;
var map__24898__$1 = ((cljs.core.seq_QMARK_.call(null,map__24898))?cljs.core.apply.call(null,cljs.core.hash_map,map__24898):map__24898);
var ed = map__24898__$1;
var exception_data = cljs.core.get.call(null,map__24898__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__24898__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
console.debug("Figwheel: Compile Exception");

var seq__24899_24903 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__24900_24904 = null;
var count__24901_24905 = (0);
var i__24902_24906 = (0);
while(true){
if((i__24902_24906 < count__24901_24905)){
var msg_24907 = cljs.core._nth.call(null,chunk__24900_24904,i__24902_24906);
console.log(msg_24907);

var G__24908 = seq__24899_24903;
var G__24909 = chunk__24900_24904;
var G__24910 = count__24901_24905;
var G__24911 = (i__24902_24906 + (1));
seq__24899_24903 = G__24908;
chunk__24900_24904 = G__24909;
count__24901_24905 = G__24910;
i__24902_24906 = G__24911;
continue;
} else {
var temp__4126__auto___24912 = cljs.core.seq.call(null,seq__24899_24903);
if(temp__4126__auto___24912){
var seq__24899_24913__$1 = temp__4126__auto___24912;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24899_24913__$1)){
var c__12416__auto___24914 = cljs.core.chunk_first.call(null,seq__24899_24913__$1);
var G__24915 = cljs.core.chunk_rest.call(null,seq__24899_24913__$1);
var G__24916 = c__12416__auto___24914;
var G__24917 = cljs.core.count.call(null,c__12416__auto___24914);
var G__24918 = (0);
seq__24899_24903 = G__24915;
chunk__24900_24904 = G__24916;
count__24901_24905 = G__24917;
i__24902_24906 = G__24918;
continue;
} else {
var msg_24919 = cljs.core.first.call(null,seq__24899_24913__$1);
console.log(msg_24919);

var G__24920 = cljs.core.next.call(null,seq__24899_24913__$1);
var G__24921 = null;
var G__24922 = (0);
var G__24923 = (0);
seq__24899_24903 = G__24920;
chunk__24900_24904 = G__24921;
count__24901_24905 = G__24922;
i__24902_24906 = G__24923;
continue;
}
} else {
}
}
break;
}

return ed;
});
figwheel.client.default_on_compile_warning = (function default_on_compile_warning(p__24924){
var map__24926 = p__24924;
var map__24926__$1 = ((cljs.core.seq_QMARK_.call(null,map__24926))?cljs.core.apply.call(null,cljs.core.hash_map,map__24926):map__24926);
var w = map__24926__$1;
var message = cljs.core.get.call(null,map__24926__$1,new cljs.core.Keyword(null,"message","message",-406056002));
console.warn("Figwheel: Compile Warning -",message);

return w;
});
figwheel.client.default_before_load = (function default_before_load(files){
console.debug("Figwheel: loading files");

return files;
});
figwheel.client.default_on_cssload = (function default_on_cssload(files){
console.debug("Figwheel: loaded CSS files");

console.log(cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,true,[cljs.core.str("ws://"),cljs.core.str(location.host),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,(100),cljs.core.identity,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options))){
return cljs.core.assoc.call(null,base,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base;
}
});
figwheel.client.add_plugins = (function add_plugins(plugins,system_options){
var seq__24933 = cljs.core.seq.call(null,plugins);
var chunk__24934 = null;
var count__24935 = (0);
var i__24936 = (0);
while(true){
if((i__24936 < count__24935)){
var vec__24937 = cljs.core._nth.call(null,chunk__24934,i__24936);
var k = cljs.core.nth.call(null,vec__24937,(0),null);
var plugin = cljs.core.nth.call(null,vec__24937,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24939 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24933,chunk__24934,count__24935,i__24936,pl_24939,vec__24937,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_24939.call(null,msg_hist);
});})(seq__24933,chunk__24934,count__24935,i__24936,pl_24939,vec__24937,k,plugin))
);
} else {
}

var G__24940 = seq__24933;
var G__24941 = chunk__24934;
var G__24942 = count__24935;
var G__24943 = (i__24936 + (1));
seq__24933 = G__24940;
chunk__24934 = G__24941;
count__24935 = G__24942;
i__24936 = G__24943;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__24933);
if(temp__4126__auto__){
var seq__24933__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24933__$1)){
var c__12416__auto__ = cljs.core.chunk_first.call(null,seq__24933__$1);
var G__24944 = cljs.core.chunk_rest.call(null,seq__24933__$1);
var G__24945 = c__12416__auto__;
var G__24946 = cljs.core.count.call(null,c__12416__auto__);
var G__24947 = (0);
seq__24933 = G__24944;
chunk__24934 = G__24945;
count__24935 = G__24946;
i__24936 = G__24947;
continue;
} else {
var vec__24938 = cljs.core.first.call(null,seq__24933__$1);
var k = cljs.core.nth.call(null,vec__24938,(0),null);
var plugin = cljs.core.nth.call(null,vec__24938,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24948 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24933,chunk__24934,count__24935,i__24936,pl_24948,vec__24938,k,plugin,seq__24933__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_24948.call(null,msg_hist);
});})(seq__24933,chunk__24934,count__24935,i__24936,pl_24948,vec__24938,k,plugin,seq__24933__$1,temp__4126__auto__))
);
} else {
}

var G__24949 = cljs.core.next.call(null,seq__24933__$1);
var G__24950 = null;
var G__24951 = (0);
var G__24952 = (0);
seq__24933 = G__24949;
chunk__24934 = G__24950;
count__24935 = G__24951;
i__24936 = G__24952;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function() {
var start = null;
var start__0 = (function (){
return start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});
var start__1 = (function (opts){
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = (function (){var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
})();
}
});
start = function(opts){
switch(arguments.length){
case 0:
return start__0.call(this);
case 1:
return start__1.call(this,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
start.cljs$core$IFn$_invoke$arity$0 = start__0;
start.cljs$core$IFn$_invoke$arity$1 = start__1;
return start;
})()
;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__24953){
var map__24955 = p__24953;
var map__24955__$1 = ((cljs.core.seq_QMARK_.call(null,map__24955))?cljs.core.apply.call(null,cljs.core.hash_map,map__24955):map__24955);
var opts = map__24955__$1;
return figwheel.client.start.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__24953 = null;
if (arguments.length > 0) {
var G__24956__i = 0, G__24956__a = new Array(arguments.length -  0);
while (G__24956__i < G__24956__a.length) {G__24956__a[G__24956__i] = arguments[G__24956__i + 0]; ++G__24956__i;}
  p__24953 = new cljs.core.IndexedSeq(G__24956__a,0);
} 
return watch_and_reload__delegate.call(this,p__24953);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__24957){
var p__24953 = cljs.core.seq(arglist__24957);
return watch_and_reload__delegate(p__24953);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map