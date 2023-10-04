import * as S from './style'
import Text from '../styled/Text'


export default function Confirm({ croppedImageSrc }) {
    return (
        <S.Confirm>
            <Text>Are you sure you want to set this avatar?</Text>
            <img src={ croppedImageSrc } alt='cropped avatar'/>
        </S.Confirm>
    )
}