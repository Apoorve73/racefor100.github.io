function quitgame(quit, sum, count, compcount) {
  if (quit == "y" || quit == "Y") {
    alert("Thanks for playing! Try again if you aren't a SCAREDY-CAT");
    return;
  } else if (quit == "n" || quit == "N") {
    raceforit(sum, count, compcount);
  } else {
    alert("Wrong input! Continue the game!");
    // raceforit(sum, count, compcount);
  }
}
var userScoreArea = document.getElementById("scoreboard-1");
var compScoreArea = document.getElementById("scoreboard-2");
var sumArea = document.getElementById("scoreboard-3");
// var numOfTime=1;

var button = document.getElementById("button");
if (button) {
  button.addEventListener("click", function() {
    var name = prompt("Enter your name ");
    // to ensure player must enter the name
    if (name != null && name != "") {
      alert("Welcome to the game " + name +
            "\nChoose a number from below BUTTONS :--> ");
      var sum = 0;
      var count = 0;
      var compcount = 0;
      numOfTime = 0;
      button.setAttribute("style", "display:none");
      entryByElement(sum, count, compcount);
    } else if (name == "") {
      alert("You must Enter a name ");
    } else {
      alert("Come again Prepared !! ");
    }
  });
}

const numButton = document.querySelectorAll("[data-num]");
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
var game = 0;
function raceforit(sum, count, compcount, btnShow) {
  // console.log(sum);
  var guess = btnShow;
  var number = Number(guess);

  if (guess == null) {
    var quit =
        prompt("Are you sure you want to quit? Type Y if Yes and N if No");
    quitgame(quit, sum, count, compcount);
    return 0;
  } else {
    sum = sum + number;

    /*
    var game is 1 if the player scores 100
    this var 'game' stops any other alerts.
    */
    if (sum > 100) {
      if (game === 1)
        return 0;
      alert(
          "oops, you crossed 100, reach to exact 100 next time to win\nComputer wins!");
      reset();
      return 0;
    } else if (sum == 100) {
      game = 1;
      setTimeout(() => {
        alert("You win the game !")
        reset();
        return 0;
      }, 1000);
    }

    compcount = compcount + 1;

    /*
    computer is smarter now, it can detect as sum becomes 90 or more
    and guesses the required number to reach 100.
    */
    if (sum < 90)
      computer = Math.floor(Math.random() * 10) + 1;
    else
      computer = 100 - sum;

    sum = sum + computer;

    showScoreboard(number, sum, computer);

    /*
    winner prompt delayed
    now the winner prompt takes 1 sec ,so that user can see the final scoreboard
    */
    if (sum >= 100 && game != 1) {
      setTimeout(() => {
        alert("Computer wins!")
        reset();
        return 0;
      }, 1000);
      return 0;
    }
    return sum;
  }

  function showScoreboard(number, sum, computer) {
    userScoreArea.innerText = "Number Entered By You  : " + number;
    compScoreArea.innerText = "Number guessed By Computer: " + computer;
    sumArea.innerText =
        "Total sum = Previous Sum + " + number + " + " + computer + " = " + sum;
  }

  function reset() {
    userScoreArea.innerText = "Number Entered By You  : " + 0;
    compScoreArea.innerText = "Number guessed By Computer: " + 0;
    sumArea.innerText =
        "Total sum = Previous Sum + " + 0 + " + " + 0 + " = " + 0;
    button.setAttribute("style", "display:block");
    window.location.reload();
  }
}
