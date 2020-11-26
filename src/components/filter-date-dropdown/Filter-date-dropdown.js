import 'air-datepicker';
import 'air-datepicker/dist/css/datepicker.min.css';

class FilterDateDropdown {
  constructor(filterDateDropdown) {
    this.$filterDateDropdown = $(filterDateDropdown);
    this.oneDate = this.$filterDateDropdown.data('one-date');
    this.twoDate = this.$filterDateDropdown.data('two-date');
    this.$filterDateDropdownInput = this.$filterDateDropdown.siblings('.js-filter-date-dropdown__input');
    this.icon = '<span class="filter-date-dropdown__icon-expand-more icon-expand_more"></span>';
    this.isShowDatepicker = false;
    this.init();

    this.$filterDateDropdownInput.on('click', () => {
      if (this.isShowDatepicker) {
        this.$filterDateDropdown.hide();
        this.isShowDatepicker = false;
      } else {
        this.$filterDateDropdown.show();
        this.isShowDatepicker = true;
      }
    });

    $(document).on('click', (e) => this.onClickDocument(e));
  }

  init() {
    this.$filterDateDropdown.datepicker({
      classes: 'datepicker-filter-date-dropdown',
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
      range: true,
      dateFormat: 'd M',
      multipleDatesSeparator: ' - ',
      onSelect: (fd) => this.onSelect(fd),
    }).data('datepicker').selectDate([new Date(this.oneDate), new Date(this.twoDate)]);
    this.$filterDateDropdown.hide();
    this.addButtonApply();
  }

  onSelect(fd) {
    if (fd === '') {
      this.$filterDateDropdownInput.html(`ДД.ММ - ДД.ММ ${this.icon}`);
    } else {
      this.$filterDateDropdownInput.html(`${fd} ${this.icon}`);
    }
  }

  addButtonApply() {
    this.$datepickerButtons = this.$filterDateDropdown.find('.datepicker--buttons');
    this.buttonApply = $('<span>', {
      class: 'datepicker--button',
      text: 'Применить',
      'data-action': 'hide',
      on: {
        click: () => {
          this.$filterDateDropdown.hide();
          this.isShowDatepicker = false;
        },
      },
    });
    this.$datepickerButtons.append(this.buttonApply);
  }

  onClickDocument(e) {
    if ($(e.target).attr('class') === undefined) {
      this.$filterDateDropdown.hide();
      this.isShowDatepicker = false;
    } else if ($(e.target).attr('class') !== undefined && $(`.${$(e.target).attr('class').split(' ')[0]}`).parents('.filter-date-dropdown').length === 0) {
      this.$filterDateDropdown.hide();
      this.isShowDatepicker = false;
    }
  }
}

export {
  FilterDateDropdown,
};
