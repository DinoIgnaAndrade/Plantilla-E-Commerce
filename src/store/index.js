import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { shopApi } from "../services/shopServices";

import shopReducer from "../features/shopSlice";

const store = configureStore({
    reducer: {
        shopReducer,
        [shopApi.reducerPath]: shopApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(shopApi.middleware)
})

setupListeners(store.dispatch);

export default store;