// récupérer les éléments dont on a besoin

    // boutons
const START_BTN = document.getElementById("start-btn");
const GO_FURTHER = document.getElementById("go-further");

const FADE_EL = document.getElementById("fade-element");

// fonction pour fade le main element vers la page about.html

function toggleFade(duration) {
    if (window.getComputedStyle(FADE_EL).opacity == 0) {
        FADE_EL.style.opacity = 1;
        FADE_EL.style.display = 'block';
    } else {
        FADE_EL.style.opacity = 0;
        setTimeout(() => {
            FADE_EL.style.display = 'none';
            window.location = './inter-page.html'
        }, 1000);
    }
}


// ajouter l'événement click sur le bouton pour que le main block disparaisse
START_BTN.addEventListener("click", () => {
   toggleFade(document.getElementById("fade-element"), 1000);
})

