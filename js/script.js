function quitgame(quit, sum, count, compcount) {
    if (quit == "y" || quit == "Y") {
        alert("Thanks for playing! Try again if you aren't a SCAREDY-CAT")
        return;
    } else if (quit == "n" || quit == "N") {
        raceforit(sum, count, compcount);
    } else {
        alert("Wrong input! Continue the game!")
        //raceforit(sum, count, compcount);
    }
}
var numOfTime=1;  
var button = document.getElementById("button");
if (button) {
    button.addEventListener('click', function() {
        if(numOfTime==1){                     //A check to make sure player must complete a game before hitting the PLAY button again
            var name = prompt("Enter your name ")
            // to ensure player must enter the name
            if(name!=null && name!=""){
                alert("Welcome to the game " + name +"\nChoose a number from below BUTTONS :--> ");
                var sum = 0;
                var count=0;
                var compcount = 0;
                numOfTime=0;
                entryByElement(sum,count,compcount);
            }else if(name==""){
                alert("You must Enter a name ");
            }else {
                alert("Come again Prepared !! ");
            }
            
        }else {
            alert("You are Already in the game , continue and choose the number from below buttons :-->");
        }
        
               
    });
}

const numButton =document.querySelectorAll("[data-num]");
function entryByElement(sum,count,compcount){
    numButton.forEach(button=>{
        button.addEventListener('click',abc);
        function abc(){
            var btnShow =button.innerText;
            console.log(btnShow);
            sum=raceforit(sum,count,compcount,btnShow);
        }
    })
}

function raceforit(sum, count, compcount,btnShow) {
    
    //console.log(sum);
    var guess = prompt("Enter a number in between 1 and 10.\nPresent sum is Your sum + Computer's Choice = " + sum, btnShow);
    var number = Number(guess)
    //console.log(guess);
    if (guess == null) {
        var quit = prompt("Are you sure you want to quit? Type Y if Yes and N if No");
        quitgame(quit, sum, count, compcount)
        return 0;
    } else if(guess >0 && guess <=10) {
        sum = sum + number;
        //console.log(number,sum);
        if (sum == 100) {
            alert("You win the game");
            numOfTime=1;
            return 0;
        }
        compcount = compcount + 1;
        computer = Math.floor(Math.random() * 10) + 1;
        sum =sum + computer;
        //console.log(computer + "and  " + sum+" count:"+count);
        if (sum >= 100) {
            alert("Computer wins!")
            numOfTime=1;
            return 0;
        }
        //console.log("return ",sum);
        alert("Number guessed by computer : "+computer +"\nSum becomes :"+sum +"\nCHOOSE NEXT NUMBER :-->")
        
        return sum;
    } else {
        alert("Wrong entry!!\n You can Only Choose a Number Between 1 and 10\n Start Over again and choose your first number")
        return 0;
    }
}

