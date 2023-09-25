import { useFormik } from 'formik'
import { styled } from 'styled-components'

import Modal from '../Modal'
import FormField from './FormField'
import { FormMessage } from './FormMessage'
import { ButtonPrimary } from '../buttons'


export default function Form({ icon, fieldData, btnLabel, validationSchema, onSubmit, children, formMessage }) {
    const formik = useFormik({
        initialValues: setInitialValues(fieldData),
        validationSchema,
        onSubmit
    })

    return (
        <Modal icon={ icon }>   
            <StyledForm onSubmit={ formik.handleSubmit }>
                {
                    fieldData.map(data => {
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
                {formMessage && <FormMessage>{ formMessage }</FormMessage>}
                { children }
            </StyledForm>   
        </Modal>
    )
}

function setInitialValues(fieldData) {
    const initialValues = {}

    fieldData.forEach(data => initialValues[data.name] = '')
    
    return initialValues
}

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    a {
        color: var(--accent-color-1);
    }
    &>p:nth-last-of-type(1) {
        margin-top: 1rem;
    }

    button {
        margin-top: 1rem;
    }

    legend {
        align-self: center;
        font-size: 2rem;
    }
`