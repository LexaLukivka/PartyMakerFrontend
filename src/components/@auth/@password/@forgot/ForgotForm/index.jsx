import React from 'react'
import { object } from 'prop-types'
import { CardContent, withStyles } from '@material-ui/core'
import AuthCardActions from 'components/@auth/AuthCard/AuthCardActions'
import FormikTextField from 'components/formik/FormikTextField'
import ServerMessage from 'components/formik/ServerMessage'
import { Field, Form } from 'formik'
import formik from './formik'

const styles = {
  root: {
    color: '#0083bc'
  },
  link: {
    marginTop: 10,
    marginLeft: 20,
  },
}

const ForgotForm = ({ classes }) =>
  <div className={classes.root}>
    <Form>
      <CardContent>
        <Field
          name="email"
          label="Email"
          variant="outlined"
          margin="normal"
          placeholder="email@example.com"
          component={FormikTextField}
        />
        <ServerMessage variant="caption" color="primary" name="message" />
      </CardContent>
      <AuthCardActions
        textButton="Дальше"
        linkTo="/auth/register"
        textLink="Создать аккаунт"
      />
    </Form>
  </div>

ForgotForm.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(formik(ForgotForm))
