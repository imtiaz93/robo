$(function () {
    //Robotics Research STARTS
    $('.slick_class').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
    });

    // Our Events STARTS
    $('.slide_it').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: false,
    });

    // gallery Part starts
    $(document).ready(function () {
        $('.gall_venobox').venobox();
    });

    // Menu Fix
    var navoff = $(".main_menu").offset().top;
    // alert(navoff);
    $(window).on("scroll", function () {
        var scrolling = $(this).scrollTop();
        if (scrolling > navoff) {
            $(".main_menu").addClass("menu_fix");
        } else {
            $(".main_menu").removeClass("menu_fix");
        }
    });


});