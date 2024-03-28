import { configureStore, combineReducers } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import sanphamReducer from '../features/sanpham/sanphamSlice';
import authReducer from '../features/user/userSlice';
import dichvuReducer from '../features/Dichvu/dichvuSlice';
import chinhanhReducer from '../features/Chinhanh/chinhanhSlice';
import tctReducer from '../features/Tct/tctSlice';
import lichhenReducer from '../features/Lichhen/lichhenSlice';
import chReducer from "../features/Ch/chSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'


import cartReducer from './slice/cartSlice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  blacklist: ["auth", "counter", "SanPhams", "dichvu", "chinhanh", "tct", "lichhen", "ch" ],
};
const rootReducer = combineReducers({
    auth: authReducer,
    counter: counterReducer,
    SanPhams: sanphamReducer,
    dichvu: dichvuReducer,
    chinhanh: chinhanhReducer,
    tct: tctReducer,
    lichhen: lichhenReducer,
    ch: chReducer,
    carts: cartReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export let persistor = persistStore(store);
