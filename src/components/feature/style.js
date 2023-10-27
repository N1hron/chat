import { styled } from 'styled-components'


export const Feature = styled.section`
    width: fit-content;
    min-width: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
`

export const Content = styled.div`
    padding: 15px;
    height: 1px;
    flex-grow: 1;

    &>div {
        height: 100%;
    }
`