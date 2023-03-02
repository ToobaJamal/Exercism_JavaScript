/*
Elyse will summon the first card in the deck without using the array[index] or .shift(). It's just like magic.
*/

function getFirstCard(deck) {
  return deck[0]
}

/*
Elyse performs sleight of hand and summons the second card in the deck without using the array[index].
*/

function getSecondCard(deck) {
  return deck[1]
}

/*
Elyse will make the top two cards of the deck switch places. She doesn't need to call a single function.
*/

function swapTopTwoCards(deck) {
  const firstCard = deck[0]
  const secondCard = deck[1]
  deck[0] = secondCard
  deck[1] = firstCard
  return deck
}

/*
Elyse will separate the deck into two piles. 
The first pile will contain only the top card of the original deck,
while the second pile will contain all the other cards.
*/

function discardTopCard(deck) {
  const [firstCard, ...rest] = deck
  return [firstCard, rest]
}

/*
Elyse will insert a set of face cards (i.e. jack, queen, and king) into her deck 
such that they become the second, third, and fourth cards, respectively.
*/

function insertFaceCards(deck) {
  const [firstCard, ...rest] = deck 
  return [firstCard, 'jack', 'queen', 'king', ...rest]
}
