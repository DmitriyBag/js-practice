let texts1 = ['text1', 'text2', 'text3'];
let i = 0;


//Вариант 1
let slider1 = document.querySelector('#parent1 #slider1');

let id = setInterval(function() {
    slider1.innerHTML = texts1[i];
    i++;
    if (i >= texts1.length) {
        i = 0;
    }

}, 1000);


//Вариант 2. Текст ходит по кругу.
let left1 = document.querySelector('#left1');
let right1 = document.querySelector('#right1');
let slider2 = document.querySelector('#parent2 #slider2');
let j = 0;

slider2.innerHTML = texts1[j];

left1.addEventListener('click', function (event) {
    event.preventDefault();

    j--;
    
    if (j < 0) {
        j = texts1.length - 1;
    }

    slider2.innerHTML = texts1[j];
   
});

right1.addEventListener('click', function (event) {
    event.preventDefault();

    j++;

    if (j >= texts1.length) {
        j = 0;
    }

    slider2.innerHTML = texts1[j];

});


//Вариант 3. Текст без зацикливания слайдов.
let left2 = document.querySelector('#left2');
let right2 = document.querySelector('#right2');

left2.addEventListener('click', function (event) {
    event.preventDefault();
    
    if (j > 0 && j <= texts1.length) {
        j--;
        slider2.innerHTML = texts1[j]; 
    }
   
});

right2.addEventListener('click', function (event) {
    event.preventDefault();
   
    if (j >= 0 && j < texts1.length-1) {
        j++;
        slider2.innerHTML = texts1[j];    
    }

});


//Вариант 4
let texts2 = ['1.png', '2.png', '3.png'];
let slider3 = document.querySelector('#parent3 #slider3');
let left3 = document.querySelector('#left3');
let right3 = document.querySelector('#right3');

let k = 0;
let timer = setInterval(function() {
    slider3.src = texts2[k];
    ++k;
    if (k >= texts2.length) {
        k = 0;
    }

}, 1000);

left3.addEventListener('click', function (event) {
    event.preventDefault();
    
    if (k > 0 && k <= texts2.length) {
        k--;
        slider3.innerHTML = texts2[k]; 
    }
   
});

right3.addEventListener('click', function (event) {
    event.preventDefault();
   
    if (k >= 0 && k < texts2.length-1) {
        k++;
        slider3.innerHTML = texts2[k];    
    }

});


//Вариант 5
let slider4 = document.querySelector('#parent4');
let images = document.querySelectorAll('#parent4 img');

let l = 0;
let timerId = setInterval(function() {
    images[l].style.display = 'none';
    l++;
    if (l >= images.length) {
        l = 0;
    }
    images[l].style.display = 'block';
}, 1000);