import 'air-datepicker';
import 'air-datepicker/dist/css/datepicker.min.css';

class FilterDateDropdown {
  constructor(filterDateDropdown) {
    this.$filterDateDropdown = $(filterDateDropdown);
    this.$filterDateDropdownInput = this.$filterDateDropdown.find('.js-filter-date-dropdown__input');
    this.$filterDateDropdownDatepicker = this.$filterDateDropdown.find('.js-filter-date-dropdown__datepicker');
    this.entryDate = this.$filterDateDropdownDatepicker.data('entry-date');
    this.checkOutDate = this.$filterDateDropdownDatepicker.data('check-out-date');
    this.icon = '<span class="filter-date-dropdown__icon-expand-more icon-expand_more"></span>';
    this.isShowDatepicker = false;

    this.init();

    this.addButtonApply();

    this.$filterDateDropdownItems = this.$filterDateDropdown.find('*');

    this.$filterDateDropdownDatepicker.hide();

    this.$filterDateDropdownInput.on('click', () => this.handleFilterDateDropdownClick());

    $(document).on('click', (e) => this.handleDocumentClick(e));
  }

  init() {
    this.$filterDateDropdownDatepicker.datepicker({
      classes: 'datepicker-filter-date-dropdown',
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
      range: true,
      dateFormat: 'd M',
      multipleDatesSeparator: ' - ',
      onSelect: (fd) => this.onSelect(fd),
    }).data('datepicker').selectDate([
      new Date(this.entryDate),
      new Date(this.checkOutDate),
    ]);
  }

  onSelect(fd) {
    if (fd === '') {
      this.$filterDateDropdownInput.html(`ДД.ММ - ДД.ММ ${this.icon}`);
    } else {
      this.$filterDateDropdownInput.html(`${fd} ${this.icon}`);
    }
  }

  addButtonApply() {
    this.$datepickerButtons = this.$filterDateDropdownDatepicker.find('.datepicker--buttons');
    this.buttonApply = $('<span>', {
      class: 'datepicker--button',
      text: 'Применить',
      'data-action': 'hide',
      on: {
        click: () => this.handleButtonApplyClick(),
      },
    });

    this.$datepickerButtons.append(this.buttonApply);
  }

  handleFilterDateDropdownClick() {
    if (this.isShowDatepicker) {
      this.$filterDateDropdownDatepicker.hide();
      this.isShowDatepicker = false;
    } else {
      this.$filterDateDropdownDatepicker.show();
      this.isShowDatepicker = true;
    }
  }

  handleButtonApplyClick() {
    this.$filterDateDropdownDatepicker.hide();
    this.isShowDatepicker = false;
  }

  handleDocumentClick(e) {
    const classes = [];

    function isElementInArray(el) {
      return $(el).attr('class') !== undefined && $.inArray($(el).attr('class').split(' ')[0], classes) < 0;
    }

    this.$filterDateDropdownItems.each((_, el) => {
      if (isElementInArray(el)) {
        classes.push($(el).attr('class').split(' ')[0]);
      }
    });

    function isClassInArray() {
      return $.inArray($(e.target).attr('class').split(' ')[0], classes) < 0;
    }

    if (isClassInArray()) {
      this.$filterDateDropdownDatepicker.hide();
      this.isShowDatepicker = false;
    }
  }
}

export {
  FilterDateDropdown,
};
