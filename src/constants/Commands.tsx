import React from "react";

export const commands: Record<string, React.ReactNode> = {
  help: (
    <>
      Available commands:
      <br />
      about&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;— Displays information about me
      <br />
      skills&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;— Displays list of my technical skills
      <br />
      projects&nbsp;&nbsp;&nbsp;— Displays my featured or current projects
      <br />
      contact&nbsp;&nbsp;&nbsp;&nbsp;— Displays ways to reach me out
      <br />
      links&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;— Displays my social links
      <br />
      fun&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;— Displays available
      fun commands
      <br />
      stack&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;— Displays the tech stack used to
      build this website
      <br />
      clear&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;— Clears the terminal screen
    </>
  ),
  cmds: (
    <>
      Available commands:
      <br />
      about&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;— Displays information about me
      <br />
      skills&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;— Displays list of my technical skills
      <br />
      projects&nbsp;&nbsp;&nbsp;— Displays my featured or current projects
      <br />
      contact&nbsp;&nbsp;&nbsp;&nbsp;— Displays ways to reach me out
      <br />
      links&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;— Displays my social links
      <br />
      fun&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;— Displays available
      fun commands
      <br />
      stack&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;— Displays the tech stack used to
      build this website
      <br />
      clear&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;— Clears the terminal screen
    </>
  ),

  about: (
    <>
      Hey, I'm <b>Gelo Ramos</b>, a web developer based in the{" "}
      <b>Philippines</b>. I earned my{" "}
      <b>Bachelor of Science in Information Technology</b> in October 2025.
      <br />
      <br />I focus on building clean, minimal, and functional web experiences
      using modern technologies like <b>React</b>, <b>Next.js</b>, and{" "}
      <b>TypeScript</b>. I love creating interfaces that feel intuitive while
      maintaining a solid and efficient backend structure.
      <br />
      <br />
      Aside from coding, I'm really into <b>music production</b>, mostly hip-hop
      and R&B. I spend alot of my free time making beats or writing songs. Music
      is just my another outlet for creativity, another way to express things
      aside from coding.
      <br />
      <br />
      When I'm not writing code or making music, I'm usually playing{" "}
      <b>video games</b> or exploring new tools and frameworks. Always trying to
      learn something new.
    </>
  ),

  skills: (
    <>
      Frontend Development:
      <br />
      - HTML, CSS
      <br />
      - JavaScript, Typescript
      <br />
      - Next.js, Vite + React
      <br />
      - Tailwind CSS
      <br />
      Backend Development:
      <br />
      - Node.js
      <br />
      - Express.js
      <br />
      - Hono
      <br />
      - PHP
      <br />
      Database & ORM:
      <br />
      - MongoDB
      <br />
      - PostgreSQL
      <br />
      - Prisma ORM
      <br />
      Tools & Others:
      <br />
      - Git / GitHub
      <br />- Figma
    </>
  ),

  projects: <>New projects coming soon... (I swear)</>,

  contact: (
    <>
      Email: unsainted.orca@gmail.com
      <br />
      Discord: 666chromehearts
    </>
  ),

  links: (
    <>
      Github:{" "}
      <a className="text-[#15e495]" href="https://github.com/poeticjust1ce/">
        poeticjust1ce
      </a>
      <br />
      YouTube:{" "}
      <a className="text-[#15e495]" href="https://www.youtube.com/@saint_woo">
        woø ♪
      </a>
    </>
  ),

  stack: (
    <>
      Frontend:
      <br />
      - React + Vite
      <br />
      Language:
      <br />
      - TypeScript
      <br />
      Styling:
      <br />
      - Tailwind CSS
      <br />
      UI/UX:
      <br />
      - Inspired by Linux/macOS terminal
      <br />
      Deployment:
      <br />- Vercel
    </>
  ),

  fun: (
    <>
      Available fun commands:
      <br />
      rps &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;— Play rock,
      paper, scissors mini-game
      <br />
      slot &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;— Play a slot machine
      mini-game
    </>
  ),

  clear: <></>,
};
