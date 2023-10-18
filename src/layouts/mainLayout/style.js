import { styled } from 'styled-components'
import { motion } from 'framer-motion'

import bgPattern from '../../assets/icons/pattern-4.svg'


export const MainLayout = styled(motion.div)`
    display: flex;
    min-height: 100vh;
    padding-left: 300px;

    main {
        background-image: url(${ bgPattern });
        background-repeat: no-repeat;
        background-size: cover;
    }
`