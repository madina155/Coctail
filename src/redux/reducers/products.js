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
            size: ''
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

        setFavoritesProduct: (state , action) => {
            state.favorites = [...state.favorites, state.data.find(el => el.id === action.payload)];
        },
        removeFavoritesProduct: (state , action) => {
            state.favorites = state.favorites.filter(el=> el.id !== action.payload)
        },


         setCartProduct : (state , action) => {
            state.cart = [...state.cart, state.data.find(el => el.id === action.payload)];
         },

        removeCartProduct: (state , action) => {
            state.cart = state.cart.filter(el=> el.id !== action.payload)
        },



    },


    extraReducers: {
        [getProducts.pending] : (state ,action) => {
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

export const {setFavoritesProduct, removeFavoritesProduct, setCartProduct, removeCartProduct, changeSizes} = productsSlice.actions

export default productsSlice.reducer







