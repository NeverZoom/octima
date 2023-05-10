"use strict";

import $ from 'jquery'
window.jQuery = $
window.$ = $

import 'magnific-popup/dist/jquery.magnific-popup.min.js';
import Swiper from 'swiper/bundle';


gsap.registerPlugin(ScrollTrigger);


$(function(){$("[data-phone-pattern]").on("input blur focus",function(e){var c=e.target,h=$(c).data("phoneClear"),a=$(c).data("phonePattern");a=a?a:"+7(___) ___-__-__";var d=0,f=a.replace(/\D/g,""),b=$(c).val().replace(/\D/g,"");"false"!==h&&"blur"===e.type&&b.length<a.match(/([_\d])/g).length?$(c).val(""):(f.length>=b.length&&(b=f),$(c).val(a.replace(/./g,function(g){return/[_\d]/.test(g)&&d<b.length?b.charAt(d++):d>=b.length?"":g})))})});

document.addEventListener('DOMContentLoaded', () => {


	if($('.case_wrapper')) {

		$('.case_wrapper .category nav').on('click', 'a', function() {

			var slide = $(this).data('content');
			$('.case_show_wrapper_item.active').removeClass('active');
			$('.case_wrapper .category nav a.active').removeClass('active');

			$(this).addClass('active');
			$('*[data-item='+ slide +']').addClass('active');


		});

		$('.case_wrapper .view').on('click', '.list', function() {
			ScrollTrigger.refresh(true);
			if ($('.wrapper_factor').hasClass('first_grid')) {
				$('.wrapper_factor').removeClass('first_grid');
				$('.wrapper_factor').addClass('first_list');
				$('.case_wrapper .view .active').removeClass('active');
				$(this).addClass('active');
			}

		});

		$('.case_wrapper .view').on('click', '.grid', function() {
			ScrollTrigger.refresh(true);
			if ($('.wrapper_factor').hasClass('first_list')) {
				$('.wrapper_factor').removeClass('first_list');
				$('.wrapper_factor').addClass('first_grid');
				$('.case_wrapper .view .active').removeClass('active');
				$(this).addClass('active');	
			}

		});

		$('.case_wrapper .button-outline').on('click', function() {
			var link = $(this).data( "link" );
			if ($('.wrapper_factor').hasClass('first_list') && !$('.wrapper_factor').hasClass('active')) {
				ScrollTrigger.refresh(true);
				$('.wrapper_factor').addClass('active');
			} else if ($('.first_list').hasClass('active')){
				window.location.href = link;
			} else {
				window.location.href = link;
			}
		});

	}

	$('footer .morelink').on('mouseover', function() {
		$(this).children('span').css('display', 'block');	
	});

	$('footer .morelink').on('mouseleave', function() {
		$(this).children('span').css('display', 'none');	
	});

	if($('.calc_form label input[type=checkbox]')) {
		$('.calc_form label input[type=checkbox]').on('change', function() {
			if ($(this).siblings('.input').hasClass('active') == true) {
				$(this).siblings('.input').removeClass('active');
			} else {
				$(this).siblings('.input').addClass('active');
			}
		});

		$('.calc_form label input[type=radio]').on('change', function() {		
			if ($(this).siblings('svg').hasClass('active') == true) {
				$(this).siblings('svg').removeClass('active');
			} else {
				$('.calc_form label input[type=radio]').siblings('svg').removeClass('active')
				$(this).siblings('svg').addClass('active');
			}
		});
	}

	$('.service_popup').magnificPopup({
		type: 'inline',
		preloader: false,
		showCloseBtn: false,
		focus: '#name',
		mainClass: 'mfp-with-zoom',
		zoom: {
			enabled: true,
			duration: 300,
			easing: 'ease-in-out',
			opener: function(openerElement) {
				return openerElement.is('img') ? openerElement : openerElement.find('img');
			}
		},
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});

	$('.service_popup_p').magnificPopup({
		type: 'inline',
		preloader: false,
		showCloseBtn: false,
		focus: '#name',
		mainClass: 'mfp-with-zoom',
		zoom: {
			enabled: true,
			duration: 300,
			easing: 'ease-in-out',
			opener: function(openerElement) {
				return openerElement.is('img') ? openerElement : openerElement.find('img');
			}
		},
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});

	$('#calc_more').on('click', function(){
		// $('#calc_name').val();
		// $('#calc_phone').val();
		$('#calc_n').val($('#calc_name').val());
		$('#calc_p').val($('#calc_phone').val());
		$('#calc .send').click();
		$('#succsess_popup').click();
		// $('form#calc').on('submit', function(event) {
		// $('.succsess_popup').magnificPopup('open');
		// });
	});

	$('.succsess_popup').magnificPopup({
		type: 'inline',
		preloader: false,
		showCloseBtn: false,
		focus: '#name',
		mainClass: 'mfp-with-zoom',
		zoom: {
			enabled: true,
			duration: 300,
			easing: 'ease-in-out',
			opener: function(openerElement) {
				return openerElement.is('img') ? openerElement : openerElement.find('img');
			}
		},
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});

	$('.succsess_popup1').magnificPopup({
		type: 'inline',
		preloader: false,
		showCloseBtn: false,
		focus: '#name',
		mainClass: 'mfp-with-zoom',
		zoom: {
			enabled: true,
			duration: 300,
			easing: 'ease-in-out',
			opener: function(openerElement) {
				return openerElement.is('img') ? openerElement : openerElement.find('img');
			}
		},
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});

	$('.succsess_popup3').magnificPopup({
		type: 'inline',
		preloader: false,
		showCloseBtn: false,
		focus: '#name',
		mainClass: 'mfp-with-zoom',
		zoom: {
			enabled: true,
			duration: 300,
			easing: 'ease-in-out',
			opener: function(openerElement) {
				return openerElement.is('img') ? openerElement : openerElement.find('img');
			}
		},
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});

	$('.review_popup').magnificPopup({
		type: 'inline',
		preloader: false,
		showCloseBtn: false,
		focus: '#name',
		mainClass: 'mfp-with-zoom',
		zoom: {
			enabled: true,
			duration: 300,
			easing: 'ease-in-out',
			opener: function(openerElement) {
				return openerElement.is('img') ? openerElement : openerElement.find('img');
			}
		},
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});

	if($('.formpopup.review')) {
		$('.formpopup.review input').on('input', function() {

			var value = ($(this).val()-1)/(10-1)*100;
			// console.log(Math.floor(value));
			$('.counter').text($(this).val());
			var count = value;
			if (value == '0'){
				var count = '7px';
			} else if (Math.floor(value) == 11) {
				var count = 'calc(10% + 9px)';
			} else if (Math.floor(value) == 22) {
				var count = 'calc(20% + 11px)';
			} else if (Math.floor(value) == 33) {
				var count = 'calc(30% + 13px)';
			} else if (Math.floor(value) == 44) {
				var count = 'calc(40% + 15px)';
			} else if (Math.floor(value) == 55) {
				var count = 'calc(50% + 16px)';
			} else if (Math.floor(value) == 66) {
				var count = 'calc(60% + 18px)';
			} else if (Math.floor(value) == 77) {
				var count = 'calc(70% + 20px)';
			} else if (Math.floor(value) == 88) {
				var count = 'calc(80% + 22px)';
			} else if (Math.floor(value) == 100) {
				var count = 'calc(90% + 20px)';
			} 
			$('.counter').css('left', count);
  
			this.style.background = 'linear-gradient(to right, #8854F6 0%, #8854F6 ' + value + '%, #D9D9D9 ' + value + '%, #D9D9D9 100%)'

		});
	}

	if (window.screen.width > 1200) {
		if ($('.dark_transition')) {
			gsap.utils.toArray(".dark_transition").forEach((panel, i) => {
				ScrollTrigger.create({
					trigger: panel,
					start: "bottom 100%", 
					end: "top -10%",
					pin: true,
					pinSpacing: false,
					endTrigger: ".end_transition",
					// markers: true,
				});
			});
		}
		if ($('.dark_transition1')) {
			gsap.utils.toArray(".dark_transition1").forEach((panel, i) => {
				ScrollTrigger.create({
					trigger: panel,
					start: "top -10%", 
					end: "top 0%",
					pin: true,
					pinSpacing: false,
					endTrigger: ".end_transition1",
					// markers: true,
				});
			});
		}
		if ($('.dark_transition2')) {
			gsap.utils.toArray(".dark_transition2").forEach((panel, i) => {
				ScrollTrigger.create({
					trigger: panel,
					start: "bottom 90%", 
					end: "top 0%",
					pin: true,
					pinSpacing: false,
					endTrigger: ".end_transition2",
					// markers: true,
				});
			});
		}
		if ($('.dark_transition-serv')) {
			gsap.utils.toArray(".dark_transition-serv").forEach((panel, i) => {
				ScrollTrigger.create({
					trigger: panel,
					start: "bottom 100%", 
					end: "top -10%",
					pin: true,
					pinSpacing: false,
					endTrigger: ".end_transition-serv",
					// markers: true,
				});
			});
		}
		if ($('.dark_transition1-serv')) {
			gsap.utils.toArray(".dark_transition1-serv").forEach((panel, i) => {
				ScrollTrigger.create({
					trigger: panel,
					start: "bottom 90%", 
					end: "top 0%",
					pin: true,
					pinSpacing: false,
					endTrigger: ".end_transition1-serv",
					// markers: true,
				});
			});
		}
	}

	if ($('.banner')) {
		gsap.from('.banner', {opacity: 0, duration: 1, delay: 1, y: 30});
	}
	if ($('.top-line')) {
		gsap.from('.top-line', {opacity: 0, duration: 1, delay: 1, y: -30});
	}
	if ($('.banner-minus').length) {
		gsap.from('.banner-minus', {opacity: 0, duration: 1, delay: 1, y: -30});
	}

	if ($('.contact_wrapper').length) {
		gsap.from('.contact_wrapper .phone', {opacity: 0, duration: 1, delay: 1, x: -30});
		gsap.from('.contact_wrapper .mail', {opacity: 0, duration: 1, delay: 1.5, x: -30});
		gsap.from('.contact_wrapper .social', {opacity: 0, duration: 1, delay: 2, x: -30});
	}
	
	if ($('.single-service_wrapper').length) {
		gsap.utils.toArray(".single-service_wrapper .list .item").forEach((panel, i) => {
			gsap.from(panel, {
				opacity: 0, 
				duration: 1,
				y: 30,
				scrollTrigger: {
					trigger: panel,
					start:"top 90%",
					// end: "+=500",
					toggleActions: "play none none none ",
					// markers: true,
				}
			});
		});

		gsap.utils.toArray(".service_page_wrapper .service_items").forEach((panel, i) => {
			gsap.from(panel.children, {
				opacity: 0, 
				duration: 1,
				x: -30,
				stagger: 0.2,
				scrollTrigger: {
					trigger: panel,
					start:"top 100%",
					// end: "+=500",
					toggleActions: "play none none none ",
					// markers: true,
				}
			});
		});

		gsap.utils.toArray(".single-service_wrapper .list .gallery").forEach((image, i) => {
			gsap.from(image.children, {
				opacity: 0, 
				duration: 1,
				x: -30,
				stagger: 0.2,
				delay: 0.5,
				scrollTrigger: {
					trigger: image,
					start:"top 90%",
					// end: "+=500",
					toggleActions: "play none none none ",
					// markers: true,
				}
			});

		});
	}

	if ($('.about_wrapper__content').length) {
		gsap.from(".opacity", {
			opacity: 0, 
			duration: 1,
			y: 30,
			scrollTrigger: {
				trigger: ".about_wrapper__content",
				start:"top 70%",
				end: "+=500",
				toggleActions: "play none none none ",
				// markers: true,
			}
		});

		gsap.from(".composition", {
			opacity: 0, 
			duration: 1,
			x: 30,
			scrollTrigger: {
				trigger: ".about_wrapper__content",
				start:"top 70%",
				end: "+=500",
				toggleActions: "play none none none ",
				// markers: true,
			}
		});
	}

	if ($('.case_wrapper').length) {
		gsap.from(".case_show_wrapper", {
			opacity: 0, 
			duration: 1,
			y: 30,
			scrollTrigger: {
				trigger: ".case_wrapper ",
				start:"top 70%",
				end: "+=500",
				toggleActions: "play none none none ",
				// markers: true,
			}
		});

		gsap.from(".navs", {
			opacity: 0, 
			duration: 1,
			y: -30,
			scrollTrigger: {
				trigger: ".case_wrapper ",
				start:"top 70%",
				end: "+=500",
				toggleActions: "play none none none ",
				// markers: true,
			}
		});
	}

	if ($('.service_wrapper').length) {
		gsap.from(".navs1", {
			opacity: 0, 
			duration: 1,
			y: -30,
			scrollTrigger: {
				trigger: ".service_wrapper ",
				start:"top 70%",
				end: "+=500",
				toggleActions: "play none none none ",
				// markers: true,
			}
		});
		gsap.from(".item-1", {
			opacity: 0, 
			duration: 1,
			delay: 0.5,
			x: -30,
			scrollTrigger: {
				trigger: ".service_wrapper ",
				start:"top 70%",
				end: "+=500",
				toggleActions: "play none none none ",
				// markers: true,
			}
		});
		gsap.from(".item-2", {
			opacity: 0, 
			duration: 1,
			delay: 1,
			x: -30,
			scrollTrigger: {
				trigger: ".service_wrapper ",
				start:"top 70%",
				end: "+=500",
				toggleActions: "play none none none ",
				// markers: true,
			}
		});
		gsap.from(".item-3", {
			opacity: 0, 
			duration: 1,
			delay: 1.5,
			x: -30,
			scrollTrigger: {
				trigger: ".service_wrapper ",
				start:"top 70%",
				end: "+=500",
				toggleActions: "play none none none ",
				// markers: true,
			}
		});
	}

	if ($('footer').length) {
		gsap.from("footer", {
			// opacity: 0, 
			duration: 1,
			y: -60,
			scrollTrigger: {
				trigger: "footer",
				start:"top 100%",
				end: "top 10%",
				toggleActions: "play none none none ",
				// markers: true,
			}
		});
	}

	if ($('.service_page_calc .section-title').length) {
		gsap.from(".service_page_calc .section-title", {
			opacity: 0, 
			duration: 1,
			x: 30,
			scrollTrigger: {
				trigger: ".service_page_calc",
				start:"top 70%",
				end: "+=500",
				toggleActions: "play none none none ",
				// markers: true,
			}
		});
	}

	if ($('.service_page_calc .title').length) {
		gsap.from(".service_page_calc .title", {
			opacity: 0, 
			duration: 1,
			x: 30,
			scrollTrigger: {
				trigger: ".service_page_calc",
				start:"top 70%",
				end: "+=500",
				toggleActions: "play none none none ",
				// markers: true,
			}
		});
	}

	if ($('.service_page_calc .calc_form').length) {
		gsap.from(".service_page_calc .calc_form", {
			opacity: 0, 
			duration: 1,
			y: -30,
			stagger: 0.2,
			scrollTrigger: {
				trigger: ".calc_form",
				start:"top 70%",
				end: "+=500",
				toggleActions: "play none none none ",
				// markers: true,
			}
		});
	}

	if ($('.about-brand').length) {
		gsap.utils.toArray(".about-brand").forEach((panel, i) => {
			gsap.from(panel, {
				opacity: 0, 
				duration: 1,
				y: 30,
				scrollTrigger: {
					trigger: panel,
					start:"top 90%",
					// end: "+=500",
					toggleActions: "play none none none ",
					// markers: true,
				}
			});
		});
	}

	if ($('.single-case_page .tag-cloud').length) {
		gsap.utils.toArray(".single-case_page .tag-cloud").forEach((panel, i) => {
			gsap.from(panel, {
				opacity: 0, 
				duration: 1,
				y: 30,
				scrollTrigger: {
					trigger: panel,
					start:"top 90%",
					// end: "+=500",
					toggleActions: "play none none none ",
					// markers: true,
				}
			});
		});
	}

	if ($('.single-case_page .section .img-ovf').length) {
		gsap.utils.toArray(".single-case_page .section .img-ovf").forEach((image, i) => {
			gsap.from(image, {
				opacity: 0, 
				duration: 1,
				y: 30,
				stagger: 0.2,
				delay: 0.5,
				scrollTrigger: {
					trigger: image,
					start:"top 90%",
					// end: "+=500",
					toggleActions: "play none none none ",
					// markers: true,
				}
			});

		});
	}
	
	var desctop = $('.hero video').data( "desctop" );
	var mobile = $('.hero video').data( "mobile" );	
	if (desctop) {
		if (window.screen.width > 1200) {
			$('.hero video source').attr('src', desctop);
			$(".hero video")[0].load();	
			$(".hero video")[0].play();
		} else {
			$('.hero video source').attr('src', mobile);	
			$(".hero video")[0].load();
			$(".hero video")[0].play();
		}
	}

  const breakpoint = window.matchMedia( '(max-width:1120px)' );
  // keep track of swiper instances to destroy later
  let mySwiper;

  const breakpointChecker = function() {
    // if larger viewport and multi-row layout needed
    if ( breakpoint.matches === false ) {
      // clean up old instances and inline styles when available
	  if ( mySwiper !== undefined ) mySwiper.destroy( true, true );
	  // or/and do nothing
	  return;
      // else if a small viewport and single column layout needed
      } else if ( breakpoint.matches === true ) {
        // fire small viewport version of swiper
        return enableSwiper();
      }
  };

  const enableSwiper = function() {
  	mySwiper = new Swiper('.swiper_servs', {
			loop: false,
			// centeredSlides: true,
			slidesPerView: "auto",
      spaceBetween: 10,
			direction: 'horizontal',
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
				dragSize: 76,
				snapOnRelease: true,
			},
			breakpoints: {
				// when window width is >= 320px
				320: {
					slidesPerView: 1.03,
      		spaceBetween: 10,
				},
				// when window width is >= 640px
				425: {
					slidesPerView: 1.2,
      		spaceBetween: 20,
				},
				550: {
					slidesPerView: 1.5,
      		spaceBetween: 25,
				},
				630: {
					slidesPerView: 1.7,
      		spaceBetween: 30,
				},
				750: {
					slidesPerView: 2.1,
      		spaceBetween: 60,
				},
				850: {
					slidesPerView: 2.4,
      		spaceBetween: 60,
				},
				950: {
					slidesPerView: 2.6,
      		spaceBetween: 70,
				}
				
			},
		});
  };

  // keep an eye on viewport size changes
  breakpoint.addListener(breakpointChecker);
  // kickstart
  breakpointChecker();

	$('.burger').on('click', function() {
		$('.lay').addClass('active') ;
	});
	$('.close').on('click', function() {
		$('.lay').removeClass('active') ;
	});
	$('.lay').on('click', function() {
		$('.lay').removeClass('active') ;
	});

	if (document.documentElement.clientWidth > 1000 ) {
		window.addEventListener('scroll', function() {
			arrowTop.hidden = (pageYOffset < (document.documentElement.clientHeight / 2));
			let counter = 0;
			var scroll = $(window).scrollTop() + $(window).height();
			var offset = $('footer').offset().top + 120;
			if (scroll > offset && counter == 0) {
				$('#arrowTop').addClass('d-none');
				$('.big-button svg').removeClass('d-none');
			} else {
				$('#arrowTop').removeClass('d-none');
				$('.big-button svg').addClass('d-none');
			}

		});

		arrowTop.onclick = function() {
			window.scrollTo(pageXOffset, 0);
		};
	}

	$('.back-button').on('touchstart click', function(){
		history.back(); 
 });

 	$('.wrapper_factor.first_grid .block').on('click', function() {
		window.location.href = $(this).attr('data-href');
 	});

	if (document.documentElement.clientWidth < 1000 ) {
		$('.service_items .flip-card.item').on('click', function() {
			window.location.href = $(this).attr('data-href');
		 });
	}

	// склонение
	function getNoun(number, one, two, five) {
    let n = Math.abs(number);
    n %= 100;
    if (n >= 5 && n <= 20) {
      return five;
    }
    n %= 10;
    if (n === 1) {
      return one;
    }
    if (n >= 2 && n <= 4) {
      return two;
    }
    return five;
  }

	// пробел через каждые 3 символа
	function prettify(num) {
		var n = num.toString();
		return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ');
	}

	$('.calc_form input').on('change', function() {
		var j = 0;
		var i = 0;
		$('.calc_form input:checked').each(function(){
			i++;
			var word = getNoun(i, 'услуга', 'услуги', 'услуг')
			j += Number($(this).attr('data-price'));
			$('.main_serv .total .price').html(prettify(j)+'<bdi>₽</bdi>');
			$('.main_serv .total .count').html(i+' '+word);
		});
	});

	var button = document.querySelectorAll('.send');
	var input = document.querySelector('#phone');
	var range = document.querySelector('#range');
	for (var i = 0; i < button.length; i++) {
	  button[i].addEventListener('click', function() {
	    if (input.value !== '') {
				//
	    }else{
	     $('.error-text').removeClass('d-none');
	     $('#phone').css('border-color', 'red');
			 if (window.screen.width > 768) {
	     	$('#phone').parent().parent().css('border', '3px solid red');
			 }
	    //  $('#range').parent().parent().parent().css('border', '3px solid red');
	    }
			if (range.value !== '') {
				//
	    }else{
	     $('.error-text').removeClass('d-none');
	    //  $('#phone').css('border-color', 'red');
	    //  $('#phone').parent().parent().css('border', '3px solid red');
			if (window.screen.width > 768) {
	     	$('#range').parent().parent().parent().css('border', '3px solid red');
			}
	    }
	  })
	}

	$('.mfp-close').on('click', function() {

	});
	$('.service_popup').on('mfpClose', function(e /*, params */) {
		$('.error-text').addClass('d-none');
		$('#phone').css('border-color', '');
		$('#phone').parent().parent().css('border', 'none');
	});
	$('.review_popup').on('mfpClose', function(e /*, params */) {
		$('.error-text').addClass('d-none');
		$('#range').parent().parent().parent().css('border', 'none');
	});

	$('form#serv').on('submit', function(event) {
		$('.succsess_popup').magnificPopup('open');
	});
	$('form#calc').on('submit', function(event) {
		$('.succsess_popup').magnificPopup('open');
	});
	$('form#rew').on('submit', function(event) {
		$('.succsess_popup1').magnificPopup('open');
	});
	$('form#brif1').on('submit', function(event) {
		$('.succsess_popup3').magnificPopup('open');
	});
	$('form#brif2').on('submit', function(event) {
		$('.succsess_popup3').magnificPopup('open');
	});

	$('#service_popup label input[type=radio]').on('change', function() {		
		if ($(this).siblings('svg').hasClass('active') == true) {
			$(this).siblings('svg').removeClass('active');
		} else {
			$('#service_popup label input[type=radio]').siblings('svg').removeClass('active')
			$(this).siblings('svg').addClass('active');
		}
	});

	if($('.brief-content .range')) {
		$('.brief-content .range input').on('input', function() {
			var value = ($(this).val()-1)/(10-1)*100;
			this.style.background = 'linear-gradient(to right, #D9D9D9 0%, #D9D9D9 ' + value + '%, #D9D9D9 ' + value + '%, #D9D9D9 100%)'
		});
	}

	$('.radio-list label input[type=radio]').on('change', function() {		
		if ($(this).siblings('svg').hasClass('active') == true) {
			$(this).siblings('svg').removeClass('active');
		} else {
			var label = $(this).parent();
			label.parent().children('label').children('svg').removeClass('active');
			// $('.radio-list label input[type=radio]').siblings('svg').removeClass('active')
			$(this).siblings('svg').addClass('active');
		}
	});

	$('.checkbox-list label input[type=checkbox]').on('change', function() {
		if ($(this).siblings('svg').hasClass('active') == true) {
			$(this).siblings('svg').removeClass('active');
		} else {
			$(this).siblings('svg').addClass('active');
		}
	});

	$('.brief-content .file').on('click', function(){
		$(this).siblings('.input').click();
		$(this).siblings('.input').on('change', function(){
			if( $(this).val() ){
				$(this).siblings('.file').addClass('active');
			} else {
				$(this).siblings('.file').removeClass('active');
			}
		});
	});

	if($('.brief-content .suprange')) {
		$('.brief-content .suprange input').on('input', function() {

			$('.counter').text($(this).val());
			var value1 = ($(this).val()-1)/(500-1)*100;
			var value = $(this).val();
			var thisEl = $(this);

			function getRangePercent() {
				let max = 500 || 100,
				min = 1 || 0,
				relativeValue = value - 1,
				ticks = 500 - 1,
				percent = relativeValue / ticks;
				return percent;
			}	
			function updatePos() {
				let percent = getRangePercent(),
				left = percent * 100,
				emAdjust = percent * 3;
				var cw = $('.counter').width();
				var count = `calc(${left}% - ${emAdjust}px - 44px)`;
				$('.counter').css('left', count);
				// thisEl.dataRange.innerHTML = this.el.value;
			}	

			updatePos();


  
			this.style.background = 'linear-gradient(to right, #8854F6 0%, #8854F6 ' + value1 + '%, #D9D9D9 ' + value1 + '%, #D9D9D9 100%)';

		});
	}

	$('.brief-content .brief-svg g').on('click', function(){
		$(this).siblings('g').removeClass('active');
		$(this).addClass('active');
		revert();

		var nav = $(this).attr('data-nav-tab');
		$('.brief-form').removeClass('active');
		$('*[data-tab='+ nav +']').addClass('active');

	});

	function revert() {
		$('.brief-svg > g').each(function(el) {
			if ($(this).next()) {
				var el = $(this).next();
			} else {
				var el = $(this).prev();
			}
			var copy_from = $(this).clone(true);   
			$(el).replaceWith(copy_from);
			var copy_to = $(el).clone(true);        
			$(this).replaceWith(copy_to);
		});

		$('.brief-content .brief-svg g').on('click', function(){
			$(this).siblings('g').removeClass('active');
			$(this).addClass('active');
			revert();
	
			var nav = $(this).attr('data-nav-tab');
			$('.brief-form').removeClass('active');
			$('*[data-tab='+ nav +']').addClass('active');
	
		});
	}

	if (document.documentElement.clientWidth < 992 ) {
		$('.brief-svg').attr('viewBox', '0 0 520 55');
		
		$('.send-form').addClass('d-none');
		var maxFs = $('.brief-form.fs .block').length;
		$('.brief-form.fs').append('<div class="count-page">1/'+maxFs+'</div><span class="brief-navs"><svg class="d-none go-back" data-prev="1" width="55" height="54" viewBox="0 0 55 54" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M36.3399 27.82C36.8371 27.8157 37.2365 27.4091 37.2321 26.912C37.2278 26.4149 36.8212 26.0154 36.3241 26.0198L36.3399 27.82ZM17.3563 26.4501C17.0079 26.8047 17.0129 27.3747 17.3675 27.7231L23.1461 33.4011C23.5007 33.7495 24.0707 33.7445 24.4191 33.3899C24.7675 33.0353 24.7625 32.4654 24.4079 32.1169L19.2713 27.0698L24.3184 21.9333C24.6668 21.5787 24.6618 21.0087 24.3072 20.6603C23.9526 20.3119 23.3827 20.3169 23.0343 20.6715L17.3563 26.4501ZM36.3241 26.0198L17.9905 26.1809L18.0063 27.9811L36.3399 27.82L36.3241 26.0198Z" fill="#BFBFBF"/><rect x="1" y="1" width="52.3337" height="52" rx="26" stroke="#BFBFBF" stroke-width="2"/></svg><a href="#" class="button go-next" data-next="1">далее<svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.99209 9.98605C0.49497 9.98169 0.0955152 9.57515 0.0998835 9.07803C0.104252 8.58091 0.510789 8.18145 1.00791 8.18582L0.99209 9.98605ZM19.9757 8.61616C20.3242 8.97076 20.3192 9.54068 19.9645 9.88911L14.1859 15.5671C13.8313 15.9155 13.2614 15.9105 12.9129 15.5559C12.5645 15.2013 12.5695 14.6314 12.9241 14.2829L18.0607 9.23586L13.0136 4.09928C12.6652 3.74468 12.6702 3.17476 13.0248 2.82633C13.3794 2.4779 13.9493 2.48291 14.2978 2.83751L19.9757 8.61616ZM1.00791 8.18582L19.3416 8.34692L19.3257 10.1472L0.99209 9.98605L1.00791 8.18582Z" fill="white"/></svg></a></span>');

		$('.brief-form.fs .block').each(function(index) {
			index += 1;
			$(this).attr('data-num', index);
			if (index != 1) {
				$(this).addClass('disabled');
			}
		});

		var done = 0;
		$('.fs .go-next').on('click', function() {
			var nav = $(this).attr('data-next');
			var minusNav = Number(nav) + 1;
			if (minusNav == 2 && done == 0) {
				done = 1;
				$('.brief-form.fs .go-back').removeClass('d-none');
			}
			if (minusNav < maxFs) {
				// $('.fs *[data-num='+ nav +']').addClass('disabled');
				$('.fs .block').addClass('disabled');
				$('.fs *[data-num='+ minusNav +']').removeClass('disabled');
				$(this).attr('data-next', minusNav);
				$('.fs .count-page').html(minusNav+'/'+maxFs);

				$('.fs .go-back').attr('data-prev', minusNav - 1);
			} else {
				// $('.fs *[data-num='+ nav +']').addClass('disabled');
				$('.fs .block').addClass('disabled');
				$('.fs *[data-num='+ minusNav +']').removeClass('disabled');
				$('.fs .count-page').html(minusNav+'/'+maxFs);
				$('.fs .go-next').addClass('d-none');
				$('.fs .send-form').removeClass('d-none');
				$('.brief-form.fs .go-back').addClass('d-none');

				$('.fs .go-back').attr('data-prev', minusNav - 1);
			}
		});

		$('.fs .go-back').on('click', function() {
			var prev = $(this).attr('data-prev');
			if (prev > 0 ) {
				$('.fs .block').addClass('disabled');
				$('.fs *[data-num='+ prev +']').removeClass('disabled');
				$('.fs .count-page').html(prev +'/'+maxFs);
				
				$('.fs .go-back').attr('data-prev', Number(prev) - 1);
				$('.fs .go-next').attr('data-next', Number(prev));
			}
		});




		var maxSt = $('.brief-form.st .block').length;
		$('.brief-form.st').append('<div class="count-page">1/'+maxSt+'</div><span class="brief-navs"><svg class="d-none go-back" data-prev="1" width="55" height="54" viewBox="0 0 55 54" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M36.3399 27.82C36.8371 27.8157 37.2365 27.4091 37.2321 26.912C37.2278 26.4149 36.8212 26.0154 36.3241 26.0198L36.3399 27.82ZM17.3563 26.4501C17.0079 26.8047 17.0129 27.3747 17.3675 27.7231L23.1461 33.4011C23.5007 33.7495 24.0707 33.7445 24.4191 33.3899C24.7675 33.0353 24.7625 32.4654 24.4079 32.1169L19.2713 27.0698L24.3184 21.9333C24.6668 21.5787 24.6618 21.0087 24.3072 20.6603C23.9526 20.3119 23.3827 20.3169 23.0343 20.6715L17.3563 26.4501ZM36.3241 26.0198L17.9905 26.1809L18.0063 27.9811L36.3399 27.82L36.3241 26.0198Z" fill="#BFBFBF"/><rect x="1" y="1" width="52.3337" height="52" rx="26" stroke="#BFBFBF" stroke-width="2"/></svg><a href="#" class="button go-next" data-next="1">далее<svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.99209 9.98605C0.49497 9.98169 0.0955152 9.57515 0.0998835 9.07803C0.104252 8.58091 0.510789 8.18145 1.00791 8.18582L0.99209 9.98605ZM19.9757 8.61616C20.3242 8.97076 20.3192 9.54068 19.9645 9.88911L14.1859 15.5671C13.8313 15.9155 13.2614 15.9105 12.9129 15.5559C12.5645 15.2013 12.5695 14.6314 12.9241 14.2829L18.0607 9.23586L13.0136 4.09928C12.6652 3.74468 12.6702 3.17476 13.0248 2.82633C13.3794 2.4779 13.9493 2.48291 14.2978 2.83751L19.9757 8.61616ZM1.00791 8.18582L19.3416 8.34692L19.3257 10.1472L0.99209 9.98605L1.00791 8.18582Z" fill="white"/></svg></a></span>');

		$('.brief-form.st .block').each(function(index) {
			index += 1;
			$(this).attr('data-num', index);
			if (index != 1) {
				$(this).addClass('disabled');
			}
		});

		var done1 = 0;
		$('.st .go-next').on('click', function() {
			var nav = $(this).attr('data-next');
			var minusNav = Number(nav) + 1;
			if (minusNav == 2 && done1 == 0) {
				done = 1;
				$('.brief-form.st .go-back').removeClass('d-none');
			}

			if (minusNav < maxSt) {
				// $('.st *[data-num='+ nav +']').addClass('disabled');
				$('.st .block').addClass('disabled');
				$('.st *[data-num='+ minusNav +']').removeClass('disabled');
				$(this).attr('data-next', minusNav);
				$('.st .count-page').html(minusNav+'/'+maxSt);

				$('.st .go-back').attr('data-prev', minusNav - 1);
			} else {
				// $('.st *[data-num='+ nav +']').addClass('disabled');
				$('.st .block').addClass('disabled');
				$('.st *[data-num='+ minusNav +']').removeClass('disabled');
				$('.st .count-page').html(minusNav+'/'+maxSt);
				$('.st .go-next').addClass('d-none');
				$('.st .send-form').removeClass('d-none');
				$('.st .go-back').addClass('d-none');

				$('.st .go-back').attr('data-prev', minusNav - 1);
			}
		});

		$('.st .go-back').on('click', function() {
			var prev = $(this).attr('data-prev');
			if (prev > 0 ) {
				$('.st .block').addClass('disabled');
				$('.st *[data-num='+ prev +']').removeClass('disabled');
				$('.st .count-page').html(prev +'/'+maxSt);
				
				$('.st .go-back').attr('data-prev', Number(prev) - 1);
				$('.st .go-next').attr('data-next', Number(prev));
			}
		});

	}


	$('footer .big-button svg').on('click', function() {
		$('html, body').animate({scrollTop: 0},500);
		return false;
	});


	$('.single-case_page').bind('contextmenu', function(e) {
    return false;
	});

})