import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const sendUsertoDB = createAsyncThunk("data/fetch", async(payload, thunkApi)=>{
    console.log(payload)
    const {name, email } = payload 
    const url = 'http://localhost:3000/user-registration'
    const options = {
        method:'PUT', 
        headers:{
            'Content-Type':'Application/json',
            'Accept':'Application/json',
            'Authorization':''
        },
        body:JSON.stringify({name, email})

    }

        const response = await fetch(url, options)
        const text = await response.text()
        return text
    }
)

const userSlice = createSlice({
    name:'userSlice',
    initialState:{
        user_id:'',
        loading:false, 
        result:''
    },
    reducers:{
        changeUser_id:(state, action)=>{
            state.user_id = action.payload
           
        },
        
    },
    extraReducers:(builder)=>{
        builder.addCase(sendUsertoDB.pending,(state, action)=>{
            state.loading = true
        })
        .addCase(sendUsertoDB.fulfilled,(state, action)=>{  
            state.loading = false
            state.result = action.payload
            console.log(action.payload)

        }).addCase(sendUsertoDB.rejected , (state, action)=>{
            state.loading = false, 
            state.result = 'Error'

        })
    }
})


export const {}  = userSlice.actions;

export default userSlice.reducer;