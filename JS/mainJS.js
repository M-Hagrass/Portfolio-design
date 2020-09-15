
// $(document).ready(function(){
//   $(".owl-carousel").owlCarousel();
// });

    // To activate and configure owl-carousel
$('.owl-carousel').owlCarousel({
  loop: true,
  autoplay: true,
  dots: true,
  responsive: {
      0: {items: 1},
      576: {items: 2}
  }
})