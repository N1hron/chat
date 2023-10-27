import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut,
    updateProfile
} from 'firebase/auth'

import { auth } from '../firebase'
import useFirestore from './firestore.hook'
import useStatus from './status.hook'
import { setUser, removeUser } from '../store/slices/usersSlice'


export default function useAuth() {
    const dispatch = useDispatch(),
          navigate = useNavigate(),
          { addUserToDatabase } = useFirestore(),
          { status, setLoading, setSuccess, setError } = useStatus()
          
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

    function handleSignUp({ email, password, username }) {
        setLoading()

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const { user } = userCredential

                updateProfile(user, { displayName: username })
                    .then(() => addUserToDatabase(user))
                    .then(() => onUserSet(user))
            })
            .catch((error) => {
                setError(
                    error.code === 'auth/email-already-in-use' ? 
                    'This email is already in use' : 'Something went wrong...'
                )
            })
    }

    function handleLogIn({ email, password }) {
        setLoading()

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => onUserSet(userCredential.user))
            .catch((error) => {
                setError(
                    error.code === 'auth/invalid-login-credentials' ? 
                    'Wrong email or password' : 'Something went wrong...'
                )
            })
    }

    function handleLogOut() {
        signOut(auth)
            .then(() => dispatch(removeUser()))
    }

    return { 
        status, 
        handleSignUp, 
        handleLogIn, 
        handleLogOut 
    }
}