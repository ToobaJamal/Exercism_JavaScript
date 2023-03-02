/*
Elyse wants to know the position (index) of a card in the stack.
*/

function getCardPosition(stack, card) {
  return stack.findIndex(num => num === card)
}

/*
Elyse wants to determine if a card is present in the stack -- in other words, if the stack contains a specific number.
*/

function doesStackIncludeCard(stack, card) {
  return stack.includes(card)
}

/*
Elyse wants to know if every card is even -- in other words, if each number in the stack is an even number.
*/

function isEachCardEven(stack) {
  return stack.every(num => num %2 === 0)
}

/*
Elyse wants to know if there is an odd number in the stack.
*/

function doesStackIncludeOddCard(stack) {
  return stack.some(card => card % 2 !== 0)
}

/*
Elyse wants to know the value of the first card that is odd.
*/

function getFirstOddCard(stack) {
  return stack.find(card => card % 2 !== 0)
}

/*
Elyse wants to know the position of the first card that is even.
*/

function getFirstEvenCardPosition(stack) {
  const evenCard = stack.find(card => card % 2 === 0)
  return stack.findIndex(card => card === evenCard)
}
