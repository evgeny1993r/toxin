import { LikeButton } from './Like-button'

const $likeButton = $('.js-like-button')
$likeButton.each((_, likeButton) => {
    new LikeButton(likeButton)    
})