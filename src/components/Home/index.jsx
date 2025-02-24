import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, Navigate, redirect, replace, Route, Routes, useNavigate } from "react-router-dom"
import { sendUsertoDB } from "../../state/userSlice"

const Home = ()=>{

   
    const [userDetails, changeUserDetails] = useState({name:'', email:'', password:''})
    const {loading, result }= useSelector((state)=>state.HomeSlice)
    
    const dispatch = useDispatch()
    
   const changeusername = (e)=>{
       changeUserDetails((p)=>({...p, name:e.target.value}))
   }
    
    const changeEmail = (e)=>{
        changeUserDetails((p)=>({...p, email:e.target.value}))
    }

    const changePassword = (e)=>{
        changeUserDetails((p)=>({...p, password:e.target.value}))
    }

    const submitDetails = async ()=>{
        dispatch(sendUsertoDB(userDetails))
        
    } 

    

    return <div>
       
        <h1>User From</h1>
        {loading? <p>Loading.....</p>:
        <form onSubmit={(e)=>{e.preventDefault()}}>

            <label htmlFor="name">Name</label>
            <input id='name' type="text" onChange={changeusername} value={userDetails.name} /> <br />
            <label htmlFor="email" >Email</label>
            <input type="text" onChange={changeEmail} value={userDetails.email} /> <br />
           <label htmlFor="password">Password</label>
            <input type="password" id='password' value={userDetails.password} onChange={changePassword} /> 
            <br />
            <button type="button" onClick={submitDetails}>Register</button>
            <Link to='/form'><button type="button">Go to Form</button></Link>
            <p>{result}</p>
        </form>

       
}
    </div>
}

export default Home