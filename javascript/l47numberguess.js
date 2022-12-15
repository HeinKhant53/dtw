//UI
const minnum = document.querySelector(".minnumber"),
        maxnum = document.querySelector(".maxnumber"),
        getinput = document.querySelector("#guessnumber"),
        getbtn = document.querySelector("#btn"),
        message1 = document.querySelector(".message1"),
        message2 = document.querySelector(".message2"),
        getgame = document.querySelector("#game");

let min = 1,
    max = 10,
    gameleft = 3,
    winningnum = randonNumber(min,max);

minnum.textContent = min;
maxnum.innerText = max;

getbtn.addEventListener('click',function(){
    // console.log("i am working");
    // console.log(getinput.value);
    // console.log(typeof getinput.value);

    // Convert to String
    // let guess = Number(getinput.value);
    // let guess = +getinput.value;
    let guess = parseInt(getinput.value);

    // console.log(guess);
    // console.log(typeof guess);

    if(guess < min || guess > max || isNaN(guess)){
        // console.log(`Please enter a number ${min} to ${max}`);

        // message2.innerText = `Please enter a number ${min} to ${max}`;
        setMessage2(`Please enter a number ${min} to ${max}`,"red");
    }

    if(guess === winningnum){
        //Game Won

        //disable getinput
        // getinput.disable = true;

        //getinput border color to green
        // getinput.style.borderColor = "green";

        //message 1
        // message1.textContent = `${winningnum} is correct!!, You Won`;
        // message1.style.color = "green";
        // setMessage1(`${winningnum} is correct!!, You Won`,"green");

        //play again ?
        // getbtn.value = "Play Again";

        gameOver(true,`${winningnum} is correct!!, You Won`);

    }else{
        //Wrong Number
        // gameleft--;
        gameleft -= 1;
        console.log(gameleft);

        if(gameleft === 0){
            //Game Lose

            //disable getinput
            // getinput.disable = true;

            //getinput border color to green
            // getinput.style.borderColor = "red";

            //message 1
            // message1.textContent = `Game Over, You Lost, The correct number is ${winningnum}`;
            // message1.style.color = "red";
            // setMessage1(`Game Over, You Lost, The correct number is ${winningnum}`,"red");

            //play again ?
            // getbtn.value = "Play Again";

            gameOver(false,`Game Over, You Lost, The correct number is ${winningnum}`);

        }else{
            //Continue Game

            //getinput border color to red
            getinput.style.borderColor = "red";

            //clear getinput old value
            getinput.value = "";

            //message 1
            // message1.innerText = `${guess} is not correct , ${gameleft} guess left`;
            // message1.style.color = "blue";
            setMessage1(`${guess} is not correct , ${gameleft} guess left`,"blue");
        }
    }
});


//Message
function setMessage1(msg,color){
    message1.textContent = msg;
    message1.style.color = color;
}

function setMessage2(msg,color){
    message2.textContent = msg;
    message2.style.color = color;

    setTimeout(function(){
        message2.textContent = "";
    },2000);

    setInterval
}

//GameOver
function gameOver(won,msg){
    let color = won === true ? "green" : "red";

    //getinput disabled
    getinput.disable = true;
    
    //getinput border color to green or red
    getinput.style.borderColor = color;

    //message1 
    setMessage1(msg,color);

    //play again?
    getbtn.value = `Play Again`;


    //add class
    // getbtn.className = "btn playagain";
    getbtn.classList.add("playagain");
}


getgame.addEventListener('mouseup',function(e){
    // console.log(e.target);

    if(e.target.className === 'btn playagain'){
        // console.log("i am playagian btn");

        window.location.reload();
    }
});


function randonNumber(min,max){
    let random = Math.floor(Math.random()*(max-min))+1;
    console.log(random);
    return random;
}
