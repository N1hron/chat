import { styled } from 'styled-components'


export const Feature = styled.section`
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: ${({ theme }) => theme.colors['secondary-3']}B6;
`

export const Content = styled.div`
    /* box-shadow: inset 0px 0px 50px 0px rgba(0, 0, 0, 0.3); */
    flex-grow: 1;
    padding: 15px;
`