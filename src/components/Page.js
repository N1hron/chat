import { styled } from 'styled-components'

import Header from './header/Header'

const PageContent = styled.section`
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: ${({ theme }) => theme.colors['secondary-3']}B6;
`

const PageBody = styled.div`
    box-shadow: inset 0px 0px 50px 0px rgba(0, 0, 0, 0.3);
    flex-grow: 1;
`

export default function Page({ title, children }) {
    return (
        <PageContent>
            <Header title={title}/>
            <PageBody>
                { children }
            </PageBody>
        </PageContent>
    )
}