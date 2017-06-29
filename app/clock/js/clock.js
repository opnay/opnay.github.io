(function ($) {
	let hour = document.getElementsByClassName('hour')[0];
	let minutes = document.getElementsByClassName('minutes')[0];
	let seconds = document.getElementsByClassName('seconds')[0];
	let period = document.getElementsByClassName('period')[0];

	function nNum(n, s) {
		let str = n.toString();
		if (str.length < s) {
			str = '0'.repeat(s - str.length) + str;
		}
		return str;
	}

	function setTime(h, m, s, p) {
		hour.innerHTML = h;
		minutes.innerHTML = m;
		seconds.innerHTML = s;
		period.innerHTML = p;
	}

	function updateClock() {
		// clock 객체 생성
		let now = new Date(),
			hour = nNum(now.getHours(),2),
			min = nNum(now.getMinutes(), 2),
			sec = nNum(now.getSeconds(), 2);

		setTime(hour % 12, min, sec, hour >= 12 ? 'PM' : 'AM');

		// 1초마다 함수 호출
		let nextTick = 1000 - (now.getTime() % 1000);
		setTimeout(updateClock, nextTick);
	}

	updateClock();
})(jQuery);
