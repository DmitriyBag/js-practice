let input = document.querySelector('#input');
let radios = document.querySelectorAll('input[type = "radio"]');
let zodiac = document.querySelector('#zodiac');
let result = document.querySelector('#result'); 

let data = {
    Овен: ['Вас ждут сюрпризы', 'Будьте осторожны с огнём', 'Аккуратней на дорогах'],
    Телец: ['Побалуйте себя', 'Прислушайтесь к советам близких', 'Не упрямьтесь'],
    Близнецы: ['Сегодня вы слишком любознательны', 'Ведите себя сдержаней', 'Порадуйте свою вторую половинку'],
    Рак: ['Сегодня будет возможность проявить себя на работе', 'Не расстраивайтесь из-за мелочей', 'Уделите время своим близким'],
    Лев: ['Не грубите окружающим', 'Побалуйте себя', 'Сегодня вы будете особенно продуктивны'],
    Дева: ['Будьте настойчивы сегодня', 'Сегодня вам всё поплечу', 'Отложите важные дела на другой день'],
    Весы: ['Сегодня вы можете расчитывать только на себя', 'Постарайтесь сгладить острые углы', 'Постарайтесь сегодня избегать суеты'],
    Скорпион: ['Постарайтесь быть не слишком требовательными', 'Подумайте дважды, прежде чем давать обещание', ''],
    Стрелец: ['Сегодня возможны неудачные покупки', 'Вечером вас ждут приятные события', 'Благоприятный день для осуществления задуманного'],
    Козерог: ['Сегодня вам нужно будет много работать', 'У вас появятся новые знакомства', 'Велик шанс попасть в аварию'],
    Водолей: ['Сегодня вы особенно обаятельны', 'Обращайте внимание на детали', 'День подходит для отдыха'],
    Рыбы: ['Удачный день для деловых встреч', 'В этот день понадобиться умение быстро ориентироваться в ситуации', 'В гости придут старые друзья'],
};

input.addEventListener('keyup', function(event) {

    if (event.key == 'Enter') {
        let birthday = input.value.split('.').reverse().join('.').slice(5, 10);

        if (birthday >= '03.21' && birthday <= '04.20') {
            useBirthday('Овен');
        } else if (birthday >= '04.21' && birthday <= '05.21') {
            useBirthday('Телец');
        } else if (birthday >= '05.22' && birthday <= '06.21') {
            useBirthday('Близнецы');
        } else if (birthday >= '06.22' && birthday <= '07.22') {
            useBirthday('Рак');
        } else if (birthday >= '07.23' && birthday <= '08.23') {
            useBirthday('Лев');
        } else if (birthday >= '08.24' && birthday <= '09.22') {
            useBirthday('Дева');
        } else if (birthday >= '09.23' && birthday <= '10.23') {
            useBirthday('Весы');
        } else if (birthday >= '10.24' && birthday <= '11.22') {
            useBirthday('Скорпион');
        } else if (birthday >= '11.23' && birthday <= '12.21') {
            useBirthday('Стрелец');
        } else if (birthday >= '01.21' && birthday <= '02.18') {
            useBirthday('Водолей');
        } else if (birthday >= '02.19' && birthday <= '03.20') {
            useBirthday('Рыбы');
        } else if (birthday >= '12.22' && birthday <= '12.31' || birthday >= '01.01' && birthday <= '01.20') {
            useBirthday('Козерог');
        }
    }

});

function useBirthday(name) {
    zodiac.textContent = name;

    for (let radio of radios) {
        if (radio.checked) {
            let value = radio.value;

            if (value == 'today') {
                result.textContent = data[name][0];
            } else if (value == 'tomorrow') {
                result.textContent = data[name][1];
            } else {
                result.textContent = data[name][2];
            }
            
        }
    }
}