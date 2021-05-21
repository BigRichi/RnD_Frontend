import GamePage from './GamePage'
import User from './User'
import { Box, Center, Button, Grid, Container, Flex} from "@chakra-ui/react"

function MainPage ({questions, setPoints, points, handleGameOver, currentUser, setCurrentUser}) {


    
// ----------- DOM ----------- //  
    return (
        <Container  w="100%" h="100%" align="center"    alignContent="center"  justifyContent="center" marginTop="12">
    <Flex w="100%" align="center" bg="pink" borderRadius="md" justifyContent="center">
        {/* <h1>Main Page</h1> */}
        <Box>
     
        <Box align="center" >
            <GamePage 
            questions={questions} 
            setPoints={setPoints} 
            points={points}
            handleGameOver={handleGameOver}
            setCurrentUser={setCurrentUser}
        /></Box>
           <Box borderRadius="md"  bg="cyan"><User   currentUser={currentUser} /></Box>
        </Box>
    </Flex>
    </Container>
    )
}

export default MainPage