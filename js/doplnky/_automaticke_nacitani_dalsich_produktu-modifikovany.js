// Automatické načítání dalších produktů - modifikace
// https://cdn.myshoptet.com/usr/shoptet.tomashlad.eu/user/documents/extras/products-auto-load/scripts.js?v=09
// <!-- service 1570(1164) html code footer --> 17.8.2024
// -------------------------------------------------------------------------------------------
(function ($, window, document) {
  var paginationFixed = function () {
    if ($(".pagination-wrapper.clone").length) {
      return;
    }
    if (!$(".fixed-pagination").length && $(".load-products").length) {
      var paginationOffsetTop = $(".pagination-wrapper:not(.clone)").offset()
        .top;

      $(
        '<div class="fixed-pagination"><div class="pagination-wrapper clone"></div></div>'
      ).insertAfter($(".pagination-wrapper:not(.clone)"));
      $(".fixed-pagination > .pagination-wrapper.clone").prepend(
        $(".pagination-wrapper .pagination-top").clone()
      );
      $(".fixed-pagination > .pagination-wrapper.clone").append(
        $(".pagination-wrapper .pagination").clone()
      );

      $(window).scroll(function (ev) {
        if ($(window).scrollTop() + $(window).height() > paginationOffsetTop) {
          $(".fixed-pagination").addClass("show");
        } else {
          $(".fixed-pagination").removeClass("show");
        }

        if (!$(".load-products").length) {
          $(".fixed-pagination").removeClass("show");
        }
      });
    }
  };

  paginationFixed();

  document.addEventListener("ShoptetDOMContentLoaded", function () {
    paginationFixed();
    $(".fixed-pagination .pagination-wrapper").addClass("clone");
  });

  var loadCount = 0; // Přidáno pro sledování počtu načtených stránek

  if (
    $(".type-category #products").length ||
    $(".type-manufacturer-detail #products").length
  ) {
    $(window).scroll(function (ev) {
      var $loadProductsBtn = $(
        ".pagination-wrapper:not(.clone) .load-products"
      );

      if ($loadProductsBtn.length && loadCount < 2) {
        // Kontrola, zda bylo načteno méně než 3 stránky
        var offsetTop = $loadProductsBtn.offset().top;

        if ($(window).scrollTop() + $(window).height() + 700 > offsetTop) {
          $("body").addClass("spinner-hidden");
          $loadProductsBtn.click();
          $loadProductsBtn.remove();
          loadCount++; // Zvýšení počítadla načtených stránek
        }
      }
    });

    document.addEventListener("ShoptetDOMPageMoreProductsLoaded", function () {
      $("body").removeClass("spinner-hidden");
    });
  }
})(window.jQuery, window, document);
// -------------------------------------------------------------------------------------------