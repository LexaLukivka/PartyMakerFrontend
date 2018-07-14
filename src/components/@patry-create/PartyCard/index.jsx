import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles/index'
import Grid from '@material-ui/core/es/Grid/Grid'
import Typography from '@material-ui/core/es/Typography/Typography'
import TextField from '@material-ui/core/es/TextField/TextField'
import partyCreateFormik from '../partyCreateFormik'
import Geosuggest from '../../Geosuggest'

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
})

const PartyCard = ({ classes, values, handleChange, handleBlur, setFieldValue, setFieldTouched }) =>
  <form onSubmit={this.handleSubmit} className={classes.root}>
    <div className={classes.input}>
      <Typography variant="subheading">В каком районе будет вечеринка?</Typography>
      <TextField
        fullWidth
        name="district"
        label="Район"
        value={values.district}
        onChange={handleChange}
        onBlur={handleBlur}
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
            name="after"
            value={values.after}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Grid>
        <Grid item container justify="flex-end">
          <Typography variant="subheading">до</Typography>
          <TextField
            type="number"
            className={classes.inputNumber}
            name="before"
            value={values.before}
            onChange={handleChange}
            onBlur={handleBlur}
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
      />
    </div>
  </form>

PartyCard.propTypes = {
  classes: PropTypes.object.isRequired,
  values: PropTypes.object.isRequired,
  setFieldValue: PropTypes.func.isRequired,
  setFieldTouched: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}

export default withStyles(styles)(partyCreateFormik(PartyCard))
