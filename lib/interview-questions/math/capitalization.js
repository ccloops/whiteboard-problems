'use strict';

function capitalizeWord(word) {
  let newWord = word.charAt(0).toUpperCase() + word.slice(1);
  return newWord;
}

capitalizeWord('word');