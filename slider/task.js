const arrowPrev = document.getElementsByClassName('slider__arrow_prev')
const arrowNext = document.getElementsByClassName('slider__arrow_next')
const sliderDots = document.getElementsByClassName('slider__dot')
const items = document.getElementsByClassName('slider__item')
let itemsArray = Array.from(items)
let length = itemsArray.length;
let index = 0;

function makeActive(ind) {
    Array.from(sliderDots).forEach((dot) => {dot.className = 'slider__dot'});
    itemsArray.forEach((item) => {item.className = 'slider__item'});    
    items[ind].className = 'slider__item slider__item_active';
    Array.from(sliderDots)[ind].className = 'slider__dot slider__dot_active';
}

arrowPrev[0].onclick = () => {
    index = index - 1
    if (index<0) {index = length - 1};
    makeActive(index)
}

arrowNext[0].onclick = () => {    
    index = index + 1;
    if (index>=length) {index = 0};
    makeActive(index);  
}

Array.from(sliderDots).forEach((item, i) => {
    item.onclick = () => {     
        index = i;
        makeActive(index);     
    }
})
