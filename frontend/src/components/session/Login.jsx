import { useState } from "react"
import { useDispatch } from "react-redux"
import { createUser } from "../../store/userReducer"
import { loginUser } from "../../store/sessionReducer"

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(loginUser({email, password}));
    }
    
    return (
        <div className="page">
            <div className="login-container">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="">Email</label>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} required/>

                    <label htmlFor="">Password</label>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} required/>

                    <button>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login