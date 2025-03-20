
//Task 1 Calculate the total cost of items
let item1=203,item2=392,item3=10;
let total = item1+item2+item3;
console.log("The total cost of the item is: "+ "$"+total);

/*Task 2 Calculate the average of three numbers
I used the variables in the first task*/
let avg = (item1+item2+item3)/3
console.log("The average is: "+ avg);

//Task 3 Odd or Even checker
let num = 95;
if(num %2 == 0){
    console.log(num+" is an even number.");
}
else{
    console.log(num+" is an odd number.")
}

//Task 4 Calculate discounts
let price = 500;
let discount = 20;
let less_price = (price*discount)/100
let new_price = price - less_price;

console.log("The discounted price is: "+ "$"+new_price);

//extra: Reverse Percentage Calculation
less_price = 80;
discount = 20;

price = less_price/(1-discount/100);
console.log("The original price before discount was: "+"$"+price);