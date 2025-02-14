import { useState } from 'react'
import { languages } from "./languages"
import { clsx } from 'clsx'

function App() {

  // State values
  const [currentWord, setCurrentWord] = useState("react")
  const [guessedLetters, setGuessedLetters] = useState([])


  // Derived values
  const wrongGuessCount = guessedLetters.filter(letter => currentWord.includes(letter)).length
  console.log(wrongGuessCount)

  // Static values
  const alphabet = "abcdefghijklmnopqrstuvwxyz"

  function addGuessedLetter(letter) {
    setGuessedLetters(prevLetters =>
      prevLetters.includes(letter) ?
        prevLetters : [...prevLetters, letter]
    )
  }

  const languageElements = languages.map((lang, index) => {
    const styles = {
      backgroundColor : lang.backgroundColor,
      color: lang.color
    }

    const className = clsx("chip", {
      lost: index < wrongGuessCount
    })
    return(
      <span
        className={className}
        style={styles}
        key={lang.name}
      >
        {lang.name}
      </span>
    )
  })

  const letterElements = currentWord.split("").map((letter, index) => (
    <span key={index}>
        {guessedLetters.includes(letter) ? letter.toUpperCase() : ""}
    </span>
  ))

  const keyboardElements = alphabet.split("").map(letter => {
    const isGuessed = guessedLetters.includes(letter)
    const isCorrect = isGuessed && currentWord.includes(letter)
    const isWrong = isGuessed && !currentWord.includes(letter)
    const className = clsx({
      correct: isCorrect,
      wrong: isWrong
    })
    
    
    return(
      <button
      className={className}
      key={letter}
      onClick={() => addGuessedLetter(letter)}
      >
        {letter.toUpperCase()}
      </button>
    )
  })


  return (
    <main>
      <header>
        <h1>Assembly: Endgame</h1>
        <p>Guess the word within 8 attempts to keep the
        programming world safe from Assembly!</p>
      </header>
      <section className="game-status">
        <h2>You win!</h2>
        <p>Well done! 🎉</p>
      </section>
      <section className="language-chips">
        {languageElements}
      </section>
      <section className="word">
        {letterElements}
      </section>
      <section className="keyboard">
        {keyboardElements}
      </section>
      <button className="new-game">New Game</button>
    </main>
  )
}

export default App
