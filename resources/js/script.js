$(document).ready(function () {


    /* For sticky navigation*/
    $('.js--section-features').waypoint(function (direction) {
            if (direction == "down") {
                $('nav').addClass('sticky');
            } else {
                $('nav').removeClass('sticky');
            }

        },

        {
            offset: '60px;'
        });




    /* Scroll on buttons */
    $('.js--scroll-to-plans').click(function () {
        $('html,body').animate({
            scrollTop: $('.js--section-plans').offset().top
        }, 1000);
    });

    $('.js--scroll-to-start').click(function () {
        $('html,body').animate({
            scrollTop: $('.js--section-features').offset().top
        }, 1000);
    });





    /* Navigation scroll */
    $(function () {
        $('a[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });

    /*  Animation on scroll    */
    $('.js--wp-1').waypoint(function (direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });


    $('.js--wp-2').waypoint(function (direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });


    $('.js--wp-3').waypoint(function (direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    $('.js--wp-4').waypoint(function (direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%'
    });

    $('.js--nav-icon').click(function () {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        nav.slideToggle(200);

        if (icon.hasClass('ion-android-menu')) {
            icon.addClass('ion-android-close');
            icon.removeClass('ion-android-menu');
        } else {
            icon.addClass('ion-android-menu');
            icon.removeClass('ion-android-close');
        }

    });
    /* Maps  - https://hpneo.github.io/gmaps/examples/markers.html*/
        var map=new GMaps({
      div: '.map',
      lat: 34.0452318,
      lng: -118.43,
            zoom:14
            
    });
    
    map.addMarker({
  lat: 34.0452318,
  lng: -118.4614356,
  title: 'West Los Angeles',
  infoWindow: {
  content: '<p>West Los Angeles</p>'

  }
});

    

});