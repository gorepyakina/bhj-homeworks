const tabs = Array.from(document.getElementsByClassName('tab'));
const content = Array.from(document.getElementsByClassName('tab__content'));

tabs.forEach(tab => tab.addEventListener("click", shift));

function shift(event) {
    document.querySelector(".tab_active").classList.remove("tab_active");
    document.querySelector(".tab__content_active").classList.remove("tab__content_active");
    event.currentTarget.classList.add("tab_active");
    content[tabs.indexOf(event.currentTarget)].classList.add("tab__content_active");
} 