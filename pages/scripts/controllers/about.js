'use strict';

angular.module('mallowtechApp')
    .controller('AboutCtrl', function ($scope, $state, $rootScope, $window) {
          $('.slider')
          .mouseenter(function() {
            $( "button", this ).css("visibility", "visible");
          })
          .mouseleave(function() {
            $( "button", this ).css("visibility", "hidden");
          })
          .slick({
            dots: false,
            speed: 300,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 6000,
            centerMode: true,
            centerPadding: '175px',
            slidesToShow: 1,
            responsive: [
                {breakpoint:992,
                    settings: {
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        centerMode: true,
                        slidesToShow: 1,
                        arrows: true
                    }
                },
                {
                    breakpoint: 650,
                    settings:{
                        centerMode:true,
                        slidesToShow: 1,
                        arrows:true
                    }
                },
                {
                    breakpoint: 436,
                    settings: {
                        centerMode: false,
                        arrows: true,
                        slidesToShow: 1
                    }
                }
            ]
        });
    });
