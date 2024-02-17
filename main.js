document.addEventListener('DOMContentLoaded', function() {
    // показать/скрыть мобильное меню
    const headerMenu = document.querySelector('#header-menu');
    const menuToggle = document.querySelector('#menu-toggle');
    const bodyEl = document.body;

    menuToggle.addEventListener('click', function () {
        if(this.classList.contains('active')) {
            this.classList.remove('active');
            headerMenu.classList.remove('open');
            bodyEl.classList.remove('lock');
        }
        else{
            this.classList.add('active');
            headerMenu.classList.add('open');
            bodyEl.classList.add('lock');
        }
    })
    headerMenu.addEventListener('click', function(){
        this.classList.remove('open');
        menuToggle.classList.remove('active');
        bodyEl.classList.remove('lock');
    })
});

// backtop 

const backTopBtn = document.querySelector('#backtop');

backTopBtn.style.display = 'none';

document.addEventListener('scroll', function(){
    if(window.pageYOffset > 500){
        backTopBtn.style.display = 'block';
    }else{
        backTopBtn.style.display = 'none';
    }
})


// const backTopBtn = document.querySelector('#backtop');

// backTopBtn.style.opacity = 0;

// document.addEventListener('scroll', function(){
//     if(window.pageYOffset > 500){
//         backTopBtn.style.opacity = 1;
//     }else{
//         backTopBtn.style.opacity = 0;
//     }
// })
