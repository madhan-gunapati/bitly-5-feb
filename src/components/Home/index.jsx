import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, Navigate, redirect, replace, useNavigate } from "react-router-dom"
import { sendUsertoDB } from "../../state/userSlice"

const Home = ()=>{

   
    const [userDetails, changeUserDetails] = useState({name:'', email:''})
    const dispatch = useDispatch()
    const navigate = useNavigate()
   const changeusername = (e)=>{
       changeUserDetails((p)=>({...p, name:e.target.value}))
   }
    
    const changeEmail = (e)=>{
        changeUserDetails((p)=>({...p, email:e.target.value}))
    }

    const submitDetails = async ()=>{
        dispatch(sendUsertoDB(userDetails))
        
    } 

    

    return <div>
        <h1>User From</h1>
        <form onSubmit={(e)=>{e.preventDefault()}}>

            <label htmlFor="name">Name</label>
            <input id='name' type="text" onChange={changeusername} value={userDetails.name} /> <br />
            <label htmlFor="email" >Email</label>
            <input type="text" onChange={changeEmail} value={userDetails.email} /> <br />
            <button type="button" onClick={submitDetails}>Submit</button>
            <Link to='/form'><button type="button">Go to Form</button></Link>
        </form>
       
    </div>
}

export default Home