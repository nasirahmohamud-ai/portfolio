// =============================
// SPACEBAR SLIDE NAVIGATION
// =============================

const sections = document.querySelectorAll("section");
let current = 0;

document.addEventListener("keydown", function(e) {

    if (e.code === "Space") {

        e.preventDefault();

        current++;

        if (current >= sections.length) {
            current = sections.length - 1;
        }

        sections[current].scrollIntoView({
            behavior: "smooth"
        });

    }

});


// =============================
// SCROLL REVEAL ANIMATION
// =============================

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.2
});


hiddenElements.forEach((el) => {
    observer.observe(el);
});


// =============================
// RESET SPACEBAR POSITION WHEN SCROLLING
// =============================

window.addEventListener("scroll", () => {

    sections.forEach((section, index) => {

        const rect = section.getBoundingClientRect();

        if (rect.top >= -100 && rect.top <= 100) {
            current = index;
        }

    });

});