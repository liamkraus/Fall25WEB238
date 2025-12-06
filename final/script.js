$(document).ready(function () {
  $('#changeTextBtn').click(function () {
    $('#introText').text('This text was updated using jQuery!');
  });

  $('#toggleCardsBtn').click(function () {
    $('.card').slideToggle();
  });

  $('.card').hover(
    function () {
      $(this).addClass('highlight');
    },
    function () {
      $(this).removeClass('highlight');
    }
  );

  $('#fadeBtn').click(function () {
    $('#fadeMessage').fadeToggle();
  });

  $('nav a, footer a').click(function (e) {
    e.preventDefault();
    const target = $(this).attr('href');
    $('html, body').animate(
      { scrollTop: $(target).offset().top },
      600
    );
  });
});
