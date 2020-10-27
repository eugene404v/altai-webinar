import Swiper, { Navigation, Pagination } from 'swiper'
import { Hamburger } from './modules/hamburger'
import { Inputs } from './modules/inputs'
import { Checks } from './modules/checkboxes'
import { Notify } from './modules/notify'
import './modules/popup'


//slider
Swiper.use([Navigation, Pagination]);

const mySwiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})

//hamburger
const menu = new Hamburger('.header__hamburger', '.header__menu')
menu.init()

//contacts inputs
const inputs = new Inputs('.form__input')
inputs.init()

//dropdown checkboxes
const checkboxes = new Checks()
checkboxes.init()

//notify opening
const notify = new Notify
notify.init()

//scroll
const anchors = document.querySelectorAll('.scroll');

for (let anchor of anchors) {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const blockID = anchor.getAttribute('href');

        menu.$trigger.classList.remove('header__hamburger--opened')
        menu.$menu.classList.remove('header__menu--opened')
        document.body.classList.remove('overflow-hidden')

        document.querySelector(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}