import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getShortUrl = createAsyncThunk('MiniurlSlice', async(payload, thunkApi)=>{
    const {input_url} = payload
    const state = thunkApi.getState()
    console.log(state)
    const jwt_token = state.LoginSlice.jwt_token
    console.log(jwt_token)
    const url = 'http://localhost:3000/short-url'
    const options = {
      method:'PUT',
      headers:{
        'Content-Type':'Application/json',
        'Accept':'Application/json',
        Authorization:`Bearer ${jwt_token}`
      },
      body:JSON.stringify({input_url})
    }
    const response = await fetch(url, options)
    const result_text = await response.text()

    if(result.status === 200){
        return result_text
        }
        else{
            return thunkApi.rejectWithValue(result_text)
        }
    
        
    }
)

const MiniurlSlice = createSlice({
    name:'MiniurlSlice', 
    initialState:{
        loading:false,
        short_url:null,
        error_msg:''
    }, 
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(getShortUrl.pending, (state, action)=>{
            state.loading = true
        })
        .addCase(getShortUrl.fulfilled, (state, action)=>{
            state.loading = false
            state.short_url = action.payload
        })
        .addCase(getShortUrl.rejected , (state, action)=>{
            state.loading = false
            state.error_msg = action.payload
        })
    }
    
})

export default MiniurlSlice.reducer