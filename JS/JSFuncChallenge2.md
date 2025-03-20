//Challenge 1

function generatePattern() {  
  let result = "";  // Initialize an empty string
  for (let i = 1; i <= 3; i++) {  // outer loop for rows
    for (let j = 1; j <= i; j++) {  // inner loop for columns
      result += j + " ";  // add the number and a space
    }  
    result += "\n";  //creates a new row
  }  
  return result;  
}  
/* 1
   1 2
   1 2 3 */
console.log(generatePattern());

//Challenge 2

function swapFirstLast(arr) {  
  let first = arr.shift();  // Remove the first element
  let last = arr.pop();  // Remove the last element
  arr.unshift(last);  // Insert last element at the beginning
  arr.push(first);  // Insert first element at the end
  return arr;  
}  
//[40,30,20,10]
//[10,20,30,40]
/* Wrong po yung prediction ko kasi I thought 
    ma rereverse lang po yung array since tinanggal
    po yung first element */
let numbers = [10, 20, 30, 40];  
console.log(swapFirstLast(numbers));  
console.log(numbers);

//Challenge 3

function filterPassingGrades(grades) {  
  let passing = [];  // Initialize an empty array
  for (let grade of grades) {  
    if (grade >= 70) {  
      passing.push(grade);  // Append passing grades at the end
    } else {  
      passing.unshift(grade);  // Insert failing grades at the beginning
    }  
  }  
  return passing;  
}  

//[45,60,85,90]
let scores = [85, 45, 90, 60];  
console.log(filterPassingGrades(scores)); 

//Challenge 4


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

//Challenge 5

function findValue(arr, target) {  

  for (let i = 0; i < arr.length; i++) {  
    if (arr[i] === target) {  
      return `Found at index ${i}`;  // Return the index if found
    }  
  }  
  return "Not found";  // Return "Not found" if target is missing
}  
//Found at index 1
//Not found
let data = [5, 12, 8, 130, 44];  
console.log(findValue(data, 12));  
console.log(findValue(data, 100));
