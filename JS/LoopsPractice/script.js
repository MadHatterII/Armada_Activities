//Task 1 Multiplication table generator
let multiplier = 5;
let number = 1;

    for( number ; number <= 10; number++){
        let prod = multiplier * number;
        console.log(multiplier + "x"+ number + "=" + prod);
    }

//TAsk 2 Sum of First N natural numbers
let num = 5;
let sum = 0;

for( let i = 0; i <= 5 ; i++){
    sum += i;
    //console.log(sum);
}
console.log(sum);

//Task 3 Array elements printer
let arr=[3,6,9,12,15];

for(let i = 0; i <= arr.length - 1; i++){
    console.log("Array Element: "+ arr[i]);
}

//Task 4 Pattern Printer

for(let i = 0; i <=5; i++ ){
    let as='';
    for(let j = 0; j<=i; j++){
        as+="*";
    }
    console.log(as);
}

//Task 5 reverse array elements

let arr2 = [1,3,5,7,9];

    for(let i = arr2.length-1; i >= 0; i--){
        console.log("Reversed Element: "+ arr2[i]);
    }