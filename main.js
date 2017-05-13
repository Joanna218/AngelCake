$(document).ready(function () {
  var fixed = false;
  var six_to_dream_pos = 0;
  var cooperative_pos = $('.cooperative_wrapp').offset().top;

  $(window).scroll(function () {
    var pos = $(window).scrollTop();
    if (!fixed && pos > 275) {
      $('.menu').addClass('fixed');
      fixed = true;
    }
    if (fixed && pos < 275) {
      $('.menu').removeClass('fixed');
      fixed = false;
    }
    if (pos >= cooperative_pos - 50 && pos < 2200) {
      $('#cooperative').addClass('focus');
    } else {
      $('#cooperative').removeClass('focus');
    }
  });

  $('#six_to_dream').on('click', function () {
    $('html, body').animate({ scrollTop: six_to_dream_pos }, 500);
  });
  $('#cooperative').on('click', function () {
    $('html, body').animate({ scrollTop: cooperative_pos - 50 }, 500);
  });
});

