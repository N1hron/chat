import * as S from './style'
import { modalAppearVariants as variants } from '../../animations/variants'


export default function Modal({ children, icon }) {
    return (
        <S.Modal 
            variants={ variants }
            initial='hidden'
            animate='visible'
            transition={{ duration: 0.2 }}
            $hasIcon={ !!icon }
        >
            { icon && <S.IconContainer>{ icon }</S.IconContainer> }
            { children }
        </S.Modal>
    )
}