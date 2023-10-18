import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    currentUser: {
        email: null,
        username: null,
        id: null,
        photoURL: null
    },
    users: []
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUser: (state, action) => { 
            state.currentUser.email = action.payload.email
            state.currentUser.id = action.payload.id
            state.currentUser.username = action.payload.username
            state.currentUser.photoURL = action.payload.photoURL
        },
        removeUser: (state) => { 
            state.currentUser.email = null
            state.currentUser.id = null
            state.currentUser.username = null
            state.currentUser.photoURL = null
        },
        setUsers: (state, action) => { state.users = action.payload },
        setPhotoURL: (state, action) => { state.currentUser.photoURL = action.payload }
    }
})

export const selectUser = state => state.users.currentUser
export const selectUsername = state => state.users.currentUser.username
export const selectUserId = state => state.users.currentUser.id
export const selectUsers = state => state.users.users

const { actions, reducer } = usersSlice

export default reducer
export const { setUser, removeUser, setPhotoURL, setUsers } = actions