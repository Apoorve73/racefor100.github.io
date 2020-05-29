/**
 * these three variables are text area of scoreboard,
 * for the player's guess, computer guess and total sum, respectively
 */
var userScoreArea = document.getElementById("scoreboard-1");
var compScoreArea = document.getElementById("scoreboard-2");
var sumArea = document.getElementById("scoreboard-3");

/**
 * game starts from here, as the player hits player button
 * prompt is displayed to take player's name
 */
var button = document.getElementById("button"); // PLAY button
if (button) {
  button.addEventListener("click", function () {
    var name = prompt("Enter your name ");

    /*This if condition ensures player must enter the name to proceed further*/
    if (name != null && name != "") {
      alert(
        "Welcome to the game " +
          name +
          "\nChoose a number from below BUTTONS :--> "
      );
      var sum = 0;
      var count = 0;
      var compcount = 0;

      /* hide play button as game starts */
      button.setAttribute("style", "display:none");
      /**
       * if the player enters the name correctly, then the game proceed further
       * and entryByElement function is called, which enables player to choose a
       * number from buttons
       */
      entryByElement(sum, count, compcount);

      /* if name field is left blank, show error */
    } else if (name == "") {
      alert("You must Enter a name ");
      /* if user cancel the name prompt, display messege */
    } else {
      alert("Come again Prepared !! ");
    }
  });
}

/* selects all number-buttons (from 1-10) */
const numButton = document.querySelectorAll("[data-num]");

/**
 * This function enables player to choose from numbers-buttons
 * @param {number} parameterNameHere sum - sum of computer and player's guess
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
 * Main function to :- calculate sum and decide winner.
 * @param {number} sum - sum of computer and player's guess, returned by this
 *     function only
 * @param {ButtonValue} btnShow - the value of button, choosen by the player
 * @return {number} sum- returns the total sum .
 */
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
    reset();
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
      reset();
      return 0;
    }, 1000); // prompt delayed by 1 sec
  }

  compcount = compcount + 1;

  /*guess by computer*/
  if (sum < 90) computer = Math.floor(Math.random() * 10) + 1;
  /*
  computer is smarter now, it can detect as sum becomes 90 or more
  and guesses the required number to reach 100.
  */ else
    computer = 100 - sum;

  /*Adding guess of computer to the sum*/
  sum = sum + computer;

  /**
   * now as we calculated the total sum , showScoreboard function is called
   */
  showScoreboard(number, sum, computer);

  /*
  winner prompt delayed
  now the winner prompt takes 1 sec ,so that user can see the final scoreboard
  */
  if (sum >= 100 && game != 1) {
    setTimeout(() => {
      alert("Computer wins!");
      reset();
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

  /**
   * After each game this function reset the scores and display play button once
   * again.
   */
  function reset() {
    userScoreArea.innerText = "Number Entered By You  : " + 0;
    compScoreArea.innerText = "Number guessed By Computer: " + 0;
    sumArea.innerText =
      "Total sum = Previous Sum + " + 0 + " + " + 0 + " = " + 0;
    button.setAttribute("style", "display:block");
    window.location.reload();
  }
}
