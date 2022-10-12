var swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  keyboard: { enabled: true, onlyInViewport: true, pageUpDown: true },

  mousewheel: {
    sensitivity: 1,
    eventsTarget: '.swiper-container',
  },

  loop: true,
});