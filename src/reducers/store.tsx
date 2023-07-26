import { combineReducers, configureStore } from "@reduxjs/toolkit";
import projectSlice from "./projectSlice";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const persistConfig = {
    key: 'project',
    storage,
}

const reducers = combineReducers({project: projectSlice})
const persistedReducer = persistReducer(persistConfig, reducers )

export const store = configureStore({ reducer: persistedReducer, middleware: [thunk] });
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;