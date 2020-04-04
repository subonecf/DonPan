$(document).ready(function () {
    $("#btn-toogle").on("click", function () {
        $(".content2").slideToggle();
    });
    $("#btn-toogle2").on("click", function () {
        $(".content3").slideToggle();
    });
    $("#btn-toogle3").on("click", function () {
        $(".content4").slideToggle();
    });

    $(function() {
        function slideMenu() {
          var activeState = $(".container-menu .menu-list").hasClass("active");
          $(".container-menu .menu-list").animate({left: activeState ? "0%" : "-150%"}, 400);
        }
        $("#menu-wrapper").click(function(event) {
          event.stopPropagation();
          $("#hamburger-menu").toggleClass("open");
          $(".container-menu .menu-list").toggleClass("active");
          slideMenu();
      
          $("body").toggleClass("overflow-hidden");
        });

    });

   
    

});


