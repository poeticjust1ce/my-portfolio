import React, { useState } from "react";
import AsciiArt from "../constants/Ascii";
import { commands } from "../constants/Commands";

//other commands
import { playRPS } from "../utils/RPS";
import { playSlotMachine } from "../utils/SlotMachine";

type Props = {
  userName: string;
  deviceName: string;
};

type TerminalEntry = {
  type: "command" | "output";
  content: React.ReactNode;
};

const Terminal = ({ userName, deviceName }: Props) => {
  const [history, setHistory] = useState<TerminalEntry[]>([]);
  const [currentInput, setCurrentInput] = useState<string | null>("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const command = currentInput?.trim().toLowerCase();

    if (!command) return;

    setHistory((prev) => [...prev, { type: "command", content: command }]);

    if (command === "clear") {
      setHistory([]);
      setCurrentInput("");
      e.target.reset();
      return;
    }

    if (command.startsWith("rps")) {
      const userMove = command.split(" ")[1];
      const result = playRPS(userMove);
      setHistory((prev) => [...prev, { type: "output", content: result }]);
      setCurrentInput("");
      e.target.reset();
      return;
    }

    if (command === "slot") {
      const result = playSlotMachine();
      setHistory((prev) => [...prev, result]);
      setCurrentInput("");
      e.target.reset();
      return;
    }

    const output = commands[command] || <>Command not found: {command}</>;

    setHistory((prev) => [...prev, { type: "output", content: output }]);

    setCurrentInput("");
    e.target.reset();
  };

  return (
    <div className="text-[0.4rem] md:text-[0.8rem] xl:text-[0.8rem]">
      <div className="font-mono whitespace-pre text-[0.32rem] md:text-[0.7rem] xl:text-[0.8rem]">
        {AsciiArt}
      </div>
      <div>
        <p></p>
        <p>Enter 'help' or 'cmds' for the list of all commands.</p>
        {history.map((e, i) => (
          <div key={i} className="flex flex-col">
            {e.type === "command" ? (
              <div className="flex">
                <p className="text-[#13e224]">
                  {userName}@{deviceName}
                </p>
                :<p className="text-[#3460f1]">~</p>$
                <p className="ml-1">{e.content}</p>
              </div>
            ) : (
              <div className="ml-2">{e.content}</div>
            )}
          </div>
        ))}
      </div>
      <div className="flex gap-2 items-center">
        <div className="flex">
          <p className="text-[#13e224]">
            {userName}@{deviceName}
          </p>
          :<p className="text-[#3460f1]">~</p>$
        </div>
        <form onSubmit={handleSubmit}>
          <input
            className="focus:outline-none text-white"
            autoFocus
            onBlur={(e) => e.target.focus()}
            type="text"
            onChange={(e) => setCurrentInput(e.target.value)}
          ></input>
        </form>
      </div>
    </div>
  );
};

export default Terminal;
