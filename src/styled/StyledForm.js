import { styled } from 'styled-components'

export const StyledForm = styled.form`
    background-color: #FFFFFFB6;
    border-radius: 10px;
    padding: 60px 20px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    color: ${({ theme }) => theme.colors['accent-2']};
    backdrop-filter: blur(10px);
    position: relative;

    p {
        margin-top: 1rem;
        
        a {
            color: ${({ theme }) => theme.colors['accent-1']};
        }
    }

    button {
        margin-top: 1rem;
    }

    legend {
        align-self: center;
        font-size: 2rem;
    }
`