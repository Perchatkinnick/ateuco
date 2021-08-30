
function onArrowLoad()
{
    let arrow = document.querySelector('.arrow');
    arrow.addEventListener('click', onArrowClickHandler);
}

function onArrowClickHandler(e) {
    let wrapper = document.querySelector('.wrapper');
    if (wrapper.dataset.condition == 'close') {
        wrapper.style.gridTemplateColumns = '[sidebar] 24.76% [content]';
        wrapper.dataset.condition = 'open';

        document.querySelector('.desk').setAttribute('class', 'menu-item desk-long');
        document.querySelector('.equipment').setAttribute('class', 'menu-item menu__active equipment-long');
        document.querySelector('.users').setAttribute('class', 'menu-item users-long');

        document.querySelector('.arrow').innerHTML = 'chevron_left <i>Свернуть панель</i>';

        document.querySelector('.logo__pic').setAttribute('class', 'logo__pic1');

        document.querySelector('.item__icon').innerHTML = 'фильтры:';
        document.querySelector('.item__icon').setAttribute('class', 'menu-item __long');

    } else {
        wrapper.style.gridTemplateColumns = '[sidebar] 10.3% [content]';
        wrapper.dataset.condition = 'close';

        document.querySelector('.desk-long').setAttribute('class', 'menu-item desk');
        document.querySelector('.equipment-long').setAttribute('class', 'menu-item menu__active equipment');
        document.querySelector('.users-long').setAttribute('class', 'menu-item users');

        document.querySelector('.arrow').innerHTML = 'chevron_right';

        document.querySelector('.logo__pic1').setAttribute('class', 'logo__pic');

        document.querySelector('.__long').innerHTML = '';
        document.querySelector('.__long').setAttribute('class', 'menu-item item__icon');
    }
    
}


export { onArrowLoad }