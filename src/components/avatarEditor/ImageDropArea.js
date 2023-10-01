import { useRef, useEffect } from 'react'

import * as S from './style'
import { ReactComponent as UploadIcon } from '../../assets/icons/upload.svg'


export default function ImageDropArea({ setImageSrc }) {
    const areaRef = useRef()
    const inputRef = useRef()

    const handleClick = () => inputRef.current.click()

    useEffect(() => preventDefaultForDragAndDrop(areaRef.current), [])

    function handleDrop(event) {
        const files = event.dataTransfer.files
        
        if (files[0].type.includes('image')) {
            inputRef.current.files = files
            handleChange()
        }
    }

    function handleChange() {
        const src = URL.createObjectURL(inputRef.current.files[0])
        setImageSrc(src)
    }

    return (
        <S.ImageDropArea ref={ areaRef } onClick={ handleClick } onDrop={ handleDrop }>
            <input onChange={ handleChange } ref={ inputRef } type='file' accept='image/*'/>
            <p><UploadIcon/> Drop image here or click to select</p>
        </S.ImageDropArea>
    )
}

function preventDefaultForDragAndDrop(eventTarget) {
    [
        'drag', 
        'dragend', 
        'dragenter', 
        'dragexit', 
        'dragleave', 
        'dragover', 
        'dragstart', 
        'drop'
    ].forEach(event => eventTarget.addEventListener(event, e => e.preventDefault()))
}