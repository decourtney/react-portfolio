import projectSlice from "./projectSlice";
import { configureStore } from "@reduxjs/toolkit";

import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, { project: projectSlice })

const store = configureStore({ reducer: persistedReducer, middleware: [thunk] });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default persistor = persistStore(store);
