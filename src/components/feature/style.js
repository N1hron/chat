import { styled } from 'styled-components'


export const Feature = styled.section`
    width: fit-content;
    min-width: 100%;
    min-height: 100%;
    background-color: ${({ theme }) => theme.colors['secondary-3']}B6;
`

export const Content = styled.div`
    padding: 15px;
`