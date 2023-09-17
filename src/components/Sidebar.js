import { styled } from 'styled-components'
import { Link } from 'react-router-dom'

import { ReactComponent as LogOutIcon } from '../resources/icons/logout.svg'
import { ReactComponent as ProfileIcon } from '../resources/icons/profile.svg'
import { ReactComponent as ChatIcon } from '../resources/icons/chat.svg'
import { StyledLink } from './StyledLink'
import { Button } from './Button'
import Logo from './Logo'

export default function Sidebar() {
    return (
        <Wrapper>
            <Link className='logo' to='/'>
                <Logo/>
            </Link>

            <Navigation>
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
            </Navigation>
            
            <Button>
                <LogOutIcon/>
                Log Out
            </Button>
        </Wrapper>
    )
}

const Wrapper = styled.aside`
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

    svg {
        fill: #FFF;
        height: auto;
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

const Navigation = styled.nav`
    ul {
        padding: 20px;
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }
`