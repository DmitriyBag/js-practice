let calendar = document.querySelector('#calendar');
let body = calendar.querySelector('.body');
let info = calendar.querySelector('.info');
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');

let months = [
	'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
	'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
];

let date  = new Date();

// next.addEventListener('click', function() {
// 	draw(body, getNextYear(year, month), getNextMonth(month));
// });

// prev.addEventListener('click', function() {
// 	draw(body, getPrevYear(year, month), getPrevMonth(month));
// });

prev.addEventListener("click", function() {
	date.setMonth(date.getMonth() - 1);
	draw();

});

next.addEventListener("click", function() {
	date.setMonth(date.getMonth() + 1);
	draw();
});

function draw() {
	let year  = date.getFullYear();
	let month = date.getMonth();
	let arr = range(getLastDay(year, month));
	
	let firstWeekDay = getFirstWeekDay(year, month);
	let lastWeekDay  = getLastWeekDay(year, month);
	
	let nums = chunk(normalize(arr, firstWeekDay, 6 - lastWeekDay), 7);
	createTable(body, nums);

	info.innerHTML = months[month] + ' ' + year;
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

// function getPrevYear(year, month) {
// 	if (month) {
// 		return year - 1;
// 	} else {
// 		return year;
// 	}
// }

// function getPrevMonth(month) {
// 	if (month == 0) {
// 		return 11;
// 	} else {
// 		return month - 1;
// 	}
// }

// function getNextYear(year, month) {
// 	if (month == 11) {
// 		return year + 1;
// 	} else {
// 		return year;
// 	}
// }

// function getNextMonth(month) {
// 	if (month == 11) {
// 		return 0;
// 	} else {
// 		return month + 1;
// 	}
// }

draw();