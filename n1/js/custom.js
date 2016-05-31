/***************************************************************************************************************
||||||||||||||||||||||||||||         CUSTOM SCRIPT FOR Fitlab               ||||||||||||||||||||||||||||||||||||
****************************************************************************************************************
||||||||||||||||||||||||||||              TABLE OF CONTENT                  ||||||||||||||||||||||||||||||||||||
****************************************************************************************************************
****************************************************************************************************************
1. revolution slider
2. accrodion
3. gallery fancybox activator 
4. select menu
5. client carousel
6. counter number changer
7. contact form validation
8. sticky header
9. gallery
10. typed plugin
11. testimonails carousel
12. team carousel
13. product carousel
14. related class
15. gallery masonary layout
16. date picker
17. single product carousel
18. video fancybox
19. schedule scrollbar
20. mobile navigation toggling
****************************************************************************************************************
||||||||||||||||||||||||||||            End TABLE OF CONTENT                ||||||||||||||||||||||||||||||||||||
****************************************************************************************************************/





"use strict"; // Start of use strict

// 1. revolution slider
function revolutionSliderActiver () {
	if ($('.rev_slider_wrapper #slider1').length) {
		jQuery("#slider1").revolution({
			sliderType:"standard",
			sliderLayout:"auto",
			delay:5000,
			navigation: {
				arrows:{enable:true} 
			}, 
			gridwidth:1170,
			gridheight:915 
		});
	};
}
// 2. accrodion
function accrodion () {
	if ($('.accrodion-grp').length) {
		
		$('.accrodion-grp').each(function () {
			var accrodionName = $(this).data('grp-name');
			var Self = $(this);
			Self.addClass(accrodionName);
			Self.find('.accrodion .accrodion-content').hide();
			Self.find('.accrodion.active').find('.accrodion-content').show();
			Self.find('.accrodion').each(function() {
				$(this).find('.accrodion-title').on('click', function () {
					if ($(this).parent().hasClass('active') === false ) {					
						$('.accrodion-grp.'+accrodionName).find('.accrodion').removeClass('active');
						$('.accrodion-grp.'+accrodionName).find('.accrodion').find('.accrodion-content').slideUp();
						$(this).parent().addClass('active');					
						$(this).parent().find('.accrodion-content').slideDown();	
					};
				});
			});
		});
		
	};
}
// 3. gallery fancybox activator 
function GalleryFancyboxActivator () {
  var galleryFcb = $('.fancybox');
  if(galleryFcb.length){
    galleryFcb.fancybox({
      openEffect  : 'elastic',
      closeEffect : 'elastic',
      helpers : {
        media : {}
      }
    });
  }
}
// 4. select menu
function selectMenu () {
	if ($('.select-menu').length) {
		$('.select-menu').selectmenu();
	};
}
// 5. client carousel
function clientCarousel () {
	if ($('.client-carousel').length) {
		$('.client-carousel .owl-carousel').owlCarousel({
		    loop: true,
		    margin: 27,
		    nav: false,
		    dots: false,
		    autoWidth: true,
		    autoplay:true,
		    autoplayTimeout:3000,
		    autoplayHoverPause:true,
		    responsive: {
		        0:{
		            items:1,
		            autoWidth: false
		        },
		        480:{
		            items:2,
		            autoWidth: false
		        },
		        600:{
		            items:3,
		            autoWidth: false
		        },
		        1000:{
		            items:6,
		            autoWidth: false
		        }
		    }
		});
	};
}
// 6. counter number changer
function CounterNumberChanger () {
	var timer = $('.timer');
	if(timer.length) {
		timer.appear(function () {
			timer.countTo();
		})
	}
}
// 7. contact form validation
function contactFormValidation () {

	if($('.contact-form').length){
		$('.contact-form').validate({ // initialize the plugin
			rules: {
				name: {
					required: true
				},
				email: {
					required: true,
					email: true
				},
				message: {
					required: true
				},
				subject: {
					required: true
				}
			},
			submitHandler: function (form) { 
				// sending value with ajax request
				$.post($(form).attr('action'), $(form).serialize(), function (response) {
					$(form).parent('div').append(response);
					$(form).find('input[type="text"]').val('');
					$(form).find('input[type="email"]').val('');
					$(form).find('textarea').val('');
				});
				return false;
			}
		});
	}
}
// 8. sticky header
function stickyHeader () {
	if ($('.stricky').length) {
		var strickyScrollPos = 100;
		if($(window).scrollTop() > strickyScrollPos) {
			$('.stricky').removeClass('fadeIn animated');
	      	$('.stricky').addClass('stricky-fixed fadeInDown animated');
		}
		else if($(this).scrollTop() <= strickyScrollPos) {
			$('.stricky').removeClass('stricky-fixed fadeInDown animated');
	      	$('.stricky').addClass('slideIn animated');
		}
	};
}
// 9. gallery
function fleetGallery () {
	if ($('.mixit-gallery').length) {
		$('.mixit-gallery').mixItUp();
	};
}
// 10. typed plugin
function typed () {
	if ($(".typed").length) {
		$(".typed").typed({
	        stringsElement: $('.typed-strings'),
	        typeSpeed: 200,
	        backDelay: 1500,
	        loop: true,
	        contentType: 'html', // or text
	        // defaults to false for infinite loop
	        loopCount: false,
	        callback: function () { null; },
	        resetCallback: function () { newTyped(); }
	    });
    };
}

// 11. testimonails carousel
function testimonialsCarosuleGardener () {
	if ($('.testimonial-box.with-carousel').length) {
		$('.testimonial-box.with-carousel .owl-carousel').owlCarousel({
		    loop: true,
		    margin: 0,
		    nav: false,
		    dots: true,
		    autoplay: true,
		    autoplayHoverPause: true,
		    responsive: {
		        0:{
		            items:1
		        },
		        480:{
		            items:1
		        },
		        600:{
		            items:1
		        },
		        1000:{
		            items:1
		        }
		    }
		});
	}
}

// 12. team carousel
function teamCarousel () {
	if ($('.our-trainer').length) {
		$('.our-trainer .owl-carousel').owlCarousel({
		    loop: true,
		    margin: 45,
		    nav: true,
		    navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],
		    dots: false,
		    autoplay:true,
		    autoplayTimeout:3000,
		    autoplayHoverPause:true,
		    responsive: {
		        0:{
		            items:1,
		            nav: false
		        },
		        480:{
		            items:2,
		            nav: false
		        },
		        768:{
		            items:3,
		            nav: false
		        },
		        1000:{
		            items:3,
		            nav: false
		        },
		        1200:{
		            items:4
		        }
		    }
		});
	};
}
// 13. product carousel
function productCarousel () {
	if ($('.our-product').length) {
		$('.our-product .owl-carousel').owlCarousel({
		    loop: true,
		    margin: 45,
		    nav: true,
		    navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],
		    dots: false,
		    autoplay:true,
		    autoplayTimeout:3000,
		    autoplayHoverPause:true,
		    responsive: {
		        0:{
		            items:1,
		            nav: false
		        },
		        480:{
		            items:2,
		            nav: false
		        },
		        768:{
		            items:3,
		            nav: false
		        },
		        1000:{
		            items:3,
		            nav: false
		        },
		        1200:{
		            items:4
		        }
		    }
		});
	};
}
// 14. related class
function relatedClassCarousel () {
	if ($('.related-popular-class .owl-carousel').length) {
		$('.related-popular-class .owl-carousel').each(function () {
			var Self = $(this);
			Self.owlCarousel({
			    loop: true,
			    margin: 30,
			    nav: true,
			    navText: [
	                '<i class="fa fa-angle-left"></i>',
	                '<i class="fa fa-angle-right"></i>'
	            ],
			    dots: false,
			    autoplay:true,
			    autoplayTimeout:3000,
			    autoplayHoverPause:true,
			    responsive: {
			        0:{
			            items:1,
			            nav: false
			        },
			        480:{
			            items:1,
			            nav: false
			        },
			        768:{
			            items:2,
			            nav: false
			        },
			        1000:{
			            items:2
			        }
			    }

			});
		});
	};
}

// 15. gallery masonary layout
function galleryMasonaryLayout () {
	if ($('.masonary-gallery').length) {
		$('.masonary-gallery').isotope({
			layoutMode:'masonry'
		});
	}
	if($('.post-filter.masonary').length){
		$('.post-filter.masonary li').children('span').on('click', function(){
			var Self = $(this);
			var selector = Self.parent().attr('data-filter');
			$('.post-filter.masonary li').children('span').parent().removeClass('active');
			Self.parent().addClass('active');
			$('.masonary-gallery').isotope({ filter: selector });
			return false;
		});
	}
}
// 16. date picker
function datePicker () {
	if ($('.date-picker').length) {
		$('.date-picker').datepicker();
	};
}

// 17. single product carousel
function singleProductCarousel () {
	if ($('.single-product-carousel-content-box').length && $('.single-product-carousel-thumbnail-box').length) {

		var $sync1 = $(".single-product-carousel-content-box"),
			$sync2 = $(".single-product-carousel-thumbnail-box"),
			flag = false,
			duration = 1000;

			$sync1
				.owlCarousel({
					items: 1,
					margin: 0,
					nav: false,
					dots: false
				})
				.on('changed.owl.carousel', function (e) {
					if (!flag) {
						flag = true;
						$sync2.trigger('to.owl.carousel', [e.item.index, duration, true]);
						flag = false;
					}
				});

			$sync2
				.owlCarousel({
					margin: 15,
					items: 4,
					nav: false,
					dots: false,
					center: false,
					responsive: {
				        0:{
				            items:3,
				            autoWidth: false
				        },
				        480:{
				            items:2,
				            center: false,
				            autoWidth: false
				        },
				        600:{
				            items:3,
				            autoWidth: false
				        },
				        1000:{
				            items:4,
				            autoWidth: false
				        }
				    },
				})
				.on('click', '.owl-item', function () {
					$sync1.trigger('to.owl.carousel', [$(this).index(), duration, true]);

				})
				.on('changed.owl.carousel', function (e) {
					if (!flag) {
						flag = true;		
						$sync1.trigger('to.owl.carousel', [e.item.index, duration, true]);
						flag = false;
					}
				});

	};
}
// 18. video fancybox
function videoFancybox () {
	if ($("a.video-fancybox").length) {
		$("a.video-fancybox").on('click', function() {
		    $.fancybox({
		            'padding'       : 0,
		            'autoScale'     : false,
		            'transitionIn'  : 'none',
		            'transitionOut' : 'none',
		            'title'         : this.title,
		            'width'         : 680,
		            'height'        : 495,
		            'href'          : this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
		            'type'          : 'swf',
		            openEffect      : 'elastic',
				    closeEffect     : 'elastic',
				    helpers         : {
				    	media : {}
				    },
		            'swf'           : {
		            	'wmode'             : 'transparent',
		                'allowfullscreen'   : 'true'
		            }
		        });

		    return false;
		});
	};
}
// 19. schedule scrollbar
function ScheduleScrollBar () {
	if($('.schedule-box').length){
		$(".schedule-box").mCustomScrollbar({
			axis:"x",
			autoExpandScrollbar:true,
			advanced:{autoExpandHorizontalScroll:true}
		});
	}
}
// 20. mobile navigation toggling
function mobileNavToggler () {
	if ($('.mainmenu-holder').length) {
		$('.mainmenu-holder .nav-footer .menu-expander').on('click', function () {
			$('.mainmenu-holder .nav-header').toggleClass('closed opened');
			return false;
			console.log('clicked');
		});
		$('.mainmenu-holder .nav-header .navigation li.dropdown').children('a').append(function () {
			return '<button class="dropdown-expander"><i class="fa fa-bars"></i></button>';    			
		});
		$('.mainmenu-holder .nav-header .navigation .dropdown-expander').on('click', function () {
			var Self = $(this);
			Self.parent().parent().children('.submenu').toggleClass('closed opened');
			return false;
		});
	}
}


// instance of fuction while Document ready event	
jQuery(document).on('ready', function () {
	(function ($) {
		revolutionSliderActiver();
		accrodion();
		selectMenu();		
		CounterNumberChanger();
		contactFormValidation();
		gMap();
		fleetGallery();
		GalleryFancyboxActivator();
		typed();
		testimonialsCarosuleGardener();
		teamCarousel();
		productCarousel();
		singleProductCarousel();
		videoFancybox();
		datePicker();
		mobileNavToggler();
		ScheduleScrollBar();
	})(jQuery);
});

// instance of fuction while Window Load event
jQuery(window).on('load', function () {
	(function ($) {
		clientCarousel();
		galleryMasonaryLayout();		
		relatedClassCarousel();
	})(jQuery);
});

// instance of fuction while Window Scroll event
jQuery(window).on('scroll', function () {	
	(function ($) {
		stickyHeader();
	})(jQuery);
});
