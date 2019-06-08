import React from 'react'
import { shape, string } from 'prop-types'
import { Redirect, Route } from 'react-router-dom'
import Auth from 'services/Auth'
import Storage from 'services/Storage'

const AuthGate = (props) => {
  const { ...rest } = props
  const user = Auth.user()
  const previous_user_location = props.location.pathname

  Storage.put({ previous_user_location })

  if (!user) return <Redirect to="/auth/login" />

  return <Route {...rest} />
}

AuthGate.propTypes = {
  location: shape({
    pathname: string,
  }),
}

export default AuthGate
