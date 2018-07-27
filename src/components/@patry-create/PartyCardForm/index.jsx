import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles/index'
import Button from '@material-ui/core/es/Button/Button'
import Grid from '@material-ui/core/es/Grid/Grid'
import Typography from '@material-ui/core/es/Typography/Typography'
import TextField from '@material-ui/core/es/TextField/TextField'
import partyCreateFormik from './partyCreateFormik'
import Geosuggest from '../../Geosuggest'
import connector from '../connector'

const styles = theme => ({
  root: {
    maxWidth: 400,
    marginTop: theme.spacing.size4,
    '@media only screen and (max-width: 320px)': {
      marginTop: theme.spacing.size1,
    },
  },
  input: {
    marginBottom: theme.spacing.size2,
    '@media only screen and (max-width: 320px)': {
      marginBottom: theme.spacing.size1,
    },
  },
  inputNumber: {
    marginLeft: theme.spacing.size3,
    maxWidth: 70,
  },
  button: {
    color: 'white',
    background: 'linear-gradient(#BE05C5 30%, #9306BC 90%)',
    marginTop: theme.spacing.size4,
    '@media only screen and (max-width: 320px)': {
      marginTop: theme.spacing.size3,
    },
  },
  flex: {
    display: 'flex',
  },
  checked: {
    height: 25,
  },
  buttonGroup: {
    marginTop: theme.spacing.size4,
  },
})

class PartyCardForm extends React.Component {
  state = {
    isSubmited: false,
  }

  handleSubmit = (event) => {
    const { handleSubmit } = this.props

    handleSubmit(event)
  }

  handleBack = (activeStep) => {
    this.props.actions.stepper.stepperNavigationBack(activeStep)
  }

  hasError = (fieldName) => {
    const { isSubmited } = this.state
    const { errors, touched } = this.props

    return (!!errors[fieldName] && touched[fieldName] && isSubmited)
  }

  showHelperError = (fieldName) => {
    const { errors, touched } = this.props
    return (touched[fieldName] && errors[fieldName])
  }

  render() {
    const {
      classes,
      activeStep,
      values,
      handleChange,
      handleBlur,
      setFieldValue,
      setFieldTouched,
    } = this.props

    return (
      <form onSubmit={this.handleSubmit} className={classes.root}>
        <div className={classes.input}>
          <Typography variant="subheading">Название вечеринки</Typography>
          <TextField
            fullWidth
            name="title"
            label="Название"
            value={values.title}
            onChange={handleChange}
            onBlur={handleBlur}
            error={this.hasError('title')}
            helperText={this.showHelperError('title')}
          />
        </div>
        <div className={classes.input}>
          <Typography variant="subheading">В каком районе будет вечеринка?</Typography>
          <TextField
            fullWidth
            name="district"
            label="Район"
            value={values.district}
            onChange={handleChange}
            onBlur={handleBlur}
            error={this.hasError('district')}
            helperText={this.showHelperError('district')}
          />
        </div>
        <div className={classes.input}>
          <Typography variant="subheading">По какому адресу?</Typography>
          <Geosuggest
            fullWidth
            id="address"
            name="address"
            label="Адрес"
            value={values.address}
            onChange={setFieldValue}
            onBlur={setFieldTouched}
            error={this.hasError('address')}
            helperText={this.showHelperError('address')}
          />
        </div>
        <div className={classes.input}>
          <Typography variant="subheading">Во сколько начало?</Typography>
          <TextField
            fullWidth
            type="time"
            name="time"
            value={values.time}
            onChange={handleChange}
            onBlur={handleBlur}
            error={this.hasError('time')}
            helperText={this.showHelperError('time')}
          />
        </div>
        <div className={classes.input}>
          <Typography variant="subheading">Сколько людей нужно?</Typography>
          <Grid className={classes.flex}>
            <Grid item container justify="flex-start">
              <Typography variant="subheading">от</Typography>
              <TextField
                type="number"
                className={classes.inputNumber}
                name="peopleMax"
                value={values.peopleMax}
                onChange={handleChange}
                onBlur={handleBlur}
                error={this.hasError('peopleMax')}
                helperText={this.showHelperError('peopleMax')}
              />
            </Grid>
            <Grid item container justify="flex-end">
              <Typography variant="subheading">до</Typography>
              <TextField
                type="number"
                className={classes.inputNumber}
                name="peopleMin"
                value={values.peopleMin}
                onChange={handleChange}
                onBlur={handleBlur}
                error={this.hasError('peopleMin')}
                helperText={this.showHelperError('peopleMin')}
              />
            </Grid>
          </Grid>
        </div>
        <div className={classes.input}>
          <Typography variant="subheading">Описание</Typography>
          <TextField
            fullWidth
            multiline
            rows={2}
            rowsMax={3}
            name="description"
            label="Описание"
            value={values.description}
            onChange={handleChange}
            onBlur={handleBlur}
            error={this.hasError('description')}
            helperText={this.showHelperError('description')}
          />
        </div>
        <Grid container justify="center" className={classes.buttonGroup}>
          <Button
            disabled={activeStep === 0}
            onClick={() => this.handleBack(activeStep)}
          >
            Назад
          </Button>
          <Button
            type="submit"
            variant="contained"
            size="large"
            color="primary"
          >
            Дальше
          </Button>
        </Grid>
      </form>
    )
  }
}

PartyCardForm.propTypes = {
  classes: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  activeStep: PropTypes.number.isRequired,
  errors: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  values: PropTypes.object.isRequired,
  setFieldValue: PropTypes.func.isRequired,
  setFieldTouched: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}

export default withStyles(styles)(connector(partyCreateFormik(PartyCardForm)))
