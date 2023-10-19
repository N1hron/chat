import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import * as S from './style'
import useAuth from '../../hooks/auth.hook'
import { ReactComponent as LogOutIcon } from '../../assets/icons/logout.svg'
import { ReactComponent as ExpandIcon } from '../../assets/icons/navigate_next.svg'
import Logo from '../logo/Logo'
import { Button, ButtonNavLink } from '../styled/Button'
import navItemsData from './navItemsData'


export default function Sidebar({ isExpanded, setIsExpanded }) {
    const [navItems, setNavItems] = useState([])
    const { handleLogOut } = useAuth()

    useEffect(() => setNavItems(createNavItems()), [isExpanded])

    function createNavItems() {
        return navItemsData.map(navItemData => (
            <li key={ navItemData.id }>
                <ButtonNavLink to={ navItemData.to }>
                    { navItemData.icon }
                    { isExpanded && navItemData.label }
                </ButtonNavLink>
            </li>
        ))
    }

    return (
        <S.Sidebar $isExpanded={ isExpanded }>
            <S.LogoLink to='/'>
                <Logo miniMode={ !isExpanded }/>
            </S.LogoLink>

            <S.Navigation>
                <ul>
                    { navItems }
                </ul>
            </S.Navigation>

            <S.ExpandButton 
                $isExpanded={ isExpanded }
                onClick={ () => setIsExpanded(prev => !prev) }
            >
                <ExpandIcon/>
            </S.ExpandButton>
            
            <Button onClick={ handleLogOut }>
                <LogOutIcon/>
                { isExpanded && <span>Log out</span> }
            </Button>
        </S.Sidebar>
    )
}

