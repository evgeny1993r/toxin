class VerificationForm {
  constructor(verificationForm) {
    this.$verificationForm = $(verificationForm);
    this.$dateDropdown = this.$verificationForm.find('.js-date-dropdown');
    this.$dateDropdownEntryInput = this.$verificationForm.find('.js-date-dropdown__input-entry');
    this.$dateDropdownCheckOutInput = this.$verificationForm
      .find('.js-date-dropdown__input-check-out');
    this.$priceText = this.$verificationForm.find('.js-verification-form__price-text');
    this.$priceValue = this.$verificationForm.find('.js-verification-form__price-value');
    this.$discountText = this.$verificationForm.find('.js-verification-form__discount-text');
    this.$discountPrice = this.$verificationForm.find('.js-verification-form__discount-price');
    this.$collectingText = this.$verificationForm.find('.js-verification-form__collecting-text');
    this.$collectingPrice = this.$verificationForm
      .find('.js-verification-form__collecting-price');
    this.$totalPrice = this.$verificationForm.find('.js-verification-form__total-price');
    this.$dateDropdownBtnApply = this.$verificationForm.find('.js-datepicker__apply');

    this.init();
  }

  init() {
    this.price = this.$verificationForm.data('price');
    this.discount = this.$verificationForm.data('discount');
    this.collecting = this.$verificationForm.data('collecting');

    this.createStringPrice();
    this.createStringDiscount();
    this.createStringCollection();
    this.createStringTotal();

    this.$dateDropdownBtnApply.on('click', this.handleButtonApply);
    this.$dateDropdown.on('updateDates', () => this.handleDateDropdownUpdateDates());
    this.$dateDropdown.on('clearDates', () => this.handleDateDropdownClearDates());
  }

  createTextPrice(text) {
    const arr = String(text).split('');
    const ARR_LENGTH = arr.length;
    arr.splice(ARR_LENGTH - 3, 0, ' ');
    return arr.join('');
  }

  createStringPrice() {
    let timeValue = 0;
    let timeText = 'суток';

    timeValue = (
      this.$dateDropdownCheckOutInput.data('date') - this.$dateDropdownEntryInput.data('date')
    ) / 86400000;

    if (timeValue === 1) {
      timeText = 'сутки';
    }

    this.$priceText.text(`${this.createTextPrice(this.price)}₽ x ${timeValue} ${timeText}`);
    this.$priceValue.text(`${this.createTextPrice(timeValue * this.price)}₽`);
  }

  createStringDiscount() {
    this.$discountText.text(`Сбор за услуги: скидка ${this.createTextPrice(this.discount)}₽`);
    this.$discountPrice.text('0₽');
  }

  createStringCollection() {
    this.$collectingText.text('Сбор за дополнительные услуги');
    this.$collectingPrice.text(`${this.collecting}₽`);
  }

  createStringTotal() {
    this.$totalPrice
      .text(`${this.createTextPrice(
        ((this.$dateDropdownCheckOutInput.data('date') - this.$dateDropdownEntryInput.data('date'))
        / 86400000)
        * this.price - this.discount + this.collecting,
      )
      }₽`);
  }

  handleButtonApply() {
    this.createStringPrice();
    this.createStringTotal();
  }

  handleDateDropdownUpdateDates() {
    this.createStringPrice();
    this.createStringDiscount();
    this.createStringCollection();
    this.createStringTotal();
  }

  handleDateDropdownClearDates() {
    this.$priceText.text(`${this.createTextPrice(this.price)}₽ x ${0} суток`);
    this.$priceValue.text(`${this.createTextPrice(0 * this.price)}₽`);
    this.$totalPrice.text('0₽');
  }
}

export {
  VerificationForm,
};
