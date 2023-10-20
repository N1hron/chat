import { Outlet } from 'react-router-dom'
import { useState } from 'react'

import * as S from './style'
import Sidebar from '../../components/sidebar/Sidebar'


export default function MainLayout() {
    const [isSidebarExpanded, setIsSidebarExpanded] = useState(true)

    return (
        <>
            <Sidebar isExpanded={ isSidebarExpanded } setIsExpanded={ setIsSidebarExpanded }/>
            <S.MainContent $isSidebarExpanded={ isSidebarExpanded }>
                <Outlet/>
            </S.MainContent>
        </>
    )
}

