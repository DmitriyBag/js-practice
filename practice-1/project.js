// Задача №1

let lengthSquare = document.querySelector('.lengthSquare');
let btnSq = document.querySelector('.btnSq');
let resultSquare = document.querySelector('.resultSquare');

btnSq.addEventListener('click', function() {
    resultSquare.innerHTML = `Площадь: ${Math.pow(lengthSquare.value, 2)} см<sup>2</sup><br>Периметр: ${lengthSquare.value * 4} см`;
})

// Задача №2

let num1Rectangle = document.querySelector('.num1Rectangle');
let num2Rectangle = document.querySelector('.num2Rectangle');
let btnRec = document.querySelector('.btnRec');
let resultRectangle = document.querySelector('.resultRectangle');

btnRec.addEventListener('click', function() {
    resultRectangle.innerHTML = `Площадь: ${num1Rectangle.value * num2Rectangle.value} см<sup>2</sup><br>Периметр: ${(num1Rectangle.value * 2) + (num2Rectangle.value * 2)} см`;
})

// Задача №3

let diameterCircle = document.querySelector('.diameterCircle');
let btnCircle = document.querySelector('.btnCircle');
let resultCircle = document.querySelector('.resultCircle');

btnCircle.addEventListener('click', function() {
    resultCircle.innerHTML = `Площадь (примерно): ${Math.round(Math.pow(diameterCircle.value, 2) / 4 * Math.PI)} см<sup>2</sup><br>Длина (примерно): ${Math.round(Math.PI * diameterCircle.value)} см`;
})

// Задача №4

let sideA = document.querySelector('.sideA');
let sideB = document.querySelector('.sideB');
let sideC = document.querySelector('.sideC');
let btnTriangle = document.querySelector('.btnTriangle');
let resultTriangle = document.querySelector('.resultTriangle');

btnTriangle.addEventListener('click', function() {
    let halfPerimetr = (+sideA.value + +sideB.value + +sideC.value) / 2;
    resultTriangle.innerHTML = `Площадь (примерно): ${Math.round(Math.sqrt(halfPerimetr * (halfPerimetr - sideA.value) * (halfPerimetr - sideB.value) * (halfPerimetr - sideC.value)))} см<sup>2</sup>`;
})