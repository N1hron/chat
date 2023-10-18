import { configureStore } from '@reduxjs/toolkit'

import users from './slices/usersSlice'
import avatarEditor from './slices/avatarEditorSlice'


const store = configureStore({
    reducer: { users, avatarEditor },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false
    }),
    devTools: true
})

export default store