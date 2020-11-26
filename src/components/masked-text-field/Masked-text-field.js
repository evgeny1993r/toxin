import 'air-datepicker';
import 'air-datepicker/dist/css/datepicker.min.css';

class MaskedTextField {
  constructor(maskedTextField) {
    this.$maskedTextField = $(maskedTextField);
    this.$maskedTextFieldInput = this.$maskedTextField.parent().find('.masked-text-field__input');
    this.isShowDatepicker = false;
    this.init();
  }

  init() {
    this.$maskedTextField.datepicker({
      classes: 'datepicker-masked-text-field',
      navTitles: {
        days: 'MM <i>yyyy</i>',
      },
      nextHtml: `
        <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.36301 0.984375L16.3786 9L8.36301 17.0156L6.95676 15.6094L12.5349 9.98438H0.347383V8.01562H12.5349L6.95676 2.39062L8.36301 0.984375Z" fill="#BC9CFF"/>
        </svg>
      `,
      prevHtml: `
        <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.1755 8.01562V9.98438H3.98801L9.56613 15.6094L8.15988 17.0156L0.144258 9L8.15988 0.984375L9.56613 2.39062L3.98801 8.01562H16.1755Z" fill="#BC9CFF"/>
        </svg>
      `,
      offset: 7,
      clearButton: true,
      onSelect: (fd) => this.onSelect(fd),
    });

    this.addButtonApply();
    this.$maskedTextField.hide();

    this.$maskedTextFieldInput.on('click', () => {
      if (this.isShowDatepicker) {
        this.$maskedTextField.hide();
        this.isShowDatepicker = false;
      } else {
        this.$maskedTextField.show();
        this.isShowDatepicker = true;
      }
    });

    $(document).on('click', (e) => {
      this.onClickDocument(e);
    });
  }

  onSelect(fd) {
    if (fd !== '') {
      this.$maskedTextFieldInput.text(fd);
    } else {
      this.$maskedTextFieldInput.text('ДД.ММ.ГГГГ');
    }
  }

  addButtonApply() {
    this.buttonApply = $('<span>', {
      class: 'datepicker--button',
      text: 'Применить',
      'data-action': 'hide',
      click: () => {
        this.$maskedTextField.hide();
        this.isShowDatepicker = false;
      },
    });
    this.$datepickerButtons = $('.datepicker-masked-text-field').find('.datepicker--buttons');
    this.$datepickerButtons.append(this.buttonApply);
  }

  onClickDocument(e) {
    if ($(e.target).attr('class') === undefined) {
      this.$maskedTextField.hide();
      this.isShowDatepicker = false;
    } else if ($(e.target).attr('class') !== undefined && $(`.${$(e.target).attr('class').split(' ')[0]}`).parents('.masked-text-field').length === 0) {
      this.$maskedTextField.hide();
      this.isShowDatepicker = false;
    }
  }
}

export {
  MaskedTextField,
};
