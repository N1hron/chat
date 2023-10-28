import { createPortal } from 'react-dom'
import { useSelector, useDispatch } from 'react-redux'

import * as S from './style'
import Text from '../styled/Text'
import AvatarEditor from '../avatarEditor/AvatarEditor'
import AvatarPicture from '../avatarPicture/AvatarPicture'
import { selectUser } from '../../store/slices/usersSlice'
import { selectIsVisible as selectIsAvatarEditorVisible, showAvatarEditor } from '../../store/slices/avatarEditorSlice'


export default function UserInfo() {
    const dispatch = useDispatch()

    const { photoURL, username, email } = useSelector(selectUser),
          isAvatarEditorVisible = useSelector(selectIsAvatarEditorVisible)

    return (
        <S.UserInfo>
            <S.Avatar>
                <AvatarPicture src={ photoURL } alt={ username }/>
                <S.ChangeAvatarButton onClick={ () => dispatch(showAvatarEditor()) }>
                    Click here to change avatar
                </S.ChangeAvatarButton>
            </S.Avatar>

            <S.Info>
                <Text>Username: <span className='highlight'>{ username }</span></Text>
                <Text>Email: <span className='highlight'>{ email }</span></Text>
                <Text>About me: <span className='highlight'>...</span></Text>
            </S.Info>

            {
                isAvatarEditorVisible &&
                createPortal(
                    <AvatarEditor/>, 
                    document.querySelector('#root')
                )
            }
        </S.UserInfo>
    )
}