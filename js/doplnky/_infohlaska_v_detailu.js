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
// Nastavitelné hodnoty
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
// -------------------------------------------------------------------------------------------