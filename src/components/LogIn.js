import { Link } from 'react-router-dom'
import * as Yup from 'yup'

import Form from '../components/form/Form'
import { ReactComponent as LogInIcon } from '../assets/icons/login.svg'
import { loginFieldData } from '../data/FormFieldData'


const validationSchema = Yup.object({
    'email': Yup.string().email('Invalid email').required('This field is required'),
    'password': Yup.string().min(6, 'Password is too short!').required('This field is required')
})

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