//REQUIRE:
//create a rock paper scissor game
//the program take 1 user input that match 
//either 'rock','paper','scissor'
//the program calls a computer choice of the same selection
// the program compare the results with Rock>Scissor>Paper>Rock







//PLAN:
// create a Function to compare the choices
function compare(u,b){

switch (u) {
  case "rock": 
    console.log(`user play rock bot play ${b}`);
    if (b == u) {
      console.log('it is a tie');
      return 'tie';
    } else if (b == 'paper') {
      console.log ('bot wins');
      return 'bot';
    } else {
      console.log('user wins');
      return 'user';
    }
    
  case "paper": 
    console.log (`user play paper bot play ${b}`);
    if (b == u) {
      console.log ('it is a tie');
      return 'tie';
    } else if (b == 'scissors') {
      console.log ('bot wins');
      return 'bot';
    } else {
      console.log('user wins');
      return 'user';
    }
    return;
  case "scissors": 
    console.log (`user play scissors bot play ${b}`);
    if (b == u) {
      console.log ('it is a tie');
      return 'tie';
    } else if (b == 'rock') {
      console.log ('bot wins');
      return 'bot';
    } else {
      console.log('user wins');
      return 'user';
    }
  
}

}




//Create a Function to get computer choice 
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}
//ramdomly between 'Rock', 'Paper', 'Scissors'
function getComputer(array){
  //random select a number between 0 -2
  let i = getRndInteger(0,3);
  let choice = array[i]; 
  return choice;
}




var hand =['rock','paper','scissors'];

//
var userChoice = prompt('what is yout hand').toLowerCase();
var botChoice = getComputer(hand);
var winner = compare(userChoice,botChoice);
