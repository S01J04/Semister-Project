import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:{
        user:null,
      
    },
    reducers:{
        // multiple actions
        getUser:(state,action)=>{
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = null;
        },

    }
});
export const {getUser,logout} = userSlice.actions;
export default userSlice.reducer;