window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.header__menu'),
  menuItem = document.querySelectorAll('.header__menu-link'),
  hamburger = document.querySelector('.hamburger'),
  button = document.querySelector('button');

  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger_active');
      menu.classList.toggle('header__menu_active');
  });
  menuItem.forEach(item => {
      item.addEventListener('click', () => {
          hamburger.classList.toggle('hamburger_active');
          menu.classList.toggle('header__menu_active');
      });
  });

  $('ul.market__tabs').on('click', 'li:not(.market__tab_active)', function() {
    $(this)
      .addClass('market__tab_active').siblings().removeClass('market__tab_active')
      .closest('div.container').find('div.market__content').removeClass('market__content_active').eq($(this).index()).addClass('market__content_active');
  });

  
  $('ul.market__tabs').on('click', 'li:not(.market__tab_active)', function() {
    $(this)
      .addClass('market__tab_active').siblings().removeClass('market__tab_active')
      .closest('div.container').find('div.market__content').removeClass('market__content_active').eq($(this).index()).addClass('market__content_active');
});

function toggleSlide(item) {
    $(item).each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.market-item__content').eq(i).toggleClass('market-item__content_active');
            $('.market-item__list').eq(i).toggleClass('market-item__list_active');
        });
    });
}

toggleSlide('.market-item__link');
toggleSlide('.market-item__back');
  

const mySwiper = new Swiper('.feedback__slider', {
  speed: 1000,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
});

const swiperPrev = document.getElementById('swiperPrev');
const swiperNext = document.getElementById('swiperNext');

swiperPrev.addEventListener('click', () => {
  mySwiper.slidePrev();
});
swiperNext.addEventListener('click', () => {
  mySwiper.slideNext();
});

$('.contacts__form').validate({
  rules: {
    name: {
      required: true,
      minlength: 2
    },
    phone: {
      required: true,
    }
  },
  messages: {
    name: {
      required: "Пожалуйста, введите своё имя",
      minlength: jQuery.validator.format("Введите как минимум {0} символа!")
    },
    phone: "Пожалуйста, введите номер телефона",
  }
  });
  $('input[name=phone]').mask("+7 (999) 999-99-99");

  $('.contacts__form').submit(function (e) {
    e.preventDefault();
    $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize()
    }).done(function () {
      $(this).find("input").val("");
      $('form').trigger('reset');
      alert('hi');
    });
    return false;
  });
  $("a[href^='#']").click(function(){
    const _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    $('body').removeClass('lock');
    return false;
});

});
