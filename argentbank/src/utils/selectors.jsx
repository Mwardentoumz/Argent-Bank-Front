export const selectUserLogin = (state) => state.user.isLoggedIn;

export const selectUserToken = (state) => state.user.JWTtoken;

export const selectUserData = (state) => state.user.userData;

export const selectFirstName = (state) => state.user.userData.firstName;

export const selectLastName = (state) => state.user.userData.lastName;