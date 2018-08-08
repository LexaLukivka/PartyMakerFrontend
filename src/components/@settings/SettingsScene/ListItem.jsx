import React from 'react'
import { object, node, string } from 'prop-types'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import { ListItem } from '@material-ui/core'

const styles = {
  root: {
    paddingLeft: 0,
    paddingTop: 15,
    paddingBottom: 15,
  },
}

const MyListItem = ({ classes, children, to, ...props }) =>
  <ListItem {...props} button divider className={classes.root}>
    {children}
  </ListItem>

MyListItem.propTypes = {
  classes: object.isRequired,
  children: node.isRequired,
  to: string.isRequired,
}

export default withStyles(styles)(MyListItem)
