$(document).ready(function () {

  // 1️⃣ Slide toggle the importance section when header clicked
  $('#importance h3').click(function() {
    $('#importance ul').slideToggle();
  });

  // 2️⃣ Highlight list items with class "highlight"
  $('#importance li.highlight').css({'background-color': '#f0f8ff', 'padding': '0.3rem'});

  // 3️⃣ Tool logo click toggle for descriptions
  $('.tool img').click(function() {
    $(this).siblings('.tool-info').slideToggle(400);
    $(this).fadeTo(100, 0.6).fadeTo(100, 1); // subtle click animation
  });

});
