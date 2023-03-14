import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    error: null,
    isAuth: false,
    isRemember: false,
};

const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        loginPending: (state) => {
            state.isLoading = true;
        },
        loginSuccess: (state) => {
            state.isLoading = false;
            state.error = null;
            state.isAuth = true;
        },
        loginFailed: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        loginRemember: (state, action) => {
            state.isRemember = action.payload   ;
        },
        logOut: (state) => {
            state.isAuth = false;
        },
    },
});

const { reducer, actions } = loginSlice;

export const {
    loginPending,
    loginSuccess,
    loginFailed,
    loginRemember,
    logOut,
} = actions;

export default reducer;