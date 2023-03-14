var iconList = [rock.jpg, hand.jpg, scissor.jpg];
var choices = [Rock, Paper, Scissors];

var playerScore = 0;
var computerScore = 0;

// Button for player to play rock
function changeRockImage(){
    document.getElementById("scissors2_computer").src="rock.jpg";
}
function changePaperImage(){
    document.getElementById("scissors2_computer").src="paper.jpg";
}
function changeScissorsImage(){
    document.getElementById("scissors2_computer").src="scissors.jpg";
}

function updateScreen(playerChoice){

  var computerChoice = randomChoose(choices);
  var winner = decideWinner(playerChoice, computerChoice);

  // Update the screen with the correct icon for each player
  document.getElementById("rock").src="findIcon(computerChoice)";
  //setProperty("computerOutput","image",findIcon(computerChoice));
  
  // Update the screen with the text explaining who won.
  if(winner == "Draw"){
    setProperty("gameText","text","Draw!");
  } else if (winner == "Player") {
    setProperty("gameText","text","You win!");
    playerScore++;
    setProperty("playerScoreOutput","text",playerScore);
  } else if (winner == "Computer") {
    setProperty("gameText","text","Computer wins!");
    computerScore++;
    setProperty("computerScoreOutput","text",computerScore);    
  }
}


function randomChoose(list){
    return list[randomNumber(0,2)];
}

function findIcon(iconName) {
  if(iconName == "Rock"){
    return iconList[0];
  }else if(iconName == "Paper"){
    return iconList[1];
  }else{
    return iconList[2];
  }
  }

function decideWinner(playerChoice, computerChoice){
  if (playerChoice == computerChoice){
    return "Draw";}
  else if (playerChoice == "Rock" && computerChoice == "Paper"){
    return "Computer";}
  else if (playerChoice == "Rock" && computerChoice == "Scissors"){
    return "Player";}
  else if (playerChoice == "Paper" && computerChoice == "Scissors"){
    return "Computer";}
  else if (playerChoice == "Paper" && computerChoice == "Rock"){
    return "Player";}
  else if (playerChoice == "Scissors" && computerChoice == "Rock"){
    return "Computer";}
  else{
    return "Player";
  }
}
