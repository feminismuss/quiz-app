// ============================================
// BOOKMARK FUNKTIONALITÄT (für die erste Karte)
// ============================================
function handleBookmarkButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("card__bookmark--active");
}

const bookmarkButton = document.querySelector('[data-js="bookmark-button"]');
bookmarkButton.addEventListener("click", handleBookmarkButtonClick);

// ============================================
// SHOW/HIDE ANSWER FUNKTIONALITÄT (für die erste Karte)
// ============================================

// Funktion die ausgeführt wird, wenn der Button geklickt wird
function handleAnswerButtonClick() {
  // 1. Finde die Antwort (das <p> Element mit der Antwort)
  const answerElement = document.querySelector('.card__answer');
  
  // 2. Finde den Button selbst (um den Text zu ändern)
  const buttonElement = document.querySelector('.card__button');
  
  // 3. Toggle die "hidden" Klasse (ein/aus)
  answerElement.classList.toggle('card__answer--hidden');
  
  // 4. Prüfe ob die Antwort jetzt versteckt ist oder nicht
  //    und ändere den Button-Text entsprechend
  if (answerElement.classList.contains('card__answer--hidden')) {
    // Antwort ist versteckt → Button soll "Show answer!" sagen
    buttonElement.textContent = 'Show answer!';
  } else {
    // Antwort ist sichtbar → Button soll "Hide answer!" sagen
    buttonElement.textContent = 'Hide answer!';
  }
}

// Finde den "Show answer!" Button und füge einen Click-Listener hinzu
const answerButton = document.querySelector('.card__button');
answerButton.addEventListener('click', handleAnswerButtonClick);

// ============================================
// Formularaction
// ============================================