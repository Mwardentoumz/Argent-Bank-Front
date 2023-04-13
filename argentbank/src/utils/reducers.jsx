import { createReducer, createAction } from "@reduxjs/toolkit";

export const logIn = createAction("LOG_IN");
export const logOut = createAction("LOG_OUT");
export const setUserData = createAction("SET_USER_DATA");
export const updateUserData = createAction("UPDATE_USER_DATA");

const initialState = {
    name : 'userReducer',
    isLoggedIn: false,
    JWTtoken : null,
    userData : {},
};

export default createReducer(initialState, (builder) => {
    builder
        .addCase(logIn, (draft, JWTtoken) => {
            if (draft.isLoggedIn === false) {
                draft.isLoggedIn = true;
                draft.JWTtoken = JWTtoken.payload;
                return
            }
            if(draft.isLoggedIn === true) {
                console.log('User is already logged in');
                return
            }
        })
        .addCase(logOut, (draft) => {
            if (draft.isLoggedIn === true) {
                draft.isLoggedIn = false;
                draft.userData = {};
                draft.JWTtoken = null;
                return
            }
            if(draft.isLoggedIn === false) {
                console.log('User is already logged out');
                return
            }
        })
        .addCase(setUserData, (draft, userData) => {
            draft.userData = userData.payload;
        })
        .addCase(updateUserData, (draft, userData) => {
            draft.userData = userData.payload;
        })
});
