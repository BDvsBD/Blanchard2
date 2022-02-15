document.addEventListener('DOMContentLoaded', () => {
      const menuBtns = document.querySelectorAll('.drop-btn');
      const drops = document.querySelectorAll('.simplebar-container');

      menuBtns.forEach(el => {
        el.addEventListener('click', (e) => {
          let currentBtn = e.currentTarget;
          let drop = currentBtn.closest('.art-types__item').querySelector('.simplebar-container');

          menuBtns.forEach(el => {
            if (el !== currentBtn) {
              el.classList.remove('button--active');
            }
          });

          drops.forEach(el => {
            if (el !== drop) {
              el.classList.remove('simplebar-container--active');
            }
          });

          drop.classList.toggle('simplebar-container--active');
          currentBtn.classList.toggle('button--active');
        });
      });
      document.addEventListener('click', (e) => {
          if (!e.target.closest('.art-types__list')) {
            menuBtns.forEach(el => {
                el.classList.remove('button--active');
                }); drops.forEach(el => {
                el.classList.remove('simplebar-container--active');
              });
            }
          });
      });

