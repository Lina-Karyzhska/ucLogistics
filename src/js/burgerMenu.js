$(function() {
    $(".hamburger").on('click', () => {
        const isActive = $('.hamburger').hasClass('_active-button');
        if (isActive) {
            $('.hamburger').removeClass('_active-button');
            $('.header .navigation').removeClass('_active-menu');
            $('body').removeClass('of-hidden');
        } else {
            $('.hamburger').addClass('_active-button');
            $('.header .navigation').addClass('_active-menu');
            $('body').addClass('of-hidden');
        }
    });
})