import useStatus from './status.hook'
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'


export default function useAuth() {
    const { status, setLoading, setSuccess, setError } = useStatus()

    function handleSignUp({ email, password, username }) {
        setLoading()

        const auth = getAuth()
        
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user

                updateProfile(user, {
                    displayName: username
                })

                console.log(user)

                setSuccess()
            })
            .catch((error) => {
                console.error(`${ error.message }: ${ error.code }`)
                
                if (error.code === 'auth/email-already-in-use') setError('This email is already in use')
                else setError()
            })
    }

    return { status, handleSignUp }
}