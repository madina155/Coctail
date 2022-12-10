import {createSlice} from "@reduxjs/toolkit";

import axios from "../../utils/axios";
// export const setCart = createAsyncThunk(
//     'cart/getCart',
//     async (filter, rejectWithValue) => {
//         try {
//
//             const res = await axios.post(`/cart`)
//             if (res.statusText !== 'OK') {
//                 throw new Error('Server error !')
//             }
//             return res.data
//         } catch (err) {
//             return rejectWithValue(err.message)
//         }
//     }



// )
const cart =  createSlice({

    name: 'cart',
    initialState: {
        data:[],
        dataLength: 0
    },
    reducers: {
        addCart: (state, action) => {
            state.data = [...state.data, action.payload]
            state.dataLength += 1
        },
        removeCart: (state, action) => {
            state.data = [...state.data, action.payload]
            state.dataLength -= 1
        },

    },


})

export const {addCart, removeCart} = cart.actions
export default cart.reducer














