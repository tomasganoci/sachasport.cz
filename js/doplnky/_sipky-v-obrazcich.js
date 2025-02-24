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
// Nastavitelné hodnoty
var detailProductArrows = true;
var detailProductArrowsShowOnHover = false;
var detailProductArrowsRadius = false;
var detailProductArrowsStopPropagation = false;
// -------------------------------------------------------------------------------------------