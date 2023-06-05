# Календарь на JavaScript.  
  
В данном разделе мы реализуем календарь. Для простоты просто сделаем так, чтобы календарь выводился за текущий месяц. Но с прицелом на то, что его можно будет доработать так, чтобы можно было менять месяц и год.  
Вот верстка, которую вы можете использовать при решении задачи:  
```  
<div id="parent">
	<div id="calendar">
		<table>
			<thead>
				<tr>
					<th>пн</th>
					<th>вт</th>
					<th>ср</th>
					<th>чт</th>
					<th>пт</th>
					<th>сб</th>
					<th>вс</th>
				</tr>
			</thead>
			<tbody class="body"></tbody>
		</table>
	</div>
</div>  
```  
```  
#parent {
	text-align: center;
}
#calendar {
	display: inline-block;
}
#calendar td, #calendar th {
	padding: 5px 12px;
	border: 1px solid black;
	text-align: center;
}  
```  
Сразу давайте получим ссылки на все нужные теги в переменные, а также запишем текущие месяц и год:  
```  
let calendar = document.querySelector('#calendar');
let body = calendar.querySelector('.body');

let date  = new Date();
let year  = date.getFullYear();
let month = date.getMonth();  
```  
  
Задача №1. Скопируйте себе представленные мною заготовки кода.  
  
  
# Обсуждение реализации календаря на JavaScript.  
  
Наш календарь представляет собой таблицу с числами от 1 до последнего дня месяца. Проблема в том, что числа в таблице в первом ряду должны идти не с первой ячейки.  
Это в общем очевидно. Не очевидно с какой именно ячейки нужно начинать. Давайте обдумаем.  
Пусть неделя начинается с понедельника, и он нулевой день. В этом случае номер дня недели первого числа месяца соответствует количеству пустых ячеек перед ним. Например, четверг будет иметь номер 3 и перед ним будет 3 пустых ячейки.  
Аналогичная проблема нас будет ждать в конце таблицы. Там тоже нужно оставлять пустые ячейки после последнего числа месяца. В этом случае количество пустых ячеек будет равно шестерке, от которой нужно отнять номер дня недели последнего дня месяца.  
Подумаем теперь, как мы будем формировать нашу таблицу. Очевидно, что удобнее всего иметь двухмерный массив, в каждом подмассиве которого будет по 7 элементов (= количеству дней в недели). При этом в первом и последнем подмассивах часть элементов должны быть пустыми.  
  
# Алгоритм действий.  
  
Сделаем функцию, которая будет делать массив чисел от 1 до последнего дня месяца. Затем сделаем функцию, которая добавит в начало массива необходимое количество пустых элементов. Аналогичная функция должна добавлять пустые элементы в конец массива.  
После этого у нас получится одномерный массив с количеством элементов, кратным 7. Преобразуем этот массив в двухмерный по 7 элементов в подмассиве.  
Затем возьмем этот двухмерный массив, переберем циклами и сформируем нашу таблицу.  
Этот алгоритм действий мы поэтапно будем выполнять в следующих уроках.  
  
  
# Заполнение массива числами в календаре на JavaScript.  
  
Начнем с того, что сделаем функцию, которая параметром будет принимать целое число и создавать массив чисел от 1 до этого числа:  
```  
function range(count) {
	
}  
```  
Также нам понадобится функция, которая будет возвращать номер последнего дня месяца:  
```  
function getLastDay(year, month) {
	
}  
```  
  
Задача №1. Реализуйте указанные функции и выведите в консоль массив от 1 до последнего дня месяца.  
  
  
# Дни недели первого и последнего дней месяца.  
  
Давайте теперь сделаем функцию, которая будет получать номер дня недели первого дня месяца:  
```  
function getFirstWeekDay(year, month) {
	
}  
```  
И аналогичную функцию для последнего дня месяца:  
```  
function getLastWeekDay(year, month) {
	
}  
```  
  
Задача №1. Реализуйте указанные функции и проверьте их работу.  
  
  
# Нормализация массива в календаре на JavaScript.  
  
В предыдущих уроках вы должны были сделать массив чисел от 1 до последнего дня месяца:  
```  
let arr = range(getLastDay(year, month));  
```  
Также у вас есть номер дня недели для первого дня месяца и для последнего:  
```  
let firstWeekDay = getFirstWeekDay(year, month);
let lastWeekDay  = getLastWeekDay(year, month);  
```  
Давайте теперь дополним наш массив пустыми строками справа и слева. Пусть для этого у нас будет функция normalize, первым параметром принимающая массив, вторым - сколько пустых строк добавить слева, а третьим - сколько пустых строк справа:  
```  
function normalize(arr, left, right) {
	
}  
```  
Напоминаю, что слева мы должны добавить firstWeekDay пустых элементов, а справа - 6 минус lastWeekDay элементов. То есть мы будем пользоваться нашей функцией normalize вот так:  
```  
let res = normalize(arr, firstWeekDay, 6 - lastWeekDay);
console.log(res);  
```  
  
Задача №1. Реализуйте описанную функцию normalize и проверьте ее работу.  
  
  
# Разбиение массива на двухмерный в календаре на JavaScript.  
  
В предыдущем уроке мы сделали массив, заполненный справа и слева пустыми строками. Давайте теперь разобьем этот массив в двухмерный. Сделаем для этого следующую функцию chunk:  
```  
function chunk(arr, n) {
	// n - количество элементов в подмассиве
}  
```  
Можно воспользоваться нашей функцией следующим образом:  
```  
let res = chunk(normalize(arr, firstWeekDay, 6 - lastWeekDay), 7));
console.log(res);  
```  
  
Задача №1. Реализуйте описанную функцию chunk и проверьте ее работу.  
  
  
# Создание таблицы в календаре на JavaScript.  
  
Давайте теперь сделаем функцию createTable, первым параметром принимающую ссылку на родительский элемент чисел календаря (в нашем случае это будет tbody), а вторым - двухмерный массив:  
```  
function createTable(parent, arr) {
	
}  
```  
Воспользуемся функцией следующем образом:  
```  
let arr = range(getLastDay(year, month));

let firstWeekDay = getFirstWeekDay(year, month);
let lastWeekDay  = getLastWeekDay(year, month);

let nums = chunk(normalize(arr, firstWeekDay, 6 - lastWeekDay), 7);
createTable(body, nums)  
```  
  
Задача №1. Реализуйте описанную функцию createTable.  
Задача №2. Соберите весь код вместе и выведите на экран календарь за текущий месяц.  
  
  
# Функция для формирования календаря на JavaScript.  
  
Обернем код формирования календаря в функцию:  
```  
function draw(body, year, month) {
	let arr = range(getLastDay(year, month));
	
	let firstWeekDay = getFirstWeekDay(year, month);
	let lastWeekDay  = getLastWeekDay(year, month);
	
	let nums = chunk(normalize(arr, firstWeekDay, 6 - lastWeekDay), 7);
	createTable(body, nums)
}  
```  
В этом случае мы сможем нарисовать календарь следующим образом:  
```  
let date  = new Date();
let year  = date.getFullYear();
let month = date.getMonth();

draw(body, year, month)  
```  
  
Задача №1. Сделайте описанное.  
  
  
# Итоговый код календаря на JavaScript.  
  
Мой итоговый код к данному моменту:  
```  
<div id="parent">
	<div id="calendar">
		<table>
			<thead>
				<tr>
					<th>пн</th>
					<th>вт</th>
					<th>ср</th>
					<th>чт</th>
					<th>пт</th>
					<th>сб</th>
					<th>вс</th>
				</tr>
			</thead>
			<tbody class="body"></tbody>
		</table>
	</div>
</div>  
```  
```  
#parent {
	text-align: center;
}
#calendar {
	display: inline-block;
}
#calendar td, #calendar th {
	padding: 5px 12px;
	border: 1px solid black;
	text-align: center;
}  
```  
```  
let calendar = document.querySelector('#calendar');
let body = calendar.querySelector('.body');
let prev = calendar.querySelector('.prev');
let next = calendar.querySelector('.next');

let date  = new Date();
let year  = date.getFullYear();
let month = date.getMonth();

draw(body, year, month);

function draw(body, year, month) {
	let arr = range(getLastDay(year, month));
	
	let firstWeekDay = getFirstWeekDay(year, month);
	let lastWeekDay  = getLastWeekDay(year, month);
	
	let nums = chunk(normalize(arr, firstWeekDay, 6 - lastWeekDay), 7);
	createTable(body, nums)
}

function createTable(parent, arr) {
	parent.textContent = '';
	let cells = [];
	
	for (let sub of arr) {
		let tr = document.createElement('tr');
		
		for (let num of sub) {
			let td = document.createElement('td');
			td.textContent = num;
			tr.appendChild(td);
			
			cells.push(td);
		}
		
		parent.appendChild(tr);
	}
	
	return cells;
}

function normalize(arr, left, right) {
	for (let i = 0; i < left; i++) {
		arr.unshift('');
	}
	for (var i = 0; i < right; i++) {
		arr.push('');
	}
	
	return arr;
}

function getFirstWeekDay(year, month) {
	let date = new Date(year, month, 1);
	let num  = date.getDay();
	
	if (num == 0) {
		return 6;
	} else {
		return num - 1;
	}
}

function getLastWeekDay(year, month) {
	let date = new Date(year, month + 1, 0);
	let num  = date.getDay();
	
	if (num == 0) {
		return 6;
	} else {
		return num - 1;
	}
}

function getLastDay(year, month) {
	let date = new Date(year, month + 1, 0);
	return date.getDate();
}

function range(count) {
	let arr = [];
	
	for (let i = 1; i <= count; i++) {
		arr.push(i);
	}
	
	return arr;
}

function chunk(arr, n) {
	let result = [];
	let count = Math.ceil(arr.length / n);
	
	for (let i = 0; i < count; i++) {
		let elems = arr.splice(0, n);
		result.push(elems);
	}
	
	return result;
}  
```  
  
  
# Вывод месяца и года в календаре на JavaScript.  
  
В предыдущих уроках мы с вам сделали тот календарь, который был образцом в первом уроке. Давайте теперь улучшим его.  
Для начала давайте сделаем так, чтобы над календарем показывался текущий месяц и год. Внесем соответствующие изменения в HTML код:  
```  
<div id="parent">
	<div id="calendar">
		<div class="info">Янв 2020</div>
		<table>
			<thead>
				<tr>
					<th>пн</th>
					<th>вт</th>
					<th>ср</th>
					<th>чт</th>
					<th>пт</th>
					<th>сб</th>
					<th>вс</th>
				</tr>
			</thead>
			<tbody class="body"></tbody>
		</table>
	</div>
</div>  
```  
Внесем также изменения в CSS код:  
```  
#parent {
	text-align: center;
}
#calendar {
	display: inline-block;
}
#calendar td, #calendar th {
	padding: 10px;
	border: 1px solid black;
	text-align: center;
}

#calendar .info {
	text-align: center;
}  
```  
  
Задача №1. Реализуйте описанный вывод текущего месяца и дня.  
  
  
# Стрелки для смены месяца в календаре на JavaScript.  
  
Давайте теперь под календарем сделаем стрелки для смены месяца. Внесем изменения в HTML код:  
```  
<div id="parent">
	<div id="calendar">
		<div class="info">Янв 2020</div>
		<table>
			<thead>
				<tr>
					<th>пн</th>
					<th>вт</th>
					<th>ср</th>
					<th>чт</th>
					<th>пт</th>
					<th>сб</th>
					<th>вс</th>
				</tr>
			</thead>
			<tbody class="body"></tbody>
		</table>
		<div class="nav">
			<a href="#" class="prev">←</a>
			<a href="#" class="next">→</a>
		</div>
	</div>
</div>  
```  
Внесем изменения в CSS код:  
```  
#parent {
	text-align: center;
}
#calendar {
	display: inline-block;
}
#calendar td, #calendar th {
	padding: 10px;
	border: 1px solid black;
	text-align: center;
}

#calendar .nav, #calendar .info {
	text-align: center;
}
#calendar a {
	color: blue;
	font-size: 25px;
	text-decoration: none;
}
#calendar a:hover {
	color: red;
}

#calendar .active {
	color: red;
}  
```  
Получим ссылки на стрелки в переменные:  
```  
let prev = calendar.querySelector('.prev');
let next = calendar.querySelector('.next');  
```  
   
# Обсуждение.  
  
Давайте теперь обсудим, как решать задачу. На самом деле код нашего календаря написан хорошо расширяемым: у нас есть функция draw, которая рисует календарь за заданный месяц. Таким образом при нажатии на стрелку мы можем перерисовать календарь с другим номером месяца (и возможно года).  
Вот пример того, что мы можем сделать по клику на стрелку следующего месяца:  
```  
next.addEventListener('click', function() {
	draw(body, getNextYear(year, month), getNextMonth(month));
});  
```  
Как вы видите, здесь используются функции getNextYear и getNextMonth. Давайте обсудим, что они должны делать.  
Как следует из названия функция getNextYear получает следующий год. Здесь имеется ввиду то, что, если сейчас декабрь, то при переключении на следующий месяц год должен увеличится на 1. Если же сейчас не декабрь, то функция просто должна вернуть текущий год.  
Функция getNextMonth должна получать следующий месяц. Она для всех месяцев, кроме декабря, будет к номеру месяцу добавлять единицу. Ну а для декабря следующим месяцем будет январь с номером 0.  
Аналогичные операции следует проделать при нажатии на кнопку предыдущего месяца:  
```  
prev.addEventListener('click', function() {
	draw(body, getPrevYear(year, month), getPrevMonth(month));
});  
```  
  
Задача №1. Реализуйте работу кнопок смены месяца.  
Задача №2. Сделайте так, чтобы информация над календарем соответствовала отображаемому месяцу и году. 