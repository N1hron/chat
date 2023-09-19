import { Link } from 'react-router-dom'

import Form from '../form/Form'
import validationSchema from './validationSchema'
import { ReactComponent as SignUpIcon } from '../../assets/icons/registration.svg'
import { signupFieldData } from '../../data/FormFieldData'
import { FormMessage } from '../form/FormMessage'
import useAuth from '../../hooks/auth.hook'


export default function SignUp() {
    const { status, handleSignUp } = useAuth()

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