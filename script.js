const header = document.querySelector("header");
const button = document.querySelector("header button");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 460) {
    header.style.backgroundColor = "#fff";
    button.style.backgroundColor = "#1a8917";
  } else {
    header.style.backgroundColor = "#ffc117";
    button.style.backgroundColor = "#191919";
  }
});

// Seleziona l'elemento <object> che contiene l'SVG
const svgObject = document.getElementById("externalSvg");
// Assicurati che l'SVG sia completamente caricato
svgObject.addEventListener("load", function () {
  console.log("SVG caricato correttamente!");
  // Accedi al documento SVG
  const svgDoc = svgObject.contentDocument;
  if (!svgDoc) {
    console.error("Impossibile accedere al documento SVG!");
    return;
  }
  // Seleziona l'elemento <svg> all'interno del documento
  const svg = svgDoc.querySelector("svg");
  if (!svg) {
    console.error("Elemento SVG non trovato!");
    return;
  }
  // Seleziona tutti gli elementi <g> con opacity="1" e senza aria-label
  const array = [...svg.querySelectorAll('g[opacity="1"]:not([aria-label])')];
  if (array.length === 0) {
    console.error("Nessun elemento <g> trovato!");
    return;
  }
  console.log("Elementi <g> trovati:", array);
  // Funzione per animare l'opacità
  function randomOpacity() {
    // Seleziona un indice casuale
    const index = Math.floor(Math.random() * array.length);
    const m = array[index];
    // Imposta l'opacità a 0
    m.setAttribute("opacity", 0);
    // Ripristina l'opacità a 1 dopo 2 secondi
    setTimeout(() => {
      m.setAttribute("opacity", 1);
    }, 2000);
  }
  // Avvia l'animazione ogni 100 millisecondi
  setInterval(randomOpacity, 100);
});
