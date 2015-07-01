//Lightbox overlay effect

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
//var $caption = $("<p></p>");


$overlay.append($image);

//A caption to overlay
//$overlay.append($caption);

$("body").append($overlay);

$(".photo a").click(function (event) {
    event.preventDefault();
    var href = $(this).attr("href");
    var imageLocation = $(this).attr("href");
    $image.attr("src", imageLocation);
    $overlay.show();
});
    
//When overlay is clicked
$overlay.click(function(){
  $overlay.hide();
});
