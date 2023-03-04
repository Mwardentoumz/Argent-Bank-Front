import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './pages/SignIn/loginSlice';
import profilReducer from './pages/User/userSlice';


const store = configureStore({
    reducer: {
        // first slice that is the login slice
        login: loginReducer,
        profil: profilReducer,
        // second slice that is the user/profile slice
        // user: userReducer,
    },
});

export default store;