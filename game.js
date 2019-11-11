function getRandomNumber() {
  return Math.floor(Math.random() * 2) + 1;
}

function playTheGame() {
  var person = prompt("Please enter your name");

  let userStartingHealthPoints = 40;
  let grantStartingHealthPoints = 10;
  let grantDefeatCounter = 0;

  while (userStartingHealthPoints > 0 && grantDefeatCounter < 3) {
    userStartingHealthPoints = userStartingHealthPoints - getRandomNumber();
    grantStartingHealthPoints = grantStartingHealthPoints - getRandomNumber();

    console.log(
      "Grant the Mighty Chicken has " +
        grantStartingHealthPoints +
        " health left."
    );

    console.log(person + " has " + userStartingHealthPoints + " health left.");

    if (grantStartingHealthPoints <= 0) {
      grantDefeatCounter++;
      grantStartingHealthPoints = 10;
    }
  }
  if (grantDefeatCounter <= 0) {
    console.log(person + " is the winner");
  } else {
    console.log("Grant the Mighty Chicken wins.");
  }
}

function startGame() {
  var playGame = prompt("Do you want to play?");

  if (playGame.toUpperCase() == "YES") {
    playTheGame();
  }
}
