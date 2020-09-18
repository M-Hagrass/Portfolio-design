

  // Isotope and Magnific popup JS libraries for projects area section
  $(document).ready(function () {
      let $btns = $('.projects-area .button-group button');

      $btns.click(function (e) {
          $('.projects-area .button-group button').removeClass('active');
          e.target.classList.add('active');

          let selector = $(e.target).attr('data-filter');
          $('.projects-area .grid').isotope({
              filter: selector
          });
          return false;
      })

      $('.projects-area .button-group #btn1').trigger('click');

      $('.projects-area .grid .test-popup-link').magnificPopup({
          type: 'image',
          gallery: { enabled: true }
      });
  });

    // To activate and configure owl-carousel for clients reviews section

    // $(document).ready(function(){
    //   $(".owl-carousel").owlCarousel();
    // });

    $('.owl-carousel').owlCarousel({
      loop: true,
      autoplay: true,
      dots: true,
      responsive: {
          0: {items: 1},
          576: {items: 2}
      }
    })
