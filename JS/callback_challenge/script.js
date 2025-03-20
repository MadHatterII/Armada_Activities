/* Mikhael C. Gadiz
   Callback Challenge */
// Task 1 Implement customMap function
function customMap(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        //push the result to the new array
        result.push(callback(arr[i], i, arr)); 
    }
    return result;
}

let numbers = [1, 2, 3];
let doubled = customMap(numbers, function(num) { return num * 2; });
console.log(doubled); 

// Task 2 Implement filter function
function filter(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        // check if the element satisfies the condition
        if (callback(arr[i], i, arr)) { 
            result.push(arr[i]);
        }
    }
    return result;
}

let filteredResult = filter([1,2,3,4,15], function(val) { return val < 10; });
console.log(filteredResult); 

// Task 3 Implement some function
function some(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        //return true if condition is met
        if (callback(arr[i], i, arr)) { 
            return true;
        }
    }
    return false; // If no element satisfies the condition, return false
}

let someResult = some([1,2,3,4], function(val) { return val > 5; });
console.log(someResult); 

// Task 4 Implement every function
function every(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        //will return false if condition is met
        if (!callback(arr[i], i, arr)) {
            return false;
        }
    }
    return true; 
}

let everyResult = every([1,2,3], function(val) { return val > 0; });
console.log(everyResult); // Output: true

// Task 5 Implement reduce function
function reduce(arr, callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : arr[0]; 
    // Determine start index based on initial value
    let startIndex = initialValue !== undefined ? 0 : 1; 
    for (let i = startIndex; i < arr.length; i++) {
        // Apply callback function for accumulation
        accumulator = callback(accumulator, arr[i], i, arr); 
    }
    return accumulator;
}

let sum = reduce([1,2,3], function(acc, num) { return acc + num; }, 0);
console.log(sum); 

// Task 6 Implement includes function
function includes(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) { 
            return true;
        }
    }
    return false; 
}

let includesResult = includes([1,2,3], function(val) { return val === 2; });
console.log(includesResult); 
