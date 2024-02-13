import { createSlice, current } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        updatedAt: Date.now().toLocaleString(),
        total: 0,
        items: []
    },
    reducers: {
        addItem: (state, action) => {

            const isProductInCart = state.items.find(item => item.id === action.payload.id)
            if (!isProductInCart) {
                state.items.push(action.payload)
                const total = - state.items.reduce(
                    (acc, current) => acc += current.price * current.quantity, 0
                )
                state.total = total
                state = {
                    ...state,
                    total,
                    updatedAt: Date.now().toLocaleString()
                }
            } else {
                const itemsUpdate = state.items.map(item => {
                    if (item.id === action.payload.id) {
                        item.quantity += action.payload.quantity
                        return item
                    }
                    return item
                })
                const total = itemsUpdate.reduce(
                    (acc, current) => acc += current.price * current.quantity, 0
                )
                state.total = total
                state = {
                    ...state,
                    item: itemsUpdate,
                    total,
                    updatedAt: Date.now().toLocaleString()
                }
            }
        },
        removeItem: (state, action) => {
            const index = state.items.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                if (state.items[index].quantity === 1) {
                    state.items.splice(index, 1); // Si la cantidad es 1, eliminar el artículo del carrito
                } else {
                    state.items[index].quantity -= 1; // Si la cantidad es mayor que 1, reducir la cantidad en 1
                }
            }
            state.total = state.items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
            state.updatedAt = Date.now().toLocaleString();
        },
        removeAll: (state, action) => {
            state.total = 0;
            state.items = [];
        }
    }
})

export const { addItem, removeItem, removeAll } = cartSlice.actions

export default cartSlice.reducer