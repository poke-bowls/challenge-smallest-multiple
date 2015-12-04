/**
 * Build a function that finds the smallest positive number that is evenly
 * divisible by all of the numbers starting from 1 up to the value passed into your function.
 *
 * @param  { Number } ceiling This value will serve as your ceiling.
 * @return { Number }         Lowest Positive Number that is evenly divisible by all numbers
 *                            between 1 and `ceiling`
 */
module.exports = function(ceiling) {
  var range = makeArray(ceiling);
  calculatedLCM = 1;
  for (var i = 0; i < arr.length; i++){
    calculatedLCM = lcmOfTwo(calculatedLCM, range[i]);
  }
  return calculatedLCM;
};

function makeArray (n) {
  arr = [];
  for(i = 1; i <= n; i++){
    var number = 0;
    number += i;
    arr.push(number);
  }
  return arr;
}

function gcd (a, b) {
  return b ? gcd(b, a % b) : Math.abs(a);
}

function lcmOfTwo(a, b) {
  return (a * b) / gcd(a, b);
}



