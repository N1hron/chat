import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { doc, setDoc, getDocs, query, collection } from 'firebase/firestore'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { auth } from '../firebase'
import { updateProfile } from 'firebase/auth'

import useStatus from './status.hook'
import { db, storage } from '../firebase'
import { selectUser, setPhotoURL } from '../store/slices/usersSlice'

export default function useFirestore() {
    const { status, setLoading, setSuccess, setError, setProgress, setIdle } = useStatus() 
    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    const { id: userId } = user

    useEffect(() => {
        window.addEventListener('offline', () => {
            // console.log('offline')
            setError('Looks like you are offline')
        })
    }, [])
    
    function addUserToDatabase(uid, name) {
        setDoc(doc(db, 'users', uid), {
            id: uid,
            name: name
        })
    }

    function getUsers() {
        const q = query(collection(db, 'users'))
        
        return getDocs(q)
            .then(querySnapshot => {
                console.log(querySnapshot.docs)
                return querySnapshot.docs.map(doc => doc.data())
            })
    }

    function updateAvatar(file, callback) {
        const ext = file.type.split('/')[1]
        const storageRef = ref(storage, `avatars/${userId}.${ext}`);
        const uploadTask = uploadBytesResumable(storageRef, file)

        window.addEventListener('offline', onError)

        function onError() {
            if (status.type !== 'error') {
                setError()
                onFinish()
            }
        }

        function onFinish() {
            setTimeout(() => {
                setIdle()
                if (callback) callback()
                window.removeEventListener('offline', onError)
            }, 1250)
        }

        setLoading()
        uploadTask.on('state_changed',
            (snapshot) => {
                if (!navigator.onLine) onError()
                setProgress((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
            },
            () => onError(), 
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setDoc(doc(db, 'users', userId), { photoURL: downloadURL }, { merge: true })
                    updateProfile(auth.currentUser, { photoURL: downloadURL })
                        .then(() => dispatch(setPhotoURL(auth.currentUser.photoURL)))
                        .then(() => {
                            setSuccess()
                            onFinish()
                        })
                })
            }
        )
    }

    return { addUserToDatabase, updateAvatar, getUsers, status }
}