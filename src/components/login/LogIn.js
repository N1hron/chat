import { Link } from 'react-router-dom'

import Form from '../form/Form'
import { ReactComponent as LogInIcon } from '../../assets/icons/login.svg'
import { loginFieldData } from '../../data/FormFieldData'
import validationSchema from './validationSchema'

export default function LogIn() {
    return (
        <Form
            icon={ <LogInIcon/> }
            fieldData={ loginFieldData }
            btnLabel='Log in'
            onSubmit={ (values) => {console.log(values)} }
            validationSchema={ validationSchema }
        >
            <p>Or create new account: <Link to='/unauthorized/signup'>Sign up</Link></p>
        </Form>
    )
}