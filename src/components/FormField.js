import { useId } from 'react'
import { styled } from 'styled-components'

import { StyledInput } from '../styled/StyledInput'

const Field = styled.div`
    max-width: 250px;
    width: 100%;

    label {
        font-size: 1.2rem;
        display: inline-block;
        margin-bottom: 0.5rem;
    }
`

export default function FormField({ type = 'text', name, label = '', value = '', onChange }) {
    const id = useId()

    return (
        <Field>
            <label htmlFor={ id }>{ label }</label>
            <StyledInput 
                id={ id } 
                name={ name } 
                type={ type } 
                onChange={ onChange } 
                value={ value }
            />
        </Field>
    )
}