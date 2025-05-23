//Scroll header
window.addEventListener('scroll', () => {
    const header = document.querySelector('.site-header');
    if (window.scrollY > 10) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
});

//Btn menu mobile
document.querySelector('.btn-menu-mobile').addEventListener('click', function () {
  this.classList.toggle('open');
  
  const header = this.closest('header');
  if (header) {
    header.classList.toggle('open');
  }
});

//Carousel home
document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('#home__carousel');

  if (slider) {
    //new Splide('#home__carousel').mount();
    new Splide('#home__carousel', {
      type: 'loop',
      focus: 'center',
      perPage: 1,
      gap: '1rem',
      padding: { left: '25%', right: '25%' },
      pagination: false,
      breakpoints: {
        1500: {
          padding: { left: '20%', right: '20%' },
        },
        1100: {
          padding: { left: 0, right: 0 },
        },
      },
    }).mount();
  }  
});

//Tabs page casos de estudio
document.addEventListener('DOMContentLoaded', () => {
  const tabLinks = document.querySelectorAll('.tab-link');
  const tabContents = document.querySelectorAll('.tab-content');

  if (tabLinks.length === 0 || tabContents.length === 0) return;

  function showTabByHash(hash) {
    tabContents.forEach((content) => {
      content.style.display = content.id === hash ? 'block' : 'none';
    });

    tabLinks.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === `#${hash}`);
    });
  }

  const initialHash = window.location.hash.replace('#', '');
  if (initialHash && document.getElementById(initialHash)) {
    showTabByHash(initialHash);
  } else {
    showTabByHash(tabContents[0].id);
  }

  tabLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const hash = link.getAttribute('href').replace('#', '');
      window.location.hash = hash;
      showTabByHash(hash);
    });
  });
});
