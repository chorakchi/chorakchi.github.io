'use strict';


function ReSizeHeightBlock(){
        var height_block = $(window).height()-1;
    $(".fullblock").css({ 'height': height_block });
    }
            var currentIndex = 0,
  items = $('.slide-full'),
  itemAmt = items.length;

function cycleItems() {
  var item = $('.slide-full').eq(currentIndex);
  $(".slide-full").css({ 'opacity': 0 });
  $(".slide-full").eq(currentIndex).css({ 'opacity': 1 });
}

function SlideFullBlock(){
var autoSlide = setInterval(function() {
  currentIndex += 1;
  if (currentIndex > itemAmt - 1) {
    currentIndex = 0;
  }
  cycleItems();
}, 5000);
    }

function scrollingHead(){
        $(window).scroll(function() {
  if ( $(window).scrollTop() >= 300 ) { 
      
    $(".header-index").css({ 
        'background': 'rgba(255,255,255,0.8)',
        'height': '60'
    } ); 
    $('.logo-header').css({
        'color':'rgba(0,0,0,0.5)',
        'font-size': '200px'
    });
    $('.btn-login-index').css({
        'color':'rgb(0,0,0)',
        'margin-top': '13px',
        'border-color':'rgb(250,105,96)'
    });
    $('.block-btn').css({
        'color':'rgb(0,0,0)',
        'margin-top': '10px'
    });
    $('.btn-menu-index').css({
        'color':'rgb(0,0,0)',
        'margin-top': '6px'
    });
  }
  if ( $(window).scrollTop() <= 30 ) { 
      
    $(".header-index").css({
        'background': 'rgba(255,255,255,0.2)',
        'height': '100'
    } ); 
    $('.logo-header').css({
        'color':'white',
        'font-size': '250px'
    });
    $('.btn-login-index').css({
        'color':'rgb(255,255,255)',
        'margin-top': '35px',
        'border-color':'rgb(255,255,255)'
    });
    $('.block-btn').css({
        'color':'rgb(255,255,255)',
        'margin-top': '35px'
    });
    $('.btn-menu-index').css({
        'color':'rgb(255,255,255)',
        'margin-top': '25px'
    });    
  }
  if ( $(window).scrollTop() + $(window).height() == $(document).height() ) { 
      $(".header-index").css({
        'height': '0'
    } ); 

  }
  if ( $(window).scrollTop() + $(window).height() != $(document).height() && $(window).scrollTop() >= 300 ){
      $(".header-index").css({
        'height': '60'
    } ); 

  }
});
}
function fonclick(){
    $(".btn-down-force").click(function() { $('html,body').animate({scrollTop: $("body").select().offset().top + $(window).height()}, 1000);});
}
function fillsize(){
}

function accordmenu(){
var accord = $(".title-menu-main"),
	accordcheid = $(".sidebar-submenu"),
  tempacord = 0,
  iconarea = $(".menu-cast"),
  clapsside = $(".collapse-menu"),
  sidebar = $(".al-sidebar");

accord.click(function () {
  
	    if ($(this).next().hasClass("sidebar-submenu-unaccording") === false) {
	        tempacord = 1;
	    } else {
	        tempacord = 0;
	    }
	    accordcheid.addClass("sidebar-submenu-unaccording");
	    accordcheid.css("height", 0);
		iconarea.addClass("rotat-area-1");
		iconarea.removeClass("rotat-area-2");
	    if ($(this).next().hasClass("sidebar-submenu-unaccording")) {

	        if (tempacord == 1) {

	            $(this).next().addClass("sidebar-submenu-unaccording");
	            $(this).next().css("height", 0);
	            $(this).children(".menu-cast").addClass("rotat-area-1");
	            $(this).children(".menu-cast").removeClass("rotat-area-2");

	        } else {

	            $(this).next().removeClass("sidebar-submenu-unaccording");
	            var hightAcording = $(this).next().children().height();
	            $(this).next().animate({'height': hightAcording }, 100);
	            $(this).children(".menu-cast").addClass("rotat-area-2");
	            $(this).children(".menu-cast").removeClass("rotat-area-1");

				sidebar.addClass("al-sidebar-uncollapsing");
				sidebar.removeClass("al-sidebar-collapsing");

				$('.al-main').addClass("al-main-uncollapsing");
				$('.al-main').removeClass("al-main-collapsing");
	        }
	    }
	});
	    /////////////////////////

	clapsside.click(function () {

		if(sidebar.hasClass("al-sidebar-collapsing")){

			sidebar.addClass("al-sidebar-uncollapsing");
			sidebar.removeClass("al-sidebar-collapsing");

			$('.al-main').addClass("al-main-uncollapsing");
			$('.al-main').removeClass("al-main-collapsing");
		}else{
			sidebar.addClass("al-sidebar-collapsing");
			sidebar.removeClass("al-sidebar-uncollapsing");

			$('.al-main').addClass("al-main-collapsing");
			$('.al-main').removeClass("al-main-uncollapsing");

			accordcheid.addClass("sidebar-submenu-unaccording");
	    	accordcheid.css("height", 0);
			iconarea.addClass("rotat-area-1");
			iconarea.removeClass("rotat-area-2");
		}
    });
}

 module.exports = {
 initq : function() {
     setTimeout(function () {
                            ReSizeHeightBlock();
                            SlideFullBlock();
                            scrollingHead();
                            fonclick();
                            fillsize();
                            accordmenu();
                        }, 1);
}
};

    $(window).resize(function () {
		    ReSizeHeightBlock();
		});      





