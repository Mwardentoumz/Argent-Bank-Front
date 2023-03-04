import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    firstName: "",
    lastName: "",
    error: "",
};

const userSlice = createSlice({
    name:"profil",
    initialState,
    reducers: {
        profilPending: (state) => {
            state.isLoading = true;
        },
        profilFirstName: (state, action) => {
            state.isLoading = false;
            state.firstName = action.payload;
            state.error = "";
        },
        profilLastName: (state, action) => {
            state.isLoading = false;
            state.lastName = action.payload;
            state.error = "";
        },
        profilError: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        profilLogout: (state) => {
            state.isLoading = false;
            state.firstName = "";
            state.lastName = "";
            state.error = "";
        },
    },
});

const { reducer, actions } = userSlice;

export const { profilPending, profilFirstName, profilLastName, profilError, profilLogout } = actions;

export default reducer;