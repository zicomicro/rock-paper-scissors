# rock-paper-scissors

A classic Rock Paper Scissors game played entirely in the browser console. Built with vanilla JavaScript as part of [The Odin Project](https://www.theodinproject.com/) Foundations curriculum.

## How to Play

1. Open `index.html` in your browser.
2. Open the browser's Developer Tools (`F12` or `Ctrl+Shift+J`).
3. The game will prompt you to enter your choice: **rock**, **paper**, or **scissors**.
4. The computer will randomly select its choice.
5. The winner of each round is announced in the console, and the score is updated.
6. After **5 rounds**, the final winner is declared.

## Features

- **5-round gameplay** against the computer
- **Case-insensitive input** — type `Rock`, `ROCK`, or `rock`
- **Input validation** — handles empty or invalid entries gracefully
- **Live score tracking** displayed after every round
- **Final result announcement** after all rounds complete

## Technologies

- HTML5
- Vanilla JavaScript (ES6+)

## What I Learned

- Function scope and closures
- Separating game logic from user interface
- Using `Math.random()` for randomized computer choices
- Handling user input with `prompt()`
- Keeping score with local variables inside a parent function
- Git workflow: committing early and often with meaningful messages