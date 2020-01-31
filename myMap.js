const agents = [
  {
    name: "John Wick",
    kills: 300,
  },
  {
    name: "James Bond",
    kills: 150,
  },
  {
    name: "Ethan Hunt",
    kills: 100,
  },
  {
    name: "Batman",
    kills: 0,
  },
];
Array.prototype.myMap = function(callback) {
  let newArray = [];
  for (let i = 0; i < this.length; i++) {
    let modifiedElement = callback(this[i], i, this);
    newArray.push(modifiedElement);
  }
  return newArray;
};

const getName = (element, idx, arr) => {
  return element.name;
};

console.log(agents.myMap(getName));
