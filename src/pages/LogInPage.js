import { Link } from 'react-router-dom'
import Form from '../components/form/Form'
import { ReactComponent as LogInIcon } from '../resources/icons/login.svg'

const fieldsData = [
    {
        label: 'email',
        name: 'email',
        type: 'email'
    },
    {
        label: 'password',
        name: 'password',
        type: 'password'
    }
]

export default function LogInPage() {

    return (
        <Form
            icon={ <LogInIcon/> }
            fieldsData={ fieldsData }
            btnLabel='Log in'
            onSubmit={ (values) => {console.log(values)} }
        >
            <p>Or create new account: <Link to='/signup'>Sign up</Link></p>
        </Form>
    )
}