import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setUser } from '../store/slices/userSlice'
import { doc, setDoc } from 'firebase/firestore'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { auth } from '../firebase'
import { updateProfile } from 'firebase/auth'

import useStatus from './status.hook'
import { db, storage } from '../firebase'
import { selectUser } from '../store/slices/userSlice'

export default function useFirestore() {
    const { status, setLoading, setSuccess, setError, setProgress, setIdle } = useStatus() 
    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    const { id } = user

    useEffect(() => {
        window.addEventListener('offline', () => {
            console.log('offline')
            setError('Looks like you are offline')
        })
    }, [])
    
    function addUserToDatabase(uid, name) {
        setDoc(doc(db, 'users', uid), {
            name: name
        })
    }

    function updateAvatar(file, onFinish) {
        const extension = file.type.split('/')[1]
        const storageRef = ref(storage, `avatars/${id}.${extension}`);
        
        const uploadTask = uploadBytesResumable(storageRef, file)

        function onError() {
            if (status.type !== 'error') {
                setTimeout(() => {
                    setIdle()
                    if (onFinish) onFinish()
                }, 1250)
                setError()
            }
        }

        window.addEventListener('offline', onError)

        setLoading()
        uploadTask.on('state_changed',
            (snapshot) => {
                if (!navigator.onLine) onError()
                setProgress((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
            },
            () => onError(), 
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    updateProfile(auth.currentUser, { photoURL: downloadURL })
                        .then(() => dispatch(setUser({ ...user, photoURL: auth.currentUser.photoURL })))
                        .then(() => {
                            setSuccess()
                            
                            setTimeout(() => {
                                setIdle()
                                if (onFinish) onFinish()
                            }, 1250)
                        })
                })
            }
        )
    }

    return { addUserToDatabase, updateAvatar, status }
}