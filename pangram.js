/*
Your task is to figure out if a sentence is a pangram.
*/

const isPangram = (str) => {
  const alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  const isPangram = alphabets.every(element => str.toLowerCase().includes(element))
  return isPangram
};
