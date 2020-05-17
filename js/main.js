$(document).ready(function () {
  let modal = $(".modal"); //помещаем модальное окно avthor
  modalBtn = $("[data-toggle = modal]"); //avthor
  closeBtn = $(".modal__close"); //avthor

  //LOGIN
  let logIn = $(".logIn"); //помещаем модальное окно avthor
  logInBtn = $("[data-toggle = logIn]"); //avthor
  closeBtnlogIn = $(".logIn__close"); //avthor

  modalBtn.on("click", function () {
    //присваееваем класс
    modal.toggleClass("modal--visible");
  });

  closeBtn.on("click", function () {
    //присваееваем класс
    modal.toggleClass("modal--visible");
  });
  //закрытие по esc
  $(document).keyup("click", function (event) {
    if (event.which == "27") {
      $(".modal").removeClass("modal--visible");
    }
  });
  // закрытие по клику вне окна
  $(document).click(function (e) {
    if ($(e.target).is(".modal")) {
      modal.toggleClass("modal--visible");
    }
  });

  //LOGIN
  logInBtn.on("click", function () {
    //присваееваем класс
    logIn.toggleClass("logIn--visible");
  });

  closeBtnlogIn.on("click", function () {
    //присваееваем класс
    logIn.toggleClass("logIn--visible");
  });
  //закрытие по esc
  $(document).keyup("click", function (event) {
    if (event.which == "27") {
      $(".logIn").removeClass("logIn--visible");
    }
  });
  // закрытие по клику вне окна
  $(document).click(function (e) {
    if ($(e.target).is(".logIn")) {
      logIn.toggleClass("logIn--visible");
    }
  });



  //открытие модального окна ПОДПИСКИ
  $(".modalSend-btn").on("click", function (event) {
    event.preventDefault();
    $(".modalSend").fadeIn();
  });
  //закрытие модального окна подписки по крестику
  $(".modalSend-close").on("click", function (event) {
    event.preventDefault();
    $(".modalSend").fadeOut();
  });
  //закрытие по esc
  $(document).keyup("click", function (event) {
    if (event.which == "27") {
      $(".modalSend").fadeOut();
    }
  });
  // закрытие по клику вне окна
  $(document).on("click", function (e) {
    $(".modalSend").fadeOut();
  });

  //слайдер recipe
  var swiper = new Swiper(".slider-gallery", {
    pagination: {
      el: ".swiper-pagination",
    },
  });

  //слайдер recipees
  var swiper = new Swiper(".slider-gallery1");
  //анимация
  new WOW().init();

  //маска для номера телефона
  $("[type=tel]").mask("+7(000)000-00-00", {
    placeholder: "Ваш номер телефона:",
  });

  //плавный якорь
  $(function () {
    $('a[href^="#"]').on("click", function (event) {
      // отменяем стандартное действие
      event.preventDefault();

      var sc = $(this).attr("href"),
        dn = $(sc).offset().top;
      /*
       * sc - в переменную заносим информацию о том, к какому блоку надо перейти
       * dn - определяем положение блока на странице
       */

      $("html, body").animate({
          scrollTop: dn,
        },
        1000
      );

      /*
       * 1000 скорость перехода в миллисекундах
       */
    });
  });
});

[].forEach.call(document.querySelectorAll("img[data-src]"), function (img) {
  img.setAttribute("src", img.getAttribute("data-src"));
  img.onload = function () {
    img.removeAttribute("data-src");
  };
});