/*---------contacts menu-------*/
$(function() {
   $("#contacts").mmenu({
      extensions : [ 'widescreen', 'theme-white', 'effect-menu-slide', 'pagedim-black' ],
      "offCanvas":{
         "position": "right"
      },
      navbar:{
         title:       "Контакты"
      }
   });
});

/*---------filter menu-------*/
$(function() {
   $("#filter__content").mmenu({
   		extensions : [ 'widescreen', 'theme-white', 'effect-menu-slide', 'pagedim-black' ],
   		slidingSubmenus: false,
      "offCanvas":{
         "position": "left"
      },
      navbar:{
        title:   "Фильтры"
      }
   }, {
	   // configuration
	   clone: true
	});
   
   	var API = $("#mm-filter__content").data("mmenu");
   	$(".filter__open_btn").click(function() {
		API.open();
	});
});

// Footer bottom
function footerToBottom() {
	var browserHeight = $(window).height(),
	    footerOuterHeight = $('#footer').outerHeight(true),
	    mainHeightMarginPaddingBorder = $('.wrapper').outerHeight(true) - $('.wrapper').height();

	$('.wrapper').css({
	    'min-height': browserHeight - footerOuterHeight - mainHeightMarginPaddingBorder,
		});
	};
	footerToBottom();
	$(window).resize(function () {
		footerToBottom();
	}
);
/*---------Header lang switch menu-------*/
$(function () {
    var touch = $('.current__lang'),
        menu = $('.lang__switch_menu');

    touch.click(function () {
        $(this).toggleClass("on");
        menu.slideToggle();
        return false;
    });

});

// Header dropdown
$(function () {
    var $phoneHandler = $('#header-contacts'),
        $phoneHandlerFooter = $('#footer-contacts'),
        $contactsList = $('.header__bottom .contacts__content'),
        $contactsListFotter = $('.footer__menu .contacts__content'),
        $container = $('.site__info'),
        $cartHandler = $('.items_added'),
        $cartContent =  $cartHandler.find('.cart__button_content'),

        $topMenuHandler = $('.nav__top_header'),
        $topMenuContent = $('.nav__top_content'),
        $topMenuContainer = $('.nav__top'), 

        $menuHandler = $('.toggle-mnu'),
        $menuContent = $('.nav__list');

    $phoneHandler.on('click', function () {
        $phoneHandler.toggleClass('opened');
        $contactsList.fadeToggle("300");
        $container.toggleClass('on');
    });
    $phoneHandlerFooter.on('click', function () {
        $phoneHandlerFooter.toggleClass('opened');
        $contactsListFotter.fadeToggle("300");
        $container.toggleClass('on');
    });

    $topMenuHandler.on('click', function () {
        $topMenuHandler.toggleClass('opened');
        $topMenuContent.fadeToggle("300");
        $topMenuContainer.toggleClass('on');
    });

    $menuHandler.on('click', function () {
        if( $(window).width() > 992 && !$(this).hasClass('on')){
           return false;
        }
        $menuContent.toggleClass('opened');
        $menuContent.slideToggle("300");
        return false;
    });

    $cartHandler.hover(
        function () {
            $cartHandler.toggleClass('opened');
            $cartContent.stop(true, true).fadeToggle("300");
        }
    );

    $(window).resize(function () {
         var wid = $(window).width();
        if (wid > 992 &&  $menuContent.is(':hidden')) {
            $menuContent.removeAttr('style');
        }
    });

});



/*-----------tabs----------*/
$(document).ready(function(){

    $('#tabs__controls .tabs__controls_link').on('click', function(e){
        e.preventDefault();

        var item = $(this).closest('.tabs__controls_item'),
            contentItem = $('.tab__pane'),
            itemPosition = item.data('class');

        contentItem.filter('.pane__'+ itemPosition)
            .add(item)
            .addClass('active')
            .siblings()
            .removeClass('active');
    });
    $('#price__controls .tabs__controls_link').on('click', function(e){
        e.preventDefault();

        var item = $(this).closest('.tabs__controls_item'),
            contentItem = $('.tab__pane'),
            itemPosition = item.data('class');

        contentItem.filter('.pane__'+ itemPosition)
            .add(item)
            .addClass('active')
            .siblings()
            .removeClass('active');
    });
});
// /*----------text----------*/
$(function(){
    $(".dvantages__item_text, .atrticles__item_text").dotdotdot();
});

// Header animate
var $topMenu = $('.top__menu'),
    $content = $('.maincontent'),
    $header = $('#header'),
    $headerContent = $('.header__bottom_content'),
    $headerTop = $('.header__top'),
    headerTopHeight = $headerTop.outerHeight(true);

$(window).on('scroll', function () {
    if ($(window).scrollTop() >=  headerTopHeight) {
        if( $(window).width() < 992){
            return false;
        }
        $topMenu.hide();
        $content.css('padding-top', '190px');
        $header.addClass('scroll').find($headerContent).hide();
    } else {
        $topMenu.show();
        $content.css('padding-top', '297px');
        $header.removeClass('scroll').find($headerContent).show();
    }
    var wid = $(window).width();
    if (wid < 992) {
        $content.css('padding-top', '0');
    }
    $(window).resize(function () {
        if (wid < 992) {
            $content.removeAttr('style');
        }
    });
});


var sliderWidget = (function(){

    var $sliders = null;

    return {
        init: function($elems){
            // Store all initialized sliders
            $sliders = $elems;

            $sliders.each(function(){
                var $this = $(this),
                    min = parseInt($this.data("min")),
                    max = parseInt($this.data("max")),
                    container = $this.closest(".filter__slider"),
                    fromField = container.find(".filter__slider-input_from"),
                    toField = container.find(".filter__slider-input_to");

                fromField.on('change', function(){
                    $this.slider('values', 0, fromField.val())
                });

                toField.on('change', function(){
                    $this.slider('values', 1, toField.val())
                });

                $this.slider({
                    range: true,
                    min: min,
                    max: max,
                    values: [min, max],
                    slide: function(evt, ui) {
                        fromField.val(ui.values[0]);
                        toField.val(ui.values[1])
                    },
                    create: function() {
                        fromField.val(min);
                        toField.val(max)
                    }
                });
            })
        },

        reset: function(){
            $sliders.each(function(){
                var $this = $(this),
                    min = parseInt($this.data("min")),
                    max = parseInt($this.data("max")),
                    container = $this.closest(".filter__slider"),
                    fromField = container.find(".filter__slider-input_from"),
                    toField = container.find(".filter__slider-input_to");

                $this.slider({
                    values: [min, max]
                });

                fromField.val(min);
                toField.val(max);
            })
        }
    }
}());


$(document).ready(function (){
       /* Init Price Slider */
    var $sliders = $(".filter__slider-element"); 
    if ($sliders.length){
        sliderWidget.init($sliders);
    }
    $(".filter__reset").on("click", function(e){
        var $this = $(this),
            container = $this.closest("#mm-filter__content").find(".filter__group"),
            checkboxes = container.find("input:checkbox");

        checkboxes.removeAttr("checked");
        sliderWidget.reset();

        return false;
    });
});

 
$(function () { 
        gallerySlickOpts = {
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            adaptiveHeight: true,
            responsive: [
                {
                    breakpoint: 320,
                    dots: true,
                    arrows: false
                }
            ]
        }
    $('.gallery__content').slick(gallerySlickOpts);
});

$(function () { 
        bestChoiceSlickOpts = {
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            adaptiveHeight: true,
            arrows: true,
            prevArrow: $('.choice__button_prev'),
            nextArrow: $('.choice__button_next'),
            responsive: [
                {
                breakpoint: 1200,
                    settings: {
                        unslick: true
                    }
                },
               {
                breakpoint: 1199,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        dots: false,
                        arrows: true
                    }
                },
                {
                breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        dots: true,
                        arrows: false,
                        initialSlide: 2
                    }
                },
                {
                breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: true,
                        arrows: false,
                        initialSlide: 2
                    }
                }
            ]
        }
    $('.start__page_slider').slick(bestChoiceSlickOpts);
});

$(function () { 
    bestPriceAllSlickOpts = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        adaptiveHeight: true,
        arrows: true,
        prevArrow: $('.price__all_button-prev'),
        nextArrow: $('.price__all_button-next'),
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    unslick: true
                }
            },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false
                }
            },
            {
                breakpoint: 570,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false
                }
            }
        ]
    }
    $('#best-price-all').slick(bestPriceAllSlickOpts);
});

$(function () { 
    bestPriceRobustaSlickOpts = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        adaptiveHeight: true,
        arrows: true,
        prevArrow: $('.robusta__button_prev'),
        nextArrow: $('.robusta__button_next'),
        responsive: [
                  {
                breakpoint: 1200,
                settings: {
                    unslick: true
                }
            },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false
                }
            },
            {
                breakpoint: 570,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false
                }
            }
        ]
    }
    $('#best-price-robusta').slick(bestPriceRobustaSlickOpts);
});
$(function () { 
    bestPriceRobustaSlickOpts = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        adaptiveHeight: true,
        arrows: true,
        prevArrow: $('.ground__button_prev'),
        nextArrow: $('.ground__button_next'),
        responsive: [
                  {
                breakpoint: 1200,
                settings: {
                    unslick: true
                }
            },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false
                }
            },
            {
                breakpoint: 570,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false
                }
            }
        ]
    }
    $('#best-price-ground').slick(bestPriceRobustaSlickOpts);
});
$(function () { 
    bestPriceRobustaSlickOpts = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        adaptiveHeight: true,
        arrows: true,
        prevArrow: $('.other__button_prev'),
        nextArrow: $('.other__button_next'),
        responsive: [
                  {
                breakpoint: 1200,
                settings: {
                    unslick: true
                }
            },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false
                }
            },
            {
                breakpoint: 570,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false
                }
            }
        ]
    }
    $('#best-price-tab_other').slick(bestPriceRobustaSlickOpts);
});

$(window).load(function() {
      $('.slides').on('setPosition', function () {
      $(this).find('.slick-slide').height('auto');
      var slickTrack = $(this).find('.slick-track');
      var slickTrackHeight = $(slickTrack).height();
      $(this).find('.slick-slide').css('height', slickTrackHeight + 'px');
      });
})
$(function () { 
    bestPriceAllSlickOpts = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
        arrows: true,
        prevArrow: $('.similar__button-prev'),
        nextArrow: $('.similar__button-next'),
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    unslick: true
                }
            },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false
                }
            },
            {
                breakpoint: 570,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false
                }
            }
        ]
    }
    $('.similar__products_list').slick(bestPriceAllSlickOpts);
});
$(function (){
    console.log('init search', (new Date).getTime())
    var $searchInput = $('#search'),
        $searchButton = $('.search__form-submit_label'),
        $autocomplete = $('#search_autocomplete'),
        $searchForm = $('#search__form');

    $searchButton.on('click', function(event) {
        if ($searchButton.hasClass('off')) {
            event.preventDefault();
            $searchButton.removeClass('off');
        }

        if($searchInput.hasClass('show')){
            $searchForm.addClass('submit');
        }

        $searchInput.addClass('show');
    });

    $searchForm.on('submit', function(){
        console.log('Form submited', $searchForm.get(0).className)
        if($searchForm.hasClass('submit')){
            console.log('Form has class submit')
            return true;
        }else{
            console.log('Form has NOT class submit')
        }

        return false;
    });

    // $searchForm.on('mouseleave', function() {
    //     $autocomplete.fadeOut(function() {
    //         $searchButton.addClass('off');
    //         $searchInput.removeClass('show');
    //     });

    //     $searchForm.removeClass('submit');
    // });

    $searchInput.on('focusout', function() {
        $autocomplete.fadeOut(function() {
            $searchButton.addClass('off');
            $searchInput.removeClass('show');
        });

        $searchForm.removeClass('submit');
    });
});
// $(function (){
// 	var  $paginationButton = $(".page__pagination_link");

//     $paginationButton.on('click', function(e) {
//     	e.preventDefault();
//     	var $item = $(this).closest(".page__pagination_item");

//         $item.closest(".page__pagination_item")
//             .addClass("active")
//             .siblings()
//             .removeClass("active");
//     });
// });


