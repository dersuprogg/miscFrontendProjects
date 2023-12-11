const player1 = document.querySelector(".player-1 img");
const player2 = document.querySelector(".player-2 img");
const choices = [1, 2, 3, 4, 5, 6];
const title = document.querySelector(".header-title");

function choice(arr) {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

const player1Choice = choice(choices);
const player2Choice = choice(choices);

if (player1Choice > player2Choice) {
  title.textContent = "Player 1 is a winner.";
  player1.previousElementSibling.classList.add("winner");
  player2.previousElementSibling.classList.add("loser");
} else if (player1Choice < player2Choice) {
  title.textContent = "Player 2 is a winner.";
  player2.previousElementSibling.classList.add("winner");
  player1.previousElementSibling.classList.add("loser");
} else {
  title.textContent = "It's a tie.";
}

player1.setAttribute("src", `img/dice${player1Choice}.png`);
player2.setAttribute("src", `img/dice${player2Choice}.png`);
