import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { shopApi } from "../services/shopServices";
import { authApi } from "../services/authServices";

import shopReducer from "../features/shopSlice";
import authReducer from "../features/authSlice";
import cartReducer  from './../features/cartSlice';

const store = configureStore({
    reducer: {
        shopReducer,
        authReducer,
        cartReducer,
        [shopApi.reducerPath]: shopApi.reducer,
        [authApi.reducerPath]: authApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(shopApi.middleware).concat(authApi.middleware)
})

setupListeners(store.dispatch);

export default store;