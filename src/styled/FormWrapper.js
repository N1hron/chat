import { styled } from 'styled-components'

export const FormWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors['secondary-3']};
`