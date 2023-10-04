import { useDispatch, useSelector } from 'react-redux'

import * as S from './style'
import * as Button from '../styled/Button'
import { 
    selectCroppedAreaPixels, 
    selectCroppedImage, 
    selectImageSrc, 
    getCroppedImage,
    resetAvatarEditor
} from '../../store/slices/avatarEditorSlice'


export default function Buttons({ updateAvatar, goBack }) {
    const imageSrc = useSelector(selectImageSrc),
          croppedAreaPixels= useSelector(selectCroppedAreaPixels),
          croppedImage = useSelector(selectCroppedImage)

    const dispatch = useDispatch()

    async function handleConfirm() {
        if (croppedImage) {
            updateAvatar(croppedImage.blob, () => {
                goBack()
                dispatch(resetAvatarEditor())
            })
        }
        else dispatch(getCroppedImage({ imageSrc, croppedAreaPixels }))
    }

    return (
        imageSrc &&
        <S.Buttons>
            <Button.Light onClick={ handleConfirm }>
                Confirm
            </Button.Light> 
            
            {
                !croppedImage &&
                <Button.Dark onClick={ () => dispatch(resetAvatarEditor())  }>
                    Select another image
                </Button.Dark>
            }
        </S.Buttons>
    )
}