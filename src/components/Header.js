import { styled } from 'styled-components'
import { Link } from 'react-router-dom'

import { ReactComponent as ProfileIcon } from '../assets/icons/profile-picture.svg'


export default function Header({ title }) {
    return (
        <Wrapper>
            <h2>{ title }</h2>
            <ProfilePicture>
                <Link to='/profile'>
                    <ProfileIcon className='profile-picture'/>
                </Link>
            </ProfilePicture>
        </Wrapper>
    )
}

const Wrapper = styled.header`
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
        color: var(--accent-color-2);
    }

    .profile-picture {
        
    }
`

const ProfilePicture = styled.div`
    position: absolute;
    background-color: var(--primary-color);
    height: 100%;
    width: auto;
    aspect-ratio: 1;
    padding: 5px;
    right: 0;
    top: 0;
    cursor: pointer;

    svg {
        fill: #FFF;
        width: 100%;
        height: 100%;
        transition: all .25s;
    }

    &:hover {
        svg {
            fill: var(--accent-color-1);
        }
    }

    &:active {
        svg {
            fill: var(--accent-color-1-darker);
        }
    }
`