import { forwardRef } from 'react'

import * as S from './style'
import { ReactComponent as UploadIcon } from '../../assets/icons/upload.svg'


function FileInput({ setImageSrc }, ref) {
    const handleClick = () => ref.current.click()

    function handleChange(event) {
        const src = URL.createObjectURL(event.target.files[0])
        setImageSrc(src)
    }

    return (
        <S.FileInput onClick={ handleClick }>
            <input onChange={ handleChange } ref={ ref } type='file'/>
            <p><UploadIcon/> Drop image here or click to select</p>
        </S.FileInput>
    )
}

export default forwardRef(FileInput)