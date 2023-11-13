console.log("WELCOME TO THE TIC TAC TOE");
let music = new Audio("mixkit-game-show-happy-timer-666.wav");
let audioTurn = new Audio("mixkit-correct-positive-notification-957.wav");
let gameover = new Audio("mixkit-funny-game-lose-tone-2877.wav");
let turn = "X";
let isgameover = false;

const changeTurn = () => {
    return turn === "X" ? "O" : "X"; // Fix: Changed "0" to "O"
};

// Function to check for a win
const checkWin = () => {
    let boxtext = document.querySelectorAll('.boxtext'); // Added this line

    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6] // Fix: Added a comma after the previous array
    ];

    wins.forEach(e => {
        if (
            boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
            boxtext[e[2]].innerText === boxtext[e[1]].innerText &&
            boxtext[e[0]].innerText !== ""
        ) {
            document.querySelector('.Info').innerText = boxtext[e[0]].innerText + " won"; // Fixed boxtext
            isgameover = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width ="400px"
        }
    });
};

// GAME LOGIC
//music.play()
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if (!isgameover) { // Fix: Changed gameover to isgameover
                document.getElementsByClassName("Info")[0].innerText = "Turn FOR " + turn;
            }
        }
    });
});

//add on click listener on reset button


reset.addEventListener('click', ()=>{
         let boxtext = document.querySelectorAll('.boxtext');
         Array.from(boxtext).forEach(element => {
            element.innerText = ""
         })
         turn = "X";
         isgameover = false;
         document.getElementsByClassName("Info")[0].innerText  = "Turn for " + turn;
         document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width ="0px"
})