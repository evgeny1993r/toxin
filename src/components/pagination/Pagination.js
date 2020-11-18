import 'paginationjs/dist/pagination';

class Pagination {
  constructor(pagination) {
    this.$pagination = $(pagination);
    this.$paginationContainerItems = this.$pagination.children('.js-pagination__container-items');
    this.$paginationConatainer = this.$pagination.children('.js-pagination__container');
    this.items = this.$paginationContainerItems.children();
    this.classNameItem = this.items.attr('class');
    this.init();
  }

  init() {
    this.$paginationConatainer.pagination({
      dataSource: this.createSource(),
      pageSize: 12,
      showPrevious: false,
      nextText: '<span class="icon-arrow_forward"></span>',
      pageRange: 1,
      showNavigator: true,
      formatNavigator: '<span>1 - 12 из 100+ вариантов аренды</span>',
      callback: (data) => { this.callback(data) },
    });
  }

  createSource() {
    const source = [];
    this.items.each((_, item) => {
      source.push($(item).html());
    });
    return source;
  }

  callback(data) {
    this.$paginationContainerItems.html(() => {
      let html = '';
      $.each(data, (_, item) => {
        html += `<div class="${this.classNameItem}">${item}</div>`;
      });
      return html;
    });
  }
}

export {
  Pagination,
};
