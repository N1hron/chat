import { Link } from 'react-router-dom'

import Form from '../form/Form'
import { ReactComponent as LogInIcon } from '../../assets/icons/login.svg'
import { loginFieldData } from '../../data/FormFieldData'
import { FormMessage } from '../form/FormMessage'
import validationSchema from './validationSchema'
import useAuth from '../../hooks/auth.hook'

import { getAuth } from 'firebase/auth'

export default function LogIn() {
    console.log(getAuth().currentUser)
    const { status, handleLogIn } = useAuth()

    return (
        <Form
            icon={ <LogInIcon/> }
            fieldData={ loginFieldData }
            btnLabel='Log in'
            onSubmit={ handleLogIn }
            validationSchema={ validationSchema }
        >
            {status.type === 'error' && status.message && <FormMessage>{ status.message }</FormMessage>}
            <p>Or create new account: <Link to='/unauthorized/signup'>Sign up</Link></p>
        </Form>
    )
}