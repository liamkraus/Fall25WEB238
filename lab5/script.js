$(document).ready(function () {

  // Slide toggle the importance section when header clicked
  $('#importance h3').click(function() {
    $('#importance ul').slideToggle();
  });

  // Highlight list items with class "highlight"
  $('#importance li.highlight').css({'background-color': '#f0f8ff', 'padding': '0.3rem'});

  // Tool logo click toggle for descriptions
  $('.tool img').click(function() {
    $(this).siblings('.tool-info').slideToggle(400);
    $(this).fadeTo(100, 0.6).fadeTo(100, 1);
  });

  // ==========================
  // IMAGE CAROUSEL INTERACTION
  // ==========================

  let currentIndex = 0;
  const slides = $('.carousel-image');

  function showSlide(index) {
    slides.fadeOut(300);
    slides.eq(index).fadeIn(300);
  }

  $('.arrow.right').click(function () {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
    $(this).animate({ opacity: 0.6 }, 100).animate({ opacity: 1 }, 100);
  });

  $('.arrow.left').click(function () {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
    $(this).animate({ opacity: 0.6 }, 100).animate({ opacity: 1 }, 100);
  });

  // ==========================
  // TAB INTERACTION
  // ==========================

  $('.tab-buttons li').click(function () {
    const tab = $(this).data('tab');

    // Update active button
    $(this).addClass('active').siblings().removeClass('active');

    // Show selected tab content
    $('.tab-content').fadeOut(200);
    $('#' + tab).fadeIn(200);
  });

});
