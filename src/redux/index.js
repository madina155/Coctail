import {configureStore} from "@reduxjs/toolkit";
import products from './reducers/products'
import oneProduct from './reducers/oneProduct'
import user from "./reducers/user"
import cart from "./reducers/cart"
import favorites from "./reducers/favorites"

export const store = configureStore({
    reducer: {
        products,
        oneProduct,
        user,
        cart,
        favorites
    }
})








