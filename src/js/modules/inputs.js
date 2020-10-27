export class Inputs {
    constructor(inputs) {
        this.$inputs = document.querySelectorAll(inputs)
    }
    init() {
        this.$inputs.forEach(el => {
            el.addEventListener('focus', () => {
                if (el.previousElementSibling.classList.contains('form__label')) {
                    el.previousElementSibling.classList.add('form__label--fill')
                }
            })
        })

        this.$inputs.forEach(el => {
            el.addEventListener('blur', () => {
                if (!el.value && el.previousElementSibling.classList.contains('form__label')) {
                    el.previousElementSibling.classList.remove('form__label--fill')
                }
                if (!el.value && el.nextElementSibling && el.nextElementSibling.classList.contains('form__error') && el.dataset.req === "true") {
                    el.classList.add('form__input--error')
                    el.nextElementSibling.classList.add('form__error--visible')

                } else if (el.value && el.nextElementSibling.classList.contains('form__error')) {
                    el.nextElementSibling.classList.remove('form__error--visible')
                    el.classList.remove('form__input--error')
                }
            })
        })
    }
}