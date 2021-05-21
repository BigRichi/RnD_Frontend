import { Box, Container, Spacer, Stack, Text} from "@chakra-ui/react"

function Question ({query, points}) {




    
// ----------- DOM ----------- //  
    return (
    <Container centerContent>
        <Box>
            <Text fontFamily="'Grandstander', cursive" fontWeight="700">Question:</Text>
        </Box>
        <Box h="5"></Box>
        <Spacer />
        <Stack >
            <Box><Text fontFamily="'Grandstander', cursive" fontWeight="300" 
            >{query}</Text></Box>
            <Box>
                <Text fontFamily="'Grandstander', cursive" fontWeight="700">Points: {points}</Text>
            </Box>
        </Stack>
        <Box h="3"></Box>
        <Spacer />
    </Container>
    )
}

export default Question