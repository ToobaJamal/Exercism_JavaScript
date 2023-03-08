/*
Elyse wants to double the number of every card in the deck. This may result in higher cards than 1-10.
*/

function seeingDouble(deck) {
  return deck.map(card => card * 2)
}

/*
Elyse wants to triplicate every 3 found in the deck. 
If a deck started with a single 3, after the trick the deck would have three 3's in place of the original.
*/

function threeOfEachThree(deck) {
  return deck.flatMap(card => card === 3 ? [3, 3, 3] : [card]);
}

/*
Elyse will take a deck of ten cards, and make every card disappear except the middle two cards.
*/

function middleTwo(deck) {
  return deck.filter((card, index) => index === 4 || index === 5)
}

/*
Elyse wants to move the top and bottom cards of the deck into the middle, in reverse order.

You can assume that the deck has an even number of cards.
*/

function sandwichTrick(deck) {
    const firstElem = deck.shift()
    const lastElem = deck.pop()
    const midIndex = deck.length / 2
    deck.splice(midIndex, 0, lastElem, firstElem)
    return deck
}

/*
Elyse's favorite number today is 2. In this trick, every card that isn't a 2 will disappear from the deck.
*/

function twoIsSpecial(deck) {
  return deck.filter(card => card === 2)
}

/*
Elyse wishes to demonstrate her mastery of reordering the cards perfectly - no matter how well shuffled.
*/

function perfectlyOrdered(deck) {
   return deck.sort((a, b) => a - b)
}

/*
Elyse wants to change the order of the cards in the deck. 
After the trick, the card that is currently at the top should end up at the bottom of the deck. 
The second card should end up second last etc.
*/

function reorder(deck) {
  return deck.reverse()
}
