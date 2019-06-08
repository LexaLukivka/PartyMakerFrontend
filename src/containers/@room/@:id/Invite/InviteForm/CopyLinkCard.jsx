import React from 'react'
import { object, string } from 'prop-types'
import { Typography, withStyles } from '@material-ui/core'
import { OutlineCard } from 'components'

const styles = {
  root: {
    display: 'flex',
    alignItems: 'center',
    minHeight: 300,
    padding: 30,
  },
}

const CopyLinkCard = ({ classes, token }) =>
  <OutlineCard className={classes.root}>
    <div>
      <Typography
        gutterBottom
        align="center"
        color="textSecondary"
      >
        Скопируйте эту ссылку и отправьте её вашим гостям что бы пригласить
      </Typography>
      <Typography
        align="center"
        variant="subtitle1"
        color="primary"
      >
        <a target="_blank" href={`${window.location.hostname}/invite/${token}`}>{window.location.hostname}/invite/{token}</a>

      </Typography>
    </div>
  </OutlineCard>

CopyLinkCard.propTypes = {
  classes: object.isRequired,
  token: string.isRequired,
}

export default withStyles(styles)(CopyLinkCard)
