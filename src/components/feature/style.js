import { styled } from 'styled-components'


export const Feature = styled.section`
    width: 100%;
    min-height: 100vh;
    background-color: ${({ theme }) => theme.colors['secondary-3']}B6;
`

export const Content = styled.div`
    flex-grow: 1;
    padding: 15px;
    height: calc(100% - 4.875rem);
`