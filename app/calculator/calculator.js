(function ($) {
	// Find Elements
	e_equa = $('.equation');
	e_rst = $('.result');
	e_btn = $('.btn');
	
	// Equation Fragment
	e_equa.chkLastChar = function () {
		last_char = this.lastChar();
		return (last_char === undefined ||
				last_char == "+" || last_char == "-" ||
				last_char == "✕" || last_char == "÷" ||
				last_char == "%") ? true : false;
	};
	e_equa.lastChar = function () {return this.text()[this.text().length - 1];};
	e_equa.update = function (e) {
		e_equa.text(e);
		e_rst.reset();
		if(e_equa.finish()) {
			e_equa.animate({scrollTop : e_equa.prop("scrollHeight") },250);
		}
	};
	e_equa.add = function (a) {e_equa.update(e_equa.text() + a);};

	// Result Fragment
	e_rst.reset = function () {
		$this = $(this);
		if ($this.text() != "= ")
			$this.text("= ");
	};
	e_rst.eval = function () {
		// Must end with number.
		if (e_equa.chkLastChar())
			return;
		
		result = eval(e_equa.text().replace(/✕/g, '*').replace(/÷/g, '/'));
		return e_rst.text("= " + result);
	};
	
	// Number Input
	e_btn.filter('.num').click(function () {
		val = $(this).text();

		e_equa.add(val);
	});
	
	// Operator Input
	e_btn.filter('.oper').click(function () {
		val = $(this).text();
		
		if (e_equa.chkLastChar())
			return;
		
		e_equa.add(val);
	});
	
	// Function Input
	e_btn.filter('.func').click(function () {
		val = $(this).text();
		
		if (val == "CE" || val == "C") {
			e_equa.update("");
		}
		
		return;
	});
	
	// Result Input
	e_btn.filter('.equal').click(e_rst.eval);
	
	$(window).keydown(function(e) {
		console.log(e.keyCode);
		if ((e.keyCode >= 96 && e.keyCode <= 105) || //NumberPad
		   (e.keyCode >= 48 && e.keyCode <=57)) { // Top Number
			value = (e.keyCode >= 96) ? e.keyCode - 96 : e.keyCode - 48;
			e_equa.add(value);
		} else if (e.keyCode == 8) { // Back Space
			a = e_equa.text();
			e_equa.update(a.substring(0, a.length - 1));
		} else if (e.keyCode == 13) { // Enter
			e_rst.eval();
		} else if (e.keyCode == 27) { // ESC
			e_rst.update("");
		}
	});

})(jQuery);