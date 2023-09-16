import { styled } from 'styled-components'
import { Outlet } from 'react-router-dom'

export const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--secondary-color-3);
`

export default function AnonymousLayout() {
    return (
        <Wrapper>
            <Outlet/>
        </Wrapper>
    )
}