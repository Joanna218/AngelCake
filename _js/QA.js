$(function () {
  var href = $(".nav>div>ul>li:has(ul)>a").attr('href');
  $(".nav>ul>li:has(ul)>a").after('<a href="' + href + '"" class="menu-plus">+</a>');//第二層
  $(".nav>ul>li>ul>li:has(ul)>a").after('<a href="' + href + '"" class="menu-plus">+</a>');//第三層
  $(".nav>#nav-btn").click(function () {
    $(".nav>ul").slideToggle();
    return false;
  });
  $('.menu2>li>.menu-plus').on('click', function () {
    $(this).text(function (i, v) {
      if (v === '-' || v === '+') {
        return v === '-' ? '+' : '-';
      }
    })
    $(this).next('.sub-menu').slideToggle();
    return false;
  });
  $('.sub-menu>li>a').on('click', function () {
    var self = !!$(this).next('.sub-menu').length ? $(this) : $($(this).next('a'));
    self.text(function (i, v) {
      if (v === '-' || v === '+') {
        return v === '-' ? '+' : '-';
      }
    })
    self.next('.sub-menu').slideToggle();
    return false;
  });
})