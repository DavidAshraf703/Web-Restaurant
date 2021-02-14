AOS.init();

const logoBrand = document.querySelector(".logo-brand");
const logo = document.querySelector(".logo-name");
const menu = document.querySelectorAll(".nav-link");
const form = document.querySelector(".form-inline");
const cardSlider = document.querySelector(".carousel");
const animate = new TimelineMax();

animate.fromTo(logoBrand,0.7,{opacity:0,x: -70},{opacity:1, x: 0 , ease: Power2.easeInOut})
animate.fromTo(logo,0.7, {opacity:0,y: -55},{opacity:1, y: 0 , ease: Power2.easeInOut})
menu.forEach(nav => {
    animate.fromTo(nav,0.2, {bottom:"123px"},{bottom:"30px", ease: Power2.easeInOut})
});
animate.fromTo(cardSlider,0.5, {opacity:0},{opacity:1, ease: Power2.easeInOut}, "-=0.5")
animate.fromTo(form,0.2, {opacity:0},{opacity:1, ease: Power2.easeInOut})

