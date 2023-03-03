/*
Given a name, return a string with the message:

One for name, one for me.
Where "name" is the given name.

However, if the name is missing, return the string:

One for you, one for me.
*/

const twoFer = (param) => {
  if(param !== undefined) {
    return `One for ${param}, one for me.`
  }
  else if (param === undefined) {
    return `One for you, one for me.`
  }
}
