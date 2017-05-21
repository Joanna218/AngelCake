$(document).ready(function () {
  $('#enter').on('mouseenter', function () {
    $('#img_mask').addClass('active');
    $('#img_mask_center').addClass('active');
  });
  $('#enter').on('mouseleave', function () {
    $('#img_mask').removeClass('active');
    $('#img_mask_center').removeClass('active');
  });
});
