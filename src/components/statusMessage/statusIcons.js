import { ReactComponent as SpinnerIcon } from '../../assets/icons/spinner.svg'
import { ReactComponent as SuccessIcon } from '../../assets/icons/done.svg'
import { ReactComponent as ErrorIcon } from '../../assets/icons/error.svg'


const statusIcons = {
    'loading': <SpinnerIcon/>,
    'success': <SuccessIcon/>,
    'error': <ErrorIcon/>
}

export default statusIcons