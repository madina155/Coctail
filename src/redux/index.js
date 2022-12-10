import {configureStore} from "@reduxjs/toolkit";
import products from './reducers/products'
import oneProduct from './reducers/oneProduct'
import user from "./reducers/user"
import cart from "./reducers/cart"

export const store = configureStore({
    reducer: {
        products,
        oneProduct,
        user,
        cart
    }
})


// import {compose, createStore} from "redux";
// import rootReducer from "./reducers";
// import {composeWithDevTools} from "redux-devtools-extension";
//
// const initialState = {}
//
// const composeFunc = process.env.NODE_ENV === 'development' ? composeWithDevTools : compose
//
//
// const store = createStore(rootReducer(), initialState, composeFunc())
//
// export default store







