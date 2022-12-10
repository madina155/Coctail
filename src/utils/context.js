import React, {createContext, useReducer, useState} from 'react';
// import axios from "axios";


export const CustomContext = createContext()

export const reducer = (state, action) => {
    switch (action.type) {
        case 'set_favorites' :
            console.log(state.catalog.products.data)
            return {
                ...state,
                favorites: {
                    data: [...state.favorites.data, state.catalog.products.data.find(el => el.id == action.payload)],
                    dataLength: state.favorites.dataLength + 1
                }
            }

        case 'delete_favorites' :
            return {
                ...state,
                favorites: {
                    data: [...state.favorites.data.filter((el) => el.id !== action.payload)],
                    dataLength: state.favorites.dataLength - 1
                }
            }

        case 'set_carts' :
            return {
                ...state,
                cart: {
                    data: [...state.cart.data, state.products.data.find(el => el.id == action.payload)],
                    dataLength: state.cart.dataLength + 1
                }
            }
            case 'delete_carts' :
            return {
                ...state,
                cart: {
                    data: [...state.cart.data.filter((el) => el.id !== action.payload)],
                    dataLength: state.cart.dataLength - 1
                }
            }

        default :
            return state
    }
}

function init (initialState) {
    return {...initialState}
}


const Context = (props) => {

    const [accordion, setAccordion] = useState(false)
    const [gender, setGender] = useState({
        data: [],
        error: ''
    })
    const [state, dispatch] = useReducer( reducer, {
        catalog: {
            gender: 'woman',
            category: 'blouse',
            price: '',
            size: '',
            products: {
                data: [],
                error: '',
                dataLength: 0
            }
        },

        favorites: {
            data: [],
            dataLength: 0,

        },
        cart: {
            data: [],
            dataLength: 0,
        }
    }, init)
    const setProductForFavorites = (id) => {
        dispatch({type: 'set_favorites', payload: id})
    }
    const deleteProductForFavorites = (id) => {
        dispatch({type: 'delete_favorites', payload: id})
    }
    const setProductForCarts = (id) => {
        dispatch({type: 'set_carts', payload: id})
    }
    const deleteProductForCart = (id) => {
        dispatch({type: 'delete_carts', payload: id})
    }
    const value = {
        state, dispatch,
        accordion, setAccordion,
        setProductForFavorites,
        deleteProductForFavorites,
        setProductForCarts,
        deleteProductForCart,
        gender, setGender,

    }


    return (
        <CustomContext.Provider value={value}>
            {props.children}
        </CustomContext.Provider>
    );
};

export default Context;








