// Задача №1. Экранная клавиатура.
let keyArr = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '_',
              'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'з', 'х', 'ъ', '|',
              'caps','ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э',
              'я', 'ч', 'c', 'м', 'и', 'т', 'ь', 'б', 'ю', ',', '.', '?',
              'SPACE'];

let container = document.querySelector('#container');
let textArea = document.querySelector('#text');

function createKeyboard() {
    for (let elem of keyArr) {
        let btn = document.createElement('button');
        btn.innerHTML = elem;
        btn.value = elem;
        btn.classList.add('key');
        if (btn.value === "SPACE") {
            btn.classList.add('key', 'space');
            btn.value = " ";
        }
        if (btn.value === "caps") {
            btn.removeAttribute('value');
            btn.setAttribute('id', 'caps');
        }

        container.appendChild(btn);
    }

}
createKeyboard();

// Задача №2. Добавление кнопки caps.

let caps = document.querySelector('#caps');

container.addEventListener('click', function(event) {

    if (event.target.id === 'caps') {
        caps.classList.toggle('active');
    }

    if (caps.classList.contains('active') && event.target !== container) {
        textArea.textContent += event.target.value.toUpperCase();
    } else if (event.target !== container) {
        textArea.textContent += event.target.value;
    }
});