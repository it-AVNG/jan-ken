//REQUIRE:
//create a rock paper scissor game
//the program take 1 user input that match 
//either 'rock','paper','scissor'
//the program calls a computer choice of the same selection
// the program compare the results with Rock>Scissor>Paper>Rock

//PLAN:
//Create a Function to get computer choice 
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
//ramdomly between 'Rock', 'Paper', 'Scissors'
function getComputerchoice(array){
    //random select a number between 0 -2
    let i = getRndInteger(0,3);
    let choice = array[i]; 
    return choice;
}








//Create a method to receive inputs from player
function getPlayerchoice(array){
let valid = false;
let choice;
//Create method to validate inputs from player
while (valid === false){
    choice = prompt('what is your hand:').toLowerCase();
    valid = array.includes(choice);
}
return choice;
}









//Create a function to compare inputs from player and computer choice
function compareChoice(a,b){
    switch (a){
        case "rock":
            switch (b){
                case "rock": 
                    alert('It is a tie')
                    return;
                case "paper":
                    alert('User wins')
                    return "user";

                case "scissors":
                    alert('Bot wins')
                    return "bot";

            }    
        
        case "paper":
            switch (b){
                case "rock": 
                    alert('Bot wins')
                    return "bot";
                case "paper":
                    alert('It is a tie')
                    return ;

                case "scissors":
                    alert('User wins')
                    return "user";
            }    

        case "scissors":
            switch (b){
                case "rock": 
                    alert('User wins')
                    return "user";
                case "paper":
                    alert('bot wins')
                    return "bot";

                case "scissors":
                    alert('it is a tie')
                    return ;
            }    

    }    

}



//Create a method to start the game
function startGame(){
    var u = 0; //user win number
    var b = 0; // bot win number
    while (answer === 'y'){
       //create a Bo5 playstyle
        for (let i = 0; i <5 ; i++){
            //get choice and compare
            let bot = getComputerchoice(results);
            let user = getPlayerchoice(results);
            let winner = compareChoice(bot, user);
            //keep track of winner
            if (winner == 'user'){
                u++;
            } else if (winner == bot) {
                b++;
            } 
            //winner determine

        }
        if (u >=3){ 
            alert('user wins game');
            
        } else if( b>= 3){
            alert('bot wins game');
            
        } else {alert('it is a Tie game');}

        //Create a method to continue or stop
        answer = prompt('replay? (y/n)');
        validate(answer);
    }
}

function validate(input){
//If !=y --> prompt: I will wait till you say yes (y)
    while (answer.toLowerCase()!='y'){
        answer = prompt('I will wait till you say yes (y)');
    }    
    return answer = 'y';
}


//Start the game:
 //promt: Will you play Jan-Ken-pon? (y/n) 
 let answer = prompt('will you play Jan-Ken-pon? (y/n):');

//validarte the input case insentivity

answer = validate(answer);
let results =['rock','paper', 'scissors'];
//If y --> Start the game 
startGame();

 

 