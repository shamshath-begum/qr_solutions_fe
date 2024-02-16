import { createSlice } from "@reduxjs/toolkit";

const initialState={
    user:{}
}

export const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
        login:(state,action)=>{
            console.log(action.payload.user)
            state.user=action.payload.user
        }
    }
})

export const {login} = userSlice.actions
export default userSlice.reducer