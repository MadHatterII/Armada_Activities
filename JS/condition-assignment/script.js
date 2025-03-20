
//Task 1 Grading system
let grade = 79;

if(grade >= 90){
    console.log("Grade A");
}else if(grade >=80){
    console.log("Grade B");
}else if(grade >= 70){
    console.log("Grade C");
}else if(grade >=60){
    console.log("Grade D");
}else{
    console.log("Grade F");
}

//Task 2 Weather advisor
let temperature = 15;

if(temperature <= 0 ){
    console.log("It's freezing outside! Bundle up!");
}else if(temperature <= 15){
    console.log("It's cold outside. Wear a jacket.");
}else if(temperature <= 30){
    console.log("The weather is nice. Enjoy your day!");
}else{
    console.log("It's hot outside. Stay hydrated!");
}

//Task 3 Eligibility checker
let age = 36;

let Eligibility = (age <= 13) ? "You are too young for this activty.":
                  (age <= 17) ? "Your need parental permission.":
                  "You are eligible for this activity.";
console.log(Eligibility);


//Task 4 Ticket Price Calculator
let age1 = 23;
let isMember = false;

let ticket_price = (age1 <= 12)? "The ticket is free":
                   (age > 12 && isMember) ?"The ticket cost $10":
                    "The ticket cost $15";
console.log(ticket_price);

//Task 5 Leap Year Checker
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

console.log(isLeapYear(2025))