import { useDispatch, useSelector } from 'react-redux'

import * as S from '../style'
import * as Button from '../../styled/Button'
import ImageCropper from './ImageCropper'
import GoBackButton from '../GoBackButton'
import { selectImageSrc, setStep, selectCroppedAreaPixels, getCroppedImage } from '../../../store/slices/avatarEditorSlice'


export default function ImageCropStep() {
    const dispatch = useDispatch()

    const imageSrc = useSelector(selectImageSrc),
          croppedAreaPixels = useSelector(selectCroppedAreaPixels)

    const goBack = () => dispatch(setStep(1))
    const onConfirm = () => dispatch(getCroppedImage({ imageSrc, croppedAreaPixels }))

    return (
        <>
            <GoBackButton onClick={ goBack }/>
            <S.View>
                <ImageCropper/>
            </S.View>
            <S.Buttons>
                <Button.Light onClick={ onConfirm }>
                    Confirm
                </Button.Light>
            </S.Buttons>
        </>
    )
}