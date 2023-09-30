import { useState, useRef, useEffect } from 'react'

import * as S from './style'
import * as Button from '../styled/Button'
import { modalAppearVariants as variants } from '../../animations/variants'
import { ReactComponent as GoBackIcon } from '../../assets/icons/arrow-back.svg';
import FileInput from './FileInput'
import Overlay from '../overlay/Overlay'


export default function AvatarEditor({ goBack }) {
    const [imageSrc, setImageSrc] = useState(null)
    const contentRef = useRef()
    const inputRef = useRef()

    useEffect(() => {
        [
            'drag', 
            'dragend', 
            'dragenter', 
            'dragexit', 
            'dragleave', 
            'dragover', 
            'dragstart', 
            'drop'
        ].forEach(event => contentRef.current.addEventListener(event, e => e.preventDefault()))
    }, [])

    function handleDrop(event) {
        const files = event.dataTransfer.files
        inputRef.current.files = files
        
        const src = URL.createObjectURL(inputRef.current.files[0])
        setImageSrc(src)
    }

    return (
        <Overlay>

            <S.Content
                variants={ variants }
                initial='hidden'
                animate='visible'
                transition={{ duration: 0.2 }}
                ref={ contentRef } 
                onDrop={ handleDrop }
            >
                <S.Cropper>
                    {
                        imageSrc ? <img src={ imageSrc } alt={ 'user\'s avatar' } /> : <FileInput ref={ inputRef } setImageSrc={ setImageSrc }/>
                    }
                </S.Cropper>
                { imageSrc && <Button.Primary>Apply</Button.Primary> }
                <S.GoBackButton onClick={ goBack }>
                    <GoBackIcon/>
                </S.GoBackButton>
            </S.Content>

        </Overlay>
    )
}