import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import * as S from './style'
import useAuth from '../../hooks/auth.hook'
import { ReactComponent as LogOutIcon } from '../../assets/icons/logout.svg'
import Logo from '../logo/Logo'
import { Button, ButtonNavLink } from '../styled/Button'
import navItemsData from './navItemsData'


export default function Sidebar() {
    const [navItems, setNavItems] = useState([])
    const { handleLogOut } = useAuth()

    useEffect(() => {
        setNavItems(createNavItems())
    }, [])

    return (
        <S.Sidebar>
            <Link className='logo' to='/'>
                <Logo/>
            </Link>

            <S.Navigation>
                <ul>
                    { navItems }
                </ul>
            </S.Navigation>
            
            <Button onClick={ handleLogOut }>
                <LogOutIcon/>
                Log out
            </Button>
        </S.Sidebar>
    )
}

function createNavItems() {
    return navItemsData.map(navItemData => (
        <li key={ navItemData.id }>
            <ButtonNavLink to={ navItemData.to }>
                { navItemData.icon }
                { navItemData.label }
            </ButtonNavLink>
        </li>
    ))
}

