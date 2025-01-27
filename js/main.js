(function ($) {
    "use strict";
    
    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 150) {
            $('.nav-bar').addClass('nav-sticky');
        } else {
            $('.nav-bar').removeClass('nav-sticky');
        }
    });
    
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 768) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    
    
    // Top News Slider
    $('.tn-slider').slick({
        autoplay: false,
        infinite: true,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    
    
    // Category News Slider
    $('.cn-slider').slick({
        autoplay: false,
        infinite: true,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    
    
    // Related News Slider
    $('.sn-slider').slick({
        autoplay: false,
        infinite: true,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
})(jQuery);

const pretrial=(e)=>{
    document.location.href = "./pretrial.html"
};

const smith=()=>{ document.location.href = "smith.html" };
const watt=()=>{ document.location.href = "watt.html" };
const ark=()=>{ document.location.href = "ark.html" };
const eco=()=>{ document.location.href = "eco.html" };
const ford=()=>{ document.location.href = "ford.html" };
const uni=()=>{ document.location.href = "uni.html" };
const child=()=>{ document.location.href = "child.html" };
const lud=()=>{ document.location.href = "lud.html" };
const fac=()=>{ document.location.href = "fac.html" };
const mill=()=>{ document.location.href = "mill.html" };
const marx=()=>{ document.location.href = "marx.html" };
const booth=()=>{ document.location.href = "booth.html" };
const env=()=>{ document.location.href = "env.html" };
const sam=()=>{ document.location.href = "sam.html" };