import { createSlice } from '@reduxjs/toolkit'
import { createSelector } from '@reduxjs/toolkit'


const initialState = {
    email: null,
    username: null,
    id: null,
    photoURL: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => { 
            state.email = action.payload.email
            state.id = action.payload.id
            state.username = action.payload.username
            state.photoURL = action.payload.photoURL
        },
        removeUser: (state) => { 
            state.email = null
            state.id = null
            state.username = null
            state.photoURL = null
        }
    }
})

export const selectUser = state => state.user
export const selectUsername = state => state.user.username

const { actions, reducer } = userSlice

export default reducer
export const { setUser, removeUser } = actions