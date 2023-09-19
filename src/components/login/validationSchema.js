import * as Yup from 'yup'

const validationSchema = Yup.object({
    'email': Yup.string().email('Invalid email').required('This field is required'),
    'password': Yup.string().min(6, 'Password is too short!').required('This field is required')
})

export default validationSchema