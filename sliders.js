let mainSwiper = new Swiper(".main-swiper", {
    direction: "vertical",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    autoplay: {
        delay: 9000,
    },
    loop: true,
  });

let newsSwiper = new Swiper(".projects-swiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  autoplay: {
  delay: 3000,
   },
  loop: true,
});