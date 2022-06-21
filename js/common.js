$(function() {

	$('[data-popup]').on('click', function() {
		var pop = $(this).data('popup');

		$('.overlay').fadeIn(300, function() {
			$('.popup.popup_' + pop).fadeIn(300);
		});
	});


	$('.overlay').on('click', function() {
		var pop = $(this).data('popup');

		$('.popup').fadeOut(200, function(){
			$('.overlay').fadeOut(200);
		});
	});

});