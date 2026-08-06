// =============================
// Récupération des éléments
// =============================

const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const page3 = document.getElementById("page3");
const page4 = document.getElementById("page4");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const continueBtn = document.getElementById("continueBtn");
const finishBtn = document.getElementById("finish");

const question = document.getElementById("question");

// Formulaire
const date = document.getElementById("date");
const heure = document.getElementById("heure");
const film = document.getElementById("film");
const lieu = document.getElementById("lieu");

// Résumé
const rDate = document.getElementById("rDate");
const rHeure = document.getElementById("rHeure");
const rFilm = document.getElementById("rFilm");
const rLieu = document.getElementById("rLieu");

// =============================
// Variables
// =============================

let essais = 0;

let tailleOui = 1;
let tailleNon = 1;

const messages = [
    "Tu es vraiment sûre ? 🥺",
    "Réfléchis encore... 😅",
    "Tu me brises le cœur 💔",
    "Le bouton Non perd confiance 😭",
    "Allez... un petit oui ? ❤️",
    "Bon... il s'enfuit maintenant 😂"
];

// Position initiale
noBtn.style.left = "290px";
noBtn.style.top = "0px";

// =============================
// Bouton OUI
// =============================

yesBtn.addEventListener("click", () => {

    page1.classList.add("hidden");
    page2.classList.remove("hidden");

});

// =============================
// Bouton NON
// =============================

noBtn.addEventListener("click", () => {

    essais++;

    if (essais <= 5) {

        tailleNon -= 0.15;
        tailleOui += 0.12;

        noBtn.style.transform = `scale(${tailleNon})`;
        yesBtn.style.transform = `scale(${tailleOui})`;

        question.textContent = messages[essais - 1];

    }

});

// =============================
// Le bouton s'enfuit
// =============================

noBtn.addEventListener("mouseenter", () => {

    if (essais < 5) return;

    const largeur = window.innerWidth - 150;
    const hauteur = window.innerHeight - 100;

    const x = Math.random() * largeur;
    const y = Math.random() * hauteur;

    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

});

// =============================
// Continuer
// =============================

continueBtn.addEventListener("click", () => {

    if (date.value === "") {

        alert("Choisis une date 😊");
        return;

    }

    if (heure.value === "") {

        alert("Choisis une heure 😊");
        return;

    }

    if (lieu.value.trim() === "") {

        alert("Choisis un lieu 😊");
        return;

    }

    rDate.textContent = date.value;
    rHeure.textContent = heure.value;
    rFilm.textContent = film.value;
    rLieu.textContent = lieu.value;

    page2.classList.add("hidden");
    page3.classList.remove("hidden");

});

// =============================
// Dernière page
// =============================

finishBtn.addEventListener("click", () => {

    page3.classList.add("hidden");
    page4.classList.remove("hidden");

    lancerConfettis();

});

// =============================
// Confettis ❤️
// =============================

function lancerConfettis() {

    for (let i = 0; i < 150; i++) {

        const coeur = document.createElement("div");

        coeur.innerHTML = Math.random() > 0.5 ? "❤️" : "🎉";

        coeur.style.position = "fixed";
        coeur.style.left = Math.random() * window.innerWidth + "px";
        coeur.style.top = "-50px";
        coeur.style.fontSize = (20 + Math.random() * 25) + "px";
        coeur.style.pointerEvents = "none";

        document.body.appendChild(coeur);

        const vitesse = 3 + Math.random() * 5;

        let y = -50;

        const timer = setInterval(() => {

            y += vitesse;

            coeur.style.top = y + "px";
            coeur.style.transform = `rotate(${y}deg)`;

            if (y > window.innerHeight + 50) {

                clearInterval(timer);
                coeur.remove();

            }

        }, 20);

    }

}