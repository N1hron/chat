import { Outlet } from 'react-router-dom'
import * as S from './style'


export default function UnauthorizedLayout() {
    return (
        <S.UnauthorizedLayout>
            <Outlet/>
        </S.UnauthorizedLayout>
    )
}

