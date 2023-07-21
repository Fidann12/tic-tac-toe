const board = document.createElement("div");
const score = document.createElement("h3");
score.classList.add("score");
score.textContent = "Qalib";
board.setAttribute("id", "board");
let player = true;
let x = 0;
let o = 0;
const scoreX = document.createElement("h2");
const scoreO = document.createElement("h2");
let array = Array(9).fill(null);
const winningPosition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const checkWinner = () => {
  winningPosition.map((position) => {
    let [a, b, c] = position;
    if (array[a] === array[b] && array[b] === array[c] && array[a]) {
      //   console.log(array[a] + " Qalibdir");

      if (array[a] === "X") {
        score.textContent = array[a] + " Qalibdir";
        x++;
      }
      if (array[a] === "O") {
        score.textContent = array[a] + " Qalibdir";
        o++;
      }
      // Qalib tapilsa yeniden oyna butonunun gosterilmesi

      // score gosterilsin
      // Heç heçə variantı
      // qalib olan xanalar yashil reng olsun
    }
  });
};

document.body.append(board);
for (let i = 0; i < 9; i++) {
  const box = document.createElement("div");
  box.addEventListener("click", () => {
    if (box.textContent) {
      return;
    }
    box.textContent = player ? "X" : "O";
    array[i] = player ? "X" : "O";
    player = !player;
    checkWinner();
  });
  box.classList.add("box");
  board.append(box);
  board.append(score);
}
