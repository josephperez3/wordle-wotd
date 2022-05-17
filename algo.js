import wordList from "./wordlist.js";

const WORD_OFFSET = 8;

var htmlDate = document.getElementById("date");
var htmlWord = document.getElementById("word");

const date = new Date();
var Ha = new Date(2021, 5, 19, 0, 0, 0, 0);
function Na(e, a) {
  var s = new Date(e),
    t = new Date(a).setHours(0, 0, 0, 0) - s.setHours(0, 0, 0, 0);
  return Math.round(t / 864e5);
}
function Da(date) {
  var index,
    s = Na(Ha, date);
  return (index = s % wordList.length), wordList[index + WORD_OFFSET];
}

console.log(Da(date));

htmlDate.innerText = date;
htmlWord.innerText = Da(date);
