$(document).ready(function () {

    $(function() {
        function slideMenu() {
          var activeState = $(".container-menu .menu-list").hasClass("active");
          $(".container-menu .menu-list").animate({left: activeState ? "0%" : "-100%"}, 400);
        }
        $("#menu-wrapper").click(function(event) {
          event.stopPropagation();
          $("#hamburger-menu").toggleClass("open");
          $(".container-menu .menu-list").toggleClass("active");
          slideMenu();
      
          $("body").toggleClass("overflow-hidden");
        });

    });

    posisitionMenu();
 
    $(window).scroll(function() {
        posisitionMenu();
    });
    
    function posisitionMenu() {
        var header_height = $('#header').outerHeight(true);
        var menu_height = $('#header').outerHeight(true);
    
        if ($(window).scrollTop() >= header_height){
            $('#header').addClass('fixed');
            $('.portada').css('margin-top', (menu_height) + 'px');
        } else {
            $('#header').removeClass('fixed');
            $('.portada').css('margin-top', '0');
        }
    }

    $(function() {
        $(document).on('click', 'a.page-scroll', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top-71
            }, 900, 'easeInOutExpo');
            event.preventDefault();
        });
    });


});


