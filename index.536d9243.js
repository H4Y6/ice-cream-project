jQuery(window).scroll(function(){$("section").each(function(t,a){var o=$(a).offset().top-100,e=o+$(a).height(),i=$(window).scrollTop(),c=$(a).attr("id");i>o&&i<e&&($("a.active").removeClass("active"),$('a[href="#'+c+'"]').addClass("active"))})}),$("nav").on("click","a",function(t){// исключаем стандартную реакцию браузера
t.preventDefault();// получем идентификатор блока из атрибута href
var a=$(this).attr("href"),o=$(a).offset().top-90;// анимируем переход к блоку, время: 800 мс
$("body,html").animate({scrollTop:o},800)});//# sourceMappingURL=index.536d9243.js.map

//# sourceMappingURL=index.536d9243.js.map
