// Logs string to the console
console.log("Hello, World!");

// Const variables cannot bec hanged after it's first created and assigned
const theVariableFour = 2 + 2;
console.log(theVariableFour);
// code commented out below will give a console error
// theVariableFour = 5:

// let variables can be changed after its first created and assigned
let theVariableFive = 3 + 2;
console.log(theVariableFive);
// Will not give an error on console
theVariableFive = 4;

// querySelector: Returns the first element that is a descendant of node that matches selectors.
// Variable (groceriesArticle) will point to selected element (#groceries)
const groceriesArticle = document.querySelector("#groceries");
// .classList Allows for manipulation of element's class content attribute as a set of whitespace-separated tokens through a DOMTokenList object.
// .add() Adds all arguments passed, except those already present.
groceriesArticle.classList.add("red-text");

// assigns first instance of selected query to variable
const groceriesHeader = document.querySelector(".groceries__header");
// .remove() Removes arguments passed, if they are present.
groceriesHeader.classList.remove("groceries__header");


// Selects all li elements with grocery-list as an id
// .querySelectorAll() returns all element descendants of node that match selectors.
const groceryList = document.querySelectorAll("#grocery-list li"); 
// Loops though all of groceryList items and adds a grocery__header as a class to each of them
/* for (let i = 0; i < groceryList.length; i++){
    groceryList[i].classList.add("groceries__header");
} */

// will only add groceries__header class to the groceryList Item with 1 as the index (Eggs)
for (let i = 0; i < groceryList.length; i++){
    if (i === 1) {
        groceryList[i].classList.add("groceries__header");
    }
}