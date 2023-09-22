import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

import { selectUser } from '../store/slices/userSlice'


export default function RequireUnauthorized({ children }) {
    const { username } = useSelector(selectUser)

    return username ? <Navigate to='/' replace/> : children
}