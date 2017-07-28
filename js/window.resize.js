(function ($) {
	let $win = $(window);
	var resizeWin = function () {
			let a = $('html'), width = $win.width();
			if ((width >= 1024) && !a.hasClass('desktop')) {
				console.log('Change Window size to Desktop');
				a.addClass('desktop').removeClass('tablet mobile');

				// side always show
				$('.side').toggleClass('active', false); $('.cover').remove();
			} else if ((width >= 768) && (width < 1024) && !a.hasClass('tablet')) {
				console.log('Change Window size to Tablet');
				a.addClass('tablet').removeClass('desktop mobile');
			} else if ((width < 768) && !a.hasClass('mobile')) {
				console.log('Change Window size to Mobile');
				a.addClass('mobile').removeClass('desktop tablet');
			}

			if ((width >= 1300) && !a.hasClass('wide')) {
				a.addClass('wide');
			} else if ((width < 1300) && a.hasClass('wide')) {
				a.removeClass('wide');
			}
		};

	// Add resize trigger and Run when load document
	$win.resize(resizeWin); resizeWin();
})(jQuery);
