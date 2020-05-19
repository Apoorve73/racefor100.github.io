// function raceforit(sum, count, compcount) {
//     var guess = prompt("Enter a number in between 1 and 10. Present sum is Your sum + Computer's Choice = " + sum);
//     var number = Number(guess)
//     sum = sum + number;
//     if (sum == 100) {
//         alert("You win the game");
//         return;
//     }
//     compcount = compcount + 1;
//     computer = Math.floor(Math.random() * 10) + 1;
//     sum = sum + computer;
//     console.log(computer + "and" + sum)
//     if (sum >= 100) {
//         alert("Computer wins!")
//         return;
//     }
//     // } else if (sum > 100) {
//     //     alert("Sum has crossed 100! Computer Wins!")
//     //     return;
//     else {
//         count = count + 1;
//         raceforit(sum, count, compcount);
//     }
// }
// var button = document.getElementById("button");
// if (button) {
//     button.addEventListener('mouseover', function() {
//         alert("Hello");
//         var sum = 0;
//         var count = 1;
//         var compcount = 0;
//         raceforit(sum, count, compcount);
//     });
// }

var sum = 0;
var count = 1;
var compcount = 0;

var button = document.getElementById("button").addEventListener("click", function() {
    raceforit(sum, count, compcount);
});

function bot_play(sum, count, compcount, guess) {
    var number = Number(guess)
    sum = sum + number;
    if (sum == 100) {
        alert("You win the game");
        return;
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
        raceforit(sum, count, compcount);
    }
}


function raceforit(sum, count, compcount) {
    var message = document.getElementById("message-Display")
    message.textContent = "Enter a number in between 1 and 10. Present sum is Your sum + Computer's Choice = " + sum
    var guess
    var button1 = document.getElementById("1").addEventListener("click", function() {
        guess = 1
        console.log(guess)
        bot_play(sum, count, compcount, guess)

    });
    button1.disabled = true
        // var button2 = document.getElementById("2").addEventListener("click", function() {
        //     guess = 2
        //     console.log(guess)
        //     bot_play(sum, count, compcount, guess)
        // });
        // var button3 = document.getElementById("3").addEventListener("click", function() {
        //     guess = 3
        //     console.log(guess)
        //     bot_play(sum, count, compcount, guess)
        // });
        // var button4 = document.getElementById("4").addEventListener("click", function() {
        //     guess = 4
        //     console.log(guess)
        //     bot_play(sum, count, compcount, guess)
        // });
        // var button5 = document.getElementById("5").addEventListener("click", function() {
        //     guess = 5
        //     console.log(guess)
        //     bot_play(sum, count, compcount, guess)
        // });
        // var button6 = document.getElementById("6").addEventListener("click", function() {
        //     guess = 6
        //     console.log(guess)
        //     bot_play(sum, count, compcount, guess)
        // });
        // var button7 = document.getElementById("8").addEventListener("click", function() {
        //     guess = 8
        //     console.log(guess)
        //     bot_play(sum, count, compcount, guess)
        // });
        // var button9 = document.getElementById("9").addEventListener("click", function() {
        //     guess = 9
        //     console.log(guess)
        //     bot_play(sum, count, compcount, guess)
        // });
        // var button10 = document.getElementById("10").addEventListener("click", function() {
        //     guess = 10
        //     console.log(guess)
        //     bot_play(sum, count, compcount, guess)
        // });
}