export class Hamburger {
    constructor(trigger, menu) {
        this.$trigger = document.querySelector(trigger)
        this.$menu = document.querySelector(menu)
    }

    openMenu() {
        this.$menu.classList.add('header__menu--opened')
        this.$trigger.classList.add('header__hamburger--opened')
        document.body.classList.add('overflow-hidden')
    }

    closeMenu() {
        this.$menu.classList.remove('header__menu--opened')
        this.$trigger.classList.remove('header__hamburger--opened')
        document.body.classList.remove('overflow-hidden')
    }

    toggleMenu() {
        this.$menu.classList.toggle('header__menu--opened')
        this.$trigger.classList.toggle('header__hamburger--opened')
        document.body.classList.toggle('overflow-hidden')
    }

    init() {
        this.$trigger.addEventListener('click', this.toggleMenu.bind(this))
    }
}