import { Link } from 'react-router-dom'

import Input from '../components/FormField'
import { StyledForm } from '../styled/StyledForm'
import { FormWrapper } from '../styled/FormWrapper'
import { ReactComponent as SignUpIcon} from '../resources/icons/registration.svg'
import { FormImage } from '../styled/FormImage'
import { StyledButtonPrimary } from '../styled/StyledButton'

export default function SignUpPage() {
    return (
        <FormWrapper>
            <StyledForm>
                <FormImage>
                    <SignUpIcon/>
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