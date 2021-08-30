const data = require('./data');

module.exports = {
	loadData
}

function loadData() {
	let container = document.querySelector('.info__container');

    for (let i = 0; i < data.data.length; i++) {
        let div = document.createElement('div');
        div.classList.add('info__item');
        container.appendChild(div);

        let firstColumn = document.createElement('div');
        firstColumn.classList.add('first-column');
        firstColumn.innerHTML = data.data[i].storeName;
        div.appendChild(firstColumn);

        let secColumn = document.createElement('div');
        secColumn.classList.add('sec-column');
        secColumn.innerHTML = data.data[i].model;
        div.appendChild(secColumn);

        let thrdColumn = document.createElement('div');
        thrdColumn.classList.add('thrd-column');
        thrdColumn.innerHTML = data.data[i].status;
        div.appendChild(thrdColumn);

        let round = document.createElement('div');
        round.classList.add('round');
        switch (thrdColumn.innerHTML) {
            case 'в работе':
                round.style.background = 'var(--yellow)';
                break;
            case 'в ожидании':
                round.style.background = 'var(--green)';
                break;
            case 'повреждено':
                round.style.background = 'var(--violet)';
                break;
            case 'в сервисе':
                round.style.background = 'var(--red)';
                break;

        }
        div.appendChild(round);
    }
}