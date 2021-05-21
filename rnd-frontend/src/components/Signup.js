import { useHistory } from "react-router-dom"
import {useState} from "react"
import { Box, Stack, Grid, GridItem, Flex, Input, Button, Text, VStack, Spacer} from "@chakra-ui/react"
import { AddIcon } from '@chakra-ui/icons'

function Signup ({setCurrentUser}) {

// ----------- Use States ----------- //
    const history = useHistory()
    const [errors, setErrors] = useState([])
    const [formData, setFormData] = useState({
        username: "",
        password_digest: "",
        high_score: 0,
        rank: 0
      })

// ----------- Navigation to MainPage ----------- //

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value})
    }

    const handleSignup = (e) => {
        e.preventDefault()

        fetch("http://localhost:3000/signup", {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json',
                'Accept': 'Application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(resp => resp.json())
        .then(userData => {
            setCurrentUser(userData.user)
            localStorage.setItem("user", JSON.stringify(userData.user))
            history.push("/choose_game")
        })
        .catch((data) => {
            setErrors(data.errors);
        });
    }

 // ----------- DOM ----------- //    
    return (
    <Flex justifyContent="center" alignItems="center" height="100%" width="100%" marginTop="10em">
        <VStack >
        <Box><Text textAlign="center" fontFamily="'Playfair Display', serif" fontWeight="700" fontSize="3xl">Sign Up Here:</Text></Box>
        <form onSubmit={handleSignup}>
        
        <Box><Input variant="filled" focusBorderColor="lime"  isInvalid
    errorBorderColor="blue" onChange={handleChange} type="text" placeholder="Username" name="username" w="250px"/></Box>
        <Box h="2"></Box>
        <Spacer/>
        <Box><Input variant="filled" onChange={handleChange} type="password" placeholder="Password" name="password_digest" w="250px"/></Box>
        {/* {errors.map((error) => (
          <p key={error} style={{ color: "red" }}>
            {error}
          </p>
        ))} */}
        <Box h="5"></Box>
        <Spacer/>
        <Box align="center"><Button type="submit" ><Text fontFamily="'Playfair Display', serif" > Sign Up  </Text></Button></Box>
        </form>
        </VStack>
    </Flex>
    )
}

export default Signup