import { createAsyncThunk, createSlice, isRejectedWithValue } from "@reduxjs/toolkit";

export const sendUsertoDB = createAsyncThunk("data/fetch", async(payload, thunkApi)=>{
    
    const {name, email, password } = payload 
    const url = 'http://localhost:3000/user-registration'
    const options = {
        method:'PUT', 
        headers:{
            'Content-Type':'Application/json',
            'Accept':'Application/json',
            'Authorization':''
        },
        body:JSON.stringify({name, email, password})

    }

        const response = await fetch(url, options)
        if(response.status === 400){
            isRejectedWithValue('error')
        }
        const text = await response.json()
        
        return text.id
        
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
            state.user_id = action.payload
            state.result='success'

        }).addCase(sendUsertoDB.rejected , (state, action)=>{
            state.loading = false, 
            state.result = 'Error'

        })
    }
})


export const {}  = userSlice.actions;

export default userSlice.reducer;