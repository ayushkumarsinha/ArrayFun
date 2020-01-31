const evenNumbers = Array.from({ length: 10 }).map((x, idx) => ++idx * 2);

Array.prototype.myReduce = function(callback, initialVal) {
  var accumulator = initialVal;
  for (var i = 0; i < this.length; i++) {
    if (accumulator !== undefined)
      accumulator = callback(accumulator, this[i], i, this);
    else accumulator = this[i];
  }
  return accumulator;
};
const add = (a, b) => a + b;
var result = evenNumbers.myReduce(add, 100);

console.log(result);
