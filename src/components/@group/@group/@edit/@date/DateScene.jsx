import React from 'react'
import { func, object } from 'prop-types'
import { withStyles, Typography, TextField, Button } from '@material-ui/core'
import connector from '../connector'
import formik from './formik'
import moment from 'moment'

const styles = theme => ({
  root: {
    paddingTop: 25,
    paddingRight: 15,
    paddingLeft: 15,
  },
  input: {
    marginBottom: theme.spacing.size3,
  },
})

class DateScene extends React.Component {
  componentDidMount() {
    const { actions } = this.props
    actions.header.back()
    actions.header.title('Дата и время')
  }

  componentWillUnmount() {
    const { actions } = this.props
    actions.header.menu()
    actions.header.resetTitle()
  }

  hasError = (fieldName) => {
    const { errors, touched } = this.props
    return (!!errors[fieldName] && touched[fieldName])
  }

  showHelperError = (fieldName) => {
    const { errors, touched } = this.props
    return (touched[fieldName] && errors[fieldName])
  }

  render() {
    const { classes, values, handleSubmit, handleChange, handleBlur } = this.props
    return (
      <form onSubmit={handleSubmit} className={classes.root}>
        <div className={classes.input}>
          <Typography variant="subheading">Приходить на</Typography>
          <TextField
            fullWidth
            name="date"
            type="datetime-local"
            placeholder="Дата и время"
            value={moment(values.date).format('YYYY-MM-DDT20:00')}
            onChange={handleChange}
            onBlur={handleBlur}
            error={this.hasError('date')}
            helperText={this.showHelperError('date')}
          />
        </div>
        <Button variant="raised" color="primary" type="submit">
          Сохранить
        </Button>
      </form>
    )
  }
}

DateScene.propTypes = {
  classes: object.isRequired,
  actions: object.isRequired,
  values: object.isRequired,
  errors: object.isRequired,
  touched: object.isRequired,
  handleSubmit: func.isRequired,
  handleChange: func.isRequired,
  handleBlur: func.isRequired,
}

export default formik(connector(withStyles(styles)(DateScene)))