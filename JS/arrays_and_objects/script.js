//Task 1 Create and Use an Object
let book = {
    title: "The Alchemist",
    author: "Paulo Coelho",
    pages: 182,
    isRead: false
    };
console.log(book.author);
console.log(book["title"]);
console.log(book);

book.isRead = true;
book.genre = "Fiction";

console.log(book);


//Task2 Create and Modify an Array of Objects
let movie1 ={},movie2 ={},movie3 ={} ;
let movies =[ movie1 = {title: "Transformers One", director: "Josh Coley", year: 2019}, movie2 = {title: "Star Trek", director: "J.J Abrahams", year: 2009}, movie3 = {title: "Resident Evil", director: "Paul W. S. Anderson", year: 2002}];
console.log(movies[1].title)
movies.push({title: "Dr. Strange", director: "Scott Derrickson", year: 2022});
movies[0].year=2023;
console.log(movies);

//Task 3 Combine Objects and Array
let student ={name: "Mikhael Gadiz", age: 23, subjects:["Science","Math","PathFit"]};

console.log(student.subjects[0]);
student.subjects.push("Esport");
console.log(student);

//Task 4 Challenge Task
let recipe = {name: "Calamares",ingredients:[{name: "large squid" ,quantity:"1 kilo"},{name: "mlik" ,quantity:"1 cup"},{name: "conrstarch" ,quantity:"1 cup"},{name: "large squid" ,quantity:"1 kilo"},{name: "salt" ,quantity:"1 teaspoon"}, {name: "lemon" ,quantity:"1 pc"}], isVegetarian: "false"};
recipe.ingredients.push({name: "cooking oil", quantity: "1 liter"});
console.log(recipe.ingredients[1]);
console.log(recipe);