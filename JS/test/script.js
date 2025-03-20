// console.log("Welcome to Javascript");
// document.getElementById("click-me").addEventListener("mouseover", function(){
//     alert("Button is Clicked");
// });
// // let isSunny = true;
// // let isWeekend = false;

// // console.log("Is it a good day for a picnic?", isSunny && isWeekend); // false
// // console.log("Can we relax today?", isSunny || isWeekend); // true
// // console.log("Is it not sunny?", !isSunny); // false

// let person = { 
//     name: "alice", 
//     age: "25"
// };

// let car = {
//     brand: "Ford",
//     model: "Focus",
//     year: 2018,
// };

// for (let key in car) {
//     console.log(key + ": " + car[key]);
// }

// let isLoggedIn = true;

// let accessMessage = isLoggedIn 
//     ? "Welcome back!" 
//     : "Please log in to continue.";

// console.log(accessMessage);
// function multiplyMatrix(matrix) {
//     for (let i = 0; i < matrix.length; i++) {
//       for (let j = 0; j < matrix[i].length; j++) {
//         matrix[i][j] *= 2;
//       }
//     }
//     return matrix;
//   }
  
//   let matrix = [
//     [1, 2],
//     [3, 4],
//   ];
//   console.log(multiplyMatrix(matrix));
// function swapFirstLast(arr) {  
//     let first = arr.shift();  // Remove the first element
//     let last = arr.pop();  // Remove the last element
//     arr.unshift(last);  // Insert last element at the beginning
//     arr.push(first);  // Insert first element at the end
//     return arr;  
//   }  
  
//   let numbers = [10, 20, 30, 40];  
//   console.log(swapFirstLast(numbers));  
//   console.log(numbers);
  function updateStatus(tasks) {  
    // Loop through each task in the array
    for (let task of tasks) {  
      task.completed = !task.completed;  // Toggle the completed status (true becomes false, false becomes true)
    }  
    return tasks;  
  }  
  
  let taskList = [  
    { id: 1, completed: false },  
    { id: 2, completed: true }    
  ];  
  //[ { id: 1, completed: true }, { id: 2, completed: false } ]
  //[ { id: 1, completed: true }, { id: 2, completed: false } ]
  console.log(updateStatus(taskList)); 
  console.log(taskList);  