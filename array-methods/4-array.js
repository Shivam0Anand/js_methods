var data = [
  {
    name: "Butters",
    age: 3,
    type: "dog"
  },
  {
    name: "Lizzy",
    age: 6,
    type: "dog"
  },
  {
    name: "Red",
    age: 1,
    type: "cat"
  },
  {
    name: "Joey",
    age: 3,
    type: "dog"
  },
  {
    name: "Pochi",
    age: 3,
    type: "dog"
  }
];

// write a function that will sum all of the dogs ages in dog years using for loop.
// 1 human year = 7 dog year

// your code goes here
var dogYear = 0;
function totalDogAge() {
  for (var i = 0; i < data.length; i++) {
    if (data.type == "dog") dogYear += data.age[i] * 7;
  }
}
totalDogAge();
dogYear;
// Solution is 105

// Write the same function using
// 1. filter - for filtering the cat or dog
// 2. map - to multiply human year to dog year
// 3. reduce - to accumulate total age.

// Solution 105
function sumDog() {
  var typeDog = data.filter(element => element.type == "dog");
  var dogYear = typeDog.map(element => element.age * 7);
  var sum = dogYear.reduce((x, y) => x + y);

  return sum;
}
sumDog();
