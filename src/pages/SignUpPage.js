import { Link } from 'react-router-dom'

import Input from '../components/FormField'
import { StyledForm } from '../styled/StyledForm'
import { FormWrapper } from '../styled/FormWrapper'
import { ReactComponent as LogInIcon} from '../resources/icons/login.svg'
import { FormImage } from '../styled/FormImage'
import { StyledButtonPrimary } from '../styled/StyledButton'

export default function SignUpPage() {
    return (
        <FormWrapper>
            <StyledForm>
                <FormImage>
                    <LogInIcon/>
                </FormImage>
                <Input label='email' type='email'/>
                <Input label='password' type='password'/>
                <Input label='confirm password' type='password'/>
                <StyledButtonPrimary type='submit'>Sign up</StyledButtonPrimary>
                <p>Already have an account? <Link to='/login'>Log in</Link></p>
            </StyledForm>
        </FormWrapper>
    )
}