"use strict";nie.define("creatorp",function(){var o={showPop:function(o){nie.config.stats.url.addto("click=pop","\u5f39\u7a97"),$(".Layer").addClass("on");var n=$("."+o);n.show(),$(document.body).css("overflow-y","hidden")},hidePop:function(){$(".pop").hide(),$(".Layer").removeClass("on"),$(document.body).css("overflow-y","auto")},videoFn:function(){$(".Layer,.close,.close2,.btn-close,.reg-pop .btn-back").bind("click",function(){o.hidePop()})},bindFn:function(){$(".icon").click(function(){"javascript:;"===$(this).attr("href")&&o.showPop("commig-pop")}),$(".nav1").attr("href","../index.html"),$(".nav2").attr("href","../index.html"),$(".nav1,.nav2"),$(".nav3").addClass("on"),window.onscroll=function(){o.topFn()},$(".go-top").click(function(){$("html,body").animate({scrollTop:0},500)});var n=new canvasH5f({container:"xlz-btn4",autoPlay:!1,loop:!1});n.src="https://comm.v.easebar.com/nie/h5f/2024/3/oqg1x4383747.h5f";var t=$("#xlz-btn4");$(".xlz-btn4").hover(function(){var o=$(this).offset().left+$(this).width()/2,e=$(this).offset().top+$(this).height()/2;t.css("left",o+"px"),t.css("top",e+"px"),n.gotoAndPlay(0)},function(){})},topFn:function(){var o=document.documentElement.scrollTop;o>document.documentElement.clientHeight/2?$(".go-top").show():$(".go-top").hide()},init:function(){o.videoFn(),o.bindFn(),o.topFn()}};o.init()});