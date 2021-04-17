import { useHistory } from "react-router-dom"


function Login () {

// ----------- Use States ----------- //
    const history = useHistory()

// ----------- Handle Login and Signup Call Backs ----------- //
    const handleMainPage = () => history.push("/main_page")

    return (
    <div className="login">
        <h1>Login</h1>
        <input type="text" placeholder="Username" className="usernameEnter"/>
        <input type="password" placeholder="Password" className="passwordEnter"/>
        <button onClick={handleMainPage}>Main Page</button>
    </div>
    )
}

export default Login