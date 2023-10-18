import { styled } from 'styled-components'


export const AvatarPicture = styled.div`
    background-color: var(--primary-color);
    width: 100%;
    aspect-ratio: 1;
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
