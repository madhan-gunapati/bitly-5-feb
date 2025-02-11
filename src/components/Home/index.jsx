import { useState } from "react"
import { Link, Navigate, redirect } from "react-router-dom"

const Home = ()=>{
    const [userDetails, changeUserDetails] = useState({name:'', email:''})

    const changeusername = (e)=>{
        changeUserDetails((p)=>({...p, name:e.target.value}))
    }
    
    const changeEmail = (e)=>{
        changeUserDetails((p)=>({...p, email:e.target.value}))
    }

    const submitDetails = async ()=>{
        
        const url = 'http://localhost:3000/user-registration'
        const options = {
            method:'PUT',
            headers:{
                'Content-Type':'Application/json',
                'Accept':'Application/json',
                'Authorization':''
            },
            body:JSON.stringify(userDetails)
        }
        const fetched_result = await fetch(url , options)
        
        const text = await fetched_result.text()
        if(fetched_result.status == 200){
            changeUserDetails({name:'', email:''})
            redirect('/form')
           
        }
        console.log(text)
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