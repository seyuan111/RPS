const handOptions = {
    "rock": "/assets/Rock.png",
    "paper": "/assets/Paper.png",
    "scissors": "/assets/Scissors.png"
}

let SCORE = 0;

const pickHand = (hands) => {
    console.log(hands);
    //if you want to click and select
    let hand = document.querySelector(".hand");
    hand.style.display = "none"; //(how to not display anything)

    let begin = document.querySelector(".begin");
    begin.style.display = "flex";
    // set the user pick
    document.getElementById("userPickImage").src = handOptions[hands];

    let cpHand = OpponentHand();
    caller(hands, cpHand);
}

const OpponentHand = () => {
    let hands = ["rock","paper","scissors"]

    let cpHand = hands[Math.floor(Math.random() * 3)]

    document.getElementById("OpponentI").src = handOptions[cpHand];

    return cpHand;
}

const caller = (userHand, cpHand) => {
    if(userHand == "paper" && cpHand == "scissors"){
        setDecision("YOU LOSE")
    }
    if(userHand == "paper" && cpHand == "rock"){
        setDecision("YOU WIN")
        setScore(SCORE + 1);
    }
    if(userHand == "paper" && cpHand == "paper"){
        setDecision("It's a tie");
    }
    if(userHand == "rock" && cpHand == "scissors"){
        setDecision("YOU WIN")
        setScore(SCORE + 1);
    }
    if(userHand == "rock" && cpHand == "paper"){
        setDecision("YOU LOSE!")
    }
    if(userHand == "rock" && cpHand == "rock"){
        setDecision("It's a tie!")
    }
    if(userHand == "scissors" && cpHand == "scissors"){
        setDecision("It's a tie!")
    }
    if(userHand == "scissors" && cpHand == "rock"){
        setDecision("YOU LOSE!")
    }
    if(userHand == "scissors" && cpHand == "paper"){
        setDecision("YOU WIN!")
        setScore(SCORE + 1)
    }
}

const restartGame = () => {
    let hand = document.querySelector(".hand");
    hand.style.display = "flex"; //(how to not display anything)

    let begin = document.querySelector(".begin");
    begin.style.display = "none";
}

const setDecision = (decision) => {
    document.querySelector(".decisions h1").innerText = decision;
}

const setScore = (score) => {
    SCORE = score;
    document.querySelector(".finalscore h1").innerText = score;
}