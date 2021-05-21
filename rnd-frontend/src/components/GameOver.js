import { Box, Button, Flex, Stack, Text} from "@chakra-ui/react"
import { useHistory } from "react-router-dom"



function GameOver({points, questions, setCurrentUser, setPoints}) {
    const history = useHistory()

    const handleNewGame = () => {
        const getUser = localStorage.getItem("user")
        setCurrentUser(JSON.parse(getUser))
        history.push("/choose_game")
        setPoints(0)
    }
    return(

        <Stack >
            <Box textAlign="center"><Text fontSize="2xl" fontFamily="'Grandstander', cursive" fontWeight="800">Game Over!</Text></Box>
            <Box fontFamily="'Grandstander', cursive" fontWeight="500">Total Points: {points}</Box>
            <Box fontFamily="'Grandstander', cursive" fontWeight="500">Number Of Questions: {questions.length}</Box>
            <Box fontFamily="'Grandstander', cursive" fontWeight="500">Round Category: {questions[0].category}</Box>
            <Box align="center"><Button onClick={handleNewGame} fontFamily="'Grandstander', cursive" fontWeight="500" bg="#00cf0a" w="200px" textAlign="center">Choose Another Game</Button></Box>
        </Stack>
    )
}


export default GameOver