/*
  JavaScript – styr logiken och interaktiviteten på sidan.

  När sidan laddas:
  1. HTML laddas först (strukturen byggs upp).
  2. CSS tillämpas (utseendet sätts).
  3. JavaScript körs sist (lägger till funktionalitet).

  JavaScript "pratar" med HTML via DOM (Document Object Model),
  vilket gör det möjligt att ändra innehåll, skapa nya element och reagera på användarens klick.
*/

// Hämtar knappar och element via deras ID
const changeTextBtn = document.getElementById("changeTextBtn");
const showTimeBtn = document.getElementById("showTimeBtn");
const introText = document.getElementById("intro-text");
const timeDisplay = document.getElementById("timeDisplay");

// Event 1: När användaren klickar på "Ändra text"
changeTextBtn.addEventListener("click", () => {
  // Ändrar texten i paragrafen via DOM
  introText.textContent = "Texten har ändrats med JavaScript!";
});

/*
  Flöde när användaren klickar på "Ändra text":
  1. Event listener upptäcker klicket.
  2. JavaScript-funktionen körs.
  3. Textinnehållet (DOM) uppdateras.
  4. Webbläsaren renderar om elementet direkt utan att ladda om sidan.
*/

// Event 2: När användaren klickar på "Visa aktuell tid"
showTimeBtn.addEventListener("click", () => {
  // Hämtar aktuell tid
  const currentTime = new Date().toLocaleTimeString();

  // Skriver ut tiden i <p id="timeDisplay">
  timeDisplay.textContent = `Aktuell tid: ${currentTime}`;
});

/*
  Flöde för tid-funktionen:
  1. Knappen klickas.
  2. JS hämtar tiden med new Date().
  3. Texten i timeDisplay ändras.
  4. DOM uppdateras → webbläsaren visar den nya texten.
*/

/* ------------------------------------------------------------------
   Extra del för VG: Dynamisk generering av HTML-element
   Här skapas en lista direkt i JavaScript från en array.
------------------------------------------------------------------ */

// En enkel lista med frukter (JavaScript-data)
const fruits = ["Äpple", "Banan", "Apelsin"];

// Skapa ett nytt <ul>-element (lista)
const listContainer = document.createElement("ul");

// Loopar igenom arrayen och skapar <li> för varje frukt
fruits.forEach(fruit => {
  const li = document.createElement("li"); // Skapar nytt <li>-element
  li.textContent = fruit;                  // Lägger till text
  listContainer.appendChild(li);           // Lägger in <li> i listan
});

// Lägger till listan i <main>-delen av HTML
document.querySelector("main").appendChild(listContainer);

/*
  Flöde för list-generering:
  1. När sidan laddas körs JavaScript.
  2. En ny <ul> och flera <li>-element skapas i minnet.
  3. JS lägger till listan i DOM (HTML-strukturen i webbläsaren).
  4. Webbläsaren uppdaterar automatiskt sidan med listan – utan omladdning.

  Detta demonstrerar hur JavaScript kan skapa nytt HTML-innehåll dynamiskt,
  vilket är en central del i hur moderna digitala plattformar fungerar.
*/

/*
  Sammanfattning – hur filerna samarbetar:

  - index.html: bygger upp STRUKTUREN (text, knappar, element)
  - style.css: bestämmer UTSEENDET (färger, typsnitt, layout)
  - app.js: hanterar LOGIKEN (vad som händer när användaren interagerar)

  När allt kopplas ihop blir resultatet en enkel men fullständig digital plattform.
*/
