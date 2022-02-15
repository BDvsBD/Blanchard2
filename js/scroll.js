type = "text/javascript" >
  $(document).ready(function () {
    $("#menu").on("click", "a", function (event) {
      event.preventDefault();
      var id = $(this).attr('href'),
        top = $(id).offset().top;
      $('body,html').animate({
        scrollTop: top
      }, 1500);
    });
  });
$(function () {
  $('.link-gallery').on('click', function (e) {
    $('html,body').stop().animate({
      scrollTop: $('#gallery').offset().top
    }, 1500);
    e.preventDefault();
  });
});

$(function () {
  $('.hero__btn').on('click', function (event2) {
    $('html,body').stop().animate({
      scrollTop: $('#footer').offset().top
    }, 1500);
    event2.preventDefault();
  });
});
