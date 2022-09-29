import './App.css';
import React, { useState } from 'react'
import MainMenu from './components/MainMenu'
import Quiz from './components/Quiz'
import EndScreen from './components/EndScreen'

import {QuizContext} from './Helpers/Contexts'

function App() {
  const [gameState, setGameState] = useState("menu")
  const [score, setScore] = useState(0)
  const [album, setAlbum] = useState("")

  return (
    <div className="App">
      <h1 style={{color: "whitesmoke"}}>Taylor Swift Quiz App</h1>
      <QuizContext.Provider value={{ gameState, setGameState, score, setScore, album, setAlbum }}>
        {gameState === "menu" && <MainMenu />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "endScreen" && <EndScreen />}
      </QuizContext.Provider>
      <h4 style={{color: "whitesmoke"}}>Made by Eric Sang (eric.r.sang@vanderbilt.edu)</h4>
    </div>
  );
}

export default App;
