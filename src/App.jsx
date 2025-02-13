import { useState } from 'react'
import { languages } from "./languages"

function App() {
  const [currentWord, setCurrentWord] = useState("react")
  const [guessedLetters, setGuessedLetters] = useState([])

  const alphabet = "abcdefghijklmnopqrstuvwxyz"

  function addGuessedLetter(letter) {
    setGuessedLetters(prevLetters =>
      prevLetters.includes(letter) ?
        prevLetters : [...prevLetters, letter]
    )
  }

  const languagesElements = languages.map(lang => {
    const styles = {
      backgroundColor : lang.backgroundColor,
      color: lang.color
    }
    return(
      <span
        className='chip'
        style={styles}
        key={lang.name}
      >
        {lang.name}
      </span>
    )
  })




  return (
    <>
    </>
  )
}

export default App
