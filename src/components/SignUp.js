import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import * as Yup from 'yup'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

import Form from '../components/form/Form'
import { ReactComponent as SignUpIcon } from '../assets/icons/registration.svg'
import { signupFieldData } from '../data/FormFieldData'
import { FormMessage } from './form/FormMessage'


const validationSchema = Yup.object({
    'email': Yup.string().matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, 'Invalid email').required('This field is required'),
    'password': Yup.string().min(6, 'Password is too short!').required('This field is required'),
    'username': Yup.string().min(3, 'Username is too short!').required('This field is required'),
    'passwordConfirm': Yup.string().oneOf([Yup.ref('password')], 'Passwords don\'t match').required('This field is required')
})

export default function SignUp() {
    const [status, setStatus] = useState({
        type: 'idle',
        message: ''
    })

    useEffect(() => {
        console.log(status)
    }, [status])

    function handleSignUp({ email, password, username }) {
        setStatus({ 
            type: 'loading',
            message: ''
        })

        const auth = getAuth()

        
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user
                // user.updateDisplayName(username)
                // console.log(user)

                setStatus({ 
                    type: 'success',
                    message: ''
                })

                
            })
            .catch((error) => {
                console.error(`${ error.message }: ${ error.code }`)
                if (error.code === 'auth/email-already-in-use') {
                    setStatus({
                        type: 'error',
                        message: 'This email is already in use'
                    })
                } else {
                    setStatus({ 
                        type: 'error',
                        message: ''
                    })
                }
            })
    }

    return (
        <Form
            icon={ <SignUpIcon/> }
            fieldData={ signupFieldData }
            btnLabel='Sign up'
            onSubmit={ handleSignUp }
            validationSchema={ validationSchema }
        >
            {status.type === 'error' && <FormMessage>{ status.message }</FormMessage>}
            <p>Already have an account? <Link to='/unauthorized/login'>Log in</Link></p>
        </Form>
    )
}