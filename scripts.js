$("#response").html("scripts.js has loaded!");

/*let userInput;
userInput = prompt("What do you want to have for dinner?", "Type your answer here.");
if ( userInput === "burrito" ) {
  $("#response").html("Brilliant choice!");
} else {
  $("#response").html("Don’t you want a burrito?");
}
*/

/*let userInput;
userInput = prompt("Is the weather nice outside today", "Type your answer here");
if ( userInput === "no") {
    $(#response").html("correct the weather is very bad!");
    } else {
  $(#response").html("YOU ARE WRONG!!!!! The weather is very bad!");
    }

let makeABurrito;
makeABurrito = function(burritoVariable, onionsVariable, cilantroVariable){
  let burritoResponse;
  burritoResponse = "You ordered " + beansVariable + " beans. Good choice!";
  $("#response").html(beansResponse);
};

let blackBeans;
blackBeans = "black";
makeABurrito(blackBeans);
let whiteonion;
whiteonion = "no opinion';
makeABurrito(whiteonion);
*/

/*
let arrayOfStrings, arrayOfNumbers, arrayMixed;
arrayOfStrings = ["a", "b", "c"];
arrayOfNumbers = [1, 2, 3];
arrayMixed = ["a", 1, null, true, arrayOfNumbers, [4.5, 5.6]];
$("#response").html(arrayOfStrings[2]);


let myBurritoObject;
myBurritoObject = {
  tortilla: "wheat",
  guacamole: true,
  beans: "pinto",
  habaneroSauceSquirts: 3
  };
// and let’s access a property
$("#response").html(myBurritoObject["tortilla"]);

let arrayOfStrings;
arrayOfStrings = ["a", "b", "c"];
$("#response").html(arrayOfStrings.length);
*/

/*
let myHabaneroSauceSquirts, myBurritoObject;
// First, define and assign a variable for how 
// spicy the burrito is.
myHabaneroSauceSquirts = 3;
// Now assign the burrito object.
myBurritoObject = {
  tortilla: "wheat",
  guacamole: true,
  beans: "pinto",
  // Make use of the variable above.
  habaneroSauceSquirts: myHabaneroSauceSquirts,
  // Use the variable again in a function.
  spiciness: function(){
    if (myHabaneroSauceSquirts > 0 ){
      alert("This is a spicy burrito!");
    } else {
      alert("This is a mild burrito.");
    }
  }
};
$("#response").html("Your burrito has " +
  myBurritoObject.habaneroSauceSquirts +
  " squirts of habanero.");
myBurritoObject.spiciness();
*/
