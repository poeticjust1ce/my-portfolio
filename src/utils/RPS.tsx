export function playRPS(input?: string): string {
  const options = ["rock", "paper", "scissors"];

  if (!input) {
    return "Type 'rps rock', 'rps paper', or 'rps scissors' to play!";
  }

  const userMove = input.toLowerCase();

  if (!options.includes(userMove)) {
    return "Invalid move. Choose rock, paper, or scissors.";
  }

  const cpuMove = options[Math.floor(Math.random() * options.length)];

  let result = "";
  if (userMove === cpuMove) result = "It's a tie!";
  else if (
    (userMove === "rock" && cpuMove === "scissors") ||
    (userMove === "paper" && cpuMove === "rock") ||
    (userMove === "scissors" && cpuMove === "paper")
  )
    result = "You WIN!";
  else result = "You LOSE!";

  return `You chose ${userMove}, terminal chose ${cpuMove}. ${result}`;
}
