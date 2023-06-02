// Задача №1. Угадай ячейку.
let table = document.querySelector('table');
let btn = document.querySelector('button');
let displayTimer = document.querySelector('.displayTimer');

function createTable() {
    let count = 0;

    for (let i = 0; i < 10; i++) {
        let tr = document.createElement('tr');

        for (let j = 0; j < 10; j++) {
            let td = document.createElement('td');
            td.setAttribute('data-num', count);
            count++;
            tr.appendChild(td);
        }

        table.appendChild(tr);
    }
};

createTable();

// Задача №2. Таймер для первой задачи.

btn.addEventListener('click', function() {
    let sec = 50;

    function getRandomCell() {
        let arrCell = new Set();

        while (arrCell.size < 10) {
            arrCell.add(Math.floor(Math.random() * 99));
        };

        return arrCell;
    }
    
    let arrCell = getRandomCell();
    // console.log(arrCell);

    setInterval(function() {
	    displayTimer.innerHTML = `Осталось ${sec} секунд`;
        sec--;        
    }, 1000);

    table.addEventListener('click', function(event) {
        let numCell = +event.target.getAttribute('data-num');
    
        if (arrCell.has(numCell) === true && event.target !== table) {
            event.target.classList.add('green');
            arrCell.delete(numCell);
        } else if (arrCell.has(numCell) === false && event.target !== table) {
            event.target.classList.add('red');
        }; 
        
        if (sec == 0) {
            alert("Упс! Время вышло.");
            location.reload();
        } else if (arrCell.size <= 0) {
            alert("Поздравляем! Вы нашли все ячейки.");
            location.reload();
        };
    });
});