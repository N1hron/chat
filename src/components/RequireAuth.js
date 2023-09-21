import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

import { userSelector } from '../store/slices/userSlice'

export default function RequireAuth({ children }) {
    const { email } = useSelector(userSelector)

    return email ? children : <Navigate to='/unauthorized/login' replace/>
}