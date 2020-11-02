export class Checks {
    constructor() {
        this.$dropInputs = document.querySelectorAll('.drop__check')
        this.$dropAll = document.querySelector('.drop__all')
        this.$dropHeader = document.querySelector('.drop__title--name')
        this.$dropValue = document.querySelector('.drop__title--value')

        this.$dropHeadline = document.querySelector('.drop__title')
        this.$dropMenu = document.querySelector('.drop__expand')
        this.$dropError = document.querySelector('.form__error--expand')

        this.$programBtns = document.querySelectorAll('.card__btn')

        this.dropTitle = []
    }

    init() {
        this.initCheckboxes()
        this.initAllBtn()
        this.initDropClose()
        this.initDropToggle()
        this.initProgramBtns()
    }

    //inits

    initCheckboxes() {
        this.$dropInputs.forEach(el => {
            el.addEventListener('change', () => {

                this.rerenderInputs.call(this)
            })
        })
    }

    initAllBtn() {
        this.$dropAll.addEventListener('click', () => {
            this.selectAll.call(this)
        })
    }

    initDropClose() {
        document.body.addEventListener('click', (e) => {
            this.closeDrop(e)
        })
    }


    initDropToggle() {
        this.$dropHeadline.addEventListener('click', () => {
            this.toggleDrop()
        })
    }


    initProgramBtns() {
            this.$programBtns.forEach(el => {
                el.addEventListener('click', (e) => {
                    e.preventDefault();
                    const blockID = el.dataset.id

                    if (blockID === "webinarAll") {
                        this.selectAll()
                    }

                    document.querySelector('.contacts').scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    })

                    this.openDrop.call(this)

                    this.$dropInputs.forEach(el => {
                        if (el.id === blockID) {
                            el.setAttribute("checked", "true")
                            this.rerenderInputs.call(this)
                        }
                    })
                })
            })
        }
        //methods

    openDrop() {
        this.$dropHeadline.classList.add('drop__title--opened')
        this.$dropMenu.classList.add('drop__expand--opened')
    }

    closeDrop(e) {
        if (!e.target.closest('.drop') && !e.target.closest('.card__btn')) {
            this.$dropHeadline.classList.remove('drop__title--opened')
            this.$dropMenu.classList.remove('drop__expand--opened')
        }
    }

    toggleDrop() {
        if (!this.$dropHeadline.classList.contains('drop__title--opened')) {
            this.$dropHeadline.classList.add('drop__title--opened')
            this.$dropMenu.classList.add('drop__expand--opened')
        } else {
            this.$dropHeadline.classList.remove('drop__title--opened')
            this.$dropMenu.classList.remove('drop__expand--opened')
            if (this.dropTitle.length < 1) {
                this.$dropError.classList.add('form__error--visible')
            } else {
                this.$dropError.classList.remove('form__error--visible')
            }
        }
    }

    selectAll() {
        this.$dropInputs.forEach(el => {
            el.checked = "true"
        })
        this.$dropHeader.textContent = `Выбраны все вебинары`
        this.$dropValue.textContent = ''
    }

    rerenderInputs() {
        this.dropTitle = []
        this.$dropInputs.forEach(elem => {
            if (elem.checked) {
                this.dropTitle.push(elem.dataset.value)
            }
        })
        this.$dropHeader.textContent = `Выбранные вебинары:  `
        this.$dropValue.textContent = cutOffTitle(this.dropTitle, 30)
        if (this.dropTitle.length < 1) {
            this.$dropHeader.textContent = `Выберите вебинар :`
        } else if (this.dropTitle.length >= 5) {
            this.$dropHeader.textContent = `Выбраны все вебинары`
            this.$dropValue.textContent = ''
        }
    }
}



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