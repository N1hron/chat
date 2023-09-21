import useStatus from './status.hook'
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    updateProfile
} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { setUser } from '../store/slices/userSlice'


export default function useAuth() {
    const { status, setLoading, setSuccess, setError } = useStatus()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const auth = getAuth()

    function handleSignUp({ email, password, username }) {
        setLoading()

        createUserWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                updateProfile(user, {
                    displayName: username
                })

                console.log(user)

                setSuccess()
            })
            .catch(({ message, code }) => {
                console.error(`${ message }: ${ code }`)
                
                if (code === 'auth/email-already-in-use') setError('This email is already in use')
                else setError()
            })
    }

    function handleLogIn({ email, password }) {
        setLoading()

        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                const data = { 
                    email: user.email, 
                    username: user.displayName,
                    id: user.uid,
                    token: user.accessToken
                }
                console.log(data)

                dispatch(setUser(data))
                setSuccess()
                navigate('/')
            })
            .catch(({ message, code }) => {
                console.error(`${ message }: ${ code }`)

                if (code === 'auth/invalid-login-credentials') setError('Invalid email or password')
                else setError()
            });
    }

    return { status, handleSignUp, handleLogIn }
}