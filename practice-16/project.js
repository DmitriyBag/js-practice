let field = document.querySelector('#field');
let message = document.querySelector('#message'); 

let cities = [];
let allCities = ['Абаза', 'Абакан', 'Абдулино', 'Абинск', 'Агрыз', 'Адыгейск', 'Азнакаево', 'Азов', 'Ак-Довурак', 'Аксай', 'Алагир', 'Алапаевск', 'Алатырь', 'Алдан', 'Алейск', 'Александров', 'Александровск', 'Алексеевка', 'Алексин', 'Алзамай', 'Алупка', 'Алушта', 'Альметьевск', 'Амурск', 'Анадырь', 'Анапа', 'Ангарск', 'Андреаполь', 'Анжеро-Судженск', 'Анива', 'Апатиты', 'Апрелевка', 'Апшеронск', 'Арамиль', 'Аргун', 'Арзамас', 'Ардон', 'Армавир', 'Арсеньев', 'Арск', 'Артём', 'Артёмовск', 'Артёмовский', 'Архангельск', 'Асбест', 'Асино', 'Астрахань', 'Аткарск', 'Бабушкин', 'Бавлы', 'Баймак', 'Байкальск', 'Бакал', 'Баксан', 'Балабаново', 'Балаково', 'Балахна', 'Балашиха', 'Балашов', 'Балей', 'Балтийск', 'Барабинск', 'Барнаул', 'Барыш', 'Батайск', 'Бежецк', 'Белгород', 'Белебей', 'Белёв', 'Белинский', 'Белово', 'Белогорск', 'Белозерск', 'Белокуриха', 'Беломорск', 'Белоозёрский', 'Белорецк', 'Белореченск', 'Белоусово', 'Белоярский', 'Белый', 'Бердск', 'Биробиджан', 'Бирск', 'Благовещенск', 'Благодарный', 'Бобров', 'Боготол', 'Богучар', 'Болгар', 'Болохово', 'Братск', 'Боровск', 'Брянск', 'Бугульма', 'Будённовск', 'Бузулук', 'Велиж', 'Великий Новгород', 'Великий Устюг', 'Верхоянск', 'Вилюйск', 'Владивосток', 'Владикавказ', 'Владимир', 'Волгоград', 'Вологда', 'Воркута', 'Воронеж', 'Воскресенск', 'Вязьма', 'Галич', 'Гатчина', 'Гвардейск', 'Горно-Алтайск', 'Горнозаводск', 'Грозный', 'Горячий Ключ', 'Гусь-Хрустальный', 'Демидов', 'Дербент', 'Джанкой', 'Дмитров', 'Дно', 'Домодедово', 'Донецк', 'Донской', 'Евпатория', 'Ейск', 'Екатеринбург', 'Елец', 'Железноводск', 'Железногорск', 'Жуков', 'Заозёрный', 'Заозёрск', 'Заринск', 'Златоуст', 'Ивангород', 'Иваново', 'Ижевск', 'Изобильный', 'Ипатово', 'Иркутск', 'Истра', 'Йошкар-Ола', 'Казань', 'Калининград', 'Калуга', 'Карачаевск', 'Каспийск', 'Кемерово', 'Керчь', 'Кизляр', 'Киров', 'Кисловодск', 'Козельск', 'Коммунар', 'Кострома', 'Красногорск', 'Краснодар', 'Красноярск', 'Курган', 'Курск', 'Кызыл', 'Липецк', 'Лобня', 'Льгов', 'Любань', 'Магадан', 'Магас', 'Магнитогорск', 'Майкоп', 'Махачкала', 'Минеральные Воды', 'Мирный', 'Михайлов', 'Михайловка', 'Михайловск', 'Можайск', 'Моздок', 'Москва', 'Мурманск', 'Муром', 'Мытищи', 'Назрань', 'Нальчик', 'Нариманов', 'Нарьян-Мар', 'Невельск', 'Невинномыск', 'Нефтегорск', 'Нефтекамск', 'Нижнекамск', 'Нижний Новгород', 'Нижний Тагил', 'Николаевск', 'Новоалександровск', 'Новоалтайск', 'Новокузнецк', 'Новокуйбышевск', 'Новороссийск', 'Новосибирск', 'Новотроицк', 'Новоуральск', 'Обнинск', 'Озёрск', 'Омск', 'Орёл', 'Оренбург', 'Орлов', 'Пенза', 'Первомайск', 'Первоуральск', 'Перевоз', 'Пермь', 'Петрозаводск', 'Петропавловск-Камчатский', 'Петухово', 'Плёс', 'Покровск', 'Починок', 'Приморск', 'Приозерск', 'Псков', 'Пугачёв', 'Пятигорск', 'Ростов-на-Дону', 'Ростов', 'Рязань', 'Салехард', 'Сальск', 'Самара', 'Санкт-Петербург', 'Саранск', 'Саратов', 'Светлогорск', 'Светлоград', 'Севастополь', 'Северск', 'Сегежа', 'Симферополь', 'Смоленск', 'Слюдянка', 'Снежинск', 'Сочи', 'Ставрополь', 'Стародуб', 'Суджа', 'Суздаль', 'Сургут', 'Сухой Лог', 'Сызрань', 'Сыктывкар', 'Тайга', 'Тамбов', 'Тверь', 'Теберда', 'Терек', 'Томск', 'Туапсе', 'Тула', 'Тында', 'Тюмень', 'Углегорск', 'Улан-Удэ', 'Ульяновск', 'Уссурийск', 'Уфа', 'Ухта', 'Феодосия', 'Фролово', 'Фрязино', 'Хабаровск', 'Ханты-Мансийск', 'Хасавюрт', 'Химки', 'Цимлянск', 'Цивильск', 'Циолковский', 'Чапаевск', 'Чаплыгин', 'Чебоксары', 'Челябинск', 'Черкеск', 'Череповец', 'Чита', 'Шахты', 'Шацк', 'Шилка', 'Щёлково', 'Ытык-Кюель', 'Ыныкчан', 'Ыб', 'Электрогорск', 'Электросталь', 'Электроугли', 'Элиста', 'Энгельс', 'Южно-Сахалинск', 'Юрга', 'Ядрин', 'Якутск', 'Ялта', 'Яровое',  'Ярославль'];


let randomIndex = Math.floor(Math.random() * allCities.length);
let randomCity = allCities[randomIndex];

cities.push(randomCity);
allCities.splice(randomIndex, 1);
message.textContent = randomCity;

field.addEventListener('keydown', (event) => {

    if (event.code == "Enter" && field.value != '') {
        
        let valueField = field.value[0].toUpperCase() + field.value.slice(1);
        let indexAllCities = allCities.indexOf(valueField);
        
        if (lastLetter (randomCity) === field.value[0].toLowerCase()) {
            cities.push(valueField);
            message.textContent = message.textContent + ', ' + valueField;
            allCities.splice(indexAllCities, 1);

            if (indexAllCities === -1) {
                alert("Введённый город не найден в базе. Проверьте, правильно ли он написан, или добавьте его в список.");
            }

            for (let i = 0; i < allCities.length; i++) {
        
                if (allCities[i][0].toLowerCase() === lastLetter (valueField)) {

                    randomCity = allCities[i];
                    message.textContent = message.textContent + ', ' + randomCity;
                    cities.push(allCities[i]);
                    allCities.splice(allCities.indexOf(allCities[i]), 1);
    
                    break;

                }
                    
            } 

            if (allCities.length === 0) {
                alert("Поздравляем! Вы выиграли!!!");
                window.location.reload();
            }

        } else if (lastLetter (randomCity) !== field.value[0].toLowerCase()) {
            alert("Нужно ввести город, который начинается на последнюю букву предыдущего");
        } else if (cities[cities.length -1] === valueField ) {
            alert("Поздравляем! Вы выиграли!!!");
            window.location.reload();
        }

        field.value = '';

        }

});

function lastLetter (word) {
    if (word[word.length - 1] !== 'ь') {
        return word[word.length - 1];
    } else if (word[word.length - 1] === 'ь') {
        return word[word.length - 2];
    }
}