$(document).ready(function() {
    $(".toggle-button").on("click", function() {
      $(this).closest(".toggle-wrap").toggleClass("active");
    });
  })

