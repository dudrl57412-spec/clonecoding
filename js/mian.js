const swiper = new Swiper(".visual-sw", {
  loop: true,
  effect: "fade",

  creativeEffect: {
    prev: {
      translate: ["-10%", 0, -1],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  speed: 1500,
});