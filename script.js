
let imgDataBase = {
    "rock" : "./assets/images/rock.png",
    "paper" : "./assets/images/Paper.png",
    "scissor" : "./assets/images/Scissors.png"
}

const game = (userChoice) =>{

    console.log("User Pick = ", userChoice.id);

    // Hide the main page

    document.querySelector(".triangle").style.display = "none";

    // show the result section

    document.querySelector('.resultContainer').style.display = "flex";

    // set the user Choice

    document.getElementById('userChoiceImg').src = userChoice.src;

    // Computer Choice

    let botPick = botChoice();
    console.log("bot pick = ", botPick);

    // set the Bot Choice

    document.getElementById('botChoiceImg').src = imgDataBase[botPick];

    // score of the user

    var userScore = score(userChoice.id, botPick);
    console.log(userScore);

    //  decideing the winner and mesaage to show on secreen and increment the score

    var msg = decideWinner(userScore);
    console.log(msg);
    document.getElementById('message').innerHTML = `${msg}`
    document.getElementById('currentScore').innerHTML = `${currentScore}`

}

// This function is build to get the random choice from bot

const botChoice = () =>{
    return ["rock", "paper", "scissor"][parseInt(Math.random() * 3)]
}

// This function will return the score of the user


var score = (userChoice, botScore) =>{
    
    let rules = {
        "rock" : {"rock" : 0.5, "paper" : 0, "scissor" : 1},
        "paper" : {"rock" : 1, "paper" : 0.5, "scissor" : 0},
        "scissor" : {"rock" : 0, "paper" : 1, "scissor" : 0.5},
    }

    var userScore = rules[userChoice][botScore];
    // var botScore = rules[userChoice][botChoice];

    return userScore;
}

// This fcuntion will decide the winner on the bases of the user score and increment the score

var currentScore = 0;
const decideWinner = (userScore) =>{
    var msg = '';
    if (userScore == 1) {
        msg = "YOU WON!"
        currentScore++;
    }
    else if (userScore == 0) {
        msg = "YOU LOOSE!"
        
    }
    else{
        msg = "IT'S A TIE!"
    }

    return msg;
}




const replay = () =>{
    document.querySelector('.resultContainer').style.display = "none";
    document.querySelector(".triangle").style.display = "";
}