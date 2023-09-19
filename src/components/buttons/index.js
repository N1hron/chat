import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
import { buttonStyles, buttonPrimaryStyles } from './style'


export const Button = styled.button`
    ${ buttonStyles }
`

export const ButtonPrimary = styled(Button)`
    ${ buttonPrimaryStyles }
`

export const LinkButton = styled(Link)`
    ${ buttonStyles }
    text-decoration: none;
`

export const LinkButtonPrimary = styled(LinkButton)`
    ${ buttonPrimaryStyles }
`