import { LikeButton } from './LikeButton';

const $likeButton = $('.js-like-button');
$likeButton.each((_, likeButton) => {
  new LikeButton(likeButton);
});
