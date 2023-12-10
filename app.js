addEventListener("DOMContentLoaded", function () {
  $(".clients-slider").slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    infinite: false,
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

  const swiper = new Swiper(".blog-slider", {
    // Optional parameters
    direction: "horizontal",
    loop: false,
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      1024: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 30,
      },
    },
  });

  const swiper2 = new Swiper(".team-slider", {
    // Optional parameters
    direction: "horizontal",
    loop: false,
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      767: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 30,
      },
      1430: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 30,
      },
    },
  });

  const bodyWrapper = document.querySelector("body");
  const menuBtn = document.querySelector(".main-nav__toggle");
  const headerMobile = document.querySelector(".header-mobile");
  const mobileItemWrapper = document.querySelectorAll(
    ".header-mobile .menu__item"
  );

  menuBtn.addEventListener("click", function () {
    menuBtn.classList.toggle("active");
    bodyWrapper.classList.toggle("stop-scroll");
    headerMobile.classList.toggle("active");
  });

  mobileItemWrapper.forEach((item) => {
    console.log(item);
    const menuBtnClick = item.querySelector(".menu__btn");
    const submenu = item.querySelector(".submenu");
    if (menuBtnClick && submenu) {
      console.log(menuBtnClick);
      menuBtnClick.addEventListener("click", function () {
        item.classList.toggle("active");
        submenu.classList.toggle("active");
      });
    }
  });
});
