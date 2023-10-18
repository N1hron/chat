import { styled } from 'styled-components'


export const Feature = styled.section`
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: ${({ theme }) => theme.colors['secondary-3']}B6;
`

export const Content = styled.div`
    flex-grow: 1;
    padding: 15px;
    display: flex;
    flex-direction: column;
`