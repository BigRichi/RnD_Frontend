import {useState, useEffect} from "react"
import { Box, Circle, Button, Stack, ListItem, OrderedList, Flex, Text, Spacer, VStack, UnorderedList} from "@chakra-ui/react"
import { motion } from "framer-motion"

function User ({currentUser}) {

    const [topFiveUsers, setTopFiveUsers] = useState([])
    const [winRatio, setWinRatio] = useState([])

    useEffect(() => {
    fetch("http://localhost:3000/users/top_five")
    .then(res => res.json())
    .then(userStats =>{
        setTopFiveUsers(userStats["top_five_users"])
        setWinRatio(userStats["users_win_ratio"])
    })
    }, [])
    const fiveList = topFiveUsers.map((user) => (
        // console.log(user["username"])
        <motion.div >
        <ListItem key={user["id"]}>{user["username"]} High Score:{user["high_score"]}</ListItem>
        </motion.div>
    ))

    const userWinRatio = winRatio.map((user) => (
        
        <ListItem key={user.user["id"]}>{user.user["username"]}: {user["correct_answer_ratio"].toFixed(2)}%</ListItem>
        
    ))
    // console.log(winRatio[0])
    // console.log(winRatio[0].correct_answer_ratio)
    // console.log(winRatio[0].user["id"])
// ----------- DOM ----------- //  
    return (
    <Flex margin="1" padding="3" border="purple" align="center" w="100%" h="100%" borderRadius="md">
        <VStack align="center" padding="2" margin="1">
        <Box><Text fontFamily="'Grandstander', cursive" fontWeight="700">Top-Ranked-Players:</Text></Box>
        <Box h="2" />
        <Spacer />
        <OrderedList>
            <Text fontFamily="'Grandstander', cursive" fontWeight="300">{fiveList}</Text>
        </OrderedList>
        </VStack>
        <Box w="3"/>
        <Spacer />
        <VStack align="center" margin="1" padding="1" >
        <Box><Text fontFamily="'Grandstander', cursive" fontWeight="700">Right Answer %:</Text></Box>
        <Box h="2" />
        <Spacer />
        <UnorderedList>
            <Text fontFamily="'Grandstander', cursive" fontWeight="300">{userWinRatio}</Text>
        </UnorderedList>
        </VStack>
    </Flex>
    )
}

export default User