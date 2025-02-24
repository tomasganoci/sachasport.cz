//--------------------------------------------------------------------------------------
// Sbalení filtrů
// <!-- service 409(63) html code footer --> 16.8.2024
//--------------------------------------------------------------------------------------
$("body:not(.venus):not(.jupiter)").on(
  "click",
  ".filter-sections h4",
  function (event) {
    event.preventDefault();
    $(this).closest(".filter-section").toggleClass("otevreny");
    $(this).closest(".slider-wrapper").toggleClass("otevreny");
  }
);

function paxioSbaleniFiltru() {
  if ($("body:not(.venus):not(.jupiter)").length) {
    $(".filter-label.active").closest(".filter-section").addClass("otevreny");
    $(".slider-wrapper").prependTo("#category-filter-hover");

    $(function () {
      var loc = window.location.href;
      if (/priceMin/.test(loc)) {
        $(".slider-wrapper").addClass("otevreny");
      }
    });
  }
  $("#filters").addClass("paxio-filters");
}
$(document).ready(function () {
  paxioSbaleniFiltru();
});
document.addEventListener("ShoptetDOMContentLoaded", function () {
  paxioSbaleniFiltru();
});
//--------------------------------------------------------------------------------------
// Zvolené filtry
// <!-- service 533(184) html code footer --> 17.8.2024
//--------------------------------------------------------------------------------------
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
// Tabulka velikostí
// https://cdn.fv-studio.cz/common/sizes/fv-studio-app-sizes.js
// <!-- service 518(170) html code footer --> 17.8.2024
// -------------------------------------------------------------------------------------------
$.extend($.expr[":"], {
  containsi: function (elem, i, match, array) {
    return (
      (elem.textContent || elem.innerText || "")
        .toLowerCase()
        .indexOf((match[3] || "").toLowerCase()) >= 0
    );
  },
});

var fvStudioAppSizes = new (function () {
  this.language = null;
  this.template = null;

  this.modal = null;

  this.project = null;

  this.param_selector = "#sizes_table#";

  this.i18n = {
    cs: {
      sizes_table: "Tabulka velikostí­",
      default_url: "tabulka-velikosti",
    },
    sk: {
      sizes_table: "Tabuľka veľkostí­",
      default_url: "tabulka-velikosti",
    },
    en: {
      sizes_table: "Size chart",
      default_url: "tabulka-velikosti",
    },
    hu: {
      sizes_table: "Mérettáblázat",
      default_url: "tabulka-velikosti",
    },
    pl: {
      sizes_table: "Tabela rozmiarów",
      default_url: "tabulka-velikosti",
    },
  };

  this.run = function (project, lang, template) {
    this.language = typeof lang !== "undefined" ? lang : "cs";
    this.template = typeof template !== "undefined" ? template : "Soul";

    this.project = project;

    fvStudioAppSizes.setLang();

    this.modal = $("#myModal");

    this.init();
  };

  this.init = function () {
    if ($(".type-product")) {
      var url = "/" + fvStudioAppSizes.t("default_url") + "/";
      if (typeof fvstudio_sizes_default_url !== "undefined") {
        url = fvstudio_sizes_default_url;
      }

      var insertAfterSelector =
        ".p-short-description, .pr-list-description, #short-description";

      var findElement = null;
      var findParamElement = null;
      var findParamElementUrl = "td";
      switch (this.template) {
        case "Echo":
          findElement =
            '#content-in [itemtype="https://schema.org/NewsArticle"], #content-in article';
          findParamElement =
            "body.type-product table.pr-list-parameter tr td.pr-list-parameter-name";
          findParamElementUrl = "td.pr-list-parameter-value";
          break;
        case "Pop":
        case "Rock":
          findElement =
            '#content-in [itemtype="https://schema.org/NewsArticle"], #content-in article';
          findParamElement =
            "body.type-product #parameters table tr td:first-child";
          findParamElementUrl = "td:nth-child(2)";
          break;
        case "Soul":
          findElement =
            '#content-in [itemtype="https://schema.org/NewsArticle"], #content-in article';
          findParamElement =
            "body.type-product table.pr-list-parametes tr td.pr-detail-parameter-name";
          findParamElementUrl = "td.pr-detail-parameter-value";
          break;
        case "Tango":
          findElement =
            '#content [itemtype="https://schema.org/NewsArticle"], #content [itemtype="https://schema.org/Article"]';
          findParamElement = "body.type-product .descr-info table tr th";
          break;
        case "Techno":
          insertAfterSelector = ".p-detail-inner .p-details .detail-parameters";
          findElement =
            '#content [itemtype="https://schema.org/NewsArticle"], #content [itemtype="https://schema.org/Article"]';
          findParamElement = "body.type-product table.detail-parameters tr th";
          break;
        default:
          findElement =
            '#content [itemtype="https://schema.org/NewsArticle"], #content [itemtype="https://schema.org/Article"]';
          findParamElement = "body.type-product table.detail-parameters tr th";
      }

      if (this.project === 328293 || this.project === 461358) {
        insertAfterSelector =
          ".product-top .p-info-wrapper table.detail-parameters";
      }

      if (
        $(findParamElement + ":containsi(" + this.param_selector + ")").length >
        0
      ) {
        var $tr = $(
          findParamElement + ":containsi(" + this.param_selector + ")"
        ).closest("tr");
        $tr.hide();
        var customUrl = $.trim($tr.find(findParamElementUrl).text());

        if (customUrl == "hidden") {
          url = null;
        } else if (customUrl != "") {
          url = customUrl;
        }
      }

      try {
        if (url !== null) {
          const regex =
            /^(?:https?:\/\/)?(?:www\.)?(?<domain>[^/:\?]+\.[^/:\?]+)(?:\/.+)?$/;

          if (!regex.test(url)) {
            url = window.location.origin + url;
          }

          const urlObject = new URL(url);

          if (url.indexOf("/cache/") === -1) {
            var urlPathname = urlObject.pathname;
            urlPathname = urlPathname.startsWith("/")
              ? urlPathname
              : "/" + urlPathname;
            urlObject.pathname = "/cache" + urlPathname;
          }

          url = urlObject.href;
        }
      } catch (error) {
        console.log("error", error);
      }

      var loadUrl = url != null ? url + " " + findElement : null;

      $(document).keydown(function (event) {
        if (event.keyCode == 27) {
          fvStudioAppSizes.modal.hide();
        }
      });

      window.onclick = function (e) {
        if (
          fvStudioAppSizes.modal.is(":visible") &&
          fvStudioAppSizes.modal.is(e.target)
        ) {
          fvStudioAppSizes.modal.hide();
        }
      };

      fvStudioAppSizes.modal
        .find(".close-btn")
        .off("click")
        .on("click", function (e) {
          fvStudioAppSizes.modal.hide();
        });

      if (loadUrl != null && fvStudioAppSizes.modal.length > 0) {
        $(
          '<div id="myBtnTabulka_velikosti">' +
            fvStudioAppSizes.t("sizes_table") +
            "</div>"
        ).insertAfter($(insertAfterSelector).first());

        $("#myBtnTabulka_velikosti")
          .off("click")
          .on("click", function (e) {
            fvStudioAppSizes.modal
              .find(".modal-content")
              .load(loadUrl, function (response) {
                fvStudioAppSizes.modal
                  .find(".modal-content")
                  .html($(response).find(findElement));
              });
            fvStudioAppSizes.modal.show();
          });
      }
    }
  };

  this.setLang = function () {
    if (typeof this.i18n[this.language] === "undefined") {
      this.language = "cs";
    }

    if (
      typeof fvstudio_sizes_i18n !== "undefined" &&
      Object.keys(fvstudio_sizes_i18n).length > 0
    ) {
      $.extend(true, this.i18n, fvstudio_sizes_i18n);
    }
  };

  this.t = function (key, arr) {
    var string = key;

    if (
      typeof this.i18n !== "undefined" &&
      typeof this.i18n[this.language] !== "undefined" &&
      typeof this.i18n[this.language][key] !== "undefined"
    ) {
      string = this.i18n[this.language][key];
    }

    if (typeof arr !== "undefined" && !$.isEmptyObject(arr)) {
      $.each(arr, function (k, v) {
        if (typeof k === "string") {
          string = string.replace(new RegExp("{" + k + "}", "g"), v);
        }
      });
    }

    return string;
  };

  window.fvStudioAppSizes = this;
  return this;
})();
$(document).ready(function () {
  fvStudioAppSizes.run(289888, "cs", "Classic");
});
// -------------------------------------------------------------------------------------------
// Šipky v produktových fotografii
// https://cdn.myshoptet.com/usr/apollo.jakubtursky.sk/user/documents/assets/sipky/app.min.js?v=6
// <!-- service 1472(1086) html code footer --> 17.8.2024
// -------------------------------------------------------------------------------------------
$(document).ready(function () {
  detailProductArrows &&
    $(".p-thumbnails-wrapper").length > 0 &&
    (baseSettingsDetailProductArrowsAddon(),
    $(".type-detail").length && detailProductArrowsAddon());
});
var detailMainImage = $(".p-image");
function baseSettingsDetailProductArrowsAddon() {
  $("body").addClass("has-detail-product-arrows"),
    detailProductArrowsShowOnHover &&
      $(window).width() > 768 &&
      detailMainImage.addClass("show-on-hover"),
    detailProductArrowsRadius && detailMainImage.addClass("is-border-radius");
}
var thumbnailsInnerPositionLeft,
  thumbnailActive,
  thumbnailsWrapper = $(".p-thumbnails-wrapper"),
  thumbnailsBlock = $(".p-thumbnails"),
  thumbnailsInner = $(".p-thumbnails-inner"),
  thumbnailItem = $(".p-thumbnail").first(),
  thumbnailItems = thumbnailsInner.find(" > div"),
  thumbnailArrowNext = $(".thumbnail-next"),
  thumbnailArrowPrev = $(".thumbnail-prev"),
  existMoreThumbnails = !1,
  galleryVertical = !1;
function detailProductArrowsAddon() {
  var t =
      '\n\t\t<span class="carousel-control carousel-control--product left">\n\t\t</span>\n\t',
    i =
      '\n\t\t<span class="carousel-control carousel-control--product right">\n\t\t</span>\n\t';
  $(".lSSlideWrapper").length
    ? $(".lSSlideWrapper").append(t).append(i)
    : $(".p-image").append(t).append(i),
    setTimeout(() => {
      thumbnailsBlock.hasClass("overflow-next") && (existMoreThumbnails = !0),
        thumbnailsBlock.hasClass("p-thumbnails-vertical") &&
          (galleryVertical = !0);
    }, 500),
    $(document).on("click", ".carousel-control--product.right", function (t) {
      if (
        ((thumbnailActive = $(".p-thumbnail.highlighted")).next().next().length
          ? (thumbnailActive.next().next().trigger("click"),
            galleryVertical
              ? moveThumbnailProductVertical("right")
              : moveThumbnailProduct("right"))
          : ($(".p-thumbnail:first-child").trigger("click"),
            setTimeout(() => {
              if (
                (existMoreThumbnails &&
                  thumbnailsBlock
                    .addClass("overflow-next")
                    .removeClass("overflow-prev"),
                galleryVertical
                  ? thumbnailsInner.css("top", 0)
                  : thumbnailsInner.css("left", 0),
                detailProductArrowsStopPropagation)
              )
                return t.stopPropagation(), t.preventDefault(), !1;
            }, 300)),
        detailProductArrowsStopPropagation)
      )
        return t.stopPropagation(), t.preventDefault(), !1;
    }),
    $(document).on("click", ".carousel-control--product.left", function () {
      if (
        ((thumbnailActive = $(".p-thumbnail.highlighted")).prev().prev().length
          ? (thumbnailActive.prev().prev().trigger("click"),
            galleryVertical
              ? moveThumbnailProductVertical("left")
              : moveThumbnailProduct("left"))
          : ($(".p-thumbnail:nth-last-child(2)").trigger("click"),
            setTimeout(() => {
              if (
                (existMoreThumbnails &&
                  (thumbnailsBlock
                    .addClass("overflow-prev")
                    .removeClass("overflow-next"),
                  galleryVertical
                    ? thumbnailsInner.css(
                        "top",
                        -(thumbnailItems.height() - thumbnailsBlock.height())
                      )
                    : thumbnailsInner.css(
                        "left",
                        -(thumbnailItems.width() - thumbnailsWrapper.width())
                      )),
                detailProductArrowsStopPropagation)
              )
                return e.stopPropagation(), e.preventDefault(), !1;
            }, 300)),
        detailProductArrowsStopPropagation)
      )
        return e.stopPropagation(), e.preventDefault(), !1;
    });
}
function moveThumbnailProduct(t) {
  (thumbnailActive = $(".p-thumbnail.highlighted")),
    (thumbnailActiveOffsetLeft = parseInt(thumbnailActive.position().left)),
    (thumbnailsInnerPositionLeft = -parseInt(thumbnailsInner.css("left"))),
    (thumbnailsWrapperWidth = thumbnailsWrapper.width()),
    (thumbnailItemWidth = thumbnailItem.width()),
    "right" === t &&
      thumbnailActiveOffsetLeft >=
        thumbnailsWrapperWidth +
          thumbnailsInnerPositionLeft -
          thumbnailItemWidth &&
      thumbnailArrowNext.trigger("click"),
    "left" === t &&
      thumbnailActiveOffsetLeft <= thumbnailsInnerPositionLeft &&
      thumbnailArrowPrev.trigger("click");
}
function moveThumbnailProductVertical(t) {
  (thumbnailActive = $(".p-thumbnail.highlighted")),
    (thumbnailActiveOffsetTop = parseInt(thumbnailActive.position().top)),
    (thumbnailsInnerPositionTop = -parseInt(thumbnailsInner.css("top"))),
    (thumbnailsWrapperHeight = thumbnailsBlock.height()),
    (thumbnailItemHeight = thumbnailItem.height()),
    "right" === t &&
      thumbnailActiveOffsetTop >=
        thumbnailsWrapperHeight +
          thumbnailsInnerPositionTop -
          thumbnailItemHeight &&
      thumbnailArrowNext.trigger("click"),
    "left" === t &&
      thumbnailActiveOffsetTop <= thumbnailsInnerPositionTop &&
      thumbnailArrowPrev.trigger("click");
}
//# sourceMappingURL=app.min.js.map
// -------------------------------------------------------------------------------------------
// Přesun popisu kategorie nad sub-kategorie
// -------------------------------------------------------------------------------------------
const shoptetMoveDescription = () => {
  const [t, e] = [
    document.querySelector(".pagination-wrapper + .category-perex"),
    document.querySelector(".category-title"),
  ];
  t && e && e.parentNode.insertBefore(t, e.nextSibling);
};
["ShoptetDOMPageContentLoaded", "DOMContentLoaded"].forEach((t) => {
  document.addEventListener(t, shoptetMoveDescription, !1);
});
// -------------------------------------------------------------------------------------------
// Doplnění aria-label
// -------------------------------------------------------------------------------------------
$(document).ready(function () {
  $('a[data-target="search"]').attr("aria-label", "Vyhledat"),
    $('a[data-target="navigation"]').attr("aria-label", "Navigace"),
    $('a[data-target="login"]').attr("aria-label", "Přihlásit se");
});
// -------------------------------------------------------------------------------------------
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
// Infohláška v detailu
// https://cdn.myshoptet.com/usr/apollo.jakubtursky.sk/user/documents/assets/contact-form/app.min.js?v=37
// <!-- service 1539(1149) html code footer --> 17.8.2024
// -------------------------------------------------------------------------------------------
$(document).ready(function () {
  detailContactFormAddon &&
    (baseSettingsDetailContactButtonAddon(),
    $(".type-detail").length &&
      0 == $(".p-detail-inner").find(".flag.flag-contact-form-0").length &&
      detailContactButtonAddon());
}),
  $(window).load(function () {
    $(".disabled-add-to-cart").length &&
      0 == $(".js-detail-contact-button").length &&
      $(detailContactButtonTemplate).insertAfter(
        ".p-detail-inner .p-final-price-wrapper"
      ),
      document.addEventListener("ShoptetDOMContentLoaded", function () {
        $(".filter-section-boolean").length &&
          removeDiscountLabelContactFormAddon();
      }),
      $(".filter-section-boolean").length &&
        removeDiscountLabelContactFormAddon();
  });
var detailContactButtonTemplate,
  templateID = shoptet.abilities.about.id,
  templateLanguage = getShoptetDataLayer("language");
function baseSettingsDetailContactButtonAddon() {
  $("body").addClass("detail-contact-form-addon");
}
var modalInterval,
  modalContentInterval,
  detailContactButtonRadius = "",
  detailContactButtonBG = "",
  detailContactButtonBorder = "",
  detailContactButtonRow = "",
  detailContactFormAddonIcon = "",
  detailContactButtonTitle = "",
  detailContactButtonText = "",
  detailContactButtonLink = "",
  detailContactFormTitle = "",
  detailContactFormText = "",
  btnTitle = "",
  btnText = "",
  btnLink = "",
  modalTitle = "",
  modalText = "";
function detailContactButtonAddon() {
  setContactFormText(),
    setContactFormIcon(),
    setContactFormDesign(),
    createContactForm(),
    eventContactFormModal(),
    $(".filter-section-boolean").length &&
      removeDiscountLabelContactFormAddon();
}
function removeDiscountLabelContactFormAddon() {
  $(".filter-section-boolean fieldset > div").each(function () {
    var t = $(this),
      o = t.find("label").clone();
    o.find(".filter-count").remove(),
      (divFinalText = o.text()),
      "contact-form-0" === divFinalText && t.remove();
  });
}
function createContactForm() {
  (detailContactButtonTemplate = `\n\t\t<div class="detail-contact-button js-detail-contact-button ${detailContactButtonRow} ${detailContactButtonBorder} ${detailContactButtonRadius} ${detailContactButtonBG}">\n\t\t\t${detailContactFormAddonIcon}\n\t\t\t<div class="detail-contact-button__text-block">\n\t\t\t\t<div class="detail-contact-button__title">${btnTitle}</div>\n\t\t\t\t<div class="detail-contact-button__text">${btnText} <a>${btnLink}</a></div>\n\t\t\t</div>\n\t\t</div>\n\t`),
    $(".p-detail-inner .p-info-wrapper .add-to-cart").length
      ? $(detailContactButtonTemplate).insertAfter(
          ".p-detail-inner .p-info-wrapper .add-to-cart"
        )
      : $(".p-detail-inner .p-price-wrapper").length
      ? $(detailContactButtonTemplate).insertAfter(
          ".p-detail-inner .p-price-wrapper"
        )
      : $(".p-detail-inner .p-to-cart-block").length
      ? $(detailContactButtonTemplate).insertAfter(
          ".p-detail-inner .p-to-cart-block"
        )
      : $(".p-detail-inner .price .add-to-cart").length
      ? ($(detailContactButtonTemplate).insertAfter(
          ".p-detail-inner .price .add-to-cart"
        ),
        "09" === templateID &&
          $(".detail-contact-button")
            .addClass("col-xs-12")
            .wrap('<div class="detail-contact-button-wrap"></div>'))
      : $(".social-buttons-wrapper").length
      ? $(detailContactButtonTemplate).insertBefore(
          ".p-detail-inner .social-buttons-wrapper"
        )
      : $(".product-detail-cart").length
      ? $(detailContactButtonTemplate).insertAfter(".product-detail-cart")
      : $("#td-product-detail #product-detail").length &&
        $(detailContactButtonTemplate).insertAfter(
          "#td-product-detail #product-detail"
        ),
    $("body.venus").length &&
      $(".buy-box .bottom").length &&
      $(".js-detail-contact-button").insertAfter(".buy-box .bottom"),
    $("body.shoptetak-adamin").length &&
      $(".p-info-wrapper .price-line").length &&
      $(".js-detail-contact-button").insertAfter(".p-info-wrapper .price-line");
}
function eventContactFormModal() {
  detailContactFormAddonLink.length > 0
    ? ($("body").addClass("detail-contact-form-addon--show-chat"),
      1 == detailContactFormAddonLinkExternal
        ? $(".js-detail-contact-button").wrap(
            '<a class="detail-contact-button-link" href="' +
              detailContactFormAddonLink +
              '" target="_blank">'
          )
        : $(".js-detail-contact-button").wrap(
            '<a class="detail-contact-button-link" href="' +
              detailContactFormAddonLink +
              '">'
          ))
    : $(document).on("click", ".js-detail-contact-button", function () {
        $(".link-icon.chat").length
          ? $(".link-icon.chat").trigger("click")
          : $(".icon-question-before").length
          ? $(".icon-question-before").trigger("click")
          : $("#tr-links .p-question").length &&
            $("#tr-links .p-question").trigger("click");
      }),
    detailContactFormAddonModal &&
      $(document).ajaxComplete(function () {
        modalInterval = setInterval(() => {
          $("#formProductQuestion").length &&
            (initContactForm(), clearInterval(modalInterval));
        }, 500);
      });
}
function initContactForm() {
  setContactFormModalText(),
    setContactFormModalIcon(),
    (modalContentInterval = setInterval(() => {
      if ($("#cboxLoadedContent").length) {
        if (
          ($("#formProductQuestion")
            .closest("#colorbox")
            .addClass("contact-form-addon"),
          "" !== modalTitle || "" !== modalText)
        ) {
          var t = $("#colorbox").height(),
            o = $("#cboxContent").height();
          $("#colorbox.contact-form-addon").addClass("remove-height"),
            $(
              "#colorbox.remove-height, #colorbox.remove-height #cboxWrapper"
            ).css("minHeight", t),
            $(
              "#colorbox.remove-height #cboxContent, #colorbox.remove-height #cboxLoadedContent"
            ).css("minHeight", o);
        }
        clearInterval(modalContentInterval);
      }
    }, 100));
}
function setContactFormIcon() {
  0 != detailContactFormAddonIconImage.length &&
    (detailContactFormAddonIcon = `<div class="detail-contact-button__icon has-img"><img src="${detailContactFormAddonIconImage}" class="btn-cart-img"></div>`),
    detailContactFormAddonIcon
      ? 0 == detailContactFormAddonIconImage.length &&
        (detailContactFormAddonIcon = `<div class="detail-contact-button__icon contact-form-ico ${detailContactFormAddonIconType}"></div>`)
      : (detailContactFormAddonIcon = "");
}
function setContactFormDesign() {
  detailContactFormAddonRadius &&
    (detailContactButtonRadius = "has-border-radius"),
    detailContactFormAddonBG && (detailContactButtonBG = "has-bg"),
    detailContactFormAddonBorder && (detailContactButtonBorder = "has-border"),
    detailContactFormAddonRow && (detailContactButtonRow = "has-row");
}
function setContactFormText() {
  (btnTitle =
    detailContactButtonTitle || detailContactButtonTitleLang[templateLanguage]),
    (btnText =
      detailContactButtonText || detailContactButtonTextLang[templateLanguage]),
    (btnLink =
      detailContactButtonLink || detailContactButtonLinkLang[templateLanguage]);
}
function setContactFormModalText() {
  "" !==
    (modalTitle =
      detailContactFormTitle || detailContactFormTitleLang[templateLanguage]) &&
    $(".content-modal > h1").text(modalTitle),
    "" !==
      (modalText =
        detailContactFormText || detailContactFormTextLang[templateLanguage]) &&
      $(".content-modal > p").text(modalText);
}
function setContactFormModalIcon() {
  0 != detailContactFormAddonIconImage.length &&
    $(".content-modal > h1")
      .addClass("has-img")
      .prepend(
        `<img src="${detailContactFormAddonIconImage}" class="btn-cart-img"></img>`
      ),
    detailContactFormAddonIcon
      ? 0 == detailContactFormAddonIconImage.length &&
        $(".content-modal > h1")
          .addClass(detailContactFormAddonIconType)
          .addClass("contact-form-ico")
      : (detailContactFormAddonIcon = "");
}
// -------------------------------------------------------------------------------------------
var detailContactFormAddon = true;
var detailContactFormAddonRadius = false;
var detailContactFormAddonBG = true;
var detailContactFormAddonBorder = true;
var detailContactFormAddonRow = false;
var detailContactFormAddonModal = false;
var detailContactFormAddonLink = "";
var detailContactFormAddonLinkExternal = false;

var detailContactFormAddonIcon = true;
var detailContactFormAddonIconType = "price-1";
var detailContactFormAddonIconImage = "";

var detailContactButtonTitle = "";
var detailContactButtonText = "";
var detailContactButtonLink = "";

var detailContactFormTitle = "";
var detailContactFormText = "";

var detailContactButtonTitleLang = {
  cs: "Našli jste lepší cenu?",
};

var detailContactButtonTextLang = {
  cs: "Cenu zkusíme dorovnat.",
};

var detailContactButtonLinkLang = {
  cs: "Napište nám!",
};

var detailContactFormTitleLang = {
  cs: "Našli jste lepší cenu?",
};

var detailContactFormTextLang = {
  cs: "Vyplňte následující formulář a mi Vám v krátké době odpovíme na Váš dotaz.",
};
