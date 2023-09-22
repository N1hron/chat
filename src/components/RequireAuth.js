import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { selectUser } from '../store/slices/userSlice'


export default function RequireAuth({ children }) {
    const { username } = useSelector(selectUser)
    
    return username ? children : <Navigate to='/unauthorized' replace/>
}