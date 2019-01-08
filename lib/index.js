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

const randomMonth = () => {
  let num = Math.floor(Math.random() * 12) + 1
  let stringedNum = num.toString()
  return checkLength(stringedNum)
}

const randomDay = () => {
  let num = Math.floor(Math.random() * 31) + 1
  let stringedNum = num.toString()
  return checkLength(stringedNum)
}

const checkLength = (stringedNum) => {
  if(stringedNum.length < 2) {
    return `0${stringedNum}`
  } else {
    return stringedNum
  }
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
