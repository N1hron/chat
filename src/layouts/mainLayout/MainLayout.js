import { Outlet } from 'react-router-dom'

import Sidebar from '../../components/sidebar/Sidebar'
import * as S from './style'
import { appearVariants as variants } from '../../animations/variants'


export default function MainLayout() {
    return (
        <S.MainLayout
            variants={ variants }
            initial='hidden'
            animate='visible'
            exit='hidden'
            transition={{ duration: 0.25 }}
        >
            <Sidebar/>
            <main>
                <Outlet/>
            </main>
        </S.MainLayout>
    )
}

