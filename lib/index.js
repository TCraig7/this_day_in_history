const getTrivia = (m, d) => {
  fetch(`http://numbersapi.com/${m}/${d}/date?json`)
  .then(response => response.json())
  .then(responseData => showTrivia(responseData))
  .catch(error => console.error({ error }));
}

const showTrivia = (trivia) => {
  $('.trivia-container').append(
    `<div class="trivia-fact">
      ${trivia.text}
    </div>
    `
  )
}

$('.submit-button').on('click', () => {
  let m = $('.month-field').val();
  let d = $('.day-field').val();
  getTrivia(m, d);
})
