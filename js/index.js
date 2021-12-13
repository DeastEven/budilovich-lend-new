$('.burger-menu').bind('click', function () {
    $('.burger-menu').toggleClass('active')
    $('._header-nav-menu').toggleClass('active')
    $('body').toggleClass('hidden')
})

$('._nav-menu__link').bind('click', function () {
    $('._header-nav-menu').removeClass('active')
    $('body').removeClass('hidden')
    $('.burger-menu').removeClass('active')
})

$(document).ready(function () {
    var margin = 100; // переменная для контроля докрутки
    $("._nav-menu__link").click(function () { // тут пишите условия, для всех ссылок или для конкретных
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top - margin + "px" // .top+margin - ставьте минус, если хотите увеличить отступ
        }, {
            duration: 1600, // тут можно контролировать скорость
            easing: "swing"
        });
        return false;
    });
});

var swiper = new Swiper(".mySwiper", {

    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 3
        },
        480: {
            slidesPerView: 2
        },
        320: {
            slidesPerView: 1
        }
    }
});