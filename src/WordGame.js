import React, { useState } from "react";
import GuessedWord from "./GuessedWord.js";

function WordGame(props) {
   const wordToGuess = props.word;

   const [prevGuesses, setPrevGuesses] = useState([]);
   const [currentGuess, setCurrentGuess] = useState("");
   const [guessNum, setGuessNum] = useState(1);
   const [isCorrect, setIsCorrect] = useState(false);

   function handleKeyDown(event) {
      if (event.key === "Enter" && currentGuess.length === 5 && !isCorrect) {
         const newGuess = currentGuess;
         const updatedGuesses = [...prevGuesses, newGuess];
         setPrevGuesses(updatedGuesses);
         setCurrentGuess("");
         setGuessNum(guessNum + 1);

         if (newGuess === wordToGuess) {
            setIsCorrect(true);
         }
      }
   }

   function handleChange(event) {
      const upper = event.target.value.toUpperCase();
      setCurrentGuess(upper);
   }

   return (
      <>
         {prevGuesses.map((guess, index) => (
            <p key={index}>
               <GuessedWord
                  word={guess}
                  wordToGuess={wordToGuess}
                  guessNum={index}
               />
            </p>
         ))}

         <p>
            {isCorrect ? (
               `Congratulations! It took you ${guessNum - 1} ${guessNum - 1 === 1 ? "try" : "tries"}.`
            ) : (
               <>
                  <label htmlFor="word-entry">Guess {guessNum}:</label>
                  <input
                     type="text"
                     id="word-entry"
                     size="5"
                     maxLength="5"
                     value={currentGuess}
                     onChange={handleChange}
                     onKeyDown={handleKeyDown}
                  />
               </>
            )}
         </p>
      </>
   );
}

export default WordGame;