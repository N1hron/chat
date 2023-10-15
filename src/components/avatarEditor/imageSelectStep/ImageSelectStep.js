import { useDispatch, useSelector } from 'react-redux'

import * as S from '../style'
import { Button } from '../../styled/Button'
import ImageDropArea from './ImageDropArea'
import GoBackButton from '../GoBackButton'
import { hideAvatarEditor, selectImageSrc, setImageSrc, setStep } from '../../../store/slices/avatarEditorSlice'


export default function ImageSelectStep() {
    const dispatch = useDispatch()

    const imageSrc = useSelector(selectImageSrc)

    const goBack = () => dispatch(hideAvatarEditor())
    const onConfirm = () => dispatch(setStep(2))
    const onAnotherImageSelect = () => dispatch(setImageSrc(null))

    return (
        <>
            <GoBackButton onClick={ goBack }/>
            <S.View>
                {
                    imageSrc ? <img src={ imageSrc } alt='' /> :
                    <ImageDropArea/>
                }
            </S.View>
            {
                imageSrc && 
                <S.Buttons>
                    <Button.Light onClick={ onConfirm }>
                        Confirm
                    </Button.Light>
                    <Button.Dark onClick={ onAnotherImageSelect }>
                        Select another image
                    </Button.Dark>
                </S.Buttons>
            }
        </>
    )
}