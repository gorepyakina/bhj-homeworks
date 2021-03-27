function scroll() {
    const revealObj = document.querySelectorAll('.reveal');
    const tracking = window.innerHeight;

    revealObj.forEach(reveal => {
        const element = reveal.getBoundingClientRect().top;
        if (element < tracking) {
            reveal.classList.add("reveal_active");
        }
    });
}

document.addEventListener("scroll", scroll);