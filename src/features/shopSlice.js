import { createSlice } from "@reduxjs/toolkit";

export const shopSlice = createSlice({
    name:"shop",
    initialState: {
        categorySelected: "",
        productIdSelected: 0,
        categories: [],
        products: [],
        productsFilteredByCategory: [],
        productSelected: {},
    },
    reducers: {
        setCategorySelected: (state, action) => {
            state.categorySelected = action.payload
            state.productsFilteredByCategory = state.products.filter(product=>product.category===state.categorySelected)
        },
        setProductIdSelected: (state, action) => {
            state.productIdSelected = action.payload
        },
        setProductSelected: (state, action) => {
            state.productSelected = action.payload
        }
    }
})

export const {setCategorySelected, setProductIdSelected, setProductSelected} = shopSlice.actions

export default shopSlice.reducer