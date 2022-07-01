const arrow_prev = document.getElementsByClassName('slider__arrow_prev')
const arrow_next = document.getElementsByClassName('slider__arrow_next')
const slider_dots = document.getElementsByClassName('slider__dot')
const items = document.getElementsByClassName('slider__item')
items_array = Array.from(items)
let length = items_array.length;
let index = 0;
arrow_prev[0].onclick = () => {
    Array.from(slider_dots).forEach((dot) => {dot.className = 'slider__dot'});    
    items_array.forEach((p) => {p.className = 'slider__item'});
    index = index - 1;
    if (index<0) {index = length - 1};
    items[index].className = 'slider__item slider__item_active';
    Array.from(slider_dots)[index].className = 'slider__dot slider__dot_active';
}
arrow_next[0].onclick = () => {
    Array.from(slider_dots).forEach((dot) => {dot.className = 'slider__dot'});    
    items_array.forEach((p) => {p.className = 'slider__item'});
    index = index + 1;
    if (index>=length) {index = 0};
    items[index].className = 'slider__item slider__item_active';
    Array.from(slider_dots)[index].className = 'slider__dot slider__dot_active';
}
Array.from(slider_dots).forEach((item, i) => {
    item.onclick = () => {
        Array.from(slider_dots).forEach((dot) => {dot.className = 'slider__dot'});
        Array.from(slider_dots)[i].className = 'slider__dot slider__dot_active';
        index = i;
        items_array.forEach((p) => {p.className = 'slider__item'});
        items[i].className = 'slider__item slider__item_active';
    }
})
