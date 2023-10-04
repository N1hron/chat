import { useDispatch, useSelector } from 'react-redux'

import * as S from './style'
import * as Button from '../styled/Button'
import { 
    selectCroppedAreaPixels, 
    selectCroppedImage, 
    selectImageSrc, 
    getCroppedImage
} from '../../store/slices/avatarEditorSlice'


export default function Buttons({ updateAvatar, resetAll, goBack }) {
    const imageSrc = useSelector(selectImageSrc),
          croppedAreaPixels= useSelector(selectCroppedAreaPixels),
          croppedImage = useSelector(selectCroppedImage)

    const dispatch = useDispatch()

    async function handleConfirm() {
        if (croppedImage) {
            updateAvatar(croppedImage.blob, () => {
                resetAll()
                goBack()
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
                <Button.Dark onClick={ resetAll  }>
                    Select another image
                </Button.Dark>
            }
        </S.Buttons>
    )
}