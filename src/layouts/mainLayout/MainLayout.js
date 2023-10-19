import { Outlet } from 'react-router-dom'
import { useState } from 'react'

import * as S from './style'
import { appearVariants as variants } from '../../animations/variants'
import Sidebar from '../../components/sidebar/Sidebar'


export default function MainLayout() {
    const [isSidebarExpanded, setIsSidebarExpanded] = useState(true)

    return (
        <S.MainLayout
            variants={ variants }
            initial='hidden'
            animate='visible'
            transition={{ duration: 0.25 }}
            $isSidebarExpanded={ isSidebarExpanded }
        >
            <Sidebar
                isExpanded={ isSidebarExpanded }
                setIsExpanded={ setIsSidebarExpanded }
            />
            <main>
                <Outlet/>
            </main>
        </S.MainLayout>
    )
}

