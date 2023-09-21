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
            const { email, id, token, username } = action.payload
            state.email = email
            state.id = id
            state.token = token
            state.username = username
         },
        removeUser: (state) => { state = initialState }
    }
})

const userSelector = createSelector(
    state => state.user.email,
    state => state.user.id,
    state => state.user.token,
    state => state.user.username,
    (email, id, token, username) => ({ email, id, token, username })
)

const { actions, reducer } = userSlice


export default reducer
export { userSelector }
export const { setUser, removeUser } = actions