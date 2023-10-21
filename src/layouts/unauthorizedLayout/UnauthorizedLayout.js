import { Outlet } from 'react-router-dom'

import RequireUnauthorized from '../../components/RequireUnauthorized'
import * as S from './style'


export default function UnauthorizedLayout() {
    return (
        <RequireUnauthorized>
            <S.UnauthorizedLayout>
                <S.Container>
                    <Outlet/>
                </S.Container>
            </S.UnauthorizedLayout>
        </RequireUnauthorized>
    )
}