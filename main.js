// 1.
// Without logging the values, list the value of `sports` and `total`
var sports = ['soccer', 'baseball'];
var total = sports.push('football', 'swimming');
// A:
// sports = 'soccer', 'baseball'
// total = 'soccer', 'baseball', 'football', 'swimming' so 4


// 2.
// Using the `strings` array, wrte a function `longestString()`
// that accepts an array argument and returns the longest string in the array
var strings = ['this','is','a','collection','of','words'];
//
A: var strings = ['this','is','a','collection','of','words'];

   strings.reduce (function longestString(longest, currentWord) {

    if (currentWord.length > longest.length) {

      return (currentWord);}

    else {

      return (longest);
  }
});

var strings = ['this','is','a','collection','of','words'];
var longest = [];

function longestString(strings) {
  for (i=0; i<strings.length; i++) {
    if (strings[i].length>longest.length) {
      longest = strings[i];
    }
  }return(longest)
}
longestString(strings)


console.assert(longestString(strings) === 'collection', {"message": "longestString should return 'collection'"});


// Use the `numbers` array for questions 3 - 8.
var numbers = [1,12,4,18,9,7,11,3,101,5,6];


// 3.
// Write a function `smallestNumber()` that accepts an array
// and returns the smallest number in the array.
// A:

var numbers = [12,1, 4,18,9,7,11,3,101,5,6];

var smallest = numbers[0];

function smallestNumber(numbers){
  for (i=0; i < numbers.length; i++){
    if (numbers[i] < smallest){
       smallest = numbers[i];}
  }
return (smallest);
      }
console.log(smallestNumber(numbers));
console.assert(smallestNumber(numbers) === 1, {"message": "smallestNumber should return 1"});


// 4.
// Write a function `getEvens()` that accepts an array
// and returns only the even numbers in the array.
// A:
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var evenArray = [];

function evenOnly(){
  for (var i=0; i < numbers.length; i++){
      if (numbers[i] % 2 === 0){

       evenArray.push(numbers[i]);

       console.log(evenArray);
      }else {
        console.log("this is odd");
      }
  }

}

console.log(evenOnly());

console.assert(getEvens(numbers).toString() === '12,4,18,6', {'message': 'getEvens should return "12,4,18,6"'});


// 5.
// Write a function that accepts an array argument
// and returns the array reversed
// Hint: When looping over the array, start at the last index
// and decrement the iterator to zero
// A:

var numbers = [1,12,4,18,9,7,11,3,101,5,6];
function arrayReverser (array){
  let reversed = [];
  for (i=array.length-; i >=0; i--){
    reversed.push(array[i]);
  }
  return reversed;
}
console.assert(arrayReverser(numbers).toString() === '6,5,101,3,11,7,9,18,4,12,1', {'message': 'arrayReverser should return "6,5,101,3,11,7,9,18,4,12,1"'});

console.assert(arrayReverser(numbers).toString() === '6,5,101,3,11,7,9,18,4,12,1', {'message': 'arrayReverser should return "6,5,101,3,11,7,9,18,4,12,1"'});


// 6.
// Write a function that accepts an array argument
// and returns the sum of all of the numbers in the array
// A:
function sumArrayOfNumbers(array){
  let sum = 0;
  for (i = 0; i < array.length; i++){
    sum += array[i]
  }
  return sum;
}
console.assert(sumArrayOfNumbers(numbers) === 177, {'message': 'sumArrayOfNumbers should return 177'});


// 7.
// Write a function that accepts an array argument
// and returns an array of only the numbers greater than 10
// A:
function numbersOver10(array){
  let newArray = [];
  for (i = 0; i < array.length; i++){
    if(i > 10){
      newArray.push(array[i]);
    }
  }
  return newArray;
}

console.assert(numbersOver10(numbers).toString() === "12,18,11,101", {'message': 'numbersOver10 should return "12,18,11,101"'});


// 8.
// Write a function that accepts both an array and number argument
// and returns an array of only the numbers greater than the number passed to the function
// A:
var numbers = [1,12,4,18,9,7,11,3,101,5,6];

function numbersOverX(array, num){
  let newArray = [];
  for (i=0; i < array.length; i++){
    if(array[i] > num){
    newArray.push(array[i]);
  }
  return newArray;
 }
}

console.assert(numbersOverX(numbers, 15).toString() === "18,101", {'message': 'numbersOverX should return "18,101"'});

// 9.
// Write a function `joinArrays()` that takes an array of arrays,
// and returns a single array with the contents of the second array
// listed after the contents of the first array
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var numbersTwo = [33,56,72,2,5,66,90,21,42];
// A:
function joinArrays ([numbers, numbersTwo]){
  var joinArray = array[0].concat(array[1]);
    return joinArray;
}
// if more than two arrays ==>
let joinArray = [];
for (i=0; i<array.length; i++){
  if (i==0) {
    joinArray.push(array[i]);
  } else {
    joinArray = concat.joinArray;
  }
}
// let newArray = numbers;
// for(i=0; i < numbers.length; i++){
//   numbers.push([numbersTwo]);
// }
// return newArray;
// }





console.assert(joinArrays([numbers, numbersTwo]).toString() === '1,12,4,18,9,7,11,3,101,5,6,33,56,72,2,5,66,90,21,42', {'message': 'joinArrays should return "1,12,4,18,9,7,11,3,101,5,6,33,56,72,2,5,66,90,21,42"'});


// 10.
// Using the `instructors` array, comment the value of each variable below
var instructors = [
    ['JD','JavaScript'],
    ['Tim','JavaScript'],
    ['Brit','Ruby'],
    ['Joe','iOS'],
    ['Dan','JavaScript'],
    ['Will','JavaScript'],
    ['Calvin','JavaScript'],
    ['James','Ruby']
];



var greenvilleInstructor = instructors[5];
// greenvilleInstructor = Will

var instructorNameDiscipline = instructors[5];
// greenvIlleInstructor = JavaScript

var instructorOne = instructors[4][0];
// instructorOne = Dan

var instructorTwo = instructors[0][1];
// instructorTwo = Tim

var instructorThree = instructors[2][0];
// instructorThree = Brit
