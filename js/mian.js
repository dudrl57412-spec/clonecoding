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
// gotop 스크롤 이벤트
// 변수 선언
const goTop = document.querySelector("#gotop");
window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 700) {
    goTop.style.display = "block";
  } else {
    goTop.style.display = "none";
  }
});
//   gotop버튼 클릭시 위로 스크롤
goTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
// 헤더 색상변경
const headerbg = document.querySelector(".header");
// const topbanner = document.querySelector(".top_banner");
window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 0) {
    headerbg.style.background = "rgba(0,0,0,0.5)";
    headerbg.style.top = "0";
    // topbanner.style.display ="none"
  } else {
    headerbg.style.background = "transparent";
    headerbg.style.top = "30px";
  }
});
