class Check {
    constructor(price, discount, collecting) {
        this.$documnet = $(document)
        this.$documnet.on('dateDropdownInitiated', () => {
            this.price = price
            this.discount = discount
            this.collecting = collecting
            this.$check = $('.check')
            this.$dateDropdownEntryInput = this.$check.find('.js-date-dropdown__input-entry')
            this.$dateDropdownCheckOutInput = this.$check.find('.js-date-dropdown__input-check-out')
            this.$priceText = this.$check.find('.js-check__price-text')
            this.$priceValue = this.$check.find('.js-check__price-value')
            this.$discountText = this.$check.find('.js-check__discount-text')
            this.$discountPrice = this.$check.find('.js-check__discount-price')
            this.$collectingText = this.$check.find('.js-check__collecting-text')
            this.$collectingPrice = this.$check.find('.js-check__collecting-price')
            this.$totalPrice = this.$check.find('.js-check__total-price')
            this.$dateDropdownBtnApply = this.$check.find('.js-datepicker__apply') 
            this.$dateDropdownBtnApply.on('click', () => {
                this.createStringPrice()
                this.createStringTotal()
            })
            this.createStringPrice()
            this.createStringDiscount()
            this.createStringCollection()
            this.createStringTotal()    
        })
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
    Check 
}