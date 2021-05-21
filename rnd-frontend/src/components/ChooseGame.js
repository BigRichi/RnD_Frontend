import {useState} from "react"
import { useHistory } from "react-router-dom"
import { Box, Text, Select, VStack, Grid, GridItem, Flex, Input, Button, Spacer} from "@chakra-ui/react"



function ChooseGame ({setQuestions}) {
// ----------- Use States ----------- //

    const [difficulty, setDifficulty] = useState("easy")
    const [numberQuestions, setNumberQuestions] = useState("10")
    const [category, setCategory] = useState("9")

// ----------- Form Callbacks ----------- //
    const handleDifficulty = (e) => setDifficulty(e.target.value)
    const handleNumberQuestions = (e) => setNumberQuestions(e.target.value)
    const handleCategory = (e) => setCategory(e.target.value)

    //--------------History Callback----------//

    const history = useHistory()

// ----------- Fetch ----------- //
    // const tempUrl = `https://opentdb.com/api.php?amount=${numberQuestions}&category=${category}&difficulty=${difficulty}`

    
    const handleFetch = (e) => {
        e.preventDefault()
        const chosenGame = {
            difficulty: difficulty,
            num_of_questions: numberQuestions,
            category: category
        }
        
        fetch("http://localhost:3000/questions/choose_game", {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json',
                'Accept': 'Application/json'
            },
            body: JSON.stringify(chosenGame)
        })
        .then(resp => resp.json())
        .then(questionsArray => {
            setQuestions(questionsArray)
            history.push("/main_page")    
        })
        // TODO add fetch to backend the tempUrl above works dynamically as GET from the Open Trivia DB
    }
    // console.log(questionsArray)

// ----------- DOM ----------- //  
    return (
        <Flex justifyContent="center" alignItems="center" height="100%" width="100%" marginTop="10em" alignContent="space-evenly">
            <VStack>
            <Text>Choose Game</Text>
            <Flex alignContent="space-evenly">
            <form onSubmit={handleFetch}>
                
                <Box><Select placeholder="Select Difficulty" onChange={handleDifficulty}>
                    <option bg="green" value="easy">Easy +10 Points</option>
                    <option value="medium">Medium +20 Points</option>
                    <option value="hard">Hard +30 Points</option>  
                </Select></Box>
                <Input onChange={handleNumberQuestions} type="number" defaultValue="10" min="1" max="50" />
                <Select placeholder="Select Category" onChange={handleCategory}>
                    <option value={9}>General Knowledge</option>
                    <option value={27}>Animals</option>
                    <option value={25}>Art</option>
                    <option value={26}>Celebrities</option>
                    <option value={10}>Entertainment: Books</option>
                    <option value={16}>Entertainment: Board Games</option>
                    <option value={32}>Entertainment: Cartoon & Animations</option>
                    <option value={29}>Entertainment: Comics</option>
                    <option value={11}>Entertainment: Film</option>
                    <option value={31}>Entertainment: Japanese Anime & Manga</option>
                    <option value={12}>Entertainment: Music</option>
                    <option value={13}>Entertainment: Musicals & Theatres</option>
                    <option value={14}>Entertainment: Television</option>
                    <option value={15}>Entertainment: Video Games</option>
                    <option value={22}>Geography</option>
                    <option value={23}>History</option>
                    <option value={20}>Mythology</option>
                    <option value={24}>Politics</option>
                    <option value={17}>Science & Nature</option>
                    <option value={18}>Science: Computers</option>
                    <option value={30}>Science: Gadgets</option>
                    <option value={19}>Science: Mathematics</option>
                    <option value={21}>Sports</option>
                    <option value={28}>Vehicles</option>
                </Select>
                <Box h="2"></Box>
                <Spacer />
                <Input type="submit" value="Play Game" />
            </form>
            </Flex>
            </VStack>
        </Flex>
    )
}
    
    export default ChooseGame