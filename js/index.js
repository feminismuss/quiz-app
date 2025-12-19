function handleBookmarkButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("card__bookmark--active");
}

const bookmarkButton = document.querySelector(`[data-js="bookmark-button"]`);
bookmarkButton.addEventListener("click", handleBookmarkButtonClick);
