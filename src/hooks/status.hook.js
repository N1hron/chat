import { useState } from 'react'


const initial = {
    type: 'idle',
    message: null
}

export default function useStatus() {
    const [status, setStatus] = useState(initial)

    function setLoading(message = '') {
        setStatus({
            type: 'loading',
            message
        })
    }

    function setSuccess(message = '') {
        setStatus({
            type: 'success',
            message
        })
    }

    function setError(message = '') {
        setStatus({
            type: 'error',
            message
        })
    }

    function setIdle() {
        setStatus(initial)
    }

    return { 
        status, 
        setLoading, 
        setSuccess, 
        setError, 
        setIdle 
    }
}