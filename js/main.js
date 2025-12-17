$(document).ready(function() {
    console.log("Сайт кафедри завантажено успішно");

    $(".burger-menu button").on('click', function () {
        $(".main-menu").toggleClass('show');
    });

    $(".lang-wrapper .lang-link").on('click', function (event) {
        event.preventDefault();
        $(".lang-wrapper .lang-link").removeClass('is-active');
        $(".lang-wrapper li").removeClass('is-active');
        $(this).addClass('is-active');
        $(this).parent().addClass('is-active');
    });

    const $slickElement = $('#news .news-cards');

    if ($slickElement.length) {
        $slickElement.slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '0px',
            cssEase: 'ease-in-out',
            prevArrow: "<button type='button' class='slick-prev'>←</button>",
            nextArrow: "<button type='button' class='slick-next'>→</button>",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: { slidesToShow: 3 }
                },
                {
                    breakpoint: 992,
                    settings: { slidesToShow: 2 }
                },
                {
                    breakpoint: 576,
                    settings: { slidesToShow: 1 }
                }
            ]
        });
    }
});