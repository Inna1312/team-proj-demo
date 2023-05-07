import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js';

const swiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,

  keyboard: {
    enabled: true,
  },
  navigation: {
    nextEl: '.btn-next',
    prevEl: '.btn-prev',
  },
});
