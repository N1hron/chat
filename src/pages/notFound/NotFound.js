import StatusMessage from '../../components/statusMessage/StatusMessage'
import * as S from './style'

export default function NotFound() {

    return (
        <S.NotFound>
            <StatusMessage type='error'>404 Not Found</StatusMessage>
        </S.NotFound>
    )
}