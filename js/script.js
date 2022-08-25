$(document).ready(function () {
    // Slider
    $(".banner").slick({
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    // Mobile menu
    $('.header__menu-btn').click(function() {
        if ($('.header__menu').hasClass('opened')) {
            $('.header__menu').removeClass('opened');
        } else {
            $('.header__menu').addClass('opened');
        }
    });

    // Show all services
    if ($(".service__list")) {
        var list = $(".service__list .service__item");
        var numStart = 6;
        var button = $(".service__button");
        var numInList = list.length;
        list.hide();
        if (numInList > numStart) {
            button.show();
        }
        list.slice(0, numStart).show();
        if (numStart >= numInList) {
            button.hide();
        }
        button.click(function () {
            list.slice(numStart - 1, numInList).show();
            button.hide();
        });
    }
});