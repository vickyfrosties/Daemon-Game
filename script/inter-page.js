// je récupére les éléments html dont j'ai besoin

    // boutons 
const TUTO = document.getElementById("tuto-btn");
const GAME = document.getElementById("game-btn");

const FADE_ELEMENT = document.getElementById("fade-el");

// fonction 
function toggleFadeEl(duration) {
    if (window.getComputedStyle(FADE_ELEMENT).opacity == 0) {
        FADE_ELEMENT.style.opacity = 1;
        FADE_ELEMENT.style.display = 'block';
    } else {
        FADE_ELEMENT.style.opacity = 0;
        setTimeout(() => {
            FADE_ELEMENT.style.display = 'none';
            window.location = '../html/about.html'
        }, 1000);
    }
}

TUTO.addEventListener("click", () => {
    toggleFadeEl(document.getElementById("fade-el"), 1000);
})