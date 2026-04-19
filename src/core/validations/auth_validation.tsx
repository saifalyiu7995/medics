import * as Yup from 'yup';

export const authValidationSchema = Yup.object({
    email: Yup.string()
        .email('*Enter a valid email address')
        .required('*Email is required'),
    password: Yup.string().min(5).required('*Password is required')
});

