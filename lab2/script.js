$(document).ready(function () {

  // 1️⃣ Hover effect on tool logos
  $('.tool-logos img').hover(
    function() { $(this).css('transform', 'scale(1.2)'); },
    function() { $(this).css('transform', 'scale(1)'); }
  );

  // 2️⃣ Slide down the importance section when clicked
  $('#importance h3').click(function() {
    $('#importance ul').slideToggle();
  });

  // 3️⃣ Filtered selector example: highlight only list items with class "highlight"
  $('#importance li.highlight').css('background-color', '#f0f8ff');
});
