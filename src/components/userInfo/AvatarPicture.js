import * as S from './style'
import { ReactComponent as DefaultAvatar } from '../../assets/icons/profile-picture.svg'


export default function AvatarPicture({ src, alt }) {
    return (
        <S.AvatarPicture>
            { 
                src ? 
                <img src={ src } alt={ alt } /> : 
                <DefaultAvatar/>
            }
        </S.AvatarPicture>
    )
}