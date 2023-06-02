let field = document.querySelector('#field');
let click = document.querySelector('p');
let rows = 3;
let cols = 3; 
let colors = ['red', 'green', 'blue'];
let counter = 0;

createTable(rows, cols);

let allTd = document.querySelectorAll('#field td');

for (td of allTd) {
    td.addEventListener('click', function() {
        let curentColor = this.getAttribute('class');
        this.setAttribute('class', setNextColor(colors, curentColor));

        let nextColor = this.getAttribute('class');
        win(allTd, nextColor);

        counter++;
        click.textContent = 'Колличество кликов: ' + counter;
    }) 
}

function createTable(rows, cols) {
    
    for (let i = 0; i < rows; i++) {
        let tr = document.createElement('tr');

        for (let j = 0; j < cols; j++) {
            let td = document.createElement('td');
            td.classList.add(randomColor(colors));
            tr.appendChild(td);
        }
        field.appendChild(tr);
    }
}

function randomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)];
}

function setNextColor(colors, curentColor) {
    for (let i = 0; i < colors.length; i++) {
        if (i == colors.length - 1 ) {
            return colors[0];
        }

        if (colors[i] == curentColor) {
            return colors[i + 1];
        } 

    }
}

function win(allTd, nextColor) {
    let i = 0;

    for (let td of allTd) {
        if (td.classList.contains(nextColor)) {
            i++;
        }
    }

    if (i == allTd.length) {
        alert('Поздравляем! Вы победили!');
        location.reload()
    }
}