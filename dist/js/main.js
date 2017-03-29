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
//DropdownHandler
$(function () {
	var $phoneHandler = $('#header-contacts'),
		$list = $('.header__bottom .contacts__content'),
		$container = $('.site__info'),
 		$headerCallback = $('#header-callback'),
 		$phoneHandlerFooter = $('#footer-contacts');
        $contactsListFotter = $('.footer__menu .contacts__content'),

        $topMenuHandler = $('.nav__top_header'),
        $topMenuContent = $('.nav__top_content'),
        $topMenuContainer = $('.nav__top');


	function dropdownHandler($element, $list){
		var wid = $(window).width();

		if(wid < 992 && !$element.hasClass('opened')){
            return false;
        }
		$element.toggleClass('opened');
		$list.fadeToggle("300");
	};

    $phoneHandler.on('click', function (evt) {
    	var $element = $phoneHandler;

       	dropdownHandler($element, $list);
       	evt.stopPropagation();

        $('.tabs__controls_item:first-child')
            .addClass('active')
            .siblings()
            .removeClass('active');
        $('.pane__tab_contacts_all')
            .addClass('active')
            .siblings()
            .removeClass('active');
    });

    $headerCallback.on('click', function (evt) {
        var $element = $phoneHandler;
        dropdownHandler($element, $list);
        evt.stopPropagation();	

        if ($('.tabs__controls_item:first-child').hasClass('active')){
           $('#tabs__controls .tabs__controls_link').trigger('click');
        }
	});

	$phoneHandlerFooter.on('click', function (evt) {
		var $element = $phoneHandlerFooter,
			$list = $contactsListFotter;

		dropdownHandler($element, $list);
		evt.stopPropagation();
    });

	$topMenuHandler.on('click', function (evt) {
		var $element = $topMenuHandler,
			$list = $topMenuContent;

		dropdownHandler($element, $list);
        $topMenuContainer.toggleClass('on');
        evt.stopPropagation();
    });

    $(document).on('click', function(evt) {
		if ($(evt.target).closest($topMenuContent).length) return;	
        $topMenuContent.fadeOut("300");
        $topMenuContent.removeClass('opened'); 
        $topMenuContainer.removeClass('on');   
	});

	$(document).on('click', function(evt) {
		if ($(evt.target).closest($container).length) return;	
        $list.fadeOut("300");
        $phoneHandler.removeClass('opened');  
        $phoneHandlerFooter.removeClass('opened');
        $contactsListFotter.fadeOut("300");  
	});

	$(window).resize(function () {
		var wid = $(window).width();
		if(wid < 992 &&   $phoneHandler.is(':hidden')){
			$phoneHandler.removeClass('opened');     
			$list.removeAttr('style');     	
		}
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

//dropdown
$(function () {
    var $cartHandler = $('.cart__button'),
        $cartContent = $cartHandler.find('.cart__button_content'),
        $menuHandler = $('.toggle-mnu'),
        $menuContent = $('.nav__list'),
        $blogMenuHandler = $('.blog__title_sm'),
        $blogMenuContent = $('.blog__aside_list'),
        $blogMenuContainer = $('.blog__aside');

    $menuHandler.on('click', function () {
        $menuContent.toggleClass('opened');
        $menuContent.slideToggle("300");
    });

    $cartHandler.hover(
        function () {
            if($cartHandler.hasClass('items_added')){
                $cartHandler.toggleClass('opened');
                $cartHandler.find('.cart__button_content').stop(true, true).fadeToggle("300");    
            }
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
        if (wid > 992) {
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

    $('#delivery__tabs_controls .cart__choose-label').on('click', function(){
        var $this = $(this), 
            item = $this.closest('.cart__choose-label'),
            contentItem = $('.tab__pane'),
            itemPosition = item.data('class');

        contentItem.filter('.pane__'+ itemPosition)
            .add(item)
            .addClass('active')
            .siblings()
            .removeClass('active');


        $this.closest('#delivery__tabs_controls').trigger('tabchange.cart');
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
$(function () {
    function isValidStepInput(input){
        return input.value !== "";
    }

    function getStepInputs($step){
       return $step.find("input:visible") 
    }


    function getStepInvalidInputs($step) {
        var $inputs = getStepInputs($step),
            $invalidInputs = $inputs.filter(function(i, input){
                return !isValidStepInput(input);
            });
        
        return $invalidInputs;
    }

    function getStepValidInputs($step) {
        var $inputs = getStepInputs($step),
            $validInputs = $inputs.filter(function(i, input){
                return isValidStepInput(input);
            });
        
        return $validInputs;
    }

    function handleStepErrors($stepErrors){
        $stepErrors.each(function(ind, input){
            var $input = $(input),
                $formGroup = $input.parents('.form-group'), 
                textError = 'Заполните это поле';

                $formGroup.addClass('input__error')
                          .removeClass('input__success')
                          .find('.error-text')
                          .html(textError);
        });
    }

    function clearErrors($inputs){
        $inputs.each(function(ind, input) {
            var $input = $(input),
                $formGroup = $input.parents('.form-group');

                $formGroup.removeClass('input__error')
                          .addClass('input__success')
                          .find('.error-text')
                          .html("");
        });
    }

    function resetStepErrors($inputs){
        $inputs.each(function(ind, input) {
            var $input = $(input),
                $formGroup = $input.parents('.form-group');

                $formGroup.removeClass('input__error')
                          .removeClass('input__success')
                          .find('.error-text')
                          .html("");
        });
    }

    function validateStep($step){
        if($step.data('validate') === false){
            return true;
        }

        var $validInputs = getStepValidInputs($step);
        clearErrors($validInputs);

        var $stepErrors = getStepInvalidInputs($step);
        handleStepErrors($stepErrors);

        return $stepErrors.length === 0;
    }

    function validateStepInput($step, $input){
        if($step.data('validate') === false){
            return true;
        }

        if(isValidStepInput($input.get(0))){
            clearErrors($input);
        } else {
            handleStepErrors($input);
        }
    }

    function onStepChange($steps){
        $steps.each(function(ind, step){
            var $step = $(step);

            if($step.data('validate') === false){
                return;
            }
            
            getStepInputs($step).on("change.cart_order", function(evt){
                validateStepInput($step, $(this));
            })    
        })
    }

    function offStepChange($steps){
        $steps.each(function(ind, step){
            var $step = $(step);

            if($step.data('validate') === false){
                return;
            }
            
            getStepInputs($step).off("change.cart_order");
        })
    }

    function showEditButton($steps){
        $.each($steps, function(i, step){
            var $step = $(step);

            if($step.hasClass('active')){
                return;
            }
            $step.addClass('checked');
        })
    };

    function hideEditButton($steps){
        $.each($steps, function(i, step){
            var $step = $(step);

            $step.removeClass('checked');
        })
    };

    function getCartStepsIndex($cartSteps){
        var $cartStepsIndex = [];

        $cartSteps.each(function(index, cartStep) {
            var $cartStep = $(cartStep),
                cartStepIndex = $cartStep.data("form-step")-1;

            $cartStepsIndex[cartStepIndex] = $cartStep;
        });

        return $cartStepsIndex;
    }

    function getStepByIndex(index, $cartSteps){
        return $cartSteps[index-1];
    }

    function getPrevSteps(index, $cartSteps){
        return $cartSteps.slice(0, index-1);
    }

    function getNextSteps(index, $cartSteps){
        return $cartSteps.slice(index-1);
    }


    var $cartForm = $('#cart_order'),
        $cartSteps = $('[data-form-step]', $cartForm),
        $cartStepsIndex = getCartStepsIndex($cartSteps),
        $stepNextAction = $cartSteps.find('.order__button_next'),
        $stepPrevAction = $cartSteps.find('.prev__step'),   
        $editAction = $('.cart__step_edit'),
        $deliveryTabs = $('#delivery__tabs_controls', $cartForm);


    $deliveryTabs.on("tabchange.cart", function(){
        var $step = $(this).parents('.cart__order_item');
        
        var $inputs = getStepInputs($step),
            $validInputs = getStepValidInputs($step);
    
        // Remove all error/sucess indication
        resetStepErrors($inputs);

        // Mark valid input. Form could be partially valid
        clearErrors($step);

        // Unsubscribe from input change events (could be subscribe to the hidden ones)
        offStepChange($step);

        // Subscribe to input change events (to those who a visible know)
        onStepChange($step);
    })    
    
    $editAction.on("click", function (e) {
        var $currentStep = $(this).parents('[data-form-step]'),
            currentStepIndex = $currentStep.data('form-step');

        $cartSteps.removeClass('active');
        $currentStep.addClass('active');
        
        offStepChange($cartSteps);    
        onStepChange($currentStep)

        hideEditButton(
            getNextSteps(currentStepIndex, $cartStepsIndex)
        );

        return false;
    });
    
    $stepNextAction.on("click", function (e) {
        var $currentStep = $(this).parents('[data-form-step]'),
            currentStepIndex = $currentStep.data('form-step'),
            $nextStep = getStepByIndex(currentStepIndex+1, $cartStepsIndex);
       
        if(validateStep($currentStep, true)){
            $cartSteps.removeClass('active');
            $nextStep.addClass('active');
            
            offStepChange($cartSteps);    
            onStepChange($nextStep);
        }       

        showEditButton(
            getPrevSteps(currentStepIndex+1, $cartStepsIndex)
        );

        return false;
    });


    $stepPrevAction.on("click", function (e) {
        var $currentStep = $(this).parents('[data-form-step]'),
            currentStepIndex = $currentStep.data('form-step'),
            $prevStep = getStepByIndex(currentStepIndex-1, $cartStepsIndex);

            $cartSteps.removeClass('active');
            $prevStep.addClass('active');
            
            offStepChange($cartSteps);  
            onStepChange($prevStep)
            
            hideEditButton(
                getNextSteps(currentStepIndex-1, $cartStepsIndex)
            );

            return false;
    });
});

// /*-----------header menu width----------*/
(function(jQuery, window, document, undefined){
    if (!Modernizr.flexbox){
        function setMainNavigationItemsWidth($navigation){
            var navWidth = $navigation.width(),
                $menuItems = $navigation.find(' > li'),
                itemsWidth = 0;


            $menuItems.each(function() {
                var $this = $(this);
                itemsWidth += ($this[0].getBoundingClientRect().width);
            });


            $navigation.width('100%');

            $menuItems.each(function(){
                var $this = $(this),

                itemWidth = ($this[0].getBoundingClientRect().width);
                fluidWidth = (itemWidth/itemsWidth)*100;
                
                $this.width(fluidWidth + '%');
            });
        }

        function unsetMainNavigationItemsWidth($navigation){
            var navWidth = $navigation.width(),
                $menuItems = $navigation.find(' > li');

            $navigation.removeAttr('style');
            $menuItems.removeAttr('style');
        }

        $(function(){
            var $navigation = $('.nav__list'),
                $header = $('#header');

            setMainNavigationItemsWidth($navigation);
            $header.data('setMainNavigationItemsWidth', true);

            $(window).on('scroll orientationChange resize', function(){
                var windowWidth = $(this).width();
                if(windowWidth < 1024 ){
                    unsetMainNavigationItemsWidth($navigation);    
                    return;
                } 

                if($header.hasClass('scroll')){
                    unsetMainNavigationItemsWidth($navigation);
                    return;
                }

                unsetMainNavigationItemsWidth($navigation);   
                setMainNavigationItemsWidth($navigation);
            });
        });
    }
})(jQuery, window, document);

/*---------certificates-------*/
$(function () {
    $('.certificates__link').colorbox({rel: 'certificates'});
});
/*---------products hover-------*/
// $('.products__item').hover(
//     function(){
//         var $this = $(this);
//         var $img = $this.find('.products__img');

//         $img.data('original-width', $img.width());

//         $img.effect("scale", {percent: 110}, 150);
//     },
//     function(){
//         var $this = $(this);
//         var $img = $this.find('.products__img');

//         $img.stop(true,true).animate({ width: $img.data('original-width')}, 150, function(){
//         $img.css({width: 'auto',
//                 height   : 'auto',
//                 left: "0",
//                 top: "0",
//                 margin: "0 auto"
//             })
//         });
//     }
    
// );




// $('.products__item').hover(
//   function(){
//     var $this = $(this);
//     var $img = $this.find('.products__img');

//     $img.data('original-width', $img.width());
//     $img.css({width: $img.width(), height:  $img.height()})
//     $img.stop(true,true).animate({ 
//         width: Math.round($img.width() * 1.1),
//         height: Math.round($img.height() * 1.1),
//         top              : "-=10"
//     }, 150);
//   },
//   function(){
//     var $this = $(this);
//     var $img = $this.find('.products__img');

//     $img.stop(true,true).animate({ width: $img.data('original-width')}, 150, function(){
//     $img.css({width: 'auto',
//     height   : "auto",
//     top              : "+=10"
//     })
//     });
//   }
// )

/*---------cart animate-------*/
// $(function () {
//     var $cart = $(".cart__button_icon"),
//         animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

//     $cart.on('added.product', function(){
//         $(this).addClass('animated rubberBand').one(animationEnd, function() {
//             $(this).removeClass('animated rubberBand');
//         });
//     });
// });


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
    $('#best-price').slick(bestPriceAllSlickOpts);
});

//filter for best price start
var filtered = false;

$("#price__controls li").on('click', function(e){
    e.preventDefault();

    var filtername = $(this).attr('id'),
        $slider =  $('#best-price'),
        $pagination = $slider.siblings('.paginations'),
        slick = $slider.slick('getSlick');  
    
    $slider.slick('slickUnfilter');
    $slider.slick('slickFilter', '.' + filtername);
    
    if (filtered === false) {
        $slider.slick('slickGoTo', 0);      
    }

    filtered = !filtered
    slick.slideCount > slick.options.slidesToShow ?  $pagination.show() : $pagination.hide(); 
    
              
    if ($("#price__controls li.active").length) {
        $("#price__controls li.active").removeClass("active");
    }
    $(this).toggleClass("active");
});

$(window).on("resize", function(){
    var $slider =  $('#best-price'),
        $pagination = $slider.siblings('.paginations'),
        slick = $slider.slick('getSlick');

    var wid = $(window).width();
    if (wid > 1199 || wid < 768) {
        return;
    }    
    slick.slideCount > slick.options.slidesToShow ?  $pagination.show() : $pagination.hide();
});
//filter for best price end

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

// Certificates
$(function () {
    var certificatesSlickOpts = {
        slidesToShow: 6,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        prevArrow: $('.certificates__button_prev'),
        nextArrow: $('.certificates__button_next'),
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    unslick: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    dots: false,
                }
            },
             {
                breakpoint: 769,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    dots: false,
                }
            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
            }
        ]
    };
    $('.certificates__list').slick(certificatesSlickOpts);
});
var sliderWidgetRuller = (function(){

    var $sliders = null;
    var _changedColor = function(min, max, label){
        
        label.removeClass('active');

        return label.filter(function(index){
          var sliderValue = $(this).data('slider-value');

          if (sliderValue >= min && sliderValue <= max){
            return true;
          }
        }).addClass('active');
      }

    return {
        init: function($elems){
            // Store all initialized sliders
            $sliders = $elems;

            $sliders.each(function(){
                var $this = $(this),
                    min = parseInt($this.data("min")),
                    max = parseInt($this.data("max"));

                $this.slider({
                    range: true,
                    min: min,
                    max: max,
                    values: [min, max],
                    step: 1,
                    change: function (event, ui) {
                      var minVal =  $this.slider('values', 0),
                          maxVal =  $this.slider('values', 1),
                          label =  $this.find('label');

                      _changedColor(minVal, maxVal, label);
                    }
                }).each(function() {
                    var $this = $(this),
                        max =  $this.slider("option", "max"),
                        min =  $this.slider("option", "min"),
                        vals = max - min,
                        elem,
                        minVal = $(this).slider('values', 0),
                        maxVal = $(this).slider('values', 1),
                        label,
                        labelsCreated = 0;   

                    for (var i = min; i <= max; i++) { 
                      elem = $('<label>'+i+'</label>').css('left',( labelsCreated/vals*100)+'%');
                      elem.data('slider-value', i);
                      $this.append(elem);

                      labelsCreated++;
                    };

                    label = $this.find('label');
                    _changedColor(minVal, maxVal, label);
                })
            })
        }  
    }
}());

$(document).ready(function (){
       /* Init Price Slider */
    var $sliders = $(".slider-item"); 
    if ($sliders.length){
        sliderWidgetRuller.init($sliders);
    }
});


$(function (){
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
//     function addActive(){
//         // var $this = $(this),
//             var container = $this.closest(".nav__item");

//         container.addClass("active")
//                 .siblings()
//                 .removeClass("active");
//     }
//     $(".nav__item").on("click", function(e) {  
//         var $this = $(this);  
//            function addActive($this);
//     });
// })