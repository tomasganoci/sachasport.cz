// Sbalení filtrů
// <!-- service 409(63) html code footer --> 16.8.2024
// -------------------------------------------------------------------------------------------
$("body:not(.venus):not(.jupiter)").on("click", ".filter-sections h4", function(event){
event.preventDefault();
$(this).closest(".filter-section").toggleClass("otevreny");
$(this).closest(".slider-wrapper").toggleClass("otevreny");
});


function paxioSbaleniFiltru(){
if($('body:not(.venus):not(.jupiter)').length){
$('.filter-label.active').closest('.filter-section').addClass('otevreny');
$(".slider-wrapper").prependTo("#category-filter-hover");

$(function() {
  var loc = window.location.href;
  if(/priceMin/.test(loc)) {
    $('.slider-wrapper').addClass('otevreny');
  }
});
}
$('#filters').addClass('paxio-filters');

}
$(document).ready(function() {
paxioSbaleniFiltru();
});
document.addEventListener('ShoptetDOMContentLoaded', function () {
paxioSbaleniFiltru();
});
// -------------------------------------------------------------------------------------------