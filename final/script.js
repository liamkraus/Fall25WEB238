$(document).ready(function () {

  // 1️ User interaction + content change
  $('#changeTextBtn').click(function () {
    $('#introText').text('This text was updated using jQuery!');
  });

  // 2️ User-initiated animation (slide toggle)
  $('#toggleCardsBtn').click(function () {
    $('.card').slideToggle();
  });

  // 3️ User interaction (hover effect)
  $('.card').hover(
    function () {
      $(this).addClass('highlight');
    },
    function () {
      $(this).removeClass('highlight');
    }
  );

  // 4️ User-initiated animation (fade effect)
  $('#fadeBtn').click(function () {
    $('#fadeMessage').fadeToggle();
  });

  // 5️ Animation (smooth scrolling navigation)
  $('nav a, footer a').click(function (e) {
    e.preventDefault();
    const target = $(this).attr('href');
    $('html, body').animate(
      { scrollTop: $(target).offset().top },
      600
    );
  });

});
