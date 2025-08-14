

  $(document).ready(function($) {
    $("#card-carousel").owlCarousel();
  });
  $("body").data("page", "frontpage");

  $(document).ready(function() {
    $("#image-carousel").owlCarousel({
      items: 4,
      itemsDesktop: [1199, 3],
      itemsDesktopSmall: [979, 3]
    });

  });

  $(document).ready(function() {
    $("#posts-carousel").owlCarousel({
      items: 4,
      itemsDesktop: [1199, 3],
      itemsDesktopSmall: [979, 3]
    });

  });

  $(document).ready(function() {
    $("#posts-carousel-3col").owlCarousel({
      items: 3,
      itemsDesktop: [1199, 3],
      itemsDesktopSmall: [979, 3]
    });

  });

  $(document).ready(function() {
    $("#image-slider").owlCarousel({
      navigation: false, // Show next and prev buttons
      slideSpeed: 300,
      paginationSpeed: 400,
      singleItem: true

    });
  });

  $(document).ready(function() {
    $("#single-testimonial-item").owlCarousel({
      items: 1,
      navigation: false, // Show next and prev buttons
      slideSpeed: 300,
      paginationSpeed: 400,
      singleItem: true

    });
  });