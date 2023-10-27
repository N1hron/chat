import { useState, useEffect } from 'react'
import { styled } from 'styled-components'

import { ReactComponent as Spinner } from '../assets/icons/spinner.svg'

export default function ImageWithLoading({ src, alt }) {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => { if (!src) setIsLoading(false) }, [])
    useEffect(() => setIsLoading(true), [src])

    const setStyle = () => ({ display: isLoading ? 'none' : 'inline' })
    const onLoad = () => setIsLoading(false)

    return (
        <>
            { isLoading && <StyledSpinner/> }
            <img 
                src={ src } 
                alt={ alt } 
                style={ setStyle() }
                onLoad={ onLoad }
            />
        </>
    )
}

const StyledSpinner = styled(Spinner)`
    max-width: min(150px, 70%);
`