let good = [
    'сегодня у тебя удачный день',
    'скоро у тебя исчезнут финансовые проблемы',
    'сегодня отличный день для учебы',
    'сегодня тебя ждет успех при изучении JavaScript',
    'сегодня твои усилия наконец принесут плоды'
];
let bad = [
    'сегодня у тебя будут финансовые проблемы',
    'присмотрись к своему здоровью',
    'сегодня у тебя неудачный день',
    'сегодня тебя ждёт разочарование',
    'сегодня лучше не начинать ничего нового'
];

let timer = document.querySelector('#timer');
let text  = document.querySelector('#text');
let start = document.querySelector('#start');
let stop  = document.querySelector('#stop');

let allPredictions = [...good, ...bad].sort(() => Math.random() - 0.5);

let random;
let timerId;

start.addEventListener('click', function() {
    start.classList.remove('active');
    stop.classList.add('active');
              
    timerId = setInterval(function() {
        timer.textContent = random = getRandomInt(1, allPredictions.length);
    }, 100);

});
            
stop.addEventListener('click', function() {
    this.classList.remove('active');
    clearInterval(timerId);
                
    text.textContent = allPredictions[random -1];
    good.includes(text.textContent) ? text.style.color = 'green' : text.style.color = 'red';
});
            
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}