import { chakra, Grid, Box, Flex, GridItem, Text, Tooltip, Spacer, Icon } from "@chakra-ui/react"
import {ArrowForwardIcon, ArrowRightIcon} from '@chakra-ui/icons'
import { FaArrowRight } from "react-icons/fa"
import { motion } from "framer-motion"

function Answers ({questions,incorrect_answers, correct_answer, setPoints, points, nextQuestion, finalAnswer, setFinalAnswer}) {

    const Button = chakra("button", {
        baseStyle: {
            px: "3",
            py: "2",
            bg: "green.200",
            rounded: "md"
        },
      })
    
//    console.log(points);

        //switch statement for 
    const checkAnswer = (e) => {
        console.log(questions[0]["difficulty"])
        if(e.target.innerText === correct_answer){
            if(questions[0]["difficulty"] === "easy"){
                setPoints(points => points + 10)
                }
            else if(questions[0]["difficulty"] === "medium"){
                setPoints(points => points + 20)
            }
            else {
                setPoints(points => points + 30)
            }
        }
        setFinalAnswer(true)
    }
    // console.log(questions);

    const answers = [...incorrect_answers, correct_answer].sort(() => Math.random() - 0.5).map(answers =>{
        return <p key={answers} correct_answer={{correct_answer}, "hidden" } onClick={!finalAnswer ? checkAnswer : null}  >{answers.replace(/&#039;/g, "'").replace(/&quot;/g, `"`).replace(/&ldquo;/g, `"`).replace(/&rsquo;/g, "'").replace(/&rdquo;/g, `"`).replace(/&shy;/g, "-").replace(/&hellip;/g, "...").replace(/&Aring;/g, "Å").replace(/&oacute;/g, "ó")}</p>
    })
    
// ----------- DOM ----------- //  
    return (
        <Flex direction="column" align="center"  alignItems="center" alignContent="center" justifyContent="space-around" >
            <Text fontFamily="'Grandstander', cursive" fontWeight="700">{finalAnswer ? `The correct answer is: ${correct_answer}` : "Answers:"}</Text>
                <Box h="3"/>
                    <Spacer/>
            <Grid justifyContent="space-around" alignItems="center" alignContent="center" templateRows="repeat(2, 1fr)" templateColumns="repeat(2, 1fr)"gap={4}>

       <motion.div whileHover={{ scale: 1.2 }}>
        <GridItem padding="1" borderRadius="md"  bg="green" align="center" boxShadow="dark-lg"  w="200px" rowSpan={1} colSpan={1}>
            {!finalAnswer ? <Text color="pink" fontFamily="'Grandstander', cursive" fontWeight="500"
            >{answers[0]}</Text> : <Tooltip label="You've Already Answered!"><Text opacity="0.2">{answers[0]}</Text></Tooltip>}
            </GridItem>
        </motion.div>



        <motion.div whileHover={{ scale: 1.2 }}>
        <GridItem padding="1" borderRadius="md"  bg="green" align="center" boxShadow="dark-lg" w="200px" rowSpan={1} colSpan={1}>
            {!finalAnswer ? <Text color="pink"  fontFamily="'Grandstander', cursive" fontWeight="500"
            >{answers[1]}</Text> : <Tooltip label="You've Already Answered!"><Text opacity="0.2">{answers[1]}</Text></Tooltip>}
            </GridItem>
        </motion.div>

    
<motion.div whileHover={{ scale: 1.2 }}>
        <GridItem padding="1" borderRadius="md"  bg="green" align="center" boxShadow="dark-lg" w="200px" rowSpan={1} colSpan={1}>
            {!finalAnswer ? <Text color="pink"  fontFamily="'Grandstander', cursive" fontWeight="500"
            >{answers[2]}</Text> : <Tooltip label="You've Already Answered!"><Text opacity="0.2">{answers[2]}</Text></Tooltip>}
            </GridItem>
</motion.div>


<motion.div whileHover={{ scale: 1.2 }}>
        <GridItem padding="1" borderRadius="md"  bg="green" align="center" boxShadow="dark-lg" w="200px" rowSpan={1} colSpan={1}>
            {!finalAnswer ? <Text color="pink" fontStyle="bold" fontFamily="'Grandstander', cursive" fontWeight="500"
            >{answers[3]}</Text> : <Tooltip label="You've Already Answered!"><Text opacity="0.2">{answers[3]}</Text ></Tooltip> }
            </GridItem>
</motion.div>


    </Grid>
            <Box h="10"/>
            <Spacer />
            <Box align="center">
                <Button bg="#0003BF" color="pink" w="200px" onClick={nextQuestion}>
                <Text fontFamily="'Grandstander', cursive" fontWeight="700">
                    Next Question <ArrowRightIcon/>
                </Text>
                </Button>
            </Box>
            
        
    </Flex>
    )
}

export default Answers