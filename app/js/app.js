"use strict";

import $ from 'jquery'
window.jQuery = $
window.$ = $

import 'magnific-popup/dist/jquery.magnific-popup.min.js';
import Swiper from 'swiper/bundle';


gsap.registerPlugin(ScrollTrigger);


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
	if ($('.banner-minus')) {
		gsap.from('.banner-minus', {opacity: 0, duration: 1, delay: 1, y: -30});
	}

	if ($('.contact_wrapper')) {
		gsap.from('.contact_wrapper .phone', {opacity: 0, duration: 1, delay: 1, x: -30});
		gsap.from('.contact_wrapper .mail', {opacity: 0, duration: 1, delay: 1.5, x: -30});
		gsap.from('.contact_wrapper .social', {opacity: 0, duration: 1, delay: 2, x: -30});
	}
	
	if ($('.single-service_wrapper')) {
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

	if ($('.about_wrapper__content')) {
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

	if ($('.case_wrapper')) {
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

	if ($('.service_wrapper')) {
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

	if ($('footer')) {
		gsap.from("footer", {
			opacity: 0, 
			duration: 1,
			// y: 60,
			scrollTrigger: {
				trigger: "footer",
				start:"top 100%",
				end: "top 10%",
				toggleActions: "play none none none ",
				// markers: true,
			}
		});
	}

	if ($('.service_page_calc .section-title')) {
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

	if ($('.service_page_calc .title')) {
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

	if ($('.service_page_calc .calc_form')) {
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

	if ($('.about-brand')) {
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

	if ($('.single-case_page .tag-cloud')) {
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

	if ($('.single-case_page .section .img-ovf')) {
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

	if (document.documentElement.clientWidth < 1120 && $('.swiper_servs')) {
  	const swiper = new Swiper('.swiper_servs', {
			loop: false,
			// centeredSlides: true,
			slidesPerView: "auto",
      spaceBetween: 10,
			direction: 'horizontal',
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
				dragSize: 85,
				snapOnRelease: true,
			},
			breakpoints: {
				// when window width is >= 320px
				320: {
					slidesPerView: 1.03,
				},
				// when window width is >= 640px
				425: {
					slidesPerView: 1.3,
				},
				550: {
					slidesPerView: 1.5,
				},
				630: {
					slidesPerView: 1.7,
				},
				750: {
					slidesPerView: 2.1,
				},
				850: {
					slidesPerView: 2.4,
				},
				950: {
					slidesPerView: 2.6,
				}
				
			},
		});
	}

	$('.burger').on('click', function() {
		$('.lay').addClass('active') ;
	});
	$('.close').on('click', function() {
		$('.lay').removeClass('active') ;
	});
	$('.lay').on('click', function() {
		$('.lay').removeClass('active') ;
	});

})
