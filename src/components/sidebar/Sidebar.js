import { Link } from 'react-router-dom'

import * as S from './style'
import useAuth from '../../hooks/auth.hook'
import { ReactComponent as LogOutIcon } from '../../assets/icons/logout.svg'
import { ReactComponent as ProfileIcon } from '../../assets/icons/profile.svg'
import { ReactComponent as ChatIcon } from '../../assets/icons/chat.svg'
import Logo from '../logo/Logo'
import { Button, ButtonNavLink } from '../styled/Button'


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
                        <ButtonNavLink to='/profile'>
                            <ProfileIcon/>
                            Profile
                        </ButtonNavLink>
                    </li>
                    <li>
                        <ButtonNavLink to='/messages'>
                            <ChatIcon/>
                            Messages
                        </ButtonNavLink>
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

