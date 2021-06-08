const navToggle = document.querySelector(".nav_toggle");

navToggle.addEventListener('click', () => {
    document.body.classList.toggle("nav-open");
});

const navLinks = document.querySelectorAll(".nav_link");

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})