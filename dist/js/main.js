/*---------contacts menu-------*/
$(function() {
   $("#contacts").mmenu({
      extensions : [ 'widescreen', 'theme-white', 'effect-menu-slide', 'pagedim-black' ],
      "offCanvas":{
         "position": "right"
      },
      navbar:{
         title: "Все контакты"
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

$(function () {
    var $discountHandler = $('.order__total_link'),
        $discountContent = $('.order__discount_content');

    $discountHandler.on('click', function (evt) {
        $discountHandler.toggleClass('opened');
        $discountContent.slideToggle("400");
        evt.preventDefault();
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
        $menuContent = $('.nav__list'), 

        $blogMenuHandler = $('.blog__title_sm'),
        $blogMenuContent = $('.blog__aside_list'),
        $blogMenuContainer = $('.blog__aside');

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
    $blogMenuHandler.on('click', function () {
        if( $(window).width() > 992 && !$(this).hasClass('on')){
           return false;
        }
        $blogMenuContainer.toggleClass('opened');
        $blogMenuContent.slideToggle("300");
        $blogMenuHandler.toggleClass('on');
        return false;
    });

    $(window).resize(function () {
        var wid = $(window).width();
        if (wid > 992 &&  $menuContent.is(':hidden')) {
            $menuContent.removeAttr('style');
        }
    });
    $(window).resize(function () {
        var wid = $(window).width();
        if (wid > 992 &&  $blogMenuContent.is(':hidden')) {
            $blogMenuContent.removeAttr('style');
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
    $('#delivery__tabs_controls .cart__choose-label').on('click', function(){
        // e.preventDefault();

        var item = $(this).closest('.cart__choose-label'),
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
var 
    $body = $("body"),
    $topMenu = $('.top__menu'),
    $content = $('.maincontent'),
    $header = $('#header'),
    $headerContent = $('.header__bottom_content'),
    $headerTop = $('.header__top'),
    headerTopHeight = $headerTop.outerHeight(true);


function getContentPadding(){
    var windowWidth = window.innerWidth,
        scrollTop = $(window).scrollTop();

    if (window.innerWidth < 992) {
        return 0;
    }

    return scrollTop >= headerTopHeight ? "190px" : "297px";
}


$(window).on('scroll', function () {
    if($body.hasClass('page_cart')){
        return true;
    }

    $content.css('padding-top', getContentPadding())

    var scrollTop = $(window).scrollTop();
    if(scrollTop >= headerTopHeight){
        $topMenu.hide();
        $headerContent.hide();
    } else{
        $topMenu.show();
        $headerContent.show();
    }
    
    if (window.innerWidth < 992) {
        $header.removeClass('scroll')
        return true   
    }

    if(scrollTop >= headerTopHeight){
        $header.addClass('scroll')
    } else{
        $header.removeClass('scroll')
    }
});

$(window).on('resize init', function () {
    $content.css('padding-top', getContentPadding())
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

var ratingWidget = (function(){

    var _letTheStarsShining = function(ratingAmount){
        var starsArray = [];

        for (var i = 0; i < 5; i++){
            var starClassName = (i < ratingAmount) ? "products__rating-stars-item products__rating-stars-item_filed" : "products__rating-stars-item";

            var star = $("<li>",{
                class: starClassName 
            });

            starsArray.push(star);
        }

        return starsArray;    
    }

    var _generateMarkup = function(ratingAmount, elementToAppend){
        var ul =  $("<ul>", {
            class: "products__rating-stars",
            html: _letTheStarsShining (ratingAmount)
        });
 
        elementToAppend.append(ul);
    }

    return {
        init: function(){
            $(".products__raiting").each(function (){
                var $this = $(this),
                    ratingAmount = parseInt($this.data("rating"));

                _generateMarkup(ratingAmount, $this);
            });
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
    if ($(".products__raiting").length){
        ratingWidget.init();
    }
    /*-----------select----------*/
    if ($(".sort__select-element").length) {
        $(".sort__select-element").select2({
            minimumResultsForSearch: Infinity
        });
    }
});

 // product variant widget
$widget = $('.product__variant_widget');

$('.product__variant', $widget).on('keydown', function(evt){
    if(evt.key === 'Enter'){
        return true;
    }
     
    var re = new RegExp('[0-9]');
    return re.test(evt.key);
});


$('.product__variant', $widget).on('change focusout', function(){
    var $this = $(this),
        multFactor = 1,
        valueUnits = $widget.data('units'),
        valueStep = parseFloat($widget.data('value-step')) || 250,
        value = parseFloat($this.val()) || valueStep;
  
    multFactor = Math.round(value / valueStep) || 1;
    value = valueStep * multFactor;
 
    $this.val(value + " " + valueUnits);
});

$('.select__quantity_button', $widget).on('click', function(){
    var $this = $(this),
        $input = $widget.find('.product__variant'),
        valueStep = parseFloat($widget.data('value-step')) || 250,
        value = parseFloat($input.val()) || valueStep;

        if($this.hasClass('select_quantity_button-prev')){
            value -= valueStep;
        } else{
            value += valueStep;
        }
      
        $input.val(value).trigger('change');
});

// Reviews form handler
$(function () {
    var $formHandler = $('.add__review_btn'),
        $reviewsForm = $('.reviews__form'),
        $formHandlerReply = $('.review__post_reply-link'),
        $reviewsFormReply = $('.review__post_reply-form');

    $formHandler.on('click', function (evt) {
        $reviewsForm.slideToggle("400");
    });
    $formHandlerReply.on('click', function (evt) {
        $reviewsFormReply.slideToggle("400");
        evt.preventDefault();
    });
})

/*-----------map----------*/
$(function() {
    var overlay = $('#overlay-div');

    overlay.on("click", function () {
        $(this).attr('style', '');
    });
    $(window).scroll(function(){ 
        overlay.attr('style', 'width:100%; height:300px; position:absolute; z-index:20;');
    });
});
/*-----------cart step----------*/
$(function() {
    var firstStepNext = $('.cart__first-step').find('.order__button_next'),
        secondStepNext = $('.cart__second-step').find('.order__button_next'),

        secondStepPrev = $('.cart__second-step').find('.order__button_prev'),
        thirdStepPrev = $('.cart__third-step').find('.order__button_prev'),   
        
        firstStep = $('.cart__first-step'),
        secondStep = $('.cart__second-step'),
        thirdStep = $('.cart__third-step');
        
      
    firstStepNext.on("click", function (e) {
        e.preventDefault;
        var item =  $(this).parents('.cart__order_item');

        item.removeClass('active');
        secondStepNext.parents('.cart__order_item').addClass('active');
    });

    secondStepNext.on("click", function (e) {
        e.preventDefault;
        var item =  $(this).parents('.cart__order_item');

        item.removeClass('active');
        thirdStep.addClass('active');
    });


    secondStepPrev.on("click", function (e) {
        e.preventDefault;
        var item =  $(this).parents('.cart__order_item');

        item.removeClass('active');
        firstStep.addClass('active');
    });

    thirdStepPrev.on("click", function (e) {
        e.preventDefault;
        var item =  $(this).parents('.cart__order_item');

        item.removeClass('active');
        secondStep.addClass('active');
    });
});


/*-----------cart form----------*/
(function() {
    var app = {
        initialize :  function () {
            this.setUpListeners();
        },

        setUpListeners : function() {
            $('form').on('submit', app.submitForm);
            $('form').on('keydown', 'input', app.removeError);
        }, 

        submitForm: function(e){
            e.preventDefault();
            var form = $(this);
            if(app.validateForm(form) === false) return false;

            console.log('go in ajax');
        },

        validateForm : function(form){
            var inputs = form.find('input'),
                valid = true;

            $.each(inputs, function(index, val){
                var input = $(val), 
                    val = input.val(),
                    formGroup = input.parents('.form-group'), 
                    textError = 'Заполните это поле';

                if(val.length === 0){
                    formGroup.addClass('input__error').removeClass('input__success');
                    formGroup.find('.error-text').html(textError);
                    valid = false;
                }else{
                    formGroup.addClass('input__success').removeClass('input__error');
                   
                }
            });
            return valid;
        },

        removeError: function(){
            $(this).parents('.form-group').removeClass('input__error').find('.error-text').html('');
        }
    }
    app.initialize();
}());
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

$(function () { 
    producutSlickOpts = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dotsClass: 'producut-dots',
        fade: true,
        cssEase: 'linear',
        customPaging : function(slider, i) {
            var thumb = $(slider.$slides[i]).data('thumb');
            return '<a><img src="'+thumb+'"></a>';
        },
         responsive: [
            {
                breakpoint: 685,
                settings: {
                    dotsClass: 'slick-dots',
                    customPaging : function(slider, i) {
                        return '<button type="button" data-role="none" role="button" aria-required="false" tabindex="0">' + (i + 1) + '</button>';
                    },
                }
            },
        ]

    }
    $('.product__slider_list').slick(producutSlickOpts);
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
        prevArrow: $('.sale__button-prev'),
        nextArrow: $('.sale__button-next'),
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
    $('.sale__products_list').slick(bestPriceAllSlickOpts);
});

$(function () { 
        viewedProductsSlickOpts = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        adaptiveHeight: true,
        arrows: true,
        prevArrow: $('.viewed__products-prev'),
        nextArrow: $('.viewed__products-next'),
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
    $('.viewed__products_list').slick(viewedProductsSlickOpts);
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


