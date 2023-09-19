import { Outlet } from 'react-router-dom'
import { styled } from 'styled-components'
import bgPattern from '../assets/icons/pattern-4.svg'


import Sidebar from '../components/Sidebar'

export default function MainLayout() {
    return (
        <Wrapper>
            <Sidebar/>
            <main>
                <Outlet/>
            </main>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    min-height: 100%;

    main {
        background-image: url(${ bgPattern });
        background-repeat: no-repeat;
        background-size: cover;
    }
`