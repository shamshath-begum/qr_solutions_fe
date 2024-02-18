import { createSlice } from "@reduxjs/toolkit";

const initialState={
    user:{}
}

export const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
        login:(state,action)=>{
            console.log(action.payload.user.firstName)
            state.firstName=action.payload.user.firstName
            state.lastName=action.payload.user.lastName
            state.password=action.payload.user.password
            state.cpassword=action.payload.user.cpassword
            state.role=action.payload.user.role
            
        },
        logout: (state, action) => {
           
            state.firstName = "";
            state.lastName= "";
            state.email = "";
            state.cpassword="";
            state.role="";
            state. password="";

        },
    }
})

export const {login,logout} = userSlice.actions
export default userSlice.reducer