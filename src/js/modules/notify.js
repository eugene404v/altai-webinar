export class Notify {
    constructor() {
        this.$notifyTitle = document.querySelector('.notify__title')
        this.$notifyList = document.querySelector('.notify__list')
        this.$notifyRadios = document.querySelectorAll('.notify__radio')
        this.$notifyItems = document.querySelectorAll('.notify__item')
    }

    init() {
        this.$notifyTitle.addEventListener('click', () => {
            this.$notifyTitle.classList.toggle('notify__title--opened')
            this.$notifyList.classList.toggle('notify__list--opened')
        })

        this.$notifyRadios.forEach(el => {
            el.addEventListener('change', () => {
                this.$notifyTitle.classList.remove('notify__title--opened')
                this.$notifyList.classList.remove('notify__list--opened')
                this.$notifyTitle.textContent = el.dataset.value
                this.$notifyItems.forEach(el => el.classList.remove('notify__item--active'))
                el.parentNode.classList.add('notify__item--active')
            })
        })

        document.body.addEventListener('click', (e) => {
            if (e.target != this.$notifyList && e.target != this.$notifyTitle) {
                this.$notifyTitle.classList.remove('notify__title--opened')
                this.$notifyList.classList.remove('notify__list--opened')
            }
        })
    }
}