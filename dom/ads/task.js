const firstCase = document.querySelector(".rotator").firstElementChild;
const lastCase = document.querySelector(".rotator").lastElementChild;

let activeCase = document.querySelector(".rotator__case_active");
activeCase.style.color = activeCase.dataset.color;

function selectActiveCase() {
    activeCase.classList.remove("rotator__case_active");

    if (activeCase === lastCase) {
        activeCase = firstCase;
    } else {
        activeCase = activeCase.nextElementSibling;
    }

    activeCase.style.color = activeCase.dataset.color;
    activeCase.classList.add("rotator__case_active");
    clearInterval(interval);
    interval = setInterval(selectActiveCase, activeCase.dataset.speed);
}

let interval = setInterval(selectActiveCase, activeCase.dataset.speed); 