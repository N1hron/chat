import { styled } from 'styled-components'

const HeaderContent = styled.header`
    height: 80px;
    flex-grow: 0;
    background-color: ${({ theme }) => theme.colors['secondary-3']};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 40px;
    border-bottom: 4px solid ${({ theme }) => theme.colors['accent-1']};

    & h2 {
        font-size: 2rem;
        color: ${({ theme }) => theme.colors['accent-2']};
    }
`

export default function Header({ title }) {
    return (
        <HeaderContent>
            <h2>{ title }</h2>
        </HeaderContent>
    )
}