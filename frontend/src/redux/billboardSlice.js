import {createSlice} from "@reduxjs/toolkit";

const billboardSlice = createSlice({
    name:"Billboard",
    initialState:{
        province:null,
        data:null,
        order:null
      
    },
    reducers:{
        // multiple actions
        getProvince:(state,action)=>{
            state.province = action.payload;
        },
        getOrders:(state,action)=>{
            state.province = action.payload;
        },
        getAllcities:(state,action)=>{
            state.data = action.payload;
        },


    }
});
export const {getProvince,getAllcities,getOrder} = billboardSlice.actions;
export default billboardSlice.reducer;


