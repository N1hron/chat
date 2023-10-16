import { useEffect, useState } from 'react'

import * as S from './style'
import { ReactComponent as DefaultAvatar } from '../../assets/icons/profile-picture.svg'
import { ReactComponent as Spinner } from '../../assets/icons/spinner.svg'


export default function AvatarPicture({ src, alt }) {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (!src) setIsLoading(false)
    }, [])

    return (
        <S.AvatarPicture>
            { isLoading ? <Spinner style={{ maxWidth: '50%' }} /> : null }
            {
                src ?
                <img 
                    src={ src } 
                    alt={ alt } 
                    onLoad={ () => setIsLoading(false) } 
                    style={{ display: isLoading ? 'none' : 'block' }} 
                /> : 
                <DefaultAvatar />
            }
        </S.AvatarPicture>
    )
}