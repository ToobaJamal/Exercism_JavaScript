/*
One of the games on Kojos' website looks like a slot machine that shows two groups of wheels 
with digits on them. Each group of digits represents a number. 
For the game mechanics, Kojo needs to know the sum of those two numbers.

Write a function twoSum that accepts two arrays as parameters. 
Each array consists of one or more numbers between 0 and 9. 
The function should interpret each array as a number and return the sum of those two numbers.
*/

function twoSum(array1, array2) {
  const num1 = String(array1).split(',').reduce((acc, curr) => acc + curr)
  const num2 = String(array2).split(',').reduce((acc, curr) => acc + curr)
  
  return Number(num1) + Number(num2)
}

/*
Another game on the website is a little quiz called "Lucky Numbers". 
A user can enter a number and then sees whether the number belongs to 
some secret sequence or pattern. The sequence or pattern of the "lucky numbers" 
changes each month and each user only has a limited number of tries to guess it.

This months' lucky numbers should be numbers that are palindromes. 
Palindromic numbers remain the same when the digits are reversed.

Implement the new luckyNumber function that accepts a number as a parameter. 
The function should return true if the number is a palindrome and false otherwise. 
The input number will always be a positive integer.
*/

function luckyNumber(value) {
  const reversedVal = Number(String(value).split('').reverse().join(''))
  return value === reversedVal
}

/*
In various places on the website, there are input fields where the users 
can enter numbers and click a button to trigger some action. Kojo wants to improve 
the user experience of his site. He wants to show an error message in case the user 
clicks the button but the field contains an invalid input value.

Here is some more information on how the value of an input field is provided.

If the user types something into a field, the associated value is always a string even if the user only typed in numbers.
If the user types something but deletes it again, the variable will be an empty string.
Before the user even started typing, the variable can be undefined or null.
Write a function errorMessage that accepts the user input as a parameter. 
If the user did not provide any input, errorMessage should return 'Required field'. 
If the input does not represent a non-zero number (according to the JavaScript conversion rules), 
'Must be a number besides 0' should be returned. 
In all other cases, you can assume the input is valid, the return value should be an empty string.
*/

function errorMessage(input) {
  if(!input) {
    return 'Required field'
  }
  const num = Number(input)
  if (isNaN(num) || num === 0) {
    return 'Must be a number besides 0'
  }
  else {
    return ""
  }
}

