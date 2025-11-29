var burgerMenu = document.querySelector('.burger-menu');
var leftNav = document.querySelector('.left-navigation');
var contentArea = document.querySelector('.content-area');
var carrets = document.querySelectorAll('.caret');

burgerMenu.addEventListener('click', function() {
    leftNav.classList.toggle('hidden');
    contentArea.classList.toggle('full-width');
});

carrets.forEach(caret => {
    caret.addEventListener('click', function() {
        this.classList.toggle('caret-down');
        var nested = this.nextElementSibling;
        if (nested.style.display === "block") {
            nested.style.display = "none";
        } else {
            nested.style.display = "block";
        }
    });
});