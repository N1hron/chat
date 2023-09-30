import { useState } from 'react'
import { createPortal } from 'react-dom'
import { useSelector } from 'react-redux'

import * as S from './style'
import { selectUser } from '../../store/slices/userSlice'
import { ReactComponent as DefaultAvatar } from '../../assets/icons/profile-picture.svg'
import AvatarEditor from '../avatarEditor/AvatarEditor'


export default function UserInfo() {
    const { photoUrl, username, email } = useSelector(selectUser)
    const [showAvatarEditor, setShowAvatarEditor] = useState(false)

    return (
        <S.Content>
            <S.Avatar>
                <S.AvatarContainer>
                    { photoUrl ? <img src={ photoUrl } alt={ username } /> : <DefaultAvatar/>}
                </S.AvatarContainer>
                <S.ChangeAvatarButton onClick={ () => setShowAvatarEditor(true) }>
                    Click here to change avatar
                </S.ChangeAvatarButton>
            </S.Avatar>
            <S.Info>
                <S.InfoFiled>Username: <span>{ username }</span></S.InfoFiled>
                <S.InfoFiled>Email: <span>{ email }</span></S.InfoFiled>
            </S.Info>
            {
                showAvatarEditor &&
                createPortal(<AvatarEditor goBack={ () => setShowAvatarEditor(false) }/>, document.querySelector('#root'))
            }
        </S.Content>
    )
}