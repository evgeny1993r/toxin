import 'air-datepicker';
import 'air-datepicker/dist/css/datepicker.min.css';

class Calendar {
  constructor(calendar) {
    this.$calendar = $(calendar);
    this.oneDate = this.$calendar.data('one-date');
    this.twoDate = this.$calendar.data('two-date');
    this.init();
    this.addButtonApply();
    this.selectedDates();
  }

  init() {
    this.$calendar.datepicker({
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
    });
  }

  addButtonApply() {
    this.$datepickerButtons = this.$calendar.find('.datepicker--buttons');
    this.$datepickerButtons.append(
      $('<span>', {
        class: 'datepicker--button js-datepicker__apply',
        text: 'Применить',
        'data-action': 'hide',
        click: () => {
          this.$datepicker.hide();
        },
      }),
    );
  }

  selectedDates() {
    this.$calendar.data('datepicker').selectDate([
      new Date(this.oneDate),
      new Date(this.twoDate),
    ]);
  }
}

export {
  Calendar,
};
