let boxes = document.querySelectorAll(".boxes");
let container = document.querySelector(".grid");
let h1 = document.querySelector("h1");
let newGameBtn = document.querySelector(".new-game-btn");

let turn = "X";
boxes.forEach(function (box) {
  box.addEventListener("click", () => {
    if (box.innerText == "") {
      if (turn == "X") {
        box.style.backgroundColor = "#d0e0ff";
        box.innerText = "X";
        box.style.color = "blue";
        turn = "O";
      } else if (turn == "O") {
        box.style.backgroundColor = "#d0e0ff";
        box.innerText = "O";
        box.style.color = "green";
        turn = "X";
      }

      checkWinner();
    }
  });
});

let winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const checkWinner = () => {
  for (let i = 0; i < winPatterns.length; i++) {
    pattern = winPatterns[i];
    let postVal1 = boxes[pattern[0]].innerText;
    let postVal2 = boxes[pattern[1]].innerText;
    let postVal3 = boxes[pattern[2]].innerText;
    if (postVal1 != "" && postVal2 != "" && postVal3 != "") {
      if (postVal1 == postVal2 && postVal2 == postVal3) {
        console.log(`winner = ${postVal1}`);
        container.style.pointerEvents = "none";
        for (let box = 0; box < boxes.length; box++)
          boxes[box].style.backgroundColor = "#d0e0ff";
        h1.innerText = `Winner: ${postVal1}`;
      }
    }
  }
};


let newGame = () => {
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = "#f0f0f0";
        boxes[i].innerText = "";
    }
    container.style.pointerEvents = "auto";
    turn = "X";
    h1.innerText = ""
};

newGameBtn.addEventListener("click", newGame);