import React from "react";
import WordGame from "./WordGame.js";

function App() {
   // TODO: Test WordGame with other five-letter words
   return (
      <>
         <h1>Word Guess</h1>
         <WordGame word="CLOSE" />
      </>
   );
}

export default App;