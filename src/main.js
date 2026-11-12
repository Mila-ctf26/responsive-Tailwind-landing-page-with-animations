// DE: Video und Button auswählen

const video = document.querySelector("#hero-video");
const soundBtn = document.querySelector("#sound-btn");

// DE: Ton ein- und ausschalten

soundBtn.addEventListener("click", () => {
  video.muted = !video.muted;

  if (video.muted) {
    soundBtn.textContent = "🔊 Ton einschalten";
  } else {
    soundBtn.textContent = "🔇 Ton ausschalten";
  }
});

// DE: Überschrift auswählen
const title = document.querySelector("#animated-title");

const titleText = title.textContent.trim();
title.textContent = "";

// DE: Wörter zusammenhalten

let letterIndex = 0;

titleText.split(/\s+/).forEach((word, wordIndex) => {

  // DE: Container für jedes Wort

  const wordSpan = document.createElement("span");

  wordSpan.style.display = "inline-block";
  wordSpan.style.whiteSpace = "nowrap";

  // DE: Buchstaben einzeln animieren
 
  [...word].forEach((letter) => {
    const span = document.createElement("span");

    span.textContent = letter;
    span.classList.add("jump-letter");

    span.style.animationDelay = `${letterIndex * 0.08}s`;

    wordSpan.appendChild(span);
    letterIndex++;
  });

  // DE: Leerzeichen zwischen Wörtern
  
  if (wordIndex > 0) {
    title.appendChild(document.createTextNode(" "));
  }

  title.appendChild(wordSpan);
});


// DE: Container für Glitzerpartikel auswählen
const sparklesContainer = document.querySelector("#sparkles");

// DE: 35 Glitzerpartikel erstellen
for (let i = 0; i < 35; i++) {
  const sparkle = document.createElement("span");

  sparkle.classList.add("sparkle");

  
sparkle.classList.add("sparkle-circle");

// DE: Zufällige Größe
const size = 3 + Math.random() * 10;

sparkle.style.width = `${size}px`;
sparkle.style.height = `${size}px`;

// DE: Zufällige Position
sparkle.style.left = `${Math.random() * 100}%`;

// DE: Fallgeschwindigkeit
const duration = 5 + Math.random() * 5;
sparkle.style.animationDuration = `${duration}s`;

// DE: Zufälliger Startzeitpunkt
sparkle.style.animationDelay =
  `-${Math.random() * duration}s`;

// DE: Partikel hinzufügen
sparklesContainer.appendChild(sparkle);
}
