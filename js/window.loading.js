(function ($) {
    'use strict';
    $('body').append(
        $('<div>', {'class' : 'loader-bg'}).append(
            $('<div>', {'class' : 'loader-wrap'}).append(
                $('<div>', {'class' : 'loader'})
            )
        )
    );
    window.onload = function () { $('.loader-bg').addClass('done'); };
})(jQuery);
