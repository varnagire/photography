
//// Masonry grid  
//
$(document).ready(function(){
  var $container = $('.container');

  $container.imagesLoaded( function() {
    $container.masonry({
      itemSelector        : '.photo',
      columnWidth         : '.photo',
      transitionDuration  : 0
    });
  });
});

