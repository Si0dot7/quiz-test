import {useState} from 'react'
import Menu from './Components/Menu';
import Quiz from './Components/Quiz';
import Score from './Components/Score'

function App() {
  const [appState,setAppState] = useState('score')
  return (
    <div className="App">
     <h1>Web Development Quiz</h1>
     {appState === 'menu' && <Menu/>}
     {appState === 'quiz' && <Quiz/>}
     {appState === 'score' && <Score/>}
    </div>
  );
}

export default App;
