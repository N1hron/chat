import { Outlet } from 'react-router-dom'
import { useState } from 'react'

import * as S from './style'
import Sidebar from '../../components/sidebar/Sidebar'
import RequireAuth from '../../components/RequireAuth'


export default function MainLayout() {
    const [isSidebarExpanded, setIsSidebarExpanded] = useState(true)

    return (
        <RequireAuth>
            <S.MainLayout>
                <Sidebar isExpanded={ isSidebarExpanded } setIsExpanded={ setIsSidebarExpanded }/>
                <S.Main $isSidebarExpanded={ isSidebarExpanded }>
                    <Outlet/>
                </S.Main>
            </S.MainLayout>
        </RequireAuth>
    )
}

