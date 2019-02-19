import React from 'react'
import ReactDOM from 'react-dom'
import JssProvider from 'react-jss/lib/JssProvider'
import { createGenerateClassName, createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import App from './index'
import theme from './styles/theme'

class Client extends React.Component {
  componentDidMount() {
    const jssStyles = document.getElementById('jss-server-side')
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }

  render() {
    return <App />
  }
}

ReactDOM.hydrate(
  <JssProvider generateClassName={createGenerateClassName()}>
    <MuiThemeProvider theme={createMuiTheme(theme)}>
      <Client />
    </MuiThemeProvider>
  </JssProvider>,
  document.getElementById('app'))
