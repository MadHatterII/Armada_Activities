
//Challenge 1

function calculateSum(arr) {
  let sum = 0;
  //iterates through the array and adds the value to the sum
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  //return the final sum after the loop exits
  return sum;
}
//predicted value is 10
let numbers = [1, 2, 3, 4];
console.log("Sum:", calculateSum(numbers));

//Challenge 2
function isEven(num) {
    //checks if the number has no remainder if divided by 2
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
//4 true 
//7 false
//0 true

console.log(isEven(4));
console.log(isEven(7));
console.log(isEven(0));


//challenge 3
function greet(name) {
  return "Hello, " + name + "!";
}

function personalizedGreeting(names) {
    /* iterate each element inside the friends array that has been passed to names */
  for (let i = 0; i < names.length; i++) {
    console.log(greet(names[i]));
  }
}
//Hello, Allice!
//Hello, Bob!
//Hello, Charlie

let friends = ["Alice", "Bob", "Charlie"];
personalizedGreeting(friends);

//Challenge 4

function reverseArray(arr) {
  let reversed = [];
  //iterates the elements inside the originalArray
  for (let i = arr.length - 1; i >= 0; i--) {
    /* creates a new array base on the original array but the order is reversed */
    reversed.push(arr[i]);
  }
  return reversed;
}
//[30,20,10]
//[10,20,30]
let originalArray = [10, 20, 30];
console.log(reverseArray(originalArray));
console.log(originalArray);


//Challenge 5

function multiplyMatrix(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
    // Multiply the current element by 2 and update its value
      matrix[i][j] *= 2;
    }
  }
  return matrix;
}

let matrix = [
  [1, 2],
  [3, 4],
];

//value [2,4],[6,8]
console.log(multiplyMatrix(matrix));