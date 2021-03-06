import 'air-datepicker';
import 'air-datepicker/dist/css/datepicker.min.css';

class DateDropdown {
  constructor(dateDropdown) {
    this.$dateDropdown = $(dateDropdown);
    this.$dateDropdownDatepicker = this.$dateDropdown.find('.js-date-dropdown__datepicker');
    this.entryDate = this.$dateDropdownDatepicker.data('entry-date');
    this.checkOutDate = this.$dateDropdownDatepicker.data('check-out-date');
    this.$entry = this.$dateDropdown.find('.js-date-dropdown__entry');
    this.$entryInput = this.$entry.children('.js-date-dropdown__input-entry');
    this.$checkOut = this.$dateDropdown.find('.js-date-dropdown__check-out');
    this.$checkOutInput = this.$checkOut.children('.js-date-dropdown__input-check-out');
    this.isShowDatepicker = false;

    this.init();

    this.$dateDropdownDatepicker.hide();

    this.addButtonApply();

    this.$dateDropdownItems = this.$dateDropdown.find('*');

    this.onSelectDates();

    this.$entry.on('click', () => this.handleInputClick());

    this.$checkOut.on('click', () => this.handleInputClick());

    $(document).on('click', (e) => this.handleDocumentClick(e));
  }

  init() {
    this.$dateDropdownDatepicker.datepicker({
      classes: 'datepicker-date-dropdown',
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
      clearButton: true,
      range: true,
      onSelect: (fd, date) => this.onSelect(fd, date),
    });
  }

  addButtonApply() {
    this.$datepickerButtons = this.$dateDropdownDatepicker.find('.datepicker--buttons');
    this.$datepickerButtons.append(
      $('<span>', {
        class: 'datepicker--button js-datepicker__apply',
        text: 'Применить',
        'data-action': 'hide',
        click: () => this.handleButtonApplyClick(),
      }),
    );
  }

  onSelect(fd, date) {
    if (date.length === 0) {
      this.$entryInput.val('ДД.ММ.ГГГГ');
      this.$checkOutInput.val('ДД.ММ.ГГГГ');
    } else if (date.length === 1) {
      this.$entryInput.val(`${fd}`);
    } else if (date.length === 2) {
      this.$entryInput.val(fd.split(',')[0]);
      this.$entryInput.data('date', date[0]);
      this.$checkOutInput.val(fd.split(',')[1]);
      this.$checkOutInput.data('date', date[1]);
    }
  }

  onSelectDates() {
    function isDateSelected(entryDate, checkOutDate) {
      return entryDate !== '' && checkOutDate === '';
    }

    function isDatesSelected(entryDate, checkOutDate) {
      return entryDate !== '' && checkOutDate !== '';
    }

    if (isDateSelected(this.entryDate, this.checkOutDate)) {
      this.$dateDropdownDatepicker.data('datepicker').selectDate(new Date(this.entryDate));
    } else if (isDatesSelected(this.entryDate, this.checkOutDate)) {
      this.$dateDropdownDatepicker.data('datepicker').selectDate([
        new Date(this.entryDate),
        new Date(this.checkOutDate),
      ]);
    }
  }

  handleInputClick() {
    if (this.isShowDatepicker) {
      this.$dateDropdownDatepicker.hide();
      this.isShowDatepicker = false;
    } else {
      this.$dateDropdownDatepicker.show();
      this.isShowDatepicker = true;
    }
  }

  handleButtonApplyClick() {
    this.$dateDropdownDatepicker.hide();
    this.isShowDatepicker = false;
  }

  handleDocumentClick(e) {
    const classes = [];

    function isElementInArray(el) {
      return $(el).attr('class') !== undefined && $.inArray($(el).attr('class').split(' ')[0], classes) < 0;
    }

    this.$dateDropdownItems.each((_, el) => {
      if (isElementInArray(el)) {
        classes.push($(el).attr('class').split(' ')[0]);
      }
    });

    function isClassInArray() {
      return $.inArray($(e.target).attr('class').split(' ')[0], classes) < 0;
    }

    if (isClassInArray()) {
      this.$dateDropdownDatepicker.hide();
      this.isShowDatepicker = false;
    }
  }
}

export {
  DateDropdown,
};
