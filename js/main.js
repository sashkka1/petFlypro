var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
}); 
// плавная прокрутка к якорю

$(window).on('scroll', function() {
    if ($(this).scrollTop() > 100) {
        $('#scroll-to-top').fadeIn();
    } else {
        $('#scroll-to-top').fadeOut();
    }
});
// появление/исчезновение кнопки подъема справа внизу

$(window).on('scroll', function() {
    if ($(this).scrollTop() > 10) {
        $("#header-true").css({ 
            boxShadow : "0px 16px 28px 0px rgba(0, 0, 0, 0.05)",
            backgroundImage: "linear-gradient(-180deg,#1e9df7 0%,#1392ed 100%)",
        });
    } else {
        $("#header-true").css({ 
            boxShadow : "0 0 0 0 ",
            backgroundImage: "none",
        });
    }
});
// изменение внешности хедера(прозрачность)

$(window).on('scroll', function() {
    if ($(this).scrollTop() > 10) {
        $("#header-tru").css({ 
            transition: "0.4s",
            height: "69px",
        });
    } else {
        $("#header-tru").css({ 
            transition: "0.4s",
            height: "84px",
        });
    }
});
// изменение внешности хедера(его высота, нужен потомучто меню отцентровано чуток коряво)


$(document).ready(function(){
    $('.slider-gallery').slick({
        slidesToShow: 2,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 3500,
        lazyLoad: 'ondemand',
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});
// настройка слайдера с фотками сделанными с дрона

$(document).ready(function(){
    $('.slider-dron-sell').slick({
        slidesToShow: 4,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 3500,
        lazyLoad: 'ondemand',
        responsive: [
            {
                breakpoint: 1140,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 560,
                settings: {
                    slidesToShow: 1
                }
            
            }
        ]
    });
});
// настройка слайдера с продажей дронов


$(document).ready(function(){
    $('.slider-opinion').slick({
        slidesToShow: 1,
        arrows: false,
        adaptiveHeight: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 800,
        lazyLoad: 'ondemand'
    });
});
// настройка слайдера с фотками сделанными с дрона

document.getElementById('open').addEventListener('click', function(){
    let x = document.getElementById('overplay');
    if (x.style.opacity == "1"){
        x.style.opacity = "0";
        x.style.top = "-230px";
    } else {
        x.style.opacity = "1";
        x.style.top = "34px";
    };
});
// выпадающее меню бургер при маленьком разрешении