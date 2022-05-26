import Dice from "./dice.js";

const dice = new Dice();
const diceElement = document.getElementById("dice");
diceElement.innerText = dice.value;
diceElement.addEventListener("click", () => {
  dice.roll();
  diceElement.innerText = dice.value;
});


