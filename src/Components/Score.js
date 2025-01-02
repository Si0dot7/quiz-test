import { DataContext } from "../App"
import {useContext} from 'react'
import QuestionData from "../Data/QuestionData"

const Score = () =>{
const {score,setAppState,setScore} = useContext(DataContext)

const reStart = () =>{
    setScore(0)
    setAppState('menu')
}

    return(
        <div className = 'score'>
            <h1>Summary Your Score</h1>
            <h2>{`Your Score: ${score} / ${QuestionData.length}`}</h2>
            <button onClick = {reStart}>Start Quiz Again</button>
        </div>
    );
}

export default Score