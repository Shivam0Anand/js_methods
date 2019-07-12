// Arrays to work on
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6];
var strings = ["this", "is", "a", "collection", "of", "words"];

// Use the above two arrays and practice array methods

// Find largest number in numbers
var largest = arr => {
  var max = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};
largest(numbers);

// Find longest string in strings
function longest(strings) {
  var arr = "";
  for (var i = 0; i < strings.length; i++) {
    if (strings[i].length > arr.length) {
      arr = strings[i];
    }
  }
  console.log(arr);
}
longest(strings);

// Find all the even numbers
function even(numbers) {
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
      console.log(numbers[i]);
    }
  }
}
even(numbers);

// Find all the odd numbers
function even(numbers) {
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      console.log(numbers[i]);
    }
  }
}
even(numbers);

// Find all the words that contain 'is' use string method 'includes'
function isInString() {
  for (var i = 0; i < strings.length; i++) {
    if (strings[i].includes("is") == true) {
      console.log(strings[i]);
    }
  }
}
strings.includes("is");

// Find all the words that contain 'is' use string method 'indexOf'
var arr = [];
var containsIsByIndex = strings.forEach(function(word) {
  if (word.indexOf("is") != -1) arr.push(word);
});
console.log(arr);

// Check if all the numbers in numbers array are divisible by three use array method (every)
var divisibleByThree = numbers.every(function(element) {
  element % 3 == 0;
});
divisibleByThree;

//  Sort Array from smallest to largest
numbers.sort(function(a, b) {
  return a - b;
});

strings.sort();

// Remove the last word in strings
var newString = strings.pop();
newString;

// Add a new word in the array
var newString = strings.push("new Words");
newString;
// Remove the first word in the array
var newString = strings.shift();
newString;
// Place a new word at the start of the array use (upshift)
var newString = strings.unshift("a");
newString;
// Make a subset of numbers array [18,9,7,11]
var subset = numbers.slice(3, 7);
subset;
// Make a subset of strings array ['a','collection']
var subset = strings.splice(0, 2);
subset;

// Replace 12 & 18 with 1221 and 1881
numbers.splice(1, 1, 1221);
numbers.splice(3, 1, 1881);
numbers;

// Replace words with string in strings array
strings.splice(5, 1, "string");
strings;

// Customers Array
var customers = [
  { firstname: "Joe", lastname: "Blogs" },
  { firstname: "John", lastname: "Smith" },
  { firstname: "Dave", lastname: "Jones" },
  { firstname: "Jack", lastname: "White" }
];
// Find all customers whose firstname starts with 'J'
var startJ = customers.filter(element => element.firstname.startsWith("J"));
startJ;

// Create new array with firstname and lastname
var nameArray = [];
var name = customers.forEach(function(element) {
  nameArray.push(element.firstname + " " + element.lastname);
});
nameArray;

// Sort the array created above alphabetically
nameArray.sort();
