document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('#home__carousel');

  if (slider) {
    //new Splide('#home__carousel').mount();
    new Splide('#home__carousel', {
      type   : 'loop',
      padding: { left: 0, right: '20%' },
      pagination: false,
    }).mount();
  }  
});


window.addEventListener('scroll', () => {
    const header = document.querySelector('.site-header');
    if (window.scrollY > 10) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
});