// setInterval(()=>{

//         let activeSlide = document.querySelector('.slide.translate-x-0');
//         activeSlide.classList.remove('translate-x-0');
//         activeSlide.classList.add('-translate-x-full');

//         let nextSlide = activeSlide.nextElementSibling;
//         nextSlide.classList.remove('translate-x-full');
//         nextSlide.classList.add('translate-x-0');
// },3000);

import Swiper from 'swiper/bundle';

import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    // navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    // },
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },
});
