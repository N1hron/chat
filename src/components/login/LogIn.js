import { Link } from 'react-router-dom'

import Form from '../form/Form'
import { ReactComponent as LogInIcon } from '../../assets/icons/login.svg'
import { loginFieldData } from '../../data/FormFieldData'
import validationSchema from './validationSchema'
import useAuth from '../../hooks/auth.hook'


export default function LogIn() {
    const { status, handleLogIn } = useAuth()

    return (
        <Form
            icon={ <LogInIcon/> }
            fieldData={ loginFieldData }
            btnLabel='Log in'
            onSubmit={ handleLogIn }
            validationSchema={ validationSchema }
            status={ status }
        >
            <p>Or create new account: <Link to='/unauthorized/signup'>Sign up</Link></p>
        </Form>
    )
}
