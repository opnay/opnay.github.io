(function ($) {
	var today = new Date(), //오늘 날짜
		sday = new Date('Dec 8, 2015'), //입대일
		dday = new Date('Sep 7, 2017'), //전역일
		ytime = 24 * 60 * 60 * 1000, // 1년을 ms로 변환
		r_dday = Math.ceil((dday.getTime() - today.getTime()) / ytime), // 남은 기간
		a_dday = Math.ceil((dday.getTime() - sday.getTime()) / ytime); // 총 복무일

	var $progress_bar = $('.dday .progress-bar'),
		$progress_text = $('.dday .progress-text'),
		$dday_text = $('.dday .dday-text');
	
	$progress_text.text(Math.round(((a_dday - r_dday) / a_dday) * 10000)/100 + '%');
	$progress_bar.css('width', ((r_dday <= 0) ? 100 : ((a_dday - r_dday) / a_dday) * 100) + '%');
	$dday_text.text('D' + ((r_dday <= 0) ? '+' : '') + (-r_dday) + '(' + r_dday + ' / ' + a_dday + '일)');
}(jQuery));
