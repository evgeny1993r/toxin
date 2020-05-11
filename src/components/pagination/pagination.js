import './pagination.scss'

import 'paginationjs/dist/pagination'

import { Room } from '../room/room'

function Pagination () {
    let source = []
    const items = $('.room')
    for(let i = 0; i < items.length; i++) {
        source.push($(items[i]).html())
    }
    function template(data) {
        let html = ''
        $.each(data, function(index, item){
            html += `<div class="room"> ${item} </div>`
        })
        return html
    }
    
    $('#pagination-container').pagination({
        dataSource: source,
        pageSize: 12,
        showPrevious: false,
        nextText: `<i class="icon-arrow_forward"></i>`,
        pageRange: 1,
        showNavigator: true,
        formatNavigator: '<span>1 - 12 из 100+ вариантов аренды</span>',
        callback: function(data, pagination) {
            var html = template(data)
            $('#rooms-container').html(html)
            Room()
        }
    })
}

export {
    Pagination
}