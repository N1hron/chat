import { useState } from 'react'
import { createPortal } from 'react-dom'
import { useSelector } from 'react-redux'

import * as S from './style'
import Text from '../styled/Text'
import { ReactComponent as DefaultAvatar } from '../../assets/icons/profile-picture.svg'
import AvatarEditor from '../avatarEditor/AvatarEditor'
import { selectUser } from '../../store/slices/userSlice'


export default function UserInfo() {
    const { photoURL, username, email } = useSelector(selectUser)
    const [showAvatarEditor, setShowAvatarEditor] = useState(false)

    return (
        <S.Content>
            <S.Avatar>
                <S.AvatarContainer>
                    { 
                        photoURL ? 
                        <img src={ photoURL } alt={ username } /> : 
                        <DefaultAvatar/>
                    }
                </S.AvatarContainer>

                <S.ChangeAvatarButton onClick={ () => setShowAvatarEditor(true) }>
                    Click here to change avatar
                </S.ChangeAvatarButton>
            </S.Avatar>

            <S.Info>
                <Text>Username: <span className='highlight'>{ username }</span></Text>
                <Text>Email: <span className='highlight'>{ email }</span></Text>
            </S.Info>

            {
                showAvatarEditor &&
                createPortal(
                    <AvatarEditor goBack={ () => setShowAvatarEditor(false) }/>, 
                    document.querySelector('#root')
                )
            }
        </S.Content>
    )
}