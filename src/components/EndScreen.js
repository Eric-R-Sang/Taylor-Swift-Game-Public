import React, { useContext } from 'react'
import { QuizContext } from '../Helpers/Contexts'
import "../App.css"

/**
 * Component for the ending screen.
 * 
 * @returns The EndScreen and its properties (score, restart button, etc).
 */
function EndScreen() {
  const { score, setScore, setGameState } = useContext(QuizContext)

  // Restarts game by changing states of score and gameState
  const restartQuiz = () => {
    setScore(0)
    setGameState("menu");
  }

  return (
    <div className="EndScreen">
      {" "}
      <h1>Quiz Finished</h1>
      <h3> {score} / 10 </h3>
      <button onClick={restartQuiz}> Restart Quiz</button>
    </div>
  )
}

export default EndScreen
