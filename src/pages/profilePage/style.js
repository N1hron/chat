import { styled } from 'styled-components'


export const Content = styled.div`
    display: grid;
    gap: 15px;
    grid-template-columns: repeat(2, minmax(max-content, 1fr));
    grid-template-rows: repeat(2, max-content);
    height: 100%;

    &>div:nth-child(3) {
        grid-column: 2/3;
        grid-row: 1/3;
    }
`