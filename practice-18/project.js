let texts = [];

let notes = document.querySelector('#notes');
let save = document.querySelector('#text button');
let textArea = document.querySelector('#text textarea');
let create = document.querySelector('#create button');
let output = document.querySelector('p');

save.addEventListener('click', function() {
    let mode = this.dataset.mode;

    if (mode == 'create') {

        let li = document.createElement('li');
        let note = document.createElement('span');
        let remove = document.createElement('span');

        note.classList.add('open');
        remove.classList.add('remove');

        remove.textContent = ' X';
        note.textContent = 'запись ' + (texts.length + 1);      
        texts.push(textArea.value);
        textArea.value = '';

        notes.appendChild(li);
        li.appendChild(note);
        li.appendChild(remove);
    
    }

    let li = document.querySelectorAll('#notes li');
    let note = document.querySelectorAll('.open');

    for (let i = 0; i < li.length; i++) {
        li[i].dataset.key = i + 1;
    }
    
    for (let i = 0; i < note.length; i++) {

        note[i].textContent = 'запись ' + li[i].dataset.key;
        
        note[i].addEventListener('click', function() {

            for (let i = 0; i < li.length; i++) {
                li[i].classList.remove('active');
            }
            
            li[i].classList.add('active'); 

            textArea.value = texts[i];
            save.dataset.mode = 'update';
            output.textContent = 'Режим редактирования';
            save.dataset.key = li[i].dataset.key;

        });
    }
	
	if (mode == 'update') {

		let key = this.dataset.key;

        texts[key - 1] = textArea.value;
	}

    create.addEventListener('click', function() {
        textArea.value = '';
        save.dataset.mode = 'create';
        output.textContent = 'Режим создания';
        texts = texts.filter(x => x !== undefined);
    });

    let remove = document.querySelectorAll('.remove');

    for (let j = 0; j < remove.length; j++) {
        remove[j].addEventListener('click', function() {
            delete texts[j];
            li[j].remove();
        });
    }

});

