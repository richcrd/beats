// Header on Scroll Color Change //
let header = document.querySelector('header')

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow',window.scrollY > 0);
});

// Menu
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-x');
    navbar.classList.toggle('active');
}

// Remove Menu On Click Any Menu Link 

window.onscroll = () => {
    menu.classList.remove('fa-x');
    navbar.classList.remove('active');
}

// Scroll Reveal Animation

const sr = scrollReveal({
    origin: 'top', 
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})

sr.reveal('.home-text,.buds-text',{origin: 'left'})
sr.reveal('.home-img,.buds-img',{origin: 'right'})
sr.reveal('.heading',{delay: '200'})
sr.reveal('.specs-details .box',{origin: 'left', interval:200})
sr.reveal('.specs-img',{delay: '600'})
sr.reveal('.shop-container .box,.footer .logo,.footer .footer-box',{interval:150})