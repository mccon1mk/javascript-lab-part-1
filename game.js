function getDamage() {
  return Math.floor(Math.random() * 5) + 1;
}

function startCombat() {
  var person = prompt("Please enter your name");

  let userStartingHealthPoints = 40;
  let grantStartingHealthPoints = 10;
  let grantDefeatCounter = 0;

  while (userStartingHealthPoints > 0 && grantDefeatCounter < 3) {
    //* ask them if they want to attack or quit
    var quitGame = prompt("Would you like to attack or quit?");

    if (quitGame.toUpperCase() == "QUIT") {
      break;
    } else if (quitGame.toUpperCase() == "ATTACK") {
      userStartingHealthPoints = userStartingHealthPoints - getDamage();
      grantStartingHealthPoints = grantStartingHealthPoints - getDamage();

      console.log(
        `${person} has ${userStartingHealthPoints} health left and Grant has ${grantStartingHealthPoints} health left.`
      );

      if (grantStartingHealthPoints <= 0) {
        grantDefeatCounter++;
        grantStartingHealthPoints = 10;
      }
    }
  }
  if (userStartingHealthPoints > 0 && grantDefeatCounter >= 3) {
    console.log(`${person} wins!`);
  } else {
    console.log("Grant the Mighty Chicken wins.");
  }
}

function startGame() {
  var playGame = prompt("Do you want to play?");

  if (playGame.toUpperCase() == "YES") {
    startCombat();
  }
}
