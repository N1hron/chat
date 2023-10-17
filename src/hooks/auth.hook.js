import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut,
    updateProfile
} from 'firebase/auth'

import { auth } from '../firebase'
import useStatus from './status.hook'
import useFirestore from './firestore.hook'
import { setUser, removeUser } from '../store/slices/userSlice'


export default function useAuth() {
    const { status, setLoading, setSuccess, setError } = useStatus()
    const { addUserToDatabase } = useFirestore()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    function onUserSet(user) {
        dispatch(setUser({ 
            email: user.email, 
            username: user.displayName,
            id: user.uid,
            photoURL: user.photoURL
        }))
        setSuccess()
        navigate('/')
    }

    const handleLogOut = () => signOut(auth).then(() => dispatch(removeUser()))

    function handleSignUp({ email, password, username }) {
        setLoading()

        createUserWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                updateProfile(user, { displayName: username })
                    .then(() => addUserToDatabase(user.uid, user.displayName))
                    .then(() => onUserSet(user))
            })
            .catch(({ message, code }) => {
                // console.error(`${ message }: ${ code }`)
                setError(code === 'auth/email-already-in-use' ? 'This email is already in use' : 'Something went wrong...')
            })
    }

    function handleLogIn({ email, password }) {
        setLoading()

        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => onUserSet(user))
            .catch(({ message, code }) => {
                // console.error(`${ message }: ${ code }`)
                setError(code === 'auth/invalid-login-credentials' ? 'Wrong email or password' : 'Something went wrong...')
            });
    }

    return { status, handleSignUp, handleLogIn, handleLogOut }
}