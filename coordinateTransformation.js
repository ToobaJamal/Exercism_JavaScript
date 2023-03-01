/*
Implement the translate2d function that returns a function making use of 
a closure to perform a repeatable 2d translation of a coordinate pair.
*/

function translate2d(dx, dy) {
  return function(x, y) {
    return [x + dx, y + dy];
  }
}

/*
Implement the scale2d function that returns a function making use of a 
closure to perform a repeatable 2d scale of a coordinate pair.
*/

function scale2d(sx=2, sy=2) {
  return function(x,y) {
    return [sx*x, sy*y]
  }
}

/* Combine two transformation functions to perform a repeatable transformation. 
This is often called function composition, where the result of the 
first function 'f(x)' is used as the input to the second function 'g(x)'.
*/

function composeTransform(f, g) {
  return function(x, y){
    let fResult = f(x, y)
    return g(fResult[0], fResult[1])
  }
}

/*Implement the memoizeTransform function. It takes a function to memoize, 
then returns a new function that remembers the inputs to the supplied function 
so that the last return value can be "remembered" and only calculated once if it is 
called again with the same arguments.
*/

function memoizeTransform(f) {
  let lastX = undefined;
  let lastY = undefined;
  let lastResult = undefined;
  return function(x, y){
    if(lastX === x && lastY === y) return lastResult;
    lastX = x;
    lastY = y;
    lastResult = f(x, y);
    return lastResult;
  }
}
