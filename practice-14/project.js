// получаем массив всех вкладок
let menu = document.querySelectorAll('.menu a');
// получаем массив всех блоков с содержимым вкладок
let tabs = document.querySelectorAll('.tab');

// запускаем цикл для каждой вкладки и добавляем на неё событие
for (let i = 0; i < menu.length; i++) {
    menu[i].addEventListener('click', (event) => {
        // предотвращаем переход по ссылке
        event.preventDefault();

        // удаляем активные классы с вкладок и их содержимого
        for (let i = 0; i < menu.length; i++) {
            menu[i].classList.remove('active');
            tabs[i].classList.remove('active');
        }

        // добавляем активные классы выбранной вкладке и её содержимому
        menu[i].classList.add('active');
        tabs[i].classList.add('active');
            
    });
}