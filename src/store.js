import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userReducer.js';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
    reducer: {
        user: persistedReducer,
    },
});

export const persistor = persistStore(store);
