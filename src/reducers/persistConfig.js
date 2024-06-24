import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // localstorage par défaut

const persistConfig = {
    key: 'root',
    storage,
};

export const persistor = persistStore(store); // Utilisé plus tard
