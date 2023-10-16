import { styled } from 'styled-components'
import Block from '../styled/Block'


export const Content = styled(Block)`
    position: relative;
    display: flex;
    gap: 20px;
`

export const Avatar = styled.div`
    width: 300px;
    display: flex;
    flex-direction: column;
`

export const AvatarPicture = styled.div`
    background-color: var(--primary-color);
    width: 100%;
    aspect-ratio: 1;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 100%;
        height: 100%;
        aspect-ratio: 1;
        object-fit: cover;
    }

    svg {
        fill: #FFF;
        width: 100%;
        height: auto;
    }
`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    background-color: var(--primary-color);
    border-radius: 10px;
    height: max-content;
    flex-grow: 1;
`

export const InfoFiled = styled.p`
    color: #FFF;
    font-size: 1.75rem;
    font-weight: 500;

    span {
        border-radius: 0.3125em;
        padding: 0.25rem;
        background-color: var(--accent-color-1);
    }
`

export const ChangeAvatarButton = styled.p`
    background-color: var(--primary-color);
    font-size: 1.25rem;
    color: #FFF;
    padding: 1rem;
    text-align: center;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    cursor: pointer;
    transition: all 0.15s;

    &:hover {
        background-color: var(--accent-color-1);
    }
`
