// 自行加入的JS請寫在這裡
$(function() {
  // 首頁輪播
  $('.mpSlider').slick({
    mobileFirst: true,
    dots: true,
    arrow: false,
    infinite: true,
    speed: 500,
    autoplay: false,
    fade: true,
    lazyLoaded: true,
    lazyLoad: 'ondemand',
    ease: 'ease',
    customPaging: function(slider, i) {
      return $('<button type="button" />').text($(slider.$slides[i]).find('img').attr('alt').trim());
    }
  });
  $('.albumSlider').slick({
    mobileFirst: true,
    dots: true,
    arrow: false,
    infinite: true,
    speed: 500,
    autoplay: false,
    fade: true,
    lazyLoaded: true,
    lazyLoad: 'ondemand',
    ease: 'ease',
    customPaging: function(slider, i) {
      return $('<button type="button" />').text($(slider.$slides[i]).find('img').attr('alt').trim());
    }
  });
  $('.bannerSlider').slick({
    mobileFirst: true,
    dots: true,
    arrow: false,
    infinite: true,
    speed: 500,
    autoplay: false,
    fade: true,
    lazyLoaded: true,
    lazyLoad: 'ondemand',
    ease: 'ease',
    customPaging: function(slider, i) {
      return $('<button type="button" />').text($(slider.$slides[i]).find('img').attr('alt').trim());
    }
  });
  $('.videoSlider').slick({
    mobileFirst: true,
    dots: false,
    arrow: false,
    infinite: true,
    speed: 500,
    autoplay: false,
    fade: true,
    lazyLoaded: true,
    lazyLoad: 'ondemand',
    ease: 'ease',
    customPaging: function(slider, i) {
      return $('<button type="button" />').text($(slider.$slides[i]).find('img').attr('alt').trim());
    }
  });
  // 廣告輪播
  $('.adSlider').slick({
    mobileFirst: true,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    arrow: true,
    lazyLoaded: true,
    lazyLoad: 'ondemand',
    ease: 'ease',
    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true
      }
    }, {
      breakpoint: 575,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true
      }
    }]
  });
  //燈箱slick+lightBox組合
  $('.cp_slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    pauseOnFocus: true,
    focusOnSelect: true,
    accessibility: true,
    lazyLoad: 'ondemand',
    ease: 'ease',
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    }, {
      breakpoint: 545,
      settings: {
        arrows: true,
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }, {
      breakpoint: 480,
      settings: {
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    }]
  });
  $('.cp_slider').slickLightbox({
    caption: 'caption',
    lazyLoad: 'ondemand',
    useHistoryApi: 'true',
    ease: 'ease',
    lazy: true
  });
  //
  $('.cppic_slider').slick({
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1500,
    // pauseOnHover: true,
    // pauseOnFocus: true,
    // focusOnSelect: true,
    // accessibility: true,
    // lazyLoad: 'ondemand',
    // ease: 'ease',
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    }, {
      breakpoint: 545,
      settings: {
        arrows: true,
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }, {
      breakpoint: 480,
      settings: {
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    }]
  });

  // cp_photo
  $('.Slider-for').on('init reInit afterChange', function(event, slick, currentSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $('.controls').html(i + '/' + slick.slideCount);
  });
  $('.Slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    swipe: false,
    swipeToSlide: false,
    lazyLoad: 'ondemand',
    asNavFor: '.Slider-nav',
    infinite: true
  });
  $('.Slider-nav').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    asNavFor: '.Slider-for',
    dots: true,
    arrows: true,
    lazyLoad: 'ondemand',
    focusOnSelect: true,
    infinite: true
  });

});
$(".adSearch_btn").click(function(e) {
  $(".adSearch_form").slideToggle();
  e.preventDefault();
});
$(".adSearch_form .btn_grp button:last-child").focusout(function(e) {
  $(".adSearch_form").slideUp();
});
$(function() {
  $('.list_qa>ul>li').each(function() {
    $(this).find('.list_a').hide();
    var _qaItem = $(this).children('.list_q').children('a');
    // var _scrollTop= $(this).offset().top - 55;
    _qaItem.each(function() {
      function qa(e) {
        // $('html, body').stop(true, true).animate({ scrollTop: _scrollTop }, 800, 'easeOutExpo');
        $(this).parents('li').siblings().children('.list_q').children('a').removeClass('active');
        $(this).toggleClass('active');
        $(this).parents('li').siblings().children('.list_a').slideUp();
        $(this).parents('.list_q').next('.list_a').slideToggle();
        e.preventDefault();
      }
      $(this).click(qa);
      $(this).keyup(qa);
    });
  });
});

function openuni() {
  $('body').addClass('noscroll');
  $('.topUnits').fadeIn(600, 'easeOutQuart');
}

function closeuni() {
  $('body').removeClass('noscroll');
  $('.topUnits').fadeOut(600, 'easeOutQuart');
}
$('.topUnits .close a').click(function(e) {
  closeuni();
  e.preventDefault();
});

$('.topUnits .container>ul>li:last-child>ul>li:last-child a').focusout(function() {
  closeuni();
});
$('.navDep>a').click(function(e) {
  e.preventDefault();
  openuni();
});
// $(".topAlert>ul>li.alert>a").addClass("active");
// $(".topAlert>ul>li.alert .alertBlock").addClass("active");

$(".topAlert>ul>li>a").click(function(e) {
  $(".topAlert>ul>li>a").removeClass("active");
  $(".topAlert .alertBlock").removeClass("active");
  $(this).toggleClass("active");
  $(this).next(".alertBlock").toggleClass("active");
  e.preventDefault();
});
$(".topAlert>ul>li a.alertClose").click(function() {
  $(".topAlert>ul>li>a").removeClass("active");
  $(".topAlert .alertBlock").removeClass("active");
  e.preventDefault();
});
$(window).bind('scroll resize', function() {
  var $window_top = $(window).scrollTop();
  var $linkBlock_w = $(".linkBlock").width();
  if ($window_top > 160) {
    $('.linkBlock').css({ "top": "90px" }).stop().animate({ right: -($linkBlock_w - 40) + "px" }, 600);
    $(".linkBlock").hover(function() {
      $(".linkBlock").stop().animate({ right: 0 }, 600);
    }, function() {
      $(".linkBlock").stop().animate({ right: -($linkBlock_w - 40) + "px" }, 600);
    });
  } else {
    $('.linkBlock').css({ "top": "250px" }).stop().animate({ right: 0 }, 600);
  }
});

$(".openliveVideo").click(function(e) {
  $(".liveVideo").fadeIn();
  $("body").addClass("noscroll");
  e.preventDefault();
});
$(".videoClose").click(function(e) {
  $(".liveVideo").fadeOut();
  $("body").removeClass("noscroll");
  e.preventDefault();
});
$(".serviceBlock .service>a").click(function(e) {
  $(".serviceBlock .service_detail").removeClass("active");
  $(this).parent(".service").next(".service_detail").toggleClass("active");
  e.preventDefault();
});
$(".statisticsBlock ul li a.statistics").click(function(e) {
  $(".chart").hide();
  $("a.statistics").removeClass("active");
  $(this).addClass("active").next(".chart").fadeIn();
  e.preventDefault();
});