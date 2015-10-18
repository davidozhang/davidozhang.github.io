$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

$(function($,W,D) {
     var backgroundResize = {
         init: function() {
            var update = function(e) {
                var bg = (window.innerWidth > 1024) ? 
                "/assets/img/background.jpg" 
                : "/assets/img/background-small-screen.jpg";
                $.backstretch(bg);
            };
            $(window).resize(function() {
                update();
            });
            update();
         }
     };

     $(function() {
        backgroundResize.init();
     });
})(jQuery, window, document);

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});
