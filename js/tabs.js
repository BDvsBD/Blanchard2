  document.querySelectorAll('.catalog__nav-btn').forEach(function (catalogNavBtn) {
    catalogNavBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path
      document.querySelectorAll('.catalog__tab').forEach(function (catalogTab) {
        catalogTab.classList.remove('catalog__tab-active')
        document.querySelectorAll('.catalog__nav-btn').forEach(function (catalogNavBtn) {
          catalogNavBtn.classList.remove('catalog__nav-active')
        })
        document.querySelector(`[data-target="${path}"]`).classList.add('catalog__tab-active')
        document.querySelector(`[data-path="${path}"]`).classList.add('catalog__nav-active')
      })
    })
    document.querySelectorAll('.painters__btn').forEach(function (paintersBtn) {
      paintersBtn.addEventListener('click', function (event) {
        const path = event.currentTarget.dataset.path
        document.querySelectorAll('.catalog__tab-active .catalog__left').forEach(function (catalogLeft) {
          catalogLeft.classList.remove('catalog__left-active', 'box')
          document.querySelectorAll('.catalog__tab-active .painters__btn').forEach(function (paintersBtn) {
            paintersBtn.classList.remove('painters__btn-active')
            event.currentTarget.classList.add('painters__btn-active')
          })
          document.querySelector(`[data-target="${path}"]`).classList.add('catalog__left-active', 'box')
        })
      })
    })
  })

  if (window.innerWidth <= 1015) {
    $(function () {
      $('.painters__btn').on('click', function (e) {
        $('html,body').stop().animate({
          scrollTop: $('.box').offset().top
        }, 1500);
        e.preventDefault();
      });
    });
  }
