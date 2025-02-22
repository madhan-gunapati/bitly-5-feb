import { useState } from "react"
import { useDispatch } from "react-redux"
import { LoginUser } from "../../state/LoginSlice"

const Login = ()=>{
    const [loginDetails , changeDetails] = useState({username:'' , password:''})
    const dispatch = useDispatch()
    const changeUsername = (e)=>{
        changeDetails((p)=>({...p , username:e.target.value}))
    }

    const changePassword = (e)=>{
            changeDetails((p)=>({...p, password:e.target.value}))
    }

    return <div>
        <h2>Login Form</h2>
        <form onSubmit={(e)=>{
            e.preventDefault()
        }}>

        <input type="text" value={loginDetails.username} placeholder="username" onChange={changeUsername} /> <br />
        <input type="password" value={loginDetails.password} placeholder="password" onChange={changePassword}/> <br />
        <button type="button" onClick={()=>{dispatch(LoginUser({loginDetails}))}}>Login</button>
        </form>
    </div>
}

export default Login