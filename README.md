# Terminal Portfolio

A minimalist, terminal-style personal portfolio built with React, TypeScript, Vite, and Tailwind CSS. This project simulates a command-line interface where users can explore content, run commands, and interact with small built-in games.

## Overview

This portfolio reimagines a traditional personal website as an interactive terminal. Users type commands to navigate, retrieve information, and trigger features, creating a more engaging and developer-focused experience.

## Features

- Terminal-style UI with command input and output history
- Custom command system for navigation and content display
- Interactive mini-games:
  - Rock Paper Scissors (`rps`)
  - Slot Machine (`slot`)
- ASCII art header
- Responsive design
- Clean and minimal aesthetic

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS

## Project Structure

```
poeticjust1ce-my-portfolio/
├── src/
│   ├── components/
│   │   └── Terminal.tsx
│   ├── constants/
│   │   ├── Ascii.tsx
│   │   └── Commands.tsx
│   ├── utils/
│   │   ├── RPS.tsx
│   │   └── SlotMachine.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── vite.config.ts
├── package.json
└── README.md
```

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Available Commands

Some example commands available in the terminal:

- `help` or `cmds` – list all commands
- `clear` – clear terminal history
- `rps [rock|paper|scissors]` – play Rock Paper Scissors
- `slot` – play the slot machine

Additional commands are defined in `src/constants/Commands.tsx`.

## Customization

You can easily extend the terminal by:

- Adding new commands in `Commands.tsx`
- Creating new utilities in the `utils` folder
- Modifying the UI in `Terminal.tsx`
- Updating ASCII art in `Ascii.tsx`

## Deployment

This project can be deployed on platforms like:

- Vercel
- Netlify
- GitHub Pages

## License

This project is open source and available under the MIT License.
