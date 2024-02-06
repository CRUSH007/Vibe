import mobileNav from './modules/mobile-nav.js';
import btnQuestion from './modules/btn-question.js';

import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';


const swiper = new Swiper('.reviews-carousel', {

    loop: true,
  

    // pagination: {
    //   el: '.swiper-pagination',
    // },
  

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

// mobileNav();
btnQuestion();