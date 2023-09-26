import useStatus from './status.hook'
import { doc, setDoc } from 'firebase/firestore'
import { db } from '../firebase';


export default function useFirestore() {
    const { status, setLoading, setSuccess, setError } = useStatus() 
    
    function addUserToFirestore(uid, name) {
        setDoc(doc(db, 'users', uid), {
            name: name
        })
    }

    return { addUserToFirestore }
}