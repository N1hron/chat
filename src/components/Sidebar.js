import { styled } from 'styled-components'
import { Link } from 'react-router-dom'

import { ReactComponent as Logo } from '../resources/icons/logo.svg'
import { ReactComponent as LogOutIcon } from '../resources/icons/logout.svg'
import { ReactComponent as ProfileIcon } from '../resources/icons/profile.svg'
import { ReactComponent as ChatIcon } from '../resources/icons/chat.svg'
import Button from './Button'

const SidebarContent = styled.aside`
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
`

const Navigation = styled.nav`
    ul {
        padding: 20px;
        list-style: none;
        font-size: 1.5rem;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;

        a {
            text-decoration: none;
            color: #FFF;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;

            svg {
                transition: fill 0.15s;
            }
        
            transition: color 0.15s;

            &:hover {
                color: ${({ theme }) => theme.colors['accent-1']};
        
                svg {
                    fill: ${({ theme }) => theme.colors['accent-1']};
                }
            }
        }
    }
`

export default function Sidebar() {
    return (
        <SidebarContent>
            <div className='logo'>
                <Logo/>
                <h1><span>C</span>hat</h1>
            </div>
            <Navigation>
                <ul>
                    <li>
                        <Link to='/profile'>
                            <ProfileIcon/>
                            Profile
                        </Link>
                    </li>
                    <li>
                        <Link to='/chat'>
                            <ChatIcon/>
                            Chat
                        </Link>
                    </li>
                </ul>
            </Navigation>
            <Button>
                <LogOutIcon/>
                Log Out
            </Button>
        </SidebarContent>
    )
}