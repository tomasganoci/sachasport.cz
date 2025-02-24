// Zvolené filtry
// <!-- service 533(184) html code footer --> 17.8.2024
// -------------------------------------------------------------------------------------------
function paxioZvoleneFiltryNew() {
  if ($("body:not(.venus):not(.jupiter)").length) {
    if ($(".filter-label").hasClass("active")) {
      $("body").addClass("aktivni-filtr-ano");
    } else {
      $("body").removeClass("aktivni-filtr-ano");
    }
    if ($(".vybrane-filtry").length == 0) {
      $('<div class="vybrane-filtry"></div>').prependTo(
        ".aktivni-filtr-ano #filters"
      );
      $(".filter-label.active")
        .closest(".filter-section")
        .clone()
        .appendTo(".vybrane-filtry");
      $(".vybrane-filtry .filter-label.active")
        .closest("div")
        .addClass("aktivni-filtr");
      $(
        ".vybrane-filtry .filter-section fieldset div:not(.aktivni-filtr):not(.advanced-filters-wrapper)"
      ).remove();
    }
  }

  var lang = "cs";
  if (lang == "sk") {
    $("body").addClass("svk");
  }
  if (lang == "hu") {
    $("body").addClass("hu");
  }
}
$(document).ready(function () {
  paxioZvoleneFiltryNew();
});
document.addEventListener("ShoptetDOMContentLoaded", function () {
  paxioZvoleneFiltryNew();
});
// -------------------------------------------------------------------------------------------