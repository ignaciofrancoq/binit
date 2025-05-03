document.addEventListener('DOMContentLoaded', () => {
    /*const sliders = document.querySelectorAll('.splide');
  
    sliders.forEach((slider) => {
      new Splide(slider, {
        type: 'loop',
        perPage: 1,
        autoplay: true,
        interval: 4000,
        pauseOnHover: true,
        arrows: true,
        pagination: true,
      }).mount();
    });*/
    new Splide('#home__carousel').mount();
  });