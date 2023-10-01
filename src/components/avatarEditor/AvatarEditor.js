import { useState } from 'react'

import * as S from './style'
import * as Button from '../styled/Button'
import { modalAppearVariants as variants } from '../../animations/variants'
import { ReactComponent as GoBackIcon } from '../../assets/icons/arrow-back.svg';
import ImageDropArea from './ImageDropArea'
import Overlay from '../overlay/Overlay'
import ImageCropper from './ImageCropper'
import getCroppedImg from './cropImage'


export default function AvatarEditor({ goBack }) {
    const [imageSrc, setImageSrc] = useState(null)
    const [croppedImage, setCroppedImage] = useState(null)
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)

    const showCroppedImage = async () => {
        try {
          const croppedImage = await getCroppedImg(imageSrc, croppedAreaPixels)
          console.log('donee', { croppedImage })
          setCroppedImage(croppedImage)
        } catch (e) {
          console.error(e)
        }
    }

    const onAnotherImageSelect = () => {
        setImageSrc(null)
        setCroppedImage(null)
        setCroppedAreaPixels(null)
    }
    
    return (
        <Overlay>
            <S.Content
                variants={ variants }
                initial='hidden'
                animate='visible'
                transition={{ duration: 0.2 }}
                
            >
                <S.Cropper>
                    {
                        imageSrc ? 
                        (
                            croppedImage ? <img src={ croppedImage } alt=''/> : 
                            <ImageCropper imageSrc={ imageSrc } setCroppedAreaPixels={ setCroppedAreaPixels }/>
                        ) :  <ImageDropArea setImageSrc={ setImageSrc }/>
                    }
                </S.Cropper>
                {
                    imageSrc &&
                    <S.Buttons>
                        <Button.Light onClick={ showCroppedImage }>Apply</Button.Light>
                        <Button.Dark onClick={ onAnotherImageSelect  }>Select another image</Button.Dark>
                    </S.Buttons>
                }
                <S.GoBackButton onClick={ goBack }>
                    <GoBackIcon/>
                </S.GoBackButton>
            </S.Content>
        </Overlay>
    )
}