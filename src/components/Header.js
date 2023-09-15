import { styled } from 'styled-components'
import { Link } from 'react-router-dom'

import { ReactComponent as ProfilePicture } from '../resources/icons/profile-picture.svg'

const StyledHeader = styled.header`
    background-color: #FFFFFFB6;
    backdrop-filter: blur(10px);
    height: 80px;
    flex-grow: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 80px;

    & h2 {
        font-size: 2.5rem;
        color: ${({ theme }) => theme.colors['accent-2']};
    }

    .profile-picture {
        position: absolute;
        background-color: ${({ theme }) => theme.colors['primary']};
        fill: #FFF;
        height: 100%;
        width: auto;
        padding: 5px;
        right: 0;
        top: 0;
        transition: all .25s;
        cursor: pointer;

        &:hover {
            fill: ${({ theme }) => theme.colors['accent-1']};
        }

        &:active {
            fill: ${({ theme }) => theme.colors['accent-1-darker']};
        }
    }
`

export default function Header({ title }) {
    return (
        <StyledHeader>
            <h2>{ title }</h2>
            <Link to='/profile'>
                <ProfilePicture className='profile-picture'/>
            </Link>
        </StyledHeader>
    )
}