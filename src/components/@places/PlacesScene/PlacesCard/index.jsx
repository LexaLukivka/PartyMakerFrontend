import React from 'react'
import { object, shape, string } from 'prop-types'
import { Button, Card, CardActions, CardContent, CardMedia, Typography, withStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'
import truncate from 'lodash/truncate'
import connector from './connector'

const styles = () => ({
  root: {
    maxWidth: 400,
    margin: '10px 10px',
  },
  media: {
    height: 250,
  },
})

const PlacesCard = ({ classes, place }) =>
  <Card className={classes.root}>
    <Link to={`/places/${place.id}`}>
      <CardMedia
        className={classes.media}
        image={place.pictures[0]}
        title={place.title}
      />
    </Link>
    <CardContent>
      <Link to={`/places/${place.id}`}>
        <Typography gutterBottom variant="headline" component="h2">
          {place.title}
        </Typography>
      </Link>
      <Typography component="p">
        {truncate(place.description, { length: 200 })}
      </Typography>
    </CardContent>
    <CardActions>
      <Link to={`/places/${place.id}`}>
        <Button color="primary">
          Смотреть
        </Button>
      </Link>
    </CardActions>
  </Card>

PlacesCard.propTypes = {
  classes: object.isRequired,
  place: shape({
    title: string,
    primary_picture: string,
    description: string,
  }).isRequired,
}

export default withStyles(styles)(connector(PlacesCard))