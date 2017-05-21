$(document).ready(function () {
  var fixed = false;
  var six_to_dream_pos = 0;
  var cooperative_pos = $('.product_wrapp').offset().top;
  var origin_pos = $('#origin_wrapp').offset().top;
  var about_pos = $('.build_wrapp').offset().top;
  var online_pos = $('.online_wrapp').offset().top;

  $(window).scroll(function () {
    var pos = $(window).scrollTop();
    if (!fixed && pos > 800) {
      $('.menu').addClass('fixed');
      fixed = true;
    }
    if (fixed && pos <800) {
      $('.menu').removeClass('fixed');
      fixed = false;
    }
    if (pos >= cooperative_pos - 50 && pos < 2200) {
      $('#cooperative').addClass('focus');
      $('.item1').addClass('item_border');
    } else {
      $('#cooperative').removeClass('focus');
      $('.item1').removeClass('item_border');
    }

    if (pos >= origin_pos - 50 && pos < 3000) {
      $('#origin').addClass('focus');
      $('.item1').addClass('item_border');
    } else {
      $('#origin').removeClass('focus');
      $('.item1').removeClass('item_border');
    }
  });

  $('#six_to_dream').on('click', function () {
    $('html, body').animate({ scrollTop: six_to_dream_pos }, 500);
  });
  $('#cooperative').on('click', function () {
    $('html, body').animate({ scrollTop: cooperative_pos - 50 }, 200);
  });
  $('#origin').on('click', function () {
    $('html, body').animate({ scrollTop: origin_pos - 50 }, 200);
  });
  $('#about').on('click', function () {
    $('html, body').animate({ scrollTop: about_pos - 50 }, 200);
  });
  $('#online').on('click', function () {
    $('html, body').animate({ scrollTop: online_pos - 50 }, 200);
  });
});

