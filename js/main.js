$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
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
