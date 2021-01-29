window.addEventListener('load', () => {
    document.querySelector('.preloader').classList.add('hide');
});

document.addEventListener('DOMContentLoaded', () => {
    
    /* Блок входа */
    const buttonLoginBlock = document.querySelectorAll('.jsLoginBlock'),
          blockLogin = document.querySelector('.header__login'),
          formLogin = document.querySelector('.jsLoginForm'),
          formForgotPass = document.querySelector('.jsForgotPassForm'),
          buttonCloseLoginBlock = document.querySelector('.jsCloseLoginBlock');


    buttonLoginBlock.forEach((button) => {
        button.addEventListener('click', () => {
            if (button.classList.contains('active')) {
                closeLoginBlock();
            } else {
                blockLogin.classList.remove('hide');
                formLogin.classList.remove('hide');
                formForgotPass.classList.add('hide');
                button.classList.add('active'); 
            }

        });
    });

    buttonCloseLoginBlock.addEventListener('click', () => {
        closeLoginBlock();
    });

    const closeLoginBlock = function () {
        blockLogin.classList.add('hide');
        formLogin.reset();
        formForgotPass.reset();
        buttonLoginBlock.forEach((button) => {
            button.classList.remove('active')
        });
    };
    
    document.body.addEventListener('click', (e) => {
        if (!blockLogin.classList.contains('hide')) {
            if (!e.target.matches('.header__login') && !e.target.matches('.header__login *') && !e.target.matches('.jsLoginBlock')) {
                closeLoginBlock();
            }
        }
    });

    /* Сброс пароля */
    const buttonForgotPass = document.querySelector('.jsForgotPass');

    buttonForgotPass.addEventListener('click', () => {
        formLogin.classList.add('hide');
        formForgotPass.classList.remove('hide');
    });

    formLogin.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const login = document.querySelector('#login-email'),
              pass = document.querySelector('#login-pass');
        
        if (login.value == '') {
            sticky.alert('Имя пользователя не должно быть пустым.');
        } else if (pass.value == '') {
            sticky.alert('Пароль не должен быть пустым.');
        } else {
            sticky.alert('Неправильное имя электронной почты/пользователя или пароль.');
        }
    });

    formForgotPass.addEventListener('submit', (e) => {
        e.preventDefault();

        const login = document.querySelector('#forgot-email');
        
        if (login.value == '') {
            sticky.alert('Пожалуйста, добавьте адрес электронной почты.');
        } else {
            sticky.alert('Неверный e-mail адрес!');
        }
    });

    /*бургер меню*/
    const burger = document.querySelector('.jsBurger');
    const menu = document.querySelector('.header__menu');
    
    burger.addEventListener('click', () => {
        if (menu.classList.contains('active')) {
            menu.classList.toggle('active');
            burger.classList.toggle('active');
        } else {
            menu.classList.toggle('active');
            burger.classList.toggle('active');
        }
    })
    
    /* сабменю */
    const submenu = function() {
        const submenuButton = document.querySelector('.jsSubmenuButton');
        const submenu = document.querySelector('.jsSubmenu');
    
        submenuButton.addEventListener('click', (e) => {
            e.preventDefault();

            if (submenuButton.classList.contains('active')) {
                submenuButton.classList.remove('active');
                submenu.classList.remove('active');
            } else {
                submenuButton.classList.add('active')
                submenu.classList.add('active');
            }

        });

        document.querySelectorAll('.header__submenu-item').forEach((item)=>{
            item.addEventListener('click', (e) => e.stopPropagation());
        });
    };


    if (document.body.clientWidth <= 1100 ) {
        submenu();
    }

    let resizeWindow;
    const resize = () => {
        if (document.body.clientWidth <= 1100 ) {
            if (resizeWindow != '-') {
                console.log('-1100');
                submenu();
                resizeWindow = '-';
            }
        } else {
            if (resizeWindow != '+') {
                console.log('1100+');
                resizeWindow = '+';
            }
        }
    }


    /* модалка */
const shadow = document.querySelector('.modal'),
    modal = document.querySelector('.modal__body'),
    button = document.querySelector('.jsCall'),
    form = document.querySelector('.modal__form');

const openModal = function() {
  modal.classList.remove('hide');
  shadow.classList.remove('hide');
  document.documentElement.style.cssText = 'overflow: hidden';
};

const closeModal = function() {
  modal.classList.add('hide');
  shadow.classList.add('hide');
  document.documentElement.style.cssText = 'overflow: unset';
  form.reset();
};

modal.addEventListener('click', (e) => {
    if ( e.target.classList.contains('modal__close') ) {
        closeModal();
    }
});

shadow.addEventListener('click', (e) => {
    if ( e.target === shadow ) {
        closeModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && !modal.classList.contains('hide')) {
        closeModal();
    }
});

button.addEventListener('click', (e) => {
    e.preventDefault();
    openModal();
});

    window.addEventListener('resize', resize);
});