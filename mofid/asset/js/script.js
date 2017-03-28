

function scrollingHead() {
    $(window)
        .scroll(function () {
            if ($(window).scrollTop() >= 300) {

                $(".header-index").css({'background': 'rgba(255,255,255,0.8)', 'height': '60'});
                $('.logo-header').css({'color': 'rgba(0,0,0,0.5)', 'font-size': '200px'});
                $('.btn-login-index').css({'color': 'rgb(0,0,0)', 'margin-top': '13px', 'border-color': 'rgb(250,105,96)'});
                $('.block-btn').css({'color': 'rgb(0,0,0)', 'margin-top': '10px'});
                $('.btn-menu-index').css({'color': 'rgb(0,0,0)', 'margin-top': '6px'});
            }
            if ($(window).scrollTop() <= 30) {

                $(".header-index").css({'background': 'rgba(255,255,255,0.2)', 'height': '100'});
                $('.logo-header').css({'color': 'white', 'font-size': '250px'});
                $('.btn-login-index').css({'color': 'rgb(255,255,255)', 'margin-top': '35px', 'border-color': 'rgb(255,255,255)'});
                $('.block-btn').css({'color': 'rgb(255,255,255)', 'margin-top': '35px'});
                $('.btn-menu-index').css({'color': 'rgb(255,255,255)', 'margin-top': '25px'});
            }
            if ($(window).scrollTop() + $(window).height() == $(document).height()) {
                $(".header-index").css({'height': '0'});
            }
            if ($(window).scrollTop() + $(window).height() != $(document).height() && $(window).scrollTop() >= 300) {
                $(".header-index").css({'height': '60'});

            }
        });
}
function loaderfn(state) {
    if (state) {
        $('.outerclassblockloader').removeClass('deactiveloader');
        $('.outerclassblockloader').addClass('activeloader');
            $('.outerclassblockloader').removeClass('opydeactiveloader');
            $('.outerclassblockloader').addClass('opyactiveloader');
        
            
    } else {
        $('.outerclassblockloader').removeClass('opyactiveloader');
        $('.outerclassblockloader').addClass('opydeactiveloader');
        setTimeout(function () {
            $('.outerclassblockloader').removeClass('activeloader');
            $('.outerclassblockloader').addClass('deactiveloader');
        }, 500);
    }
}
function resizehighchart() {
    for (i = $('.highcharts-container').length; i >= 1; i--) {
        //$('.resizechat').eq(i - 1).css({ 'opacity': '0' });
        $('.highcharts-container').eq(i - 1).parents('.resizechat').css({ 'opacity': '0' });
    }
    
    setTimeout(function () {
        for (i = $('.highcharts-container').length; i >= 1; i--) {
            $('.highcharts-container').eq(i - 1).parents('.resizechat').highcharts().reflow();
            $('.highcharts-container').eq(i - 1).parents('.resizechat').css({ 'opacity': '1' });
        }
    }, 300);
}
function resizehighchartobj(obj) {
    setTimeout(function () {
        $(obj).highcharts().reflow();
    }, 0);
}
function fonclick() {

    $(".btn-down-force")
        .click(function () {
            $('html,body').animate({
                scrollTop: $("body")
                    .select()
                    .offset()
                    .top + $(window).height()
            }, 1000);
        });
    $(".btn-minimazer").click(function () {
        resizehighchart();
        if ($('.main-admin').hasClass('main-admin-maximaz')) {
            $('.main-admin').removeClass('main-admin-maximaz');
            $('.btn-minimazer').addClass('mfd-maximaiz');
            $('.btn-minimazer').removeClass('mfd-minimaiz');
        } else {
            $('.main-admin').addClass('main-admin-maximaz');
            $('.btn-minimazer').removeClass('mfd-maximaiz');
            $('.btn-minimazer').addClass('mfd-minimaiz');

        }
    });
}
function fillsize() {
    // $('.panel-bg').animate({'height': $(window).height()-2},100);
    // $('.al-holder').css({'height': $(window).height()});
}
function calendarIconFa(event) {
    console.log('click');
    
};

function accordmenu() {

    

    var timeclaranimation;
    $(document).click(function (event) {
        timeclaranimation = setTimeout(function () {
                $('.medium-panel').css("animation", "none");
        }, 1000);
    })
    var accord = $(".title-menu-main"),
        accordcheid = $(".sidebar-submenu"),
        tempacord = 0,
        iconarea = $(".menu-cast"),
        clapsside = $(".collapse-menu"),
        sidebar = $(".al-sidebar");

    accord.click(function () {

        clearTimeout(timeclaranimation);
        console.log('df');

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

            if (sidebar.hasClass("al-sidebar-collapsing")) {
                resizehighchart();
            }

            if (tempacord == 1) {

                $(this)
                    .next()
                    .addClass("sidebar-submenu-unaccording");
                $(this)
                    .next()
                    .css("height", 0);
                $(this)
                    .children(".menu-cast")
                    .addClass("rotat-area-1");
                $(this)
                    .children(".menu-cast")
                    .removeClass("rotat-area-2");

            } else {

                $(this)
                    .next()
                    .removeClass("sidebar-submenu-unaccording");
                var hightAcording = $(this)
                    .next()
                    .children()
                    .height();
                $(this)
                    .next()
                    .animate({
                        'height': hightAcording
                    }, 100);
                $(this)
                    .children(".menu-cast")
                    .addClass("rotat-area-2");
                $(this)
                    .children(".menu-cast")
                    .removeClass("rotat-area-1");

                sidebar.addClass("al-sidebar-uncollapsing");
                sidebar.removeClass("al-sidebar-collapsing");

                $('.al-main').addClass("al-main-uncollapsing");
                $('.al-main').removeClass("al-main-collapsing");
                
                
            }
        }
        
    });

    /////////////////////////

    clapsside.click(function () {
        resizehighchart();

        if (sidebar.hasClass("al-sidebar-collapsing")) {

            sidebar.addClass("al-sidebar-uncollapsing");
            sidebar.removeClass("al-sidebar-collapsing");

            $('.al-main').addClass("al-main-uncollapsing");
            $('.al-main').removeClass("al-main-collapsing");
        } else {
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
// /////////////////////////////////////////////////
function tabfunction(){
    $(".btn-tab")
        .click(function () {
            var idtag = '#'+$(this).attr('id');
            var self = this;
            $(this).parents('.tab-component').find('.tab').removeClass('tab-show'); 
            $(this).parents('.tab-component').find(idtag+'.tab').addClass('tab-show'); 
            $(this).parents('.tab-component').find('.btn-tab').removeClass('btn-tab-selected'); 
            $(this).parents('.tab-component').find(idtag+'.btn-tab').addClass('btn-tab-selected'); 
            
                setTimeout(function() {
                    $(self).parents('.tab-component').find('.tab').addClass('displaynone'); 
                    $(self).parents('.tab-component').find(idtag+'.tab').removeClass('displaynone'); 
                }, 300);
            
        });
}

function panelscrollhorizontal(scrollTarget,BTNLeft,BTNRight){
    $(BTNLeft).click(function () {
        $(scrollTarget).animate({
            scrollLeft: $(scrollTarget).position().left - $(scrollTarget).width() + $(scrollTarget).scrollLeft() + 150
        }, 500);
    });
    $(BTNRight).click(function () {
        $(scrollTarget).animate({
             scrollLeft: $(scrollTarget).position().left + $(scrollTarget).width() + $(scrollTarget).scrollLeft() - 150
        }, 500); 
    });

}


function addcommas(sValue) {
    if (sValue == undefined)
        return 0;
    sValue /= 1000000;
    var sValue = sValue.toString();
    var sRegExp = new RegExp('(-?[0-9]+)([0-9]{3})');
    var commExp = new RegExp(',');
    while (commExp.test(sValue)) {
        sValue = sValue.replace(commExp, '');
    }
    while (sRegExp.test(sValue)) {
        sValue = sValue.replace(sRegExp, '$1,$2');
    }
    return sValue;
}

function addcommas2(sValue) {

    //sValue /= 1000000;
    var sValue = sValue.toString();
    var sRegExp = new RegExp('(-?[0-9]+)([0-9]{3})');
    var commExp = new RegExp(',');
    while (commExp.test(sValue)) {
        sValue = sValue.replace(commExp, '');
    }
    while (sRegExp.test(sValue)) {
        sValue = sValue.replace(sRegExp, '$1,$2');
    }
    return sValue;
}

function feedback(){
    $('.btn-feed').click(function () {
        //event.stopPropagation();
        if ($('.block-feed').width() != 0) {
            $('.block-feed').css({ 'width': '0', 'opacity': '0' });
        } else {
            $('.block-feed').css({ 'width': '400', 'opacity': '1' });
        }
    });
    
    $(document).click(function (event) {
        if (!$(event.target).closest('.block-feed').length) {
            if ($('.block-feed').width() >= 200) {
                $('.block-feed').css({ 'width': '0', 'opacity': '0' });
            }
        }
    })


    $('.block-feed').click(function (event) {
        //event.stopPropagation();
    });
}
jQuery(document)
    .ready(function () {
       // ReSizeHeightBlock();
        //SlideFullBlock();
        scrollingHead();
        fonclick();
        fillsize();
        accordmenu();
        tabfunction();
        $(window).resize(function () {
         //   ReSizeHeightBlock();
            fillsize();
        });
    });
