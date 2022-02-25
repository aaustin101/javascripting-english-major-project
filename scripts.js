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
*/

let makeABurrito;
makeABurrito = function(beansVariable){
  let beansResponse;
  addBeans();
  beansResponse = "You ordered " + beansVariable + " beans. Good choice!";
  $("#response").html(beansResponse);
  // etc.

}

let blackBeans;
blackBeans = "black";
makeABurrito(blackBeans);
