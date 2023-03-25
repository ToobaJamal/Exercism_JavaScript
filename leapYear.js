/*
Given a year, report if it is a leap year.
*/

const isLeap = (year) => {
  if(year % 4 === 0) {
    if(year % 100 === 0) {
      if(year % 400 === 0) {
        return true
      }
      else {
        return false
      }
    } else {
      return true
    }
  } else {
    return false
  }
};
