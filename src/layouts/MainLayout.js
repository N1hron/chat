import { Outlet } from 'react-router-dom'
import { styled } from 'styled-components'
import { motion } from 'framer-motion'

import bgPattern from '../assets/icons/pattern-4.svg'
import Sidebar from '../components/Sidebar'


export default function MainLayout() {
    return (
        <Wrapper
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.1, duration: 0.1 }}
        >
            <Sidebar/>
            <main>
                <Outlet/>
            </main>
        </Wrapper>
    )
}

const Wrapper = styled(motion.div)`
    display: flex;
    min-height: 100vh;

    main {
        background-image: url(${ bgPattern });
        background-repeat: no-repeat;
        background-size: cover;
    }
`