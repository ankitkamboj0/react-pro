import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:["test 1","test 2"]
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action);
        },
        deleteItem:(state,action)=>{
            state.items.slice(0,action);
        },
        clearCart:(state)=>{
            state.items=[]
        }
    }
})

export default cartSlice.reducer;
export const {addItem,deleteItem,clearCart} = cartSlice.actions;