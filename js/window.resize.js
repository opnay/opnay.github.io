(function ($) {
	let $win = $(window);
	var resizeWin = function () {
			let $body = $('body'), width = $win.width();
			if ((width >= 1024) && !$body.hasClass('desktop')) {
				console.log('Change Window size to Desktop');
				$body.addClass('desktop').removeClass('tablet mobile');

				// side always show
				$('.side').toggleClass('active', false); $('.cover').remove();
			} else if ((width >= 768) && (width < 1024) && !$body.hasClass('tablet')) {
				console.log('Change Window size to Tablet');
				$body.addClass('tablet').removeClass('desktop mobile');
			} else if ((width < 768) && !$body.hasClass('mobile')) {
				console.log('Change Window size to Mobile');
				$body.addClass('mobile').removeClass('desktop tablet');
			}

			if ((width >= 1300) && !$body.hasClass('wide')) {
				$body.addClass('wide');
			} else if ((width < 1300) && $body.hasClass('wide')) {
				$body.removeClass('wide');
			}
		};

	// Add resize trigger and Run when load document
	$win.resize(resizeWin); resizeWin();
})(jQuery);
