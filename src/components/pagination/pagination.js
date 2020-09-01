import './pagination.scss'

import 'paginationjs/dist/pagination'

function Pagination (classNameItems, containerItems, containerPagination, method) {
    let source = []
    const items = $(`.${classNameItems}`)
    for(let i = 0; i < items.length; i++) {
        source.push($(items[i]).html())
    }
    function template(data) {
        let html = ''
        $.each(data, function(index, item){
            html += `<div class="${classNameItems}"> ${item} </div>`
        })
        return html
    }
    
    $(`#${containerPagination}`).pagination({
        dataSource: source,
        pageSize: 12,
        showPrevious: false,
        nextText: `<i class="icon-arrow_forward"></i>`,
        pageRange: 1,
        showNavigator: true,
        formatNavigator: '<span>1 - 12 из 100+ вариантов аренды</span>',
        callback: function(data, pagination) {
            var html = template(data)
            $(`#${containerItems}`).html(html)
            if(method) method()
        }
    })
}

export {
    Pagination
}