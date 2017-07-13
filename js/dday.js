(function ($) {
	var today = new Date(), //오늘 날짜
		sday = new Date('Dec 8, 2015'), //입대일
		dday = new Date('Sep 7, 2017'), //전역일
		ytime = 24 * 60 * 60 * 1000, // 1년을 ms로 변환
		r_dday = Math.ceil((dday.getTime() - today.getTime()) / ytime), // 남은 기간
		a_dday = Math.ceil((dday.getTime() - sday.getTime()) / ytime), // 총 복무일
		per = Math.round(((a_dday - r_dday) / a_dday) * 10000)/100; // 퍼센트

	$('.dday .progress-bar').css('width', per >= 100 ? '100%' : per + '%'),
	$('.dday .progress-text').text(per >= 100 ? '전역!' : per + '%'),
	$('.dday .dday-text').text('D' + ((r_dday <= 0) ? '+' : '') + (-r_dday) + ' / ' + a_dday);
}(jQuery));
