import { Outlet } from 'react-router-dom'
import { styled } from 'styled-components'
import bgPattern from '../resources/icons/pattern-4.svg'

import Sidebar from '../components/Sidebar'

export default function HomeLayout() {
    return (
        <HomeLayoutWrapper>
            <Sidebar/>
            <main>
                <Outlet/>
            </main>
        </HomeLayoutWrapper>
    )
}

const HomeLayoutWrapper = styled.div`
    display: flex;
    height: 100%;

    main {
        background-image: url(${ bgPattern });
        background-repeat: no-repeat;
        background-size: cover;
    }
`