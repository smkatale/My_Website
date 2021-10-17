$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Software Developer", ".Net Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    //Consume WebAPI OpenWeatherMap
    $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=ooltewah,chattanooga&APPID=7a93a351fad44ad6196b3cbec932c5a9", function (data) {
        
        var icon = "https://api.openweathermap.org/img/w/" + data.weather[0].icon + ".png";;

        var temp = Math.floor(data.main.temp);
        var tempKtoF = Math.floor(((temp - 273.15) * 1.8) + 32);

        var weather = data.weather[0].description;

        $(".icon").attr("src", icon);
        $(".weather").append(weather);
        $(".temp").append(tempKtoF);

    });

    var swiper = new Swiper(".swiper-container", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    //carousel script for hobbies section
    $(window).on('load', function () {
        $('.carousel').owlCarousel({
            center: true,
            margin: 20,
            loop: true,
            nav: true,
            responsiveClass: true,
            autoplay: true,
            autoplayTimeOut: 2000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1

                },
                700: {
                    items: 2

                },
                1000: {
                    items: 3

                }
            }
        });
    });

});