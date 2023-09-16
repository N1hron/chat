import { useId } from 'react'
import { styled } from 'styled-components'

export default function FormField({ label, name, type, value = '', onChange }) {
    const id = useId()

    return (
        <FormFieldWrapper>
            <label htmlFor={ id }>{ label }</label>
            <StyledInput 
                id={ id } 
                label={ label }
                name={ name }
                type={ type } 
                value={ value } 
                onChange={ onChange }
            />
        </FormFieldWrapper>
    )
}

const FormFieldWrapper = styled.div`
    max-width: 250px;
    width: 100%;

    label {
        font-size: 1.2rem;
        display: inline-block;
        margin-bottom: 0.5rem;
    }
`

const StyledInput = styled.input`
    border: none;
    box-shadow: inset 0px 0px 2px 0px rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    width: 100%;
    height: 30px;
    padding: 0.5rem;
    outline: none;
    font: small-caption;
    font-size: 1rem;
`