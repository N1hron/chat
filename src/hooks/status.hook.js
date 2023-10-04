import { useState } from 'react'

const initial = {
    type: 'idle',
    message: null,
    progress: null
}

export default function useStatus() {
    const [status, setStatus] = useState(initial)

    function setLoading(message = '') {
        setStatus(prevStatus => ({
            ...prevStatus,
            type: 'loading',
            message
        }))
    }

    function setSuccess(message = '') {
        setStatus(prevStatus => ({
            ...prevStatus,
            type: 'success',
            message
        }))
    }

    function setError(message = '') {
        setStatus(prevStatus => ({
            ...prevStatus,
            type: 'error',
            message
        }))
    }

    function setProgress(progress) {
        setStatus(prevStatus => ({
            ...prevStatus, 
            progress
        }))
    }

    function setIdle() {
        setStatus(initial)
    }

    return { status, setLoading, setSuccess, setError, setIdle, setProgress }
}