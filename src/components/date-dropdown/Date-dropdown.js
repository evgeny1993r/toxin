import $ from 'jquery';
import 'air-datepicker';
import 'air-datepicker/dist/css/datepicker.min.css';

class DateDropdown {
  constructor(dateDropdownDatepicker) {
    this.$dateDropdownDatepicker = $(dateDropdownDatepicker);
    this.oneDate = this.$dateDropdownDatepicker.data('one-date');
    this.twoDate = this.$dateDropdownDatepicker.data('two-date');
    this.$entry = this.$dateDropdownDatepicker
      .parent('.js-date-dropdown')
      .find('.js-date-dropdown__entry');
    this.$entryInput = this.$entry.children('.js-date-dropdown__input-entry');
    this.$checkOut = this.$dateDropdownDatepicker
      .parent('.js-date-dropdown')
      .find('.js-date-dropdown__check-out');
    this.$checkOutInput = this.$checkOut.children('.js-date-dropdown__input-check-out');
    this.dateDropdownDatepickerIsShow = this.$dateDropdownDatepicker.data('is-show');

    this.init();

    this.onSelectDates();

    this.$entry.on('click', () => {
      this.$dateDropdownDatepicker.show();
    });

    this.$checkOut.on('click', () => {
      this.$dateDropdownDatepicker.show();
    });

    $(document).on('click', (e) => {
      this.onClickDocument(e);
    });
  }

  init() {
    this.$dateDropdownDatepicker.datepicker({
      classes: 'datepicker-date-dropdown',
      navTitles: {
        days: 'MM <i>yyyy</i>',
      },
      nextHtml: `
        <svg class="datepicker--next-html" width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.36301 0.984375L16.3786 9L8.36301 17.0156L6.95676 15.6094L12.5349 9.98438H0.347383V8.01562H12.5349L6.95676 2.39062L8.36301 0.984375Z" fill="#BC9CFF"/>
        </svg>
      `,
      prevHtml: `
        <svg class="datepicker--prev-html" width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.1755 8.01562V9.98438H3.98801L9.56613 15.6094L8.15988 17.0156L0.144258 9L8.15988 0.984375L9.56613 2.39062L3.98801 8.01562H16.1755Z" fill="#BC9CFF"/>
        </svg>
      `,
      clearButton: true,
      range: true,
      minDate: new Date(),
      onSelect: (fd, date) => this.onSelect(fd, date),
    });

    this.addButtonApply();

    if (this.dateDropdownDatepickerIsShow) {
      this.$dateDropdownDatepicker.css({
        position: 'relative',
        'margin-top': '0',
      });
    } else {
      this.$dateDropdownDatepicker.hide();
    }
  }

  addButtonApply() {
    this.$datepickerButtons = this.$dateDropdownDatepicker.find('.datepicker--buttons');
    this.$datepickerButtons.append(
      $('<span>', {
        class: 'datepicker--button js-datepicker__apply',
        text: 'Применить',
        'data-action': 'hide',
        click: () => this.$dateDropdownDatepicker.hide(),
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
    if (this.oneDate !== '' && this.twoDate === '') {
      this.$dateDropdownDatepicker.data('datepicker').selectDate(new Date(this.oneDate));
    } else if (this.oneDate !== '' && this.twoDate !== '') {
      this.$dateDropdownDatepicker.data('datepicker').selectDate([
        new Date(this.oneDate),
        new Date(this.twoDate),
      ]);
    }
  }

  onClickDocument(e) {
    if (this.dateDropdownDatepickerIsShow) return;
    if ($(e.target).attr('class') === undefined) {
      this.$dateDropdownDatepicker.hide();
    } else if ($(e.target).attr('class') !== undefined && $(`.${$(e.target).attr('class').split(' ')[0]}`).parents('.js-date-dropdown').length === 0) {
      this.$dateDropdownDatepicker.hide();
    }
  }
}

export {
  DateDropdown,
};
