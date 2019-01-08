import {randomMonth, randomDay, checkLength, getTrivia} from 'index';

const showTrivia = (trivia) => {
  $('.trivia-container').append(
    `<div class="trivia-fact">
      ${trivia.text}
    </div>
    `
  )
}

$('.submit-button').on('click', () => {
  $('.trivia-fact').remove();
  let m = $('.month-field').val();
  let d = $('.day-field').val();
  getTrivia(m, d);
})

$('.clear-button').on('click', () => {
  $('.month-field').val('01');
  $('.day-field').val('01');
  $('.trivia-fact').remove();
})

$('.random-button').on('click', () => {
  let m = randomMonth();
  let d = randomDay();
  $('.month-field').val(m);
  $('.day-field').val(d);
  $('.trivia-fact').remove();
  getTrivia(m, d);
})
