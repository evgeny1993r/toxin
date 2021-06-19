class MaskedTextField {
  constructor() {
    this.init();
  }

  init() {
    this.dateValue = '';
    this.$maskedTextField = $('.js-masked-text-field');
    this.$maskedTextFieldInput = this.$maskedTextField.find('.masked-text-field__input');
    this.$maskedTextFieldInput.on('keyup', (e) => this.handleMaskedTextFieldInputKeyup(e));
  }

  // eslint-disable-next-line class-methods-use-this
  isValidateValue(value, minValue, maxValue) {
    if (!/[a-zа-яё]/i.test(value) && value >= minValue && value <= maxValue) return true;
    return false;
  }

  onBackspace() {
    const arr = this.dateValue.split('');
    const arrLength = arr.length;
    if (arr[arrLength - 1] === '.') {
      arr.splice(arrLength - 2, 2);
      this.dateValue = arr.join('');
      this.$maskedTextFieldInput.val(this.dateValue);
    }
  }

  onChange(value) {
    switch (value.length) {
      case 0:
        this.dateValue = '';
        this.$maskedTextFieldInput.val(this.dateValue);
        break;
      case 1:
        if (this.isValidateValue(value, 1, 31)) {
          this.dateValue = value;
          this.$maskedTextFieldInput.val(this.dateValue);
        } else {
          this.$maskedTextFieldInput.val(this.dateValue);
        }
        break;
      case 2:
        if (this.isValidateValue(value, 1, 31)) {
          this.dateValue = `${value}.`;
          this.$maskedTextFieldInput.val(this.dateValue);
        } else {
          this.$maskedTextFieldInput.val(this.dateValue);
        }
        break;
      case 4:
        if (this.isValidateValue(value.split('.')[1], 1, 12)) {
          this.dateValue = value;
          this.$maskedTextFieldInput.val(this.dateValue);
        } else {
          this.$maskedTextFieldInput.val(this.dateValue);
        }
        break;
      case 5:
        if (this.isValidateValue(value.split('.')[1], 1, 12)) {
          this.dateValue = `${value}.`;
          this.$maskedTextFieldInput.val(this.dateValue);
        } else {
          this.$maskedTextFieldInput.val(this.dateValue);
        }
        break;
      case 7:
        if (this.isValidateValue(value.split('.')[2], 0, 2003)) {
          this.dateValue = value;
          this.$maskedTextFieldInput.val(this.dateValue);
        } else {
          this.$maskedTextFieldInput.val(this.dateValue);
        }
        break;
      case 8:
        if (this.isValidateValue(value.split('.')[2], 0, 2003)) {
          this.dateValue = value;
          this.$maskedTextFieldInput.val(this.dateValue);
        } else {
          this.$maskedTextFieldInput.val(this.dateValue);
        }
        break;
      case 9:
        if (this.isValidateValue(value.split('.')[2], 0, 2003)) {
          this.dateValue = value;
          this.$maskedTextFieldInput.val(this.dateValue);
        } else {
          this.$maskedTextFieldInput.val(this.dateValue);
        }
        break;
      case 10:
        if (this.isValidateValue(value.split('.')[2], 1900, 2003)) {
          this.dateValue = value;
          this.$maskedTextFieldInput.val(this.dateValue);
        } else {
          this.$maskedTextFieldInput.val(this.dateValue);
        }
        break;
      default:
        this.$maskedTextFieldInput.val(this.dateValue);
    }
  }

  handleMaskedTextFieldInputKeyup(e) {
    const { value } = e.currentTarget;

    if (e.key === 'Backspace') {
      this.onBackspace();
    } else {
      this.onChange(value);
    }
  }
}

export {
  MaskedTextField,
};
