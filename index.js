const { wordArrayPT, wordArrayEN } = require("./words.js");
const { printResult } = require("./utils.js");
const prompt = require("prompt-sync")({ sigint: true });

// function to the instance results
function solve(isPt) {
  //Ask user the letters
  const anyLetter = "[A-zÀ-ú]";

  const firstLetter = prompt("First Letter:   ") || anyLetter;
  const secondLetter = prompt("Second Letter:   ") || anyLetter;
  const thirdLetter = prompt("Third Letter:   ") || anyLetter;
  const fourthLetter = prompt("Fourth Letter:   ") || anyLetter;
  const fifthLetter = prompt("Fifth Letter:   ") || anyLetter;
  const badLetters = prompt("Bad Letters:   ");
  const goodLetters = prompt("Good Letters:   ");

  //Build regex
  const reg = new RegExp(
    firstLetter + secondLetter + thirdLetter + fourthLetter + fifthLetter
  );

  function getMatches(wordArray, badLetters, goodLetters) {
    //Get matches from the word array
    const resultWB = wordArray.filter((elem) => elem.match(reg));

    //Print results
    printResult(resultWB, badLetters, goodLetters);
  }

  if (isPt === "Y" || isPt === "y")
    getMatches(wordArrayPT, badLetters, goodLetters);
  else getMatches(wordArrayEN, badLetters, goodLetters);
}

// main game loop
function main() {
  let end = false;
  const isPt = prompt("PT? (Y/N): ");
  while (!end) {
    solve(isPt);
    const letsEnd = prompt("Do you want to end?(Y/N) ");
    if (letsEnd === "Y" || letsEnd === "y") end = true;
  }
}

main();
