import React from 'react'
import { object } from 'prop-types'
import { Link } from 'react-router-dom'
import { AppBar, IconButton, Toolbar, Typography, withStyles } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import HeaderUser from './HeaderUser'

const styles = {
  root: {
    background: 'transparent',
    width: '100%',
    color: 'white',
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: 20,
  },
}

const Header = ({ classes }) =>
  <AppBar className={classes.root} color="default" elevation={0}>
    <Toolbar>
      <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" color="inherit" className={classes.grow}>
        <Link to="/">
          Partymaker
        </Link>
      </Typography>

      <HeaderUser />

    </Toolbar>
  </AppBar>

Header.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(Header)
