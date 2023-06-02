let parent = document.querySelector('#parent');
let links  = document.querySelectorAll('a');

for (let link of links) {
    link.addEventListener('click', function(event) {
        let tab = parent.querySelector('.tab.active');
        let newTab = link.closest('.tab');

        event.preventDefault();

        if (tab) {
            tab.classList.remove('active');
        }

        if (newTab !== tab) {
            newTab.classList.add('active');
        }
    });
}