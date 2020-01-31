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
Array.prototype.myFilter = function(callback) {
  let newArray = [];
  for (let i = 0; i < this.length; i++) {
    let isTrue = callback(this[i], i, this);
    if (isTrue) {
      newArray.push(this[i]);
    }
  }
  return newArray;
};
const getMoreThan100kills = (element, idx, arr) => {
  return element.kills > 100;
};

console.log(agents.filter(getMoreThan100kills));
