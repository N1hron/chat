import { styled } from 'styled-components'

import { ReactComponent as LogoIcon } from '../resources/icons/logo.svg'

export default function Logo() {
    return (
        <Wrapper>
            <LogoIcon/>
            <h1><span>C</span>hat</h1>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    user-select: none;
    color: #FFF;

    span {
        color: ${({ theme }) => theme.colors['accent-1']}
    }

    h1 {
        font-weight: 700;
        font-size: 3rem;
        display: block;
    }

    svg {
        width: 5rem;
        fill: #FFF;
        height: auto;
    }
`