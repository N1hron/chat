import { Link } from 'react-router-dom'

import * as S from './style'
import { ReactComponent as ProfileIcon } from '../../assets/icons/profile-picture.svg'


export default function Header({ title }) {
    return (
        <S.Header>
            <h2>{ title }</h2>
            <S.ProfilePicture>
                <Link to='/profile'>
                    <ProfileIcon className='profile-picture'/>
                </Link>
            </S.ProfilePicture>
        </S.Header>
    )
}