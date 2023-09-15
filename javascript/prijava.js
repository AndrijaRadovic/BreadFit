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

$(document).ready(function () {
  $("#prijavaDugme").click(function (e) {
    e.preventDefault();

    $("input").each(function (i, item) {
      if ($(item).val() === "") {
        $(item).addClass("greska");
      } else {
        $(item).removeClass("greska");
      }
    });

    if ($(".greska").length === 0) {
      var ime = $("#ime").val();
      var prezime = $("#prezime").val();
      var email = $("#email").val();
      var datumRodjenja = $("#datum").val();
      var pol = $("input[name='pol']:checked").val();
      var datum = new Date();

      alert(
        "Ime: " +
          ime +
          "\n" +
          "Prezime: " +
          prezime +
          "\n" +
          "Pol: " +
          pol +
          "\n" +
          "Email: " +
          email +
          "\n" +
          "Datum rodjenja: " +
          datumRodjenja +
          "\n" +
          "Vreme registracije: " +
          datum
      );
    }
  });

  $("#email").blur(function () {
    var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
    if (testEmail.test(this.value)) {
      $("#email").removeClass("greska");
    } else {
      alert("Neispravna email adresa");
      $("#email").addClass("greska");
    }
  });

  $("#lozinka").blur(function () {
    var testLozinka = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    if (testLozinka.test(this.value)) {
      $("#lozinka").removeClass("greska");
    } else {
      alert(
        "Neispravna lozinka\n\nLozinka mora sadrzati:\nMinimum 8 karaktera\nMinimum 1 malo i 1 veliko slovo\nMinimum 1 broj"
      );
      $("#lozinka").addClass("greska");
    }
  });
});
