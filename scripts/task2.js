
const myName= document.querySelector('#name');
myName.textContent='Eduardo Selmar Gerez'


const year=document.querySelector('#year');
year.textContent='2023'



const picture= document.querySelector('img');
picture.setAttribute('src','images/gerez.png');


myFood=[' Roast meats',  ' Lasagna', ' Pizza'];

document.querySelector('#food').innerHTML=myFood



chikenFood=' Stuffed chicken'

myFood.push(chikenFood)
document.querySelector('#food').innerHTML=myFood

myFood.shift();
document.querySelector('#food').innerHTML=myFood



myFood.pop();
document.querySelector('#food').innerHTML=myFood





