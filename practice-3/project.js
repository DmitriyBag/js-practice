let textArea = document.querySelector('.textArea');
let checkbox = document.querySelectorAll('input[type="checkbox"]');
let wordCount = document.querySelector('.wordCount');
let symbolCount = document.querySelector('.symbolCount');
let letterCount = document.querySelector('.letterCount');
let percentCount = document.querySelector('#percentCount');

function showWordCount() {
// Задача №1. Колличество слов в тексте.
    wordCount.textContent = `Количество слов в тексте: ${str.split(' ').length}`;
}

function showSymbolCount() {
// Задача №2. Количество символов в тексте.
    symbolCount.textContent = `Количество символов в тексте: ${str.length}`;
}

function showLetterCount() {
// Задача №3. Количество символов  без пробелов.
    letterCount.textContent = `Колличество символов без пробелов: ${str.replace(/\s/g, '').length}`;
}

function showPercentOfSimbol() {
//Задача №4. Процентное содержание каждого символа в тексте.
    function getPercentOfSimbol(simbol, array) {
        let times = array.filter((item) => item == simbol).length;
            return (times * 100) / array.length;
        }
        
        let simbols = str.split("");
        let originalSimbols = [...new Set(str.split(""))];
        let result = [];
        
        originalSimbols.forEach((elem) => {
            result.push({
                    name: elem,
                    value: getPercentOfSimbol(elem, simbols).toFixed(2)
                  });
            });
              
            percentCount.innerHTML = `<table class = "tb"><td>Символ</td><td align="center">Cодержание (%)</td></table>`
        
            for (key in result) {
                let row = document.createElement('tr');
                row.innerHTML = `<td align="center">${result[key].name}</td><td align="center">${result[key].value}</td>`;
                document.querySelector('.tb').appendChild(row);
            }
        }

//Задача №5. Четыре чекбокса, которые будут регулировать, какие именно параметры показывать.
checkbox.forEach(item => {
    item.addEventListener('click', (e) => {
        str = textArea.value.trim();
        let itemId = e.target.id;
        switch (itemId) {
            case '1':
                item.checked ? showWordCount() : wordCount.innerHTML = "";
                break;
            case '2':
                item.checked ? showSymbolCount() : symbolCount.textContent = "";
                break;
            case '3':
                item.checked ? showLetterCount() : letterCount.textContent = "";
                break;
            case '4':
                item.checked ? showPercentOfSimbol() : percentCount.innerHTML = "";
                break;
        }
    })

})

textArea.addEventListener('keyup', function() {
    str = textArea.value.trim();
    for (item of checkbox) {
        let itemId = item.id;
        switch (itemId) {
            case '1':
                item.checked ? showWordCount() : wordCount.innerHTML = "";
                    break;
            case '2':
                item.checked ? showSymbolCount() : symbolCount.textContent = "";
                    break;
            case '3':
                item.checked ? showLetterCount() : letterCount.textContent = "";
                    break;
            case '4':
                item.checked ? showPercentOfSimbol() : percentCount.innerHTML = "";
                    break;
        }
    }
}) 