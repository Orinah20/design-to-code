const menu = document.querySelector('.logo_menu')
const menuClose = document.querySelector('.close-icon')
const side_nav = document.querySelector('.side-nav')
const backdrop = document.querySelector('.backdrop');

menu.addEventListener('click', function(){
    side_nav.classList.add("open");
    backdrop.classList.add("open");
});

menuClose.addEventListener('click', function(){
    side_nav.classList.remove("open");
    backdrop.classList.remove("open");
});

backdrop.addEventListener('click', function(){
    side_nav.classList.remove("open");
    backdrop.classList.remove("open");
});