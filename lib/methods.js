export const getTrivia = (m, d) => {
  fetch(`http://numbersapi.com/${m}/${d}/date?json`)
  .then(response => response.json())
  .then(responseData => showTrivia(responseData))
  .catch(error => console.error({ error }));
}

export const randomMonth = () => {
  let num = Math.floor(Math.random() * 12) + 1
  let stringedNum = num.toString()
  return checkLength(stringedNum)
}

export const randomDay = () => {
  let num = Math.floor(Math.random() * 31) + 1
  let stringedNum = num.toString()
  return checkLength(stringedNum)
}

export const checkLength = (stringedNum) => {
  if(stringedNum.length < 2) {
    return `0${stringedNum}`
  } else {
    return stringedNum
  }
}
