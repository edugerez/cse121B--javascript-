/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
const myName= document.querySelector('#name');
myName.textContent='Eduardo Selmar Gerez'

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())


// Step 3: declare and instantiate a variable to hold the current year
const year=document.querySelector('#year');
year.textContent='2022'


// Step 4: place the value of the current year variable into the HTML file


// Step 5: declare and instantiate a variable to hold the name of your picture
const picture= document.querySelector('img');
picture.setAttribute('src','images/gerez.png');

// Step 6: copy your image into the "images" folder

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())




/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
myFood=[' Roast meats',  ' Lasagna', ' Pizza'];

document.querySelector('#food').innerHTML=myFood


// Step 2: place the values of the favorite foods variable into the HTML file

// Step 3: declare and instantiate a variable to hold another favorite food

chikenFood=' Stuffed chicken'

myFood.push(chikenFood)
document.querySelector('#food').innerHTML=myFood
// Step 4: add the variable holding another favorite food to the favorite food array


// Step 5: repeat Step 2


// Step 6: remove the first element in the favorite foods array

myFood.shift();
document.querySelector('#food').innerHTML=myFood


// Step 7: repeat Step 2


// Step 8: remove the last element in the favorite foods array

myFood.pop();
document.querySelector('#food').innerHTML=myFood


// Step 7: repeat Step 2



