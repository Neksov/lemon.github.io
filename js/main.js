$(document).ready(function () {
  let modal = $(".modal"); //помещаем модальное окно avthor
  modalBtn = $("[data-toggle = modal]"); //avthor
  closeBtn = $(".modal__close"); //avthor

  //LOGIN
  let logIn = $(".logIn"); //помещаем модальное окно avthor
  logInBtn = $("[data-toggle = logIn]"); //avthor
  closeBtnlogIn = $(".logIn__close"); //avthor
  closeLogin = $(".logIn__accaunt");

  //SIGNIN
  let signIn = $(".signIn"); //помещаем модальное окно avthor
  signInBtn = $("[data-toggle = signIn]"); //avthor
  closeBtnsignIn = $(".signIn__close"); //avthor

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

  closeLogin.on("click", function () {
    //присваееваем класс
    logIn.toggleClass("logIn--visible");
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

  //SIGNIN
  signInBtn.on("click", function () {
    //присваееваем класс
    signIn.toggleClass("signIn--visible");
  });

  closeBtnsignIn.on("click", function () {
    //присваееваем класс
    signIn.toggleClass("signIn--visible");
  });
  //закрытие по esc
  $(document).keyup("click", function (event) {
    if (event.which == "27") {
      $(".signIn").removeClass("signIn--visible");
    }
  });
  // закрытие по клику вне окна
  $(document).click(function (e) {
    if ($(e.target).is(".signIn")) {
      signIn.toggleClass("signIn--visible");
    }
  });

  //burger
  $(".menu__btn").on("click", function () {
    $("menu__item").removeClass("topmenu");
  });

  //слайдер recipe
  var swiper = new Swiper(".slider-gallery", {
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: {
      delay: 8000,
    },
  });

  //слайдер recipees
  var swiper = new Swiper(".slider-gallery1", {
    autoplay: {
      delay: 8000,
    },
  });

  //анимация
  new WOW().init();

  //валидация форм
  $(".logIn__form").validate({
    errorClass: "invalid",
    rules: {
      // строчное правило
      userName: {
        required: true,
        minlength: 2,
        maxlength: 30,
      },
      userPassword: {
        required: true,
        minlength: 2,
        maxlength: 30,
      },
      checkBoxModal: "required",
    },
    //сообщения
    messages: {
      userName: {
        required: "Имя или e-mail обязательно",
        minlength: "Не короче 2 символов",
        maxlength: "Не длиньше 30 символов",
      },
      userPassword: {
        required: "Пароль обязателен",
        minlength: "Не короче 2 символов",
        maxlength: "Не длиньше 30 символов",
      },
      checkBoxModal: "Сохранить Вас?",
    },
    //отправка формы через аякс
    submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: "logIn.php",
        data: $(".logIn__form").serialize(), //Преобразует данные формы в строку, пригодную для использования в URL
        success: function (response) {
          $(form)[0].reset(); // чистит поля после отправки формы
          logIn.removeClass("logIn--visible");

          $(".logIn__dialog").fadeOut();
        },
      });
    },
  });

  $(".signIn__form").validate({
    errorClass: "invalid",
    rules: {
      // строчное правило
      userName: {
        required: true,
        minlength: 2,
        maxlength: 30,
      },
      userEmail: {
        required: true,
        email: true,
      },
      userPassword: {
        required: true,
        minlength: 2,
        maxlength: 30,
      },
      userPassword2: {
        required: true,
        minlength: 2,
        maxlength: 30,
      },
    },
    //сообщения
    messages: {
      userName: {
        required: "Имя или e-mail обязательно",
        minlength: "Не короче 2 символов",
        maxlength: "Не длиньше 30 символов",
      },
      userEmail: {
        required: "Обязательно укажите email",
        email: "Введите в формате: name@domain.com",
      },
      userPassword: {
        required: "Пароль обязателен",
        minlength: "Не короче 2 символов",
        maxlength: "Не длиньше 30 символов",
      },
      userPassword2: {
        required: "Повторите пароль",
        minlength: "Не короче 2 символов",
        maxlength: "Не длиньше 30 символов",
      },
    },
    //отправка формы через аякс
    submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: "signIn.php",
        data: $(".signIn__form").serialize(), //Преобразует данные формы в строку, пригодную для использования в URL
        success: function (response) {
          $(form)[0].reset(); // чистит поля после отправки формы
          signIn.removeClass("signIn--visible");
        },
      });
    },
  });
});
$("body").on("click", ".sea", function () {
  if ($("#logIn-user-password").attr("type") == "password") {
    $(this).addClass(".sea");
    $("#logIn-user-password").attr("type", "text");
  } else {
    $(this).removeClass(".sea");
    $("#logIn-user-password").attr("type", "password");
  }
  return false;
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

[].forEach.call(document.querySelectorAll("img[data-src]"), function (img) {
  img.setAttribute("src", img.getAttribute("data-src"));
  img.onload = function () {
    img.removeAttribute("data-src");
  };
});