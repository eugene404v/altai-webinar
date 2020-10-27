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