$(function () {
  'use strict';
  $(window).on('load', function (e) {
    $('.preloader').delay(500).fadeOut(500);
  });
  var e = document.querySelector('.headroom');
  new Headroom(e).init(),
    $('#nav').onePageNav({
      currentClass: 'active',
      changeHash: !0,
      scrollSpeed: 800,
      scrollThreshold: 0.5,
      filter: '',
      easing: 'swing',
      begin: function () {},
      end: function () {},
      scrollChange: function (e) {},
    }),
    $.scrollIt({ scrollTime: 800 }),
    $('.navbar-nav a').on('click', function () {
      $('.navbar-collapse').removeClass('show');
    }),
    $('.navbar-toggler').on('click', function () {
      $(this).toggleClass('active');
    }),
    $('.navbar-nav a').on('click', function () {
      $('.navbar-toggler').removeClass('active');
    });
  var r = $('.sub-menu-bar .navbar-nav .sub-menu');
  if (r.length) {
    r.parent('li')
      .children('a')
      .append(function () {
        return '<button class="sub-nav-toggler"> <span></span> </button>';
      });
    $('.sub-menu-bar .navbar-nav .sub-nav-toggler').on('click', function () {
      return $(this).parent().parent().children('.sub-menu').slideToggle(), !1;
    });
  }
  $('.counter').counterUp({ delay: 10, time: 3e3 }),
    $('.container').imagesLoaded(function () {
      var e = $('.grid').isotope({
        transitionDuration: '1s',
        itemSelector: '.grid-item',
        percentPosition: !0,
        masonry: {},
      });
      $('.project-menu ul').on('click', 'li', function () {
        var r = $(this).attr('data-filter');
        e.isotope({ filter: r });
      }),
        $('.project-menu ul li').on('click', function (e) {
          $(this).siblings('.active').removeClass('active'),
            $(this).addClass('active'),
            e.preventDefault();
        });
    }),
    $(window).on('scroll', function (e) {
      $(this).scrollTop() > 600
        ? $('.back-to-top').fadeIn(200)
        : $('.back-to-top').fadeOut(200);
    }),
    $('.back-to-top').on('click', function (e) {
      e.preventDefault(), $('html, body').animate({ scrollTop: 0 }, 1500);
    }),
    $('.our-services-progress').length &&
      $('.our-services-progress').appear(function () {
        Circles.create({
          id: 'circles-1',
          radius: 50,
          value: 95,
          maxValue: 100,
          width: 3,
          text: function (e) {
            return e + '%';
          },
          colors: ['#f0f0f0', '#f14836'],
          duration: 1e3,
          wrpClass: 'circles-wrp',
          textClass: 'circles-text',
          styleWrapper: !0,
          styleText: !0,
        });
      }),
    $('.our-services-progress').length &&
      $('.our-services-progress').appear(function () {
        Circles.create({
          id: 'circles-2',
          radius: 50,
          value: 85,
          maxValue: 100,
          width: 3,
          text: function (e) {
            return e + '%';
          },
          colors: ['#f0f0f0', '#f14836'],
          duration: 1e3,
          wrpClass: 'circles-wrp',
          textClass: 'circles-text',
          styleWrapper: !0,
          styleText: !0,
        });
      }),
    $('.our-services-progress').length &&
      $('.our-services-progress').appear(function () {
        Circles.create({
          id: 'circles-3',
          radius: 50,
          value: 75,
          maxValue: 100,
          width: 3,
          text: function (e) {
            return e + '%';
          },
          colors: ['#f0f0f0', '#f14836'],
          duration: 1e3,
          wrpClass: 'circles-wrp',
          textClass: 'circles-text',
          styleWrapper: !0,
          styleText: !0,
        });
      }),
    $('.our-services-progress').length &&
      $('.our-services-progress').appear(function () {
        Circles.create({
          id: 'circles-4',
          radius: 50,
          value: 70,
          maxValue: 100,
          width: 3,
          text: function (e) {
            return e + '%';
          },
          colors: ['#f0f0f0', '#f14836'],
          duration: 1e3,
          wrpClass: 'circles-wrp',
          textClass: 'circles-text',
          styleWrapper: !0,
          styleText: !0,
        });
      }),
    $('.testimonial-active').slick({
      dots: !1,
      arrows: !0,
      prevArrow: '<span class="prev"><i class="lni-arrow-left"></i></span>',
      nextArrow: '<span class="next"><i class="lni-arrow-right"></i></span>',
      infinite: !0,
      autoplaySpeed: 5e3,
      speed: 800,
      slidesToShow: 1,
    }),
    new WOW().init();
});
