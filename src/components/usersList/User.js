import * as S from './style'
import Text from '../styled/Text'
import AvatarPicture from '../avatarPicture/AvatarPicture'


export default function User({ name, photoURL }) {

    return (
        <S.User>
            <S.Avatar>
                <AvatarPicture src={ photoURL }/>
            </S.Avatar>
            <Text>
                { name }
            </Text>
        </S.User>
    )
}