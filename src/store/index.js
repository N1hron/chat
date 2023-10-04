import { configureStore } from '@reduxjs/toolkit'

import user from './slices/userSlice'
import avatarEditor from './slices/avatarEditorSlice'


const store = configureStore({
    reducer: { user, avatarEditor },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false
    }),
    devTools: true
})

export default store