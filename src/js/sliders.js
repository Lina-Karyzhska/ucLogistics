const getNumber = (number) => {
    return number > 9 ? number : `0${number}`
}

$(function() {
    $('.main-slider').on('init', function(event, slick) {
        const amountBlock = document.querySelector('#main-slider-amount');
        amountBlock.textContent = getNumber(slick.slideCount);
      });

    $('.main-slider').slick({
        lazyLoad: 'ondemand',
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        zIndex: 0,
        dots: true,
        appendDots: '#main-slider__dots',
        dotsClass: 'main-slider__dots-list',
        asNavFor: '.main-slider__text-slider'
    });

    $('.main-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        const counterBlock = document.querySelector('#main-slider-counter');
        const amountBlock = document.querySelector('#main-slider-amount');
        counterBlock.textContent = getNumber(nextSlide + 1);
        amountBlock.textContent = getNumber(slick.slideCount);
      });

    $('.main-slider__text-slider').slick({
        lazyLoad: 'ondemand',
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        zIndex: 0,
        dots: false,
        asNavFor: '.main-slider'
    });

    $('.gallery-slider__wrapper').on('init', function(event, slick) {
        const amountBlock = document.querySelector('#gallery-slider-amount');
        amountBlock.textContent = getNumber(slick.slideCount);
      });

    $('.gallery-slider__wrapper').slick({
        lazyLoad: 'ondemand',
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        dots: false,
        variableWidth: true,
        appendArrows: '#gallery-slider__arrows',
        nextArrow: `
            <button class="gallery-slider__arrow_svg_wrapper">
                <svg class="gallery-slider__arrow gallery-slider__arrow_svg gallery-slider__arrow_svg_no-gradient" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 5.25C0.585786 5.25 0.25 5.58579 0.25 6C0.25 6.41421 0.585786 6.75 1 6.75L1 5.25ZM23.5303 6.53033C23.8232 6.23744 23.8232 5.76256 23.5303 5.46967L18.7574 0.696699C18.4645 0.403806 17.9896 0.403806 17.6967 0.696699C17.4038 0.989592 17.4038 1.46447 17.6967 1.75736L21.9393 6L17.6967 10.2426C17.4038 10.5355 17.4038 11.0104 17.6967 11.3033C17.9896 11.5962 18.4645 11.5962 18.7574 11.3033L23.5303 6.53033ZM1 6.75L23 6.75V5.25L1 5.25L1 6.75Z"/>
                </svg>
                <svg class="gallery-slider__arrow gallery-slider__arrow_svg gallery-slider__arrow_svg_gradient" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 5.25C0.585786 5.25 0.25 5.58579 0.25 6C0.25 6.41421 0.585786 6.75 1 6.75L1 5.25ZM23.5303 6.53033C23.8232 6.23744 23.8232 5.76256 23.5303 5.46967L18.7574 0.696699C18.4645 0.403806 17.9896 0.403806 17.6967 0.696699C17.4038 0.989592 17.4038 1.46447 17.6967 1.75736L21.9393 6L17.6967 10.2426C17.4038 10.5355 17.4038 11.0104 17.6967 11.3033C17.9896 11.5962 18.4645 11.5962 18.7574 11.3033L23.5303 6.53033ZM1 6.75L23 6.75V5.25L1 5.25L1 6.75Z"/>
                </svg>
            </button>
        `,
        prevArrow: `
            <button class="gallery-slider__arrow_svg_wrapper">
                <svg class="gallery-slider__arrow gallery-slider__arrow_svg gallery-slider__arrow_svg_no-gradient" style="transform: rotate(180deg)" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 5.25C0.585786 5.25 0.25 5.58579 0.25 6C0.25 6.41421 0.585786 6.75 1 6.75L1 5.25ZM23.5303 6.53033C23.8232 6.23744 23.8232 5.76256 23.5303 5.46967L18.7574 0.696699C18.4645 0.403806 17.9896 0.403806 17.6967 0.696699C17.4038 0.989592 17.4038 1.46447 17.6967 1.75736L21.9393 6L17.6967 10.2426C17.4038 10.5355 17.4038 11.0104 17.6967 11.3033C17.9896 11.5962 18.4645 11.5962 18.7574 11.3033L23.5303 6.53033ZM1 6.75L23 6.75V5.25L1 5.25L1 6.75Z"/>
                </svg>
                <svg class="gallery-slider__arrow gallery-slider__arrow_svg gallery-slider__arrow_svg_gradient" viewBox="0 0 24 12" style="transform: rotate(180deg)" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 5.25C0.585786 5.25 0.25 5.58579 0.25 6C0.25 6.41421 0.585786 6.75 1 6.75L1 5.25ZM23.5303 6.53033C23.8232 6.23744 23.8232 5.76256 23.5303 5.46967L18.7574 0.696699C18.4645 0.403806 17.9896 0.403806 17.6967 0.696699C17.4038 0.989592 17.4038 1.46447 17.6967 1.75736L21.9393 6L17.6967 10.2426C17.4038 10.5355 17.4038 11.0104 17.6967 11.3033C17.9896 11.5962 18.4645 11.5962 18.7574 11.3033L23.5303 6.53033ZM1 6.75L23 6.75V5.25L1 5.25L1 6.75Z"/>
                </svg>
            </button>
        `,
    });
    
    $('.gallery-slider__wrapper').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        const counterBlock = document.querySelector('#gallery-slider-counter');
        const amountBlock = document.querySelector('#gallery-slider-amount');
        counterBlock.textContent = getNumber(nextSlide + 1);
        amountBlock.textContent = getNumber(slick.slideCount);
      });
})