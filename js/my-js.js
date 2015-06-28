/*global $ */
//// Masonry grid  
//
$(document).ready(function () {
    var $container = $('.container');
    
    if ($(window).width() >= 767) {
        $container.imagesLoaded(function () {
            $container.masonry({
                itemSelector        : '.photo',
                columnWidth         : '.photo',
                transitionDuration  : 0
            });
        });
    }
});
