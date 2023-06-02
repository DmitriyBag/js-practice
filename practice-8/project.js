let search = document.querySelector('#search');
let btn = document.querySelector('#btn');
let result = document.querySelector('#result');

let data = {
    html: "&lt;html&gt; &lt;/html&gt; Указывает программе просмотра страниц, что это HTML документ.",
    head: "&lt;head&gt; &lt;/head&gt; Предназначен для хранения служебной информации о странице.",
    body: "&lt;body&gt; &lt;/body&gt; Определяет содержимое (контент) HTML-документа, которое отображается в окне браузера.",
    title: "&lt;title&gt; &lt;/title&gt; Помещает название документа в оглавление программы просмотра страниц.",
    p: "&lt;p&gt; &lt;/p&gt; Создает новый параграф.",
    h1: "&lt;h1&gt; &lt;/h1&gt; Создаёт заголовок первого уровня.",
    h2: "&lt;h2&gt; &lt;/h2&gt; Создаёт заголовок второго уровня.",
    h3: "&lt;h3&gt; &lt;/h3&gt; Создаёт заголовок третьего уровня.",
    h4: "&lt;h4&gt; &lt;/h4&gt; Создаёт заголовок четвёртого уровня.",
    h5: "&lt;h5&gt; &lt;/h5&gt; Создаёт заголовок пятого уровня.",
    h6: "&lt;h6&gt; &lt;/h6&gt; Создаёт заголовок шестого уровня.",
    a: "&lt;a href=&quot;URL&quot;&gt; &lt;/a&gt; Создает гиперссылку на другие страницы или часть текущей.",
    img: "&lt;img&gt; &lt;/img&gt; Предназначен для отображения на веб-странице изображений в графическом формате.",
    input: "&lt;input&gt; Предназначен для создания текстовых полей, различных кнопок, переключателей и флажков.",
    button: "&lt;input&gt; Предназначен для создания различных кнопок."
};

let keys = Object.keys(data);

btn.addEventListener('click', function() {
    let value = search.value.trim();

    if (value !="") {
        keys.forEach(function() {
            keys.includes(value) ? result.innerHTML = data[value] : result.innerHTML = 'Введено некорректное значение или введённое значение не найдено в базе.';
    })
    }
});