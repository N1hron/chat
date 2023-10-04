import { useRef, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './style'
import { setImageSrc } from '../../store/slices/avatarEditorSlice'
import { ReactComponent as UploadIcon } from '../../assets/icons/upload.svg'


export default function ImageDropArea() {
    const areaRef = useRef(),
          inputRef = useRef()

    const dispatch = useDispatch()

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
        dispatch(setImageSrc(src))
    }

    return (
        <S.ImageDropArea 
            ref={ areaRef } 
            onClick={ () => inputRef.current.click() } 
            onDrop={ handleDrop }
        >
            <input 
                onChange={ handleChange } 
                ref={ inputRef } 
                type='file' 
                accept='image/*'
            />

            <p>
                <UploadIcon/> 
                Drop image here or click to select
            </p>
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