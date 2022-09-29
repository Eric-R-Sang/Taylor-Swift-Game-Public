import React, { useContext } from 'react'
import { QuizContext } from '../Helpers/Contexts'
import Dropdown from 'react-bootstrap'
import "../App.css"

/**
 * Main menu component.
 * 
 * @returns Main menu with start button that changes state to quiz. 
 */
export default function MainMenu() {
    const { album, setAlbum, setGameState } = useContext(QuizContext)

    // allows user to choose one of Taylor's albums if they want to
    const options = 
    [
        "", 
        "Taylor Swift", 
        "Fearless",
        "Speak Now",
        "Red",
        "1989",
        "Reputation",
        "Lover",
        "Folklore",
        "Evermore",
    ]

  return (
    <div className="Menu">
        {/* Choose album selection dropdown menu */}
        <h3> Optional: Choose an album </h3>
        <select onChange={(e) => setAlbum(e.target.value)}
        defaultValue={album}
        >
         {options.map((option, idx) => (
          <option key={idx}>{option}</option>
        ))}
      </select>

        {/* Start button */}
        <button 
            onClick={() => {
                setGameState("quiz")
            }}
        >
            Start Quiz
        </button>
    </div>
  )
}
