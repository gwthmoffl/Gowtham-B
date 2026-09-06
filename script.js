/* ========================================
   01. LOADER
======================================== */

const loader = document.getElementById("loader");

window.addEventListener("load", () => {
    setTimeout(() => {
        if (loader) {
            loader.classList.add("hide");
        }
    }, 1900);
});


/* ========================================
   02. SCROLL REVEAL
======================================== */

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    },
    {
        threshold: 0.12
    }
);

document.querySelectorAll(".reveal").forEach((element) => {
    revealObserver.observe(element);
});


/* ========================================
   03. CARD TILT EFFECT
======================================== */

document.querySelectorAll("[data-tilt]").forEach((card) => {

    card.addEventListener("pointermove", (event) => {

        const rect = card.getBoundingClientRect();

        const x =
            (event.clientX - rect.left) / rect.width - 0.5;

        const y =
            (event.clientY - rect.top) / rect.height - 0.5;

        card.style.transform = `
            perspective(1100px)
            rotateX(${y * -2}deg)
            rotateY(${x * 2}deg)
        `;

    });


    card.addEventListener("pointerleave", () => {

        card.style.transform = "";

    });

});


/* ========================================
   04. DARK / LIGHT THEME
======================================== */

const themeButton = document.getElementById("theme");

if (themeButton) {

    const savedTheme = localStorage.getItem("gb-theme");

    if (savedTheme === "light") {
        document.body.classList.add("light");
    }


    themeButton.textContent =
        document.body.classList.contains("light")
            ? "☼"
            : "◐";


    themeButton.addEventListener("click", () => {

        document.body.classList.toggle("light");

        const isLight =
            document.body.classList.contains("light");

        localStorage.setItem(
            "gb-theme",
            isLight ? "light" : "dark"
        );

        themeButton.textContent =
            isLight ? "☼" : "◐";

    });

}


/* ========================================
   05. SMOOTH SCROLL
======================================== */

document.addEventListener("DOMContentLoaded", () => {

    document.querySelectorAll('a[href^="#"]').forEach((link) => {

        link.addEventListener("click", (event) => {

            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });

});
