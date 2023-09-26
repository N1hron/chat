import { useFormik } from 'formik'

import Modal from '../modal/Modal'
import Field from './Field'
import * as S from './style'
import * as StyledButton from '../styled/StyledButton'


export default function Form({ icon, fieldData, btnLabel, validationSchema, onSubmit, children, formMessage }) {
    const formik = useFormik({
        initialValues: setInitialValues(fieldData),
        validationSchema,
        onSubmit
    })

    return (
        <Modal icon={ icon }>   
            <S.Form onSubmit={ formik.handleSubmit }>
                {
                    fieldData.map(data => {
                        const { label, name, type } = data
                        
                        return (
                            <Field 
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

                <StyledButton.Primary type='submit'>{ btnLabel }</StyledButton.Primary>
                {formMessage && <S.Message>{ formMessage }</S.Message>}
                { children }
            </S.Form>
        </Modal>
    )
}

function setInitialValues(fieldData) {
    const initialValues = {}

    fieldData.forEach(data => initialValues[data.name] = '')
    
    return initialValues
}