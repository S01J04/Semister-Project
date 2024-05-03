import {createSlice} from "@reduxjs/toolkit";

const billboardSlice = createSlice({
    name:"Billboard",
    initialState:{
        province:null,
      
    },
    reducers:{
        // multiple actions
        getProvince:(state,action)=>{
            state.province = action.payload;
        },

    }
});
export const {getProvince,} = billboardSlice.actions;
export default billboardSlice.reducer;


