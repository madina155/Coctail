import {createSlice} from "@reduxjs/toolkit";

const userSice = createSlice({
    name: 'user',
    initialState: {
        user: {
            email: '',
            login: '',

        }
    },
    reducers: {
        loginAccount: (state, action) => {
            state.user = action.payload
        },

        logOutAccount: (state, action) => {
            state.user = {
                email: '',
                login: ''
            }
        }
    }
})




export const {loginAccount, logOutAccount} = userSice.actions
export default userSice.reducer








