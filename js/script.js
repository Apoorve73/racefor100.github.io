function quitgame(quit, sum, count, compcount) {
    if (quit == "y" || quit == "Y") {
        alert("Thanks for playing! Try again if you aren't a SCAREDY-CAT")
        return
    } else if (quit == "n" || quit == "N") {
        raceforit(sum, count, compcount);
    } else {
        alert("Wrong input! Continue the game!")
        raceforit(sum, count, compcount);
    }

}

function raceforit(sum, count, compcount) {
    var guess = prompt("Enter a number in between 1 and 10. Present sum is Your sum + Computer's Choice = " + sum);
    if (guess == null) {
        quit = prompt("Are you sure you want to quit? Type Y if Yes and N if No")
        quitgame(quit, sum, count, compcount)
        return
    } else if(guess >0 && guess <=10) {
        var number = Number(guess)
        sum = sum + number;
        if (sum == 100) {
            alert("You win the game");
            return;
        }
    } else {
        alert("Wrong entry!! Try again!")
        raceforit(sum, count, compcount);
        return;
        //guess = prompt("Enter a number in between 1 and 10. Present sum is Your sum + Computer's Choice = " + sum);
    }

    compcount = compcount + 1;
    computer = Math.floor(Math.random() * 10) + 1;
    sum = sum + computer;
    console.log(computer + "and" + sum)
    if (sum >= 100) {
        alert("Computer wins!")
        return;
    }
    // } else if (sum > 100) {
    //     alert("Sum has crossed 100! Computer Wins!")
    //     return;
    else {
        count = count + 1;
        if (guess > 10 || guess < 1) {
            alert("Wrong entry!! Try again!")
            guess = prompt("Enter a number in between 1 and 10. Present sum is Your sum + Computer's Choice = " + sum);
        }
        raceforit(sum, count, compcount);
    }
}
var button = document.getElementById("button");
if (button) {
    button.addEventListener('click', function() {
        var name = prompt("Enter your name ")
        alert("Welcome to the game " + name);
        var sum = 0;
        var count = 1;
        var compcount = 0;
        raceforit(sum, count, compcount);
    });
}