import { useFormik } from 'formik'
import { useEffect, useRef } from 'react'

import Modal from '../modal/Modal'
import Field from './Field'
import * as S from './style'
import { Button } from '../styled/Button'
import { ReactComponent as SpinnerIcon } from '../../assets/icons/spinner.svg'


export default function Form({ icon, fieldData, btnLabel, validationSchema, onSubmit, children, status }) {
    const formik = useFormik({
        initialValues: setInitialValues(fieldData),
        validationSchema,
        onSubmit
    })

    const btnRef = useRef(null)

    useEffect(preserveBtnSize, [])

    function preserveBtnSize() {
        const width = getComputedStyle(btnRef.current).width,
              height = getComputedStyle(btnRef.current).height

        btnRef.current.style.minWidth = width
        btnRef.current.style.minHeight = height
    }
    
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

                <Button.Light type='submit' ref={ btnRef } disabled={ status.type === 'loading' }>
                    { status.type === 'loading' ? <SpinnerIcon/> : btnLabel }
                </Button.Light>
                {status.type === 'error' && status.message && <S.Message>{ status.message }</S.Message>}
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