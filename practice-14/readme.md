# Вкладки на JavaScript.  
  
Сейчас мы реализуем вкладки.  
Изучите также верстку, на которой мы будем решать задачу:  
```  
<div id="parent">
	<div class="menu">
		<a href="" class="active">вкладка 1</a>
		<a href="">вкладка 2</a>
		<a href="">вкладка 3</a>
	</div>
	<div class="tabs">
		<div class="tab active">
			текст вкладки 1
		</div>
		<div class="tab">
			текст вкладки 2
		</div>
		<div class="tab">
			текст вкладки 3
		</div>
	</div>
</div>  
  
#parent {
	margin: 0 auto;
	width: 400px;
}

.menu a {
	margin-right: 5px;
	display: inline-block;
	padding: 10px;
	color: black;
	text-decoration: none;
	border: 1px solid gray;
}
.menu a:hover {
	background: #f8f8f8;
}
.menu a.active {
	border-color: transparent;
	background: #f2f2f2;
}

.tabs .tab:not(.active) {
	display: none;
}
.tabs .tab {
	padding: 10px;
	background: #f2f2f2;
	height: 300px;
}  
```  
Обратите внимание на то, что активная ссылка и активная вкладка имеют класс active.  
  
# Обсуждение.  
  
Давайте теперь обсудим то, как решать эту задачу. Очевидно, что нужно как-то связать ссылки с соответствующими им вкладками. В данном уроке из теоретического учебника мы уже разбирали возможные варианты.  
В данном случае я предлагаю связать ссылки и вкладки просто по позиции: первая ссылка будет открывать первую вкладку, вторая ссылка - вторую вкладку и так далее.  
Общий алгоритм будет выглядеть так: по нажатию на кнопку мы должны найти ссылку с классом и убрать ей этот класс. Аналогичным образом мы должны найти вкладку с этим классом и тоже убрать ей этот класс.  
Затем мы должны взять ссылку, на которую был клик и активировать ее. Затем мы должны взять вкладку, которая имеет такой же номер, как и наша ссылка - и тоже активировать ее.  
  
Задача №1.  
Скопируйте себе приведенный HTML и CSS коды. Реализуйте вкладки согласно описанному алгоритму.
