// показываем/убираем доп информацию под карточкой
const ratingCard = document.querySelectorAll('.rating__card');
if(ratingCard) {
    for (let card of ratingCard) {
        const cardLearnMoreBtn = card.querySelector('.card__btn');
        const learnMore = card.querySelector('.card__learn-more');
        const learnMoreImg = card.querySelector('.card__btn-img');
        const learnMoreText = card.querySelector('.card__btn-text');

        cardLearnMoreBtn.addEventListener('click', function(){
            learnMore.classList.toggle('hide');
            learnMoreImg.classList.toggle('card__btn-img--active');
            learnMoreText.innerHTML = (learnMoreText.innerHTML == 'Show less') ? 'Learn more' : 'Show less' ;
        })
    }
}