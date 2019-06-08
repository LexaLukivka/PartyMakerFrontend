import { withFormik } from 'formik'
import * as Yup from 'yup'
import to from 'util-to'
import transformValidationApi from 'src/utils/transformValidationApi'

const formik = withFormik({
  validationSchema: Yup.object()
    .shape({
      name: Yup.string()
        .required('Это поле является обязательным'),
      email: Yup.string()
        .email('Неправильный email адрес!')
        .required('Это поле является обязательным'),
      password: Yup.string()
        .min(6, 'Пароль должен быть больше чем 6 символов')
        .required('Это поле является обязательным'),
    }),
  mapPropsToValues: () => ({
    name: '',
    email: '',
    password: '',
  }),

  handleSubmit: async (form, { props, setErrors, setSubmitting }) => {
    const [err] = await to(props.onSubmit(form))

    if (err) setErrors(transformValidationApi(err))
    setSubmitting(false)
  },
  displayName: 'RegisterForm',
})

export default formik
