// Hodnocení obchodu v detailu produktu
// <!-- service 425(79) html code footer --> 17.8.2024
// -------------------------------------------------------------------------------------------
$(document).ready(function () {
  var lang = "cs";
  if ($(".hodnoceni").length == 0) {
    $(
      '<div class="hodnoceni"><div class="cz"></div><div class="sk"></div><div class="cz2"></div><div class="sk2"></div></div>'
    ).insertAfter(".type-product .shp-tabs-wrapper");
    $(
      '<div class="hodnoceni"><div class="cz2"></div><div class="sk2"></div></div>'
    ).insertAfter(".page-detail #tabs-div");
    $(
      '<div class="hodnoceni"><div class="cz2"></div><div class="sk2"></div></div>'
    ).prependTo(".template-08.type-index #main");
  }
  if ($(".template-13").length) {
    if ($(window).width() <= 767) {
      $(
        '<div class="hodnoceni"><div class="cz"></div><div class="sk"></div><div class="cz2"></div><div class="sk2"></div></div>'
      ).insertAfter(".shp-accordion-wrapper");
    }
  }
  $(
    '<a href="/cache/hodnoceni-obchodu/">Zobrazit další hodnocení</a>'
  ).appendTo(".hodnoceni");
  if ($(".hodnoceni").length) {
    if (lang == "cs") {
      $.get(
        "/hodnoceni-obchodu/",
        function (data) {
          var response = $($.parseHTML(data));
          $(
            "body:not(.template-04):not(.template-05):not(.template-06):not(.template-08) .hodnoceni > .cz"
          ).html(response.find(".content-inner .votes-wrap"));
          $(
            "body.template-04 .hodnoceni > .cz2, body.template-05 .hodnoceni > .cz2, body.template-06 .hodnoceni > .cz2, body.template-08 .hodnoceni > .cz2"
          ).html(response.find("#content-in .votes-wrap"));
        },
        null,
        "html"
      );
    }
    if (lang == "sk") {
      $.get(
        "/cache/hodnotenie-obchodu/",
        function (data) {
          var response = $($.parseHTML(data));
          $(
            "body:not(.template-04):not(.template-05):not(.template-06):not(.template-08) .hodnoceni > .cz"
          ).html(response.find(".content-inner .votes-wrap"));
          $(
            "body.template-04 .hodnoceni > .cz2, body.template-05 .hodnoceni > .cz2, body.template-06 .hodnoceni > .cz2, body.template-08 .hodnoceni > .cz2"
          ).html(response.find("#content-in .votes-wrap"));
        },
        null,
        "html"
      );
      $(".hodnoceni > a").attr("href", "/hodnotenie-obchodu/");
      $(".hodnoceni > a").html("Zobraziť ďalšie recenzie");
      $(".hodnoceni").addClass("svk");
    }
    if (lang == "hu") {
      $.get(
        "/cache/uzleti-ertekeles/",
        function (data) {
          var response = $($.parseHTML(data));
          $(
            "body:not(.template-04):not(.template-05):not(.template-06):not(.template-08) .hodnoceni > .cz"
          ).html(response.find(".content-inner .votes-wrap"));
          $(
            "body.template-04 .hodnoceni > .cz2, body.template-05 .hodnoceni > .cz2, body.template-06 .hodnoceni > .cz2, body.template-08 .hodnoceni > .cz2"
          ).html(response.find("#content-in .votes-wrap"));
        },
        null,
        "html"
      );
      $(".hodnoceni > a").attr("href", "/uzleti-ertekeles/");
      $(".hodnoceni > a").html("További értékelések megjelenítése");
      $(".hodnoceni").addClass("hun");
    }
    if (lang == "pl") {
      $.get(
        "/cache/opinie-o-sklepie/",
        function (data) {
          var response = $($.parseHTML(data));
          $(
            "body:not(.template-04):not(.template-05):not(.template-06):not(.template-08) .hodnoceni > .cz"
          ).html(response.find(".content-inner .votes-wrap"));
          $(
            "body.template-04 .hodnoceni > .cz2, body.template-05 .hodnoceni > .cz2, body.template-06 .hodnoceni > .cz2, body.template-08 .hodnoceni > .cz2"
          ).html(response.find("#content-in .votes-wrap"));
        },
        null,
        "html"
      );
      $(".hodnoceni > a").attr("href", "/opinie-o-sklepie/");
      $(".hodnoceni > a").html("Zobacz więcej recenzji");
      $(".hodnoceni").addClass("pl");
    }
    if (lang == "en") {
      $.get(
        "/cache/store-rating/",
        function (data) {
          var response = $($.parseHTML(data));
          $(
            "body:not(.template-04):not(.template-05):not(.template-06):not(.template-08) .hodnoceni > .cz"
          ).html(response.find(".content-inner .votes-wrap"));
          $(
            "body.template-04 .hodnoceni > .cz2, body.template-05 .hodnoceni > .cz2, body.template-06 .hodnoceni > .cz2, body.template-08 .hodnoceni > .cz2"
          ).html(response.find("#content-in .votes-wrap"));
        },
        null,
        "html"
      );
      $(".hodnoceni > a").attr("href", "/store-rating/");
      $(".hodnoceni > a").html("See more reviews");
      $(".hodnoceni").addClass("eng");
    }
    if (lang == "ro") {
      $.get(
        "/cache/evaluarea-magazinului/",
        function (data) {
          var response = $($.parseHTML(data));
          $(
            "body:not(.template-04):not(.template-05):not(.template-06):not(.template-08) .hodnoceni > .cz"
          ).html(response.find(".content-inner .votes-wrap"));
          $(
            "body.template-04 .hodnoceni > .cz2, body.template-05 .hodnoceni > .cz2, body.template-06 .hodnoceni > .cz2, body.template-08 .hodnoceni > .cz2"
          ).html(response.find("#content-in .votes-wrap"));
        },
        null,
        "html"
      );
      $(".hodnoceni > a").attr("href", "/evaluarea-magazinului/");
      $(".hodnoceni > a").html("Vedeți mai multe evaluări");
      $(".hodnoceni").addClass("ro");
    }
    if (lang == "de") {
      $.get(
        "/cache/geschaftsbewertung/",
        function (data) {
          var response = $($.parseHTML(data));
          $(
            "body:not(.template-04):not(.template-05):not(.template-06):not(.template-08) .hodnoceni > .cz"
          ).html(response.find(".content-inner .votes-wrap"));
          $(
            "body.template-04 .hodnoceni > .cz2, body.template-05 .hodnoceni > .cz2, body.template-06 .hodnoceni > .cz2, body.template-08 .hodnoceni > .cz2"
          ).html(response.find("#content-in .votes-wrap"));
        },
        null,
        "html"
      );
      $(".hodnoceni > a").attr("href", "/geschaftsbewertung/");
      $(".hodnoceni > a").html("Weitere Bewertungen sichtbar machen");
      $(".hodnoceni").addClass("de");
    }
  }
  setTimeout(function () {
    $(".hodnoceni .vote-pic img").each(function () {
      $(this).attr("src", $(this).attr("data-src"));
    });
  }, 1500);
});
// -------------------------------------------------------------------------------------------
