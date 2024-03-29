/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself


// Step 2: Inside of the object, add a property named name with a value of your name as a string
const myself = {
    name:"Eduardo Selmar Gerez ",
    photo:"images/gerez.png",
    photoName:"photo of me",
    favoriteFoods:[' Roast meats',  ' Lasagna', ' Pizza'],
    hobbies:['play Guitar',' drink Mate',' watch movies',"To travel"],
    placesLived:[{place:"San Luis, Argetina", length:"3 years",reazon:"work"},{place:"Buenos Aires, Argentina",length:"2 years",reazon:"mission"}],
};
const Name= document.querySelector('#name').textContent=myself.name
const Photo=document.querySelector('#photo');
Photo.setAttribute('src',myself.photo);
Photo.setAttribute('alt',myself.photoName);
const Food = document.getElementById("favorite-foods");

/*
const R=document.createElement("li")
R.innerHTML=myself.favoriteFoods[0];
const L=document.createElement("li");
L.innerHTML=myself.favoriteFoods[1];
const P=document.createElement("li");
P.innerHTML=myself.favoriteFoods[2];

Food.append(R, L, P);

*/

myself.favoriteFoods.forEach(function(food){
    const li= document.createElement("li");
    li.textContent=food;
    Food.appendChild(li);
    Food.style.textAlign="left";
});

const hobbies=document.getElementById("hobbies");


myself.hobbies.forEach(function(hobbie){
    const hobbieLi= document.createElement("li");
    hobbieLi.textContent=hobbie;
    hobbies.appendChild(hobbieLi);
    hobbies.style.textAlign="left";
});


const places= myself.placesLived.map(
    (place) => `
    <dt>${place.place}</dt>
    <dd>${place.length}</dd>
    `
  );
  const lived= document.querySelector("#places-lived");
  lived.innerHTML=places.join("");

// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element

// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived






















// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string

// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )

// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings

// Step 6: Add another property named placesLived with a value of an empty array

// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string

// Step 8: For each property, add appropriate values as strings

// Step 9: Add additional objects with the same properties for each place you've lived


/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name

// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo

// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo

// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element

// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods

// Step 6: Repeat Step 4 for each hobby in the hobbies property

// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
