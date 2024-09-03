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
    1200: {  //当屏幕宽度大于等于1280
      navigation: {
        nextEl: ".bannerSwiperNav-next",
        prevEl: ".bannerSwiperNav-prev",
      },
    }
  }
});

var swiper = new Swiper(".navtabSwiper", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 12,
  centeredSlides: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
})

var swiper = new Swiper(".mobileSwiper-paginate", {
  spaceBetween: 24,
  pagination: {
    el: ".mobileSwiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: "2",
    }
  }
})

var swiper = new Swiper(".swiperHotCourse", {
  slidesPerView: "auto",
  spaceBetween: 24,
  centeredSlides: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    992 :{
      navigation: {
        nextEl: ".swiperHotCourse-next",
        prevEl: ".swiperHotCourse-prev",
      },
    }
  }
})

var swiper = new Swiper(".mobileSwiper-twoRow", {
  slidesPerView: "auto",
  spaceBetween: 24,
})
