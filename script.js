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
    alert (`user play rock bot play ${b}`);
    if (b == u) {
      alert ('it is a tie');
      return 'tie';
    } else if (b == 'paper') {
      alert ('bot wins');
      return 'bot';
    } else {
      alert('user wins');
      return 'user';
    }
    
  case "paper": 
    alert (`user play paper bot play ${b}`);
    if (b == u) {
      alert ('it is a tie');
      return 'tie';
    } else if (b == 'scissors') {
      alert ('bot wins');
      return 'bot';
    } else {
      alert('user wins');
      return 'user';
    }
    return;
  case "scissors": 
    alert (`user play scissors bot play ${b}`);
    if (b == u) {
      alert ('it is a tie');
    } else if (b == 'rock') {
      alert ('bot wins');
    } else {
      alert('user wins');
    }
    return;
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
var userChoice = prompt('what is yout hand').toLowerCase();
var botChoice = getComputer(hand);
var winner = compare(userChoice,botChoice);