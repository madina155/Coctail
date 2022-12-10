import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "../../utils/axios";
export const getOneProduct = createAsyncThunk(
    "oneProduct/getOneProduct",
    async (id, {rejectWithValue}) => {
        try {
            const res = await axios(`/catalog/${id}`)
            if (res.statusText !== 'OK') {
                throw new Error('Server error !')
            }
            return res.data

        } catch (err) {
            return rejectWithValue(err.message)
        }
    }
)
const oneProduct =  createSlice({
    name: 'oneProduct',
    initialState: {
        product: {},
        status: '',
        error: ''
    },
    reducers: {},

    extraReducers: {
        [getOneProduct.pending] : (state) => {
            state.status = 'loading'
            state.error = ''
        },

        [getOneProduct.rejected] : (state ,action) => {
            state.status = 'error'
            state.error = action.payload
        },

        [getOneProduct.fulfilled] : (state ,action) => {
            state.status = 'resolve'
            state.error = ''
            state.product = action.payload
        },
    }

})

export default oneProduct.reducer














