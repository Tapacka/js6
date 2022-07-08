const menu = document.getElementsByClassName('menu_sub');
let array1 = Array.from(menu);
array1.forEach((item) => {
    const parent = item.closest('.menu__item');    
    elem = parent.querySelector('.menu__link');
    elem.onclick = () => {
        if (item.className == 'menu menu_sub') {
            item.className = 'menu menu_sub menu_active';        
        } else {
            item.className = 'menu menu_sub';
        }
        array1.forEach((item1) => {if (item1 != item) {
            item1.className='menu menu_sub';
        }})
        return false;
    }      
})
