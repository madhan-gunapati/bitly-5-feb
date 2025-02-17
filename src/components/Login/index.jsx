import { useState } from "react"

const Login = ()=>{
    const [loginDetails , changeDetails] = useState({username:'' , password:''})

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

        <input type="text" value={loginDetails.username} onChange={changeUsername} />
        <input type="password" value={loginDetails.password}  onChange={changePassword}/>
        <button type="button" >Login</button>
        </form>
    </div>
}

export default Login