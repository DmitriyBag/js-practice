# Тест с вопросами и ответами в HTML коде на JavaScript.  
  
В этом и в нескольких следующих уроках мы с вами займемся созданием тестов с вопросами и ответами. Начнем с самых простых вариантов и будем постепенно усложнять.  
Пусть для начала мы хотим сделать набор вопросов, на каждый из которых возможен только один ответ. Пусть ответы вбиваются пользователем в инпуты под самими вопросами.  
Проиллюстрирую написанное HTML кодом:  
```  
<div id="test">
	<div>
		<p>вопрос 1?</p>
		<input>
	</div>
	<div>
		<p>вопрос 2?</p>
		<input>
	</div>
	<div>
		<p>вопрос 3?</p>
		<input>
	</div>
</div>  
```  
Как вы видите, у нас есть вопросы и инпуты для ответов. Осталось придумать, где мы будем хранить правильные ответы.  
Самое простое, что можно придумать - это хранить ответы прямо в HTML коде инпутов, в каком-нибудь data- атрибуте:  
```  
<div id="test">
	<div>
		<p>вопрос 1?</p>
		<input data-right="ответ 1">
	</div>
	<div>
		<p>вопрос 2?</p>
		<input data-right="ответ 2">
	</div>
	<div>
		<p>вопрос 3?</p>
		<input data-right="ответ 3">
	</div>
</div>  
```  
Следующий нюанс, который следует продумать: в какой момент мы будем выполнять проверку ответов на правильность? Здесь можно предложить два варианта: либо пусть каждый инпут сразу же по вводу в него ответа проверяет правильный ли этот ответ, либо пусть будет кнопка, по нажатию на которую будут проверены ответы на все вопросы сразу.  
Какой бы из вариантов мы не выбрали, давайте, если ответ правильный, то границу инпута будем красить в зеленый цвет, а если неправильный - в красный. Сделаем для этого соответствующие CSS классы:  
```  
.right {
	border: 1px solid green;
}
.wrong {
	border: 1px solid red;
}  
```  
Задача №1. Сделайте так, чтобы ввод ответа в инпут завершался нажатием клавиши Enter. Пусть в этом случае инпут сразу проверяет ответ на правильность.  
Задача №2. Модифицируйте ваш код так, чтобы проверка ответов выполнялась по нажатию на кнопку.  
  
  
# Тест с ответами в массиве на JavaScript.  
  
Пусть теперь у нас дан массив правильных ответов:  
```  
let answers = [
	'ответ 1',
	'ответ 2',
	'ответ 3',
];  
```  
Это значит, что мы теперь не будем хранить ответы в data- атрибутах инпутов:  
```  
<div id="test">
	<div>
		<p>вопрос 1?</p>
		<input>
	</div>
	<div>
		<p>вопрос 2?</p>
		<input>
	</div>
	<div>
		<p>вопрос 3?</p>
		<input>
	</div>
	
	<button id="button">проверить ответы</button>
</div>  
```  
Задача №1. Сделайте так, чтобы по нажатию на кнопку выполнилась проверка правильности ответов.  
  
  
# Тест с вопросами и ответами в массиве на JavaScript.  
  
Пусть у нас дан массив правильных ответов, как и в предыдущем уроке:  
```  
let answers = [
	'ответ 1',
	'ответ 2',
	'ответ 3',
];  
```  
Пусть теперь дан и массив вопросов:  
```  
let questions = [
	'вопрос 1?',
	'вопрос 2?',
	'вопрос 3?'
];  
```  
Пусть дивов с вопросами и инпутами для ответов больше нету в HTML коде:  
```  
<div id="test"></div>
<button id="button">проверить ответы</button>  
```  
Пусть перед нами стоит прежняя задача: по нажатию на кнопку выполнить проверку правильности.  
Очевидно, что наша задача усложнилась: теперь по заходу на страницу нам необходимо перебрать массив вопросов и сформировать HTML код каждого вопроса - родительский див, абзац с текстом и инпут для ответа.  
  
Задача №1. Реализуйте поставленную задачу.  
  
  
# Тест с вопросами и ответами в объекте на JavaScript.  
  
В предыдущем уроке наши вопросы и ответы хранились в разных переменных. Такое разделение зачастую может быть не очень удобным. Давайте поработаем с другими вариантами хранения.  
  
Задача №1. Пусть вопросы и ответы хранятся в таком объекте:  
```  
let questions = {
	'Вопрос 1?': 'ответ 1',
	'Вопрос 2?': 'ответ 2',
	'Вопрос 3?': 'ответ 3',
}  
```  
Решите задачу создания теста для такого варианта хранения данных.  
  
Задача №2. Пусть вопросы и ответы хранятся в таком объекте:  
```  
let questions = [
	{
		text:  'вопрос 1?',
		right: 'ответ 1',
	},
	{
		text:  'вопрос 2?',
		right: 'ответ 2',
	},
	{
		text:  'вопрос 3?',
		right: 'ответ 3',
	},
];  
```  
Решите задачу создания теста для такого варианта хранения данных.  
  
    
# Тест с вариантами ответов в HTML коде на JavaScript.  
  
В предыдущих уроках ответы на вопросы теста должны были вбиваться в инпуты. В жизни, однако, часто бывают также тексты, в которых можно выбрать один вариант ответа из предложенных. Давайте научимся создавать такие тесты.  
  
Давайте опять начнем с простого варианта, когда вопросы и ответы хранятся в HTML коде, а затем будем постепенно усложнять.  
  
Итак, вот тест с вариантами ответов:  
```  
<div id="test">
	<div>
		<p>вопрос 1?</p>
		
		<label>
			<input type="radio" name="1" data-right>
			вариант 1
		</label>
		<label>
			<input type="radio" name="1">
			вариант 2
		</label>
		<label>
			<input type="radio" name="1">
			вариант 3
		</label>
	</div>
	<div>
		<p>вопрос 2?</p>
		
		<label>
			<input type="radio" name="2">
			вариант 1
		</label>
		<label>
			<input type="radio" name="2" data-right>
			вариант 2
		</label>
		<label>
			<input type="radio" name="2">
			вариант 3
		</label>
	</div>
	<div>
		<p>вопрос 3?</p>
		
		<label>
			<input type="radio" name="3">
			вариант 1
		</label>
		<label>
			<input type="radio" name="3">
			вариант 2
		</label>
		<label>
			<input type="radio" name="3" data-right>
			вариант 3
		</label>
	</div>
</div>  
```  
Как вы видите, варианты ответов мы можем выбрать с помощью радио кнопочек. При этом в каждом вопросе радио кнопка с правильным вариантом отмечена атрибутом data-right.  
  
Задача №1. Сделайте так, чтобы при выборе одного из ответов вопроса этот ответ сразу проверялся на правильность.  
Задача №2. Модифицируйте ваш код так, чтобы проверка ответов выполнялась по нажатию на кнопку.  
  
  
# Тест с вариантами ответов в массиве на JavaScript.  
  
Пусть теперь у нас есть массив, в котором написаны номера правильных ответов для каждого вопроса:  
```  
let answers = [0, 1, 2];  
```  
То есть в первом элементе этого массива лежит номер правильного ответа первого вопроса, во втором элементе - для второго вопроса и так далее.  
  
Задача №1. Модифицируйте код предыдущего урока с учетом описанного.  
  
  
# Тест с вопросами и вариантами ответов в объекте на JavaScript.  
  
Пусть теперь вопросы, варианты ответов и номера правильных ответов хранятся в одном объекте:  
```  
let questions = [
	{
		text: 'вопрос 1?',
		right: 0,
		variants: [
			'вариант 1',
			'вариант 2',
			'вариант 3'
		]
	},
	{
		text: 'вопрос 2?',
		right: 1,
		variants: [
			'вариант 1',
			'вариант 2',
			'вариант 3'
		]
	},
	{
		text: 'вопрос 3?',
		right: 2,
		variants: [
			'вариант 1',
			'вариант 2',
			'вариант 3'
		]
	},
];  
```  
Наш HTML код при этом сократится до следующего:  
```  
<div id="test"></div>
<button id="button">проверить ответы</button>  
```  
Теперь по заходу на страницу вам придется перебрать циклом наш объект и сформировать HTML код вопросов.  
  
Задача №1. Реализуйте поставленную задачу.