$(document).ready(function () {
  $(".clients-slider").slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    infinite: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1430,
        settings: {
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });
});
