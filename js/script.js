jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる
  // swiper
  var mySwiper_thumb = new Swiper(".swiper-thumb", {
    loop: true,
    spaceBetween: 2,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var mySwiper_main = new Swiper(".mySwiper-main", {
    // loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },
    thumbs: {
      swiper: mySwiper_thumb,
    },
  });
});
