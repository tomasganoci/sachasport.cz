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
