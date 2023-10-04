import { useSelector, useDispatch } from 'react-redux';

import * as S from './style'
import { modalAppearVariants as variants } from '../../animations/variants'
import { ReactComponent as GoBackIcon } from '../../assets/icons/arrow-back.svg';
import Overlay from '../overlay/Overlay'
import ImageCropper from './ImageCropper'
import useFirestore from '../../hooks/firestore.hook'
import Buttons from './Buttons'
import ImageDropArea from './ImageDropArea'
import Confirm from './Confirm'
import StatusMessage from '../statusMessage/StatusMessage'
import { 
    selectImageSrc, 
    selectCroppedImage,
    removeCroppedImage,
    resetAvatarEditor
} from '../../store/slices/avatarEditorSlice'


export default function AvatarEditor({ goBack }) {
    const croppedImage = useSelector(selectCroppedImage),
          imageSrc = useSelector(selectImageSrc)

    const { updateAvatar, status } = useFirestore()
    const dispatch = useDispatch()

    function handleGoBack() {
        if (croppedImage) dispatch(removeCroppedImage())
        else {
            goBack()
            dispatch(resetAvatarEditor())
        }
    }
    
    return (
        <Overlay>
            <S.Wrapper
                variants={ variants }
                initial='hidden'
                animate='visible'
                transition={{ duration: 0.2 }}  
            >
                <S.Content>
                    { !imageSrc && <ImageDropArea/> }
                    { imageSrc && !croppedImage && <ImageCropper/> }
                    { croppedImage && status.type === 'idle' && <Confirm croppedImageSrc={ croppedImage.url }/> }
                    {
                        status.type !== 'idle' &&
                        <StatusMessage type={ status.type }>
                            {
                                status.type === 'loading' &&
                                'Setting your new avatar...'
                            }
                        </StatusMessage>
                    }
                </S.Content>

                {
                    status.type === 'idle' &&
                    <Buttons
                        updateAvatar={ updateAvatar }
                        goBack={ goBack }
                    /> 
                }

                <S.GoBackButton onClick={ handleGoBack }>
                    <GoBackIcon/>
                </S.GoBackButton>
            </S.Wrapper>
        </Overlay>
    )
}