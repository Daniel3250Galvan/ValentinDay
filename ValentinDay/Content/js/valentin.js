let contadorNo = 0;
const maxNo = 5;

const btnNo = document.getElementById("btnNo");
const btnSi = document.getElementById("btnSi");
const contenedorImagenes = document.getElementById("imagenesTristes");
const mensajeFinal = document.getElementById("mensajeFinal");
const mensajeNo = document.getElementById("mensajeNo");


/* 🔥 MENSAJES DRAMÁTICOS */
const mensajes = [
    "¿Segura? 😢",
    "Me estoy poniendo triste...",
    "Eso duele mucho 💔",
    "Mi corazón se está rompiendo...",
    "¡Última oportunidad! ¡No me abandones! 😭"
];


/* =========================
   BOTON NO
========================= */
btnNo.addEventListener("click", () => {

    if (contadorNo >= maxNo) return;

    contadorNo++;

    /* mensaje dramático */
    mensajeNo.textContent = mensajes[contadorNo - 1];
    mensajeNo.classList.remove("dramatico");
    void mensajeNo.offsetWidth;
    mensajeNo.classList.add("dramatico");

    /* imagen triste */
    contenedorImagenes.innerHTML = "";
    const img = document.createElement("img");
    img.src = `/Content/img/triste${contadorNo}.jpeg`;
    contenedorImagenes.appendChild(img);

    /* tamaños */
    btnNo.style.transform = `scale(${1 - contadorNo * 0.15})`;
    btnSi.style.transform = `scale(${1 + contadorNo * 0.20})`;

    /* 🔥 MOVER EL BOTON (huir) */
    moverBotonNo();

    if (contadorNo === maxNo) {
        setTimeout(() => btnNo.style.display = "none", 300);
    }
});



/* =========================
   BOTON SI
========================= */
btnSi.addEventListener("click", () => {

    const img = contenedorImagenes.querySelector("img");
    if (img) img.classList.add("temblar");

    setTimeout(() => {
        mensajeFinal.classList.remove("oculto");
    }, 500);

    lanzarCorazones();
    lanzarConfeti();
});


/* =========================
   CORAZONES
========================= */
function lanzarCorazones() {
    for (let i = 0; i < 40; i++) {
        const c = document.createElement("div");
        c.className = "corazon";
        c.innerHTML = "❤️";
        c.style.left = Math.random() * 100 + "vw";
        c.style.fontSize = (20 + Math.random() * 30) + "px";
        document.body.appendChild(c);
        setTimeout(() => c.remove(), 3000);
    }
}


/* =========================
   CONFETI
========================= */
function lanzarConfeti() {
    for (let i = 0; i < 120; i++) {
        const confeti = document.createElement("div");
        confeti.className = "confeti";
        confeti.style.left = Math.random() * 100 + "vw";
        confeti.style.background = `hsl(${Math.random() * 360}, 90%, 60%)`;
        document.body.appendChild(confeti);
        setTimeout(() => confeti.remove(), 3000);
    }
}


/* =========================
BOTON NO HUIDIZO
========================= */
function moverBotonNo() {

    const margen = 120; // evita salir de pantalla

    const ancho = window.innerWidth - margen;
    const alto = window.innerHeight - margen;

    const x = Math.random() * ancho;
    const y = Math.random() * alto;

    btnNo.style.position = "fixed";
    btnNo.style.left = x + "px";
    btnNo.style.top = y + "px";
}
