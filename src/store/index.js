import { configureStore } from '@reduxjs/toolkit'

import user from './slices/userSlice'


const store = configureStore({
    reducer: { user },
    devTools: true
})

export default store