import {createSlice} from "@reduxjs/toolkit";

const cart =  createSlice({

    name: 'cart',
    initialState: {
        data:[],
        dataLength: 0
    },
    reducers: {
        addCart: (state, action) => {
            const itemCart = state.data.find((item) => item.id === action.payload.id)
            if(itemCart){
                itemCart.count++
            } else {
                state.data.push({ ...action.payload, count: 1})
            }
        },
        removeCart: (state, action) => {
            const removeCart = state.data.filter((item) => item.id !== action.payload);
            state.data = removeCart;
        },

    },


})

export const {addCart, removeCart} = cart.actions
export default cart.reducer














