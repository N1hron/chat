import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { selectUser } from '../store/slices/usersSlice'


export default function RequireAuth({ children }) {
    const { username } = useSelector(selectUser)
    
    return username ? children : <Navigate to='/unauthorized' replace/>
}