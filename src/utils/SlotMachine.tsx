import type { JSX } from "react";

export const playSlotMachine = (): { type: "output"; content: JSX.Element } => {
  const symbols = ["🍒", "🍋", "🍉", "⭐", "💎"];
  const slots = Array(3)
    .fill(null)
    .map(() => symbols[Math.floor(Math.random() * symbols.length)]);

  const [a, b, c] = slots;
  const win = a === b && b === c;

  return {
    type: "output",
    content: (
      <div>
        <p>🎰 {slots.join(" | ")}</p>
        <p>{win ? "💰 You win! 💎" : "😢 You lose! Try again!"}</p>
      </div>
    ),
  };
};
