import React from 'react'
import { object, string, node, shape } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  root: {
    paddingTop: 55,
    height: '100%',
    margin: '0 auto',
    maxWidth: 600,
    '@media only screen and (max-width: 1280px)': {
      minWidth: '100%',
    },
  },
}

const Container = ({ children, className, classes }) =>
  <main className={`${classes.root} ${className}`}>
    {children}
  </main>

Container.propTypes = {
  classes: object.isRequired,
  children: node.isRequired,
  className: string,
}
Container.defaultProps = {
  className: '',
}

export default withStyles(styles)(Container)