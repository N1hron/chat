import { Link } from 'react-router-dom'

import * as S from './style'
import useAuth from '../../hooks/auth.hook'
import { ReactComponent as LogOutIcon } from '../../assets/icons/logout.svg'
import { ReactComponent as ProfileIcon } from '../../assets/icons/profile.svg'
import { ReactComponent as ChatIcon } from '../../assets/icons/chat.svg'
import Logo from '../logo/Logo'
import Button from '../styled/Button'


export default function Sidebar() {
    const { handleLogOut } = useAuth()

    return (
        <S.Sidebar>
            <Link className='logo' to='/'>
                <Logo/>
            </Link>

            <S.Navigation>
                <ul>
                    <li>
                        <S.NavigationLink to='/profile'>
                            <ProfileIcon/>
                            Profile
                        </S.NavigationLink>
                    </li>
                    <li>
                        <S.NavigationLink to='/messages'>
                            <ChatIcon/>
                            Messages
                        </S.NavigationLink>
                    </li>
                </ul>
            </S.Navigation>
            
            <Button onClick={ handleLogOut }>
                <LogOutIcon/>
                Log out
            </Button>
        </S.Sidebar>
    )
}

