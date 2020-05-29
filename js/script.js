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
  button.addEventListener("click", function () {
    // if(numOfTime==1){
    // A check to make sure player must complete a game before hitting the PLAY
    // button again
    var name = prompt("Enter your name ");
    // to ensure player must enter the name
    if (name != null && name != "") {
      alert(
        "Welcome to the game " +
          name +
          "\nChoose a number from below BUTTONS :--> "
      );
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

    //}
    // Now this else is not needed as button is removed already

    // else {
    //     alert("You are Already in the game , continue and choose the number
    //     from below buttons :-->");
    // }
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

function raceforit(sum, count, compcount, btnShow) {
  // console.log(sum);
  var guess = btnShow;
  var number = Number(guess);
  // console.log(guess);
  if (guess == null) {
    var quit = prompt(
      "Are you sure you want to quit? Type Y if Yes and N if No"
    );
    quitgame(quit, sum, count, compcount);
    return 0;
  } else if (guess > 0 && guess <= 10) {
    sum = sum + number;
    // console.log(number,sum);
    if (sum == 100) {
      alert("You win the game");
      reset();
      return 0;
    } else if (sum > 100) {
      alert(
        "oops, you crossed 100 , reach to exact 100 next time to win\nComputer wins!"
      );
      reset();
      return 0;
    }
    compcount = compcount + 1;
    computer = Math.floor(Math.random() * 10) + 1;
    sum = sum + computer;
    // console.log(computer + "and  " + sum+" count:"+count);
    if (sum >= 100) {
      alert("Computer wins!");
      // numOfTime=1;
      reset();
      return 0;
    }
    // console.log("return ",sum);
    // alert("Number guessed by computer : "+computer +"\nSum becomes :"+sum
    // +"\nCHOOSE NEXT NUMBER :-->")
    userScoreArea.innerText = "Number Entered By You  : " + number;
    compScoreArea.innerText = "Number guessed By Computer: " + computer;
    sumArea.innerText =
      "Total sum = Previous Sum + " + number + " + " + computer + " = " + sum;

    return sum;
  } else {
    alert(
      "Wrong entry!!\n You can Only Choose a Number Between 1 and 10\n Start Over again and choose your first number"
    );
    return 0;
  }
  function reset() {
    userScoreArea.innerText = "Number Entered By You  : " + 0;
    compScoreArea.innerText = "Number guessed By Computer: " + 0;
    sumArea.innerText =
      "Total sum = Previous Sum + " + 0 + " + " + 0 + " = " + 0;
    button.setAttribute("style", "display:block");
  }
}
