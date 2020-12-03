import 'air-datepicker';
import 'air-datepicker/dist/css/datepicker.min.css';

class MaskedTextField {
  constructor(maskedTextField) {
    this.$maskedTextField = $(maskedTextField);
    this.$maskedTextFieldInput = this.$maskedTextField.find('.js-masked-text-field__input');
    this.$maskedTextFieldDatepicker = this.$maskedTextField.find('.js-masked-text-field__datepicker');
    this.isShowDatepicker = false;

    this.init();

    this.addButtonApply();

    this.$maskedTextFieldItems = this.$maskedTextField.find('*');

    this.$maskedTextFieldDatepicker.hide();

    this.$maskedTextFieldInput.on('click', () => {
      this.handleMaskedTextFieldClick();
    });

    $(document).on('click', (e) => {
      this.handleDocumentClick(e);
    });
  }

  init() {
    this.$maskedTextFieldDatepicker.datepicker({
      classes: 'datepicker-masked-text-field',
      navTitles: {
        days: 'MM <i>yyyy</i>',
      },
      nextHtml: `
        <svg class="datepicker--next-html" width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path class="datepicker--next-html" d="M8.36301 0.984375L16.3786 9L8.36301 17.0156L6.95676 15.6094L12.5349 9.98438H0.347383V8.01562H12.5349L6.95676 2.39062L8.36301 0.984375Z" fill="#BC9CFF"/>
        </svg>
      `,
      prevHtml: `
        <svg class="datepicker--prev-html" width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path class="datepicker--prev-html" d="M16.1755 8.01562V9.98438H3.98801L9.56613 15.6094L8.15988 17.0156L0.144258 9L8.15988 0.984375L9.56613 2.39062L3.98801 8.01562H16.1755Z" fill="#BC9CFF"/>
        </svg>
      `,
      offset: 7,
      clearButton: true,
      onSelect: (fd) => this.onSelect(fd),
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
        this.addButtonApplyClick();
      },
    });
    this.$datepickerButtons = this.$maskedTextField.find('.datepicker--buttons');
    this.$datepickerButtons.append(this.buttonApply);
  }

  handleButtonApplyClick() {
    this.$maskedTextFieldDatepicker.hide();
    this.isShowDatepicker = false;
  }

  handleMaskedTextFieldClick() {
    if (this.isShowDatepicker) {
      this.$maskedTextFieldDatepicker.hide();
      this.isShowDatepicker = false;
    } else {
      this.$maskedTextFieldDatepicker.show();
      this.isShowDatepicker = true;
    }
  }

  handleDocumentClick(e) {
    const classes = [];

    function isElementInArray(el) {
      return $(el).attr('class') !== undefined && $.inArray($(el).attr('class').split(' ')[0], classes) < 0;
    }

    this.$maskedTextFieldItems.each((_, el) => {
      if (isElementInArray(el)) {
        classes.push($(el).attr('class').split(' ')[0]);
      }
    });

    if ($.inArray($(e.target).attr('class').split(' ')[0], classes) < 0) {
      this.$maskedTextFieldDatepicker.hide();
      this.isShowDatepicker = false;
    }
  }
}

export {
  MaskedTextField,
};
