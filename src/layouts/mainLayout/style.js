import { styled } from 'styled-components'

import bgPattern from '../../assets/icons/pattern-4.svg'


export const MainContent = styled.main`
    display: flex;
    height: 100vh;
    padding-left: ${ props => props.$isSidebarExpanded ? '275px' : '80px' };

    main {
        background-image: url(${ bgPattern });
        background-repeat: no-repeat;
        background-size: cover;
        overflow-y: scroll;
    }
`