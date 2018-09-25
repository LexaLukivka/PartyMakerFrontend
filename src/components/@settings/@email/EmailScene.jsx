import React from 'react'
import { func, object } from 'prop-types'
import { Button, withStyles } from '@material-ui/core'
import Helper from '../Helper'

import FormikText from '../formik/FormikText'
import formik from './formik'
import { Field } from 'formik'

import connector from '../connector'

const styles = theme => ({
  root: {
    paddingTop: 25,
    paddingRight: 15,
    paddingLeft: 15,
  },
  input: {
    marginBottom: theme.spacing.size3,
  },
  button: {
    marginTop: theme.spacing.size3,
  },
})

class EmailScene extends React.Component {
  componentDidMount() {
    const { actions } = this.props
    actions.header.setIcon('back')
    actions.header.setTitle('Email')
    document.title = 'Изменить email'
  }

  componentWillUnmount() {
    const { actions } = this.props
    actions.header.setIcon('menu')
    actions.header.resetTitle()
  }

  render() {
    const { classes, handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit} className={classes.root}>
        <div className={classes.input}>
          <Field
            label="Email"
            component={FormikText}
            name="email"
            type="email"
            placeholder="email@example.com"
          />
        </div>
        <Helper>Ваша почта будет видна всем всем людям на вашей вечеринке</Helper>
        <Button variant="raised" color="primary" className={classes.button} type="submit">
          Сохранить
        </Button>
      </form>
    )
  }
}

EmailScene.propTypes = {
  classes: object.isRequired,
  actions: object.isRequired,
  handleSubmit: func.isRequired,
}

export default formik(connector(withStyles(styles)(EmailScene)))
