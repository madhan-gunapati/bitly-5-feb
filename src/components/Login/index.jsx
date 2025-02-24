import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { LoginUser } from "../../state/LoginSlice"
import Cookies from "js-cookie"
import { useNavigate } from "react-router-dom"

const Login = ()=>{
    const {loading, error_msg, jwt_token} = useSelector((state)=>state.LoginSlice)
    const naviagte = useNavigate()
    const [loginDetails , changeDetails] = useState({username:'' , password:''})
    const dispatch = useDispatch()
    const changeUsername = (e)=>{
        changeDetails((p)=>({...p , username:e.target.value}))
    }

    const changePassword = (e)=>{
            changeDetails((p)=>({...p, password:e.target.value}))
    }

    useEffect(()=>{
        const stored_cookie = Cookies.get('authToken')
        
        if(stored_cookie){
            naviagte('/form')
        }

    },[jwt_token])

        
    return <div>
        <h2>Login Form</h2>
        <form onSubmit={(e)=>{
            e.preventDefault()
        }}>

        <input type="text" value={loginDetails.username} placeholder="username" onChange={changeUsername} /> <br />
        <input type="password" value={loginDetails.password} placeholder="password" onChange={changePassword}/> <br />
        <button type="button" onClick={()=>{dispatch(LoginUser({loginDetails}))}}>Login</button>
        </form>
        <p>{error_msg}</p>
    </div>
}

export default Login