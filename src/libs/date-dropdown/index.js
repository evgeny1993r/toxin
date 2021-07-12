import 'air-datepicker';
import 'air-datepicker/dist/css/datepicker.min.css';

class ProxyDateDropdown {
  constructor(dateDropdown) {
    this.$dateDropdown = $(dateDropdown);
    this.$dateDropdownDatepicker = this.$dateDropdown.find('.js-date-dropdown__datepicker');
    this.entryDate = this.$dateDropdownDatepicker.data('entry-date');
    this.checkOutDate = this.$dateDropdownDatepicker.data('check-out-date');
    this.$entry = this.$dateDropdown.find('.js-date-dropdown__entry');
    this.$entryInput = this.$entry.children('.js-date-dropdown__input-entry');
    this.$checkOut = this.$dateDropdown.find('.js-date-dropdown__check-out');
    this.$checkOutInput = this.$checkOut.children('.js-date-dropdown__input-check-out');

    this.init();

    this.addButtonApply();

    this.onSelectDates();
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
    this.$datepickerButtons = $(document).find('.datepicker--buttons');
    this.$datepickerButtons.append(
      $('<span>', {
        class: 'datepicker--button js-datepicker__apply',
        text: 'Применить',
        'data-action': 'hide',
      }),
    );
  }

  onSelect(fd, date) {
    if (date.length === 0) {
      this.$entryInput.text('ДД.ММ.ГГГГ');
      this.$checkOutInput.text('ДД.ММ.ГГГГ');
      this.$dateDropdown.trigger('clearDates');
    } else if (date.length === 1) {
      this.$entryInput.text(`${fd}`);
      this.$dateDropdown.trigger('clearDates');
    } else if (date.length === 2) {
      this.$entryInput.text(fd.split(',')[0]);
      this.$entryInput.data('date', date[0]);
      this.$checkOutInput.text(fd.split(',')[1]);
      this.$checkOutInput.data('date', date[1]);
      this.$dateDropdown.trigger('updateDates');
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
}

export {
  ProxyDateDropdown,
};
