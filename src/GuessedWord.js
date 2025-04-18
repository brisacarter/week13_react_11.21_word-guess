import React from "react";

function GuessedWord(props) {
   const word = props.word;
   const wordToGuess = props.wordToGuess;
   const guessNum = props.guessNum;

   const letterStatus = word.split("").map((char, i) => {
      if (char === wordToGuess[i]) {
         return "correct";
      } else if (wordToGuess.includes(char)) {
         return "wrong-place";
      } else {
         return "not-part";
      }
   });

   return (
      <>
         {word.split("").map((char, i) => (
            <span className={letterStatus[i]} key={`${guessNum}-${i}`}>
               {char}
            </span>
         ))}
      </>
   );
}

export default GuessedWord;