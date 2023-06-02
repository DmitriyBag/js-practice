let arr = ['Argentina', 'Australia', 'Austria', 'Bahamas', 'Belgium', 'Brazil', 'Canada', 'Chile', 'China'];
let elem = document.querySelector('#elem');
let list = document.querySelector('#list');

elem.addEventListener('input', function() {
    let value = elem.value;
    let newValue;

    if (value != '') {
        newValue = elem.value[0].toUpperCase() + elem.value.slice(1);
    }
    
    let result = arr.filter(country => country.includes(newValue));

    list.textContent = '';

    if (result.length > 0) {
        for (let item of result) {
            let li = document.createElement('li');
            li.textContent = item;
            list.appendChild(li);

            li.addEventListener('click', function() {
                elem.value = this.textContent;
                list.textContent = '';
            });
        }
    }

    if (elem.value == '') {
        list.textContent = '';
    }
});