# Чеклист на JavaScript.  
  
В данном уроке мы реализуем чеклист. Чеклистом называется программа, которая позволяет сделать список планируемых дел, а затем по мере выполнения этим дел отмечать эти дела сделанными.  
Давайте сделаем так, чтобы дела можно было добавлять, удалять, редактировать и отмечать сделанными.  
  
Итак, приступим к реализации описанной задачи.  
Для начала напишем HTML код для нашего чеклиста. Пусть новые задачи вводятся с помощью инпута и добавляются в список ul:  
  
<input id="input">
<ul id="list"></ul>  
  
Сразу добавим CSS код, добавляющий некоторую красоту нашему чеклисту:  
  
body {
	text-align: center;
}
#input, #list {
	display: inline-block;
}
#list {
	padding: 0;
	list-style-type: none;
}  
  
Как обычно, разобьем сложную задачу на простые этапы.  
В качестве первого этапа сделаем так, чтобы в инпут можно было ввести текст, нажать Enter - и в конец ul добавилась li с введенным текстом.  
Вот заготовка кода, реализующая описанное:  
  
let input = document.querySelector('#input');
let list = document.querySelector('#list');

input.addEventListener('keypress', function(event) {
	if (event.key == 'Enter') {
		// здесь будет код для добавление новой li в список
	}
});  
  
Задача №1. Допишите недостающую часть кода для решения описанной задачи. 
  
Задача №2. Модифицируйте предыдущую задачу так, чтобы после нажатия клавиши Enter происходила очистка текста инпута.  
  
# Кнопки для удаления и завершения в чеклисте на JavaScript.  
  
В предыдущем уроке после решения задач у вас должен был получится следующий код:  
  
<input id="input">
<ul id="list"></ul>
let input = document.querySelector('#input');
let list = document.querySelector('#list');

input.addEventListener('keypress', function(event) {
	if (event.key == 'Enter') {
		let li = document.createElement('li');
		li.textContent = this.value;
		list.appendChild(li);
		
		this.value = '';
	}
});  
  
Давайте теперь добавим кнопочки 'удалить' и 'сделано'. Выполним эти кнопочки в виде тегов span. Также в теге span разместим и текст дела:  
  
input.addEventListener('keypress', function(event) {
	if (event.key == 'Enter') {
		let li = document.createElement('li');
		
		let task = document.createElement('span');
		task.textContent = this.value;
		li.appendChild(task);
		
		let remove = document.createElement('span');
		remove.textContent = 'удалить';
		li.appendChild(remove);
		
		let mark = document.createElement('span');
		mark.textContent = 'сделано';
		li.appendChild(mark);
		
		list.appendChild(li);
		
		this.value = '';
	}
});  
  
Давайте также навесим CSS классы на каждый из тегов span, чтобы к ним можно было обратиться через CSS и навести нужную нам красоту:  
  
let input = document.querySelector('#input');
let list = document.querySelector('#list');

input.addEventListener('keypress', function(event) {
	if (event.key == 'Enter') {
		let li = document.createElement('li');
		
		let task = document.createElement('span');
		task.classList.add('task');
		task.textContent = this.value;
		li.appendChild(task);
		
		let remove = document.createElement('span');
		remove.classList.add('remove');
		remove.textContent = 'удалить';
		li.appendChild(remove);
		
		let mark = document.createElement('span');
		mark.classList.add('mark');
		mark.textContent = 'сделано';
		li.appendChild(mark);
		
		list.appendChild(li);
		
		this.value = '';
	}
});  
  
Добавим CSS к навешенным классам:  
  
#list span {
	margin-right: 5px;
}
#list .remove, #list .mark {
	color: blue;
	cursor: pointer;
}
#list .remove:hover, #list .mark:hover {
	text-decoration: underline;
}  
  
# Удаление дела в чеклисте на JavaScript.  
  
Давайте теперь реализуем удаление дел из списка. Для этого на span для удаления навесим событие:  
  
let remove = document.createElement('span');
remove.classList.add('remove');
remove.textContent = 'удалить';
remove.addEventListener('click', function() {
	// здесь будет код для удаления тега li из списка ul
});
li.appendChild(remove);  
  
Задача №1. Допишите недостающую часть кода для решения описанной задачи.  
  
# Завершение дела в чеклисте на JavaScript.  
  
Навесим аналогичным образом событие на кнопку 'сделано':  
  
let mark = document.createElement('span');
mark.classList.add('mark');
mark.textContent = 'сделано';
mark.addEventListener('click', function() {
	// здесь будет код для отметки дела сделанным
});
li.appendChild(mark);  
  
Для того, чтобы отметить дело сделанным, нужно соответствующему тегу li следует навесить какой-нибудь CSS класс. Назовем, к примеру, этот класс done.  
Тогда для этого класса можно написать соответствующий CSS код:  
  
#list .done {
	text-decoration: line-through;
}  
  
Задача №1. опишите недостающую часть кода для решения описанной задачи.  
  
# Редактирование дела в чеклисте на JavaScript.  
  
Давайте теперь реализуем редактирование. Для этого на span с текстом навесим двойной клик:  
  
let task = document.createElement('span');
task.classList.add('task');
task.textContent = this.value;
task.addEventListener('dblclick', function() {
	// здесь будет код, реализующий редактирование
});
li.appendChild(task);  
  
По двойному клику на указанный span мы должны создать в нем инпут с текстом этого span. Затем после нажатия клавиши Enter в этом инпуте мы должны текст этого инпута записать обратно в наш спен, а сам инпут убрать.  
  
Задача №1. Допишите недостающую часть кода для решения описанной задачи.