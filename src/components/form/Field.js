import { useId } from 'react'

import * as S from './style'


export default function Field({ label, name, type, value = '', onChange, message = null }) {
    const id = useId()

    return (
        <S.Field>
            <label htmlFor={ id }>{ label }</label>
            <S.Input 
                id={ id } 
                label={ label }
                name={ name }
                type={ type } 
                value={ value } 
                onChange={ onChange }
            />
            { message && <S.Message>{ message }</S.Message> } 
        </S.Field>
    )
}