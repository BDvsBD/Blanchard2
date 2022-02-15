var swipertop = new Swiper(".swiper-top", {
  effect: 'fade',
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
  },
});


const galleryswiper = new Swiper('.gallery-swiper', {
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      grid: {
        rows: 1
      },
    },
    520: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      grid: {
        rows: 1
      },
    },
    767: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
      grid: {
        rows: 2
      },
    },
    950: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
      grid: {
        rows: 2
      },
    },
    1024: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
      grid: {
        rows: 2
      },
    },
    1301: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      grid: {
        rows: 2
      },
      spaceBetween: 50,
    },
  },

  pagination: {
    el: ".gallery-swiper-pagination",
    type: "fraction"
  },

  navigation: {
    nextEl: '.gallery-swiper-button-next',
    prevEl: '.gallery-swiper-button-prev',
  },

  a11y: {
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
    slideLabelMessage: 'Слайд {{index}} из {{slidesLength}}',
  }

});

const projectsswiper = new Swiper('.projects-swiper', {
  // Optional parameters
  loop: true,
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 50,
  breakpoints: {
    300: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 34,
    },
    500: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },
    950: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    1024: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },

    1500: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    }
  },


  // If we need pagination
  pagination: {
    el: '.projects-swiper-pagination',
    type: 'fraction',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.projects-swiper-button-next',
    prevEl: '.projects-swiper-button-prev',
  },

  a11y: {
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
    slideLabelMessage: 'Слайд {{index}} из {{slidesLength}}',
  },

});

const publicationSlider = document.querySelector('.publication-swiper');

let publicationswiper;
const desctopSlider = () => {

  if (window.innerWidth >= 553) {
    publicationswiper = new Swiper(publicationSlider, {
      breakpoints: {
        553: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 34,
        },
        700: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 34,

        },
        950: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 50,
        },
        1024: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 50,
        },
        1301: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 50,
        },
      },


      // If we need pagination
      pagination: {
        el: '.publication-swiper-pagination',
        type: 'fraction',
      },

      // Navigation arrows
      navigation: {
        nextEl: '.publication-swiper-button-next',
        prevEl: '.publication-swiper-button-prev',
      },

      a11y: {
        prevSlideMessage: 'Предыдущий слайд',
        nextSlideMessage: 'Следующий слайд',
        slideLabelMessage: 'Слайд {{index}} из {{slidesLength}}',
      },

    });


  }

  if (window.innerWidth < 553 && publicationSlider.classList.contains('swiper-initialized')) {
    publicationswiper.destroy();
  }
}


desctopSlider();

window.addEventListener('resize', () => {
  desctopSlider();
})

const eventsSlider = document.querySelector('.events-swiper');
let eventsswiper;
const mobileEventsSlider = () => {
  if (window.innerWidth <= 766 && eventsSlider.dataset.mobile == 'false') {
    eventsswiper = new Swiper(eventsSlider, {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 10,
      loop: true,

      pagination: {
        el: '.events-swiper-pagination',
        type: 'bullets',
        clickable: 'true',
      },
    });

    eventsSlider.dataset.mobile = 'true';
  }
  if (window.innerWidth > 767) {
    eventsSlider.dataset.mobile = 'false';

    if (eventsSlider.classList.contains('swiper-initialized')) {
      eventsswiper.destroy();
    }
  }
}

mobileEventsSlider();
window.addEventListener('resize', () => {
  mobileEventsSlider();
});
