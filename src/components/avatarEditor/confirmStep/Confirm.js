import { useSelector } from 'react-redux'

import * as S from '../style'
import Text from '../../styled/Text'
import { selectCroppedImage } from '../../../store/slices/avatarEditorSlice'


export default function Confirm() {
    const { url } = useSelector(selectCroppedImage)
    
    return (
        <S.Confirm>
            <Text>Are you sure you want to set this avatar?</Text>
            <img src={ url } alt='cropped avatar'/>
        </S.Confirm>
    )
}