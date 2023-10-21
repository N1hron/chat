import { styled } from 'styled-components'

import bgPattern from '../../assets/icons/pattern-4.svg'


export const MainLayout = styled.div`
    display: flex;
    height: 100dvh;
    background-image: url(${ bgPattern });
    background-repeat: no-repeat;
    background-size: cover;
`

export const Main = styled.main`
    flex-grow: 1;
    overflow-y: auto;
    background-color: ${({ theme }) => theme.colors['secondary-3']}B6;
`