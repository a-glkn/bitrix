$(function() {

	$('[data-popup]').on('click', function() {
		var pop = $(this).data('popup');

		$('.overlay').fadeIn(300, function() {
			$('.popup.popup_' + pop).fadeIn(300, function(e) {

				var h = $('.popup.popup_' + pop).outerHeight();
                var wH = $(window).outerHeight();
                var wS = $(window).scrollTop();
				if(h > wH) {
					var fromTop = wH * 0.1 + wS;
				} else {
					var fromTop = (wH - h) / 2 + wS;
				}
               
                $('.popup.popup_' + pop).css({
                    top: fromTop
                });       

			});
		});
	});

    $('.form__input_tel').inputmask("+7 (999) 999 99 99");


	$('.overlay').on('click', function() {
		var pop = $(this).data('popup');

		$('.popup').fadeOut(200, function(){
			$('.overlay').fadeOut(200);
		});
	});

});