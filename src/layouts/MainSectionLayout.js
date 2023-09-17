import { styled } from 'styled-components'

import Header from '../components/Header'

export default function MainSection({ title, children }) {
    return (
        <Wrapper>
            <Header title={ title }/>
            <MainContent>
                { children }
            </MainContent>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    height: 100%;
`

const MainContent = styled.div`
    box-shadow: inset 0px 0px 50px 0px rgba(0, 0, 0, 0.3);
    background-color: ${({ theme }) => theme.colors['secondary-3']}B6;
    flex-grow: 1;
`