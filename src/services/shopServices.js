import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { base_url, api_key } from "./base_url"

export const shopApi = createApi({
    reducerPath: "shopApi",
    baseQuery: fetchBaseQuery({baseUrl:base_url}),
    endpoints: (builder) => ({
        
        getCategories: builder.query({
            query: () => `categories.json`,
        }),
        getProducts: builder.query({
            query: () => `products.json`,
        }),
        getProductsByCategory: builder.query({
            query: (category) => `products.json?orderBy="category"&equalTo="${category}"`,
        }),
        getProductsById: builder.query({
            query: (id) => `products.json?orderBy="id"&equalTo=${id}`,
        }),

        postOrder: builder.mutation({
            query: ({...order}) => ({
                url: `orders/${order.localId}.json`,
                method: 'POST',
                body: order
            })
        }),
        getOrders: builder.query({
            query: (localId) => `orders/${localId}.json?timestamp=${Date.now()}` 
        }),

        putUserLocation: builder.mutation({
            query: ({location, localId})=>({
                url:  `locations/${localId}.json`,
                method: 'PUT',
                body: {
                    latitude: location.latitude,
                    longitude: location.longitude,
                    address: location.address,
                }
            })
        }),
        getUserLocation: builder.query({
            query: (localId) => `locations/${localId}.json`
        }),


    })
})

export const {
    useGetCategoriesQuery, 
    useGetProductsQuery, 
    useGetProductsByCategoryQuery, 
    useGetProductsByIdQuery,

    usePostOrderMutation,
    useGetOrdersQuery,

    useGetUserLocationQuery,
    usePutUserLocationMutation,

} = shopApi