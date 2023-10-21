import { useRef, useEffect } from 'react'

import * as S from './style'
import statusIcons from './statusIcons'


export default function StatusMessage({ children, type }) {
    const messageRef = useRef()

    // Making message width at least equal to its height
    useEffect(() => {
        const height = getComputedStyle(messageRef.current).height
        messageRef.current.style.minWidth = height
    }, [])

    return (
        <S.StatusMessage ref={ messageRef }>
            { type && statusIcons[type] }
            { children }
        </S.StatusMessage>
    )
}