import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "../../utils/axios";
export const getProducts = createAsyncThunk(
    'products/getProducts',
    async (filter, rejectWithValue) => {
        try {

            const res = await axios(`/catalog`)
            if (res.statusText !== 'OK') {
                throw new Error('Server error !')
            }
            return res.data
        } catch (err) {
            return rejectWithValue(err.message)
        }
    }



)
const productsSlice = createSlice({
    name: 'products',
    initialState: {
        data: [],
        dataLength: 0,
        filter: {
            size: '',
            price: '',
            search: ''
        },
        favorites: [],
        cart: [],
        status: '',
        error: ''
    },
    reducers: {

        changeSizes: (state , action) => {
            state.filter.size = action.payload
        },
        changePrices: (state, action) => {
            state.filter.price = action.payload
        },
        changeSearch: (state, action) => {
            state.filter.search = action.payload
        }

    },


    extraReducers: {
        [getProducts.pending] : (state ) => {
            state.status = 'loading'
            state.error = ''
        },

        [getProducts.rejected] : (state ,action) => {
            state.status = 'error'
            state.error = action.payload
        },

        [getProducts.fulfilled] : (state ,action) => {
            state.status = 'resolve'
            state.error = ''
            state.data = action.payload
            state.dataLength = action.payload.length
        },
    }
})

export const {changeSizes, changePrices, changeSearch} = productsSlice.actions

export default productsSlice.reducer







