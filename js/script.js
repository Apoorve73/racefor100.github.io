/**
 * these three variables are text area of scoreboard,
 * for the player's guess, computer guess and total sum, respectively
 */
var userScoreArea = document.getElementById("scoreboard-1");
var compScoreArea = document.getElementById("scoreboard-2");
var sumArea = document.getElementById("scoreboard-3");

/* selects all number-buttons (from 1-10) */
const numButton = document.querySelectorAll("[data-num]");

/**
 * game starts from here, as the player hits player button
 * prompt is displayed to take player's name
 */
var button = document.getElementById("button"); // PLAY button
var uname = localStorage.getItem("uname");
// set initial values of round as zero
sessionStorage.setItem("round1", -1);
sessionStorage.setItem("round2", -1);
// console.log(sessionStorage.getItem('round1'))
if (uname == null && button) {
  button.addEventListener("click", function () {
    uname = prompt("Enter your name ");
    localStorage.setItem("uname", uname);
    /*This if condition ensures player must enter the name to proceed further*/
    if (uname != null && uname != "") {
      beginGame();
      /* if uname field is left blank, show error */
    } else if (uname == "") {
      alert("You must Enter a uname ");
      /* if user cancel the uname prompt, display messege */
    } else {
      alert("Come again Prepared !! ");
    }
  });
} else {
  button.innerHTML = "REPLAY";
  button.addEventListener("click", beginGame);
}

var round_count = 1;
// set params to begin game
function beginGame() {
  alert(
    "Welcome to the game! This is round " +
      round_count +
      " " +
      uname +
      "\nChoose a number from below BUTTONS :--> "
  );
  var sum = 0;
  var count = 0;
  var compcount = 0;
  game = 0;
  userScoreArea.innerText = "Number Entered By You  : " + 0;
  compScoreArea.innerText = "Number guessed By Computer: " + 0;
  sumArea.innerText = "Total sum = Previous Sum + " + 0 + " + " + 0 + " = " + 0;
  /* hide play button as game starts */
  button.setAttribute("style", "display:none");
  /**
   * if the player enters the uname correctly, then the game proceed further
   * and entryByElement function is called, which enables player to choose a
   * number from buttons
   */
  entryByElement(sum, count, compcount);
}
function declareWinner() {
  var round1_winner = sessionStorage.getItem("round1");
  var round2_winner = sessionStorage.getItem("round2");
  console.log(round1_winner, round2_winner);
  if (round1_winner == round2_winner) {
    if (round2_winner == 1) {
      alert("Congratulations, You won! It's time to celebrate.");
    } else {
      alert("Try harder next time. Computer wins.");
    }
  } else {
    alert("You've tried well. It's a tie.");
  }
  reset();
}
/**
 * This function enables player to choose from numbers-buttons
 * @param {number} parameteruNameHere sum - sum of computer and player's guess
 */
function entryByElement(sum, count, compcount) {
  numButton.forEach((button) => {
    button.addEventListener("click", clickedNumBtn);
    function clickedNumBtn() {
      var btnShow = button.innerText;
      console.log(btnShow);
      sum = raceforit(sum, count, compcount, btnShow);
    }
  });
}

/* variable which stops further play if the user reaches to 100*/
var game = 0;

/**
 * scoreboard which display number guess by player and computer.
 * @param {Number} winner - 0 if computer wins 1 if human wins
 */
function storeSession(winner) {
  if (sessionStorage.getItem("round1") == -1) {
    sessionStorage.setItem("round1", winner);
  } else if (sessionStorage.getItem("round2") == -1) {
    sessionStorage.setItem("round2", winner);
  }
}
/**
 * Main function to :- calculate sum and decide winner.
 * @param {number} sum - sum of computer and player's guess, returned by this
 *     function only
 * @param {ButtonValue} btnShow - the value of button, choosen by the player
 * @return {number} sum- returns the total sum .
 */

function check() {
  if (round_count == 2) {
    declareWinner();
  } else {
    round_count += 1;
    beginGame();
  }
}
function raceforit(sum, _count, compcount, btnShow) {
  var guess = btnShow;
  var number = Number(guess);

  /* adding player's guess to sum*/
  sum = sum + number;

  /*
      var game is 1 if the player scores 100
      this var 'game' stops any other further alerts.
      */
  if (sum > 100) {
    if (game === 1) return 0;
    alert(
      "oops, you crossed 100, reach to exact 100 next time to win\nComputer wins!"
    );
    // reset()
    storeSession(0);
    check();
    return 0;

    /* player can only win on reaching perfect 100*/
    /**
     * winner prompt delayed
     * now the winner prompt takes 1 sec, so that user can see the final
     * scoreboard
     */
  } else if (sum == 100) {
    game = 1;
    setTimeout(() => {
      alert("You win the game !");
      // reset()
      storeSession(1);
      check();
      return 1;
    }, 1000); // prompt delayed by 1 sec
    return 1;
  }

  compcount = compcount + 1;

  /*guess by computer*/
  if (sum < 90) computer = Math.floor(Math.random() * 10) + 1;
  /*
      computer is smarter now, it can detect as sum becomes 90 or more
      and guesses the required number to reach 100.
      */ else computer = 100 - sum;

  /*Adding guess of computer to the sum*/
  sum = sum + computer;

  /**
   * now as we calculated the total sum , showScoreboard function is called
   */
  showScoreboard(number, sum, computer);

  /*
      winner prompt delayed
      now the winner prompt takes 1 sec ,so that user can see the final
      scoreboard
      */
  if (sum >= 100 && game != 1) {
    setTimeout(() => {
      alert("Computer wins!");
      // reset()
      storeSession(0);
      check();
      return 0;
    }, 1000);
    return 0;
  }
  return sum;

  /**
   * scoreboard which display number guess by player and computer.
   * @param {Number} number - number guessed by the player.
   * @param {Number} sum - sum of the number guessed by player and computer.
   * @param {Number} computer - number guessed by the computer.
   */
  function showScoreboard(number, sum, computer) {
    userScoreArea.innerText = "Number Entered By You  : " + number;
    compScoreArea.innerText = "Number guessed By Computer: " + computer;
    sumArea.innerText =
      "Total sum = Previous Sum + " + number + " + " + computer + " = " + sum;
  }
}
/**
 * After each game this function reset the scores and display play button
 * once again.
 */
function reset() {
  userScoreArea.innerText = "Number Entered By You  : " + 0;
  compScoreArea.innerText = "Number guessed By Computer: " + 0;
  sumArea.innerText = "Total sum = Previous Sum + " + 0 + " + " + 0 + " = " + 0;
  sessionStorage.setItem("round1", -1);
  sessionStorage.setItem("round2", -1);
  button.setAttribute("style", "display:block");
  button.innerHTML = "REPLAY";
  window.location.reload();
}
