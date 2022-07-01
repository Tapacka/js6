const menu = document.getElementsByClassName('menu_sub');
let array1 = Array.from(menu);
array1.forEach((p) => {
    const parent = p.closest('.menu__item');    
    elem = parent.querySelector('.menu__link');
    elem.onclick = () => {
        if(p.className == 'menu menu_sub') {
        p.className = 'menu menu_sub menu_active';        
        } else {p.className = 'menu menu_sub'};
        array1.forEach((p1) => {if (p1!=p){p1.className='menu menu_sub'}});
        return false;
    }      
})