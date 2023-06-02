// Вариант 1
let input1 = document.querySelectorAll('#test1 input');
let button1 = document.querySelector('#test1 button');

for (let answer of input1) {
    answer.addEventListener('keydown', function(event) {
        if (event.key == 'Enter') {
           answer.value == answer.dataset.right ? (answer.classList.remove('wrong'), answer.classList.add('right') ) : answer.classList.add('wrong');
        }
    });
}

button1.addEventListener('click', function() {
    for (let answer of input1) {
        answer.value == answer.dataset.right ? (answer.classList.remove('wrong'), answer.classList.add('right') ) : answer.classList.add('wrong');
    }
});


// Вариант 2
let answers1 = [
	'ответ 1',
	'ответ 2',
	'ответ 3',
];

let input2 = document.querySelectorAll('#test2 input');
let button2 = document.querySelector('#test2 button');

button2.addEventListener('click', function() {

    for (let i = 0; i < answers1.length; i++) {
        input2[i].value == answers1[i] ? (input2[i].classList.remove('wrong'), input2[i].classList.add('right') ) : input2[i].classList.add('wrong');
    }

});


// Вариант 3
let questions1 = [
    'вопрос 1?',
    'вопрос 2?',
    'вопрос 3?'
];

let test3 = document.querySelector('#test3');
let button3 = document.querySelector('#button3');

questions1.forEach(function(elem) {
    test3.insertAdjacentHTML("beforeend", `<div><p>${elem}</p><input></div>`);
});

button3.addEventListener('click', function() {
    let input3 = document.querySelectorAll('#test3 input');

    for (let i = 0; i < answers1.length; i++) {
        input3[i].value == answers1[i] ? (input3[i].classList.remove('wrong'), input3[i].classList.add('right') ) : input3[i].classList.add('wrong');
    }

});


// Вариант 4
let questions2 = {
	'Вопрос 1?': 'ответ 1',
	'Вопрос 2?': 'ответ 2',
	'Вопрос 3?': 'ответ 3'
};

let test4 = document.querySelector('#test4');
let button4 = document.querySelector('#button4');

let insert = (() => {
    for (let elem in questions2) {
        test4.insertAdjacentHTML("beforeend", `<div><p>${elem}</p><input></div>`);
    }
}) ();


button4.addEventListener('click', function() {
    let input4 = document.querySelectorAll('#test4 input');

    for (let i = 0; i < input4.length; i++) {
        let answer = input4[i].value;
        let question = input4[i].previousElementSibling.innerHTML;

        for (let key in questions2) {
            if (question == key) {
                if (answer == questions2[key]) {
                    input4[i].classList.remove('wrong');
                    input4[i].classList.add('right');
                } else {
                    input4[i].classList.add('wrong');
                }
            }
        }

    }

});


// Вариант 5
let questions3 = [
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

let test5 = document.querySelector('#test5');
let button5 = document.querySelector('#button5');

questions3.forEach(function(elem) {
    test5.insertAdjacentHTML("beforeend", `<div><p>${elem.text}</p><input></div>`);
});

button5.addEventListener('click', function() {
    let input5 = document.querySelectorAll('#test5 input');

    input5.forEach(item => {
        let answer = item.value;
        let question = item.previousElementSibling.innerHTML;

        questions3.forEach(elem => {
            if (question == elem.text) {
                if (answer == elem.right) {
                    item.classList.remove('wrong');
                    item.classList.add('right');
                } else {
                    item.classList.add('wrong');
                }
            }

        })
    })

});


//Вариант 6
let radios1 = document.querySelectorAll('#test6 input[type="radio"]');
let button6 = document.querySelector('#button6');

button6.addEventListener('click', function() {
    for (let radio of radios1) {
        if (radio.checked) {
            let label = radio.parentElement;
            radio.hasAttribute('data-right') ? label.classList.add('green') : label.classList.add('red');
        }
    }
});


//Вариант 7
let answers2 = [0, 1, 2];

let radios2 = document.querySelectorAll('#test7 input[type="radio"]');
let button7 = document.querySelector('#button7');

button7.addEventListener('click', function() {
    let blocks = document.querySelectorAll('#test7 div');
    
    for (let i = 0; i < blocks.length; i++) {
        let blockRadios = blocks[i].querySelectorAll('input[type="radio"]');

        for (let j = 0; j < blockRadios.length; j++) {
            if (blockRadios[j].checked) {
                let label = blockRadios[j].parentElement;

                for (let k = 0; k < answers2.length; k++) {            
                    if (j == answers2[i]) {
                        label.classList.add('green');
                    } else {
                        label.classList.add('red');
                    }
                }
            }
        }
    }

});


//Вариант 8
let questions4 = [
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

let test8 = document.querySelector('#test8');
let button8 = document.querySelector('#button8');

for (let i = 0; i < questions4.length; i++) {
    let div = document.createElement('div');
    let p = document.createElement('p');
        
    p.innerHTML = questions4[i].text;
    test8.append(div);
    div.append(p);

    for (let j = 0; j < questions4[i].variants.length; j++) {
        let radio = document.createElement('input');
        let label = document.createElement('label');
            
        label.innerHTML = questions4[i].variants[j];
        radio.type = 'radio';
        radio.name = i + 1;
        label.prepend(radio);
        div.append(label);

    }
}

button8.addEventListener('click', function() {
    let blocks = document.querySelectorAll('#test8 div');

    for (let i = 0; i < blocks.length; i++) {
        let blockRadios = blocks[i].querySelectorAll('input[type="radio"]');
        
        for (let j = 0; j < blockRadios.length; j++) {
            if (blockRadios[j].checked) {
                let label = blockRadios[j].parentElement;
 
                for (let k = 0; k < questions4.length; k++) {
                    if (j == questions4[i].right) {
                        label.classList.add('green');
                    } else {
                        label.classList.add('red');
                    }

                }
            }
        }
    }
});