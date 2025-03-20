//#1 Writing your first callback function

function calculate(num1, num2, operation) {
    return operation(num1, num2);
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return b !== 0 ? a / b : "Cannot divide by zero";
}

console.log(calculate(10, 5, add));    
console.log(calculate(10, 5, subtract)); 
console.log(calculate(10, 5, multiply)); 
console.log(calculate(10, 5, divide));   
console.log(calculate(10, 0, divide));   

//#2 Using Callbacks with setTimeout

function delayedMessage(message, delay, before, after) {
    if (before) {
        before();
    }

    setTimeout(function() {
        if (after) {
            after(message);  
        }
    }, delay);
}
delayedMessage(
    "with delay", 
    2000, 
    function() {
        console.log("No delay");
    }, 
    function(msg) {
        console.log(msg);
    }
);

//#3 Looping with callbacks
function repeatTask(times, callback) {
    for (let i = 0; i < times; i++) {
        if (callback(i) === false) {
            break; 
        }
    }
}


repeatTask(5, function(index) {
    console.log("Iteration:", index);
    if (index === 1) {
        return false; 
    }
});


