import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';

var swiper = new Swiper(".bannerSwiper", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 30,
  loop: true,
  loopFillGroupWithBlank: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {  //当屏幕宽度大于等于320

    },
    768: {  //当屏幕宽度大于等于768 

    },
    1200: {  //当屏幕宽度大于等于1280
      navigation: {
        nextEl: ".bannerSwiper-next",
        prevEl: ".bannerSwiper-prev",
      },
    }
  }
});