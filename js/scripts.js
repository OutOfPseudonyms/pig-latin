$(document).ready(function () {
  $("#translator").submit(function (event) {
    event.preventDefault();
    let userSentence = $("#sentence").val().toLowerCase();
    let splitSentence = userSentence.split(" ");
    let pigLatinizedSentence = [];
    for (let index = 0; index < splitSentence.length; index++) {
      let word = splitSentence[index].split("").filter(letter => (letter >= 'a' && letter <= 'z'));
      let alternaword = [];
      for (let index2 = 0; index2 < word.length; index2++) {
          if (word[0] === "a" || word[0] === "e" || word[0] === "i" || word[0] === "o" || word[0] === "u") {
            word.push("w", "a", "y");
            pigLatinizedSentence.push(word.join(""));
            break;
          } else if (word[index2] === "a" || word[index2] === "e" || word[index2] === "i" || word[index2] === "o" || word[index2] === "u") {
            newWord = word.slice(index2);
            newWord.push(alternaword, "a", "y");
            pigLatinizedSentence.push(newWord.join(""));
            break;
          } else {
            alternaword.push(word[index2]);
            if (index2 === (word.length - 1)) {
              alternaword.push("a", "y");
              pigLatinizedSentence.push(alternaword.join(''));
              break;
            }
          }
      }
    }
    $("#pigLatinizedSentence").text(pigLatinizedSentence.join(" "));
  })
})
// shift adds to the front of the array
// unshift removes the first element from the front of the array

//letter >= 'a' && letter <= 'z'