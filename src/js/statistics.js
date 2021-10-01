$(function() {
    const increaseNumber = (selector, value) => {
        $({value: 0}).animate({value: value}, {
            duration: 1000,
            easing: 'swing',
            step: function() { 
                $(`${selector}`).text( value % 1 === 0 ? Math.ceil(this.value) : Math.floor(this.value * 10) / 10); 
            },
            done: function() {
                $(`${selector}`).text(value); 
           }
        });
    }

    if($('#claims-free')) {
        let counter = 0;
        const target = $('.statistics');
        const targetPosition = target.offset().top;
        const windowHeight = $(window).height();
        const scrollToElement = targetPosition - windowHeight;
        $(window).scroll(function() {
            const windowScrollTop = $(this).scrollTop();
            if (counter === 0 && windowScrollTop > scrollToElement + 100) {
                increaseNumber('#claims-free', 99.9);
                increaseNumber('#delivery', 99.5);
                increaseNumber('#retention', 99.7);
                increaseNumber('#open', 365);
                counter = 1;
            }
        })
    }
})