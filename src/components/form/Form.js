import { useEffect } from 'react'
import { useFormik } from 'formik'
import { styled } from 'styled-components'
import * as Yup from 'yup'

import FormField from './FormField'
import { ButtonPrimary } from '../Button'

const defaultValidationSchema = Yup.object({
    'email': Yup.string().email('Invalid email').required('This field is required'),
    'password': Yup.string().min(6, 'Password is too short!').required('This field is required'),
    'username': Yup.string().min(3, 'Username is too short!').required('This field is required'),
    'passwordConfirm': Yup.string().oneOf([Yup.ref('password')], 'Passwords don\'t match').required('This field is required')
})

export default function Form({ icon, fieldsData, btnLabel, validationSchema, onSubmit, children }) {
    const formik = useFormik({
        initialValues: setInitialValues(),
        validationSchema: validationSchema || defaultValidationSchema,
        onSubmit
    })

    function setInitialValues() {
        const initialValues = {}
    
        fieldsData.forEach(data => {
            initialValues[data.name] = ''
        })
    
        return initialValues
    }

    useEffect(() => {
        console.log(formik.initialValues)
    }, [])

    return (
        <Wrapper onSubmit={ formik.handleSubmit }>
            { icon ? <IconContainer>{ icon }</IconContainer> : null }

            {
                fieldsData.map(data => {
                    const { label, name, type } = data
                    
                    return (
                        <FormField 
                            key={ name }
                            label={ label }
                            name={ name }
                            type={ type } 
                            value={ formik.values[name] } 
                            onChange={ formik.handleChange }
                            message={ formik.errors[name] }
                        />
                    )
                })
            }

            <ButtonPrimary type='submit'>{ btnLabel }</ButtonPrimary>

            { children }
        </Wrapper>
    )
}

const Wrapper = styled.form`
    background-color: #FFFFFFB6;
    border-radius: 10px;
    padding: 60px 20px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    color: ${({ theme }) => theme.colors['accent-2']};
    backdrop-filter: blur(10px);
    position: relative;

    &>p:nth-last-of-type(1) {
        margin-top: 1rem;
        
        a {
            color: ${({ theme }) => theme.colors['accent-1']};
        }
    }

    button {
        margin-top: 1rem;
    }

    legend {
        align-self: center;
        font-size: 2rem;
    }
`

const IconContainer = styled.div`
    position: absolute;
    top: 0%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--accent-color-1);
    width: 80px;
    height: 80px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 10px solid var(--secondary-color-3);
    padding: 10px;

    svg {
        fill: #FFF;
        width: 100%;
        height: auto;
    }
`