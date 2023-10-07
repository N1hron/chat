import { useDispatch, useSelector } from 'react-redux'

import * as S from '../style'
import * as Button from '../../styled/Button'
import Confirm from './Confirm'
import GoBackButton from '../GoBackButton'
import StatusMessage from '../../statusMessage/StatusMessage'
import useFirestore from '../../../hooks/firestore.hook'
import { setStep, selectCroppedImage, hideAvatarEditor } from '../../../store/slices/avatarEditorSlice'


export default function ConfirmStep() {
    const dispatch = useDispatch()
    const { updateAvatar, status } = useFirestore()
    
    const { blob } = useSelector(selectCroppedImage)

    const onAvatarUpdateFinish = () => dispatch(hideAvatarEditor())

    const goBack = () => dispatch(setStep(2))
    const onConfirm = () => updateAvatar(blob, onAvatarUpdateFinish)

    const isIdle = status.type === 'idle'
    return (
        <>
            { isIdle && <GoBackButton onClick={ goBack }/> }
                <S.View>
                    { isIdle ? <Confirm/> : <StatusMessage type={ status.type }/> }
                </S.View>
            {
                isIdle &&
                <S.Buttons>
                    <Button.Light onClick={ onConfirm }>
                        Confirm
                    </Button.Light>
                </S.Buttons>
            }
        </>
    )
}