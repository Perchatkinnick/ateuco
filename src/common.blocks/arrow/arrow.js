
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

        document.querySelector('.desk').lastElementChild.innerHTML = "рабочий стол";
        document.querySelector('.equipment').lastElementChild.innerHTML = "оборудование";
        document.querySelector('.users').lastElementChild.innerHTML = "пользователи";

        document.querySelector('.arrow').innerHTML = 'chevron_left свернуть панель';

        document.querySelector('.logo__pic').setAttribute('class', 'logo__pic1');

        document.querySelector('.item__icon').innerHTML = 'фильтры:';

    } else {
        wrapper.style.gridTemplateColumns = '[sidebar] 10.3% [content]';
        wrapper.dataset.condition = 'close';

        document.querySelector('.desk').lastElementChild.innerHTML = "";
        document.querySelector('.equipment').lastElementChild.innerHTML = "";
        document.querySelector('.users').lastElementChild.innerHTML = "";

        document.querySelector('.arrow').innerHTML = 'chevron_right';

        document.querySelector('.logo__pic1').setAttribute('class', 'logo__pic');

        document.querySelector('.item__icon').innerHTML = '';
    }
    
}


export { onArrowLoad }