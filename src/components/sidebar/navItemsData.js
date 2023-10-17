import { ReactComponent as ProfileIcon } from '../../assets/icons/profile.svg'
import { ReactComponent as ChatIcon } from '../../assets/icons/chat.svg'
import { ReactComponent as PeopleIcon } from '../../assets/icons/users.svg'


const navItemsData = [
    {
        id: 0,
        label: 'Profile',
        to: '/profile',
        icon: <ProfileIcon/>
    },
    {
        id: 1,
        label: 'Messages',
        to: '/messages',
        icon: <ChatIcon/>
    },
    {
        id: 2,
        label: 'People',
        to: '/people',
        icon: <PeopleIcon/>
    }
]

export default navItemsData