$(function() {
    $(".hamburger").on('click', () => {
        $('.hamburger').toggleClass('_active-button');
        $('body').toggleClass('of-hidden');
        $('.header .navigation').toggleClass('_active-menu');
    });
})