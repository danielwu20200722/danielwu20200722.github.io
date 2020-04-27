var swiper1 = new Swiper('.js-swiper1', {
    slidesPerView: 1,
    centeredSlides: true,
    autoplay: {
        delay: 2000,
    },
    observer: true,
    observeParents: true,
});
var swiper2 = new Swiper('.js-swiper2', {
    slidesPerView: 1,
    centeredSlides: true,
    autoplay: {
        delay: 1000,
    },
    observer: true,
    observeParents: true,
});
var swiper3 = new Swiper('.js-swiper3', {
    slidesPerView: 1,
    centeredSlides: true,
    autoplay: {
        delay: 1000,
    },
    observer: true,
    observeParents: true,
});
$(document).ready(function () {
    var bannerText = $('.js-bannerText'),
        contentText = $('.js-contentText .letters'),
        innerHeight = $(window).innerHeight(),
        headerHight = $('.header').height(),
        bodyHeight = $('body').height(),
        windowWidth = $(window).width();
    $('.header').addClass('show');
    $('.js-slide').css('height', innerHeight);
    AOS.init({
        duration: 600
    });
    bannerText.each(function () {
        var $this = $(this);
        $this.html($this.text().replace(/\S/g, "<span class='letter'>$&</span>"))
    });
    contentText.html(contentText.text().replace(/\S/g, "<span class='letter'>$&</span>"));
    anime.timeline().add({
        targets: '.js-bannerText1 .letter',
        opacity: [0, 1],
        easing: "easeInOutQuad",
        duration: 750,
        delay: (el, i) => 150 * (i + 1)
    });
    anime.timeline().add({
        targets: '.js-bannerText2 .letter',
        translateX: [80, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 300,
        delay: (el, i) => 500 + 100 * i,
    });
    anime.timeline().add({
        targets: '.js-bannerText3 .letter',
        translateX: [80, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 300,
        delay: (el, i) => 750 + 100 * i,
    });
    anime.timeline().add({
        targets: '.js-bannerText4 p',
        scale: [14, 1],
        opacity: [0, 1],
        easing: "easeOutCirc",
        duration: 300,
        delay: (el, i) => 1000 + 500 * i
    });
    anime.timeline({
            loop: true
        })
        .add({
            targets: '.js-contentText .line',
            scaleX: [0, 1],
            opacity: [0.5, 1],
            easing: "easeInOutExpo",
            duration: 900
        }).add({
            targets: '.js-contentText .letter',
            opacity: [0, 1],
            translateX: [40, 0],
            translateZ: 0,
            scaleX: [0.3, 1],
            easing: "easeOutExpo",
            duration: 800,
            offset: '-=600',
            delay: (el, i) => 150 + 25 * i
        }).add({
            targets: '.js-contentText',
            opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000
        });
    $('#menuBtn').on('click', function () {
        $('.js-innerContent').slideToggle();
    });
    $('.js-innerContent a').on('click', function () {
        $('.js-innerContent').slideToggle();
    });
    $('.js-map').on('click', function () {
        window.open('https://goo.gl/maps/2XxTZvogMLmR44xF8', '遠通租賃');
    });
    $('.js-hash').on('click', function () {
        var type = $(this).attr('data-type'),
            offset = $('.content').find('#' + type).offset(),
            scrollto = offset.top - headerHight;
        $('html, body').animate({
            scrollTop: scrollto
        }, 0);
    });
    $('.js-contact').on('click', function () {
        $('html, body').animate({
            scrollTop: bodyHeight
        }, 0);
    });
    if (windowWidth < 768) {
        $('.js-hash').on('click', function () {
            var type = $(this).attr('data-type'),
                offset = $('.content').find('#' + type).offset(),
                scrollto = offset.top;
            $('html, body').animate({
                scrollTop: scrollto
            }, 0);
        });
    }
});