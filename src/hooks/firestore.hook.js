import { useSelector, useDispatch } from 'react-redux'
import { auth } from '../firebase'
import { doc, setDoc, getDocs, query, collection } from 'firebase/firestore'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { updateProfile } from 'firebase/auth'

import useStatus from './status.hook'
import { db, storage } from '../firebase'
import { selectUser, setPhotoURL } from '../store/slices/usersSlice'


export default function useFirestore() {
    const dispatch = useDispatch(),
          user = useSelector(selectUser),
          { id: userId } = user,
          { status, setLoading, setSuccess, setError, setIdle } = useStatus() 
    
    function addUserToDatabase(user) {
        const { uid, name } = user

        setDoc(doc(db, 'users', uid), {
            id: uid,
            name: name
        })
    }

    function getUsers() {
        const q = query(collection(db, 'users'))
        
        return getDocs(q).then(querySnapshot => {
            return querySnapshot.docs.map(doc => doc.data())
        })
    }

    async function updateAvatar(img) {
        const ext = img.type.split('/')[1],
              storageRef = ref(storage, `avatars/${userId}.${ext}`)

        setLoading()

        try {
            const snapshot = await uploadBytes(storageRef, img)
            const downloadURL = await getDownloadURL(snapshot.ref)
            
            await setDoc(
                doc(db, 'users', userId), 
                { photoURL: downloadURL }, 
                { merge: true }
            ).then(() => updateProfile(auth.currentUser, { photoURL: downloadURL }))
            
            dispatch(setPhotoURL(auth.currentUser.photoURL))
            setSuccess()
            
        } catch {
            setError()
        }

        setIdle()
    }

    return { 
        addUserToDatabase, 
        updateAvatar, 
        getUsers, 
        status 
    }
}