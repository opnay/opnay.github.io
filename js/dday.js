(function ($) {
    var today = new Date(),
        sday = new Date('Dec 8, 2015'),
        dday = new Date('Sep 7, 2017'),
        ytime = 24 * 60 * 60 * 1000, // milliseconds of year
        r_dday = Math.ceil((dday.getTime() - today.getTime()) / ytime),
        c_dday = Math.ceil((dday.getTime() - sday.getTime()) / ytime);
        
    var $progress = $('.progress'),
        $progress_bar = $progress.find('.progress-bar'),
        $progress_text = $progress.find('.progress-text');    
    
    $progress_text.text('제대일까지 D' + ((r_dday <= 0) ? '+' : '') + (-r_dday) + '(' + Math.round(((c_dday - r_dday) / c_dday) * 10000)/100 + '%)');
    $progress_bar.css('width', ((r_dday <= 0) ? 100 : ((c_dday - r_dday) / c_dday) * 100) + '%');
}(jQuery));
