import { useRef, useEffect } from 'react'

import * as S from './style'
import { ReactComponent as SpinnerIcon } from '../../assets/icons/spinner.svg'
import { ReactComponent as SuccessIcon } from '../../assets/icons/done.svg'
import { ReactComponent as ErrorIcon } from '../../assets/icons/error.svg'
import { appearVariants as variants } from '../../animations/variants'


const icons = {
    'loading': <SpinnerIcon/>,
    'success': <SuccessIcon/>,
    'error': <ErrorIcon/>
}

export default function StatusMessage({ children, type }) {
    const messageRef = useRef()

    useEffect(() => {
        const height = getComputedStyle(messageRef.current).height
        messageRef.current.style.minWidth = height
    }, [])

    return (
        <S.Container>
            <S.StatusMessage
                variants={ variants } 
                initial='hidden'
                animate='visible'
                exit='hidden'
                transition={{ delay: 0.1, duration: 0.1 }}
                ref={ messageRef }
            >
                { type && icons[type] }
                { children }
            </S.StatusMessage>
        </S.Container>
    )
}