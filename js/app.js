/*
  JavaScript: styr logiken och interaktiviteten på sidan.

  När sidan laddas så=
  1. HTML laddas först (strukturen byggs upp).
  2. CSS appliceras (utseendet sätts).
  3. JavaScript körs sist (lägger till funktionalitet).

  JavaScript "pratar" med HTML via DOM (Document Object Model),
  vilket möjliggör att det går att ändra innehåll, skapa nya element och reagera på användarens klick.
*/

/*
  JavaScript – styr logik och interaktivitet på sidan.
  Här visas hur HTML, CSS och JS samarbetar.
  DOM används för att ändra innehåll och skapa nya element dynamiskt.
*/

// Hämta element från HTML via deras ID
const changeTextBtn = document.getElementById("changeTextBtn");
const showTimeBtn = document.getElementById("showTimeBtn");
const resetTextBtn = document.getElementById("resetTextBtn"); // Ny knapp
const introText = document.getElementById("intro-text");
const timeDisplay = document.getElementById("timeDisplay");
const changeBgBtn = document.getElementById("changeBgBtn");


/* Event 1: Ändra text */
changeTextBtn.addEventListener("click", () => {
  // Ändrar texten i paragrafen
  introText.textContent = "Texten har ändrats med JavaScript!";
});

/*Förklaring av Event 1:
  1. Användaren klickar på "Ändra text".
  2. Event listener triggas.
  3. DOM uppdateras → texten ändras direkt på sidan. */

/* Event 2: Återställ text */
resetTextBtn.addEventListener("click", () => {
  // Återställer texten till ursprungsvärdet
  introText.textContent = "Hej! Det här är en enkel sida som visar hur HTML, CSS och JavaScript samarbetar.";
});
/*
  Förklaring av Event 2:
  1. Användaren klickar på "Återställ text".
  2. Event listener triggas.
  3. DOM uppdateras → originaltexten visas direkt på sidan.
*/

//Event 3: Ändrar bakgrundsfärg
const colors = ["#f2c2e4", "#c2f2e4", "#e4f2c2", "#ffe4c2", "#c2e4ff"];

changeBgBtn.addEventListener("click", () => {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
});
/* Förklaring av Event 3:
  När användaren klickar på "Byt bakgrundsfärg":
  1. JS väljer en slumpad färg från arrayen.
  2. Bakgrundsfärgen på body ändras direkt via DOM.
  3. Webbläsaren uppdaterar vyn och användaren ser ny bakgrundsfärg direkt.
*/


/* Event 4: Visa aktuell tid */
showTimeBtn.addEventListener("click", () => {
  const currentTime = new Date().toLocaleTimeString();
  timeDisplay.textContent = `Aktuell tid: ${currentTime}`;
});

/*
  Förklaring av Event 4:
  1. Knappen klickas.
  2. JS hämtar aktuell tid.
  3. Texten i #timeDisplay ändras.
  4. DOM uppdateras → webbläsaren visar tiden direkt.
*/

/* Extra VG-del: Dynamiskt skapa lista från en array */
const fruits = ["Äpple", "Banan", "Apelsin"];
const listContainer = document.createElement("ul"); // Skapar <ul>

fruits.forEach(fruit => {
  const li = document.createElement("li"); // Skapar <li> för varje frukt
  li.textContent = fruit;
  listContainer.appendChild(li);           // Lägger till i <ul>
});

// Lägger till listan i <main>
document.querySelector("main").appendChild(listContainer);

/*
  Förklaring av extra VG del:
  1. JS skapar <ul> och <li> i minnet.
  2. Listan läggs till DOM.
  3. Webbläsaren uppdaterar vyn → listan visas direkt på sidan.
*/

/*
  Sammanfattning:
  - HTML: Struktur (element, knappar, paragraf, main)
  - CSS: Stil (färger, layout)
  - JS: Logik och interaktivitet (ändra text, visa tid, återställ, generera lista)
  - Allt tillsammans blir en enkel digital plattform.
*/

