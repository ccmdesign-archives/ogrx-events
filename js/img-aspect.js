// find aspect ratio of images and apply classes

$(function () {
    // options
    var cssString = 'img';  // css search string used to select desired images
    var threshold = 0;  // additional +/- to the aspect ratio (normally 1) required before switching from landscape to portrait

    // check the aspect ratio of each image to see whether to use contain or cover for background-size
    $(cssString).each(function() {
        var $e = $(this);
        var src = $(this).attr('src');
        var img = new Image();

        // handler to apply class when image fully loaded
        $(img).on('load', function(){
            var ar = img.width / img.height;
            if (ar >= 1 + threshold) {
                $e.addClass( 'landscape' );
            } else {
                $e.addClass( 'portrait' );
            }
        });

        // set image src after handler is set up, otherwise handler never gets called
        img.src = src;
    });

});