var words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot"
];
//Write a function findLongestWord that takes an array of words and returns the longest one.
//If there are 2 with the same length, it should return the first occurrence.
var count = 0;
var longestString = "";
words.forEach(function(element) {
  if (element.length > count) {
    count = element.length;
    longestString = element;
  }
});
longestString;

var numbers1 = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
// Create a sumArray function that takes an array of numbers1 as a parameter, and calculate the sum of all its numbers
// Use reduce method of array
var sum1 = (accumulator, currentValue) => accumulator + currentValue;
console.log(numbers1.reduce(sum1));

// Use the above sum and calculate the average.
var average = totalSum / numbers1.length;
average;

var numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];
//Write a function averageNumbers that receives an array of numbers2 and calculate the average of the numbers
var sum2 = (accumulator, currentValue) => accumulator + currentValue;
totalSum = numbers2.reduce(sum1);
totalSum;
totalSum / numbers2.length;

var words2 = [
  "seat",
  "correspond",
  "linen",
  "motif",
  "hole",
  "smell",
  "smart",
  "chaos",
  "fuel",
  "palace"
];
//Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
var lengthWords2 = 0;
function averageWordLength(words2) {
  words2.forEach(function(element) {
    lengthWords2 += element.length;
  });
  var avgWord = lengthWords2 / words2.length;
  return avgWord;
}
averageWordLength(words2);
