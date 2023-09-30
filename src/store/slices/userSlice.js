import { createSlice } from '@reduxjs/toolkit'
import { createSelector } from '@reduxjs/toolkit'


const initialState = {
    email: null,
    username: null,
    id: null,
    photoUrl: 'https://sun9-44.userapi.com/impg/baVqGPgrfNuusT42x4AXx_8TlwhBSQ_OF5u2Dw/zoU0p3eyjxc.jpg?size=1650x2131&quality=95&sign=25ba674de385633d9a6f2c2d6f84b1b3&type=album'
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => { 
            state.email = action.payload.email
            state.id = action.payload.id
            state.username = action.payload.username
        },
        removeUser: (state) => { 
            state.email = null
            state.id = null
            state.username = null
        }
    }
})

const selectUser = createSelector(
    state => state.user.email,
    state => state.user.id,
    state => state.user.username,
    state => state.user.photoUrl,
    (email, id, username, photoUrl) => ({ email, id, username, photoUrl })
)

const { actions, reducer } = userSlice

export default reducer
export { selectUser }
export const { setUser, removeUser } = actions