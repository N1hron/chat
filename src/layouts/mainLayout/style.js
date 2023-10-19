import { styled } from 'styled-components'
import { motion } from 'framer-motion'

import bgPattern from '../../assets/icons/pattern-4.svg'


export const MainLayout = styled(motion.div)`
    display: flex;
    min-height: 100vh;
    padding-left: ${ props => props.$isSidebarExpanded ? '300px' : '80px' };

    main {
        background-image: url(${ bgPattern });
        background-repeat: no-repeat;
        background-size: cover;
    }
`