// hamburger menu

const menuTrigger = document.querySelector('.header__hamburger')
const menu = document.querySelector('.header__menu')

menuTrigger.addEventListener('click', () => {
    menuTrigger.classList.toggle('header__hamburger--opened')
    menu.classList.toggle('header__menu--opened')
    document.body.classList.toggle('overflow-hidden')
})

//contacts inputs

const inputs = document.querySelectorAll('.form__input')

inputs.forEach(el => {
    el.addEventListener('focus', () => {
        if (el.previousElementSibling.classList.contains('form__label')) {
            el.previousElementSibling.classList.add('form__label--fill')
        }
    })
})

inputs.forEach(el => {
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

//dropdown checkboxes

const dropInputs = document.querySelectorAll('.drop__check')
const dropAll = document.querySelector('.drop__all')
const dropHeader = document.querySelector('.drop__title--name')
const dropValue = document.querySelector('.drop__title--value')
let dropTitle = []

dropInputs.forEach(el => {
    el.addEventListener('change', () => {
        dropTitle = []
        dropInputs.forEach(elem => {
            if (elem.checked) {
                dropTitle.push(elem.value)
            }
        })
        dropHeader.textContent = `Выбранные вебинары:  `
        dropValue.textContent = cutOffTitle(dropTitle, 30)
        if (dropTitle.length < 1) {
            dropHeader.textContent = `Выберите вебинар :`
        } else if (dropTitle.length >= 5) {
            dropHeader.textContent = `Выбраны все вебинары`
            dropValue.textContent = ''
        }
    })
})

dropAll.addEventListener('click', () => {
    dropInputs.forEach(el => {
        el.checked = "true"
    })
    dropHeader.textContent = `Выбраны все вебинары`
    dropValue.textContent = ''
})

function cutOffTitle(arr, length) {
    let result = []
    let str = arr.join(', ')
    let arrStr = str.split('')
    for (let i = 0; i < length; i++) {
        result.push(arrStr[i])
    }
    if (arrStr.length < length) {
        return result.join('')
    } else {
        return `${result.join('')}...`
    }

}

//dropdown opening

const dropHeadline = document.querySelector('.drop__title')
const dropMenu = document.querySelector('.drop__expand')
const dropError = document.querySelector('.form__error--expand')

dropHeadline.addEventListener('click', () => {
    if (!dropHeadline.classList.contains('drop__title--opened')) {
        dropHeadline.classList.add('drop__title--opened')
        dropMenu.classList.add('drop__expand--opened')
    } else {
        dropHeadline.classList.remove('drop__title--opened')
        dropMenu.classList.remove('drop__expand--opened')
        if (dropTitle.length < 1) {
            dropError.classList.add('form__error--visible')
        } else {
            dropError.classList.remove('form__error--visible')
        }
    }
})

document.body.addEventListener('click', (e) => {
    if (!e.target.closest('.drop')) {
        dropHeadline.classList.remove('drop__title--opened')
        dropMenu.classList.remove('drop__expand--opened')
    }
})

//notify opening

const notifyTitle = document.querySelector('.notify__title')
const notifyList = document.querySelector('.notify__list')
const notifyRadios = document.querySelectorAll('.notify__radio')
const notifyItems = document.querySelectorAll('.notify__item')

notifyTitle.addEventListener('click', () => {
    notifyTitle.classList.toggle('notify__title--opened')
    notifyList.classList.toggle('notify__list--opened')
})

notifyRadios.forEach(el => {
    el.addEventListener('change', () => {
        notifyTitle.classList.remove('notify__title--opened')
        notifyList.classList.remove('notify__list--opened')
        notifyTitle.textContent = el.dataset.value
        notifyItems.forEach(el => el.classList.remove('notify__item--active'))
        el.parentNode.classList.add('notify__item--active')
    })
})

document.body.addEventListener('click', (e) => {
    if (e.target != notifyList && e.target != notifyTitle) {
        notifyTitle.classList.remove('notify__title--opened')
        notifyList.classList.remove('notify__list--opened')
    }
})

//popup 

const popupBtn = document.querySelector('#popup__btn')
const popup = document.querySelector('.popup')
const popupLayout = document.querySelector('.popup__layout')

popupBtn.addEventListener('click', () => {
    window.showPopup()
})

popupLayout.addEventListener('click', () => {
    window.hidePopup()
})

window.showPopup = () => {
    popup.classList.toggle('popup--opened')
    popup.classList.add('popup--clicked')
}

window.hidePopup = () => {
    popup.classList.remove('popup--opened')
}

// scroll to anchors

const anchors = document.querySelectorAll('.scroll');

for (let anchor of anchors) {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const blockID = anchor.getAttribute('href');

        document.querySelector(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}