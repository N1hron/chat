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

export const selectUser = createSelector(
    state => state.user.email,
    state => state.user.id,
    state => state.user.username,
    state => state.user.photoURL,
    (email, id, username, photoURL) => ({ email, id, username, photoURL })
)

const { actions, reducer } = userSlice

export default reducer
export const { setUser, removeUser } = actions