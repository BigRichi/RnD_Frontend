import { chakra, Grid, Box, Flex, GridItem } from "@chakra-ui/react"

function Answers ({incorrect_answers, correct_answer, setPoints, points, nextQuestion, finalAnswer, setFinalAnswer}) {

    const Button = chakra("button", {
        baseStyle: {
            px: "3",
  py: "2",
  bg: "green.200",
  rounded: "md"
        },
      })
    
   console.log(points);

        //switch statement for 
    const checkAnswer = (e) => {
        // debugger
        if (e.target.innerText === correct_answer){
            setPoints(points => points + 10)

        }
        setFinalAnswer(true)
    }
    console.log(points);

    const answers = [...incorrect_answers, correct_answer].sort(() => Math.random() - 0.5).map(answers =>{
        return <li key={answers} correct_answer={{correct_answer}, "hidden" } onClick={!finalAnswer ? checkAnswer : null}  >{answers.replace(/&#039;/g, "'").replace(/&quot;/g, `"`).replace(/&ldquo;/g, `"`).replace(/&rsquo;/g, "'").replace(/&rdquo;/g, `"`).replace(/&shy;/g, "-").replace(/&hellip;/g, "...").replace(/&Aring;/g, "Å").replace(/&oacute;/g, "ó")}</li>
    })
    
// ----------- DOM ----------- //  
    return (
        <>
        <h1>Answers:</h1>
    <Grid templateRows="repeat(2, 1fr)" templateColumns="repeat(5, 1fr)"
  gap={4}>
        
        <GridItem rowSpan={1} colSpan={1}>{answers[0]}</GridItem>
        <GridItem rowSpan={1} colSpan={4}>{answers[1]}</GridItem>
        <GridItem rowSpan={1} colSpan={1}>{answers[2]}</GridItem>
        <GridItem rowSpan={1} colSpan={3}>{answers[3]}</GridItem>
    </Grid>
        <Box align="center"><Button onClick={nextQuestion} >Next Question</Button></Box>
    </>
    )
}

export default Answers