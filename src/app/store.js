import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import playerSideReducer from "../utils/playerSideSlice";
import turnReducer from '../utils/turnSlice';
//Redux-Persist
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
    playerOneSide : playerSideReducer,
    turn: turnReducer
})

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

let store;
export default store = configureStore({
   reducer: persistedReducer,
   middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
        serializableCheck: {
            ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        },
    }),
})

export const persistor = persistStore(store)