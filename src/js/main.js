import $ from "jquery";
import "slick-carousel";


$(document).ready(function(){
  $('.slider__list').slick({
    prevArrow: `<button type="button" class="slick-prev"><img src="img/chevron-left-solid.png" alt="1"></button>`,
    nextArrow: `<button type="button" class="slick-next"><img src="img/chevron-right-solid.png" alt="2"></button>`,
  });
});