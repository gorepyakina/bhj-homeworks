const list = document.querySelector('.dropdown__list');
const button = document.querySelector('.dropdown__value');

button.addEventListener('click', drop);

function drop() {
    if (list.className.includes('dropdown__list_active')) {
        list.classList.remove('dropdown__list_active');
    } else {
        list.classList.add('dropdown__list_active');
    }
}

list.onclick = function (event) {
    event.preventDefault();
    button.textContent = event.target.textContent;
    drop();
}; 