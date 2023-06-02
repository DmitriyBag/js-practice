let months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
let date = new Date();

let dateList = document.querySelector('#dateList');
let left = document.querySelector('.left');
let right = document.querySelector('.right');
let display = document.querySelector('.display'); 

// Задача №1. Выведите в виде списка ul все числа текущего месяца.

let createCalendar = function() {
    let month = date.getMonth();
    let year = date.getFullYear();
    let lastDay = new Date(year, month + 1, 0).getDate();
    let days = "";

// Задача №3. Сделайте так, чтобы над списком было написано название текущего месяца по-русски и номер года.

    display.innerHTML = months[month] + ' ' + year;
    
    for ( let i = 1; i <= lastDay; i++) {

// Задача №2. Сделайте так, чтобы текущий день в календаре был выделен каким-нибудь цветом.

        if (i === new Date().getDate() && month === new Date().getMonth() && year === new Date().getFullYear()) { 
            days += `<li class="marker">${i}</li>`;
        } else {
            days += `<li>${i}</li>`;
            dateList.innerHTML = days;
        }
    }

};

function removeDateList() {
    let ul = document.querySelectorAll('#dateList li');
    for (let li of ul) {
        dateList.removeChild(li);
    }
}

// Задача №4. Ссылки вперед и назад, , позволяющие менять месяц.

left.addEventListener("click", function() {
    removeDateList();
    date.setMonth(date.getMonth() - 1);
    createCalendar();
});

right.addEventListener("click", function() {
    removeDateList();
    date.setMonth(date.getMonth() + 1);
    createCalendar();
});

createCalendar();