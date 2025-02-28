import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

export const LoginUser = createAsyncThunk('LoginSlice',async(payload , thunkApi)=>{
    const {email , password} = payload.loginDetails
    
    
    const url = 'http://localhost:3000/login'
    const options = {
        method:'POST',
        headers:{
            'Content-Type':'Application/json',
            'Accept':'Application/json',
            'Authorization':''
        },
        body:JSON.stringify({email, password})

    }
    const result  = await fetch(url , options)
    const result_text = await result.text()
    if(result.status === 200){
    return result_text
    }
    else{
        return thunkApi.rejectWithValue(result_text)
    }
    
    
})

const LoginSlice = createSlice({
    name:'LoginSlice', 
    initialState:{
        loading:false,
        jwt_token:null,
        error_msg:''
    },
    reducers:{
        add_jwt_token:(state, action)=>{
            state.jwt_token = action.payload
        },
        remove_jwt_token:(state, action)=>{
            Cookies.remove('authToken')
            state.jwt_token = null
        }
        

    },
    extraReducers:(builder)=>{
        builder.addCase(LoginUser.pending , (state, action)=>{
            state.loading= true
        })
        .addCase(LoginUser.fulfilled, (state, action)=>{
            state.loading =  false
            state.error_msg = ''
            state.jwt_token = action.payload
            Cookies.set('authToken', action.payload, {expires:1})
        })
        .addCase(LoginUser.rejected, (state, action)=>{
            state.loading= false
            state.error_msg = action.payload
        })
    }
})

export default LoginSlice.reducer

export const  {add_jwt_token , remove_jwt_token} = LoginSlice.actions
