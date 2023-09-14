import { styled } from 'styled-components'

import Header from './Header'

const PageContent = styled.section`
    display: flex;
    flex-direction: column;
    height: 100%;
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