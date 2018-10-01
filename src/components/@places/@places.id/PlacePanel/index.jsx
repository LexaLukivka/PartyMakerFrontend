/* eslint-disable no-console */
import React from 'react'
import { object, string, shape, func, number } from 'prop-types'
import ReactStars from 'react-stars'
import { Button, Typography, withStyles } from '@material-ui/core'
import LocationIcon from 'mdi-react/LocationIcon'
import { Link } from 'react-router-dom'

const styles = theme => ({
  root: {
    height: '100%',
    flexGrow: 1,
    overflow: 'auto',
    // background: theme.palette.primary.main,
    // color: 'white',
  },
  content: {
    padding: 15,
    position: 'relative',
    paddingTop: 30,
    [theme.breakpoints.up('md')]: {
      padding: 30,
      paddingTop: 40,
    },
  },
  rating: {
    display: 'flex',
    alignItems: 'center',
    paddingBottom: 30,
  },
  rating_number: {
    fontSize: '18px',
    padding: '0 5px',
  },
  location: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 30,
    color: '#5B0175',
  },
  locationIcon: {
    fontSize: 16,
    paddingRight: 10,

  },
  floatingButton: {
    position: 'absolute',
    top: -27,
    right: 15,
  },
  title: {
    fontWeight: 'normal',
    marginLeft: 5,
    marginBottom: 5,
  },
  actionButtonContainer: {
    marginTop: 30,
    marginBottom: 30,

  },
  actionButton: {
    borderColor: 'white',
  },
  whenPriceContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
})

const PlaceCard = ({ classes, place, onVote, vote }) => {
  let voteNumber = vote || parseFloat(place.rating)
  voteNumber = voteNumber ? voteNumber.toFixed(1) : null

  return (
    <section className={classes.root}>
      <div className={classes.content}>
        <Typography color="inherit" variant="title" className={classes.title}> {place.title} </Typography>
        <a href={`http://www.google.com/maps/?q=${place.address.address}`}>
          <div className={classes.location}>
            <Typography color="inherit" variant="subheading" className={classes.locationIcon}>
              <LocationIcon />
            </Typography>

            <Typography color="inherit" variant="body1">
              {place.address.address}
            </Typography>
          </div>
        </a>

        <div className={classes.rating}>
          <Typography color="inherit" className={classes.rating_number}> {voteNumber} </Typography>
          <ReactStars
            count={5}
            value={parseFloat(voteNumber)}
            onChange={onVote}
            size={32}
            color2={vote ? '#689f38' : '#ffd700'}
          />
        </div>
        <div className={classes.whenPriceContainer}>
          <div>
            <Typography>Когда?</Typography>
            <Typography variant="caption">{place.working_hours}</Typography>
          </div>
          <div>
            <Typography>Сколько стоит?</Typography>
            <Typography variant="caption">{place.price}</Typography>
          </div>
        </div>
        <Typography color="inherit" align="justify">
          {place.description}
        </Typography>
        <div className={classes.actionButtonContainer}>
          <Link to={`/group/create?place_id=${place.id}`}>
            <Button
              variant="raised"
              fullWidth
              className={classes.actionButton}
              color="primary"
            >
              Создать здесь свою компанию
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

PlaceCard.propTypes = {
  classes: object.isRequired,
  vote: number,
  place: shape({
    admin: object.isRequired,
    title: string.isRequired,
    address: shape({
      address: string.isRequired,
    }).isRequired,
    description: string.isRequired,
  }).isRequired,
  onVote: func.isRequired,
}

PlaceCard.defaultProps = {
  vote: null,
}

export default withStyles(styles)(PlaceCard)