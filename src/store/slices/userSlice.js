import { createSlice } from '@reduxjs/toolkit'
import { createSelector } from '@reduxjs/toolkit'


const initialState = {
    email: null,
    username: null,
    id: null,
    token: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => { 
            state.email = action.payload.email
            state.id = action.payload.id
            state.token = action.payload.token
            state.username = action.payload.username
        },
        removeUser: (state) => { 
            state.email = null
            state.id = null
            state.token = null
            state.username = null
        }
    }
})

const selectUser = createSelector(
    state => state.user.email,
    state => state.user.id,
    state => state.user.token,
    state => state.user.username,
    (email, id, token, username) => ({ email, id, token, username })
)

const { actions, reducer } = userSlice

export default reducer
export { selectUser }
export const { setUser, removeUser } = actions