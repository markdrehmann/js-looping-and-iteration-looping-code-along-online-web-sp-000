function writeCards(names, event) {
  let cardArray = []
  for (let i = 0; i < names.length; i++) {
    cardArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
  }
  return cardArray
}

function countDown(number) {
  while ( number > 0 ) {
    console.log(number);
    number -= 1;
  }
  console.log(number)
}