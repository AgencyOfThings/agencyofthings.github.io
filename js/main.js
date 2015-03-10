/*global $:false */
'use strict';
if(!se){
  var se = {};
}
se = (function(){

	// global stuff here
	var win = $(window);
	var scrollLast = 0;

	return {
		init: function () {
			
			$('.js-toggle-menu').click(function(){
				$('.world').toggleClass('menu-toggle');
			});

			if ($('.js-modal')[0]) {
				se.modal.init();
			}

			if ($('.js-tab')[0]) {
				se.tabs.init();
			}

			if ($('.js-scroll-push-in')[0]) {
				se.scrollPushIn.init();
			}

		},
		'modal': {
			init: function () {
				$('body').append('<div class="modal-overlay js-modal-close"></div>');
				$(document).on('click', '.js-modal', function(e) {
					var target = $(this).data('target');
					se.modal.openModal(target);
					e.preventDefault();
				});
				$(document).on('click', '.js-modal-close', function(e) {
					se.modal.closeModal();
				});
			},
			openModal: function (target) {
				$(target).fadeIn(200)
					.find('.input')
					.first()
					.focus();
				$('.modal-overlay').fadeIn(200);
			},
			closeModal: function () {
				$('.modal').fadeOut(200);
				$('.modal-overlay').fadeOut(200);
			}
		},
		'tabs': {
			init: function () {
				$('.js-tab').click(function(e){
					e.preventDefault();
					var el = $(this);
					var target = el.attr('href');
					el.closest('.tab-nav').find('.js-tab').removeClass('active');
					el.addClass('active');
					$(target).addClass('active').siblings().removeClass('active');;
				});

			}
		},
		'scrollPushIn': {
			init: function () {
				var target = $('.js-scroll-push-in').data('push-element');
				var allItems = $(target);

				// Already visible modules
				allItems.each(function(i, el) {
				  var el = $(el);
				  if (el.visible(true)) {
				    el.addClass('already-visible'); 
				  } 
				});

				win.scroll(function(event) {
				  	
				  	var scrollPos = win.scrollTop();

					allItems.each(function(i, el) {
						
						var el = $(el);
						if (el.visible(true)) {
							if (scrollLast <  scrollPos) {
								el.addClass('come-in'); 
							} else {
								el.addClass('come-in already-visible')
							}
					 	}
					});
				  	
				  	// Update scrollLast position
				  	scrollLast = scrollPos;
				});
			}
		}

	}
})();

$(document).ready(function(){
	se.init();
});