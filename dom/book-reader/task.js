const book = document.querySelector(".book");
const control = document.querySelector(".book__control_font-size");

function changeSize(event) {
    event.preventDefault();
    let activeFont = event.currentTarget.querySelector(".font-size_active");
    activeFont.classList.remove("font-size_active");
    activeFont = event.target;
    activeFont.classList.add("font-size_active");

    const fontSize = activeFont.dataset.size;
    if (fontSize) {
        book.className = `book book_fs-${fontSize}`;
    } else {
        book.className = "book";
    }
}
control.addEventListener("click", changeSize);