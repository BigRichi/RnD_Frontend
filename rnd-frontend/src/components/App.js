import '../App.css';
import {useState} from "react"
import { Switch, Route } from "react-router-dom"
import { useHistory } from "react-router-dom"
import Header from './Header'
import Login from './Login'
import Signup from './Signup'
import ChooseGame from './ChooseGame'
import MainPage from './MainPage';

function App() {

  // ----------- Use States ----------- //
  const history = useHistory()
  const [questions, setQuestions] = useState([])
  const [points, setPoints] = useState(0)

  // ----------- Handle Login and Signup Call Backs ----------- //
  const handleLogin = () => history.push("/login")
  const handleSignup = () => history.push("/signup")

  const handleGameOver = () => {

    const newGame = {
      score: points,
      game_type: questions[0]["category"],
      time: 0.0,
      num_of_questions: questions.length,
      user_id: 1
    }
    // debugger
    
    fetch("http://localhost:3000/games/game_over", {
      method: 'POST',
      headers: {
          'Content-Type': 'Application/json',
          'Accept': 'Application/json'
      },
      body: JSON.stringify(newGame)
    })
    .then(resp => resp.json())
    .then(game => {
        console.log(game)
        console.log("hello")
        // history.push("/main_page")    
    })
  }

// ----------- DOM ----------- //  
  return (
    <div>
      <Header />
      <main>
        <Switch>
          <Route path="/choose_game">
            <ChooseGame setQuestions={setQuestions} />
          </Route>
          <Route path="/main_page">
            <MainPage 
              questions={questions} 
              setPoints={setPoints} 
              points={points} 
              handleGameOver={handleGameOver}
            />
          </Route>
          <Route path="/login" >
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/">
            <div className="login">
            <h1>Please Login or Sign Up</h1>
            <button id="login" onClick={handleLogin}>Login</button>
            <button id="signup" onClick={handleSignup}>Signup</button>
            </div>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
