import { Link } from 'react-router-dom'
import { useFormik } from 'formik'

import FormField from '../components/FormField'
import { StyledForm } from '../styled/StyledForm'
import { FormWrapper } from '../styled/FormWrapper'
import { ReactComponent as LogInIcon} from '../resources/icons/login.svg'
import { FormImage } from '../styled/FormImage'
import { StyledButtonPrimary } from '../styled/StyledButton'

export default function LogInPage() {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validate(values) {
            // const errors = {}

            // if (values.email.length < 5) {
            //     errors.email = 'too short'
            // }

            // return errors
        },
        onSubmit(values) {
            console.log(values)
        }
    })

    return (
        <FormWrapper>
            <StyledForm onSubmit={ formik.handleSubmit }>
                <FormImage>
                    <LogInIcon/>
                </FormImage>

                <FormField 
                    label='email'
                    name='email'
                    type='email' 
                    value={ formik.values.email } 
                    onChange={ formik.handleChange }
                />
                {/* {formik.errors.email} */}
                <FormField 
                    label='password' 
                    name='password'
                    type='password' 
                    value={ formik.values.password } 
                    onChange={ formik.handleChange }
                />

                <StyledButtonPrimary type='submit'>Log in</StyledButtonPrimary>

                <p>Or create new account: <Link to='/signup'>Sign up</Link></p>
            </StyledForm>
        </FormWrapper>
    )
}