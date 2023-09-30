import * as S from './style'
import { appearVariants as variants } from '../../animations/variants'


export default function Overlay({ children }) {
    return (
        <S.Overlay
            variants={ variants }
            initial='hidden'
            animate='visible'
            transition={{ duration: 0.2 }}
        >{ children }</S.Overlay>
    )
}