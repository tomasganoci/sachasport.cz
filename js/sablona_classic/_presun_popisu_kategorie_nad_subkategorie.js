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
