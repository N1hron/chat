import { styled } from 'styled-components'
import { Link } from 'react-router-dom'

import { ReactComponent as Logo } from '../resources/icons/logo.svg'
import { ReactComponent as LogOutIcon } from '../resources/icons/logout.svg'
import { ReactComponent as ProfileIcon } from '../resources/icons/profile.svg'
import { ReactComponent as ChatIcon } from '../resources/icons/chat.svg'
import { StyledLink } from './StyledLink'
import { Button } from './Button'

export default function Sidebar() {
    return (
        <SidebarWrapper>
            <Link className='logo' to='/'>
                <Logo/>
                <h1><span>C</span>hat</h1>
            </Link>

            <SidebarNavigation>
                <ul>
                    <li>
                        <StyledLink to='/profile'>
                            <ProfileIcon/>
                            Profile
                        </StyledLink>
                    </li>
                    <li>
                        <StyledLink to='/chat'>
                            <ChatIcon/>
                            Chat
                        </StyledLink>
                    </li>
                </ul>
            </SidebarNavigation>
            
            <Button>
                <LogOutIcon/>
                Log Out
            </Button>
        </SidebarWrapper>
    )
}

const SidebarWrapper = styled.aside`
    height: 100%;
    background-color: ${({ theme }) => theme.colors['primary']};
    max-width: 300px;
    flex-grow: 1;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    color: white;
    position: relative;
    z-index: 2;

    h1 {
        font-weight: 700;
        font-size: 3rem;
        display: block;
    }

    svg {
        fill: #FFF;
        height: auto;
    }

    .logo {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        user-select: none;

        span {
            color: ${({ theme }) => theme.colors['accent-1']}
        }

        svg {
            width: 5rem;
        }
    }

    nav {
        flex-grow: 1;
    }

    a {
        text-decoration: none;
        color: #FFF;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

const SidebarNavigation = styled.nav`
    ul {
        padding: 20px;
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }
`