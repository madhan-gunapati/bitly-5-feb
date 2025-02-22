import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const LoginUser = createAsyncThunk('LoginSlice',async(payload , thunkApi)=>{
    const {username , password} = payload.loginDetails
    
    
    const url = 'http://localhost:3000/login'
    const options = {
        method:'POST',
        headers:{
            'Content-Type':'Application/json',
            'Accept':'Application/json',
            'Authorization':''
        },
        body:JSON.stringify({username, password})

    }
    const result  = await fetch(url , options)
    const result_text = await result.text()
    console.log(result_text)
    
})

const LoginSlice = createSlice({
    name:'LoginSlice', 
    initialState:{
        jwt_token:''
    },
    reducers:{

    }
})

export default LoginSlice

