let inputNumber = document.querySelector('.inputNumber');
let answer = document.querySelector('.answer');
let btn = document.querySelector('.btn');
let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);

btn.addEventListener('click', function() {
    if (+inputNumber.value == randomNumber) {
        answer.innerHTML = 'Поздравляем! Вы отгадали.<br> Загадано новое число.';
        inputNumber.style.backgroundColor = 'green';
        randomNumber = Math.floor(Math.random() * 100) + 1;
        console.log(randomNumber);
    } else if (+inputNumber.value > randomNumber) {
        answer.textContent = 'Введите число поменьше.';
        inputNumber.style.backgroundColor = 'red';
        inputNumber.value = '';
    } else if (+inputNumber.value < randomNumber) {
        answer.textContent = 'Введите число побольше.';
        inputNumber.style.backgroundColor = 'red';
        inputNumber.value = '';
    }
});

