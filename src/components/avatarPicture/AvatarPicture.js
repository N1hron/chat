import * as S from './style'
import { ReactComponent as DefaultAvatar } from '../../assets/icons/profile-picture.svg'
import ImageWithLoading from '../ImageWithLoading'


export default function AvatarPicture({ src, alt }) {

    return (
        <S.AvatarPicture>
            { src ? <ImageWithLoading src={ src } alt={ alt }/> : <DefaultAvatar/> }
        </S.AvatarPicture>
    )
}