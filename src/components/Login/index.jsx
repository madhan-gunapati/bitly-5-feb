import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { add_jwt_token, LoginUser } from "../../state/LoginSlice"
import Cookies from "js-cookie"
import { Link, useNavigate } from "react-router-dom"

const Login = ()=>{
    const {loading, error_msg, jwt_token} = useSelector((state)=>state.LoginSlice)
    const naviagte = useNavigate()
    const [loginDetails , changeDetails] = useState({email:'' , password:''})
    const dispatch = useDispatch()
    const changeEmail = (e)=>{
        changeDetails((p)=>({...p , email:e.target.value}))
    }

    const changePassword = (e)=>{
            changeDetails((p)=>({...p, password:e.target.value}))
    }

    useEffect(()=>{
        const stored_cookie = Cookies.get('authToken')
        
        if(stored_cookie){
            dispatch(add_jwt_token(stored_cookie))
            naviagte('/')
        }

    },[])

        
    return <div>
        <h2>Login Form</h2>
        <form onSubmit={(e)=>{
            e.preventDefault()
        }}>

        <input type="text" value={loginDetails.email} placeholder="email" onChange={changeEmail} /> <br />
        <input type="password" value={loginDetails.password} placeholder="password" onChange={changePassword}/> <br />
        <button type="button" onClick={()=>{dispatch(LoginUser({loginDetails}))}}>Login</button> <br />
       <Link to='/register'> <button type="button">New User</button></Link>
        </form>
        <p>{error_msg}</p>
    </div>
}

export default Login