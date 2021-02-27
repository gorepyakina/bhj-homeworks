const arrowPrev = document.querySelector(".slider__arrow_prev");
const arrowNext = document.querySelector(".slider__arrow_next");

function slide() {
    const next = this.className.includes("next") ? 1 : -1;
    const items = Array.from(document.getElementsByClassName("slider__item"));
    const activeItem = document.querySelector(".slider__item_active");
    const itemIndex = items.findIndex(item => item === activeItem);
    let index = itemIndex + next;
    activeItem.className = "slider__item";

    if (index < 0) {
        index = (items.length - 1);
    } else if (index > (items.length - 1)) {
        index = 0;
    }

    items[index].className += " slider__item_active";
}

arrowPrev.onclick = slide;
arrowNext.onclick = slide;