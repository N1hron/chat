import { Link } from 'react-router-dom'
import Form from '../components/form/Form'
import { ReactComponent as SignUpIcon } from '../resources/icons/registration.svg'

const fieldsData = [
    {
        label: 'email',
        name: 'email',
        type: 'email'
    },
    {
        label: 'username',
        name: 'username',
        type: 'text'
    },
    {
        label: 'password',
        name: 'password',
        type: 'password'
    },
    {
        label: 'confirm password',
        name: 'passwordConfirm',
        type: 'password'
    }
]

export default function LogInPage() {

    return (
        <Form
            icon={ <SignUpIcon/> }
            fieldsData={ fieldsData }
            btnLabel='Sign up'
            onSubmit={ (values) => {console.log(values)} }
        >
            <p>Already have an account? <Link to='/unauthorized/login'>Log in</Link></p>
        </Form>
    )
}