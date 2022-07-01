let main = document.getElementById('modal_main');
main.className = `${main.className} modal_active`;
const modal_success = document.getElementById('modal_success');
const closer = document.getElementsByClassName('modal__close');
let array = Array.from(closer);
array.forEach((p) => {
    p.onclick = () => {    
        main.className = 'modal';
        modal_success.className = 'modal';
}})
const success = document.getElementsByClassName('show-success');
let array1 = Array.from(success);

array1.forEach((p) => {
    p.onclick = () => {
        modal_success.className = 'modal modal_active';
}})