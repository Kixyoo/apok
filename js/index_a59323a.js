"use strict";nie.define("index",function(){var a=(nie.require("nie.util.videoV2"),["Afghanistan","Aland Islands","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bangladesh","Bahrain","Bahamas","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Bouvet Island","Brazil","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Central African Republic","Chad","Chile","Christmas Islands","Cocos (keeling) Islands","Colombia","Comoros","Congo (Congo-Kinshasa)","Congo","Cook Islands","Costa Rica","Cote D'Ivoire","Croatia","Cuba","Czech","Cyprus","Dominican Republic","Denmark","Djibouti","Dominica","Ecuador","Egypt","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Faroe Islands","Fiji","Finland","France","MetropolitanFrance","French Guiana","French Polynesia","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Grenada","Guadeloupe","Guam","Guatemala","Guernsey","Guinea-Bissau","Guinea","Guyana","Haiti","Honduras","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Korea (South)","Korea (North)","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macedonia","Malawi","Malaysia","Madagascar","Maldives","Mali","Malta","Marshall Islands","Martinique","Mauritania","Mauritius","Mayotte","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Niue","Norfolk Island","Norway","Oman","Paraguay","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Peru","Philippines","Pitcairn Islands","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Rwanda","Russian Federation","Saint Helena","Saint Kitts-Nevis","Saint Lucia","Saint Vincent and the Grenadines","El Salvador","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Seychelles","Sierra Leone","Singapore","Serbia","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","Spain","Sri Lanka","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Tajikistan","Tanzania","Thailand","Trinidad and Tobago","Timor-Leste","Togo","Tokelau","Tonga","Tunisia","Turkey","Turkmenistan","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Wallis and Futuna","Western Sahara","Yemen","Yugoslavia","Zambia","Zimbabwe","Hong Kong, China","Macau, China","Taiwan, China","China(mainland)"]);a=a.map(function(a,e){var t=a;return a={id:e+1,val:t}});var e=[{image:"https://www.marvelrivals.com/pc/gw/20240301101352//img/slide-bg1_bbee2eb.jpg?image_process=format,png",video:"https://www.youtube.com/embed/MbZidNaL5dA?si=XpQzp3UNBa-De-Vq",title:"Hela - 'Queen of Hel' - Character Reveal"},{image:"https://www.marvelrivals.com/pc/gw/20240301101352//img/slide-bg2_35787c6.jpg?image_process=format,png",video:"https://www.youtube.com/embed/8NUtV1CkyKs?si=ISCGyl5hIVcrbXTQ",title:"TOKYO 2099 - 'TRADITIONAL & FUTURISTIC SHIN-SHIBUYA' - Map Reveal"},{image:"https://www.marvelrivals.com/pc/gw/20240301101352//img/slide-bg3_7af9f86.jpg?image_process=format,png",video:"https://www.youtube.com/embed/RakBPnXNGhc?si=X34PQl-KGFqwgrYu",title:"Loki-King of Yggsgard-  Character Reveal"},{image:"https://www.marvelrivals.com/pc/gw/20240301101352//img/slide-bg4_6069be4.jpg?image_process=format,png",video:"https://www.youtube.com/embed/8nYwiVjhBWQ?si=DE-HJpnSBss-qQit",title:"YGGSGARD - 'WORLD TREE & KINGDOM OF GODS' - Map Reveal"},{image:"https://www.marvelrivals.com/pc/gw/20240301101352//img/slide-bg5_6ec72d3.jpg?image_process=format,png",video:"https://www.youtube.com/embed/RTnsfVGxdjM?si=M5QEqP4u5mdsb2Pw",title:"'Rivals'First Stand' | Official Announcement Trailer"}],t={showPop:function(a){nie.config.stats.url.addto("click=pop","\u5f39\u7a97"),$(".Layer").addClass("on");var e=$("."+a);e.show(),$(document.body).css("overflow-y","hidden")},hidePop:function(){$(".pop").hide(),$(".Layer").removeClass("on"),$(document.body).css("overflow-y","auto")},videoFn:function(){$(".Layer,.close,.close2,.btn-close").bind("click",function(){t.hidePop(),$(".video-box").empty()})},getAreaStr:function(e){var t=a.filter(function(a){return a.id==e});return t[0].val},bindFn:function(){$(".icon").click(function(){"javascript:;"===$(this).attr("href")&&t.showPop("commig-pop")});var a=$("#bgm")[0],e=!0;$("body").click(function(){e&&(e=!1,$(".music").addClass("on"),a.play()),a.paused===!0&&a.play()}),$(".music").click(function(t){t.stopPropagation(),e=!1,$(this).hasClass("on")?($(this).removeClass("on"),a.pause()):($(this).addClass("on"),a.play())}),$(".part-video").click(function(e){e.stopPropagation(),a.pause()});new Swiper(".swp-feature",{autoplay:5e3,autoplayDisableOnInteraction:!1,loop:!0,observer:!0,observeParents:!0,paginationClickable:!0,pagination:".swp-feature-pagination",prevButton:".swp-feature-prev",nextButton:".swp-feature-next"});$(".home .btn2").click(function(){t.showPop("reg-pop")}),$(".check-box").click(function(){$(this).toggleClass("on")});var n=!1;$(".btn-reg").click(function(){var a=$(".sel-header").attr("data-val"),e=$("#email").val();return a?e?ca.fn.validMail(e)?$(".check-box").hasClass("on")?void(n||(n=!0,$.ajax({url:"https://dora.webcgi.163.com/api/413_1148_2024_02_22/appoint",data:{uid:e,extra:t.getAreaStr(a)},dataType:"jsonp",success:function(a){n=!1,a.success===!0||a.status===!0?(t.hidePop(),$(".success-pop .txt").html("You have registered successfully!"),t.showPop("success-pop")):201===a.status?(t.hidePop(),$(".success-pop .txt").html("You have already registrated!"),t.showPop("success-pop")):alert("Network err")},error:function(){n=!1,alert("Network err")}}))):void alert("Please accept the privacy policy first."):void alert("Incorrect email format, please re-enter."):void alert("Please enter your email"):void alert("Please selet your region")});var i=null;window.onscroll=function(){var a=document.documentElement.scrollTop,e=$(".part-feature").offset().top,n=$("html").css("font-size").replace("px",""),o=.67*n;if(a>=e-o&&e-o+1.3*n>=a){var s=a-(e-o);$(".swp-feature-pagination").css("bottom",2.3*n-s+"px"),$(".swp-feature p").css("bottom",2.8*n-s+"px")}else e-o>a?($(".swp-feature-pagination").css("bottom",2.3*n+"px"),$(".swp-feature p").css("bottom",2.8*n+"px")):($(".swp-feature-pagination").css("bottom",1*n+"px"),$(".swp-feature p").css("bottom",1.5*n+"px"));i&&clearTimeout(i),setTimeout(function(){t.navFn()},520)},window.onresize=function(){t.navFn()},$(".header-nav .nav").click(function(){var a=.67*$("html").css("font-size").replace("px",""),e=[0,$(".part-news").offset().top-a],t=$(this).attr("data-id");t&&void 0!==e[t]&&($(this).addClass("on"),$("html,body").animate({scrollTop:e[t]},500))}),$(".header-nav .nav2").on({mouseover:function(){$(".nav2-select").addClass("nav2-select-show")},mouseout:function(){$(".nav2-select").removeClass("nav2-select-show")}}),$(".option").click(function(a){a.stopPropagation();var e=.67*$("html").css("font-size").replace("px",""),t=[$(".part-feature").offset().top-e,$(".part-video").offset().top-e],n=$(this).attr("data-id");$(this).addClass("active-opt").siblings().removeClass("active-opt"),n&&void 0!==t[n]&&$("html,body").animate({scrollTop:t[n]},500)}),"feature"===ca.fn.queryString("part")&&$('.header-nav .nav[data-id="2"]').click(),"news"===ca.fn.queryString("part")&&$('.header-nav .nav[data-id="1"]').click()},navFn:function(){var a=($("#bgm")[0],$(".music"),[0,$(".part-news").offset().top,$(".part-feature").offset().top,$(".part-sjg").offset().top,$(".part-video").offset().top]),e=document.documentElement.scrollTop+document.documentElement.clientHeight/2,t=document.documentElement.scrollTop+document.documentElement.clientHeight/1.2;if($(".header-nav .nav").removeClass("on"),e>a[2]){var n=$(".option")[0];$(".header-nav .nav2").addClass("on"),$(n).addClass("active-opt").siblings().removeClass("active-opt")}else e>a[1]?$(".header-nav .nav3").addClass("on"):$(".header-nav .nav1").addClass("on");if(e<a[2]&&$(".option").removeClass("active-opt"),e>=a[4]){$(".part-video").click();var n=$(".option")[1];$(n).addClass("active-opt").siblings().removeClass("active-opt")}else $("body").click();t>a[1]&&$(".part-news .tit").addClass("ani"),e>a[3]&&$(".part-sjg .text").addClass("ani")},selectFn:function(){function e(e){var t=a;$(".select ul").html(""),t=a.filter(function(a){return-1!=a.val.toLowerCase().indexOf(e)}),t.forEach(function(a){$(".select ul").append('<li data-val="'+a.id+'">'+a.val+"</li>")})}a.forEach(function(a){$(".select ul").append('<li data-val="'+a.id+'">'+a.val+"</li>")}),$(".select").on("click","li",function(){$(".select .sel-header").attr("data-val",$(this).attr("data-val")),$(".select .sel-header").val(t.getAreaStr($(this).attr("data-val"))),$(".select").removeClass("on")}),$(".sel-header").on("input",function(){var a=$(this).val().trim().toLowerCase();e(a),$(".select").addClass("on")}),$(".sel-header").on("focus",function(){e(""),$(".select").addClass("on")}).on("blur",function(){setTimeout(function(){$(".select").removeClass("on")},2e3)})},newsFn:function(){for(var a=$(".newsCms a"),e='<div class="swiper-slide">',t=0;t<a.length;t++){var n=document.createElement("div"),i=a[t].cloneNode(!0);n.appendChild(i);var o=n.innerHTML;e+=o,t===a.length-1?e+="</div>":(2===t||5===t||8===t||11===t)&&(e+='</div><div class="swiper-slide">')}a.length<=0&&(e+="</div>"),$(".swp-news .swiper-wrapper").html(e);new Swiper(".swp-news",{observer:!0,observeParents:!0,paginationClickable:!0,pagination:".swp-news-pagination",prevButton:".swp-news-prev",nextButton:".swp-news-next"})},partVideoFn:function(){for(var a="",t=0;t<e.length;t++)a+='<div class="swiper-slide swp-video-slide"><img src="'+e[t].image+'" data-index="'+t+'" class="slide-img"></div>';$(".swp-video .swiper-wrapper").html(a),$(".part-video .video").attr("src",e[0].video),$(".part-video .title").text(e[0].title);new Swiper(".swp-video",{loop:!0,slidesPerView:4,direction:"vertical",observer:!0,observeParents:!0,slideToClickedSlide:!0,prevButton:".swiper-button-prev",nextButton:".swiper-button-next",onSlideChangeStart:function(a){$(".swp-video-slide").eq(a.activeIndex).addClass("actswp").siblings().removeClass("actswp");var t=$(".swp-video-slide").eq(a.activeIndex).children(),n=1*$(t).attr("data-index");$(".part-video .video").attr("src",e[n].video),$(".part-video .title").text(e[n].title)}})},aniFn:function(){var a=new H5Frames({noRender:!1,container:"slogan",loop:!0,autoPlay:!0});a.src="https://comm.v.easebar.com/nie/h5f/2024/3/n5paro623123.h5f";var e=new canvasH5f({container:"xlz-btn1",autoPlay:!1,loop:!1});e.src="https://nie.v.netease.com/nie/h5f/2024/3/m584jixh7842.h5f";var n=$("#xlz-btn1");$(".home .btn2,.home .btn1").hover(function(){var a=$(this).offset().left+$(this).width()/2,t=$(this).offset().top+$(this).height()/2;n.css("left",a+"px"),n.css("top",t+"px"),e.gotoAndPlay(0)},function(){});var i=new canvasH5f({container:"xlz-btn2",autoPlay:!1,loop:!1});i.src="https://comm.v.easebar.com/nie/h5f/2024/3/jkt4eiol3644.h5f";var o=$("#xlz-btn2");$("body").on("click",".xlzbtn2",function(){var a=$(this).offset().left+$(this).width()/2,e=$(this).offset().top+$(this).height()/2;o.css("left",a+"px"),o.css("top",e+"px"),o.show(),i.gotoAndPlay(0)}),$("body").on("click",".part-news .news-more",function(){var a=$(this).attr("data-href");setTimeout(function(){window.open(a)},400)}),i.addEventListener("ended",function(){o.hide()});var s=new canvasH5f({container:"xlz-btn3",autoPlay:!1,loop:!1});s.src="https://comm.v.easebar.com/nie/h5f/2024/3/6ozscad03648.h5f";var r=$("#xlz-btn3");$("body").on("click",".reg-pop .btn-back",function(){var a=$(this).offset().left+$(this).width()/2,e=$(this).offset().top+$(this).height()/2;r.css("left",a+"px"),r.css("top",e+"px"),r.show(),s.gotoAndPlay(0),setTimeout(function(){t.hidePop()},400)}),s.addEventListener("ended",function(){r.hide()});var l=new canvasH5f({container:"xlz-btn4",autoPlay:!1,loop:!1});l.src="https://comm.v.easebar.com/nie/h5f/2024/3/oqg1x4383747.h5f";var c=$("#xlz-btn4");$(".xlz-btn4").hover(function(){var a=$(this).offset().left+$(this).width()/2,e=$(this).offset().top+$(this).height()/2;c.css("left",a+"px"),c.css("top",e+"px"),l.gotoAndPlay(0)},function(){})},init:function(){t.videoFn(),t.newsFn(),t.partVideoFn(),t.bindFn(),t.selectFn(),t.navFn(),t.aniFn()}};t.init()});