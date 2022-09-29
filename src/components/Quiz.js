import React, { useState, useContext, useEffect } from 'react'
import { QuizContext } from '../Helpers/Contexts'
import axios from 'axios'
import "../App.css"

function Quiz() {

    const { score, setScore, setGameState, album } = useContext(QuizContext)

    // set initial variable states
    const [currQuestion, setCurrentQuestion] = useState(0)
    const [playerAnswer, setPlayerAnswer] = useState("")
    const [message, setMessage] = useState("")
    const [song, setSong] = useState("")
    const [lyric, setLyric] = useState("")
    const [answered, setAnswered] = useState(false)

    
    // load lyrics on state change to "quiz"
    useEffect(() => {
        getRandomLyrics()
    
        console.log("useEffect in use")
    }, [])

    // gets lyrics from Taylor Swift API
    async function getRandomLyrics(){
        const response = await axios.get(`https://taylorswiftapi.herokuapp.com/get?album=${album}`);

        setSong(response.data.song);
        setLyric(response.data.quote);
    }
    
    // clears input field
    function ClearFields() {
        document.getElementById("textfield").value = ""
    }

    return (
    <div className="Quiz">
        {/* Question */}
        <h1> What Song is This From </h1>
        <p>{lyric}</p>

        {/* User input box for answer */}
        <input id = "textfield" type="text" onChange={(e) => {
                setPlayerAnswer(e.target.value)
            }} />

        {/* Submit Button (case insensitive) */}
        <button onClick={() => {
            setAnswered(true)
            if (song.toLowerCase() === playerAnswer.toLowerCase()){
                setMessage("Right!")
                setScore(score + 1)
            } else {
                setMessage(`Wrong! The answer was: ${song}`)
            }
        }}>Submit</button>

        {/* Hidden Next Button */}
        {answered && <button onClick = { async () => {
            if (currQuestion === 9){
                setGameState("endScreen")
            } else {
                await getRandomLyrics()
                ClearFields()
                setPlayerAnswer("")
                setMessage("")
                setCurrentQuestion(currQuestion + 1)
                setAnswered(false)
            }
        }}> Next Question </button>}
        <p>{message}</p>
    </div>
  )
}

export default Quiz
