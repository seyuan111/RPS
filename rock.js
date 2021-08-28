const handOptions = {
    "rock": "/assets/Rock.png",
    "paper": "/assets/Paper.png",
    "scissors": "/assets/Scissors.png"
}

const pickHand = (hands) => {
    console.log(hands);
    //if you want to click and select
    let hand = document.querySelector(".hand");
    hand.style.display = "none"; //(how to not display anything)

    let begin = document.querySelector(".begin");
    begin.style.display = "flex";
    // set the user pick
    document.getElementById("userPickImage").src = handOptions[hands];

    OpponentHand();
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
    }else if(userHand == "paper" && cpHand == "rock"){
        setDecision("YOU WIN")
        setScore(score + 1);
    }
    if(userHand == "paper" && cpHand == "paper"){
        setDecision("It's a tie");
    }
    if(userHand == "rock" && cpHand == "scissors"){
        setDecisions("YOU WIN")
        setScore(score + 1);
    }
}

const setDecision = (decision) => {
    console.log(decision)
}

const setScore = (score) => {
    console.log(score)
}