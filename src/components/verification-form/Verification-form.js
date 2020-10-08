class VerificationForm {
    constructor(price, discount, collecting) {
        this.$document = $(document)
        this.price = price
        this.discount = discount
        this.collecting = collecting
        this.$verificationForm = $('.verification-form')
        this.$dateDropdownEntryInput = this.$verificationForm.find('.js-date-dropdown__input-entry')
        this.$dateDropdownCheckOutInput = this.$verificationForm.find('.js-date-dropdown__input-check-out')
        this.$priceText = this.$verificationForm.find('.js-verification-form__price-text')
        this.$priceValue = this.$verificationForm.find('.js-verification-form__price-value')
        this.$discountText = this.$verificationForm.find('.js-verification-form__discount-text')
        this.$discountPrice = this.$verificationForm.find('.js-verification-form__discount-price')
        this.$collectingText = this.$verificationForm.find('.js-verification-form__collecting-text')
        this.$collectingPrice = this.$verificationForm.find('.js-verification-form__collecting-price')
        this.$totalPrice = this.$verificationForm.find('.js-verification-form__total-price')
        this.$dateDropdownBtnApply = this.$verificationForm.find('.js-datepicker__apply') 
        this.$dateDropdownBtnApply.on('click', () => {
            this.createStringPrice()
            this.createStringTotal()
        })
        this.createStringPrice()
        this.createStringDiscount()
        this.createStringCollection()
        this.createStringTotal()
    }

    createTextPrice(text) {
        const arr = String(text).split('')
        const ARR_LENGTH = arr.length
        arr.splice(ARR_LENGTH - 3, 0, ' ')
        return arr.join('')
    }

    createStringPrice () {
        let timeValue = 0
        let timeText = 'суток'

        timeValue = (this.$dateDropdownCheckOutInput.data('date') - this.$dateDropdownEntryInput.data('date')) / 86400000

        if(timeValue === 1) {
            timeText = 'сутки'
        }

        this.$priceText.text(`${this.createTextPrice(this.price)}₽ x ${timeValue} ${timeText}`)
        this.$priceValue.text(`${this.createTextPrice(timeValue * this.price)}₽`)
    }

    createStringDiscount () {
        this.$discountText.text(`Сбор за услуги: скидка ${this.createTextPrice(this.discount)}₽`)
        this.$discountPrice.text(`0₽`)
    }

    createStringCollection () {
        this.$collectingText.text(`Сбор за дополнительные услуги`)
        this.$collectingPrice.text(`${this.collecting}₽`)
    }

    createStringTotal() {
        this.$totalPrice.text(`${this.createTextPrice((this.$dateDropdownCheckOutInput.data('date') - this.$dateDropdownEntryInput.data('date')) / 86400000 * this.price - this.discount + this.collecting)}₽`)
    }
}

export {
    VerificationForm
}