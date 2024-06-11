
// Je récupère les éléments html dont j'ai besoin 
// const PANEL_KEYBOARD = document.getElementById("panel");

// Création d'un tableau avec toutes les combinaisons possibles à trouver
const DAEMON_COMBINAISON = [
    "55", "1C", "BD", "7A", "E9"
];

// Création d'un second tableau qui va représenter le panel interactif de 'touches' qui vont être générées visuellement
const DAEMON_KEYBOARD = [
    "55", "1C", "BD", "7A", "E9"
];


// Générer aléatoirement les combinaisons + touches du panel
    // Les combinaisons
    //Création d'une génération aléatoire du tableau combinaisons ==> rend les index
// const COMBINAISONS_INDEX = Math.floor(Math.random() * DAEMON_COMBINAISON.length);
// console.log(COMBINAISONS_INDEX);

    // Création d'une constante avec les valeurs du tableau de combinaisons selon l'index
    // const COMBINAISONS = DAEMON_COMBINAISON[COMBINAISONS_INDEX];
    // console.log(COMBINAISONS);
    
    // Boucle qui permet d'afficher les touches du panel 
    // DAEMON_KEYBOARD.forEach((key, index) => {
        
        // je crée les éléments html à afficher dans mon html
    // const KEY_ELEMENT = document.createElement("div");
    // PANEL_KEYBOARD.appendChild(KEY_ELEMENT);
    // KEY_ELEMENT.textContent = key;

    // gérer le style css des éléments html créés
//     KEY_ELEMENT.style.color = "yellow";
//     KEY_ELEMENT.style.border = "2px solid yellow";
//     KEY_ELEMENT.style.padding = "5px";
// })


// je crée un event listener quand j'arrive sur la page
    // je récupère les éléments html dont j'ai besoin
const COMMENTARY = document.getElementById("modal");
const COMBINAISON_TO_FIND = document.getElementById("mystery-code");
const PANEL = document.querySelectorAll("panel");
const EXAMPLE_COMB = document.getElementsByClassName(".panel-container");

// console.log(PANEL)

// document.onload = function() {
//     COMMENTARY.style.display = "block";
//     COMBINAISON_TO_FIND.style.opacity = "0.5";
//     PANEL.style.opacity = "0.5";
//     EXAMPLE_COMB.style.display = "none";
// }

