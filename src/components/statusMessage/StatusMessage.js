import { useRef, useEffect } from 'react'

import * as S from './style'
import { appearVariants as variants } from '../../animations/variants'
import statusIcons from './statusIcons'


export default function StatusMessage({ children, type }) {
    const messageRef = useRef()

    // Making message width at least equal to its height
    useEffect(() => {
        const height = getComputedStyle(messageRef.current).height
        messageRef.current.style.minWidth = height
    }, [])

    return (
        <S.StatusMessage
            variants={ variants } 
            initial='hidden'
            animate='visible'
            transition={{ delay: 0.1, duration: 0.1 }}
            ref={ messageRef }
        >
            { type && statusIcons[type] }
            { children }
        </S.StatusMessage>
    )
}