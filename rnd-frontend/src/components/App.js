import '../App.css';
import {useState, useEffect} from "react"
import { Switch, Route } from "react-router-dom"
import { useHistory } from "react-router-dom"
import Header from './Header'
import Login from './Login'
import Signup from './Signup'
import ChooseGame from './ChooseGame'
import MainPage from './MainPage';
import { Button, chakra, Grid, Flex, Box, Text, Spacer } from "@chakra-ui/react"


function App() {

  // ----------- Use States ----------- //
  const history = useHistory()
  const [questions, setQuestions] = useState([])
  const [points, setPoints] = useState(0)
  const [currentUser, setCurrentUser] = useState(null)


// ----------- Auto Login ----------- //

  useEffect(() => {
    const getUser = localStorage.getItem("user")

    if (getUser) {
      setCurrentUser(JSON.parse(getUser))
    }
  }, [])

  // ----------- Handle Login and Signup Call Backs ----------- //
  const handleLogin = () => history.push("/login")
  const handleSignup = () => history.push("/signup")
  
  
// ----------- HandleGameOver Call back ----------- //  
  const handleGameOver = () => {
    const gameOver = {
      score: points,
      game_type: questions[0]["category"],
      time: 0.0,
      num_of_questions: questions.length,
      difficulty: questions[0]["difficulty"],
      user_id: currentUser.id
    }
  // ----------- FetchPost to create a new Game Instance ----------- // 
    fetch("http://localhost:3000/games/gameover", {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      },
      body: JSON.stringify(gameOver)
    })
    .then(resp => resp.json())
    .then(userData =>{
      localStorage.setItem("user", JSON.stringify(userData))
     
    }) 
  }
 


// ----------- DOM ----------- //  
  return (
    <Box>
      <Header currentUser={currentUser} setCurrentUser={setCurrentUser} setPoints={setPoints}/>
      <Box alignContent="center">
        <Switch>
          <Route path="/choose_game">
            <ChooseGame setQuestions={setQuestions} />
          </Route>
          <Route path="/main_page">
            
            <MainPage
              
              currentUser={currentUser} 
              questions={questions} 
              setPoints={setPoints} 
              points={points} 
              handleGameOver={handleGameOver}
              setCurrentUser={setCurrentUser}
            />
           
          </Route>
          <Route path="/login" >
            <Login setCurrentUser={setCurrentUser} />
          </Route>
          <Route path="/signup">
            <Signup setCurrentUser={setCurrentUser} />
          </Route>
          <Route path="/">
            <Flex justifyContent="center" alignItems="center" height="50%" width="100%" marginTop="5em">
              <Box textAlign="center" height="549px" width="966px" >
                <Box h="150"/>
                <Spacer />
            <Text fontFamily="'Dancing Script', cursive" fontWeight="700" fontSize="4xl">Willkommen!! Please Login or Sign Up</Text>
            <Box h="5"/>
                <Spacer />
            <Button bg="blue" textColor="white" padding="5" margin="1" id="login" onClick={handleLogin}><Text >Login</Text></Button>
            <Button bg="purple" textColor="white" padding="5" margin="1" id="signup" onClick={handleSignup}><Text>Signup</Text></Button>
            </Box>
            </Flex>
          </Route>
        </Switch>
      </Box>
    </Box>
  );
}

export default App;
