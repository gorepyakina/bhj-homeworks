const menuLink = Array.from(document.querySelectorAll(".menu__link"));

for (let link of menuLink) {
    link.onclick = linkFollow;

    function linkFollow(event) {
        if (link.nextElementSibling != null && link.nextElementSibling.classList.contains("menu")) {
            link.nextElementSibling.classList.toggle("menu_active");
            event.preventDefault();
        }
    }
}