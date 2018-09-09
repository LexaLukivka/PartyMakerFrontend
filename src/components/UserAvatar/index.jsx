import React, { Component } from 'react'
import { object, shape, string, bool } from 'prop-types'
import { Avatar, withStyles } from '@material-ui/core'
import classNames from 'classnames'
import initialsFromUsername from 'utils/initialsFromUsername'
import connector from './connector'

const styles = {
  root: {
    width: 60,
    height: 60,
  },
  small: {
    width: 40,
    fontSize: 14,
    height: 40,
  },

}

class UserAvatar extends Component {
  showFullAvatar = () => {
    const { actions, user } = this.props
    if (user.avatar_url) {
      actions.pictureModal.show(user.avatar_url)
    }
  }

  overrides = () => {
    const { classes, small } = this.props
    return classNames({
      [classes.root]: true,
      [classes.small]: small,
    })
  }

  render() {
    const { user } = this.props
    return (
      <Avatar className={this.overrides()} src={user.avatar_url} onClick={this.showFullAvatar}>
        {user.avatar_url ? null : initialsFromUsername(user.name)}
      </Avatar>
    )
  }
}

UserAvatar.propTypes = {
  classes: object.isRequired,
  actions: object.isRequired,
  small: bool,
  user: shape({
    avatar_url: string,
    name: string,
  }).isRequired,
}

UserAvatar.defaultProps = {
  small: false,
}

export default withStyles(styles)(connector(UserAvatar))
