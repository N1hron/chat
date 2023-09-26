import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut,
    updateProfile
} from 'firebase/auth'

import useStatus from './status.hook'
import { setUser, removeUser } from '../store/slices/userSlice'


export default function useAuth() {
    const { status, setLoading, setSuccess, setError } = useStatus()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const auth = getAuth()

    function handleLogOut() {
        signOut(auth)
            .then(() => {
                dispatch(removeUser())
            })
            .catch(console.error)
    }

    function handleSignUp({ email, password, username }) {
        setLoading()

        createUserWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                updateProfile(user, { displayName: username })

                setSuccess()
                navigate('/')
            })
            .catch(({ message, code }) => {
                console.error(`${ message }: ${ code }`)

                setError(code === 'auth/email-already-in-use' ? 'This email is already in use' : 'Something went wrong...')
            })
    }

    function handleLogIn({ email, password }) {
        setLoading()

        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(setUser({ 
                    email: user.email, 
                    username: user.displayName,
                    id: user.uid,
                    token: user.accessToken
                }))

                setSuccess()
                navigate('/')
            })
            .catch(({ message, code }) => {
                console.error(`${ message }: ${ code }`)

                setError(code === 'auth/invalid-login-credentials' ? 'Wrong email or password' : 'Something went wrong...')
            });
    }

    return { status, handleSignUp, handleLogIn, handleLogOut }
}