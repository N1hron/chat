import { Outlet } from 'react-router-dom'

import Sidebar from '../../components/sidebar/Sidebar'
import * as S from './style'


export default function MainLayout() {
    return (
        <S.MainLayout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
        >
            <Sidebar/>
            <main>
                <Outlet/>
            </main>
        </S.MainLayout>
    )
}

