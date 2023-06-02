// Задача №1

let btnEquation = document.querySelector('.btnEquation');
let resultEquation = document.querySelector('.resultEquation');

btnEquation.addEventListener('click', function() {
    let a = document.querySelector('.a').value;
    let b = document.querySelector('.b').value;
    let c = document.querySelector('.c').value;
    let D = b*b - 4*a*c;
    let x1, x2;

    if (a == 0) {
        return resultEquation.textContent = "a не может быть равно 0";
    } else if (D > 0) {
        x1 = (-b + Math.sqrt(D)) / (2 * a);
        x2 = (-b - Math.sqrt(D)) / (2 * a);
        return resultEquation.innerHTML = `Корни уравнения: X1 = ${x1}, X2 = ${x2}.<br>Дискриминант: D = ${D}.`;
    } else if (D == 0) {
        x1 = -b / (2*a);
        return resultEquation.innerHTML = `Корень уравнения: X1 = ${x1}.<br>Дискриминант: D = ${D}.`;
    } else {
        return resultEquation.innerHTML = `Корней нет.<br>Дискриминант: D = ${D}.`;
    }
})

// Задача №2

let btnPiphagors = document.querySelector('.btnPiphagors');
let resultPiphagors = document.querySelector('.resultPiphagors');

btnPiphagors.addEventListener('click', function() {
    let numberA = document.querySelector('.numberA').value;
    let numberB = document.querySelector('.numberB').value;
    let numberC = document.querySelector('.numberC').value;

    let maxNumber = Math.max(numberA, numberB, numberC);
    let sumNumber = [numberA, numberB, numberC].filter((value) => value != maxNumber)
    .map((num) => Math.pow(num, 2))
    .reduce((num1, num2) => num1 + num2);

    if(Math.pow(maxNumber, 2) === sumNumber) {
        resultPiphagors.textContent = 'Эти числа являются тройкой Пифагора';
    } else {
        resultPiphagors.textContent = 'Эти числа не являются тройкой Пифагора';
    }
})

//Задача №3

let btnDivisor = document.querySelector('.btnDivisor');

function getDivisors(num) {
    let arr = [];
    for (let i = 1; i <= num; i++) {
        num % i == 0 && arr.push(i);
    }
    return arr.join(', ');
}

btnDivisor.addEventListener('click', function() {
    let divident = document.querySelector('.divident').value;
    let resultDivisor = document.querySelector('.resultDivisor');
    resultDivisor.textContent = getDivisors(divident);
});

// Задача №4

let btnDivisors = document.querySelector('.btnDivisors');

function allDivisors(num) {
    let arr = [];
    for (let i = 0; i <= num; i++) {
       if (num % i == 0 && i != 1) arr.push(i);
    }
    return arr;
    
}

function commonDivisors(arr1, arr2) {
    let arr = [];

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                arr.push(arr1[i]);
            }
        }
    }

    if (arr.length != 0) {
        return arr;
    } else {
        return "Нет общих делителей";
    }
}

btnDivisors.addEventListener('click', function() {
    let divident1 = document.querySelector('.divident1').value;
    let divident2 = document.querySelector('.divident2').value;
    let resultDivisors = document.querySelector('.resultDivisors');

    resultDivisors.textContent = commonDivisors(allDivisors(divident1), allDivisors(divident2));
});

// Задача №5

let btnComDiv = document.querySelector('.btnComDiv');

function allNumbers(num) {
    let arr = [];
    for (let i = 0; i <= num; i++) {
        if (num % i == 0 && i != 1) arr.push(i);
    }
    return arr;
    
}

function commonNumber(arr1, arr2) {
    let arr = [];

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                arr.push(arr1[i]);
            }
        }
    }

    if (arr.length != 0) {
        return Math.max(...arr);
    } else {
        return "Нет общих делителей";
    }
}

btnComDiv.addEventListener('click', function() {
    let number1 = document.querySelector('.number1').value;
    let number2 = document.querySelector('.number2').value;
    let resultCommonDivisors = document.querySelector('.resultCommonDivisors');

    resultCommonDivisors.textContent = commonNumber(allNumbers(number1), allNumbers(number2));
});

// Задача №5

let btnComMinDiv = document.querySelector('.btnComMinDiv');

function allNumbers(num) {
    let arr = [];
    for (let i = 0; i <= num; i++) {
        if (num % i == 0 && i != 1) arr.push(i);
    }
    return arr;
    
}

function commonNumber(arr1, arr2) {
    let arr = [];

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                arr.push(arr1[i]);
            }
        }
    }

    if (arr.length != 0) {
        return Math.min(...arr);
    } else {
        return "Нет общих делителей";
    }
}

btnComMinDiv.addEventListener('click', function() {
    let value1 = document.querySelector('.value1').value;
    let value2 = document.querySelector('.value2').value;
    let resultCommonMinDivisors = document.querySelector('.resultCommonMinDivisors');

    resultCommonMinDivisors.textContent = commonNumber(allNumbers(value1), allNumbers(value2));
});