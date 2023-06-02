let headers = document.querySelectorAll('.toggle');

headers.forEach(function (item) {
    item.addEventListener("click", function (event) {
        event.preventDefault();
        this.parentElement.nextElementSibling.classList.toggle('active');    
    });

});
