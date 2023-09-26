import { styled } from 'styled-components'


export const Content = styled.div`
    display: grid;
    gap: 15px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    height: 100%;

    &>div:nth-child(3) {
        grid-column: 2/3;
        grid-row: 1/3;
    }
`