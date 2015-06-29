/*global $ */
//// Masonry grid  
//
$(document).ready(function () {
    var $container = $('#masonry');
    
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

