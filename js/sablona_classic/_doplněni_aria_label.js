// Doplnění aria-label
// -------------------------------------------------------------------------------------------
$(document).ready(function () {
  $('a[data-target="search"]').attr("aria-label", "Vyhledat"),
    $('a[data-target="navigation"]').attr("aria-label", "Navigace"),
    $('a[data-target="login"]').attr("aria-label", "Přihlásit se");
});
// -------------------------------------------------------------------------------------------
