import { useSelector } from 'react-redux'

import * as S from './style'
import { modalAppearVariants as variants } from '../../animations/variants'
import Overlay from '../overlay/Overlay'
import ImageSelectStep from './imageSelectStep/ImageSelectStep'
import ImageCropStep from './imageCropStep/imageCropStep'
import ConfirmStep from './confirmStep/ConfirmStep'
import { selectStep } from '../../store/slices/avatarEditorSlice'


function renderStep(step) {
    switch(step) {
        case 1:
            return <ImageSelectStep/>
        case 2:
            return <ImageCropStep/>
        case 3:
            return <ConfirmStep/>
        default:
    }
}

export default function AvatarEditor() {
    const step = useSelector(selectStep)
    
    return (
        <Overlay>
            <S.Container>
                <S.Step>
                    { renderStep(step) }
                </S.Step>
            </S.Container>
        </Overlay>
    )
}