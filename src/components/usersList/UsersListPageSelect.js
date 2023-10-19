import * as S from './style'
import { Button } from '../styled/Button'
import { ReactComponent as BackIcon } from '../../assets/icons/navigate_before.svg'
import { ReactComponent as NextIcon } from '../../assets/icons/navigate_next.svg'


export default function UsersListPageSelect({ page, setPage, numberOfPages }) {
    return (
        <S.UsersListPageSelect>
            <Button.Light onClick={ () => setPage(prev => prev -= 1) } disabled={ page <= 1 }>
                <BackIcon/>
            </Button.Light>
            
            <S.Page>{ page }</S.Page>

            <Button.Light onClick={ () => setPage(prev => prev += 1) } disabled={ page >= numberOfPages }>
                <NextIcon/>
            </Button.Light>
        </S.UsersListPageSelect>
    )
}