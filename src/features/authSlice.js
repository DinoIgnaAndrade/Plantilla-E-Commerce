import { createSlice, current } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        name: null,
        phone: null,
        token: null,
        profilePicture: null,
        localId: null,
        location: {
            latitude: null,
            longitude: null,
            address: null,
        }
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload.email
            state.token = action.payload.idToken
            state.localId = action.payload.localId
        },
        setPersonalInfo: (state, action) => {
            state.name = action.payload.name
            state.phone = action.payload.phone
        },
        setProfilePicture: (state, action) => {
            state.profilePicture = action.payload
        },
        setUserLocation: (state, action) => {
            state.location = {
                latitude: action.payload.latitude,
                longitude: action.payload.longitude,
                address: action.payload.address
            }
        },
        logout: (state) => {
            state.user = null,
                state.name = 'User',
                state.phone = '00 0000 0000',
                state.token = null,
                state.profilePicture = null,
                state.localId = null,
                state.location = null
        }

    }
})

export const { setUser, setPersonalInfo, setProfilePicture, setUserLocation, logout } = authSlice.actions

export default authSlice.reducer