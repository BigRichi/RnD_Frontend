import Question from './Question'
import Answers from './Answers'
import {useState} from 'react'
import GameOver from './GameOver'
import { Box, Flex, Container, Spacer, Stack, Text} from "@chakra-ui/react"



function GamePage ({questions, setPoints, points, handleGameOver, setCurrentUser}) {

    // console.log(questions)
    
// ----------- Use States ----------- //
    const [round, setRound] = useState(0)
    const [finalAnswer, setFinalAnswer] = useState(false)
    
// ----------- get  ----------- //

const nextQuestion = () => {
    if (round <= questions.length){
        setRound(round => round + 1)
    }
    setFinalAnswer(false)
}
    
// ----------- Questions Map ----------- //
    const questionsArray = questions.map(q => {

        console.log(q["question"].replace(/&#039;/g, "'"))
        return (
            <Box align="center" alignItems="center" alignContent="center">
            <Question key={q["question"]} query={q["question"].replace(/&#039;/g, "'").replace(/&quot;/g, `"`).replace(/&ldquo;/g, `"`).replace(/&rsquo;/g, "'").replace(/&rdquo;/g, `"`).replace(/&shy;/g, "-").replace(/&hellip;/g, "...").replace(/&Aring;/g, "Å").replace(/&eacute;/g, "é")} points={points}/>
            </Box>
        )
    })
        
    const answersArray = questions.map(q => {
        return (
            <Flex align="center" h="100%" w="100%" justifyContent="center">
                <Stack direction="row" align="center" alignItems="center" alignContent="center">
                    <Box align="center" alignItems="center" alignContent="center">
            <Answers 
                key={q["id"]}
                incorrect_answers={q["incorrect_answers"]} 
                correct_answer={q["correct_answer"]} 
                setPoints={setPoints}
                points={points}
                nextQuestion={nextQuestion}
                finalAnswer={finalAnswer}
                setFinalAnswer={setFinalAnswer}
                questions={questions}
            /> 
                    </Box>
                </Stack>
            </Flex>
        )
    })

// ----------- DOM ----------- //   
    return (

    <Container align="center" alignContent="center" flexDirection="column" padding="2">
        <Box align="center">
        {/* <h1>Game Page</h1> */}
        {questionsArray[round]} 
        {answersArray[round] ? answersArray[round] : handleGameOver()}
        {!answersArray[round] && <GameOver setPoints={setPoints} setCurrentUser={setCurrentUser} points={points} questions={questions}/>}
        </Box>
    </Container>
    
    )

}

export default GamePage