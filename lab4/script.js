$(document).ready(function () {

  // Slide toggle the importance section when header clicked
  $('#importance h3').click(function() {
    $('#importance ul').slideToggle();
  });

  // Highlight list items with class "highlight"
  $('#importance li.highlight').css({'background-color': '#f0f8ff', 'padding': '0.3rem'});

  // Tool logo click toggle for descriptions
  $('.tool img').click(function() {
    // Slide toggle the description for clicked tool
    $(this).siblings('.tool-info').slideToggle(400);
    // Subtle click animation
    $(this).fadeTo(100, 0.6).fadeTo(100, 1);
  });

});
