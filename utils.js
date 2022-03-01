// function to filter words by the search word,
// false if you want include words with search
// chars and true if you want to remove them
function filter(words, search, notContains) {
  return words.filter((elem) => {
    for (let i = 0; i < search.length; i++) {
      if (elem.includes(search[i])) {
        return !notContains;
      }
    }
    return notContains;
  });
}

// function that prints the match results
function printResult(words, bad, good) {
  if (bad === "" && good === "") {
    console.log(words);
  } else {
    if (bad !== "") words = filter(words, bad, true);
    if (good !== "") words = filter(words, good, false);
    console.log(words);
  }
}

module.exports = {
  printResult,
};
