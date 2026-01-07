// ============================================
// EVENT HANDLER FUNKTIONEN
// ============================================

// Handler für Bookmark Button
function handleBookmarkButtonClick(event) {
  const buttonElement = event.target.closest("button");
  buttonElement.classList.toggle("card__bookmark--active");
}

// Handler für Show/Hide Answer Button
function handleAnswerButtonClick(event) {
  const card = event.target.closest(".card");

  const answerElement = card.querySelector(".card__answer");
  const buttonElement = event.target;
  answerElement.classList.toggle("card__answer--hidden");

  if (answerElement.classList.contains("card__answer--hidden")) {
    buttonElement.textContent = "Show answer!";
  } else {
    buttonElement.textContent = "Hide answer!";
  }
}

// ============================================
// Neue Quizcard mit Formulardaten
// ============================================

// Finde das Formular und die Card-Liste
const form = document.querySelector('[data-js="question-form"]');
const cardList = document.querySelector('[data-js="card-list"]');

// Funktion, die im Formular bei click (Submit) ausgefuehrt wird

function handleFormSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  const newCard = createQuizCard(data.question, data.answer, data.tag);
  cardList.append(newCard);

  event.target.reset();
}

// Funktion, die die Quizcard erstellt

function createQuizCard(question, answer, tag) {
  const listItem = document.createElement("li");
  listItem.classList.add("card");

  const bookmarkButton = document.createElement("button");
  bookmarkButton.classList.add("card__bookmark");
  bookmarkButton.addEventListener("click", handleBookmarkButtonClick);
  bookmarkButton.innerHTML = `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-bookmark-icon lucide-bookmark"
    >
      <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
    </svg>`;

  const questionElement = document.createElement("p");
  questionElement.classList.add("card__question");
  questionElement.textContent = question;

  const answerElement = document.createElement("p");
  answerElement.classList.add("card__answer");
  answerElement.classList.add("card__answer--hidden");
  answerElement.textContent = answer;

  const answerButton = document.createElement("button");
  answerButton.classList.add("card__button");
  answerButton.textContent = "Show answer!";
  answerButton.addEventListener("click", handleAnswerButtonClick);

  const tagList = document.createElement("ul");
  tagList.classList.add("card__tag-list");

  const tagItem = document.createElement("li");
  tagItem.classList.add("card__tag");
  tagItem.textContent = tag;

  tagList.append(tagItem);
  listItem.append(
    bookmarkButton,
    questionElement,
    answerElement,
    answerButton,
    tagList
  );

  return listItem;
}
form.addEventListener("submit", handleFormSubmit);
