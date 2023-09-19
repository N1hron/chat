import * as Yup from 'yup'

const validationSchema = Yup.object({
    'email': Yup.string().matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, 'Invalid email').required('This field is required'),
    'password': Yup.string().min(6, 'Password is too short!').required('This field is required'),
    'username': Yup.string().min(3, 'Username is too short!').required('This field is required'),
    'passwordConfirm': Yup.string().oneOf([Yup.ref('password')], 'Passwords don\'t match').required('This field is required')
})

export default validationSchema