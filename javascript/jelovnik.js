$(document).ready(function () {
  $(".dugme-navigacija").on("click", function () {
    if (!$(this).hasClass("ukljuceno")) {
      $(".navigacija").addClass("ukljucena");
      $(this).addClass("ukljuceno");
    } else {
      $(".navigacija").removeClass("ukljucena");
      $(this).removeClass("ukljuceno");
    }
  });
});
