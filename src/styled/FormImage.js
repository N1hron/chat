import { styled } from 'styled-components'

export const FormImage = styled.div`
    position: absolute;
    top: 0%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${({ theme }) => theme.colors['accent-1']};
    width: 80px;
    height: 80px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 10px solid ${({ theme }) => theme.colors['secondary-3']};
    padding: 10px;

    svg {
        fill: #FFF;
        width: 100%;
        height: auto;
    }
`