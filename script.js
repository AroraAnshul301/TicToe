console.log("Welcome to Tic Tac Toe");

let bgmusic = new Audio("./Audio/bg.mp3");
let click = new Audio("./Audio/click.mp3");
let soundEnabled = true;
let turn = "X";
let gameOver = false;

const changeTurn = () => (turn === "X" ? "O" : "X");

const checkWin = () => {
    let boxtext = document.getElementsByClassName("boxtext");
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    wins.forEach((e) => {
        if (
            boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
            boxtext[e[2]].innerText === boxtext[e[1]].innerText &&
            boxtext[e[0]].innerText !== ""
        ) {
            document.querySelector(".info").innerText =
                boxtext[e[0]].innerText + " Won!";
            gameOver = true;
            if (soundEnabled) bgmusic.play();
        }
    });
};

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener("click", () => {
        if (boxtext.innerText === "" && !gameOver) {
            boxtext.innerText = turn;
            turn = changeTurn();
            if (soundEnabled) click.play();
            document.querySelector(".info").innerText = `Turn for: ${turn}`;
            checkWin();
        }
    });
});

document.getElementById("reset").addEventListener("click", () => {
    let boxtext = document.querySelectorAll(".boxtext");
    Array.from(boxtext).forEach((e) => (e.innerText = ""));
    document.querySelector(".info").innerText = "Turn for: X";
    turn = "X";
    gameOver = false;
});

document.getElementById("toggle-sound").addEventListener("click", () => {
    soundEnabled = !soundEnabled;
    document.getElementById("toggle-sound").innerText = soundEnabled
        ? "🔊 Sound On"
        : "🔇 Sound Off";
});
