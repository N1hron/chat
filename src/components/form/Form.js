import { useFormik } from 'formik'
import { styled } from 'styled-components'
import { motion } from 'framer-motion'

import FormField from './FormField'
import { FormMessage } from './FormMessage'
import { ButtonPrimary } from '../buttons'
import { appearVariants as variants } from '../../animations/variants'


export default function Form({ icon, fieldData, btnLabel, validationSchema, onSubmit, children, formMessage }) {
    const formik = useFormik({
        initialValues: setInitialValues(fieldData),
        validationSchema,
        onSubmit
    })

    return (
        <Wrapper 
            variants={ variants }
            initial='hidden'
            animate='visible'
            transition={{ delay: 0.1, duration: 0.2 }}
            onSubmit={ formik.handleSubmit }
        >
            { icon ? <IconContainer>{ icon }</IconContainer> : null }

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
        </Wrapper>
    )
}

function setInitialValues(fieldData) {
    const initialValues = {}

    fieldData.forEach(data => initialValues[data.name] = '')
    
    return initialValues
}

const Wrapper = styled(motion.form)`
    background-color: #FFFFFFB6;
    border-radius: 10px;
    padding: 60px 20px 20px;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    color: ${({ theme }) => theme.colors['accent-2']};
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