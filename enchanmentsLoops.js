/*
Elyse wants to know how many cards of a particular type she has in her deck.

Write a function cardTypeCheck that takes two parameters: 
an array of cards (Elyse's deck) and the type of card to count. 
The function should use forEach and return the number of cards in the deck of the specified type.
*/

function cardTypeCheck(stack, card) {
  let count = 0
  for (let i = 0; i<= stack.length; i++) {
    if (stack[i] === card) {
      count += 1
    }
  }
  return count
}


/*
For another trick, Elyse needs to know how many odd or even cards there are in her deck.

Implement a function determineOddEvenCards that takes in two parameters: 
an array of cards (Elyse's deck), and a boolean (true is analogous to 'even', and false is analogous to 'odd').

This function should return a single number: 
the number of odd or even cards there are (depending on the value of the second argument) in the deck. 
To practice, use a for...of loop in the function implementation this time.
*/

function determineOddEvenCards(stack, type) {
  let count = 0
  if (type) {
    for (let i of stack) {
      if (i%2 === 0) {
        count += 1
      }
    }
  }
  else if (!type) {
    for (let i of stack) {
      if (i%2 !== 0) {
        count += 1
      }
    }
  }
  return count
}
