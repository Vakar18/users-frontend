import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import teamReducer from './slices/teamSlice';

export const store = configureStore({
    reducer: {
        users: userReducer,
        team: teamReducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export default store;
