let input = document.querySelector('#input');
let table = document.querySelector('#table');

let data = {
    2000: [
        ['26.03.2000', 'Выборы в России', 'Владимир Путин избран президентом РФ.'],
        ['12.06.2000', 'Катастрофа в Баренцевом море', 'Атомная подлодка «Курск» затонула.'],
        ['27.06.2000', 'Пожар', 'Начался пожар в Останкинской телебашне.']
    ],
    2001: [
        ['04.10.2001', 'Катастрофа над Чёрном морем', 'над Чёрным морем потерпел катастрофу пассажирский самолёт «Ту-154».'],
        ['15.01.2001', 'Википедия', 'начала работу Википедия']
    ],
    2002: [
        ['14.01.2002', 'Чемпионат Европы', 'В Лозане начался чемпионат Европы по фигурному катанию.']
    ]
};

input.addEventListener('keyup', function(event) {
    if (event.key == 'Enter') {
        let value = input.value.trim();

        if (value != '') {
            deleteTable();
            createTable(value);
        } else {
            deleteTable();
        }
    }
});

function createTable(year) {
    let arr = data[year];
    
    for (let i = 0; i < arr.length; i++) {
        let row = document.createElement('tr');

        row.innerHTML = `<td>${arr[i][0]}</td><td>${arr[i][1]}</td><td>${arr[i][2]}</td>`;
        table.appendChild(row);
    }
}

function deleteTable(){
    let trs = document.querySelectorAll('#table tr');

    for(let tr of trs) {
        table.removeChild(tr);
    }
}