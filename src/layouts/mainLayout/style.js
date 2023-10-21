import { styled } from 'styled-components'

import bgPattern from '../../assets/icons/pattern-4.svg'


export const MainContent = styled.main`
    flex-grow: 1;
    overflow-y: auto;
    background-image: url(${ bgPattern });
    background-repeat: no-repeat;
    background-size: cover;
`