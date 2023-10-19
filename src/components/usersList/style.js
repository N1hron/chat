import { styled } from 'styled-components'

import Block from '../styled/Block'


export const UsersList = styled(Block)`
    ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: space-between;
    overflow-x: scroll;
`

export const User = styled.li`
    display: flex;
    align-items: center;
    gap: 10px;
`

export const Avatar = styled.div`
    height: 4.0125rem;
    width: 4.0125rem;
    border-radius: 10px;
    overflow: hidden;
`

export const UsersListPageSelect = styled.div`
    display: flex;
    gap: 10px;
    justify-content: space-between;
    align-items: center;
`

export const Page = styled.p`
    font-size: 1.75rem;
    background-color: var(--accent-color-1);
    color: #FFF;
    padding: 0.5rem 0.75rem;
    border-radius: 0.75rem;
`