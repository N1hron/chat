import { styled } from 'styled-components'
import { Outlet } from 'react-router-dom'


export const Wrapper = styled.div`
    position: relative;
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--secondary-color-3);
    padding: 30px 0;
`

export default function UnauthorizedLayout() {
    return (
        <Wrapper>
            <Outlet/>
        </Wrapper>
    )
}