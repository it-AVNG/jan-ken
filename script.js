var hand =['rock','paper','scissors'];
//PLAN:
//create function to announce hand
function updateStat(user,bot){
  document.getElementById('update').innerText='';
  document.getElementById('update').innerText=`user play ${user} bot play ${bot}`;
}
//create funtion to update winner of the round
function updateWinner(string){
  
  document.getElementById("annouce").innerHTML = '';
  document.getElementById("annouce").innerHTML += string;
}
// create a Function to compare the choices
function compare(user,bot){
  switch (user) {
    case "rock": 
      
      updateStat(user,bot);
      if (bot == user) {
        updateWinner('it is a tie');
        return 'tie';
      } else if (bot == 'paper') {
        updateWinner ('bot wins');
        return 'bot';
      } else {
        updateWinner('user wins');
        return 'user';
      }
      
    case "paper": 
      updateStat(user,bot);
      if (bot == user) {
        updateWinner('it is a tie');
        return 'tie';
      } else if (bot == 'scissors') {
        updateWinner ('bot wins');
        return 'bot';
      } else {
        updateWinner('user wins');
        return 'user';
      }
      return;
    case "scissors": 
      updateStat(user,bot);
      if (bot == user) {
        updateWinner('it is a tie');
        return 'tie';
      } else if (bot == 'rock') {
        updateWinner ('bot wins');
        return 'bot';
      } else {
        updateWinner('user wins');
        return 'user';
      }
    
  }

}
//Create a Function to get computer random choice 
function getComputer(array){
  //random select a number between 0 -2
  let i =Math.floor(Math.random() * (3 - 0) ) + 0; ;
  let choice = array[i]; 
  return choice;
}

//create playerSelection global variable
var playerSelection
//Delegate evenet listener to the document hand-container
const playRound = document.querySelector("#hand-container");
playRound.addEventListener("click",
function(e){
  playerSelection= `` + e.target.getAttribute('id');
  //trigger game, the bot selection
  var botChoice = getComputer(hand);
  //check for winner
  var winner = compare(playerSelection,botChoice);
});





